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

func TestSavedSearchEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.SavedSearch(nil)
		if ent == nil {
			t.Fatal("expected non-nil SavedSearchEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"saved_search": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.SavedSearch(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.SharedConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.SavedSearch(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := saved_searchBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "saved_search." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_SAVED_SEARCH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		savedSearchRef01Ent := client.SavedSearch(nil)
		savedSearchRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "saved_search"}, setup.data), "saved_search_ref01"))
		savedSearchRef01Data["member_id"] = setup.idmap["member01"]

		savedSearchRef01DataResult, err := savedSearchRef01Ent.Create(savedSearchRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		savedSearchRef01Data = core.ToMapAny(entityData(savedSearchRef01DataResult))
		if savedSearchRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if savedSearchRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		savedSearchRef01Match := map[string]any{
			"member_id": setup.idmap["member01"],
		}

		savedSearchRef01ListResult, err := savedSearchRef01Ent.List(savedSearchRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		savedSearchRef01List, savedSearchRef01ListOk := savedSearchRef01ListResult.([]any)
		if !savedSearchRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", savedSearchRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(savedSearchRef01List), map[string]any{"id": savedSearchRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		savedSearchRef01DataUp0Up := map[string]any{
			"id": savedSearchRef01Data["id"],
			"member_id": setup.idmap["member_id"],
		}

		savedSearchRef01MarkdefUp0Name := "name"
		savedSearchRef01MarkdefUp0Value := fmt.Sprintf("Mark01-saved_search_ref01_%d", setup.now)
		savedSearchRef01DataUp0Up[savedSearchRef01MarkdefUp0Name] = savedSearchRef01MarkdefUp0Value

		savedSearchRef01ResdataUp0Result, err := savedSearchRef01Ent.Update(savedSearchRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		savedSearchRef01ResdataUp0 := core.ToMapAny(entityData(savedSearchRef01ResdataUp0Result))
		if savedSearchRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if savedSearchRef01ResdataUp0["id"] != savedSearchRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if savedSearchRef01ResdataUp0[savedSearchRef01MarkdefUp0Name] != savedSearchRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", savedSearchRef01MarkdefUp0Name, savedSearchRef01ResdataUp0[savedSearchRef01MarkdefUp0Name])
		}

		// LOAD
		savedSearchRef01MatchDt0 := map[string]any{
			"id": savedSearchRef01Data["id"],
		}
		savedSearchRef01DataDt0Loaded, err := savedSearchRef01Ent.Load(savedSearchRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		savedSearchRef01DataDt0LoadResult := core.ToMapAny(entityData(savedSearchRef01DataDt0Loaded))
		if savedSearchRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if savedSearchRef01DataDt0LoadResult["id"] != savedSearchRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		savedSearchRef01MatchRm0 := map[string]any{
			"id": savedSearchRef01Data["id"],
		}
		_, err = savedSearchRef01Ent.Remove(savedSearchRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		savedSearchRef01MatchRt0 := map[string]any{
			"member_id": setup.idmap["member01"],
		}

		savedSearchRef01ListRt0Result, err := savedSearchRef01Ent.List(savedSearchRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		savedSearchRef01ListRt0, savedSearchRef01ListRt0Ok := savedSearchRef01ListRt0Result.([]any)
		if !savedSearchRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", savedSearchRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(savedSearchRef01ListRt0), map[string]any{"id": savedSearchRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func saved_searchBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "saved_search", "SavedSearchTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read saved_search test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse saved_search test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"saved_search01", "saved_search02", "saved_search03", "member01", "member02", "member03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_SAVED_SEARCH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_SAVED_SEARCH_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_SAVED_SEARCH_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add member_id alias for update test.
	if idmapResolved["member_id"] == nil {
		idmapResolved["member_id"] = idmapResolved["member01"]
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
