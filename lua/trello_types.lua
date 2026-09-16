-- Typed models for the Trello SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Action
---@field data? table
---@field date? string
---@field display? table
---@field id? string
---@field idMemberCreator? string
---@field limits? table
---@field memberCreator? table
---@field type? string

---@class ActionLoadMatch
---@field id string
---@field display? boolean
---@field entity? boolean
---@field field? string
---@field member? boolean
---@field member_creator? boolean
---@field member_creator_field? string
---@field member_field? string

---@class ActionListMatch
---@field card_id string
---@field filter? string
---@field page? number

---@class ActionCreateData
---@field id_action string
---@field data? table
---@field date? string
---@field display? table
---@field id? string
---@field idMemberCreator? string
---@field limits? table
---@field memberCreator? table
---@field type? string

---@class ActionUpdateData
---@field id string
---@field text string
---@field data? table
---@field date? string
---@field display? table
---@field idMemberCreator? string
---@field limits? table
---@field memberCreator? table
---@field type? string

---@class ActionRemoveMatch
---@field id string

---@class ActionReactionsSummary

---@class ActionReactionsSummaryLoadMatch
---@field id_action string

---@class Admin
---@field id? string

---@class AdminUpdateData
---@field enterpris_id string
---@field id string

---@class AdminRemoveMatch
---@field enterpris_id string
---@field id string

---@class Application

---@class ApplicationCompliance

---@class ApplicationComplianceLoadMatch
---@field key string

---@class AssociatedDomain

---@class AssociatedDomainRemoveMatch
---@field organization_id string

---@class Attachment
---@field id? string

---@class AttachmentLoadMatch
---@field card_id string
---@field id string
---@field field? table

---@class AttachmentListMatch
---@field card_id string
---@field field? string
---@field filter? string

---@class AttachmentRemoveMatch
---@field card_id string
---@field id string

---@class Batch

---@class BatchLoadMatch
---@field url string

---@class Board
---@field closed? boolean
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field desc? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field id string
---@field idMemberCreator? string
---@field idOrganization? string
---@field idTags? string
---@field ixUpdate? number
---@field labelNames? table
---@field limits? table
---@field memberships? string
---@field name? string
---@field pinned? boolean
---@field powerUps? string
---@field prefs? table
---@field shortLink? string
---@field shortUrl? string
---@field starred? boolean
---@field subscribed? boolean
---@field templateGallery? string
---@field url? string

---@class BoardLoadMatch
---@field id string
---@field action? string
---@field board_star? string
---@field card? string
---@field card_plugin_data? boolean
---@field checklist? string
---@field custom_field? boolean
---@field field? string
---@field label? string
---@field list? string
---@field member? string
---@field membership? string
---@field my_pref? boolean
---@field organization? boolean
---@field organization_plugin_data? boolean
---@field plugin_data? boolean
---@field tag? boolean

---@class BoardListMatch
---@field member_id string
---@field field? string
---@field filter? string
---@field list? string
---@field organization? boolean
---@field organization_field? string

---@class BoardCreateData
---@field default_label? boolean
---@field default_list? boolean
---@field desc? string
---@field id_board_source? string
---@field id_organization? string
---@field keep_from_source? string
---@field name string
---@field power_up? string
---@field prefs_background? string
---@field prefs_card_aging? string
---@field prefs_card_cover? boolean
---@field prefs_comment? string
---@field prefs_invitation? string
---@field prefs_permission_level? string
---@field prefs_self_join? boolean
---@field prefs_voting? string
---@field closed? boolean
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field id string
---@field idMemberCreator? string
---@field idOrganization? string
---@field idTags? string
---@field ixUpdate? number
---@field labelNames? table
---@field limits? table
---@field memberships? string
---@field pinned? boolean
---@field powerUps? string
---@field prefs? table
---@field shortLink? string
---@field shortUrl? string
---@field starred? boolean
---@field subscribed? boolean
---@field templateGallery? string
---@field url? string

