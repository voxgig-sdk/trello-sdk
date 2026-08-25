# BoardStar entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestBoardStarEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.BoardStar(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "board_star": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = TrelloSDK.test(seed, None)
        seen = list(base.BoardStar(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from trello_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = TrelloSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.BoardStar(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _board_star_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "board_star." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_BOARD_STAR_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        board_star_ref01_ent = client.BoardStar(None)
        board_star_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.board_star"), "board_star_ref01"))
        board_star_ref01_data["member_id"] = setup["idmap"]["member01"]

        board_star_ref01_data = helpers.to_map(runner.entity_data(board_star_ref01_ent.create(board_star_ref01_data, None)))
        assert board_star_ref01_data is not None
        assert board_star_ref01_data["id"] is not None

        # LIST
        board_star_ref01_match = {
            "board_id": setup["idmap"]["board01"],
        }

        board_star_ref01_list_result = board_star_ref01_ent.list(board_star_ref01_match, None)
        assert isinstance(board_star_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(board_star_ref01_list_result),
            {"id": board_star_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        board_star_ref01_data_up0_up = {
            "id": board_star_ref01_data["id"],
            "member_id": setup["idmap"]["member_id"],
        }

        board_star_ref01_markdef_up0_name = "idBoard"
        board_star_ref01_markdef_up0_value = "Mark01-board_star_ref01_" + str(setup["now"])
        board_star_ref01_data_up0_up[board_star_ref01_markdef_up0_name] = board_star_ref01_markdef_up0_value

        board_star_ref01_resdata_up0 = helpers.to_map(runner.entity_data(board_star_ref01_ent.update(board_star_ref01_data_up0_up, None)))
        assert board_star_ref01_resdata_up0 is not None
        assert board_star_ref01_resdata_up0["id"] == board_star_ref01_data_up0_up["id"]
        assert board_star_ref01_resdata_up0[board_star_ref01_markdef_up0_name] == board_star_ref01_markdef_up0_value

        # LOAD
        board_star_ref01_match_dt0 = {
            "id": board_star_ref01_data["id"],
        }
        board_star_ref01_data_dt0_loaded = board_star_ref01_ent.load(board_star_ref01_match_dt0, None)
        board_star_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(board_star_ref01_data_dt0_loaded))
        assert board_star_ref01_data_dt0_load_result is not None
        assert board_star_ref01_data_dt0_load_result["id"] == board_star_ref01_data["id"]

        # REMOVE
        board_star_ref01_match_rm0 = {
            "id": board_star_ref01_data["id"],
        }
        board_star_ref01_ent.remove(board_star_ref01_match_rm0, None)

        # LIST
        board_star_ref01_match_rt0 = {
            "board_id": setup["idmap"]["board01"],
        }

        board_star_ref01_list_rt0_result = board_star_ref01_ent.list(board_star_ref01_match_rt0, None)
        assert isinstance(board_star_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(board_star_ref01_list_rt0_result),
            {"id": board_star_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _board_star_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/board_star/BoardStarTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["board_star01", "board_star02", "board_star03", "member01", "member02", "member03", "board01"],
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
        "TRELLO_TEST_BOARD_STAR_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_BOARD_STAR_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_BOARD_STAR_ENTID"))
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
