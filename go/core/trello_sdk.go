package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/trello-sdk/go/utility/struct"
)

type TrelloSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewTrelloSDK(options map[string]any) *TrelloSDK {
	sdk := &TrelloSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *TrelloSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *TrelloSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *TrelloSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *TrelloSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *TrelloSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *TrelloSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *TrelloSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("TrelloSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *TrelloSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *TrelloSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("TrelloSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// Action returns a Action entity bound to this client.
// Idiomatic usage: client.Action(nil).List(nil, nil) or
// client.Action(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Action(data map[string]any) TrelloEntity {
	return NewActionEntityFunc(sdk, data)
}


// ActionReactionsSummary returns a ActionReactionsSummary entity bound to this client.
// Idiomatic usage: client.ActionReactionsSummary(nil).List(nil, nil) or
// client.ActionReactionsSummary(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ActionReactionsSummary(data map[string]any) TrelloEntity {
	return NewActionReactionsSummaryEntityFunc(sdk, data)
}


// Admin returns a Admin entity bound to this client.
// Idiomatic usage: client.Admin(nil).List(nil, nil) or
// client.Admin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Admin(data map[string]any) TrelloEntity {
	return NewAdminEntityFunc(sdk, data)
}


// Application returns a Application entity bound to this client.
// Idiomatic usage: client.Application(nil).List(nil, nil) or
// client.Application(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Application(data map[string]any) TrelloEntity {
	return NewApplicationEntityFunc(sdk, data)
}


// ApplicationCompliance returns a ApplicationCompliance entity bound to this client.
// Idiomatic usage: client.ApplicationCompliance(nil).List(nil, nil) or
// client.ApplicationCompliance(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ApplicationCompliance(data map[string]any) TrelloEntity {
	return NewApplicationComplianceEntityFunc(sdk, data)
}


// AssociatedDomain returns a AssociatedDomain entity bound to this client.
// Idiomatic usage: client.AssociatedDomain(nil).List(nil, nil) or
// client.AssociatedDomain(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) AssociatedDomain(data map[string]any) TrelloEntity {
	return NewAssociatedDomainEntityFunc(sdk, data)
}


// Attachment returns a Attachment entity bound to this client.
// Idiomatic usage: client.Attachment(nil).List(nil, nil) or
// client.Attachment(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Attachment(data map[string]any) TrelloEntity {
	return NewAttachmentEntityFunc(sdk, data)
}


// Batch returns a Batch entity bound to this client.
// Idiomatic usage: client.Batch(nil).List(nil, nil) or
// client.Batch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Batch(data map[string]any) TrelloEntity {
	return NewBatchEntityFunc(sdk, data)
}


// Board returns a Board entity bound to this client.
// Idiomatic usage: client.Board(nil).List(nil, nil) or
// client.Board(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Board(data map[string]any) TrelloEntity {
	return NewBoardEntityFunc(sdk, data)
}


// BoardBackground returns a BoardBackground entity bound to this client.
// Idiomatic usage: client.BoardBackground(nil).List(nil, nil) or
// client.BoardBackground(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) BoardBackground(data map[string]any) TrelloEntity {
	return NewBoardBackgroundEntityFunc(sdk, data)
}


// BoardPlugin returns a BoardPlugin entity bound to this client.
// Idiomatic usage: client.BoardPlugin(nil).List(nil, nil) or
// client.BoardPlugin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) BoardPlugin(data map[string]any) TrelloEntity {
	return NewBoardPluginEntityFunc(sdk, data)
}


// BoardStar returns a BoardStar entity bound to this client.
// Idiomatic usage: client.BoardStar(nil).List(nil, nil) or
// client.BoardStar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) BoardStar(data map[string]any) TrelloEntity {
	return NewBoardStarEntityFunc(sdk, data)
}


// Bulk returns a Bulk entity bound to this client.
// Idiomatic usage: client.Bulk(nil).List(nil, nil) or
// client.Bulk(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Bulk(data map[string]any) TrelloEntity {
	return NewBulkEntityFunc(sdk, data)
}