---@class BoardUpdateData
---@field id string
---@field closed? boolean
---@field desc? string
---@field id_organization? string
---@field name? string
---@field ["prefs/background"]? string
---@field ["prefs/calendar_feed_enabled"]? boolean
---@field ["prefs/card_aging"]? string
---@field ["prefs/card_cover"]? boolean
---@field ["prefs/comment"]? string
---@field ["prefs/hide_vote"]? boolean
---@field ["prefs/invitation"]? string
---@field ["prefs/permission_level"]? string
---@field ["prefs/self_join"]? boolean
---@field ["prefs/voting"]? string
---@field subscribed? string
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field idMemberCreator? string
---@field idOrganization? string
---@field idTags? string
---@field ixUpdate? number
---@field labelNames? table
---@field limits? table
---@field memberships? string
---@field pinned? boolean
---@field powerUps? string
---@field prefs? table
---@field shortLink? string
---@field shortUrl? string
---@field starred? boolean
---@field templateGallery? string
---@field url? string

---@class BoardRemoveMatch
---@field id string

---@class BoardBackground
---@field id? string

---@class BoardBackgroundLoadMatch
---@field id? string
---@field member_id string
---@field field? string
---@field id_background? string

---@class BoardBackgroundListMatch
---@field member_id string
---@field filter? string

---@class BoardBackgroundCreateData
---@field member_id string
---@field file string
---@field id? string

---@class BoardBackgroundUpdateData
---@field id? string
---@field member_id string
---@field brightness? string
---@field tile? boolean
---@field id_background? string

---@class BoardBackgroundRemoveMatch
---@field id string
---@field member_id string

---@class BoardPlugin
---@field id? string

---@class BoardPluginRemoveMatch
---@field board_id string
---@field id string

---@class BoardStar
---@field id? string
---@field idBoard? string
---@field pos? number

---@class BoardStarLoadMatch
---@field id? string
---@field member_id string

---@class BoardStarListMatch
---@field id string
---@field filter? string

---@class BoardStarCreateData
---@field member_id string
---@field id_board string
---@field pos any
---@field id? string
---@field idBoard? string

---@class BoardStarUpdateData
---@field id string
---@field member_id string
---@field pos? any
---@field idBoard? string

---@class BoardStarRemoveMatch
---@field id string
---@field member_id string

---@class Bulk
---@field id? string

---@class BulkLoadMatch
---@field enterpris_id string
---@field id table

---@class BulkUpdateData
---@field id string
---@field id_organization table

---@class Card
---@field address? string
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field closed? boolean
---@field coordinates? string
---@field cover? table
---@field creationMethod? string
---@field dateLastActivity? string
---@field desc? string
---@field descData? table
---@field due? string
---@field dueReminder? string
---@field id? string
---@field idAttachmentCover? string
---@field idBoard? string
---@field idChecklists? table
---@field idLabels? table
---@field idList? string
---@field idMembers? table
---@field idMembersVoted? table
---@field idShort? number
---@field labels? table
---@field limits? table
---@field locationName? string
---@field manualCoverAttachment? boolean
---@field mirrorSourceId? string
---@field name? string
---@field pos? number
---@field shortLink? string
---@field shortUrl? string
---@field subscribed? boolean
---@field url? string

---@class CardLoadMatch
---@field id string
---@field action? string
---@field attachment? string
---@field attachment_field? string
---@field board? boolean
---@field board_field? string
---@field check_item_state? boolean
---@field checklist? string
---@field checklist_field? string
---@field custom_field_item? boolean
---@field field? string
---@field list? boolean
---@field member? boolean
---@field member_field? string
---@field member_voted_field? string
---@field members_voted? boolean
---@field plugin_data? boolean
---@field sticker? boolean
---@field sticker_field? string

---@class CardListMatch
---@field action_id string
---@field field? string

---@class CardCreateData
---@field address? string
---@field card_role? string
---@field coordinate? string
---@field desc? string
---@field due? string
---@field due_complete? boolean
---@field file_source? string
---@field id_card_source? string
---@field id_label? table
---@field id_list string
---@field id_member? table
---@field keep_from_source? string
---@field location_name? string
---@field mime_type? string
---@field name? string
---@field pos? any
---@field start? string
---@field url_source? string
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field closed? boolean
---@field coordinates? string
---@field cover? table
---@field creationMethod? string
---@field dateLastActivity? string
---@field descData? table
---@field dueReminder? string
---@field id? string
---@field idAttachmentCover? string
---@field idBoard? string
---@field idChecklists? table
---@field idLabels? table
---@field idList? string
---@field idMembers? table
---@field idMembersVoted? table
---@field idShort? number
---@field labels? table
---@field limits? table
---@field locationName? string
---@field manualCoverAttachment? boolean
---@field mirrorSourceId? string
---@field shortLink? string
---@field shortUrl? string
---@field subscribed? boolean
---@field url? string

