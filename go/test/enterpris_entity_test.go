package sdktest

import (
	"encoding/json"
	"fmt"
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

func TestEnterprisEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Enterpris(nil)
		if ent == nil {
			t.Fatal("expected non-nil EnterprisEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := enterprisBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "enterpris." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_ENTERPRIS_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		enterprisRef01Ent := client.Enterpris(nil)
		enterprisRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "enterpris"}), "enterpris_ref01"))

		enterprisRef01DataResult, err := enterprisRef01Ent.Create(enterprisRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		enterprisRef01Data = core.ToMapAny(entityData(enterprisRef01DataResult))
		if enterprisRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if enterprisRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		enterprisRef01DataUp0Up := map[string]any{
			"id": enterprisRef01Data["id"],
		}

		enterprisRef01MarkdefUp0Name := "dateOrganizationPrefsLastUpdated"
		enterprisRef01MarkdefUp0Value := fmt.Sprintf("Mark01-enterpris_ref01_%d", setup.now)
		enterprisRef01DataUp0Up[enterprisRef01MarkdefUp0Name] = enterprisRef01MarkdefUp0Value

		enterprisRef01ResdataUp0Result, err := enterprisRef01Ent.Update(enterprisRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		enterprisRef01ResdataUp0 := core.ToMapAny(entityData(enterprisRef01ResdataUp0Result))
		if enterprisRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if enterprisRef01ResdataUp0["id"] != enterprisRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if enterprisRef01ResdataUp0[enterprisRef01MarkdefUp0Name] != enterprisRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", enterprisRef01MarkdefUp0Name, enterprisRef01ResdataUp0[enterprisRef01MarkdefUp0Name])
		}

		// LOAD
		enterprisRef01MatchDt0 := map[string]any{
			"id": enterprisRef01Data["id"],
		}
		enterprisRef01DataDt0Loaded, err := enterprisRef01Ent.Load(enterprisRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		enterprisRef01DataDt0LoadResult := core.ToMapAny(entityData(enterprisRef01DataDt0Loaded))
		if enterprisRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if enterprisRef01DataDt0LoadResult["id"] != enterprisRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func enterprisBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "enterpris", "EnterprisTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read enterpris test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse enterpris test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"enterpris01", "enterpris02", "enterpris03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_ENTERPRIS_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_ENTERPRIS_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_ENTERPRIS_ENTID"])
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
