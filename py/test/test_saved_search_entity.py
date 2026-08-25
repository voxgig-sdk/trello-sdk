# SavedSearch entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestSavedSearchEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.SavedSearch(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "saved_search": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = TrelloSDK.test(seed, None)
        seen = list(base.SavedSearch(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from trello_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = TrelloSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.SavedSearch(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _saved_search_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "saved_search." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_SAVED_SEARCH_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        saved_search_ref01_ent = client.SavedSearch(None)
        saved_search_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.saved_search"), "saved_search_ref01"))
        saved_search_ref01_data["member_id"] = setup["idmap"]["member01"]

        saved_search_ref01_data = helpers.to_map(runner.entity_data(saved_search_ref01_ent.create(saved_search_ref01_data, None)))
        assert saved_search_ref01_data is not None
        assert saved_search_ref01_data["id"] is not None

        # LIST
        saved_search_ref01_match = {
            "member_id": setup["idmap"]["member01"],
        }

        saved_search_ref01_list_result = saved_search_ref01_ent.list(saved_search_ref01_match, None)
        assert isinstance(saved_search_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(saved_search_ref01_list_result),
            {"id": saved_search_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        saved_search_ref01_data_up0_up = {
            "id": saved_search_ref01_data["id"],
            "member_id": setup["idmap"]["member_id"],
        }

        saved_search_ref01_markdef_up0_name = "name"
        saved_search_ref01_markdef_up0_value = "Mark01-saved_search_ref01_" + str(setup["now"])
        saved_search_ref01_data_up0_up[saved_search_ref01_markdef_up0_name] = saved_search_ref01_markdef_up0_value

        saved_search_ref01_resdata_up0 = helpers.to_map(runner.entity_data(saved_search_ref01_ent.update(saved_search_ref01_data_up0_up, None)))
        assert saved_search_ref01_resdata_up0 is not None
        assert saved_search_ref01_resdata_up0["id"] == saved_search_ref01_data_up0_up["id"]
        assert saved_search_ref01_resdata_up0[saved_search_ref01_markdef_up0_name] == saved_search_ref01_markdef_up0_value

        # LOAD
        saved_search_ref01_match_dt0 = {
            "id": saved_search_ref01_data["id"],
        }
        saved_search_ref01_data_dt0_loaded = saved_search_ref01_ent.load(saved_search_ref01_match_dt0, None)
        saved_search_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(saved_search_ref01_data_dt0_loaded))
        assert saved_search_ref01_data_dt0_load_result is not None
        assert saved_search_ref01_data_dt0_load_result["id"] == saved_search_ref01_data["id"]

        # REMOVE
        saved_search_ref01_match_rm0 = {
            "id": saved_search_ref01_data["id"],
        }
        saved_search_ref01_ent.remove(saved_search_ref01_match_rm0, None)

        # LIST
        saved_search_ref01_match_rt0 = {
            "member_id": setup["idmap"]["member01"],
        }

        saved_search_ref01_list_rt0_result = saved_search_ref01_ent.list(saved_search_ref01_match_rt0, None)
        assert isinstance(saved_search_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(saved_search_ref01_list_rt0_result),
            {"id": saved_search_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _saved_search_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/saved_search/SavedSearchTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["saved_search01", "saved_search02", "saved_search03", "member01", "member02", "member03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "TRELLO_TEST_SAVED_SEARCH_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_SAVED_SEARCH_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_SAVED_SEARCH_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("member_id") is None:
        idmap_resolved["member_id"] = idmap_resolved.get("member01")

    if env.get("TRELLO_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("TRELLO_APIKEY"),
            },
            extra or {},
        ])
        client = TrelloSDK(helpers.to_map(merged_opts))

    _live = env.get("TRELLO_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("TRELLO_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
