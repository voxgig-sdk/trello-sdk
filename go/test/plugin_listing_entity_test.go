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

func TestPluginListingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.PluginListing(nil)
		if ent == nil {
			t.Fatal("expected non-nil PluginListingEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := plugin_listingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "plugin_listing." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_PLUGIN_LISTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		pluginListingRef01Ent := client.PluginListing(nil)
		pluginListingRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "plugin_listing"}, setup.data), "plugin_listing_ref01"))
		pluginListingRef01Data["id_plugin"] = setup.idmap["id_plugin01"]

		pluginListingRef01DataResult, err := pluginListingRef01Ent.Create(pluginListingRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		pluginListingRef01Data = core.ToMapAny(entityData(pluginListingRef01DataResult))
		if pluginListingRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if pluginListingRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		pluginListingRef01DataUp0Up := map[string]any{
			"id": pluginListingRef01Data["id"],
			"id_plugin": setup.idmap["id_plugin"],
		}

		pluginListingRef01MarkdefUp0Name := "description"
		pluginListingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-plugin_listing_ref01_%d", setup.now)
		pluginListingRef01DataUp0Up[pluginListingRef01MarkdefUp0Name] = pluginListingRef01MarkdefUp0Value

		pluginListingRef01ResdataUp0Result, err := pluginListingRef01Ent.Update(pluginListingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		pluginListingRef01ResdataUp0 := core.ToMapAny(entityData(pluginListingRef01ResdataUp0Result))
		if pluginListingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if pluginListingRef01ResdataUp0["id"] != pluginListingRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if pluginListingRef01ResdataUp0[pluginListingRef01MarkdefUp0Name] != pluginListingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", pluginListingRef01MarkdefUp0Name, pluginListingRef01ResdataUp0[pluginListingRef01MarkdefUp0Name])
		}

	})
}

func plugin_listingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "plugin_listing", "PluginListingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read plugin_listing test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse plugin_listing test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"plugin_listing01", "plugin_listing02", "plugin_listing03", "plugin01", "plugin02", "plugin03", "id_plugin01"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_PLUGIN_LISTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_PLUGIN_LISTING_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_PLUGIN_LISTING_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add id_plugin alias for update test.
	if idmapResolved["id_plugin"] == nil {
		idmapResolved["id_plugin"] = idmapResolved["id_plugin01"]
	}

	if env["TRELLO_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["TRELLO_APIKEY"],
			},
			extra,
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
