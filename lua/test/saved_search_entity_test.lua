-- SavedSearch entity test

local json = require("dkjson")
local vs = require("utility.struct.struct")
local sdk = require("trello_sdk")
local helpers = require("core.helpers")
local runner = require("test.runner")

local _test_dir = debug.getinfo(1, "S").source:match("^@(.+/)")  or "./"

describe("SavedSearchEntity", function()
  it("should create instance", function()
    local testsdk = sdk.test(nil, nil)
    local ent = testsdk:SavedSearch(nil)
    assert.is_not_nil(ent)
  end)

  -- Feature #4: the entity stream(action, ...) method runs the op pipeline and
  -- returns an iterator over result items. With the streaming feature active it
  -- yields the feature's incremental output; otherwise it falls back to the
  -- materialised list so stream always yields.
  it("should stream", function()
    local seed = {
      entity = {
        ["saved_search"] = {
          s1 = { id = "s1" },
          s2 = { id = "s2" },
          s3 = { id = "s3" },
        },
      },
    }

    -- Fallback: streaming inactive -> yields the materialised list items.
    local base = sdk.test(seed, nil)
    local seen = {}
    for item in base:SavedSearch(nil):stream("list", nil, nil) do
      table.insert(seen, item)
    end
    assert.are.equal(3, #seen)

    -- Inbound: streaming active -> yields each item from the feature.
    local config = require("config_shared")()
    if type(config.feature) == "table" and config.feature.streaming ~= nil then
      local streamsdk = sdk.test(seed, { feature = { streaming = { active = true } } })
      local got = {}
      for item in streamsdk:SavedSearch(nil):stream("list", nil, nil) do
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
    local setup = saved_search_basic_setup(nil)
    -- Per-op sdk-test-control.json skip.
    local _live = setup.live or false
    for _, _op in ipairs({"create", "list", "update", "load", "remove"}) do
      local _should_skip, _reason = runner.is_control_skipped("entityOp", "saved_search." .. _op, _live and "live" or "unit")
      if _should_skip then
        pending(_reason or "skipped via sdk-test-control.json")
        return
      end
    end
    -- The basic flow consumes synthetic IDs from the fixture. In live mode
    -- without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup.synthetic_only then
      pending("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_SAVED_SEARCH_ENTID JSON to run live")
      return
    end
    local client = setup.client

    -- CREATE
    local saved_search_ref01_ent = client:SavedSearch(nil)
    local saved_search_ref01_data = helpers.to_map(vs.getprop(
      vs.getpath(setup.data, "new.saved_search"), "saved_search_ref01"))
    saved_search_ref01_data["member_id"] = setup.idmap["member01"]

    local saved_search_ref01_data_result, err = saved_search_ref01_ent:create(saved_search_ref01_data, nil)
    assert.is_nil(err)
    saved_search_ref01_data = helpers.to_map(type(saved_search_ref01_data_result) == 'table' and saved_search_ref01_data_result.data_get and saved_search_ref01_data_result:data_get() or saved_search_ref01_data_result)
    assert.is_not_nil(saved_search_ref01_data)
    assert.is_not_nil(saved_search_ref01_data["id"])

    -- LIST
    local saved_search_ref01_match = {
      ["member_id"] = setup.idmap["member01"],
    }

    local saved_search_ref01_list_result, err = saved_search_ref01_ent:list(saved_search_ref01_match, nil)
    assert.is_nil(err)
    assert.is_table(saved_search_ref01_list_result)

    local found_item = vs.select(
      runner.entity_list_to_data(saved_search_ref01_list_result),
      { id = saved_search_ref01_data["id"] })
    assert.is_false(vs.isempty(found_item))

    -- UPDATE
    local saved_search_ref01_data_up0_up = {
      id = saved_search_ref01_data["id"],
      ["member_id"] = setup.idmap["member_id"],
    }

    local saved_search_ref01_markdef_up0_name = "name"
    local saved_search_ref01_markdef_up0_value = "Mark01-saved_search_ref01_" .. tostring(setup.now)
    saved_search_ref01_data_up0_up[saved_search_ref01_markdef_up0_name] = saved_search_ref01_markdef_up0_value

    local saved_search_ref01_resdata_up0_result, err = saved_search_ref01_ent:update(saved_search_ref01_data_up0_up, nil)
    assert.is_nil(err)
    local saved_search_ref01_resdata_up0 = helpers.to_map(type(saved_search_ref01_resdata_up0_result) == 'table' and saved_search_ref01_resdata_up0_result.data_get and saved_search_ref01_resdata_up0_result:data_get() or saved_search_ref01_resdata_up0_result)
    assert.is_not_nil(saved_search_ref01_resdata_up0)
    assert.are.equal(saved_search_ref01_resdata_up0["id"], saved_search_ref01_data_up0_up["id"])
    assert.are.equal(saved_search_ref01_resdata_up0[saved_search_ref01_markdef_up0_name], saved_search_ref01_markdef_up0_value)

    -- LOAD
    local saved_search_ref01_match_dt0 = {
      id = saved_search_ref01_data["id"],
    }
    local saved_search_ref01_data_dt0_loaded, err = saved_search_ref01_ent:load(saved_search_ref01_match_dt0, nil)
    assert.is_nil(err)
    local saved_search_ref01_data_dt0_load_result = helpers.to_map(type(saved_search_ref01_data_dt0_loaded) == 'table' and saved_search_ref01_data_dt0_loaded.data_get and saved_search_ref01_data_dt0_loaded:data_get() or saved_search_ref01_data_dt0_loaded)
    assert.is_not_nil(saved_search_ref01_data_dt0_load_result)
    assert.are.equal(saved_search_ref01_data_dt0_load_result["id"], saved_search_ref01_data["id"])

    -- REMOVE
    local saved_search_ref01_match_rm0 = {
      id = saved_search_ref01_data["id"],
    }
    local _, err = saved_search_ref01_ent:remove(saved_search_ref01_match_rm0, nil)
    assert.is_nil(err)

    -- LIST
    local saved_search_ref01_match_rt0 = {
      ["member_id"] = setup.idmap["member01"],
    }

    local saved_search_ref01_list_rt0_result, err = saved_search_ref01_ent:list(saved_search_ref01_match_rt0, nil)
    assert.is_nil(err)
    assert.is_table(saved_search_ref01_list_rt0_result)

    local not_found_item = vs.select(
      runner.entity_list_to_data(saved_search_ref01_list_rt0_result),
      { id = saved_search_ref01_data["id"] })
    assert.is_true(vs.isempty(not_found_item))

  end)
end)

function saved_search_basic_setup(extra)
  runner.load_env_local()

  local entity_data_file = _test_dir .. "../../.sdk/test/entity/saved_search/SavedSearchTestData.json"
  local f = io.open(entity_data_file, "r")
  if f == nil then
    error("failed to read saved_search test data: " .. entity_data_file)
  end
  local entity_data_source = f:read("*a")
  f:close()

  local entity_data = json.decode(entity_data_source)

  local options = {}
  options["entity"] = entity_data["existing"]

  local client = sdk.test(options, extra)

  -- Generate idmap via transform.
  local idmap = vs.transform(
    { "saved_search01", "saved_search02", "saved_search03", "member01", "member02", "member03" },
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
  local entid_env_raw = os.getenv("TRELLO_TEST_SAVED_SEARCH_ENTID")
  local idmap_overridden = entid_env_raw ~= nil and entid_env_raw:match("^%s*{") ~= nil

  local env = runner.env_override({
    ["TRELLO_TEST_SAVED_SEARCH_ENTID"] = idmap,
    ["TRELLO_TEST_LIVE"] = "FALSE",
    ["TRELLO_TEST_EXPLAIN"] = "FALSE",
    ["TRELLO_APIKEY"] = "NONE",
  })

  local idmap_resolved = helpers.to_map(
    env["TRELLO_TEST_SAVED_SEARCH_ENTID"])
  if idmap_resolved == nil then
    idmap_resolved = helpers.to_map(idmap)
  end
  if idmap_resolved["member_id"] == nil then
    idmap_resolved["member_id"] = idmap_resolved["member01"]
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
