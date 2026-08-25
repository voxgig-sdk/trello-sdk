-- CheckItem entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("CheckItemEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:CheckItem(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = check_item_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update", "load"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "check_item." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CHECK_ITEM_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local check_item_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.check_item")))
    local check_item_ref01_data = nil
    if #check_item_ref01_data_raw > 0 then
      check_item_ref01_data = helpers.to_map(check_item_ref01_data_raw[1][2])
    end

    -- UPDATE
    local check_item_ref01_ent = client:CheckItem(nil)
    local check_item_ref01_data_up0_up = {
      id = check_item_ref01_data["id"],
      ["checklist_id"] = setup.idmap["checklist_id"],
      ["id_card"] = setup.idmap["id_card"],
    }

    local check_item_ref01_markdef_up0_name = "idChecklist"
    local check_item_ref01_markdef_up0_value = "Mark01-check_item_ref01_" .. tostring(setup.now)
    check_item_ref01_data_up0_up[check_item_ref01_markdef_up0_name] = check_item_ref01_markdef_up0_value

    local check_item_ref01_resdata_up0_result, err = check_item_ref01_ent:update(check_item_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local check_item_ref01_resdata_up0 = helpers.to_map(type(check_item_ref01_resdata_up0_result) == 'table' and check_item_ref01_resdata_up0_result.data_get and check_item_ref01_resdata_up0_result:data_get() or check_item_ref01_resdata_up0_result)
    assert.is_not_nil(check_item_ref01_resdata_up0)
    assert.are.equal(check_item_ref01_resdata_up0["id"], check_item_ref01_data_up0_up["id"])
    assert.are.equal(check_item_ref01_resdata_up0[check_item_ref01_markdef_up0_name], check_item_ref01_markdef_up0_value)

    -- LOAD
    local check_item_ref01_match_dt0 = {
      id = check_item_ref01_data["id"],
    }
    local check_item_ref01_data_dt0_loaded, err = check_item_ref01_ent:load(check_item_ref01_match_dt0, nil)
    assert.is_nil(err)
    local check_item_ref01_data_dt0_load_result = helpers.to_map(type(check_item_ref01_data_dt0_loaded) == 'table' and check_item_ref01_data_dt0_loaded.data_get and check_item_ref01_data_dt0_loaded:data_get() or check_item_ref01_data_dt0_loaded)
    assert.is_not_nil(check_item_ref01_data_dt0_load_result)
    assert.are.equal(check_item_ref01_data_dt0_load_result["id"], check_item_ref01_data["id"])

  end)
end)

function check_item_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/check_item/CheckItemTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read check_item test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "check_item01", "check_item02", "check_item03", "card01", "card02", "card03", "checklist01", "checklist02", "checklist03", "id_card01" },
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
  local entid_env_raw = os.getenv("TRELLO_TEST_CHECK_ITEM_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_CHECK_ITEM_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_CHECK_ITEM_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["checklist_id"] == nil then
    idmap_resolved["checklist_id"] = idmap_resolved["checklist01"]
  end
  if idmap_resolved["id_card"] == nil then
    idmap_resolved["id_card"] = idmap_resolved["id_card01"]
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