---@class CardUpdateData
---@field id string
---@field address? string
---@field closed? boolean
---@field coordinate? string
---@field cover? table
---@field desc? string
---@field due? string
---@field due_complete? boolean
---@field id_attachment_cover? string
---@field id_board? string
---@field id_label? string
---@field id_list? string
---@field id_member? string
---@field location_name? string
---@field name? string
---@field pos? any
---@field start? string
---@field subscribed? boolean
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field coordinates? string
---@field creationMethod? string
---@field dateLastActivity? string
---@field descData? table
---@field dueReminder? string
---@field idAttachmentCover? string
---@field idBoard? string
---@field idChecklists? table
---@field idLabels? table
---@field idList? string
---@field idMembers? table
---@field idMembersVoted? table
---@field idShort? number
---@field labels? table
---@field limits? table
---@field locationName? string
---@field manualCoverAttachment? boolean
---@field mirrorSourceId? string
---@field shortLink? string
---@field shortUrl? string
---@field url? string

---@class CardRemoveMatch
---@field id string

---@class CardCheckItemState
---@field id? string

---@class CardCheckItemStateLoadMatch
---@field id string
---@field field? string

---@class CardList
---@field id? string

---@class CardListLoadMatch
---@field id string
---@field field? string

---@class CheckItem
---@field id? string
---@field idChecklist? string
---@field name? string
---@field nameData? string
---@field pos? string
---@field state? string

---@class CheckItemLoadMatch
---@field card_id string
---@field id string
---@field field? string

---@class CheckItemUpdateData
---@field card_id? string
---@field id string
---@field due? string
---@field due_reminder? number
---@field id_checklist? string
---@field id_member? string
---@field name? string
---@field pos? any
---@field state? string
---@field checklist_id? string
---@field id_card? string
---@field idChecklist? string
---@field nameData? string

---@class CheckItemRemoveMatch
---@field card_id? string
---@field id string
---@field checklist_id? string

---@class Checklist
---@field id? string

---@class ChecklistLoadMatch
---@field id string
---@field card? string
---@field check_item? string
---@field check_item_field? string
---@field field? string

---@class ChecklistCreateData
---@field id_card string
---@field id_checklist_source? string
---@field name? string
---@field pos? any
---@field id? string

---@class ChecklistUpdateData
---@field field? string
---@field id string
---@field value? any
---@field name? string
---@field pos? any

---@class ChecklistRemoveMatch
---@field card_id? string
---@field id string

---@class ClaimableOrganization
---@field activeMembershipCount? number
---@field dateLastActive? string
---@field displayName? string
---@field id? string
---@field idActiveAdmins? table
---@field logoUrl? string
---@field name? string
---@field products? table

---@class ClaimableOrganizationListMatch
---@field enterpris_id string
---@field active_since? string
---@field cursor? string
---@field inactive_since? string
---@field limit? number
---@field name? string

---@class CustomBoardBackground
---@field id? string

---@class CustomBoardBackgroundRemoveMatch
---@field id string
---@field member_id string

---@class CustomEmoji
---@field id? string
---@field name? string
---@field url? string

---@class CustomEmojiLoadMatch
---@field id string
---@field member_id string
---@field field? string

---@class CustomEmojiListMatch
---@field member_id string

---@class CustomEmojiCreateData
---@field member_id string
---@field file string
---@field name string
---@field id? string
---@field url? string

---@class CustomField
---@field cardFront? boolean
---@field display? table
---@field display_cardFront? boolean
---@field displaycardFront? boolean
---@field fieldGroup? string
---@field id? string
---@field idModel string
---@field modelType string
---@field name? string
---@field options? table
---@field pos? string
---@field type string

---@class CustomFieldLoadMatch
---@field id string

---@class CustomFieldListMatch
---@field board_id string

---@class CustomFieldCreateData
---@field cardFront? boolean
---@field display? table
---@field display_cardFront? boolean
---@field displaycardFront? boolean
---@field fieldGroup? string
---@field id? string
---@field idModel string
---@field modelType string
---@field name? string
---@field options? table
---@field pos? string
---@field type string

