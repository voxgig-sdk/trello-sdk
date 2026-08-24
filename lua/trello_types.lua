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
---@field native? string
---@field shortName? string
---@field skinVariation? string
---@field type? string
---@field unified? string

---@class ActionLoadMatch
---@field id string

---@class ActionListMatch
---@field card_id string

---@class ActionCreateData
---@field id_action string
---@field data? table
---@field date? string
---@field display? table
---@field id? string
---@field idMemberCreator? string
---@field limits? table
---@field memberCreator? table
---@field native? string
---@field shortName? string
---@field skinVariation? string
---@field type? string
---@field unified? string

---@class ActionUpdateData
---@field id string
---@field data? table
---@field date? string
---@field display? table
---@field idMemberCreator? string
---@field limits? table
---@field memberCreator? table
---@field native? string
---@field shortName? string
---@field skinVariation? string
---@field type? string
---@field unified? string

---@class ActionRemoveMatch
---@field id string

---@class ActionReactionsSummary

---@class ActionReactionsSummaryLoadMatch
---@field id_action string

---@class Admin

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

---@class AttachmentLoadMatch
---@field card_id string
---@field id string

---@class AttachmentListMatch
---@field card_id string

---@class AttachmentRemoveMatch
---@field card_id string
---@field id string

---@class Batch

---@class BatchLoadMatch

---@class Board
---@field closed? boolean
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field desc? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field fullName? string
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

---@class BoardListMatch
---@field member_id string

---@class BoardCreateData
---@field closed? boolean
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field desc? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field fullName? string
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

---@class BoardUpdateData
---@field id string
---@field closed? boolean
---@field creationMethod? string
---@field dateLastActivity? string
---@field dateLastView? string
---@field datePluginDisable? string
---@field desc? string
---@field descData? string
---@field enterpriseOwned? boolean
---@field fullName? string
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

---@class BoardRemoveMatch
---@field id string

---@class BoardBackground
---@field id? string

---@class BoardBackgroundLoadMatch
---@field id? string
---@field member_id string
---@field id_background? string

---@class BoardBackgroundListMatch
---@field member_id string

---@class BoardBackgroundCreateData
---@field member_id string
---@field id? string

---@class BoardBackgroundUpdateData
---@field id? string
---@field member_id string
---@field id_background? string

---@class BoardBackgroundRemoveMatch
---@field id string
---@field member_id string

---@class BoardPlugin

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

---@class BoardStarCreateData
---@field member_id string
---@field id? string
---@field idBoard? string
---@field pos? number

---@class BoardStarUpdateData
---@field id string
---@field member_id string
---@field idBoard? string
---@field pos? number

---@class BoardStarRemoveMatch
---@field id string
---@field member_id string

---@class Bulk

---@class BulkLoadMatch
---@field enterpris_id string
---@field id table

---@class BulkUpdateData
---@field id string

---@class Card
---@field address? string
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field closed? boolean
---@field coordinates? string
---@field cover? table
---@field creationMethod? string
---@field customFieldItems? table
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

---@class CardListMatch
---@field action_id string

---@class CardCreateData
---@field address? string
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field closed? boolean
---@field coordinates? string
---@field cover? table
---@field creationMethod? string
---@field customFieldItems? table
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

---@class CardUpdateData
---@field id string
---@field address? string
---@field badges? table
---@field cardRole? string
---@field checkItemStates? table
---@field closed? boolean
---@field coordinates? string
---@field cover? table
---@field creationMethod? string
---@field customFieldItems? table
---@field dateLastActivity? string
---@field desc? string
---@field descData? table
---@field due? string
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
---@field name? string
---@field pos? number
---@field shortLink? string
---@field shortUrl? string
---@field subscribed? boolean
---@field url? string

---@class CardRemoveMatch
---@field id string

---@class CardCheckItemState

---@class CardCheckItemStateLoadMatch
---@field id string

---@class CardList

---@class CardListLoadMatch
---@field id string

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

---@class CheckItemUpdateData
---@field card_id? string
---@field id string
---@field checklist_id? string
---@field id_card? string
---@field idChecklist? string
---@field name? string
---@field nameData? string
---@field pos? string
---@field state? string

---@class CheckItemRemoveMatch
---@field card_id? string
---@field id string
---@field checklist_id? string

---@class Checklist

---@class ChecklistLoadMatch
---@field id string

---@class ChecklistCreateData

---@class ChecklistUpdateData
---@field field? string
---@field id string

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

---@class CustomBoardBackground

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

---@class CustomEmojiListMatch
---@field member_id string

---@class CustomEmojiCreateData
---@field member_id string
---@field id? string
---@field name? string
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

---@class CustomStickerListMatch
---@field member_id string

