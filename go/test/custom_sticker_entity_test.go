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

func TestCustomStickerEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CustomSticker(nil)
		if ent == nil {
			t.Fatal("expected non-nil CustomStickerEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"custom_sticker": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.CustomSticker(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.CustomSticker(nil).Stream("list", nil, nil) {
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
		setup := custom_stickerBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "custom_sticker." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CUSTOM_STICKER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		customStickerRef01Ent := client.CustomSticker(nil)
		customStickerRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "custom_sticker"}, setup.data), "custom_sticker_ref01"))
		customStickerRef01Data["member_id"] = setup.idmap["member01"]

		customStickerRef01DataResult, err := customStickerRef01Ent.Create(customStickerRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		customStickerRef01Data = core.ToMapAny(entityData(customStickerRef01DataResult))
		if customStickerRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if customStickerRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// LIST
		customStickerRef01Match := map[string]any{
			"member_id": setup.idmap["member01"],
		}

		customStickerRef01ListResult, err := customStickerRef01Ent.List(customStickerRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customStickerRef01List, customStickerRef01ListOk := customStickerRef01ListResult.([]any)
		if !customStickerRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", customStickerRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(customStickerRef01List), map[string]any{"id": customStickerRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// LOAD
		customStickerRef01MatchDt0 := map[string]any{
			"id": customStickerRef01Data["id"],
		}
		customStickerRef01DataDt0Loaded, err := customStickerRef01Ent.Load(customStickerRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		customStickerRef01DataDt0LoadResult := core.ToMapAny(entityData(customStickerRef01DataDt0Loaded))
		if customStickerRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if customStickerRef01DataDt0LoadResult["id"] != customStickerRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		customStickerRef01MatchRm0 := map[string]any{
			"id": customStickerRef01Data["id"],
		}
		_, err = customStickerRef01Ent.Remove(customStickerRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		customStickerRef01MatchRt0 := map[string]any{
			"member_id": setup.idmap["member01"],
		}

		customStickerRef01ListRt0Result, err := customStickerRef01Ent.List(customStickerRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		customStickerRef01ListRt0, customStickerRef01ListRt0Ok := customStickerRef01ListRt0Result.([]any)
		if !customStickerRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", customStickerRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(customStickerRef01ListRt0), map[string]any{"id": customStickerRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func custom_stickerBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "custom_sticker", "CustomStickerTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read custom_sticker test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse custom_sticker test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"custom_sticker01", "custom_sticker02", "custom_sticker03", "member01", "member02", "member03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_CUSTOM_STICKER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_CUSTOM_STICKER_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_CUSTOM_STICKER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
