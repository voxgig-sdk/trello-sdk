# MembersVoted entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestMembersVotedEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.MembersVoted(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _members_voted_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "members_voted." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_MEMBERS_VOTED_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        members_voted_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.members_voted")))
        members_voted_ref01_data = None
        if len(members_voted_ref01_data_raw) > 0:
            members_voted_ref01_data = helpers.to_map(members_voted_ref01_data_raw[0][1])

        # LOAD
        members_voted_ref01_ent = client.MembersVoted(None)
        members_voted_ref01_match_dt0 = {
            "id": members_voted_ref01_data["id"],
        }
        members_voted_ref01_data_dt0_loaded = members_voted_ref01_ent.load(members_voted_ref01_match_dt0, None)
        members_voted_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(members_voted_ref01_data_dt0_loaded))
        assert members_voted_ref01_data_dt0_load_result is not None
        assert members_voted_ref01_data_dt0_load_result["id"] == members_voted_ref01_data["id"]



def _members_voted_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/members_voted/MembersVotedTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["members_voted01", "members_voted02", "members_voted03", "card01", "card02", "card03"],
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
        "TRELLO_TEST_MEMBERS_VOTED_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_MEMBERS_VOTED_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_MEMBERS_VOTED_ENTID"))
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