// Card returns a Card entity bound to this client.
// Idiomatic usage: client.Card(nil).List(nil, nil) or
// client.Card(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Card(data map[string]any) TrelloEntity {
	return NewCardEntityFunc(sdk, data)
}


// CardCheckItemState returns a CardCheckItemState entity bound to this client.
// Idiomatic usage: client.CardCheckItemState(nil).List(nil, nil) or
// client.CardCheckItemState(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CardCheckItemState(data map[string]any) TrelloEntity {
	return NewCardCheckItemStateEntityFunc(sdk, data)
}


// CardList returns a CardList entity bound to this client.
// Idiomatic usage: client.CardList(nil).List(nil, nil) or
// client.CardList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CardList(data map[string]any) TrelloEntity {
	return NewCardListEntityFunc(sdk, data)
}


// CheckItem returns a CheckItem entity bound to this client.
// Idiomatic usage: client.CheckItem(nil).List(nil, nil) or
// client.CheckItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CheckItem(data map[string]any) TrelloEntity {
	return NewCheckItemEntityFunc(sdk, data)
}


// Checklist returns a Checklist entity bound to this client.
// Idiomatic usage: client.Checklist(nil).List(nil, nil) or
// client.Checklist(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Checklist(data map[string]any) TrelloEntity {
	return NewChecklistEntityFunc(sdk, data)
}


// ClaimableOrganization returns a ClaimableOrganization entity bound to this client.
// Idiomatic usage: client.ClaimableOrganization(nil).List(nil, nil) or
// client.ClaimableOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ClaimableOrganization(data map[string]any) TrelloEntity {
	return NewClaimableOrganizationEntityFunc(sdk, data)
}


// CustomBoardBackground returns a CustomBoardBackground entity bound to this client.
// Idiomatic usage: client.CustomBoardBackground(nil).List(nil, nil) or
// client.CustomBoardBackground(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CustomBoardBackground(data map[string]any) TrelloEntity {
	return NewCustomBoardBackgroundEntityFunc(sdk, data)
}


// CustomEmoji returns a CustomEmoji entity bound to this client.
// Idiomatic usage: client.CustomEmoji(nil).List(nil, nil) or
// client.CustomEmoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CustomEmoji(data map[string]any) TrelloEntity {
	return NewCustomEmojiEntityFunc(sdk, data)
}


// CustomField returns a CustomField entity bound to this client.
// Idiomatic usage: client.CustomField(nil).List(nil, nil) or
// client.CustomField(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CustomField(data map[string]any) TrelloEntity {
	return NewCustomFieldEntityFunc(sdk, data)
}


// CustomFieldItem returns a CustomFieldItem entity bound to this client.
// Idiomatic usage: client.CustomFieldItem(nil).List(nil, nil) or
// client.CustomFieldItem(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CustomFieldItem(data map[string]any) TrelloEntity {
	return NewCustomFieldItemEntityFunc(sdk, data)
}


// CustomSticker returns a CustomSticker entity bound to this client.
// Idiomatic usage: client.CustomSticker(nil).List(nil, nil) or
// client.CustomSticker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) CustomSticker(data map[string]any) TrelloEntity {
	return NewCustomStickerEntityFunc(sdk, data)
}


// EmailPosition returns a EmailPosition entity bound to this client.
// Idiomatic usage: client.EmailPosition(nil).List(nil, nil) or
// client.EmailPosition(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) EmailPosition(data map[string]any) TrelloEntity {
	return NewEmailPositionEntityFunc(sdk, data)
}


// Emoji returns a Emoji entity bound to this client.
// Idiomatic usage: client.Emoji(nil).List(nil, nil) or
// client.Emoji(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Emoji(data map[string]any) TrelloEntity {
	return NewEmojiEntityFunc(sdk, data)
}


// Enterpris returns a Enterpris entity bound to this client.
// Idiomatic usage: client.Enterpris(nil).List(nil, nil) or
// client.Enterpris(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Enterpris(data map[string]any) TrelloEntity {
	return NewEnterprisEntityFunc(sdk, data)
}