---@class CustomFieldUpdateData
---@field id string
---@field cardFront? boolean
---@field display? table
---@field display_cardFront? boolean
---@field displaycardFront? boolean
---@field fieldGroup? string
---@field idModel? string
---@field modelType? string
---@field name? string
---@field options? table
---@field pos? string
---@field type? string

---@class CustomFieldRemoveMatch
---@field id string

---@class CustomFieldItem
---@field id? string
---@field idCustomField? string
---@field idModel? string
---@field modelType? string
---@field value? table

---@class CustomFieldItemListMatch
---@field card_id string

---@class CustomSticker
---@field id? string
---@field scaled? table
---@field url? string

---@class CustomStickerLoadMatch
---@field id string
---@field member_id string
---@field field? string

---@class CustomStickerListMatch
---@field member_id string

---@class CustomStickerCreateData
---@field member_id string
---@field file string
---@field id? string
---@field scaled? table
---@field url? string

---@class CustomStickerRemoveMatch
---@field id string
---@field member_id string

---@class EmailPosition

---@class EmailPositionUpdateData
---@field board_id string
---@field value string

---@class Emoji
---@field category? string
---@field keywords? table
---@field name? string
---@field native? string
---@field sheetX? number
---@field sheetY? number
---@field shortName? string
---@field shortNames? table
---@field text? string
---@field texts? string
---@field tts? string
---@field unified? string

---@class EmojiListMatch
---@field locale? string
---@field spritesheet? boolean

---@class Enterpris
---@field dateOrganizationPrefsLastUpdated? string
---@field displayName? string
---@field domains? table
---@field enterpriseDomains? table
---@field id? string
---@field idAdmins? table
---@field idOrganizations? table
---@field idp? table
---@field isRealEnterprise? boolean
---@field licenses? table
---@field logoHash? string
---@field logoUrl? string
---@field name? string
---@field organizationPrefs? table
---@field pluginWhitelistingEnabled? table
---@field prefs? table
---@field products? table
---@field ssoActivationFailed? boolean

---@class EnterprisLoadMatch
---@field id string
---@field field? string
---@field member? string
---@field member_count? number
---@field member_field? string
---@field member_filter? string
---@field member_sort? string
---@field member_sort_by? string
---@field member_sort_order? string
---@field member_start_index? number
---@field organization? string
---@field organization_field? string
---@field organization_membership? string
---@field organization_paid_account? boolean

---@class EnterprisCreateData
---@field id string
---@field expiration? string
---@field dateOrganizationPrefsLastUpdated? string
---@field displayName? string
---@field domains? table
---@field enterpriseDomains? table
---@field idAdmins? table
---@field idOrganizations? table
---@field idp? table
---@field isRealEnterprise? boolean
---@field licenses? table
---@field logoHash? string
---@field logoUrl? string
---@field name? string
---@field organizationPrefs? table
---@field pluginWhitelistingEnabled? table
---@field prefs? table
---@field products? table
---@field ssoActivationFailed? boolean

---@class EnterprisUpdateData
---@field id string
---@field id_organization string
---@field dateOrganizationPrefsLastUpdated? string
---@field displayName? string
---@field domains? table
---@field enterpriseDomains? table
---@field idAdmins? table
---@field idOrganizations? table
---@field idp? table
---@field isRealEnterprise? boolean
---@field licenses? table
---@field logoHash? string
---@field logoUrl? string
---@field name? string
---@field organizationPrefs? table
---@field pluginWhitelistingEnabled? table
---@field prefs? table
---@field products? table
---@field ssoActivationFailed? boolean

---@class EnterprisSignupUrl
---@field id? string
---@field signupUrl? string

---@class EnterprisSignupUrlLoadMatch
---@field id string
---@field authenticate? boolean
---@field confirmation_accepted? boolean
---@field return_url? string
---@field tos_accepted? boolean

---@class EnterpriseAdmin
---@field fullName? string
---@field id? string
---@field username? string

---@class EnterpriseAdminLoadMatch
---@field enterpris_id string
---@field field? string

---@class EnterpriseAuditLog
---@field date? string
---@field idAction? string
---@field member? table
---@field memberCreator? table
---@field organization? table
---@field type? string

---@class EnterpriseAuditLogListMatch
---@field enterpris_id string

---@class Export
---@field attempts? number
---@field exportUrl? string
---@field finished? boolean
---@field id? string
---@field size? string
---@field stage? string
---@field startedAt? string
---@field status? table

---@class ExportLoadMatch
---@field board_id string
---@field id string

