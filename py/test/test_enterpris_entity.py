# Enterpris entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestEnterprisEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.Enterpris(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _enterpris_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "enterpris." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_ENTERPRIS_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        enterpris_ref01_ent = client.Enterpris(None)
        enterpris_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.enterpris"), "enterpris_ref01"))

        enterpris_ref01_data = helpers.to_map(runner.entity_data(enterpris_ref01_ent.create(enterpris_ref01_data, None)))
        assert enterpris_ref01_data is not None
        assert enterpris_ref01_data["id"] is not None

        # UPDATE
        enterpris_ref01_data_up0_up = {
            "id": enterpris_ref01_data["id"],
        }

        enterpris_ref01_markdef_up0_name = "dateOrganizationPrefsLastUpdated"
        enterpris_ref01_markdef_up0_value = "Mark01-enterpris_ref01_" + str(setup["now"])
        enterpris_ref01_data_up0_up[enterpris_ref01_markdef_up0_name] = enterpris_ref01_markdef_up0_value

        enterpris_ref01_resdata_up0 = helpers.to_map(runner.entity_data(enterpris_ref01_ent.update(enterpris_ref01_data_up0_up, None)))
        assert enterpris_ref01_resdata_up0 is not None
        assert enterpris_ref01_resdata_up0["id"] == enterpris_ref01_data_up0_up["id"]
        assert enterpris_ref01_resdata_up0[enterpris_ref01_markdef_up0_name] == enterpris_ref01_markdef_up0_value

        # LOAD
        enterpris_ref01_match_dt0 = {
            "id": enterpris_ref01_data["id"],
        }
        enterpris_ref01_data_dt0_loaded = enterpris_ref01_ent.load(enterpris_ref01_match_dt0, None)
        enterpris_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(enterpris_ref01_data_dt0_loaded))
        assert enterpris_ref01_data_dt0_load_result is not None
        assert enterpris_ref01_data_dt0_load_result["id"] == enterpris_ref01_data["id"]



def _enterpris_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/enterpris/EnterprisTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["enterpris01", "enterpris02", "enterpris03"],
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
        "TRELLO_TEST_ENTERPRIS_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_ENTERPRIS_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_ENTERPRIS_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
