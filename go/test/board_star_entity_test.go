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

func TestBoardStarEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.BoardStar(nil)
		if ent == nil {
			t.Fatal("expected non-nil BoardStarEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"board_star": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.BoardStar(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.BoardStar(nil).Stream("list", nil, nil) {
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
		setup := board_starBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "board_star." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_BOARD_STAR_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		boardStarRef01Ent := client.BoardStar(nil)
		boardStarRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "board_star"}, setup.data), "board_star_ref01"))
		boardStarRef01Data["member_id"] = setup.idmap["member01"]

		boardStarRef01DataResult, err := boardStarRef01Ent.Create(boardStarRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		boardStarRef01Data = core.ToMapAny(entityData(boardStarRef01DataResult))
		if boardStarRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if boardStarRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		boardStarRef01Match := map[string]any{
			"board_id": setup.idmap["board01"],
		}

		boardStarRef01ListResult, err := boardStarRef01Ent.List(boardStarRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		boardStarRef01List, boardStarRef01ListOk := boardStarRef01ListResult.([]any)
		if !boardStarRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", boardStarRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(boardStarRef01List), map[string]any{"id": boardStarRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		boardStarRef01DataUp0Up := map[string]any{
			"id": boardStarRef01Data["id"],
			"member_id": setup.idmap["member_id"],
		}

		boardStarRef01MarkdefUp0Name := "idBoard"
		boardStarRef01MarkdefUp0Value := fmt.Sprintf("Mark01-board_star_ref01_%d", setup.now)
		boardStarRef01DataUp0Up[boardStarRef01MarkdefUp0Name] = boardStarRef01MarkdefUp0Value

		boardStarRef01ResdataUp0Result, err := boardStarRef01Ent.Update(boardStarRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		boardStarRef01ResdataUp0 := core.ToMapAny(entityData(boardStarRef01ResdataUp0Result))
		if boardStarRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if boardStarRef01ResdataUp0["id"] != boardStarRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if boardStarRef01ResdataUp0[boardStarRef01MarkdefUp0Name] != boardStarRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", boardStarRef01MarkdefUp0Name, boardStarRef01ResdataUp0[boardStarRef01MarkdefUp0Name])
		}

		// LOAD
		boardStarRef01MatchDt0 := map[string]any{
			"id": boardStarRef01Data["id"],
		}
		boardStarRef01DataDt0Loaded, err := boardStarRef01Ent.Load(boardStarRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		boardStarRef01DataDt0LoadResult := core.ToMapAny(entityData(boardStarRef01DataDt0Loaded))
		if boardStarRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if boardStarRef01DataDt0LoadResult["id"] != boardStarRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		boardStarRef01MatchRm0 := map[string]any{
			"id": boardStarRef01Data["id"],
		}
		_, err = boardStarRef01Ent.Remove(boardStarRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		boardStarRef01MatchRt0 := map[string]any{
			"board_id": setup.idmap["board01"],
		}

		boardStarRef01ListRt0Result, err := boardStarRef01Ent.List(boardStarRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		boardStarRef01ListRt0, boardStarRef01ListRt0Ok := boardStarRef01ListRt0Result.([]any)
		if !boardStarRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", boardStarRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(boardStarRef01ListRt0), map[string]any{"id": boardStarRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func board_starBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "board_star", "BoardStarTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read board_star test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse board_star test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"board_star01", "board_star02", "board_star03", "member01", "member02", "member03", "board01"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_BOARD_STAR_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_BOARD_STAR_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_BOARD_STAR_ENTID"])
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