---@class ExportListMatch
---@field organization_id string

---@class ExportCreateData
---@field board_id string
---@field attachment? boolean
---@field attachment_age? number
---@field attempts? number
---@field exportUrl? string
---@field finished? boolean
---@field id? string
---@field size? string
---@field stage? string
---@field startedAt? string
---@field status? table

---@class ExportRemoveMatch
---@field board_id string
---@field id string

---@class ExportDownload

---@class ExportDownloadLoadMatch
---@field board_id string
---@field id_export string

---@class Generate

---@class GenerateCreateData
---@field board_id string

---@class IdEmailList

---@class IdEmailListUpdateData
---@field board_id string
---@field value string

---@class IdLabel
---@field id? string

---@class IdLabelRemoveMatch
---@field card_id string
---@field id string

---@class IdMember
---@field id? string

---@class IdMemberRemoveMatch
---@field card_id string
---@field id string

---@class Label
---@field id? string

---@class LabelLoadMatch
---@field id string
---@field field? string

---@class LabelCreateData
---@field color string
---@field id_board string
---@field name string
---@field id? string

---@class LabelUpdateData
---@field id string
---@field color? string
---@field name? string
---@field field? string
---@field value? string

---@class LabelRemoveMatch
---@field id string

---@class List
---@field id? string

---@class ListLoadMatch
---@field board_id? string
---@field id string
---@field field? string

---@class ListCreateData
---@field id_board string
---@field id_list_source? string
---@field name string
---@field pos? any
---@field id? string

---@class ListUpdateData
---@field id string
---@field closed? boolean
---@field id_board? string
---@field name? string
---@field pos? any
---@field subscribed? boolean
---@field field? string
---@field value? any

---@class Member
---@field aaEmail? string
---@field aaEnrolledDate? string
---@field aaId? string
---@field activityBlocked? boolean
---@field avatarHash? string
---@field avatarSource? string
---@field avatarUrl? string
---@field bio? string
---@field bioData? table
---@field confirmed? boolean
---@field email? string
---@field fullName? string
---@field gravatarHash? string
---@field id? string
---@field idBoards? table
---@field idBoardsPinned? table
---@field idEnterprise? string
---@field idEnterprisesAdmin? table
---@field idEnterprisesDeactivated? table
---@field idMemberReferrer? string
---@field idOrganizations? table
---@field idPremOrgsAdmin? table
---@field initials? string
---@field isAaMastered? boolean
---@field ixUpdate? number
---@field limits? table
---@field loginTypes? table
---@field marketingOptIn? table
---@field memberType? string
---@field messagesDismissed? table
---@field nonPublic? table
---@field nonPublicAvailable? boolean
---@field oneTimeMessagesDismissed? table
---@field prefs? table
---@field premiumFeatures? table
---@field products? table
---@field status? string
---@field trophies? table
---@field uploadedAvatarHash? string
---@field uploadedAvatarUrl? string
---@field url? string
---@field username? string

---@class MemberLoadMatch
---@field id string
---@field action? string
---@field board? string
---@field board_background? string
---@field board_star? boolean
---@field boards_invited? string
---@field boards_invited_field? string
---@field card? string
---@field custom_board_background? string
---@field custom_emoji? string
---@field custom_sticker? string
---@field field? string
---@field notification? string
---@field organization? string
---@field organization_field? string
---@field organization_paid_account? boolean
---@field organizations_invited? string
---@field organizations_invited_field? string
---@field paid_account? boolean
---@field saved_search? boolean
---@field token? string

---@class MemberListMatch
---@field id_board? string
---@field id_organization? string
---@field limit? number
---@field only_org_member? boolean
---@field query string

---@class MemberCreateData
---@field id string
---@field file? string
---@field value? string
---@field aaEmail? string
---@field aaEnrolledDate? string
---@field aaId? string
---@field activityBlocked? boolean
---@field avatarHash? string
---@field avatarSource? string
---@field avatarUrl? string
---@field bio? string
---@field bioData? table
---@field confirmed? boolean
---@field email? string
---@field fullName? string
---@field gravatarHash? string
---@field idBoards? table
---@field idBoardsPinned? table
---@field idEnterprise? string
---@field idEnterprisesAdmin? table
---@field idEnterprisesDeactivated? table
---@field idMemberReferrer? string
---@field idOrganizations? table
---@field idPremOrgsAdmin? table
---@field initials? string
---@field isAaMastered? boolean
---@field ixUpdate? number
---@field limits? table
---@field loginTypes? table
---@field marketingOptIn? table
---@field memberType? string
---@field messagesDismissed? table
---@field nonPublic? table
---@field nonPublicAvailable? boolean
---@field oneTimeMessagesDismissed? table
---@field prefs? table
---@field premiumFeatures? table
---@field products? table
---@field status? string
---@field trophies? table
---@field uploadedAvatarHash? string
---@field uploadedAvatarUrl? string
---@field url? string
---@field username? string

