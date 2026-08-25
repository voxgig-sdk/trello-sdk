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

func TestNotificationChannelSettingEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.NotificationChannelSetting(nil)
		if ent == nil {
			t.Fatal("expected non-nil NotificationChannelSettingEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"notification_channel_setting": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.NotificationChannelSetting(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.NotificationChannelSetting(nil).Stream("list", nil, nil) {
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
		setup := notification_channel_settingBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "notification_channel_setting." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		notificationChannelSettingRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.notification_channel_setting", setup.data)))
		var notificationChannelSettingRef01Data map[string]any
		if len(notificationChannelSettingRef01DataRaw) > 0 {
			notificationChannelSettingRef01Data = core.ToMapAny(notificationChannelSettingRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = notificationChannelSettingRef01Data

		// LIST
		notificationChannelSettingRef01Ent := client.NotificationChannelSetting(nil)
		notificationChannelSettingRef01Match := map[string]any{
			"member_id": setup.idmap["member01"],
		}

		notificationChannelSettingRef01ListResult, err := notificationChannelSettingRef01Ent.List(notificationChannelSettingRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, notificationChannelSettingRef01ListOk := notificationChannelSettingRef01ListResult.([]any)
		if !notificationChannelSettingRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", notificationChannelSettingRef01ListResult)
		}

		// UPDATE
		notificationChannelSettingRef01DataUp0Up := map[string]any{
			"id": notificationChannelSettingRef01Data["id"],
		}

		notificationChannelSettingRef01MarkdefUp0Name := "idMember"
		notificationChannelSettingRef01MarkdefUp0Value := fmt.Sprintf("Mark01-notification_channel_setting_ref01_%d", setup.now)
		notificationChannelSettingRef01DataUp0Up[notificationChannelSettingRef01MarkdefUp0Name] = notificationChannelSettingRef01MarkdefUp0Value

		notificationChannelSettingRef01ResdataUp0Result, err := notificationChannelSettingRef01Ent.Update(notificationChannelSettingRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		notificationChannelSettingRef01ResdataUp0 := core.ToMapAny(entityData(notificationChannelSettingRef01ResdataUp0Result))
		if notificationChannelSettingRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if notificationChannelSettingRef01ResdataUp0["id"] != notificationChannelSettingRef01DataUp0Up["id"] {
			t.Fatal("expected update result id to match")
		}
		if notificationChannelSettingRef01ResdataUp0[notificationChannelSettingRef01MarkdefUp0Name] != notificationChannelSettingRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", notificationChannelSettingRef01MarkdefUp0Name, notificationChannelSettingRef01ResdataUp0[notificationChannelSettingRef01MarkdefUp0Name])
		}

		// LOAD
		notificationChannelSettingRef01MatchDt0 := map[string]any{
			"id": notificationChannelSettingRef01Data["id"],
		}
		notificationChannelSettingRef01DataDt0Loaded, err := notificationChannelSettingRef01Ent.Load(notificationChannelSettingRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		notificationChannelSettingRef01DataDt0LoadResult := core.ToMapAny(entityData(notificationChannelSettingRef01DataDt0Loaded))
		if notificationChannelSettingRef01DataDt0LoadResult == nil {
			t.Fatal("expected load result to be a map")
		}
		if notificationChannelSettingRef01DataDt0LoadResult["id"] != notificationChannelSettingRef01Data["id"] {
			t.Fatal("expected load result id to match")
		}

	})
}

func notification_channel_settingBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "notification_channel_setting", "NotificationChannelSettingTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read notification_channel_setting test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse notification_channel_setting test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"notification_channel_setting01", "notification_channel_setting02", "notification_channel_setting03", "member01", "member02", "member03", "notifications_channel_setting01", "notifications_channel_setting02", "notifications_channel_setting03"},
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
	entidEnvRaw := os.Getenv("TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID": idmap,
		"TRELLO_TEST_LIVE":      "FALSE",
		"TRELLO_TEST_EXPLAIN":   "FALSE",
		"TRELLO_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID"])
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
