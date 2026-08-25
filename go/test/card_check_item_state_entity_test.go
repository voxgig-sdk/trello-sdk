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

func TestCardCheckItemStateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.CardCheckItemState(nil)
		if ent == nil {
			t.Fatal("expected non-nil CardCheckItemStateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := card_check_item_stateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "card_check_item_state." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CARD_CHECK_ITEM_STATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		cardCheckItemStateRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.card_check_item_state", setup.data)))
		var cardCheckItemStateRef01Data map[string]any
		if len(cardCheckItemStateRef01DataRaw) > 0 {
			cardCheckItemStateRef01Data = core.ToMapAny(cardCheckItemStateRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = cardCheckItemStateRef01Data

		// LOAD
		cardCheckItemStateRef01Ent := client.CardCheckItemState(nil)
		cardCheckItemStateRef01MatchDt0 := map[string]any{
			"id": cardCheckItemStateRef01Data["id"],
		}
		cardCheckItemStateRef01DataDt0Loaded, err := cardCheckItemStateRef01Ent.Load(cardCheckItemStateRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		cardCheckItemStateRef01DataDt0LoadResult := core.ToMapAny(entityData(cardCheckItemStateRef01DataDt0Loaded))
		if cardCheckItemStateRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if cardCheckItemStateRef01DataDt0LoadResult["id"] != cardCheckItemStateRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func card_check_item_stateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "card_check_item_state", "CardCheckItemStateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read card_check_item_state test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse card_check_item_state test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"card_check_item_state01", "card_check_item_state02", "card_check_item_state03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_CARD_CHECK_ITEM_STATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_CARD_CHECK_ITEM_STATE_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_CARD_CHECK_ITEM_STATE_ENTID"])
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
