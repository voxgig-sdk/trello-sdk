-- IdEmailList entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("IdEmailListEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:IdEmailList(nil)
    assert.is_not_nil(ent)
  end)

  it("should run basic flow", function()
    local setup = id_email_list_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"update"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "id_email_list." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_ID_EMAIL_LIST_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- Bootstrap entity data from existing test data.
    local id_email_list_ref01_data_raw = vs.items(helpers.to_map(
      vs.getpath(setup.data, "existing.id_email_list")))
    local id_email_list_ref01_data = nil
    if #id_email_list_ref01_data_raw > 0 then
      id_email_list_ref01_data = helpers.to_map(id_email_list_ref01_data_raw[1][2])
    end

    -- UPDATE
    local id_email_list_ref01_ent = client:IdEmailList(nil)
    local id_email_list_ref01_data_up0_up = {
    }

    local id_email_list_ref01_resdata_up0_result, err = id_email_list_ref01_ent:update(id_email_list_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local id_email_list_ref01_resdata_up0 = helpers.to_map(type(id_email_list_ref01_resdata_up0_result) == 'table' and id_email_list_ref01_resdata_up0_result.data_get and id_email_list_ref01_resdata_up0_result:data_get() or id_email_list_ref01_resdata_up0_result)
    assert.is_not_nil(id_email_list_ref01_resdata_up0)

  end)
end)

function id_email_list_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/id_email_list/IdEmailListTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read id_email_list test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "id_email_list01", "id_email_list02", "id_email_list03", "board01", "board02", "board03" },
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
  local entid_env_raw = os.getenv("TRELLO_TEST_ID_EMAIL_LIST_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_ID_EMAIL_LIST_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_ID_EMAIL_LIST_ENTID"])
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
