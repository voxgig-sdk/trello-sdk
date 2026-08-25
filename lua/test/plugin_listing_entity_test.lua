-- PluginListing entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("PluginListingEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:PluginListing(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = plugin_listing_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "plugin_listing." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_PLUGIN_LISTING_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local plugin_listing_ref01_ent = client:PluginListing(nil)
    local plugin_listing_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.plugin_listing"), "plugin_listing_ref01"))
    plugin_listing_ref01_data["id_plugin"] = setup.idmap["id_plugin01"]

    local plugin_listing_ref01_data_result, err = plugin_listing_ref01_ent:create(plugin_listing_ref01_data, nil)
    assert.is_nil(err)
    plugin_listing_ref01_data = helpers.to_map(type(plugin_listing_ref01_data_result) == 'table' and plugin_listing_ref01_data_result.data_get and plugin_listing_ref01_data_result:data_get() or plugin_listing_ref01_data_result)
    assert.is_not_nil(plugin_listing_ref01_data)
    assert.is_not_nil(plugin_listing_ref01_data["id"])

    -- UPDATE
    local plugin_listing_ref01_data_up0_up = {
      id = plugin_listing_ref01_data["id"],
      ["id_plugin"] = setup.idmap["id_plugin"],
    }

    local plugin_listing_ref01_markdef_up0_name = "description"
    local plugin_listing_ref01_markdef_up0_value = "Mark01-plugin_listing_ref01_" .. tostring(setup.now)
    plugin_listing_ref01_data_up0_up[plugin_listing_ref01_markdef_up0_name] = plugin_listing_ref01_markdef_up0_value

    local plugin_listing_ref01_resdata_up0_result, err = plugin_listing_ref01_ent:update(plugin_listing_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local plugin_listing_ref01_resdata_up0 = helpers.to_map(type(plugin_listing_ref01_resdata_up0_result) == 'table' and plugin_listing_ref01_resdata_up0_result.data_get and plugin_listing_ref01_resdata_up0_result:data_get() or plugin_listing_ref01_resdata_up0_result)
    assert.is_not_nil(plugin_listing_ref01_resdata_up0)
    assert.are.equal(plugin_listing_ref01_resdata_up0["id"], plugin_listing_ref01_data_up0_up["id"])
    assert.are.equal(plugin_listing_ref01_resdata_up0[plugin_listing_ref01_markdef_up0_name], plugin_listing_ref01_markdef_up0_value)

  end)
end)

function plugin_listing_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/plugin_listing/PluginListingTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read plugin_listing test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "plugin_listing01", "plugin_listing02", "plugin_listing03", "plugin01", "plugin02", "plugin03", "id_plugin01" },
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
  local entid_env_raw = os.getenv("TRELLO_TEST_PLUGIN_LISTING_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_PLUGIN_LISTING_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_PLUGIN_LISTING_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["id_plugin"] == nil then
    idmap_resolved["id_plugin"] = idmap_resolved["id_plugin01"]
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
