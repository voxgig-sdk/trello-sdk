// Typed models for the Trello SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/trello-sdk/go/core"
)

// Action is the typed data model for the action entity.
type Action struct {
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	MemberCreator *map[string]any `json:"memberCreator,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActionLoadMatch is the typed request payload for Action.LoadTyped.
type ActionLoadMatch struct {
	Id string `json:"id"`
	Display *bool `json:"display,omitempty"`
	Entity *bool `json:"entity,omitempty"`
	Field *string `json:"field,omitempty"`
	Member *bool `json:"member,omitempty"`
	MemberCreator *bool `json:"member_creator,omitempty"`
	MemberCreatorField *string `json:"member_creator_field,omitempty"`
	MemberField *string `json:"member_field,omitempty"`
}

// ActionListMatch is the typed request payload for Action.ListTyped.
type ActionListMatch struct {
	CardId string `json:"card_id"`
	Filter *string `json:"filter,omitempty"`
	Page *float64 `json:"page,omitempty"`
}

// ActionCreateData is the typed request payload for Action.CreateTyped.
type ActionCreateData struct {
	IdAction string `json:"id_action"`
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	MemberCreator *map[string]any `json:"memberCreator,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActionUpdateData is the typed request payload for Action.UpdateTyped.
type ActionUpdateData struct {
	Id string `json:"id"`
	Text string `json:"text"`
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	MemberCreator *map[string]any `json:"memberCreator,omitempty"`
	Type *string `json:"type,omitempty"`
}

// ActionRemoveMatch is the typed request payload for Action.RemoveTyped.
type ActionRemoveMatch struct {
	Id string `json:"id"`
}

// ActionReactionsSummary is the typed data model for the action_reactions_summary entity.
type ActionReactionsSummary struct {
}

// ActionReactionsSummaryLoadMatch is the typed request payload for ActionReactionsSummary.LoadTyped.
type ActionReactionsSummaryLoadMatch struct {
	IdAction string `json:"id_action"`
}

// Admin is the typed data model for the admin entity.
type Admin struct {
	Id *string `json:"id,omitempty"`
}

// AdminUpdateData is the typed request payload for Admin.UpdateTyped.
type AdminUpdateData struct {
	EnterprisId string `json:"enterpris_id"`
	Id string `json:"id"`
}

// AdminRemoveMatch is the typed request payload for Admin.RemoveTyped.
type AdminRemoveMatch struct {
	EnterprisId string `json:"enterpris_id"`
	Id string `json:"id"`
}

// Application is the typed data model for the application entity.
type Application struct {
}

// ApplicationCompliance is the typed data model for the application_compliance entity.
type ApplicationCompliance struct {
}

// ApplicationComplianceLoadMatch is the typed request payload for ApplicationCompliance.LoadTyped.
type ApplicationComplianceLoadMatch struct {
	Key string `json:"key"`
}

// AssociatedDomain is the typed data model for the associated_domain entity.
type AssociatedDomain struct {
}

// AssociatedDomainRemoveMatch is the typed request payload for AssociatedDomain.RemoveTyped.
type AssociatedDomainRemoveMatch struct {
	OrganizationId string `json:"organization_id"`
}

// Attachment is the typed data model for the attachment entity.
type Attachment struct {
	Id *string `json:"id,omitempty"`
}

// AttachmentLoadMatch is the typed request payload for Attachment.LoadTyped.
type AttachmentLoadMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
	Field *[]any `json:"field,omitempty"`
}

// AttachmentListMatch is the typed request payload for Attachment.ListTyped.
type AttachmentListMatch struct {
	CardId string `json:"card_id"`
	Field *string `json:"field,omitempty"`
	Filter *string `json:"filter,omitempty"`
}

// AttachmentRemoveMatch is the typed request payload for Attachment.RemoveTyped.
type AttachmentRemoveMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
}

// Batch is the typed data model for the batch entity.
type Batch struct {
}

// BatchLoadMatch is the typed request payload for Batch.LoadTyped.
type BatchLoadMatch struct {
	Url string `json:"url"`
}

