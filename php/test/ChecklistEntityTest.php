<?php
declare(strict_types=1);

// Checklist entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ChecklistEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->Checklist(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = checklist_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "checklist." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CHECKLIST_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $checklist_ref01_ent = $client->Checklist(null);
        $checklist_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.checklist"), "checklist_ref01"));
        $checklist_ref01_data["card_id"] = $setup["idmap"]["card01"];

        $checklist_ref01_data_result = $checklist_ref01_ent->create($checklist_ref01_data, null);
        $checklist_ref01_data = Helpers::to_map(is_object($checklist_ref01_data_result) && method_exists($checklist_ref01_data_result, 'data_get') ? $checklist_ref01_data_result->data_get() : $checklist_ref01_data_result);
        $this->assertNotNull($checklist_ref01_data);

        // UPDATE
        $checklist_ref01_data_up0_up = [
        ];

        $checklist_ref01_resdata_up0_result = $checklist_ref01_ent->update($checklist_ref01_data_up0_up, null);
        $checklist_ref01_resdata_up0 = Helpers::to_map(is_object($checklist_ref01_resdata_up0_result) && method_exists($checklist_ref01_resdata_up0_result, 'data_get') ? $checklist_ref01_resdata_up0_result->data_get() : $checklist_ref01_resdata_up0_result);
        $this->assertNotNull($checklist_ref01_resdata_up0);

        // LOAD
        $checklist_ref01_match_dt0 = [];
        $checklist_ref01_data_dt0_loaded = $checklist_ref01_ent->load($checklist_ref01_match_dt0, null);
        $this->assertNotNull($checklist_ref01_data_dt0_loaded);


    }
}

function checklist_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/checklist/ChecklistTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["checklist01", "checklist02", "checklist03", "board01", "board02", "board03", "card01", "card02", "card03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_CHECKLIST_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_CHECKLIST_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_CHECKLIST_ENTID"]);
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
