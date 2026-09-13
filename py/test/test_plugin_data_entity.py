# PluginData entity test

import json
import os
import time

import pytest

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk import TrelloSDK
from trello_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPluginDataEntity:

    def test_should_create_instance(self):
        testsdk = TrelloSDK.test(None, None)
        ent = testsdk.PluginData(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "plugin_data": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = TrelloSDK.test(seed, None)
        seen = list(base.PluginData(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from trello_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = TrelloSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.PluginData(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _plugin_data_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "plugin_data." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set TRELLO_TEST_PLUGIN_DATA_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        plugin_data_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.plugin_data")))
        plugin_data_ref01_data = None
        if len(plugin_data_ref01_data_raw) > 0:
            plugin_data_ref01_data = helpers.to_map(plugin_data_ref01_data_raw[0][1])

        # LIST
        plugin_data_ref01_ent = client.PluginData(None)
        plugin_data_ref01_match = {
            "organization_id": setup["idmap"]["organization01"],
        }

        plugin_data_ref01_list_result = plugin_data_ref01_ent.list(plugin_data_ref01_match, None)
        assert isinstance(plugin_data_ref01_list_result, list)

        # LOAD
        plugin_data_ref01_match_dt0 = {}
        plugin_data_ref01_data_dt0_loaded = plugin_data_ref01_ent.load(plugin_data_ref01_match_dt0, None)
        assert plugin_data_ref01_data_dt0_loaded is not None



def _plugin_data_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/plugin_data/PluginDataTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = TrelloSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["plugin_data01", "plugin_data02", "plugin_data03", "card01", "card02", "card03", "organization01", "organization02", "organization03"],
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
        "TRELLO_TEST_PLUGIN_DATA_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "TRELLO_TEST_PLUGIN_DATA_ENTID": idmap,
        "TRELLO_TEST_LIVE": "FALSE",
        "TRELLO_TEST_EXPLAIN": "FALSE",
        "TRELLO_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("TRELLO_TEST_PLUGIN_DATA_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
