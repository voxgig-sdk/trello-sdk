# CheckItem entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestCheckItemEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.CheckItem(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _check_item_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "check_item." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_CHECK_ITEM_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        check_item_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.check_item")))
        check_item_ref01_data = None
        if len(check_item_ref01_data_raw) > 0:
            check_item_ref01_data = helpers.to_map(check_item_ref01_data_raw[0][1])

        # UPDATE
        check_item_ref01_ent = client.CheckItem(None)
        check_item_ref01_data_up0_up = {
            "id": check_item_ref01_data["id"],
            "checklist_id": setup["idmap"]["checklist_id"],
            "id_card": setup["idmap"]["id_card"],
        }

        check_item_ref01_markdef_up0_name = "idChecklist"
        check_item_ref01_markdef_up0_value = "Mark01-check_item_ref01_" + str(setup["now"])
        check_item_ref01_data_up0_up[check_item_ref01_markdef_up0_name] = check_item_ref01_markdef_up0_value

        check_item_ref01_resdata_up0 = helpers.to_map(runner.entity_data(check_item_ref01_ent.update(check_item_ref01_data_up0_up, None)))
        assert check_item_ref01_resdata_up0 is not None
        assert check_item_ref01_resdata_up0["id"] == check_item_ref01_data_up0_up["id"]
        assert check_item_ref01_resdata_up0[check_item_ref01_markdef_up0_name] == check_item_ref01_markdef_up0_value

        # LOAD
        check_item_ref01_match_dt0 = {
            "id": check_item_ref01_data["id"],
        }
        check_item_ref01_data_dt0_loaded = check_item_ref01_ent.load(check_item_ref01_match_dt0, None)
        check_item_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(check_item_ref01_data_dt0_loaded))
        assert check_item_ref01_data_dt0_load_result is not None
        assert check_item_ref01_data_dt0_load_result["id"] == check_item_ref01_data["id"]



def _check_item_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/check_item/CheckItemTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["check_item01", "check_item02", "check_item03", "card01", "card02", "card03", "checklist01", "checklist02", "checklist03", "id_card01"],
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
        "TRELLO_TEST_CHECK_ITEM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_CHECK_ITEM_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_CHECK_ITEM_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("checklist_id") is None:
        idmap_resolved["checklist_id"] = idmap_resolved.get("checklist01")
    if idmap_resolved.get("id_card") is None:
        idmap_resolved["id_card"] = idmap_resolved.get("id_card01")

    if env.get("TRELLO_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
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
