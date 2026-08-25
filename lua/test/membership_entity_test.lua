-- Membership entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("MembershipEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Membership(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["membership"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:Membership(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:Membership(nil):stream("list", nil, nil) do
        if vs.islist(item) then
          for _, sub in ipairs(item) do
            table.insert(got, sub)
          end
        else
          table.insert(got, item)
        end
      end
      assert.are.equal(3, #got)
    end
  end)

  it("should run basic flow", function()
    local setup = membership_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"list", "update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "membership." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_MEMBERSHIP_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local membership_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.membership")))
    local membership_ref01_data = nil
    if #membership_ref01_data_raw > 0 then
      membership_ref01_data = helpers.to_map(membership_ref01_data_raw[1][2])
    end

    -- LIST
    local membership_ref01_ent = client:Membership(nil)
    local membership_ref01_match = {
      ["organization_id"] = setup.idmap["organization01"],
    }

    local membership_ref01_list_result, err = membership_ref01_ent:list(membership_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(membership_ref01_list_result)

    -- UPDATE
    local membership_ref01_data_up0_up = {
      id = membership_ref01_data["id"],
      ["board_id"] = setup.idmap["board_id"],
    }

    local membership_ref01_resdata_up0_result, err = membership_ref01_ent:update(membership_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local membership_ref01_resdata_up0 = helpers.to_map(type(membership_ref01_resdata_up0_result) == 'table' and membership_ref01_resdata_up0_result.data_get and membership_ref01_resdata_up0_result:data_get() or membership_ref01_resdata_up0_result)
    assert.is_not_nil(membership_ref01_resdata_up0)
    assert.are.equal(membership_ref01_resdata_up0["id"], membership_ref01_data_up0_up["id"])

    -- LOAD
    local membership_ref01_match_dt0 = {
      id = membership_ref01_data["id"],
    }
    local membership_ref01_data_dt0_loaded, err = membership_ref01_ent:load(membership_ref01_match_dt0, nil)
    assert.is_nil(err)
    local membership_ref01_data_dt0_load_result = helpers.to_map(type(membership_ref01_data_dt0_loaded) == 'table' and membership_ref01_data_dt0_loaded.data_get and membership_ref01_data_dt0_loaded:data_get() or membership_ref01_data_dt0_loaded)
    assert.is_not_nil(membership_ref01_data_dt0_load_result)
    assert.are.equal(membership_ref01_data_dt0_load_result["id"], membership_ref01_data["id"])

  end)
end)

function membership_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/membership/MembershipTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read membership test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "membership01", "membership02", "membership03", "board01", "board02", "board03", "enterpris01", "enterpris02", "enterpris03", "organization01", "organization02", "organization03" },
    {
      ["`$PACK`"] = { "", {
        ["`$KEY`"] = "`$COPY`",
        ["`$VAL`"] = { "`$FORMAT`", "upper", "`$COPY`" },
      }},
    }
  )

  -- Detect ENTID env override before envOverride consumes it. When live
  -- mode is on without a real override, the basic test runs against synthetic
  -- IDs from the fixture and 4xx's. Surface this so the test can skip.
  local entid_env_raw = os.getenv("TRELLO_TEST_MEMBERSHIP_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_MEMBERSHIP_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_MEMBERSHIP_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["board_id"] == nil then
    idmap_resolved["board_id"] = idmap_resolved["board01"]
  end

  if env["TRELLO_TEST_LIVE"] == "TRUE" then
    local merged_opts = vs.merge({
      {
        apikey = env["TRELLO_APIKEY"],
      },
      extra or {},
    })
    client = sdk.new(helpers.to_map(merged_opts))
  end

  local live = env["TRELLO_TEST_LIVE"] == "TRUE"
  return {
    client = client,
    data = entity_data,
    idmap = idmap_resolved,
    env = env,
    explain = env["TRELLO_TEST_EXPLAIN"] == "TRUE",
    live = live,
    synthetic_only = live and not idmap_overridden,
    now = os.time() * 1000,
  }
end
