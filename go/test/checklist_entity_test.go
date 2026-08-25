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

func TestChecklistEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Checklist(nil)
		if ent == nil {
			t.Fatal("expected non-nil ChecklistEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := checklistBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "checklist." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CHECKLIST_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		checklistRef01Ent := client.Checklist(nil)
		checklistRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "checklist"}, setup.data), "checklist_ref01"))
		checklistRef01Data["card_id"] = setup.idmap["card01"]

		checklistRef01DataResult, err := checklistRef01Ent.Create(checklistRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		checklistRef01Data = core.ToMapAny(entityData(checklistRef01DataResult))
		if checklistRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}
		if checklistRef01Data["id"] == nil {
			t.Fatal("expected created entity to have an id")
		}

		// UPDATE
		checklistRef01DataUp0Up := map[string]any{
			"id": checklistRef01Data["id"],
		}

		checklistRef01ResdataUp0Result, err := checklistRef01Ent.Update(checklistRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		checklistRef01ResdataUp0 := core.ToMapAny(entityData(checklistRef01ResdataUp0Result))
		if checklistRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if checklistRef01ResdataUp0["id"] != checklistRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}

		// LOAD
		checklistRef01MatchDt0 := map[string]any{
			"id": checklistRef01Data["id"],
		}
		checklistRef01DataDt0Loaded, err := checklistRef01Ent.Load(checklistRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		checklistRef01DataDt0LoadResult := core.ToMapAny(entityData(checklistRef01DataDt0Loaded))
		if checklistRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if checklistRef01DataDt0LoadResult["id"] != checklistRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

		// REMOVE
		checklistRef01MatchRm0 := map[string]any{
			"id": checklistRef01Data["id"],
		}
		_, err = checklistRef01Ent.Remove(checklistRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

	})
}

func checklistBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "checklist", "ChecklistTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read checklist test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse checklist test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"checklist01", "checklist02", "checklist03", "board01", "board02", "board03", "card01", "card02", "card03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_CHECKLIST_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_CHECKLIST_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_CHECKLIST_ENTID"])
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
