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
	Native *string `json:"native,omitempty"`
	ShortName *string `json:"shortName,omitempty"`
	SkinVariation *string `json:"skinVariation,omitempty"`
	Type *string `json:"type,omitempty"`
	Unified *string `json:"unified,omitempty"`
}

// ActionLoadMatch is the typed request payload for Action.LoadTyped.
type ActionLoadMatch struct {
	Id string `json:"id"`
}

// ActionListMatch is the typed request payload for Action.ListTyped.
type ActionListMatch struct {
	CardId string `json:"card_id"`
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
	Native *string `json:"native,omitempty"`
	ShortName *string `json:"shortName,omitempty"`
	SkinVariation *string `json:"skinVariation,omitempty"`
	Type *string `json:"type,omitempty"`
	Unified *string `json:"unified,omitempty"`
}

// ActionUpdateData is the typed request payload for Action.UpdateTyped.
type ActionUpdateData struct {
	Id string `json:"id"`
	Data *map[string]any `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	Display *map[string]any `json:"display,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Limits *map[string]any `json:"limits,omitempty"`
	MemberCreator *map[string]any `json:"memberCreator,omitempty"`
	Native *string `json:"native,omitempty"`
	ShortName *string `json:"shortName,omitempty"`
	SkinVariation *string `json:"skinVariation,omitempty"`
	Type *string `json:"type,omitempty"`
	Unified *string `json:"unified,omitempty"`
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
}

// AttachmentListMatch is the typed request payload for Attachment.ListTyped.
type AttachmentListMatch struct {
	CardId string `json:"card_id"`
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
	FullName *string `json:"fullName,omitempty"`
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
}

// BoardListMatch is the typed request payload for Board.ListTyped.
type BoardListMatch struct {
	MemberId string `json:"member_id"`
}

// BoardCreateData is the typed request payload for Board.CreateTyped.
type BoardCreateData struct {
	Closed *bool `json:"closed,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DateLastView *string `json:"dateLastView,omitempty"`
	DatePluginDisable *string `json:"datePluginDisable,omitempty"`
	Desc *string `json:"desc,omitempty"`
	DescData *string `json:"descData,omitempty"`
	EnterpriseOwned *bool `json:"enterpriseOwned,omitempty"`
	FullName *string `json:"fullName,omitempty"`
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

// BoardUpdateData is the typed request payload for Board.UpdateTyped.
type BoardUpdateData struct {
	Id string `json:"id"`
	Closed *bool `json:"closed,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DateLastView *string `json:"dateLastView,omitempty"`
	DatePluginDisable *string `json:"datePluginDisable,omitempty"`
	Desc *string `json:"desc,omitempty"`
	DescData *string `json:"descData,omitempty"`
	EnterpriseOwned *bool `json:"enterpriseOwned,omitempty"`
	FullName *string `json:"fullName,omitempty"`
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
	IdBackground *string `json:"id_background,omitempty"`
}

// BoardBackgroundListMatch is the typed request payload for BoardBackground.ListTyped.
type BoardBackgroundListMatch struct {
	MemberId string `json:"member_id"`
}

// BoardBackgroundCreateData is the typed request payload for BoardBackground.CreateTyped.
type BoardBackgroundCreateData struct {
	MemberId string `json:"member_id"`
	Id *string `json:"id,omitempty"`
}

// BoardBackgroundUpdateData is the typed request payload for BoardBackground.UpdateTyped.
type BoardBackgroundUpdateData struct {
	Id *string `json:"id,omitempty"`
	MemberId string `json:"member_id"`
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
}

// BoardStarCreateData is the typed request payload for BoardStar.CreateTyped.
type BoardStarCreateData struct {
	MemberId string `json:"member_id"`
	Id *string `json:"id,omitempty"`
	IdBoard *string `json:"idBoard,omitempty"`
	Pos *int `json:"pos,omitempty"`
}

// BoardStarUpdateData is the typed request payload for BoardStar.UpdateTyped.
type BoardStarUpdateData struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	IdBoard *string `json:"idBoard,omitempty"`
	Pos *int `json:"pos,omitempty"`
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
	CustomFieldItems *[]any `json:"customFieldItems,omitempty"`
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
}

// CardListMatch is the typed request payload for Card.ListTyped.
type CardListMatch struct {
	ActionId string `json:"action_id"`
}