---@class MemberUpdateData
---@field id string
---@field avatar_source? string
---@field bio? string
---@field full_name? string
---@field initial? string
---@field ["prefs/color_blind"]? boolean
---@field ["prefs/locale"]? string
---@field ["prefs/minutes_between_summary"]? number
---@field username? string
---@field board_id? string
---@field allow_billable_guest? boolean
---@field type? string
---@field organization_id? string
---@field aaEmail? string
---@field aaEnrolledDate? string
---@field aaId? string
---@field activityBlocked? boolean
---@field avatarHash? string
---@field avatarSource? string
---@field avatarUrl? string
---@field bioData? table
---@field confirmed? boolean
---@field email? string
---@field fullName? string
---@field gravatarHash? string
---@field idBoards? table
---@field idBoardsPinned? table
---@field idEnterprise? string
---@field idEnterprisesAdmin? table
---@field idEnterprisesDeactivated? table
---@field idMemberReferrer? string
---@field idOrganizations? table
---@field idPremOrgsAdmin? table
---@field initials? string
---@field isAaMastered? boolean
---@field ixUpdate? number
---@field limits? table
---@field loginTypes? table
---@field marketingOptIn? table
---@field memberType? string
---@field messagesDismissed? table
---@field nonPublic? table
---@field nonPublicAvailable? boolean
---@field oneTimeMessagesDismissed? table
---@field prefs? table
---@field premiumFeatures? table
---@field products? table
---@field status? string
---@field trophies? table
---@field uploadedAvatarHash? string
---@field uploadedAvatarUrl? string
---@field url? string

---@class MemberRemoveMatch
---@field board_id? string
---@field id string
---@field organization_id? string

---@class MemberPrivacy

---@class MemberPrivacyLoadMatch
---@field plugin_id string

---@class MembersVoted
---@field id? string

---@class MembersVotedLoadMatch
---@field card_id string
---@field field? string

---@class MembersVotedRemoveMatch
---@field card_id string
---@field id string

---@class Membership
---@field admin? boolean
---@field collaborator? boolean
---@field deactivated? boolean
---@field id? string
---@field licensed? boolean
---@field managed? boolean
---@field member? table

---@class MembershipLoadMatch
---@field id string
---@field organization_id string
---@field member? boolean

---@class MembershipListMatch
---@field organization_id string
---@field filter? string
---@field member? boolean

---@class MembershipUpdateData
---@field board_id string
---@field id string
---@field member_field? string
---@field type string
---@field admin? boolean
---@field collaborator? boolean
---@field deactivated? boolean
---@field licensed? boolean
---@field managed? boolean
---@field member? table

---@class MostRecent

---@class NewBillableGuest
---@field id? string

---@class NewBillableGuestLoadMatch
---@field id string
---@field organization_id string

---@class Notification
---@field board table
---@field card? table
---@field data? string
---@field date? string
---@field dateRead? string
---@field id? string
---@field idAction? string
---@field idMemberCreator? string
---@field reactions? table
---@field type? string
---@field unread? boolean

---@class NotificationLoadMatch
---@field id string
---@field board? boolean
---@field board_field? string
---@field card? boolean
---@field card_field? string
---@field display? boolean
---@field entity? boolean
---@field field? string
---@field list? boolean
---@field member? boolean
---@field member_creator? boolean
---@field member_creator_field? string
---@field member_field? string
---@field organization? boolean
---@field organization_field? string

---@class NotificationListMatch
---@field member_id string
---@field before? string
---@field display? boolean
---@field entity? boolean
---@field field? string
---@field filter? string
---@field limit? number
---@field member_creator? boolean
---@field member_creator_field? string
---@field page? number
---@field read_filter? string
---@field since? string