// Board is the typed data model for the board entity.
type Board struct {
	Closed *bool `json:"closed,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DateLastView *string `json:"dateLastView,omitempty"`
	DatePluginDisable *string `json:"datePluginDisable,omitempty"`
	Desc *string `json:"desc,omitempty"`
	DescData *string `json:"descData,omitempty"`
	EnterpriseOwned *bool `json:"enterpriseOwned,omitempty"`
	Id string `json:"id"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	IdOrganization *string `json:"idOrganization,omitempty"`
	IdTags *string `json:"idTags,omitempty"`
	IxUpdate *int `json:"ixUpdate,omitempty"`
	LabelNames *map[string]any `json:"labelNames,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Memberships *string `json:"memberships,omitempty"`
	Name *string `json:"name,omitempty"`
	Pinned *bool `json:"pinned,omitempty"`
	PowerUps *string `json:"powerUps,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Starred *bool `json:"starred,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	TemplateGallery *string `json:"templateGallery,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BoardLoadMatch is the typed request payload for Board.LoadTyped.
type BoardLoadMatch struct {
	Id string `json:"id"`
	Action *string `json:"action,omitempty"`
	BoardStar *string `json:"board_star,omitempty"`
	Card *string `json:"card,omitempty"`
	CardPluginData *bool `json:"card_plugin_data,omitempty"`
	Checklist *string `json:"checklist,omitempty"`
	CustomField *bool `json:"custom_field,omitempty"`
	Field *string `json:"field,omitempty"`
	Label *string `json:"label,omitempty"`
	List *string `json:"list,omitempty"`
	Member *string `json:"member,omitempty"`
	Membership *string `json:"membership,omitempty"`
	MyPref *bool `json:"my_pref,omitempty"`
	Organization *bool `json:"organization,omitempty"`
	OrganizationPluginData *bool `json:"organization_plugin_data,omitempty"`
	PluginData *bool `json:"plugin_data,omitempty"`
	Tag *bool `json:"tag,omitempty"`
}

// BoardListMatch is the typed request payload for Board.ListTyped.
type BoardListMatch struct {
	MemberId string `json:"member_id"`
	Field *string `json:"field,omitempty"`
	Filter *string `json:"filter,omitempty"`
	List *string `json:"list,omitempty"`
	Organization *bool `json:"organization,omitempty"`
	OrganizationField *string `json:"organization_field,omitempty"`
}

// BoardCreateData is the typed request payload for Board.CreateTyped.
type BoardCreateData struct {
	DefaultLabel *bool `json:"default_label,omitempty"`
	DefaultList *bool `json:"default_list,omitempty"`
	Desc *string `json:"desc,omitempty"`
	IdBoardSource *string `json:"id_board_source,omitempty"`
	IdOrganization *string `json:"id_organization,omitempty"`
	KeepFromSource *string `json:"keep_from_source,omitempty"`
	Name string `json:"name"`
	PowerUp *string `json:"power_up,omitempty"`
	PrefsBackground *string `json:"prefs_background,omitempty"`
	PrefsCardAging *string `json:"prefs_card_aging,omitempty"`
	PrefsCardCover *bool `json:"prefs_card_cover,omitempty"`
	PrefsComment *string `json:"prefs_comment,omitempty"`
	PrefsInvitation *string `json:"prefs_invitation,omitempty"`
	PrefsPermissionLevel *string `json:"prefs_permission_level,omitempty"`
	PrefsSelfJoin *bool `json:"prefs_self_join,omitempty"`
	PrefsVoting *string `json:"prefs_voting,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DateLastView *string `json:"dateLastView,omitempty"`
	DatePluginDisable *string `json:"datePluginDisable,omitempty"`
	DescData *string `json:"descData,omitempty"`
	EnterpriseOwned *bool `json:"enterpriseOwned,omitempty"`
	Id string `json:"id"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	IdOrganization2 *string `json:"idOrganization,omitempty"`
	IdTags *string `json:"idTags,omitempty"`
	IxUpdate *int `json:"ixUpdate,omitempty"`
	LabelNames *map[string]any `json:"labelNames,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Memberships *string `json:"memberships,omitempty"`
	Pinned *bool `json:"pinned,omitempty"`
	PowerUps *string `json:"powerUps,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Starred *bool `json:"starred,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	TemplateGallery *string `json:"templateGallery,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BoardUpdateData is the typed request payload for Board.UpdateTyped.
type BoardUpdateData struct {
	Id string `json:"id"`
	Closed *bool `json:"closed,omitempty"`
	Desc *string `json:"desc,omitempty"`
	IdOrganization *string `json:"id_organization,omitempty"`
	Name *string `json:"name,omitempty"`
	PrefsBackground *string `json:"prefs/background,omitempty"`
	PrefsCalendarFeedEnabled *bool `json:"prefs/calendar_feed_enabled,omitempty"`
	PrefsCardAging *string `json:"prefs/card_aging,omitempty"`
	PrefsCardCover *bool `json:"prefs/card_cover,omitempty"`
	PrefsComment *string `json:"prefs/comment,omitempty"`
	PrefsHideVote *bool `json:"prefs/hide_vote,omitempty"`
	PrefsInvitation *string `json:"prefs/invitation,omitempty"`
	PrefsPermissionLevel *string `json:"prefs/permission_level,omitempty"`
	PrefsSelfJoin *bool `json:"prefs/self_join,omitempty"`
	PrefsVoting *string `json:"prefs/voting,omitempty"`
	Subscribed *string `json:"subscribed,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DateLastView *string `json:"dateLastView,omitempty"`
	DatePluginDisable *string `json:"datePluginDisable,omitempty"`
	DescData *string `json:"descData,omitempty"`
	EnterpriseOwned *bool `json:"enterpriseOwned,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	IdOrganization2 *string `json:"idOrganization,omitempty"`
	IdTags *string `json:"idTags,omitempty"`
	IxUpdate *int `json:"ixUpdate,omitempty"`
	LabelNames *map[string]any `json:"labelNames,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Memberships *string `json:"memberships,omitempty"`
	Pinned *bool `json:"pinned,omitempty"`
	PowerUps *string `json:"powerUps,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Starred *bool `json:"starred,omitempty"`
	TemplateGallery *string `json:"templateGallery,omitempty"`
	Url *string `json:"url,omitempty"`
}

// BoardRemoveMatch is the typed request payload for Board.RemoveTyped.
type BoardRemoveMatch struct {
	Id string `json:"id"`
}

// BoardBackground is the typed data model for the board_background entity.
type BoardBackground struct {
	Id *string `json:"id,omitempty"`
}

// BoardBackgroundLoadMatch is the typed request payload for BoardBackground.LoadTyped.
type BoardBackgroundLoadMatch struct {
	Id *string `json:"id,omitempty"`
	MemberId string `json:"member_id"`
	Field *string `json:"field,omitempty"`
	IdBackground *string `json:"id_background,omitempty"`
}

// BoardBackgroundListMatch is the typed request payload for BoardBackground.ListTyped.
type BoardBackgroundListMatch struct {
	MemberId string `json:"member_id"`
	Filter *string `json:"filter,omitempty"`
}

// BoardBackgroundCreateData is the typed request payload for BoardBackground.CreateTyped.
type BoardBackgroundCreateData struct {
	MemberId string `json:"member_id"`
	File string `json:"file"`
	Id *string `json:"id,omitempty"`
}

// BoardBackgroundUpdateData is the typed request payload for BoardBackground.UpdateTyped.
type BoardBackgroundUpdateData struct {
	Id *string `json:"id,omitempty"`
	MemberId string `json:"member_id"`
	Brightness *string `json:"brightness,omitempty"`
	Tile *bool `json:"tile,omitempty"`
	IdBackground *string `json:"id_background,omitempty"`
}

// BoardBackgroundRemoveMatch is the typed request payload for BoardBackground.RemoveTyped.
type BoardBackgroundRemoveMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// BoardPlugin is the typed data model for the board_plugin entity.
type BoardPlugin struct {
	Id *string `json:"id,omitempty"`
}

// BoardPluginRemoveMatch is the typed request payload for BoardPlugin.RemoveTyped.
type BoardPluginRemoveMatch struct {
	BoardId string `json:"board_id"`
	Id string `json:"id"`
}

// BoardStar is the typed data model for the board_star entity.
type BoardStar struct {
	Id *string `json:"id,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	Pos *int `json:"pos,omitempty"`
}

// BoardStarLoadMatch is the typed request payload for BoardStar.LoadTyped.
type BoardStarLoadMatch struct {
	Id *string `json:"id,omitempty"`
	MemberId string `json:"member_id"`
}

// BoardStarListMatch is the typed request payload for BoardStar.ListTyped.
type BoardStarListMatch struct {
	Id string `json:"id"`
	Filter *string `json:"filter,omitempty"`
}

// BoardStarCreateData is the typed request payload for BoardStar.CreateTyped.
type BoardStarCreateData struct {
	MemberId string `json:"member_id"`
	IdBoard string `json:"id_board"`
	Pos any `json:"pos"`
	Id *string `json:"id,omitempty"`
	IdBoard2 *string `json:"idBoard,omitempty"`
}

// BoardStarUpdateData is the typed request payload for BoardStar.UpdateTyped.
type BoardStarUpdateData struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	Pos *any `json:"pos,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
}

// BoardStarRemoveMatch is the typed request payload for BoardStar.RemoveTyped.
type BoardStarRemoveMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// Bulk is the typed data model for the bulk entity.
type Bulk struct {
	Id *string `json:"id,omitempty"`
}

// BulkLoadMatch is the typed request payload for Bulk.LoadTyped.
type BulkLoadMatch struct {
	EnterprisId string `json:"enterpris_id"`
	Id []any `json:"id"`
}

// BulkUpdateData is the typed request payload for Bulk.UpdateTyped.
type BulkUpdateData struct {
	Id string `json:"id"`
	IdOrganization []any `json:"id_organization"`
}

// Card is the typed data model for the card entity.
type Card struct {
	Address *string `json:"address,omitempty"`
	Badges *map[string]any `json:"badges,omitempty"`
	CardRole *string `json:"cardRole,omitempty"`
	CheckItemStates *[]any `json:"checkItemStates,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	Cover *map[string]any `json:"cover,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	Desc *string `json:"desc,omitempty"`
	DescData *map[string]any `json:"descData,omitempty"`
	Due *string `json:"due,omitempty"`
	DueReminder *string `json:"dueReminder,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAttachmentCover *string `json:"idAttachmentCover,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	IdChecklists *[]any `json:"idChecklists,omitempty"`
	IdLabels *[]any `json:"idLabels,omitempty"`
	IdList *string `json:"idList,omitempty"`
	IdMembers *[]any `json:"idMembers,omitempty"`
	IdMembersVoted *[]any `json:"idMembersVoted,omitempty"`
	IdShort *int `json:"idShort,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LocationName *string `json:"locationName,omitempty"`
	ManualCoverAttachment *bool `json:"manualCoverAttachment,omitempty"`
	MirrorSourceId *string `json:"mirrorSourceId,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *float64 `json:"pos,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CardLoadMatch is the typed request payload for Card.LoadTyped.
type CardLoadMatch struct {
	Id string `json:"id"`
	Action *string `json:"action,omitempty"`
	Attachment *string `json:"attachment,omitempty"`
	AttachmentField *string `json:"attachment_field,omitempty"`
	Board *bool `json:"board,omitempty"`
	BoardField *string `json:"board_field,omitempty"`
	CheckItemState *bool `json:"check_item_state,omitempty"`
	Checklist *string `json:"checklist,omitempty"`
	ChecklistField *string `json:"checklist_field,omitempty"`
	CustomFieldItem *bool `json:"custom_field_item,omitempty"`
	Field *string `json:"field,omitempty"`
	List *bool `json:"list,omitempty"`
	Member *bool `json:"member,omitempty"`
	MemberField *string `json:"member_field,omitempty"`
	MemberVotedField *string `json:"member_voted_field,omitempty"`
	MembersVoted *bool `json:"members_voted,omitempty"`
	PluginData *bool `json:"plugin_data,omitempty"`
	Sticker *bool `json:"sticker,omitempty"`
	StickerField *string `json:"sticker_field,omitempty"`
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	ActionId string `json:"action_id"`
	Field *string `json:"field,omitempty"`
}

// CardCreateData is the typed request payload for Card.CreateTyped.
type CardCreateData struct {
	Address *string `json:"address,omitempty"`
	CardRole *string `json:"card_role,omitempty"`
	Coordinate *string `json:"coordinate,omitempty"`
	Desc *string `json:"desc,omitempty"`
	Due *string `json:"due,omitempty"`
	DueComplete *bool `json:"due_complete,omitempty"`
	FileSource *string `json:"file_source,omitempty"`
	IdCardSource *string `json:"id_card_source,omitempty"`
	IdLabel *[]any `json:"id_label,omitempty"`
	IdList string `json:"id_list"`
	IdMember *[]any `json:"id_member,omitempty"`
	KeepFromSource *string `json:"keep_from_source,omitempty"`
	LocationName *string `json:"location_name,omitempty"`
	MimeType *string `json:"mime_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Start *string `json:"start,omitempty"`
	UrlSource *string `json:"url_source,omitempty"`
	Badges *map[string]any `json:"badges,omitempty"`
	CardRole2 *string `json:"cardRole,omitempty"`
	CheckItemStates *[]any `json:"checkItemStates,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	Cover *map[string]any `json:"cover,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DescData *map[string]any `json:"descData,omitempty"`
	DueReminder *string `json:"dueReminder,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAttachmentCover *string `json:"idAttachmentCover,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	IdChecklists *[]any `json:"idChecklists,omitempty"`
	IdLabels *[]any `json:"idLabels,omitempty"`
	IdList2 *string `json:"idList,omitempty"`
	IdMembers *[]any `json:"idMembers,omitempty"`
	IdMembersVoted *[]any `json:"idMembersVoted,omitempty"`
	IdShort *int `json:"idShort,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LocationName2 *string `json:"locationName,omitempty"`
	ManualCoverAttachment *bool `json:"manualCoverAttachment,omitempty"`
	MirrorSourceId *string `json:"mirrorSourceId,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CardUpdateData is the typed request payload for Card.UpdateTyped.
type CardUpdateData struct {
	Id string `json:"id"`
	Address *string `json:"address,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Coordinate *string `json:"coordinate,omitempty"`
	Cover *map[string]any `json:"cover,omitempty"`
	Desc *string `json:"desc,omitempty"`
	Due *string `json:"due,omitempty"`
	DueComplete *bool `json:"due_complete,omitempty"`
	IdAttachmentCover *string `json:"id_attachment_cover,omitempty"`
	IdBoard *string `json:"id_board,omitempty"`
	IdLabel *string `json:"id_label,omitempty"`
	IdList *string `json:"id_list,omitempty"`
	IdMember *string `json:"id_member,omitempty"`
	LocationName *string `json:"location_name,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Start *string `json:"start,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Badges *map[string]any `json:"badges,omitempty"`
	CardRole *string `json:"cardRole,omitempty"`
	CheckItemStates *[]any `json:"checkItemStates,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DescData *map[string]any `json:"descData,omitempty"`
	DueReminder *string `json:"dueReminder,omitempty"`
	IdAttachmentCover2 *string `json:"idAttachmentCover,omitempty"`
	IdBoard2 *string `json:"idBoard,omitempty"`
	IdChecklists *[]any `json:"idChecklists,omitempty"`
	IdLabels *[]any `json:"idLabels,omitempty"`
	IdList2 *string `json:"idList,omitempty"`
	IdMembers *[]any `json:"idMembers,omitempty"`
	IdMembersVoted *[]any `json:"idMembersVoted,omitempty"`
	IdShort *int `json:"idShort,omitempty"`
	Labels *[]any `json:"labels,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LocationName2 *string `json:"locationName,omitempty"`
	ManualCoverAttachment *bool `json:"manualCoverAttachment,omitempty"`
	MirrorSourceId *string `json:"mirrorSourceId,omitempty"`
	ShortLink *string `json:"shortLink,omitempty"`
	ShortUrl *string `json:"shortUrl,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CardRemoveMatch is the typed request payload for Card.RemoveTyped.
type CardRemoveMatch struct {
	Id string `json:"id"`
}

// CardCheckItemState is the typed data model for the card_check_item_state entity.
type CardCheckItemState struct {
	Id *string `json:"id,omitempty"`
}

// CardCheckItemStateLoadMatch is the typed request payload for CardCheckItemState.LoadTyped.
type CardCheckItemStateLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// CardList is the typed data model for the card_list entity.
type CardList struct {
	Id *string `json:"id,omitempty"`
}

// CardListLoadMatch is the typed request payload for CardList.LoadTyped.
type CardListLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// CheckItem is the typed data model for the check_item entity.
type CheckItem struct {
	Id *string `json:"id,omitempty"`
	IdChecklist *string `json:"idChecklist,omitempty"`
	Name *string `json:"name,omitempty"`
	NameData *string `json:"nameData,omitempty"`
	Pos *string `json:"pos,omitempty"`
	State *string `json:"state,omitempty"`
}

// CheckItemLoadMatch is the typed request payload for CheckItem.LoadTyped.
type CheckItemLoadMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// CheckItemUpdateData is the typed request payload for CheckItem.UpdateTyped.
type CheckItemUpdateData struct {
	CardId *string `json:"card_id,omitempty"`
	Id string `json:"id"`
	Due *string `json:"due,omitempty"`
	DueReminder *float64 `json:"due_reminder,omitempty"`
	IdChecklist *string `json:"id_checklist,omitempty"`
	IdMember *string `json:"id_member,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	State *string `json:"state,omitempty"`
	ChecklistId *string `json:"checklist_id,omitempty"`
	IdCard *string `json:"id_card,omitempty"`
	IdChecklist2 *string `json:"idChecklist,omitempty"`
	NameData *string `json:"nameData,omitempty"`
}

// CheckItemRemoveMatch is the typed request payload for CheckItem.RemoveTyped.
type CheckItemRemoveMatch struct {
	CardId *string `json:"card_id,omitempty"`
	Id string `json:"id"`
	ChecklistId *string `json:"checklist_id,omitempty"`
}

// Checklist is the typed data model for the checklist entity.
type Checklist struct {
	Id *string `json:"id,omitempty"`
}

// ChecklistLoadMatch is the typed request payload for Checklist.LoadTyped.
type ChecklistLoadMatch struct {
	Id string `json:"id"`
	Card *string `json:"card,omitempty"`
	CheckItem *string `json:"check_item,omitempty"`
	CheckItemField *string `json:"check_item_field,omitempty"`
	Field *string `json:"field,omitempty"`
}

// ChecklistCreateData is the typed request payload for Checklist.CreateTyped.
type ChecklistCreateData struct {
	IdCard string `json:"id_card"`
	IdChecklistSource *string `json:"id_checklist_source,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ChecklistUpdateData is the typed request payload for Checklist.UpdateTyped.
type ChecklistUpdateData struct {
	Field *string `json:"field,omitempty"`
	Id string `json:"id"`
	Value *any `json:"value,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
}

// ChecklistRemoveMatch is the typed request payload for Checklist.RemoveTyped.
type ChecklistRemoveMatch struct {
	CardId *string `json:"card_id,omitempty"`
	Id string `json:"id"`
}

// ClaimableOrganization is the typed data model for the claimable_organization entity.
type ClaimableOrganization struct {
	ActiveMembershipCount *float64 `json:"activeMembershipCount,omitempty"`
	DateLastActive *string `json:"dateLastActive,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Id *string `json:"id,omitempty"`
	IdActiveAdmins *[]any `json:"idActiveAdmins,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	Products *[]any `json:"products,omitempty"`
}

// ClaimableOrganizationListMatch is the typed request payload for ClaimableOrganization.ListTyped.
type ClaimableOrganizationListMatch struct {
	EnterprisId string `json:"enterpris_id"`
	ActiveSince *string `json:"active_since,omitempty"`
	Cursor *string `json:"cursor,omitempty"`
	InactiveSince *string `json:"inactive_since,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Name *string `json:"name,omitempty"`
}

// CustomBoardBackground is the typed data model for the custom_board_background entity.
type CustomBoardBackground struct {
	Id *string `json:"id,omitempty"`
}

// CustomBoardBackgroundRemoveMatch is the typed request payload for CustomBoardBackground.RemoveTyped.
type CustomBoardBackgroundRemoveMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// CustomEmoji is the typed data model for the custom_emoji entity.
type CustomEmoji struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomEmojiLoadMatch is the typed request payload for CustomEmoji.LoadTyped.
type CustomEmojiLoadMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	Field *string `json:"field,omitempty"`
}

// CustomEmojiListMatch is the typed request payload for CustomEmoji.ListTyped.
type CustomEmojiListMatch struct {
	MemberId string `json:"member_id"`
}

// CustomEmojiCreateData is the typed request payload for CustomEmoji.CreateTyped.
type CustomEmojiCreateData struct {
	MemberId string `json:"member_id"`
	File string `json:"file"`
	Name string `json:"name"`
	Id *string `json:"id,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomField is the typed data model for the custom_field entity.
type CustomField struct {
	CardFront *bool `json:"cardFront,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	DisplayCardFront *bool `json:"display_cardFront,omitempty"`
	DisplaycardFront *bool `json:"displaycardFront,omitempty"`
	FieldGroup *string `json:"fieldGroup,omitempty"`
	Id *string `json:"id,omitempty"`
	IdModel string `json:"idModel"`
	ModelType string `json:"modelType"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Pos *string `json:"pos,omitempty"`
	Type string `json:"type"`
}

// CustomFieldLoadMatch is the typed request payload for CustomField.LoadTyped.
type CustomFieldLoadMatch struct {
	Id string `json:"id"`
}

// CustomFieldListMatch is the typed request payload for CustomField.ListTyped.
type CustomFieldListMatch struct {
	BoardId string `json:"board_id"`
}

// CustomFieldCreateData is the typed request payload for CustomField.CreateTyped.
type CustomFieldCreateData struct {
	CardFront *bool `json:"cardFront,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	DisplayCardFront *bool `json:"display_cardFront,omitempty"`
	DisplaycardFront *bool `json:"displaycardFront,omitempty"`
	FieldGroup *string `json:"fieldGroup,omitempty"`
	Id *string `json:"id,omitempty"`
	IdModel string `json:"idModel"`
	ModelType string `json:"modelType"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Pos *string `json:"pos,omitempty"`
	Type string `json:"type"`
}

// CustomFieldUpdateData is the typed request payload for CustomField.UpdateTyped.
type CustomFieldUpdateData struct {
	Id string `json:"id"`
	CardFront *bool `json:"cardFront,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	DisplayCardFront *bool `json:"display_cardFront,omitempty"`
	DisplaycardFront *bool `json:"displaycardFront,omitempty"`
	FieldGroup *string `json:"fieldGroup,omitempty"`
	IdModel *string `json:"idModel,omitempty"`
	ModelType *string `json:"modelType,omitempty"`
	Name *string `json:"name,omitempty"`
	Options *[]any `json:"options,omitempty"`
	Pos *string `json:"pos,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CustomFieldRemoveMatch is the typed request payload for CustomField.RemoveTyped.
type CustomFieldRemoveMatch struct {
	Id string `json:"id"`
}

// CustomFieldItem is the typed data model for the custom_field_item entity.
type CustomFieldItem struct {
	Id *string `json:"id,omitempty"`
	IdCustomField *string `json:"idCustomField,omitempty"`
	IdModel *string `json:"idModel,omitempty"`
	ModelType *string `json:"modelType,omitempty"`
	Value *map[string]any `json:"value,omitempty"`
}

// CustomFieldItemListMatch is the typed request payload for CustomFieldItem.ListTyped.
type CustomFieldItemListMatch struct {
	CardId string `json:"card_id"`
}

// CustomSticker is the typed data model for the custom_sticker entity.
type CustomSticker struct {
	Id *string `json:"id,omitempty"`
	Scaled *[]any `json:"scaled,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomStickerLoadMatch is the typed request payload for CustomSticker.LoadTyped.
type CustomStickerLoadMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	Field *string `json:"field,omitempty"`
}

// CustomStickerListMatch is the typed request payload for CustomSticker.ListTyped.
type CustomStickerListMatch struct {
	MemberId string `json:"member_id"`
}

// CustomStickerCreateData is the typed request payload for CustomSticker.CreateTyped.
type CustomStickerCreateData struct {
	MemberId string `json:"member_id"`
	File string `json:"file"`
	Id *string `json:"id,omitempty"`
	Scaled *[]any `json:"scaled,omitempty"`
	Url *string `json:"url,omitempty"`
}

// CustomStickerRemoveMatch is the typed request payload for CustomSticker.RemoveTyped.
type CustomStickerRemoveMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// EmailPosition is the typed data model for the email_position entity.
type EmailPosition struct {
}

// EmailPositionUpdateData is the typed request payload for EmailPosition.UpdateTyped.
type EmailPositionUpdateData struct {
	BoardId string `json:"board_id"`
	Value string `json:"value"`
}

// Emoji is the typed data model for the emoji entity.
type Emoji struct {
	Category *string `json:"category,omitempty"`
	Keywords *[]any `json:"keywords,omitempty"`
	Name *string `json:"name,omitempty"`
	Native *string `json:"native,omitempty"`
	SheetX *float64 `json:"sheetX,omitempty"`
	SheetY *float64 `json:"sheetY,omitempty"`
	ShortName *string `json:"shortName,omitempty"`
	ShortNames *[]any `json:"shortNames,omitempty"`
	Text *string `json:"text,omitempty"`
	Texts *string `json:"texts,omitempty"`
	Tts *string `json:"tts,omitempty"`
	Unified *string `json:"unified,omitempty"`
}

// EmojiListMatch is the typed request payload for Emoji.ListTyped.
type EmojiListMatch struct {
	Locale *string `json:"locale,omitempty"`
	Spritesheet *bool `json:"spritesheet,omitempty"`
}

// Enterpris is the typed data model for the enterpris entity.
type Enterpris struct {
	DateOrganizationPrefsLastUpdated *string `json:"dateOrganizationPrefsLastUpdated,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	EnterpriseDomains *[]any `json:"enterpriseDomains,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAdmins *[]any `json:"idAdmins,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	Idp *map[string]any `json:"idp,omitempty"`
	IsRealEnterprise *bool `json:"isRealEnterprise,omitempty"`
	Licenses *map[string]any `json:"licenses,omitempty"`
	LogoHash *string `json:"logoHash,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationPrefs *map[string]any `json:"organizationPrefs,omitempty"`
	PluginWhitelistingEnabled *[]any `json:"pluginWhitelistingEnabled,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	Products *[]any `json:"products,omitempty"`
	SsoActivationFailed *bool `json:"ssoActivationFailed,omitempty"`
}

// EnterprisLoadMatch is the typed request payload for Enterpris.LoadTyped.
type EnterprisLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
	Member *string `json:"member,omitempty"`
	MemberCount *int `json:"member_count,omitempty"`
	MemberField *string `json:"member_field,omitempty"`
	MemberFilter *string `json:"member_filter,omitempty"`
	MemberSort *string `json:"member_sort,omitempty"`
	MemberSortBy *string `json:"member_sort_by,omitempty"`
	MemberSortOrder *string `json:"member_sort_order,omitempty"`
	MemberStartIndex *int `json:"member_start_index,omitempty"`
	Organization *string `json:"organization,omitempty"`
	OrganizationField *string `json:"organization_field,omitempty"`
	OrganizationMembership *string `json:"organization_membership,omitempty"`
	OrganizationPaidAccount *bool `json:"organization_paid_account,omitempty"`
}

// EnterprisCreateData is the typed request payload for Enterpris.CreateTyped.
type EnterprisCreateData struct {
	Id string `json:"id"`
	Expiration *string `json:"expiration,omitempty"`
	DateOrganizationPrefsLastUpdated *string `json:"dateOrganizationPrefsLastUpdated,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	EnterpriseDomains *[]any `json:"enterpriseDomains,omitempty"`
	IdAdmins *[]any `json:"idAdmins,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	Idp *map[string]any `json:"idp,omitempty"`
	IsRealEnterprise *bool `json:"isRealEnterprise,omitempty"`
	Licenses *map[string]any `json:"licenses,omitempty"`
	LogoHash *string `json:"logoHash,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationPrefs *map[string]any `json:"organizationPrefs,omitempty"`
	PluginWhitelistingEnabled *[]any `json:"pluginWhitelistingEnabled,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	Products *[]any `json:"products,omitempty"`
	SsoActivationFailed *bool `json:"ssoActivationFailed,omitempty"`
}

// EnterprisUpdateData is the typed request payload for Enterpris.UpdateTyped.
type EnterprisUpdateData struct {
	Id string `json:"id"`
	IdOrganization string `json:"id_organization"`
	DateOrganizationPrefsLastUpdated *string `json:"dateOrganizationPrefsLastUpdated,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Domains *[]any `json:"domains,omitempty"`
	EnterpriseDomains *[]any `json:"enterpriseDomains,omitempty"`
	IdAdmins *[]any `json:"idAdmins,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	Idp *map[string]any `json:"idp,omitempty"`
	IsRealEnterprise *bool `json:"isRealEnterprise,omitempty"`
	Licenses *map[string]any `json:"licenses,omitempty"`
	LogoHash *string `json:"logoHash,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	Name *string `json:"name,omitempty"`
	OrganizationPrefs *map[string]any `json:"organizationPrefs,omitempty"`
	PluginWhitelistingEnabled *[]any `json:"pluginWhitelistingEnabled,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	Products *[]any `json:"products,omitempty"`
	SsoActivationFailed *bool `json:"ssoActivationFailed,omitempty"`
}

// EnterprisSignupUrl is the typed data model for the enterpris_signup_url entity.
type EnterprisSignupUrl struct {
	Id *string `json:"id,omitempty"`
	SignupUrl *string `json:"signupUrl,omitempty"`
}

// EnterprisSignupUrlLoadMatch is the typed request payload for EnterprisSignupUrl.LoadTyped.
type EnterprisSignupUrlLoadMatch struct {
	Id string `json:"id"`
	Authenticate *bool `json:"authenticate,omitempty"`
	ConfirmationAccepted *bool `json:"confirmation_accepted,omitempty"`
	ReturnUrl *string `json:"return_url,omitempty"`
	TosAccepted *bool `json:"tos_accepted,omitempty"`
}

// EnterpriseAdmin is the typed data model for the enterprise_admin entity.
type EnterpriseAdmin struct {
	FullName *string `json:"fullName,omitempty"`
	Id *string `json:"id,omitempty"`
	Username *string `json:"username,omitempty"`
}

// EnterpriseAdminLoadMatch is the typed request payload for EnterpriseAdmin.LoadTyped.
type EnterpriseAdminLoadMatch struct {
	EnterprisId string `json:"enterpris_id"`
	Field *string `json:"field,omitempty"`
}

// EnterpriseAuditLog is the typed data model for the enterprise_audit_log entity.
type EnterpriseAuditLog struct {
	Date *string `json:"date,omitempty"`
	IdAction *string `json:"idAction,omitempty"`
	Member *map[string]any `json:"member,omitempty"`
	MemberCreator *map[string]any `json:"memberCreator,omitempty"`
	Organization *map[string]any `json:"organization,omitempty"`
	Type *string `json:"type,omitempty"`
}

// EnterpriseAuditLogListMatch is the typed request payload for EnterpriseAuditLog.ListTyped.
type EnterpriseAuditLogListMatch struct {
	EnterprisId string `json:"enterpris_id"`
}

// Export is the typed data model for the export entity.
type Export struct {
	Attempts *float64 `json:"attempts,omitempty"`
	ExportUrl *string `json:"exportUrl,omitempty"`
	Finished *bool `json:"finished,omitempty"`
	Id *string `json:"id,omitempty"`
	Size *string `json:"size,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
}

// ExportLoadMatch is the typed request payload for Export.LoadTyped.
type ExportLoadMatch struct {
	BoardId string `json:"board_id"`
	Id string `json:"id"`
}

// ExportListMatch is the typed request payload for Export.ListTyped.
type ExportListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// ExportCreateData is the typed request payload for Export.CreateTyped.
type ExportCreateData struct {
	BoardId string `json:"board_id"`
	Attachment *bool `json:"attachment,omitempty"`
	AttachmentAge *float64 `json:"attachment_age,omitempty"`
	Attempts *float64 `json:"attempts,omitempty"`
	ExportUrl *string `json:"exportUrl,omitempty"`
	Finished *bool `json:"finished,omitempty"`
	Id *string `json:"id,omitempty"`
	Size *string `json:"size,omitempty"`
	Stage *string `json:"stage,omitempty"`
	StartedAt *string `json:"startedAt,omitempty"`
	Status *map[string]any `json:"status,omitempty"`
}

// ExportRemoveMatch is the typed request payload for Export.RemoveTyped.
type ExportRemoveMatch struct {
	BoardId string `json:"board_id"`
	Id string `json:"id"`
}

// ExportDownload is the typed data model for the export_download entity.
type ExportDownload struct {
}

// ExportDownloadLoadMatch is the typed request payload for ExportDownload.LoadTyped.
type ExportDownloadLoadMatch struct {
	BoardId string `json:"board_id"`
	IdExport string `json:"id_export"`
}

// Generate is the typed data model for the generate entity.
type Generate struct {
}

// GenerateCreateData is the typed request payload for Generate.CreateTyped.
type GenerateCreateData struct {
	BoardId string `json:"board_id"`
}

// IdEmailList is the typed data model for the id_email_list entity.
type IdEmailList struct {
}

// IdEmailListUpdateData is the typed request payload for IdEmailList.UpdateTyped.
type IdEmailListUpdateData struct {
	BoardId string `json:"board_id"`
	Value string `json:"value"`
}

// IdLabel is the typed data model for the id_label entity.
type IdLabel struct {
	Id *string `json:"id,omitempty"`
}

// IdLabelRemoveMatch is the typed request payload for IdLabel.RemoveTyped.
type IdLabelRemoveMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
}

// IdMember is the typed data model for the id_member entity.
type IdMember struct {
	Id *string `json:"id,omitempty"`
}

// IdMemberRemoveMatch is the typed request payload for IdMember.RemoveTyped.
type IdMemberRemoveMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
}

// Label is the typed data model for the label entity.
type Label struct {
	Id *string `json:"id,omitempty"`
}

// LabelLoadMatch is the typed request payload for Label.LoadTyped.
type LabelLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// LabelCreateData is the typed request payload for Label.CreateTyped.
type LabelCreateData struct {
	Color string `json:"color"`
	IdBoard string `json:"id_board"`
	Name string `json:"name"`
	Id *string `json:"id,omitempty"`
}

// LabelUpdateData is the typed request payload for Label.UpdateTyped.
type LabelUpdateData struct {
	Id string `json:"id"`
	Color *string `json:"color,omitempty"`
	Name *string `json:"name,omitempty"`
	Field *string `json:"field,omitempty"`
	Value *string `json:"value,omitempty"`
}

// LabelRemoveMatch is the typed request payload for Label.RemoveTyped.
type LabelRemoveMatch struct {
	Id string `json:"id"`
}

// List is the typed data model for the list entity.
type List struct {
	Id *string `json:"id,omitempty"`
}

// ListLoadMatch is the typed request payload for List.LoadTyped.
type ListLoadMatch struct {
	BoardId *string `json:"board_id,omitempty"`
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// ListCreateData is the typed request payload for List.CreateTyped.
type ListCreateData struct {
	IdBoard string `json:"id_board"`
	IdListSource *string `json:"id_list_source,omitempty"`
	Name string `json:"name"`
	Pos *any `json:"pos,omitempty"`
	Id *string `json:"id,omitempty"`
}

// ListUpdateData is the typed request payload for List.UpdateTyped.
type ListUpdateData struct {
	Id string `json:"id"`
	Closed *bool `json:"closed,omitempty"`
	IdBoard *string `json:"id_board,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
	Field *string `json:"field,omitempty"`
	Value *any `json:"value,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
	AaEmail *string `json:"aaEmail,omitempty"`
	AaEnrolledDate *string `json:"aaEnrolledDate,omitempty"`
	AaId *string `json:"aaId,omitempty"`
	ActivityBlocked *bool `json:"activityBlocked,omitempty"`
	AvatarHash *string `json:"avatarHash,omitempty"`
	AvatarSource *string `json:"avatarSource,omitempty"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	Bio *string `json:"bio,omitempty"`
	BioData *map[string]any `json:"bioData,omitempty"`
	Confirmed *bool `json:"confirmed,omitempty"`
	Email *string `json:"email,omitempty"`
	FullName *string `json:"fullName,omitempty"`
	GravatarHash *string `json:"gravatarHash,omitempty"`
	Id *string `json:"id,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdBoardsPinned *[]any `json:"idBoardsPinned,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	IdEnterprisesAdmin *[]any `json:"idEnterprisesAdmin,omitempty"`
	IdEnterprisesDeactivated *[]any `json:"idEnterprisesDeactivated,omitempty"`
	IdMemberReferrer *string `json:"idMemberReferrer,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	IdPremOrgsAdmin *[]any `json:"idPremOrgsAdmin,omitempty"`
	Initials *string `json:"initials,omitempty"`
	IsAaMastered *bool `json:"isAaMastered,omitempty"`
	IxUpdate *float64 `json:"ixUpdate,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LoginTypes *[]any `json:"loginTypes,omitempty"`
	MarketingOptIn *map[string]any `json:"marketingOptIn,omitempty"`
	MemberType *string `json:"memberType,omitempty"`
	MessagesDismissed *map[string]any `json:"messagesDismissed,omitempty"`
	NonPublic *map[string]any `json:"nonPublic,omitempty"`
	NonPublicAvailable *bool `json:"nonPublicAvailable,omitempty"`
	OneTimeMessagesDismissed *[]any `json:"oneTimeMessagesDismissed,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Products *[]any `json:"products,omitempty"`
	Status *string `json:"status,omitempty"`
	Trophies *[]any `json:"trophies,omitempty"`
	UploadedAvatarHash *string `json:"uploadedAvatarHash,omitempty"`
	UploadedAvatarUrl *string `json:"uploadedAvatarUrl,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// MemberLoadMatch is the typed request payload for Member.LoadTyped.
type MemberLoadMatch struct {
	Id string `json:"id"`
	Action *string `json:"action,omitempty"`
	Board *string `json:"board,omitempty"`
	BoardBackground *string `json:"board_background,omitempty"`
	BoardStar *bool `json:"board_star,omitempty"`
	BoardsInvited *string `json:"boards_invited,omitempty"`
	BoardsInvitedField *string `json:"boards_invited_field,omitempty"`
	Card *string `json:"card,omitempty"`
	CustomBoardBackground *string `json:"custom_board_background,omitempty"`
	CustomEmoji *string `json:"custom_emoji,omitempty"`
	CustomSticker *string `json:"custom_sticker,omitempty"`
	Field *string `json:"field,omitempty"`
	Notification *string `json:"notification,omitempty"`
	Organization *string `json:"organization,omitempty"`
	OrganizationField *string `json:"organization_field,omitempty"`
	OrganizationPaidAccount *bool `json:"organization_paid_account,omitempty"`
	OrganizationsInvited *string `json:"organizations_invited,omitempty"`
	OrganizationsInvitedField *string `json:"organizations_invited_field,omitempty"`
	PaidAccount *bool `json:"paid_account,omitempty"`
	SavedSearch *bool `json:"saved_search,omitempty"`
	Token *string `json:"token,omitempty"`
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
	IdBoard *string `json:"id_board,omitempty"`
	IdOrganization *string `json:"id_organization,omitempty"`
	Limit *int `json:"limit,omitempty"`
	OnlyOrgMember *bool `json:"only_org_member,omitempty"`
	Query string `json:"query"`
}

// MemberCreateData is the typed request payload for Member.CreateTyped.
type MemberCreateData struct {
	Id string `json:"id"`
	File *string `json:"file,omitempty"`
	Value *string `json:"value,omitempty"`
	AaEmail *string `json:"aaEmail,omitempty"`
	AaEnrolledDate *string `json:"aaEnrolledDate,omitempty"`
	AaId *string `json:"aaId,omitempty"`
	ActivityBlocked *bool `json:"activityBlocked,omitempty"`
	AvatarHash *string `json:"avatarHash,omitempty"`
	AvatarSource *string `json:"avatarSource,omitempty"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	Bio *string `json:"bio,omitempty"`
	BioData *map[string]any `json:"bioData,omitempty"`
	Confirmed *bool `json:"confirmed,omitempty"`
	Email *string `json:"email,omitempty"`
	FullName *string `json:"fullName,omitempty"`
	GravatarHash *string `json:"gravatarHash,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdBoardsPinned *[]any `json:"idBoardsPinned,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	IdEnterprisesAdmin *[]any `json:"idEnterprisesAdmin,omitempty"`
	IdEnterprisesDeactivated *[]any `json:"idEnterprisesDeactivated,omitempty"`
	IdMemberReferrer *string `json:"idMemberReferrer,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	IdPremOrgsAdmin *[]any `json:"idPremOrgsAdmin,omitempty"`
	Initials *string `json:"initials,omitempty"`
	IsAaMastered *bool `json:"isAaMastered,omitempty"`
	IxUpdate *float64 `json:"ixUpdate,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LoginTypes *[]any `json:"loginTypes,omitempty"`
	MarketingOptIn *map[string]any `json:"marketingOptIn,omitempty"`
	MemberType *string `json:"memberType,omitempty"`
	MessagesDismissed *map[string]any `json:"messagesDismissed,omitempty"`
	NonPublic *map[string]any `json:"nonPublic,omitempty"`
	NonPublicAvailable *bool `json:"nonPublicAvailable,omitempty"`
	OneTimeMessagesDismissed *[]any `json:"oneTimeMessagesDismissed,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Products *[]any `json:"products,omitempty"`
	Status *string `json:"status,omitempty"`
	Trophies *[]any `json:"trophies,omitempty"`
	UploadedAvatarHash *string `json:"uploadedAvatarHash,omitempty"`
	UploadedAvatarUrl *string `json:"uploadedAvatarUrl,omitempty"`
	Url *string `json:"url,omitempty"`
	Username *string `json:"username,omitempty"`
}

// MemberUpdateData is the typed request payload for Member.UpdateTyped.
type MemberUpdateData struct {
	Id string `json:"id"`
	AvatarSource *string `json:"avatar_source,omitempty"`
	Bio *string `json:"bio,omitempty"`
	FullName *string `json:"full_name,omitempty"`
	Initial *string `json:"initial,omitempty"`
	PrefsColorBlind *bool `json:"prefs/color_blind,omitempty"`
	PrefsLocale *string `json:"prefs/locale,omitempty"`
	PrefsMinutesBetweenSummary *int `json:"prefs/minutes_between_summary,omitempty"`
	Username *string `json:"username,omitempty"`
	BoardId *string `json:"board_id,omitempty"`
	AllowBillableGuest *bool `json:"allow_billable_guest,omitempty"`
	Type *string `json:"type,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
	AaEmail *string `json:"aaEmail,omitempty"`
	AaEnrolledDate *string `json:"aaEnrolledDate,omitempty"`
	AaId *string `json:"aaId,omitempty"`
	ActivityBlocked *bool `json:"activityBlocked,omitempty"`
	AvatarHash *string `json:"avatarHash,omitempty"`
	AvatarSource2 *string `json:"avatarSource,omitempty"`
	AvatarUrl *string `json:"avatarUrl,omitempty"`
	BioData *map[string]any `json:"bioData,omitempty"`
	Confirmed *bool `json:"confirmed,omitempty"`
	Email *string `json:"email,omitempty"`
	FullName2 *string `json:"fullName,omitempty"`
	GravatarHash *string `json:"gravatarHash,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdBoardsPinned *[]any `json:"idBoardsPinned,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	IdEnterprisesAdmin *[]any `json:"idEnterprisesAdmin,omitempty"`
	IdEnterprisesDeactivated *[]any `json:"idEnterprisesDeactivated,omitempty"`
	IdMemberReferrer *string `json:"idMemberReferrer,omitempty"`
	IdOrganizations *[]any `json:"idOrganizations,omitempty"`
	IdPremOrgsAdmin *[]any `json:"idPremOrgsAdmin,omitempty"`
	Initials *string `json:"initials,omitempty"`
	IsAaMastered *bool `json:"isAaMastered,omitempty"`
	IxUpdate *float64 `json:"ixUpdate,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	LoginTypes *[]any `json:"loginTypes,omitempty"`
	MarketingOptIn *map[string]any `json:"marketingOptIn,omitempty"`
	MemberType *string `json:"memberType,omitempty"`
	MessagesDismissed *map[string]any `json:"messagesDismissed,omitempty"`
	NonPublic *map[string]any `json:"nonPublic,omitempty"`
	NonPublicAvailable *bool `json:"nonPublicAvailable,omitempty"`
	OneTimeMessagesDismissed *[]any `json:"oneTimeMessagesDismissed,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Products *[]any `json:"products,omitempty"`
	Status *string `json:"status,omitempty"`
	Trophies *[]any `json:"trophies,omitempty"`
	UploadedAvatarHash *string `json:"uploadedAvatarHash,omitempty"`
	UploadedAvatarUrl *string `json:"uploadedAvatarUrl,omitempty"`
	Url *string `json:"url,omitempty"`
}

// MemberRemoveMatch is the typed request payload for Member.RemoveTyped.
type MemberRemoveMatch struct {
	BoardId *string `json:"board_id,omitempty"`
	Id string `json:"id"`
	OrganizationId *string `json:"organization_id,omitempty"`
}

// MemberPrivacy is the typed data model for the member_privacy entity.
type MemberPrivacy struct {
}

// MemberPrivacyLoadMatch is the typed request payload for MemberPrivacy.LoadTyped.
type MemberPrivacyLoadMatch struct {
	PluginId string `json:"plugin_id"`
}

// MembersVoted is the typed data model for the members_voted entity.
type MembersVoted struct {
	Id *string `json:"id,omitempty"`
}

// MembersVotedLoadMatch is the typed request payload for MembersVoted.LoadTyped.
type MembersVotedLoadMatch struct {
	CardId string `json:"card_id"`
	Field *string `json:"field,omitempty"`
}

// MembersVotedRemoveMatch is the typed request payload for MembersVoted.RemoveTyped.
type MembersVotedRemoveMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
}

// Membership is the typed data model for the membership entity.
type Membership struct {
	Admin *bool `json:"admin,omitempty"`
	Collaborator *bool `json:"collaborator,omitempty"`
	Deactivated *bool `json:"deactivated,omitempty"`
	Id *string `json:"id,omitempty"`
	Licensed *bool `json:"licensed,omitempty"`
	Managed *bool `json:"managed,omitempty"`
	Member *map[string]any `json:"member,omitempty"`
}

// MembershipLoadMatch is the typed request payload for Membership.LoadTyped.
type MembershipLoadMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
	Member *bool `json:"member,omitempty"`
}

// MembershipListMatch is the typed request payload for Membership.ListTyped.
type MembershipListMatch struct {
	OrganizationId string `json:"organization_id"`
	Filter *string `json:"filter,omitempty"`
	Member *bool `json:"member,omitempty"`
}

// MembershipUpdateData is the typed request payload for Membership.UpdateTyped.
type MembershipUpdateData struct {
	BoardId string `json:"board_id"`
	Id string `json:"id"`
	MemberField *string `json:"member_field,omitempty"`
	Type string `json:"type"`
	Admin *bool `json:"admin,omitempty"`
	Collaborator *bool `json:"collaborator,omitempty"`
	Deactivated *bool `json:"deactivated,omitempty"`
	Licensed *bool `json:"licensed,omitempty"`
	Managed *bool `json:"managed,omitempty"`
	Member *map[string]any `json:"member,omitempty"`
}

// MostRecent is the typed data model for the most_recent entity.
type MostRecent struct {
}

// NewBillableGuest is the typed data model for the new_billable_guest entity.
type NewBillableGuest struct {
	Id *string `json:"id,omitempty"`
}

// NewBillableGuestLoadMatch is the typed request payload for NewBillableGuest.LoadTyped.
type NewBillableGuestLoadMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// Notification is the typed data model for the notification entity.
type Notification struct {
	Board map[string]any `json:"board"`
	Card *map[string]any `json:"card,omitempty"`
	Data *string `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	DateRead *string `json:"dateRead,omitempty"`
	Id *string `json:"id,omitempty"`
	IdAction *string `json:"idAction,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	Type *string `json:"type,omitempty"`
	Unread *bool `json:"unread,omitempty"`
}

// NotificationLoadMatch is the typed request payload for Notification.LoadTyped.
type NotificationLoadMatch struct {
	Id string `json:"id"`
	Board *bool `json:"board,omitempty"`
	BoardField *string `json:"board_field,omitempty"`
	Card *bool `json:"card,omitempty"`
	CardField *string `json:"card_field,omitempty"`
	Display *bool `json:"display,omitempty"`
	Entity *bool `json:"entity,omitempty"`
	Field *string `json:"field,omitempty"`
	List *bool `json:"list,omitempty"`
	Member *bool `json:"member,omitempty"`
	MemberCreator *bool `json:"member_creator,omitempty"`
	MemberCreatorField *string `json:"member_creator_field,omitempty"`
	MemberField *string `json:"member_field,omitempty"`
	Organization *bool `json:"organization,omitempty"`
	OrganizationField *string `json:"organization_field,omitempty"`
}

// NotificationListMatch is the typed request payload for Notification.ListTyped.
type NotificationListMatch struct {
	MemberId string `json:"member_id"`
	Before *string `json:"before,omitempty"`
	Display *bool `json:"display,omitempty"`
	Entity *bool `json:"entity,omitempty"`
	Field *string `json:"field,omitempty"`
	Filter *string `json:"filter,omitempty"`
	Limit *int `json:"limit,omitempty"`
	MemberCreator *bool `json:"member_creator,omitempty"`
	MemberCreatorField *string `json:"member_creator_field,omitempty"`
	Page *int `json:"page,omitempty"`
	ReadFilter *string `json:"read_filter,omitempty"`
	Since *string `json:"since,omitempty"`
}

// NotificationUpdateData is the typed request payload for Notification.UpdateTyped.
type NotificationUpdateData struct {
	Id string `json:"id"`
	Unread *bool `json:"unread,omitempty"`
	Board *map[string]any `json:"board,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	Data *string `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	DateRead *string `json:"dateRead,omitempty"`
	IdAction *string `json:"idAction,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	Type *string `json:"type,omitempty"`
}

// NotificationChannelSetting is the typed data model for the notification_channel_setting entity.
type NotificationChannelSetting struct {
	BlockedKeys *[]any `json:"blockedKeys,omitempty"`
	Channel *string `json:"channel,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMember *string `json:"idMember,omitempty"`
}

// NotificationChannelSettingLoadMatch is the typed request payload for NotificationChannelSetting.LoadTyped.
type NotificationChannelSettingLoadMatch struct {
	Channel string `json:"channel"`
	MemberId string `json:"member_id"`
}

// NotificationChannelSettingListMatch is the typed request payload for NotificationChannelSetting.ListTyped.
type NotificationChannelSettingListMatch struct {
	MemberId string `json:"member_id"`
}

// NotificationChannelSettingUpdateData is the typed request payload for NotificationChannelSetting.UpdateTyped.
type NotificationChannelSettingUpdateData struct {
	Channel string `json:"channel"`
	MemberId string `json:"member_id"`
	BlockedKeys *[]any `json:"blockedKeys,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMember *string `json:"idMember,omitempty"`
}

// NotificationList is the typed data model for the notification_list entity.
type NotificationList struct {
	Id *string `json:"id,omitempty"`
}

// NotificationListLoadMatch is the typed request payload for NotificationList.LoadTyped.
type NotificationListLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// NotificationMemberCreator is the typed data model for the notification_member_creator entity.
type NotificationMemberCreator struct {
	Id *string `json:"id,omitempty"`
}

// NotificationMemberCreatorLoadMatch is the typed request payload for NotificationMemberCreator.LoadTyped.
type NotificationMemberCreatorLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
}

// NotificationsChannelSetting is the typed data model for the notifications_channel_setting entity.
type NotificationsChannelSetting struct {
}

// Option is the typed data model for the option entity.
type Option struct {
	Id *string `json:"id,omitempty"`
}

// OptionLoadMatch is the typed request payload for Option.LoadTyped.
type OptionLoadMatch struct {
	CustomFieldId string `json:"custom_field_id"`
	Id *string `json:"id,omitempty"`
}

// OptionRemoveMatch is the typed request payload for Option.RemoveTyped.
type OptionRemoveMatch struct {
	CustomFieldId string `json:"custom_field_id"`
	Id string `json:"id"`
}

// OrgInviteRestrict is the typed data model for the org_invite_restrict entity.
type OrgInviteRestrict struct {
}

// OrgInviteRestrictRemoveMatch is the typed request payload for OrgInviteRestrict.RemoveTyped.
type OrgInviteRestrictRemoveMatch struct {
	OrganizationId string `json:"organization_id"`
}

// Organization is the typed data model for the organization entity.
type Organization struct {
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Id *string `json:"id,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	Memberships *[]any `json:"memberships,omitempty"`
	Name *string `json:"name,omitempty"`
	Offering *string `json:"offering,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Url *string `json:"url,omitempty"`
}

// OrganizationLoadMatch is the typed request payload for Organization.LoadTyped.
type OrganizationLoadMatch struct {
	Id string `json:"id"`
}

// OrganizationListMatch is the typed request payload for Organization.ListTyped.
type OrganizationListMatch struct {
	EnterprisId string `json:"enterpris_id"`
	Count *int `json:"count,omitempty"`
	Field *string `json:"field,omitempty"`
	Filter *string `json:"filter,omitempty"`
	StartIndex *int `json:"start_index,omitempty"`
}

// OrganizationCreateData is the typed request payload for Organization.CreateTyped.
type OrganizationCreateData struct {
	Desc *string `json:"desc,omitempty"`
	DisplayName string `json:"display_name"`
	Name *string `json:"name,omitempty"`
	Website *string `json:"website,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DisplayName2 *string `json:"displayName,omitempty"`
	Id *string `json:"id,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	Memberships *[]any `json:"memberships,omitempty"`
	Offering *string `json:"offering,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Url *string `json:"url,omitempty"`
}

// OrganizationUpdateData is the typed request payload for Organization.UpdateTyped.
type OrganizationUpdateData struct {
	Id string `json:"id"`
	Desc *string `json:"desc,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Name *string `json:"name,omitempty"`
	PrefsAssociatedDomain *string `json:"prefs/associated_domain,omitempty"`
	PrefsBoardVisibilityRestrictOrg *string `json:"prefs/board_visibility_restrict/org,omitempty"`
	PrefsBoardVisibilityRestrictPrivate *string `json:"prefs/board_visibility_restrict/private,omitempty"`
	PrefsBoardVisibilityRestrictPublic *string `json:"prefs/board_visibility_restrict/public,omitempty"`
	PrefsExternalMembersDisabled *bool `json:"prefs/external_members_disabled,omitempty"`
	PrefsGoogleAppsVersion *int `json:"prefs/google_apps_version,omitempty"`
	PrefsOrgInviteRestrict *string `json:"prefs/org_invite_restrict,omitempty"`
	PrefsPermissionLevel *string `json:"prefs/permission_level,omitempty"`
	Website *string `json:"website,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DisplayName2 *string `json:"displayName,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	Memberships *[]any `json:"memberships,omitempty"`
	Offering *string `json:"offering,omitempty"`
	Prefs *map[string]any `json:"prefs,omitempty"`
	PremiumFeatures *[]any `json:"premiumFeatures,omitempty"`
	Url *string `json:"url,omitempty"`
}

// OrganizationRemoveMatch is the typed request payload for Organization.RemoveTyped.
type OrganizationRemoveMatch struct {
	EnterprisId *string `json:"enterpris_id,omitempty"`
	Id string `json:"id"`
}

// PendingOrganization is the typed data model for the pending_organization entity.
type PendingOrganization struct {
	Date *string `json:"date,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMember *string `json:"idMember,omitempty"`
	LogoUrl *string `json:"logoUrl,omitempty"`
	MemberRequestor *map[string]any `json:"memberRequestor,omitempty"`
	MembershipCount *float64 `json:"membershipCount,omitempty"`
	Transferability *map[string]any `json:"transferability,omitempty"`
}

// PendingOrganizationListMatch is the typed request payload for PendingOrganization.ListTyped.
type PendingOrganizationListMatch struct {
	EnterprisId string `json:"enterpris_id"`
	ActiveSince *string `json:"active_since,omitempty"`
	InactiveSince *string `json:"inactive_since,omitempty"`
}

// Plugin is the typed data model for the plugin entity.
type Plugin struct {
	Id *string `json:"id,omitempty"`
}

// PluginLoadMatch is the typed request payload for Plugin.LoadTyped.
type PluginLoadMatch struct {
	Id string `json:"id"`
}

// PluginListMatch is the typed request payload for Plugin.ListTyped.
type PluginListMatch struct {
	BoardId string `json:"board_id"`
}

// PluginUpdateData is the typed request payload for Plugin.UpdateTyped.
type PluginUpdateData struct {
	Id string `json:"id"`
}

// PluginData is the typed data model for the plugin_data entity.
type PluginData struct {
}

// PluginDataLoadMatch is the typed request payload for PluginData.LoadTyped.
type PluginDataLoadMatch struct {
	CardId string `json:"card_id"`
}

// PluginDataListMatch is the typed request payload for PluginData.ListTyped.
type PluginDataListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// PluginListing is the typed data model for the plugin_listing entity.
type PluginListing struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	Overview *string `json:"overview,omitempty"`
}

// PluginListingCreateData is the typed request payload for PluginListing.CreateTyped.
type PluginListingCreateData struct {
	IdPlugin string `json:"id_plugin"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	Overview *string `json:"overview,omitempty"`
}

// PluginListingUpdateData is the typed request payload for PluginListing.UpdateTyped.
type PluginListingUpdateData struct {
	Id string `json:"id"`
	IdPlugin string `json:"id_plugin"`
	Description *string `json:"description,omitempty"`
	Locale *string `json:"locale,omitempty"`
	Name *string `json:"name,omitempty"`
	Overview *string `json:"overview,omitempty"`
}

// Reaction is the typed data model for the reaction entity.
type Reaction struct {
	Id *string `json:"id,omitempty"`
}

// ReactionLoadMatch is the typed request payload for Reaction.LoadTyped.
type ReactionLoadMatch struct {
	Id *string `json:"id,omitempty"`
	IdAction string `json:"id_action"`
	Emoji *bool `json:"emoji,omitempty"`
	Member *bool `json:"member,omitempty"`
}

// ReactionRemoveMatch is the typed request payload for Reaction.RemoveTyped.
type ReactionRemoveMatch struct {
	Id string `json:"id"`
	IdAction string `json:"id_action"`
}

// Read is the typed data model for the read entity.
type Read struct {
}

// ReadCreateData is the typed request payload for Read.CreateTyped.
type ReadCreateData struct {
	Ids *[]any `json:"ids,omitempty"`
	Read *bool `json:"read,omitempty"`
}

// SavedSearch is the typed data model for the saved_search entity.
type SavedSearch struct {
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Query *string `json:"query,omitempty"`
}

// SavedSearchLoadMatch is the typed request payload for SavedSearch.LoadTyped.
type SavedSearchLoadMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// SavedSearchListMatch is the typed request payload for SavedSearch.ListTyped.
type SavedSearchListMatch struct {
	MemberId string `json:"member_id"`
}

// SavedSearchCreateData is the typed request payload for SavedSearch.CreateTyped.
type SavedSearchCreateData struct {
	MemberId string `json:"member_id"`
	Name string `json:"name"`
	Pos any `json:"pos"`
	Query string `json:"query"`
	Id *string `json:"id,omitempty"`
}

// SavedSearchUpdateData is the typed request payload for SavedSearch.UpdateTyped.
type SavedSearchUpdateData struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	Name *string `json:"name,omitempty"`
	Pos *string `json:"pos,omitempty"`
	Query *string `json:"query,omitempty"`
}

// SavedSearchRemoveMatch is the typed request payload for SavedSearch.RemoveTyped.
type SavedSearchRemoveMatch struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
}

// Search is the typed data model for the search entity.
type Search struct {
}

// SearchListMatch is the typed request payload for Search.ListTyped.
type SearchListMatch struct {
	BoardField *string `json:"board_field,omitempty"`
	BoardOrganization *bool `json:"board_organization,omitempty"`
	BoardsLimit *int `json:"boards_limit,omitempty"`
	CardAttachment *string `json:"card_attachment,omitempty"`
	CardBoard *bool `json:"card_board,omitempty"`
	CardField *string `json:"card_field,omitempty"`
	CardList *bool `json:"card_list,omitempty"`
	CardMember *bool `json:"card_member,omitempty"`
	CardSticker *bool `json:"card_sticker,omitempty"`
	CardsLimit *int `json:"cards_limit,omitempty"`
	CardsPage *float64 `json:"cards_page,omitempty"`
	IdBoard *any `json:"id_board,omitempty"`
	IdCard *string `json:"id_card,omitempty"`
	IdOrganization *string `json:"id_organization,omitempty"`
	MemberField *string `json:"member_field,omitempty"`
	MembersLimit *int `json:"members_limit,omitempty"`
	ModelType *string `json:"model_type,omitempty"`
	OrganizationField *string `json:"organization_field,omitempty"`
	OrganizationsLimit *int `json:"organizations_limit,omitempty"`
	Partial *bool `json:"partial,omitempty"`
	Query string `json:"query"`
}

// ShowSidebar is the typed data model for the show_sidebar entity.
type ShowSidebar struct {
}

// ShowSidebarUpdateData is the typed request payload for ShowSidebar.UpdateTyped.
type ShowSidebarUpdateData struct {
	BoardId string `json:"board_id"`
	Value bool `json:"value"`
}

// ShowSidebarActivity is the typed data model for the show_sidebar_activity entity.
type ShowSidebarActivity struct {
}

// ShowSidebarActivityUpdateData is the typed request payload for ShowSidebarActivity.UpdateTyped.
type ShowSidebarActivityUpdateData struct {
	BoardId string `json:"board_id"`
	Value bool `json:"value"`
}

// ShowSidebarBoardAction is the typed data model for the show_sidebar_board_action entity.
type ShowSidebarBoardAction struct {
}

// ShowSidebarBoardActionUpdateData is the typed request payload for ShowSidebarBoardAction.UpdateTyped.
type ShowSidebarBoardActionUpdateData struct {
	BoardId string `json:"board_id"`
	Value bool `json:"value"`
}

// ShowSidebarMember is the typed data model for the show_sidebar_member entity.
type ShowSidebarMember struct {
}

// ShowSidebarMemberUpdateData is the typed request payload for ShowSidebarMember.UpdateTyped.
type ShowSidebarMemberUpdateData struct {
	BoardId string `json:"board_id"`
	Value bool `json:"value"`
}

// Sticker is the typed data model for the sticker entity.
type Sticker struct {
	Id *string `json:"id,omitempty"`
}

// StickerLoadMatch is the typed request payload for Sticker.LoadTyped.
type StickerLoadMatch struct {
	CardId string `json:"card_id"`
	Id *string `json:"id,omitempty"`
	Field *string `json:"field,omitempty"`
}

// StickerUpdateData is the typed request payload for Sticker.UpdateTyped.
type StickerUpdateData struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
	Left float64 `json:"left"`
	Rotate *float64 `json:"rotate,omitempty"`
	Top float64 `json:"top"`
	ZIndex int `json:"z_index"`
}