// EnterprisSignupUrl returns a EnterprisSignupUrl entity bound to this client.
// Idiomatic usage: client.EnterprisSignupUrl(nil).List(nil, nil) or
// client.EnterprisSignupUrl(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) EnterprisSignupUrl(data map[string]any) TrelloEntity {
	return NewEnterprisSignupUrlEntityFunc(sdk, data)
}


// EnterpriseAdmin returns a EnterpriseAdmin entity bound to this client.
// Idiomatic usage: client.EnterpriseAdmin(nil).List(nil, nil) or
// client.EnterpriseAdmin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) EnterpriseAdmin(data map[string]any) TrelloEntity {
	return NewEnterpriseAdminEntityFunc(sdk, data)
}


// EnterpriseAuditLog returns a EnterpriseAuditLog entity bound to this client.
// Idiomatic usage: client.EnterpriseAuditLog(nil).List(nil, nil) or
// client.EnterpriseAuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) EnterpriseAuditLog(data map[string]any) TrelloEntity {
	return NewEnterpriseAuditLogEntityFunc(sdk, data)
}


// Export returns a Export entity bound to this client.
// Idiomatic usage: client.Export(nil).List(nil, nil) or
// client.Export(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Export(data map[string]any) TrelloEntity {
	return NewExportEntityFunc(sdk, data)
}


// ExportDownload returns a ExportDownload entity bound to this client.
// Idiomatic usage: client.ExportDownload(nil).List(nil, nil) or
// client.ExportDownload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ExportDownload(data map[string]any) TrelloEntity {
	return NewExportDownloadEntityFunc(sdk, data)
}


// Generate returns a Generate entity bound to this client.
// Idiomatic usage: client.Generate(nil).List(nil, nil) or
// client.Generate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Generate(data map[string]any) TrelloEntity {
	return NewGenerateEntityFunc(sdk, data)
}


// IdEmailList returns a IdEmailList entity bound to this client.
// Idiomatic usage: client.IdEmailList(nil).List(nil, nil) or
// client.IdEmailList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) IdEmailList(data map[string]any) TrelloEntity {
	return NewIdEmailListEntityFunc(sdk, data)
}


// IdLabel returns a IdLabel entity bound to this client.
// Idiomatic usage: client.IdLabel(nil).List(nil, nil) or
// client.IdLabel(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) IdLabel(data map[string]any) TrelloEntity {
	return NewIdLabelEntityFunc(sdk, data)
}


// IdMember returns a IdMember entity bound to this client.
// Idiomatic usage: client.IdMember(nil).List(nil, nil) or
// client.IdMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) IdMember(data map[string]any) TrelloEntity {
	return NewIdMemberEntityFunc(sdk, data)
}


// Label returns a Label entity bound to this client.
// Idiomatic usage: client.Label(nil).List(nil, nil) or
// client.Label(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Label(data map[string]any) TrelloEntity {
	return NewLabelEntityFunc(sdk, data)
}


// List returns a List entity bound to this client.
// Idiomatic usage: client.List(nil).List(nil, nil) or
// client.List(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) List(data map[string]any) TrelloEntity {
	return NewListEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Member(data map[string]any) TrelloEntity {
	return NewMemberEntityFunc(sdk, data)
}


// MemberPrivacy returns a MemberPrivacy entity bound to this client.
// Idiomatic usage: client.MemberPrivacy(nil).List(nil, nil) or
// client.MemberPrivacy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) MemberPrivacy(data map[string]any) TrelloEntity {
	return NewMemberPrivacyEntityFunc(sdk, data)
}


// MembersVoted returns a MembersVoted entity bound to this client.
// Idiomatic usage: client.MembersVoted(nil).List(nil, nil) or
// client.MembersVoted(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) MembersVoted(data map[string]any) TrelloEntity {
	return NewMembersVotedEntityFunc(sdk, data)
}


