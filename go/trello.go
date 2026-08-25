package voxgigtrellosdk

import (
	"github.com/voxgig-sdk/trello-sdk/go/core"
	"github.com/voxgig-sdk/trello-sdk/go/entity"
	"github.com/voxgig-sdk/trello-sdk/go/feature"
	_ "github.com/voxgig-sdk/trello-sdk/go/utility"
)

// Type aliases preserve external API.
type TrelloSDK = core.TrelloSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TrelloEntity = core.TrelloEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TrelloError = core.TrelloError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewActionEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewActionEntity(client, entopts)
	}
	core.NewActionReactionsSummaryEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewActionReactionsSummaryEntity(client, entopts)
	}
	core.NewAdminEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewAdminEntity(client, entopts)
	}
	core.NewApplicationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewApplicationEntity(client, entopts)
	}
	core.NewApplicationComplianceEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewApplicationComplianceEntity(client, entopts)
	}
	core.NewAssociatedDomainEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewAssociatedDomainEntity(client, entopts)
	}
	core.NewAttachmentEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewAttachmentEntity(client, entopts)
	}
	core.NewBatchEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBatchEntity(client, entopts)
	}
	core.NewBoardEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBoardEntity(client, entopts)
	}
	core.NewBoardBackgroundEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBoardBackgroundEntity(client, entopts)
	}
	core.NewBoardPluginEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBoardPluginEntity(client, entopts)
	}
	core.NewBoardStarEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBoardStarEntity(client, entopts)
	}
	core.NewBulkEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBulkEntity(client, entopts)
	}
	core.NewCardEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCardEntity(client, entopts)
	}
	core.NewCardCheckItemStateEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCardCheckItemStateEntity(client, entopts)
	}
	core.NewCardListEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCardListEntity(client, entopts)
	}
	core.NewCheckItemEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCheckItemEntity(client, entopts)
	}
	core.NewChecklistEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewChecklistEntity(client, entopts)
	}
	core.NewClaimableOrganizationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewClaimableOrganizationEntity(client, entopts)
	}
	core.NewCustomBoardBackgroundEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCustomBoardBackgroundEntity(client, entopts)
	}
	core.NewCustomEmojiEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCustomEmojiEntity(client, entopts)
	}
	core.NewCustomFieldEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCustomFieldEntity(client, entopts)
	}
	core.NewCustomFieldItemEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCustomFieldItemEntity(client, entopts)
	}
	core.NewCustomStickerEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewCustomStickerEntity(client, entopts)
	}
	core.NewEmailPositionEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEmailPositionEntity(client, entopts)
	}
	core.NewEmojiEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEmojiEntity(client, entopts)
	}
	core.NewEnterprisEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEnterprisEntity(client, entopts)
	}
	core.NewEnterprisSignupUrlEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEnterprisSignupUrlEntity(client, entopts)
	}
	core.NewEnterpriseAdminEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEnterpriseAdminEntity(client, entopts)
	}
	core.NewEnterpriseAuditLogEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewEnterpriseAuditLogEntity(client, entopts)
	}
	core.NewExportEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewExportEntity(client, entopts)
	}
	core.NewExportDownloadEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewExportDownloadEntity(client, entopts)
	}
	core.NewGenerateEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewGenerateEntity(client, entopts)
	}
	core.NewIdEmailListEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewIdEmailListEntity(client, entopts)
	}
	core.NewIdLabelEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewIdLabelEntity(client, entopts)
	}
	core.NewIdMemberEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewIdMemberEntity(client, entopts)
	}
	core.NewLabelEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewLabelEntity(client, entopts)
	}
	core.NewListEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewListEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMemberPrivacyEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewMemberPrivacyEntity(client, entopts)
	}
	core.NewMembersVotedEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewMembersVotedEntity(client, entopts)
	}
	core.NewMembershipEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewMembershipEntity(client, entopts)
	}
	core.NewMostRecentEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewMostRecentEntity(client, entopts)
	}
	core.NewNewBillableGuestEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNewBillableGuestEntity(client, entopts)
	}
	core.NewNotificationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNotificationEntity(client, entopts)
	}
	core.NewNotificationChannelSettingEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNotificationChannelSettingEntity(client, entopts)
	}
	core.NewNotificationListEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNotificationListEntity(client, entopts)
	}
	core.NewNotificationMemberCreatorEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNotificationMemberCreatorEntity(client, entopts)
	}
	core.NewNotificationsChannelSettingEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewNotificationsChannelSettingEntity(client, entopts)
	}
	core.NewOptionEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewOptionEntity(client, entopts)
	}
	core.NewOrgInviteRestrictEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewOrgInviteRestrictEntity(client, entopts)
	}
	core.NewOrganizationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewOrganizationEntity(client, entopts)
	}
	core.NewPendingOrganizationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewPendingOrganizationEntity(client, entopts)
	}
	core.NewPluginEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewPluginEntity(client, entopts)
	}
	core.NewPluginDataEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewPluginDataEntity(client, entopts)
	}
	core.NewPluginListingEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewPluginListingEntity(client, entopts)
	}
	core.NewReactionEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewReactionEntity(client, entopts)
	}
	core.NewReadEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewReadEntity(client, entopts)
	}
	core.NewSavedSearchEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewSavedSearchEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewSearchEntity(client, entopts)
	}
	core.NewShowSidebarEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewShowSidebarEntity(client, entopts)
	}
	core.NewShowSidebarActivityEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewShowSidebarActivityEntity(client, entopts)
	}
	core.NewShowSidebarBoardActionEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewShowSidebarBoardActionEntity(client, entopts)
	}
	core.NewShowSidebarMemberEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewShowSidebarMemberEntity(client, entopts)
	}
	core.NewStickerEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewStickerEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTokenEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewTokenEntity(client, entopts)
	}
	core.NewTransferrableOrganizationEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewTransferrableOrganizationEntity(client, entopts)
	}
	core.NewTrelloListEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewTrelloListEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTrelloSDK = core.NewTrelloSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTrelloSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TrelloSDK  { return NewTrelloSDK(nil) }
func Test() *TrelloSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