---@class NotificationUpdateData
---@field id string
---@field unread? boolean
---@field board? table
---@field card? table
---@field data? string
---@field date? string
---@field dateRead? string
---@field idAction? string
---@field idMemberCreator? string
---@field reactions? table
---@field type? string

---@class NotificationChannelSetting
---@field blockedKeys? table
---@field channel? string
---@field id? string
---@field idMember? string

---@class NotificationChannelSettingLoadMatch
---@field channel string
---@field member_id string

---@class NotificationChannelSettingListMatch
---@field member_id string

---@class NotificationChannelSettingUpdateData
---@field channel string
---@field member_id string
---@field blockedKeys? table
---@field id? string
---@field idMember? string

---@class NotificationList
---@field id? string

---@class NotificationListLoadMatch
---@field id string
---@field field? string

---@class NotificationMemberCreator
---@field id? string

---@class NotificationMemberCreatorLoadMatch
---@field id string
---@field field? string

---@class NotificationsChannelSetting

---@class Option
---@field id? string

---@class OptionLoadMatch
---@field custom_field_id string
---@field id? string

---@class OptionRemoveMatch
---@field custom_field_id string
---@field id string

---@class OrgInviteRestrict

---@class OrgInviteRestrictRemoveMatch
---@field organization_id string

---@class Organization
---@field dateLastActivity? string
---@field displayName? string
---@field id? string
---@field idBoards? table
---@field idEnterprise? string
---@field memberships? table
---@field name? string
---@field offering? string
---@field prefs? table
---@field premiumFeatures? table
---@field url? string

---@class OrganizationLoadMatch
---@field id string

---@class OrganizationListMatch
---@field enterpris_id string
---@field count? number
---@field field? string
---@field filter? string
---@field start_index? number

---@class OrganizationCreateData
---@field desc? string
---@field display_name string
---@field name? string
---@field website? string
---@field dateLastActivity? string
---@field displayName? string
---@field id? string
---@field idBoards? table
---@field idEnterprise? string
---@field memberships? table
---@field offering? string
---@field prefs? table
---@field premiumFeatures? table
---@field url? string

---@class OrganizationUpdateData
---@field id string
---@field desc? string
---@field display_name? string
---@field name? string
---@field ["prefs/associated_domain"]? string
---@field ["prefs/board_visibility_restrict/org"]? string
---@field ["prefs/board_visibility_restrict/private"]? string
---@field ["prefs/board_visibility_restrict/public"]? string
---@field ["prefs/external_members_disabled"]? boolean
---@field ["prefs/google_apps_version"]? number
---@field ["prefs/org_invite_restrict"]? string
---@field ["prefs/permission_level"]? string
---@field website? string
---@field dateLastActivity? string
---@field displayName? string
---@field idBoards? table
---@field idEnterprise? string
---@field memberships? table
---@field offering? string
---@field prefs? table
---@field premiumFeatures? table
---@field url? string

---@class OrganizationRemoveMatch
---@field enterpris_id? string
---@field id string

---@class PendingOrganization
---@field date? string
---@field displayName? string
---@field id? string
---@field idMember? string
---@field logoUrl? string
---@field memberRequestor? table
---@field membershipCount? number
---@field transferability? table

---@class PendingOrganizationListMatch
---@field enterpris_id string
---@field active_since? string
---@field inactive_since? string

---@class Plugin
---@field id? string

---@class PluginLoadMatch
---@field id string

---@class PluginListMatch
---@field board_id string

---@class PluginUpdateData
---@field id string

---@class PluginData

---@class PluginDataLoadMatch
---@field card_id string

---@class PluginDataListMatch
---@field organization_id string

---@class PluginListing
---@field description? string
---@field id? string
---@field locale? string
---@field name? string
---@field overview? string

---@class PluginListingCreateData
---@field id_plugin string
---@field description? string
---@field id? string
---@field locale? string
---@field name? string
---@field overview? string

---@class PluginListingUpdateData
---@field id string
---@field id_plugin string
---@field description? string
---@field locale? string
---@field name? string
---@field overview? string

---@class Reaction
---@field id? string

---@class ReactionLoadMatch
---@field id? string
---@field id_action string
---@field emoji? boolean
---@field member? boolean

---@class ReactionRemoveMatch
---@field id string
---@field id_action string

---@class Read

---@class ReadCreateData
---@field ids? table
---@field read? boolean

---@class SavedSearch
---@field id? string
---@field name? string
---@field pos? any
---@field query? string