// Membership returns a Membership entity bound to this client.
// Idiomatic usage: client.Membership(nil).List(nil, nil) or
// client.Membership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Membership(data map[string]any) TrelloEntity {
	return NewMembershipEntityFunc(sdk, data)
}


// MostRecent returns a MostRecent entity bound to this client.
// Idiomatic usage: client.MostRecent(nil).List(nil, nil) or
// client.MostRecent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) MostRecent(data map[string]any) TrelloEntity {
	return NewMostRecentEntityFunc(sdk, data)
}


// NewBillableGuest returns a NewBillableGuest entity bound to this client.
// Idiomatic usage: client.NewBillableGuest(nil).List(nil, nil) or
// client.NewBillableGuest(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) NewBillableGuest(data map[string]any) TrelloEntity {
	return NewNewBillableGuestEntityFunc(sdk, data)
}


// Notification returns a Notification entity bound to this client.
// Idiomatic usage: client.Notification(nil).List(nil, nil) or
// client.Notification(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Notification(data map[string]any) TrelloEntity {
	return NewNotificationEntityFunc(sdk, data)
}


// NotificationChannelSetting returns a NotificationChannelSetting entity bound to this client.
// Idiomatic usage: client.NotificationChannelSetting(nil).List(nil, nil) or
// client.NotificationChannelSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) NotificationChannelSetting(data map[string]any) TrelloEntity {
	return NewNotificationChannelSettingEntityFunc(sdk, data)
}


// NotificationList returns a NotificationList entity bound to this client.
// Idiomatic usage: client.NotificationList(nil).List(nil, nil) or
// client.NotificationList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) NotificationList(data map[string]any) TrelloEntity {
	return NewNotificationListEntityFunc(sdk, data)
}


// NotificationMemberCreator returns a NotificationMemberCreator entity bound to this client.
// Idiomatic usage: client.NotificationMemberCreator(nil).List(nil, nil) or
// client.NotificationMemberCreator(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) NotificationMemberCreator(data map[string]any) TrelloEntity {
	return NewNotificationMemberCreatorEntityFunc(sdk, data)
}


// NotificationsChannelSetting returns a NotificationsChannelSetting entity bound to this client.
// Idiomatic usage: client.NotificationsChannelSetting(nil).List(nil, nil) or
// client.NotificationsChannelSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) NotificationsChannelSetting(data map[string]any) TrelloEntity {
	return NewNotificationsChannelSettingEntityFunc(sdk, data)
}


// Option returns a Option entity bound to this client.
// Idiomatic usage: client.Option(nil).List(nil, nil) or
// client.Option(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Option(data map[string]any) TrelloEntity {
	return NewOptionEntityFunc(sdk, data)
}


// OrgInviteRestrict returns a OrgInviteRestrict entity bound to this client.
// Idiomatic usage: client.OrgInviteRestrict(nil).List(nil, nil) or
// client.OrgInviteRestrict(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) OrgInviteRestrict(data map[string]any) TrelloEntity {
	return NewOrgInviteRestrictEntityFunc(sdk, data)
}


// Organization returns a Organization entity bound to this client.
// Idiomatic usage: client.Organization(nil).List(nil, nil) or
// client.Organization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Organization(data map[string]any) TrelloEntity {
	return NewOrganizationEntityFunc(sdk, data)
}


// PendingOrganization returns a PendingOrganization entity bound to this client.
// Idiomatic usage: client.PendingOrganization(nil).List(nil, nil) or
// client.PendingOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) PendingOrganization(data map[string]any) TrelloEntity {
	return NewPendingOrganizationEntityFunc(sdk, data)
}


// Plugin returns a Plugin entity bound to this client.
// Idiomatic usage: client.Plugin(nil).List(nil, nil) or
// client.Plugin(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Plugin(data map[string]any) TrelloEntity {
	return NewPluginEntityFunc(sdk, data)
}


// PluginData returns a PluginData entity bound to this client.
// Idiomatic usage: client.PluginData(nil).List(nil, nil) or
// client.PluginData(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) PluginData(data map[string]any) TrelloEntity {
	return NewPluginDataEntityFunc(sdk, data)
}


