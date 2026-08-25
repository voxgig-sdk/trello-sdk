package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewActionEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewActionReactionsSummaryEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewAdminEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewApplicationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewApplicationComplianceEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewAssociatedDomainEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewAttachmentEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBatchEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBoardEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBoardBackgroundEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBoardPluginEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBoardStarEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewBulkEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCardEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCardCheckItemStateEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCardListEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCheckItemEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewChecklistEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewClaimableOrganizationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCustomBoardBackgroundEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCustomEmojiEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCustomFieldEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCustomFieldItemEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewCustomStickerEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEmailPositionEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEmojiEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEnterprisEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEnterprisSignupUrlEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEnterpriseAdminEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewEnterpriseAuditLogEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewExportEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewExportDownloadEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewGenerateEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewIdEmailListEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewIdLabelEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewIdMemberEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewLabelEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewListEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewMemberEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewMemberPrivacyEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewMembersVotedEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewMembershipEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewMostRecentEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNewBillableGuestEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNotificationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNotificationChannelSettingEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNotificationListEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNotificationMemberCreatorEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewNotificationsChannelSettingEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewOptionEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewOrgInviteRestrictEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewOrganizationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewPendingOrganizationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewPluginEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewPluginDataEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewPluginListingEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewReactionEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewReadEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewSavedSearchEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewSearchEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewShowSidebarEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewShowSidebarActivityEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewShowSidebarBoardActionEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewShowSidebarMemberEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewStickerEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewTagEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewTokenEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewTransferrableOrganizationEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewTrelloListEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

var NewWebhookEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