// CardCreateData is the typed request payload for Card.CreateTyped.
type CardCreateData struct {
	Address *string `json:"address,omitempty"`
	Badges *map[string]any `json:"badges,omitempty"`
	CardRole *string `json:"cardRole,omitempty"`
	CheckItemStates *[]any `json:"checkItemStates,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	Cover *map[string]any `json:"cover,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	CustomFieldItems *[]any `json:"customFieldItems,omitempty"`
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

// CardUpdateData is the typed request payload for Card.UpdateTyped.
type CardUpdateData struct {
	Id string `json:"id"`
	Address *string `json:"address,omitempty"`
	Badges *map[string]any `json:"badges,omitempty"`
	CardRole *string `json:"cardRole,omitempty"`
	CheckItemStates *[]any `json:"checkItemStates,omitempty"`
	Closed *bool `json:"closed,omitempty"`
	Coordinates *string `json:"coordinates,omitempty"`
	Cover *map[string]any `json:"cover,omitempty"`
	CreationMethod *string `json:"creationMethod,omitempty"`
	CustomFieldItems *[]any `json:"customFieldItems,omitempty"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	Desc *string `json:"desc,omitempty"`
	DescData *map[string]any `json:"descData,omitempty"`
	Due *string `json:"due,omitempty"`
	DueReminder *string `json:"dueReminder,omitempty"`
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
}

// CardList is the typed data model for the card_list entity.
type CardList struct {
	Id *string `json:"id,omitempty"`
}

// CardListLoadMatch is the typed request payload for CardList.LoadTyped.
type CardListLoadMatch struct {
	Id string `json:"id"`
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
}

// CheckItemUpdateData is the typed request payload for CheckItem.UpdateTyped.
type CheckItemUpdateData struct {
	CardId *string `json:"card_id,omitempty"`
	Id string `json:"id"`
	ChecklistId *string `json:"checklist_id,omitempty"`
	IdCard *string `json:"id_card,omitempty"`
	IdChecklist *string `json:"idChecklist,omitempty"`
	Name *string `json:"name,omitempty"`
	NameData *string `json:"nameData,omitempty"`
	Pos *string `json:"pos,omitempty"`
	State *string `json:"state,omitempty"`
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
}

// ChecklistCreateData is the typed request payload for Checklist.CreateTyped.
type ChecklistCreateData struct {
	Id *string `json:"id,omitempty"`
}

// ChecklistUpdateData is the typed request payload for Checklist.UpdateTyped.
type ChecklistUpdateData struct {
	Field *string `json:"field,omitempty"`
	Id string `json:"id"`
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
}

// CustomEmojiListMatch is the typed request payload for CustomEmoji.ListTyped.
type CustomEmojiListMatch struct {
	MemberId string `json:"member_id"`
}

// CustomEmojiCreateData is the typed request payload for CustomEmoji.CreateTyped.
type CustomEmojiCreateData struct {
	MemberId string `json:"member_id"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
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
}

// CustomStickerListMatch is the typed request payload for CustomSticker.ListTyped.
type CustomStickerListMatch struct {
	MemberId string `json:"member_id"`
}

// CustomStickerCreateData is the typed request payload for CustomSticker.CreateTyped.
type CustomStickerCreateData struct {
	MemberId string `json:"member_id"`
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
}

// EnterprisCreateData is the typed request payload for Enterpris.CreateTyped.
type EnterprisCreateData struct {
	Id string `json:"id"`
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
}

// LabelCreateData is the typed request payload for Label.CreateTyped.
type LabelCreateData struct {
	Id *string `json:"id,omitempty"`
}

// LabelUpdateData is the typed request payload for Label.UpdateTyped.
type LabelUpdateData struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
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
}

// ListCreateData is the typed request payload for List.CreateTyped.
type ListCreateData struct {
	Id *string `json:"id,omitempty"`
}

// ListUpdateData is the typed request payload for List.UpdateTyped.
type ListUpdateData struct {
	Id string `json:"id"`
	Field *string `json:"field,omitempty"`
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
}