// PluginListing returns a PluginListing entity bound to this client.
// Idiomatic usage: client.PluginListing(nil).List(nil, nil) or
// client.PluginListing(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) PluginListing(data map[string]any) TrelloEntity {
	return NewPluginListingEntityFunc(sdk, data)
}


// Reaction returns a Reaction entity bound to this client.
// Idiomatic usage: client.Reaction(nil).List(nil, nil) or
// client.Reaction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Reaction(data map[string]any) TrelloEntity {
	return NewReactionEntityFunc(sdk, data)
}


// Read returns a Read entity bound to this client.
// Idiomatic usage: client.Read(nil).List(nil, nil) or
// client.Read(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Read(data map[string]any) TrelloEntity {
	return NewReadEntityFunc(sdk, data)
}


// SavedSearch returns a SavedSearch entity bound to this client.
// Idiomatic usage: client.SavedSearch(nil).List(nil, nil) or
// client.SavedSearch(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) SavedSearch(data map[string]any) TrelloEntity {
	return NewSavedSearchEntityFunc(sdk, data)
}


// Search returns a Search entity bound to this client.
// Idiomatic usage: client.Search(nil).List(nil, nil) or
// client.Search(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Search(data map[string]any) TrelloEntity {
	return NewSearchEntityFunc(sdk, data)
}


// ShowSidebar returns a ShowSidebar entity bound to this client.
// Idiomatic usage: client.ShowSidebar(nil).List(nil, nil) or
// client.ShowSidebar(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ShowSidebar(data map[string]any) TrelloEntity {
	return NewShowSidebarEntityFunc(sdk, data)
}


// ShowSidebarActivity returns a ShowSidebarActivity entity bound to this client.
// Idiomatic usage: client.ShowSidebarActivity(nil).List(nil, nil) or
// client.ShowSidebarActivity(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ShowSidebarActivity(data map[string]any) TrelloEntity {
	return NewShowSidebarActivityEntityFunc(sdk, data)
}


// ShowSidebarBoardAction returns a ShowSidebarBoardAction entity bound to this client.
// Idiomatic usage: client.ShowSidebarBoardAction(nil).List(nil, nil) or
// client.ShowSidebarBoardAction(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ShowSidebarBoardAction(data map[string]any) TrelloEntity {
	return NewShowSidebarBoardActionEntityFunc(sdk, data)
}


// ShowSidebarMember returns a ShowSidebarMember entity bound to this client.
// Idiomatic usage: client.ShowSidebarMember(nil).List(nil, nil) or
// client.ShowSidebarMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) ShowSidebarMember(data map[string]any) TrelloEntity {
	return NewShowSidebarMemberEntityFunc(sdk, data)
}


// Sticker returns a Sticker entity bound to this client.
// Idiomatic usage: client.Sticker(nil).List(nil, nil) or
// client.Sticker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Sticker(data map[string]any) TrelloEntity {
	return NewStickerEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Tag(data map[string]any) TrelloEntity {
	return NewTagEntityFunc(sdk, data)
}


// Token returns a Token entity bound to this client.
// Idiomatic usage: client.Token(nil).List(nil, nil) or
// client.Token(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Token(data map[string]any) TrelloEntity {
	return NewTokenEntityFunc(sdk, data)
}


// TransferrableOrganization returns a TransferrableOrganization entity bound to this client.
// Idiomatic usage: client.TransferrableOrganization(nil).List(nil, nil) or
// client.TransferrableOrganization(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) TransferrableOrganization(data map[string]any) TrelloEntity {
	return NewTransferrableOrganizationEntityFunc(sdk, data)
}


// TrelloList returns a TrelloList entity bound to this client.
// Idiomatic usage: client.TrelloList(nil).List(nil, nil) or
// client.TrelloList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) TrelloList(data map[string]any) TrelloEntity {
	return NewTrelloListEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *TrelloSDK) Webhook(data map[string]any) TrelloEntity {
	return NewWebhookEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *TrelloSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewTrelloSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
