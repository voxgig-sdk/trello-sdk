package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/trello-sdk/go"
	"github.com/voxgig-sdk/trello-sdk/go/core"

	vs "github.com/voxgig-sdk/trello-sdk/go/utility/struct"
)

func TestEnterpriseSignupUrlEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.EnterpriseSignupUrl(nil)
		if ent == nil {
			t.Fatal("expected non-nil EnterpriseSignupUrlEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := enterprise_signup_urlBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "enterprise_signup_url." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		enterpriseSignupUrlRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.enterprise_signup_url")))
		var enterpriseSignupUrlRef01Data map[string]any
		if len(enterpriseSignupUrlRef01DataRaw) > 0 {
			enterpriseSignupUrlRef01Data = core.ToMapAny(enterpriseSignupUrlRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = enterpriseSignupUrlRef01Data

		// LOAD
		enterpriseSignupUrlRef01Ent := client.EnterpriseSignupUrl(nil)
		enterpriseSignupUrlRef01MatchDt0 := map[string]any{
			"id": enterpriseSignupUrlRef01Data["id"],
		}
		enterpriseSignupUrlRef01DataDt0Loaded, err := enterpriseSignupUrlRef01Ent.Load(enterpriseSignupUrlRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		enterpriseSignupUrlRef01DataDt0LoadResult := core.ToMapAny(entityData(enterpriseSignupUrlRef01DataDt0Loaded))
		if enterpriseSignupUrlRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if enterpriseSignupUrlRef01DataDt0LoadResult["id"] != enterpriseSignupUrlRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func enterprise_signup_urlBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "enterprise_signup_url", "EnterpriseSignupUrlTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read enterprise_signup_url test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse enterprise_signup_url test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"enterprise_signup_url01", "enterprise_signup_url02", "enterprise_signup_url03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["TRELLO_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["TRELLO_APIKEY"],
			},
			extraOpts,
		})
		client = sdk.NewTrelloSDK(core.ToMapAny(mergedOpts))
	}

	live := env["TRELLO_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["TRELLO_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