// StickerRemoveMatch is the typed request payload for Sticker.RemoveTyped.
type StickerRemoveMatch struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
}

// Tag is the typed data model for the tag entity.
type Tag struct {
	Id *string `json:"id,omitempty"`
}

// TagListMatch is the typed request payload for Tag.ListTyped.
type TagListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// TagRemoveMatch is the typed request payload for Tag.RemoveTyped.
type TagRemoveMatch struct {
	Id string `json:"id"`
	OrganizationId string `json:"organization_id"`
}

// Token is the typed data model for the token entity.
type Token struct {
	DateCreated *string `json:"dateCreated,omitempty"`
	DateExpires *string `json:"dateExpires,omitempty"`
	Id *string `json:"id,omitempty"`
	IdMember *string `json:"idMember,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Permissions *[]any `json:"permissions,omitempty"`
}

// TokenLoadMatch is the typed request payload for Token.LoadTyped.
type TokenLoadMatch struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
	Webhook *bool `json:"webhook,omitempty"`
}

// TokenListMatch is the typed request payload for Token.ListTyped.
type TokenListMatch struct {
	MemberId string `json:"member_id"`
	Webhook *bool `json:"webhook,omitempty"`
}

// TokenRemoveMatch is the typed request payload for Token.RemoveTyped.
type TokenRemoveMatch struct {
	Id string `json:"id"`
}

// TransferrableOrganization is the typed data model for the transferrable_organization entity.
type TransferrableOrganization struct {
	Id *string `json:"id,omitempty"`
	NewBillableMembers *[]any `json:"newBillableMembers,omitempty"`
	RestrictedMembers *[]any `json:"restrictedMembers,omitempty"`
	Transferrable *bool `json:"transferrable,omitempty"`
}

// TransferrableOrganizationLoadMatch is the typed request payload for TransferrableOrganization.LoadTyped.
type TransferrableOrganizationLoadMatch struct {
	EnterprisId string `json:"enterpris_id"`
	Id string `json:"id"`
}

// TrelloList is the typed data model for the trello_list entity.
type TrelloList struct {
	Attachments *map[string]any `json:"attachments,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Id *string `json:"id,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *float64 `json:"pos,omitempty"`
	SoftLimit *string `json:"softLimit,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
}

// TrelloListLoadMatch is the typed request payload for TrelloList.LoadTyped.
type TrelloListLoadMatch struct {
	ActionId string `json:"action_id"`
	Field *string `json:"field,omitempty"`
}

// TrelloListListMatch is the typed request payload for TrelloList.ListTyped.
type TrelloListListMatch struct {
	BoardId string `json:"board_id"`
	Card *string `json:"card,omitempty"`
	CardField *string `json:"card_field,omitempty"`
	Field *string `json:"field,omitempty"`
	Filter *string `json:"filter,omitempty"`
}

// TrelloListCreateData is the typed request payload for TrelloList.CreateTyped.
type TrelloListCreateData struct {
	BoardId string `json:"board_id"`
	Name string `json:"name"`
	Pos *string `json:"pos,omitempty"`
	Attachments *map[string]any `json:"attachments,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Id *string `json:"id,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	SoftLimit *string `json:"softLimit,omitempty"`
	Subscribed *bool `json:"subscribed,omitempty"`
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
	Active *bool `json:"active,omitempty"`
	CallbackURL *string `json:"callbackURL,omitempty"`
	ConsecutiveFailures *float64 `json:"consecutiveFailures,omitempty"`
	Description *string `json:"description,omitempty"`
	FirstConsecutiveFailDate *string `json:"firstConsecutiveFailDate,omitempty"`
	Id *string `json:"id,omitempty"`
	IdModel *string `json:"idModel,omitempty"`
}

