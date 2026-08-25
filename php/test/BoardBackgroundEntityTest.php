<?php
declare(strict_types=1);

// BoardBackground entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class BoardBackgroundEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->BoardBackground(null);
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
                "board_background" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = TrelloSDK::test($seed, null);
        $seen = iterator_to_array($base->BoardBackground(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = TrelloConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = TrelloSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->BoardBackground(null)->stream("list", null, null) as $item) {
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
        $setup = board_background_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "board_background." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_BOARD_BACKGROUND_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $board_background_ref01_ent = $client->BoardBackground(null);
        $board_background_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.board_background"), "board_background_ref01"));
        $board_background_ref01_data["member_id"] = $setup["idmap"]["member01"];

        $board_background_ref01_data_result = $board_background_ref01_ent->create($board_background_ref01_data, null);
        $board_background_ref01_data = Helpers::to_map(is_object($board_background_ref01_data_result) && method_exists($board_background_ref01_data_result, 'data_get') ? $board_background_ref01_data_result->data_get() : $board_background_ref01_data_result);
        $this->assertNotNull($board_background_ref01_data);
        $this->assertNotNull($board_background_ref01_data["id"]);

        // LIST
        $board_background_ref01_match = [
            "member_id" => $setup["idmap"]["member01"],
        ];

        $board_background_ref01_list_result = $board_background_ref01_ent->list($board_background_ref01_match, null);
        $this->assertIsArray($board_background_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($board_background_ref01_list_result),
            ["id" => $board_background_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $board_background_ref01_data_up0_up = [
            "id" => $board_background_ref01_data["id"],
            "member_id" => $setup["idmap"]["member_id"],
        ];

        $board_background_ref01_resdata_up0_result = $board_background_ref01_ent->update($board_background_ref01_data_up0_up, null);
        $board_background_ref01_resdata_up0 = Helpers::to_map(is_object($board_background_ref01_resdata_up0_result) && method_exists($board_background_ref01_resdata_up0_result, 'data_get') ? $board_background_ref01_resdata_up0_result->data_get() : $board_background_ref01_resdata_up0_result);
        $this->assertNotNull($board_background_ref01_resdata_up0);
        $this->assertEquals($board_background_ref01_resdata_up0["id"], $board_background_ref01_data_up0_up["id"]);

        // LOAD
        $board_background_ref01_match_dt0 = [
            "id" => $board_background_ref01_data["id"],
        ];
        $board_background_ref01_data_dt0_loaded = $board_background_ref01_ent->load($board_background_ref01_match_dt0, null);
        $board_background_ref01_data_dt0_load_result = Helpers::to_map(is_object($board_background_ref01_data_dt0_loaded) && method_exists($board_background_ref01_data_dt0_loaded, 'data_get') ? $board_background_ref01_data_dt0_loaded->data_get() : $board_background_ref01_data_dt0_loaded);
        $this->assertNotNull($board_background_ref01_data_dt0_load_result);
        $this->assertEquals($board_background_ref01_data_dt0_load_result["id"], $board_background_ref01_data["id"]);

        // REMOVE
        $board_background_ref01_match_rm0 = [
            "id" => $board_background_ref01_data["id"],
        ];
        $board_background_ref01_ent->remove($board_background_ref01_match_rm0, null);

        // LIST
        $board_background_ref01_match_rt0 = [
            "member_id" => $setup["idmap"]["member01"],
        ];

        $board_background_ref01_list_rt0_result = $board_background_ref01_ent->list($board_background_ref01_match_rt0, null);
        $this->assertIsArray($board_background_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($board_background_ref01_list_rt0_result),
            ["id" => $board_background_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function board_background_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/board_background/BoardBackgroundTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["board_background01", "board_background02", "board_background03", "member01", "member02", "member03", "custom_board_background01", "custom_board_background02", "custom_board_background03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_BOARD_BACKGROUND_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_BOARD_BACKGROUND_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_BOARD_BACKGROUND_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["member_id"])) {
        $idmap_resolved["member_id"] = $idmap_resolved["member01"];
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