// MemberListMatch is the typed request payload for Member.ListTyped.
type MemberListMatch struct {
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

// MemberCreateData is the typed request payload for Member.CreateTyped.
type MemberCreateData struct {
	Id string `json:"id"`
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
	BoardId *string `json:"board_id,omitempty"`
	OrganizationId *string `json:"organization_id,omitempty"`
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
}

// MembershipListMatch is the typed request payload for Membership.ListTyped.
type MembershipListMatch struct {
	OrganizationId string `json:"organization_id"`
}

// MembershipUpdateData is the typed request payload for Membership.UpdateTyped.
type MembershipUpdateData struct {
	BoardId string `json:"board_id"`
	Id string `json:"id"`
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
	Field *string `json:"field,omitempty"`
}

// NotificationListMatch is the typed request payload for Notification.ListTyped.
type NotificationListMatch struct {
	MemberId string `json:"member_id"`
}

// NotificationUpdateData is the typed request payload for Notification.UpdateTyped.
type NotificationUpdateData struct {
	Id string `json:"id"`
	Board *map[string]any `json:"board,omitempty"`
	Card *map[string]any `json:"card,omitempty"`
	Data *string `json:"data,omitempty"`
	Date *string `json:"date,omitempty"`
	DateRead *string `json:"dateRead,omitempty"`
	IdAction *string `json:"idAction,omitempty"`
	IdMemberCreator *string `json:"idMemberCreator,omitempty"`
	Reactions *[]any `json:"reactions,omitempty"`
	Type *string `json:"type,omitempty"`
	Unread *bool `json:"unread,omitempty"`
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
}

// NotificationMemberCreator is the typed data model for the notification_member_creator entity.
type NotificationMemberCreator struct {
	Id *string `json:"id,omitempty"`
}

// NotificationMemberCreatorLoadMatch is the typed request payload for NotificationMemberCreator.LoadTyped.
type NotificationMemberCreatorLoadMatch struct {
	Id string `json:"id"`
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
}

// OrganizationCreateData is the typed request payload for Organization.CreateTyped.
type OrganizationCreateData struct {
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

// OrganizationUpdateData is the typed request payload for Organization.UpdateTyped.
type OrganizationUpdateData struct {
	Id string `json:"id"`
	DateLastActivity *string `json:"dateLastActivity,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	IdBoards *[]any `json:"idBoards,omitempty"`
	IdEnterprise *string `json:"idEnterprise,omitempty"`
	Memberships *[]any `json:"memberships,omitempty"`
	Name *string `json:"name,omitempty"`
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
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
	Query *string `json:"query,omitempty"`
}

// SavedSearchUpdateData is the typed request payload for SavedSearch.UpdateTyped.
type SavedSearchUpdateData struct {
	Id string `json:"id"`
	MemberId string `json:"member_id"`
	Name *string `json:"name,omitempty"`
	Pos *any `json:"pos,omitempty"`
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
}

// ShowSidebar is the typed data model for the show_sidebar entity.
type ShowSidebar struct {
}

// ShowSidebarUpdateData is the typed request payload for ShowSidebar.UpdateTyped.
type ShowSidebarUpdateData struct {
	BoardId string `json:"board_id"`
}

// ShowSidebarActivity is the typed data model for the show_sidebar_activity entity.
type ShowSidebarActivity struct {
}

// ShowSidebarActivityUpdateData is the typed request payload for ShowSidebarActivity.UpdateTyped.
type ShowSidebarActivityUpdateData struct {
	BoardId string `json:"board_id"`
}

// ShowSidebarBoardAction is the typed data model for the show_sidebar_board_action entity.
type ShowSidebarBoardAction struct {
}

// ShowSidebarBoardActionUpdateData is the typed request payload for ShowSidebarBoardAction.UpdateTyped.
type ShowSidebarBoardActionUpdateData struct {
	BoardId string `json:"board_id"`
}

// ShowSidebarMember is the typed data model for the show_sidebar_member entity.
type ShowSidebarMember struct {
}

// ShowSidebarMemberUpdateData is the typed request payload for ShowSidebarMember.UpdateTyped.
type ShowSidebarMemberUpdateData struct {
	BoardId string `json:"board_id"`
}

// Sticker is the typed data model for the sticker entity.
type Sticker struct {
	Id *string `json:"id,omitempty"`
}

// StickerLoadMatch is the typed request payload for Sticker.LoadTyped.
type StickerLoadMatch struct {
	CardId string `json:"card_id"`
	Id *string `json:"id,omitempty"`
}

// StickerUpdateData is the typed request payload for Sticker.UpdateTyped.
type StickerUpdateData struct {
	CardId string `json:"card_id"`
	Id string `json:"id"`
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
}

// TokenListMatch is the typed request payload for Token.ListTyped.
type TokenListMatch struct {
	MemberId string `json:"member_id"`
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
}

// TrelloListListMatch is the typed request payload for TrelloList.ListTyped.
type TrelloListListMatch struct {
	BoardId string `json:"board_id"`
}

// TrelloListCreateData is the typed request payload for TrelloList.CreateTyped.
type TrelloListCreateData struct {
	BoardId string `json:"board_id"`
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
	CallbackURL *string `json:"callbackURL,omitempty"`
	ConsecutiveFailures *float64 `json:"consecutiveFailures,omitempty"`
	Description *string `json:"description,omitempty"`
	FirstConsecutiveFailDate *string `json:"firstConsecutiveFailDate,omitempty"`
	Id *string `json:"id,omitempty"`
	IdModel *string `json:"idModel,omitempty"`
}

// WebhookUpdateData is the typed request payload for Webhook.UpdateTyped.
type WebhookUpdateData struct {
	Id string `json:"id"`
	TokenId *string `json:"token_id,omitempty"`
	Active *bool `json:"active,omitempty"`
	CallbackURL *string `json:"callbackURL,omitempty"`
	ConsecutiveFailures *float64 `json:"consecutiveFailures,omitempty"`
	Description *string `json:"description,omitempty"`
	FirstConsecutiveFailDate *string `json:"firstConsecutiveFailDate,omitempty"`
	IdModel *string `json:"idModel,omitempty"`
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