---@class CustomStickerCreateData
---@field member_id string
---@field id? string
---@field scaled? table
---@field url? string

---@class CustomStickerRemoveMatch
---@field id string
---@field member_id string

---@class EmailPosition

---@class EmailPositionUpdateData
---@field board_id string

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

---@class EnterprisCreateData
---@field id string
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
---@field signupUrl? string

---@class EnterprisSignupUrlLoadMatch
---@field id string

---@class EnterpriseAdmin
---@field fullName? string
---@field id? string
---@field username? string

---@class EnterpriseAdminLoadMatch
---@field enterpris_id string

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

---@class IdLabel

---@class IdLabelRemoveMatch
---@field card_id string
---@field id string

---@class IdMember

---@class IdMemberRemoveMatch
---@field card_id string
---@field id string

---@class Label

---@class LabelLoadMatch
---@field id string

---@class LabelCreateData

---@class LabelUpdateData
---@field id string
---@field field? string

---@class LabelRemoveMatch
---@field id string

---@class List

---@class ListLoadMatch
---@field board_id? string
---@field id string

---@class ListCreateData

---@class ListUpdateData
---@field id string
---@field field? string

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

---@class MemberListMatch
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

---@class MemberCreateData
---@field id string
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
---@field board_id? string
---@field organization_id? string
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

---@class MemberRemoveMatch
---@field board_id? string
---@field id string
---@field organization_id? string

---@class MemberPrivacy

---@class MemberPrivacyLoadMatch
---@field plugin_id string

---@class MembersVoted

---@class MembersVotedLoadMatch
---@field card_id string

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

---@class MembershipListMatch
---@field organization_id string

---@class MembershipUpdateData
---@field board_id string
---@field id string
---@field admin? boolean
---@field collaborator? boolean
---@field deactivated? boolean
---@field licensed? boolean
---@field managed? boolean
---@field member? table

---@class MostRecent

---@class NewBillableGuest

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
---@field field? string

---@class NotificationListMatch
---@field member_id string

---@class NotificationUpdateData
---@field id string
---@field board? table
---@field card? table
---@field data? string
---@field date? string
---@field dateRead? string
---@field idAction? string
---@field idMemberCreator? string
---@field reactions? table
---@field type? string
---@field unread? boolean

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

---@class NotificationListLoadMatch
---@field id string

---@class NotificationMemberCreator

---@class NotificationMemberCreatorLoadMatch
---@field id string

---@class NotificationsChannelSetting

---@class Option

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

---@class OrganizationCreateData
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

---@class OrganizationUpdateData
---@field id string
---@field dateLastActivity? string
---@field displayName? string
---@field idBoards? table
---@field idEnterprise? string
---@field memberships? table
---@field name? string
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

---@class ReactionLoadMatch
---@field id? string
---@field id_action string

---@class ReactionRemoveMatch
---@field id string
---@field id_action string

---@class Read

---@class ReadCreateData

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
---@field id? string
---@field name? string
---@field pos? any
---@field query? string

---@class SavedSearchUpdateData
---@field id string
---@field member_id string
---@field name? string
---@field pos? any
---@field query? string

---@class SavedSearchRemoveMatch
---@field id string
---@field member_id string

---@class Search

---@class SearchListMatch

---@class ShowSidebar

---@class ShowSidebarUpdateData
---@field board_id string

---@class ShowSidebarActivity

---@class ShowSidebarActivityUpdateData
---@field board_id string

---@class ShowSidebarBoardAction

---@class ShowSidebarBoardActionUpdateData
---@field board_id string

---@class ShowSidebarMember

---@class ShowSidebarMemberUpdateData
---@field board_id string

---@class Sticker

---@class StickerLoadMatch
---@field card_id string
---@field id? string

---@class StickerUpdateData
---@field card_id string
---@field id string

---@class StickerRemoveMatch
---@field card_id string
---@field id string

---@class Tag

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

---@class TokenListMatch
---@field member_id string

---@class TokenRemoveMatch
---@field id string

---@class TransferrableOrganization
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

---@class TrelloListListMatch
---@field board_id string

---@class TrelloListCreateData
---@field board_id string
---@field attachments? table
---@field closed? boolean
---@field id? string
---@field idBoard? string
---@field limits? table
---@field name? string
---@field pos? number
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
---@field callbackURL? string
---@field consecutiveFailures? number
---@field description? string
---@field firstConsecutiveFailDate? string
---@field id? string
---@field idModel? string

---@class WebhookUpdateData
---@field id string
---@field token_id? string
---@field active? boolean
---@field callbackURL? string
---@field consecutiveFailures? number
---@field description? string
---@field firstConsecutiveFailDate? string
---@field idModel? string

---@class WebhookRemoveMatch
---@field id string
---@field token_id? string

local M = {}

return M
