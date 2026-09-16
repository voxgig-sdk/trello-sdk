-- Trello SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("trello_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local TrelloSDK = {}
TrelloSDK.__index = TrelloSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

TrelloSDK._make_feature = _make_feature


function TrelloSDK.new(options)
  local self = setmetatable({}, TrelloSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config_shared")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- CONSUMED, not kept. `extend` holds feature INSTANCES, and every shipped
  -- feature's init stores `self.client = ctx.client` - so leaving the list
  -- in self.options makes the options map CYCLIC (client.options.extend[1]
  -- .client == client), and options_map()'s vs.clone, which has no cycle
  -- guard, blew the stack on the first prepare_auth of any client built with
  -- an extend feature. The instances live on self.features from here on,
  -- which is the only place anything reads them; the SAME table is
  -- self._rootctx.options, so the root context loses the key too.
  self.options["extend"] = nil

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: debug
  -- feature: idempotency
  -- feature: metrics
  -- feature: paging
  -- feature: ratelimit
  -- feature: retry
  -- feature: test
  -- feature: timeout


  return self
end


function TrelloSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function TrelloSDK:get_utility()
  return Utility.copy(self._utility)
end


function TrelloSDK:get_root_ctx()
  return self._rootctx
end


function TrelloSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function TrelloSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function TrelloSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function TrelloSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "TrelloSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function TrelloSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function TrelloSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "TrelloSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:Action():list() / client:Action():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Action(data)
  local EntityMod = require("entity.action_entity")
  if data == nil then
    if self._action == nil then
      self._action = EntityMod.new(self, nil)
    end
    return self._action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ActionReactionsSummary():list() / client:ActionReactionsSummary():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ActionReactionsSummary(data)
  local EntityMod = require("entity.action_reactions_summary_entity")
  if data == nil then
    if self._action_reactions_summary == nil then
      self._action_reactions_summary = EntityMod.new(self, nil)
    end
    return self._action_reactions_summary
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Admin():list() / client:Admin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Admin(data)
  local EntityMod = require("entity.admin_entity")
  if data == nil then
    if self._admin == nil then
      self._admin = EntityMod.new(self, nil)
    end
    return self._admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Application():list() / client:Application():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Application(data)
  local EntityMod = require("entity.application_entity")
  if data == nil then
    if self._application == nil then
      self._application = EntityMod.new(self, nil)
    end
    return self._application
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ApplicationCompliance():list() / client:ApplicationCompliance():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ApplicationCompliance(data)
  local EntityMod = require("entity.application_compliance_entity")
  if data == nil then
    if self._application_compliance == nil then
      self._application_compliance = EntityMod.new(self, nil)
    end
    return self._application_compliance
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssociatedDomain():list() / client:AssociatedDomain():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:AssociatedDomain(data)
  local EntityMod = require("entity.associated_domain_entity")
  if data == nil then
    if self._associated_domain == nil then
      self._associated_domain = EntityMod.new(self, nil)
    end
    return self._associated_domain
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Attachment():list() / client:Attachment():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Attachment(data)
  local EntityMod = require("entity.attachment_entity")
  if data == nil then
    if self._attachment == nil then
      self._attachment = EntityMod.new(self, nil)
    end
    return self._attachment
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Batch():list() / client:Batch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Batch(data)
  local EntityMod = require("entity.batch_entity")
  if data == nil then
    if self._batch == nil then
      self._batch = EntityMod.new(self, nil)
    end
    return self._batch
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Board():list() / client:Board():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Board(data)
  local EntityMod = require("entity.board_entity")
  if data == nil then
    if self._board == nil then
      self._board = EntityMod.new(self, nil)
    end
    return self._board
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BoardBackground():list() / client:BoardBackground():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:BoardBackground(data)
  local EntityMod = require("entity.board_background_entity")
  if data == nil then
    if self._board_background == nil then
      self._board_background = EntityMod.new(self, nil)
    end
    return self._board_background
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BoardPlugin():list() / client:BoardPlugin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:BoardPlugin(data)
  local EntityMod = require("entity.board_plugin_entity")
  if data == nil then
    if self._board_plugin == nil then
      self._board_plugin = EntityMod.new(self, nil)
    end
    return self._board_plugin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:BoardStar():list() / client:BoardStar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:BoardStar(data)
  local EntityMod = require("entity.board_star_entity")
  if data == nil then
    if self._board_star == nil then
      self._board_star = EntityMod.new(self, nil)
    end
    return self._board_star
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Bulk():list() / client:Bulk():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Bulk(data)
  local EntityMod = require("entity.bulk_entity")
  if data == nil then
    if self._bulk == nil then
      self._bulk = EntityMod.new(self, nil)
    end
    return self._bulk
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Card():list() / client:Card():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Card(data)
  local EntityMod = require("entity.card_entity")
  if data == nil then
    if self._card == nil then
      self._card = EntityMod.new(self, nil)
    end
    return self._card
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CardCheckItemState():list() / client:CardCheckItemState():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CardCheckItemState(data)
  local EntityMod = require("entity.card_check_item_state_entity")
  if data == nil then
    if self._card_check_item_state == nil then
      self._card_check_item_state = EntityMod.new(self, nil)
    end
    return self._card_check_item_state
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CardList():list() / client:CardList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CardList(data)
  local EntityMod = require("entity.card_list_entity")
  if data == nil then
    if self._card_list == nil then
      self._card_list = EntityMod.new(self, nil)
    end
    return self._card_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CheckItem():list() / client:CheckItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CheckItem(data)
  local EntityMod = require("entity.check_item_entity")
  if data == nil then
    if self._check_item == nil then
      self._check_item = EntityMod.new(self, nil)
    end
    return self._check_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Checklist():list() / client:Checklist():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Checklist(data)
  local EntityMod = require("entity.checklist_entity")
  if data == nil then
    if self._checklist == nil then
      self._checklist = EntityMod.new(self, nil)
    end
    return self._checklist
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ClaimableOrganization():list() / client:ClaimableOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ClaimableOrganization(data)
  local EntityMod = require("entity.claimable_organization_entity")
  if data == nil then
    if self._claimable_organization == nil then
      self._claimable_organization = EntityMod.new(self, nil)
    end
    return self._claimable_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomBoardBackground():list() / client:CustomBoardBackground():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CustomBoardBackground(data)
  local EntityMod = require("entity.custom_board_background_entity")
  if data == nil then
    if self._custom_board_background == nil then
      self._custom_board_background = EntityMod.new(self, nil)
    end
    return self._custom_board_background
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomEmoji():list() / client:CustomEmoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CustomEmoji(data)
  local EntityMod = require("entity.custom_emoji_entity")
  if data == nil then
    if self._custom_emoji == nil then
      self._custom_emoji = EntityMod.new(self, nil)
    end
    return self._custom_emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomField():list() / client:CustomField():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CustomField(data)
  local EntityMod = require("entity.custom_field_entity")
  if data == nil then
    if self._custom_field == nil then
      self._custom_field = EntityMod.new(self, nil)
    end
    return self._custom_field
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomFieldItem():list() / client:CustomFieldItem():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CustomFieldItem(data)
  local EntityMod = require("entity.custom_field_item_entity")
  if data == nil then
    if self._custom_field_item == nil then
      self._custom_field_item = EntityMod.new(self, nil)
    end
    return self._custom_field_item
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CustomSticker():list() / client:CustomSticker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:CustomSticker(data)
  local EntityMod = require("entity.custom_sticker_entity")
  if data == nil then
    if self._custom_sticker == nil then
      self._custom_sticker = EntityMod.new(self, nil)
    end
    return self._custom_sticker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmailPosition():list() / client:EmailPosition():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:EmailPosition(data)
  local EntityMod = require("entity.email_position_entity")
  if data == nil then
    if self._email_position == nil then
      self._email_position = EntityMod.new(self, nil)
    end
    return self._email_position
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Emoji():list() / client:Emoji():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Emoji(data)
  local EntityMod = require("entity.emoji_entity")
  if data == nil then
    if self._emoji == nil then
      self._emoji = EntityMod.new(self, nil)
    end
    return self._emoji
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Enterpris():list() / client:Enterpris():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Enterpris(data)
  local EntityMod = require("entity.enterpris_entity")
  if data == nil then
    if self._enterpris == nil then
      self._enterpris = EntityMod.new(self, nil)
    end
    return self._enterpris
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterprisSignupUrl():list() / client:EnterprisSignupUrl():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:EnterprisSignupUrl(data)
  local EntityMod = require("entity.enterpris_signup_url_entity")
  if data == nil then
    if self._enterpris_signup_url == nil then
      self._enterpris_signup_url = EntityMod.new(self, nil)
    end
    return self._enterpris_signup_url
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseAdmin():list() / client:EnterpriseAdmin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:EnterpriseAdmin(data)
  local EntityMod = require("entity.enterprise_admin_entity")
  if data == nil then
    if self._enterprise_admin == nil then
      self._enterprise_admin = EntityMod.new(self, nil)
    end
    return self._enterprise_admin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnterpriseAuditLog():list() / client:EnterpriseAuditLog():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:EnterpriseAuditLog(data)
  local EntityMod = require("entity.enterprise_audit_log_entity")
  if data == nil then
    if self._enterprise_audit_log == nil then
      self._enterprise_audit_log = EntityMod.new(self, nil)
    end
    return self._enterprise_audit_log
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Export():list() / client:Export():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Export(data)
  local EntityMod = require("entity.export_entity")
  if data == nil then
    if self._export == nil then
      self._export = EntityMod.new(self, nil)
    end
    return self._export
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ExportDownload():list() / client:ExportDownload():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ExportDownload(data)
  local EntityMod = require("entity.export_download_entity")
  if data == nil then
    if self._export_download == nil then
      self._export_download = EntityMod.new(self, nil)
    end
    return self._export_download
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Generate():list() / client:Generate():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Generate(data)
  local EntityMod = require("entity.generate_entity")
  if data == nil then
    if self._generate == nil then
      self._generate = EntityMod.new(self, nil)
    end
    return self._generate
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IdEmailList():list() / client:IdEmailList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:IdEmailList(data)
  local EntityMod = require("entity.id_email_list_entity")
  if data == nil then
    if self._id_email_list == nil then
      self._id_email_list = EntityMod.new(self, nil)
    end
    return self._id_email_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IdLabel():list() / client:IdLabel():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:IdLabel(data)
  local EntityMod = require("entity.id_label_entity")
  if data == nil then
    if self._id_label == nil then
      self._id_label = EntityMod.new(self, nil)
    end
    return self._id_label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:IdMember():list() / client:IdMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:IdMember(data)
  local EntityMod = require("entity.id_member_entity")
  if data == nil then
    if self._id_member == nil then
      self._id_member = EntityMod.new(self, nil)
    end
    return self._id_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Label():list() / client:Label():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Label(data)
  local EntityMod = require("entity.label_entity")
  if data == nil then
    if self._label == nil then
      self._label = EntityMod.new(self, nil)
    end
    return self._label
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:List():list() / client:List():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:List(data)
  local EntityMod = require("entity.list_entity")
  if data == nil then
    if self._list == nil then
      self._list = EntityMod.new(self, nil)
    end
    return self._list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Member():list() / client:Member():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Member(data)
  local EntityMod = require("entity.member_entity")
  if data == nil then
    if self._member == nil then
      self._member = EntityMod.new(self, nil)
    end
    return self._member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MemberPrivacy():list() / client:MemberPrivacy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:MemberPrivacy(data)
  local EntityMod = require("entity.member_privacy_entity")
  if data == nil then
    if self._member_privacy == nil then
      self._member_privacy = EntityMod.new(self, nil)
    end
    return self._member_privacy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MembersVoted():list() / client:MembersVoted():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:MembersVoted(data)
  local EntityMod = require("entity.members_voted_entity")
  if data == nil then
    if self._members_voted == nil then
      self._members_voted = EntityMod.new(self, nil)
    end
    return self._members_voted
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Membership():list() / client:Membership():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Membership(data)
  local EntityMod = require("entity.membership_entity")
  if data == nil then
    if self._membership == nil then
      self._membership = EntityMod.new(self, nil)
    end
    return self._membership
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:MostRecent():list() / client:MostRecent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:MostRecent(data)
  local EntityMod = require("entity.most_recent_entity")
  if data == nil then
    if self._most_recent == nil then
      self._most_recent = EntityMod.new(self, nil)
    end
    return self._most_recent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NewBillableGuest():list() / client:NewBillableGuest():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:NewBillableGuest(data)
  local EntityMod = require("entity.new_billable_guest_entity")
  if data == nil then
    if self._new_billable_guest == nil then
      self._new_billable_guest = EntityMod.new(self, nil)
    end
    return self._new_billable_guest
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Notification():list() / client:Notification():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Notification(data)
  local EntityMod = require("entity.notification_entity")
  if data == nil then
    if self._notification == nil then
      self._notification = EntityMod.new(self, nil)
    end
    return self._notification
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationChannelSetting():list() / client:NotificationChannelSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:NotificationChannelSetting(data)
  local EntityMod = require("entity.notification_channel_setting_entity")
  if data == nil then
    if self._notification_channel_setting == nil then
      self._notification_channel_setting = EntityMod.new(self, nil)
    end
    return self._notification_channel_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationList():list() / client:NotificationList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:NotificationList(data)
  local EntityMod = require("entity.notification_list_entity")
  if data == nil then
    if self._notification_list == nil then
      self._notification_list = EntityMod.new(self, nil)
    end
    return self._notification_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationMemberCreator():list() / client:NotificationMemberCreator():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:NotificationMemberCreator(data)
  local EntityMod = require("entity.notification_member_creator_entity")
  if data == nil then
    if self._notification_member_creator == nil then
      self._notification_member_creator = EntityMod.new(self, nil)
    end
    return self._notification_member_creator
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:NotificationsChannelSetting():list() / client:NotificationsChannelSetting():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:NotificationsChannelSetting(data)
  local EntityMod = require("entity.notifications_channel_setting_entity")
  if data == nil then
    if self._notifications_channel_setting == nil then
      self._notifications_channel_setting = EntityMod.new(self, nil)
    end
    return self._notifications_channel_setting
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Option():list() / client:Option():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Option(data)
  local EntityMod = require("entity.option_entity")
  if data == nil then
    if self._option == nil then
      self._option = EntityMod.new(self, nil)
    end
    return self._option
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:OrgInviteRestrict():list() / client:OrgInviteRestrict():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:OrgInviteRestrict(data)
  local EntityMod = require("entity.org_invite_restrict_entity")
  if data == nil then
    if self._org_invite_restrict == nil then
      self._org_invite_restrict = EntityMod.new(self, nil)
    end
    return self._org_invite_restrict
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Organization():list() / client:Organization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Organization(data)
  local EntityMod = require("entity.organization_entity")
  if data == nil then
    if self._organization == nil then
      self._organization = EntityMod.new(self, nil)
    end
    return self._organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PendingOrganization():list() / client:PendingOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:PendingOrganization(data)
  local EntityMod = require("entity.pending_organization_entity")
  if data == nil then
    if self._pending_organization == nil then
      self._pending_organization = EntityMod.new(self, nil)
    end
    return self._pending_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Plugin():list() / client:Plugin():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Plugin(data)
  local EntityMod = require("entity.plugin_entity")
  if data == nil then
    if self._plugin == nil then
      self._plugin = EntityMod.new(self, nil)
    end
    return self._plugin
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PluginData():list() / client:PluginData():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:PluginData(data)
  local EntityMod = require("entity.plugin_data_entity")
  if data == nil then
    if self._plugin_data == nil then
      self._plugin_data = EntityMod.new(self, nil)
    end
    return self._plugin_data
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PluginListing():list() / client:PluginListing():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:PluginListing(data)
  local EntityMod = require("entity.plugin_listing_entity")
  if data == nil then
    if self._plugin_listing == nil then
      self._plugin_listing = EntityMod.new(self, nil)
    end
    return self._plugin_listing
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Reaction():list() / client:Reaction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Reaction(data)
  local EntityMod = require("entity.reaction_entity")
  if data == nil then
    if self._reaction == nil then
      self._reaction = EntityMod.new(self, nil)
    end
    return self._reaction
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Read():list() / client:Read():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Read(data)
  local EntityMod = require("entity.read_entity")
  if data == nil then
    if self._read == nil then
      self._read = EntityMod.new(self, nil)
    end
    return self._read
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:SavedSearch():list() / client:SavedSearch():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:SavedSearch(data)
  local EntityMod = require("entity.saved_search_entity")
  if data == nil then
    if self._saved_search == nil then
      self._saved_search = EntityMod.new(self, nil)
    end
    return self._saved_search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Search():list() / client:Search():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Search(data)
  local EntityMod = require("entity.search_entity")
  if data == nil then
    if self._search == nil then
      self._search = EntityMod.new(self, nil)
    end
    return self._search
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShowSidebar():list() / client:ShowSidebar():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ShowSidebar(data)
  local EntityMod = require("entity.show_sidebar_entity")
  if data == nil then
    if self._show_sidebar == nil then
      self._show_sidebar = EntityMod.new(self, nil)
    end
    return self._show_sidebar
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShowSidebarActivity():list() / client:ShowSidebarActivity():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ShowSidebarActivity(data)
  local EntityMod = require("entity.show_sidebar_activity_entity")
  if data == nil then
    if self._show_sidebar_activity == nil then
      self._show_sidebar_activity = EntityMod.new(self, nil)
    end
    return self._show_sidebar_activity
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShowSidebarBoardAction():list() / client:ShowSidebarBoardAction():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ShowSidebarBoardAction(data)
  local EntityMod = require("entity.show_sidebar_board_action_entity")
  if data == nil then
    if self._show_sidebar_board_action == nil then
      self._show_sidebar_board_action = EntityMod.new(self, nil)
    end
    return self._show_sidebar_board_action
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ShowSidebarMember():list() / client:ShowSidebarMember():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:ShowSidebarMember(data)
  local EntityMod = require("entity.show_sidebar_member_entity")
  if data == nil then
    if self._show_sidebar_member == nil then
      self._show_sidebar_member = EntityMod.new(self, nil)
    end
    return self._show_sidebar_member
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Sticker():list() / client:Sticker():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Sticker(data)
  local EntityMod = require("entity.sticker_entity")
  if data == nil then
    if self._sticker == nil then
      self._sticker = EntityMod.new(self, nil)
    end
    return self._sticker
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Tag():list() / client:Tag():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Tag(data)
  local EntityMod = require("entity.tag_entity")
  if data == nil then
    if self._tag == nil then
      self._tag = EntityMod.new(self, nil)
    end
    return self._tag
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Token():list() / client:Token():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Token(data)
  local EntityMod = require("entity.token_entity")
  if data == nil then
    if self._token == nil then
      self._token = EntityMod.new(self, nil)
    end
    return self._token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TransferrableOrganization():list() / client:TransferrableOrganization():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:TransferrableOrganization(data)
  local EntityMod = require("entity.transferrable_organization_entity")
  if data == nil then
    if self._transferrable_organization == nil then
      self._transferrable_organization = EntityMod.new(self, nil)
    end
    return self._transferrable_organization
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:TrelloList():list() / client:TrelloList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:TrelloList(data)
  local EntityMod = require("entity.trello_list_entity")
  if data == nil then
    if self._trello_list == nil then
      self._trello_list = EntityMod.new(self, nil)
    end
    return self._trello_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Webhook():list() / client:Webhook():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function TrelloSDK:Webhook(data)
  local EntityMod = require("entity.webhook_entity")
  if data == nil then
    if self._webhook == nil then
      self._webhook = EntityMod.new(self, nil)
    end
    return self._webhook
  end
  return EntityMod.new(self, data)
end




function TrelloSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = TrelloSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return TrelloSDK