// WebhookLoadMatch is the typed request payload for Webhook.LoadTyped.
type WebhookLoadMatch struct {
	Field *string `json:"field,omitempty"`
	Id string `json:"id"`
	TokenId *string `json:"token_id,omitempty"`
}

// WebhookListMatch is the typed request payload for Webhook.ListTyped.
type WebhookListMatch struct {
	TokenId string `json:"token_id"`
}

// WebhookCreateData is the typed request payload for Webhook.CreateTyped.
type WebhookCreateData struct {
	Active *bool `json:"active,omitempty"`
	CallbackUrl string `json:"callback_url"`
	Description *string `json:"description,omitempty"`
	IdModel string `json:"id_model"`
	TokenId *string `json:"token_id,omitempty"`
	CallbackURL *string `json:"callbackURL,omitempty"`
	ConsecutiveFailures *float64 `json:"consecutiveFailures,omitempty"`
	FirstConsecutiveFailDate *string `json:"firstConsecutiveFailDate,omitempty"`
	Id *string `json:"id,omitempty"`
	IdModel2 *string `json:"idModel,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	Id string `json:"id"`
	Active *bool `json:"active,omitempty"`
	CallbackUrl *string `json:"callback_url,omitempty"`
	Description *string `json:"description,omitempty"`
	IdModel *string `json:"id_model,omitempty"`
	TokenId *string `json:"token_id,omitempty"`
	CallbackURL *string `json:"callbackURL,omitempty"`
	ConsecutiveFailures *float64 `json:"consecutiveFailures,omitempty"`
	FirstConsecutiveFailDate *string `json:"firstConsecutiveFailDate,omitempty"`
	IdModel2 *string `json:"idModel,omitempty"`
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Id string `json:"id"`
	TokenId *string `json:"token_id,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
