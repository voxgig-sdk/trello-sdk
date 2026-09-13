<?php
declare(strict_types=1);

// TrelloList entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class TrelloListEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->TrelloList(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "trello_list" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = TrelloSDK::test($seed, null);
        $seen = iterator_to_array($base->TrelloList(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = TrelloConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = TrelloSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->TrelloList(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = trello_list_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "trello_list." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_TRELLO_LIST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $trello_list_ref01_ent = $client->TrelloList(null);
        $trello_list_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.trello_list"), "trello_list_ref01"));
        $trello_list_ref01_data["board_id"] = $setup["idmap"]["board01"];

        $trello_list_ref01_data_result = $trello_list_ref01_ent->create($trello_list_ref01_data, null);
        $trello_list_ref01_data = Helpers::to_map(is_object($trello_list_ref01_data_result) && method_exists($trello_list_ref01_data_result, 'data_get') ? $trello_list_ref01_data_result->data_get() : $trello_list_ref01_data_result);
        $this->assertNotNull($trello_list_ref01_data);
        $this->assertNotNull($trello_list_ref01_data["id"]);

        // LIST
        $trello_list_ref01_match = [
            "board_id" => $setup["idmap"]["board01"],
        ];

        $trello_list_ref01_list_result = $trello_list_ref01_ent->list($trello_list_ref01_match, null);
        $this->assertIsArray($trello_list_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($trello_list_ref01_list_result),
            ["id" => $trello_list_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $trello_list_ref01_match_dt0 = [
            "id" => $trello_list_ref01_data["id"],
        ];
        $trello_list_ref01_data_dt0_loaded = $trello_list_ref01_ent->load($trello_list_ref01_match_dt0, null);
        $trello_list_ref01_data_dt0_load_result = Helpers::to_map(is_object($trello_list_ref01_data_dt0_loaded) && method_exists($trello_list_ref01_data_dt0_loaded, 'data_get') ? $trello_list_ref01_data_dt0_loaded->data_get() : $trello_list_ref01_data_dt0_loaded);
        $this->assertNotNull($trello_list_ref01_data_dt0_load_result);
        $this->assertEquals($trello_list_ref01_data_dt0_load_result["id"], $trello_list_ref01_data["id"]);

    }
}

function trello_list_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/trello_list/TrelloListTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["trello_list01", "trello_list02", "trello_list03", "action01", "action02", "action03", "board01", "board02", "board03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_TRELLO_LIST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_TRELLO_LIST_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_TRELLO_LIST_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["TRELLO_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            Runner::live_client_options(),
            [
                "apikey" => $env["TRELLO_APIKEY"],
            ],
            // ismap, not a plain "?? []" default: an empty PHP array is a
            // LIST, and a non-map later entry REPLACES the accumulated map in
            // merge - so the no-extras call discarded live_client_options()
            // and the apikey/server map above it.
            Vs::ismap($extra) ? $extra : new \stdClass(),
        ]);
        // "?? []" because merge legitimately answers with a stdClass when every
        // contributing entry is an EMPTY map - an SDK with no apikey and no
        // server variables generates an empty middle entry, so that is the
        // common case, not the edge one. to_map returns null for a non-array by
        // design, and the constructor takes a non-nullable array, so without the
        // fallback every such SDK died on "must be of type array, null given"
        // the moment live mode was switched on. Offline mode never reaches this
        // branch, which is why the offline suite stayed green.
        $client = new TrelloSDK(Helpers::to_map($merged_opts) ?? []);
    }

    $live = $env["TRELLO_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["TRELLO_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
