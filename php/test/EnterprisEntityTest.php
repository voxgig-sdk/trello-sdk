<?php
declare(strict_types=1);

// Enterpris entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EnterprisEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->Enterpris(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = enterpris_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "enterpris." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_ENTERPRIS_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $enterpris_ref01_ent = $client->Enterpris(null);
        $enterpris_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.enterpris"), "enterpris_ref01"));

        $enterpris_ref01_data_result = $enterpris_ref01_ent->create($enterpris_ref01_data, null);
        $enterpris_ref01_data = Helpers::to_map(is_object($enterpris_ref01_data_result) && method_exists($enterpris_ref01_data_result, 'data_get') ? $enterpris_ref01_data_result->data_get() : $enterpris_ref01_data_result);
        $this->assertNotNull($enterpris_ref01_data);
        $this->assertNotNull($enterpris_ref01_data["id"]);

        // UPDATE
        $enterpris_ref01_data_up0_up = [
            "id" => $enterpris_ref01_data["id"],
        ];

        $enterpris_ref01_markdef_up0_name = "dateOrganizationPrefsLastUpdated";
        $enterpris_ref01_markdef_up0_value = "Mark01-enterpris_ref01_" . $setup["now"];
        $enterpris_ref01_data_up0_up[$enterpris_ref01_markdef_up0_name] = $enterpris_ref01_markdef_up0_value;

        $enterpris_ref01_resdata_up0_result = $enterpris_ref01_ent->update($enterpris_ref01_data_up0_up, null);
        $enterpris_ref01_resdata_up0 = Helpers::to_map(is_object($enterpris_ref01_resdata_up0_result) && method_exists($enterpris_ref01_resdata_up0_result, 'data_get') ? $enterpris_ref01_resdata_up0_result->data_get() : $enterpris_ref01_resdata_up0_result);
        $this->assertNotNull($enterpris_ref01_resdata_up0);
        $this->assertEquals($enterpris_ref01_resdata_up0["id"], $enterpris_ref01_data_up0_up["id"]);
        $this->assertEquals($enterpris_ref01_resdata_up0[$enterpris_ref01_markdef_up0_name], $enterpris_ref01_markdef_up0_value);

        // LOAD
        $enterpris_ref01_match_dt0 = [
            "id" => $enterpris_ref01_data["id"],
        ];
        $enterpris_ref01_data_dt0_loaded = $enterpris_ref01_ent->load($enterpris_ref01_match_dt0, null);
        $enterpris_ref01_data_dt0_load_result = Helpers::to_map(is_object($enterpris_ref01_data_dt0_loaded) && method_exists($enterpris_ref01_data_dt0_loaded, 'data_get') ? $enterpris_ref01_data_dt0_loaded->data_get() : $enterpris_ref01_data_dt0_loaded);
        $this->assertNotNull($enterpris_ref01_data_dt0_load_result);
        $this->assertEquals($enterpris_ref01_data_dt0_load_result["id"], $enterpris_ref01_data["id"]);

    }
}

function enterpris_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/enterpris/EnterprisTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["enterpris01", "enterpris02", "enterpris03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_ENTERPRIS_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_ENTERPRIS_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_ENTERPRIS_ENTID"]);
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
