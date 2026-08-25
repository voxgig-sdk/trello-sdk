<?php
declare(strict_types=1);

// EnterprisSignupUrl entity test

require_once __DIR__ . '/../trello_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EnterprisSignupUrlEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $ent = $testsdk->EnterprisSignupUrl(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = enterpris_signup_url_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "enterpris_signup_url." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $enterpris_signup_url_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.enterpris_signup_url")));
        $enterpris_signup_url_ref01_data = null;
        if (count($enterpris_signup_url_ref01_data_raw) > 0) {
            $enterpris_signup_url_ref01_data = Helpers::to_map($enterpris_signup_url_ref01_data_raw[0][1]);
        }

        // LOAD
        $enterpris_signup_url_ref01_ent = $client->EnterprisSignupUrl(null);
        $enterpris_signup_url_ref01_match_dt0 = [
            "id" => $enterpris_signup_url_ref01_data["id"],
        ];
        $enterpris_signup_url_ref01_data_dt0_loaded = $enterpris_signup_url_ref01_ent->load($enterpris_signup_url_ref01_match_dt0, null);
        $enterpris_signup_url_ref01_data_dt0_load_result = Helpers::to_map(is_object($enterpris_signup_url_ref01_data_dt0_loaded) && method_exists($enterpris_signup_url_ref01_data_dt0_loaded, 'data_get') ? $enterpris_signup_url_ref01_data_dt0_loaded->data_get() : $enterpris_signup_url_ref01_data_dt0_loaded);
        $this->assertNotNull($enterpris_signup_url_ref01_data_dt0_load_result);
        $this->assertEquals($enterpris_signup_url_ref01_data_dt0_load_result["id"], $enterpris_signup_url_ref01_data["id"]);

    }
}

function enterpris_signup_url_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/enterpris_signup_url/EnterprisSignupUrlTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = TrelloSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["enterpris_signup_url01", "enterpris_signup_url02", "enterpris_signup_url03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID" => $idmap,
        "TRELLO_TEST_LIVE" => "FALSE",
        "TRELLO_TEST_EXPLAIN" => "FALSE",
        "TRELLO_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID"]);
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
