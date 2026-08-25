<?php
declare(strict_types=1);

// Export entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ExportEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->Export(null);
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
                "export" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = TrelloSDK::test($seed, null);
        $seen = iterator_to_array($base->Export(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = TrelloConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = TrelloSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Export(null)->stream("list", null, null) as $item) {
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
        $setup = export_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "export." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_EXPORT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $export_ref01_ent = $client->Export(null);
        $export_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.export"), "export_ref01"));
        $export_ref01_data["board_id"] = $setup["idmap"]["board01"];
        $export_ref01_data["organization_id"] = $setup["idmap"]["organization01"];

        $export_ref01_data_result = $export_ref01_ent->create($export_ref01_data, null);
        $export_ref01_data = Helpers::to_map(is_object($export_ref01_data_result) && method_exists($export_ref01_data_result, 'data_get') ? $export_ref01_data_result->data_get() : $export_ref01_data_result);
        $this->assertNotNull($export_ref01_data);
        $this->assertNotNull($export_ref01_data["id"]);

        // LIST
        $export_ref01_match = [
            "organization_id" => $setup["idmap"]["organization01"],
        ];

        $export_ref01_list_result = $export_ref01_ent->list($export_ref01_match, null);
        $this->assertIsArray($export_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($export_ref01_list_result),
            ["id" => $export_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $export_ref01_match_dt0 = [
            "id" => $export_ref01_data["id"],
        ];
        $export_ref01_data_dt0_loaded = $export_ref01_ent->load($export_ref01_match_dt0, null);
        $export_ref01_data_dt0_load_result = Helpers::to_map(is_object($export_ref01_data_dt0_loaded) && method_exists($export_ref01_data_dt0_loaded, 'data_get') ? $export_ref01_data_dt0_loaded->data_get() : $export_ref01_data_dt0_loaded);
        $this->assertNotNull($export_ref01_data_dt0_load_result);
        $this->assertEquals($export_ref01_data_dt0_load_result["id"], $export_ref01_data["id"]);

        // REMOVE
        $export_ref01_match_rm0 = [
            "id" => $export_ref01_data["id"],
        ];
        $export_ref01_ent->remove($export_ref01_match_rm0, null);

        // LIST
        $export_ref01_match_rt0 = [
            "organization_id" => $setup["idmap"]["organization01"],
        ];

        $export_ref01_list_rt0_result = $export_ref01_ent->list($export_ref01_match_rt0, null);
        $this->assertIsArray($export_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($export_ref01_list_rt0_result),
            ["id" => $export_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function export_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/export/ExportTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["export01", "export02", "export03", "board01", "board02", "board03", "organization01", "organization02", "organization03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_EXPORT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_EXPORT_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_EXPORT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["TRELLO_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["TRELLO_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new TrelloSDK(Helpers::to_map($merged_opts));
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