---@class SavedSearchLoadMatch
---@field id string
---@field member_id string

---@class SavedSearchListMatch
---@field member_id string

---@class SavedSearchCreateData
---@field member_id string
---@field name string
---@field pos any
---@field query string
---@field id? string

---@class SavedSearchUpdateData
---@field id string
---@field member_id string
---@field name? string
---@field pos? string
---@field query? string

---@class SavedSearchRemoveMatch
---@field id string
---@field member_id string

---@class Search

---@class SearchListMatch
---@field board_field? string
---@field board_organization? boolean
---@field boards_limit? number
---@field card_attachment? string
---@field card_board? boolean
---@field card_field? string
---@field card_list? boolean
---@field card_member? boolean
---@field card_sticker? boolean
---@field cards_limit? number
---@field cards_page? number
---@field id_board? any
---@field id_card? string
---@field id_organization? string
---@field member_field? string
---@field members_limit? number
---@field model_type? string
---@field organization_field? string
---@field organizations_limit? number
---@field partial? boolean
---@field query string

---@class ShowSidebar

---@class ShowSidebarUpdateData
---@field board_id string
---@field value boolean

---@class ShowSidebarActivity

---@class ShowSidebarActivityUpdateData
---@field board_id string
---@field value boolean

---@class ShowSidebarBoardAction

---@class ShowSidebarBoardActionUpdateData
---@field board_id string
---@field value boolean

---@class ShowSidebarMember

---@class ShowSidebarMemberUpdateData
---@field board_id string
---@field value boolean

---@class Sticker
---@field id? string

---@class StickerLoadMatch
---@field card_id string
---@field id? string
---@field field? string

---@class StickerUpdateData
---@field card_id string
---@field id string
---@field left number
---@field rotate? number
---@field top number
---@field z_index number

---@class StickerRemoveMatch
---@field card_id string
---@field id string

---@class Tag
---@field id? string

---@class TagListMatch
---@field organization_id string

---@class TagRemoveMatch
---@field id string
---@field organization_id string

---@class Token
---@field dateCreated? string
---@field dateExpires? string
---@field id? string
---@field idMember? string
---@field identifier? string
---@field permissions? table

---@class TokenLoadMatch
---@field id string
---@field field? string
---@field webhook? boolean

---@class TokenListMatch
---@field member_id string
---@field webhook? boolean

---@class TokenRemoveMatch
---@field id string

---@class TransferrableOrganization
---@field id? string
---@field newBillableMembers? table
---@field restrictedMembers? table
---@field transferrable? boolean

---@class TransferrableOrganizationLoadMatch
---@field enterpris_id string
---@field id string

---@class TrelloList
---@field attachments? table
---@field closed? boolean
---@field id? string
---@field idBoard? string
---@field limits? table
---@field name? string
---@field pos? number
---@field softLimit? string
---@field subscribed? boolean

---@class TrelloListLoadMatch
---@field action_id string
---@field field? string

---@class TrelloListListMatch
---@field board_id string
---@field card? string
---@field card_field? string
---@field field? string
---@field filter? string

---@class TrelloListCreateData
---@field board_id string
---@field name string
---@field pos? string
---@field attachments? table
---@field closed? boolean
---@field id? string
---@field idBoard? string
---@field limits? table
---@field softLimit? string
---@field subscribed? boolean

---@class Webhook
---@field active? boolean
---@field callbackURL? string
---@field consecutiveFailures? number
---@field description? string
---@field firstConsecutiveFailDate? string
---@field id? string
---@field idModel? string

---@class WebhookLoadMatch
---@field field? string
---@field id string
---@field token_id? string

---@class WebhookListMatch
---@field token_id string

---@class WebhookCreateData
---@field active? boolean
---@field callback_url string
---@field description? string
---@field id_model string
---@field token_id? string
---@field callbackURL? string
---@field consecutiveFailures? number
---@field firstConsecutiveFailDate? string
---@field id? string
---@field idModel? string

---@class WebhookUpdateData
---@field id string
---@field active? boolean
---@field callback_url? string
---@field description? string
---@field id_model? string
---@field token_id? string
---@field callbackURL? string
---@field consecutiveFailures? number
---@field firstConsecutiveFailDate? string
---@field idModel? string

---@class WebhookRemoveMatch
---@field id string
---@field token_id? string

local M = {}

return M
