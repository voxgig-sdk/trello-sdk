-- Checklist entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("ChecklistEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:Checklist(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = checklist_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "checklist." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CHECKLIST_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local checklist_ref01_ent = client:Checklist(nil)
    local checklist_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.checklist"), "checklist_ref01"))
    checklist_ref01_data["card_id"] = setup.idmap["card01"]

    local checklist_ref01_data_result, err = checklist_ref01_ent:create(checklist_ref01_data, nil)
    assert.is_nil(err)
    checklist_ref01_data = helpers.to_map(type(checklist_ref01_data_result) == 'table' and checklist_ref01_data_result.data_get and checklist_ref01_data_result:data_get() or checklist_ref01_data_result)
    assert.is_not_nil(checklist_ref01_data)
    assert.is_not_nil(checklist_ref01_data["id"])

    -- UPDATE
    local checklist_ref01_data_up0_up = {
      id = checklist_ref01_data["id"],
    }

    local checklist_ref01_resdata_up0_result, err = checklist_ref01_ent:update(checklist_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local checklist_ref01_resdata_up0 = helpers.to_map(type(checklist_ref01_resdata_up0_result) == 'table' and checklist_ref01_resdata_up0_result.data_get and checklist_ref01_resdata_up0_result:data_get() or checklist_ref01_resdata_up0_result)
    assert.is_not_nil(checklist_ref01_resdata_up0)
    assert.are.equal(checklist_ref01_resdata_up0["id"], checklist_ref01_data_up0_up["id"])

    -- LOAD
    local checklist_ref01_match_dt0 = {
      id = checklist_ref01_data["id"],
    }
    local checklist_ref01_data_dt0_loaded, err = checklist_ref01_ent:load(checklist_ref01_match_dt0, nil)
    assert.is_nil(err)
    local checklist_ref01_data_dt0_load_result = helpers.to_map(type(checklist_ref01_data_dt0_loaded) == 'table' and checklist_ref01_data_dt0_loaded.data_get and checklist_ref01_data_dt0_loaded:data_get() or checklist_ref01_data_dt0_loaded)
    assert.is_not_nil(checklist_ref01_data_dt0_load_result)
    assert.are.equal(checklist_ref01_data_dt0_load_result["id"], checklist_ref01_data["id"])

    -- REMOVE
    local checklist_ref01_match_rm0 = {
      id = checklist_ref01_data["id"],
    }
    local _, err = checklist_ref01_ent:remove(checklist_ref01_match_rm0, nil)
    assert.is_nil(err)

  end)
end)

function checklist_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/checklist/ChecklistTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read checklist test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "checklist01", "checklist02", "checklist03", "board01", "board02", "board03", "card01", "card02", "card03" },
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
  local entid_env_raw = os.getenv("TRELLO_TEST_CHECKLIST_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_CHECKLIST_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_CHECKLIST_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
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
