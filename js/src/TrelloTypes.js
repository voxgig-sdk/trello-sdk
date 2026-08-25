// Typed models for the Trello SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Action
 * @property {Object} [data]
 * @property {string} [date]
 * @property {Object} [display]
 * @property {string} [id]
 * @property {string} [idMemberCreator]
 * @property {Object} [limits]
 * @property {Object} [memberCreator]
 * @property {string} [native]
 * @property {string} [shortName]
 * @property {string} [skinVariation]
 * @property {string} [type]
 * @property {string} [unified]
 */

/**
 * @typedef {Object} ActionLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ActionListMatch
 * @property {string} card_id
 */

/**
 * @typedef {Object} ActionCreateData
 * @property {string} id_action
 * @property {Object} [data]
 * @property {string} [date]
 * @property {Object} [display]
 * @property {string} [id]
 * @property {string} [idMemberCreator]
 * @property {Object} [limits]
 * @property {Object} [memberCreator]
 * @property {string} [native]
 * @property {string} [shortName]
 * @property {string} [skinVariation]
 * @property {string} [type]
 * @property {string} [unified]
 */

/**
 * @typedef {Object} ActionUpdateData
 * @property {string} id
 * @property {Object} [data]
 * @property {string} [date]
 * @property {Object} [display]
 * @property {string} [idMemberCreator]
 * @property {Object} [limits]
 * @property {Object} [memberCreator]
 * @property {string} [native]
 * @property {string} [shortName]
 * @property {string} [skinVariation]
 * @property {string} [type]
 * @property {string} [unified]
 */

/**
 * @typedef {Object} ActionRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ActionReactionsSummary
 */

/**
 * @typedef {Object} ActionReactionsSummaryLoadMatch
 * @property {string} id_action
 */

/**
 * @typedef {Object} Admin
 * @property {string} [id]
 */

/**
 * @typedef {Object} AdminUpdateData
 * @property {string} enterpris_id
 * @property {string} id
 */

/**
 * @typedef {Object} AdminRemoveMatch
 * @property {string} enterpris_id
 * @property {string} id
 */

/**
 * @typedef {Object} Application
 */

/**
 * @typedef {Object} ApplicationCompliance
 */

/**
 * @typedef {Object} ApplicationComplianceLoadMatch
 * @property {string} key
 */

/**
 * @typedef {Object} AssociatedDomain
 */

/**
 * @typedef {Object} AssociatedDomainRemoveMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} Attachment
 * @property {string} [id]
 */

/**
 * @typedef {Object} AttachmentLoadMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} AttachmentListMatch
 * @property {string} card_id
 */

/**
 * @typedef {Object} AttachmentRemoveMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} Batch
 */

/**
 * @typedef {Object} BatchLoadMatch
 */

/**
 * @typedef {Object} Board
 * @property {boolean} [closed]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {string} [dateLastView]
 * @property {string} [datePluginDisable]
 * @property {string} [desc]
 * @property {string} [descData]
 * @property {boolean} [enterpriseOwned]
 * @property {string} [fullName]
 * @property {string} id
 * @property {string} [idMemberCreator]
 * @property {string} [idOrganization]
 * @property {string} [idTags]
 * @property {number} [ixUpdate]
 * @property {Object} [labelNames]
 * @property {Object} [limits]
 * @property {string} [memberships]
 * @property {string} [name]
 * @property {boolean} [pinned]
 * @property {string} [powerUps]
 * @property {Object} [prefs]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [starred]
 * @property {boolean} [subscribed]
 * @property {string} [templateGallery]
 * @property {string} [url]
 */

/**
 * @typedef {Object} BoardLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} BoardListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} BoardCreateData
 * @property {boolean} [closed]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {string} [dateLastView]
 * @property {string} [datePluginDisable]
 * @property {string} [desc]
 * @property {string} [descData]
 * @property {boolean} [enterpriseOwned]
 * @property {string} [fullName]
 * @property {string} id
 * @property {string} [idMemberCreator]
 * @property {string} [idOrganization]
 * @property {string} [idTags]
 * @property {number} [ixUpdate]
 * @property {Object} [labelNames]
 * @property {Object} [limits]
 * @property {string} [memberships]
 * @property {string} [name]
 * @property {boolean} [pinned]
 * @property {string} [powerUps]
 * @property {Object} [prefs]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [starred]
 * @property {boolean} [subscribed]
 * @property {string} [templateGallery]
 * @property {string} [url]
 */

/**
 * @typedef {Object} BoardUpdateData
 * @property {string} id
 * @property {boolean} [closed]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {string} [dateLastView]
 * @property {string} [datePluginDisable]
 * @property {string} [desc]
 * @property {string} [descData]
 * @property {boolean} [enterpriseOwned]
 * @property {string} [fullName]
 * @property {string} [idMemberCreator]
 * @property {string} [idOrganization]
 * @property {string} [idTags]
 * @property {number} [ixUpdate]
 * @property {Object} [labelNames]
 * @property {Object} [limits]
 * @property {string} [memberships]
 * @property {string} [name]
 * @property {boolean} [pinned]
 * @property {string} [powerUps]
 * @property {Object} [prefs]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [starred]
 * @property {boolean} [subscribed]
 * @property {string} [templateGallery]
 * @property {string} [url]
 */

/**
 * @typedef {Object} BoardRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} BoardBackground
 * @property {string} [id]
 */

/**
 * @typedef {Object} BoardBackgroundLoadMatch
 * @property {string} [id]
 * @property {string} member_id
 * @property {string} [id_background]
 */

/**
 * @typedef {Object} BoardBackgroundListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} BoardBackgroundCreateData
 * @property {string} member_id
 * @property {string} [id]
 */

/**
 * @typedef {Object} BoardBackgroundUpdateData
 * @property {string} [id]
 * @property {string} member_id
 * @property {string} [id_background]
 */

/**
 * @typedef {Object} BoardBackgroundRemoveMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} BoardPlugin
 * @property {string} [id]
 */

/**
 * @typedef {Object} BoardPluginRemoveMatch
 * @property {string} board_id
 * @property {string} id
 */

/**
 * @typedef {Object} BoardStar
 * @property {string} [id]
 * @property {string} [idBoard]
 * @property {number} [pos]
 */

/**
 * @typedef {Object} BoardStarLoadMatch
 * @property {string} [id]
 * @property {string} member_id
 */

/**
 * @typedef {Object} BoardStarListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} BoardStarCreateData
 * @property {string} member_id
 * @property {string} [id]
 * @property {string} [idBoard]
 * @property {number} [pos]
 */

/**
 * @typedef {Object} BoardStarUpdateData
 * @property {string} id
 * @property {string} member_id
 * @property {string} [idBoard]
 * @property {number} [pos]
 */

/**
 * @typedef {Object} BoardStarRemoveMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} Bulk
 * @property {string} [id]
 */

/**
 * @typedef {Object} BulkLoadMatch
 * @property {string} enterpris_id
 * @property {Array} id
 */

/**
 * @typedef {Object} BulkUpdateData
 * @property {string} id
 */

/**
 * @typedef {Object} Card
 * @property {string} [address]
 * @property {Object} [badges]
 * @property {string} [cardRole]
 * @property {Array} [checkItemStates]
 * @property {boolean} [closed]
 * @property {string} [coordinates]
 * @property {Object} [cover]
 * @property {string} [creationMethod]
 * @property {Array} [customFieldItems]
 * @property {string} [dateLastActivity]
 * @property {string} [desc]
 * @property {Object} [descData]
 * @property {string} [due]
 * @property {string} [dueReminder]
 * @property {string} [id]
 * @property {string} [idAttachmentCover]
 * @property {string} [idBoard]
 * @property {Array} [idChecklists]
 * @property {Array} [idLabels]
 * @property {string} [idList]
 * @property {Array} [idMembers]
 * @property {Array} [idMembersVoted]
 * @property {number} [idShort]
 * @property {Array} [labels]
 * @property {Object} [limits]
 * @property {string} [locationName]
 * @property {boolean} [manualCoverAttachment]
 * @property {string} [mirrorSourceId]
 * @property {string} [name]
 * @property {number} [pos]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [subscribed]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CardLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CardListMatch
 * @property {string} action_id
 */

/**
 * @typedef {Object} CardCreateData
 * @property {string} [address]
 * @property {Object} [badges]
 * @property {string} [cardRole]
 * @property {Array} [checkItemStates]
 * @property {boolean} [closed]
 * @property {string} [coordinates]
 * @property {Object} [cover]
 * @property {string} [creationMethod]
 * @property {Array} [customFieldItems]
 * @property {string} [dateLastActivity]
 * @property {string} [desc]
 * @property {Object} [descData]
 * @property {string} [due]
 * @property {string} [dueReminder]
 * @property {string} [id]
 * @property {string} [idAttachmentCover]
 * @property {string} [idBoard]
 * @property {Array} [idChecklists]
 * @property {Array} [idLabels]
 * @property {string} [idList]
 * @property {Array} [idMembers]
 * @property {Array} [idMembersVoted]
 * @property {number} [idShort]
 * @property {Array} [labels]
 * @property {Object} [limits]
 * @property {string} [locationName]
 * @property {boolean} [manualCoverAttachment]
 * @property {string} [mirrorSourceId]
 * @property {string} [name]
 * @property {number} [pos]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [subscribed]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CardUpdateData
 * @property {string} id
 * @property {string} [address]
 * @property {Object} [badges]
 * @property {string} [cardRole]
 * @property {Array} [checkItemStates]
 * @property {boolean} [closed]
 * @property {string} [coordinates]
 * @property {Object} [cover]
 * @property {string} [creationMethod]
 * @property {Array} [customFieldItems]
 * @property {string} [dateLastActivity]
 * @property {string} [desc]
 * @property {Object} [descData]
 * @property {string} [due]
 * @property {string} [dueReminder]
 * @property {string} [idAttachmentCover]
 * @property {string} [idBoard]
 * @property {Array} [idChecklists]
 * @property {Array} [idLabels]
 * @property {string} [idList]
 * @property {Array} [idMembers]
 * @property {Array} [idMembersVoted]
 * @property {number} [idShort]
 * @property {Array} [labels]
 * @property {Object} [limits]
 * @property {string} [locationName]
 * @property {boolean} [manualCoverAttachment]
 * @property {string} [mirrorSourceId]
 * @property {string} [name]
 * @property {number} [pos]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [subscribed]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CardRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CardCheckItemState
 * @property {string} [id]
 */

/**
 * @typedef {Object} CardCheckItemStateLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CardList
 * @property {string} [id]
 */

/**
 * @typedef {Object} CardListLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CheckItem
 * @property {string} [id]
 * @property {string} [idChecklist]
 * @property {string} [name]
 * @property {string} [nameData]
 * @property {string} [pos]
 * @property {string} [state]
 */

/**
 * @typedef {Object} CheckItemLoadMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} CheckItemUpdateData
 * @property {string} [card_id]
 * @property {string} id
 * @property {string} [checklist_id]
 * @property {string} [id_card]
 * @property {string} [idChecklist]
 * @property {string} [name]
 * @property {string} [nameData]
 * @property {string} [pos]
 * @property {string} [state]
 */

/**
 * @typedef {Object} CheckItemRemoveMatch
 * @property {string} [card_id]
 * @property {string} id
 * @property {string} [checklist_id]
 */

/**
 * @typedef {Object} Checklist
 * @property {string} [id]
 */

/**
 * @typedef {Object} ChecklistLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ChecklistCreateData
 * @property {string} [id]
 */

/**
 * @typedef {Object} ChecklistUpdateData
 * @property {string} [field]
 * @property {string} id
 */

/**
 * @typedef {Object} ChecklistRemoveMatch
 * @property {string} [card_id]
 * @property {string} id
 */

/**
 * @typedef {Object} ClaimableOrganization
 * @property {number} [activeMembershipCount]
 * @property {string} [dateLastActive]
 * @property {string} [displayName]
 * @property {string} [id]
 * @property {Array} [idActiveAdmins]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {Array} [products]
 */

/**
 * @typedef {Object} ClaimableOrganizationListMatch
 * @property {string} enterpris_id
 */

/**
 * @typedef {Object} CustomBoardBackground
 * @property {string} [id]
 */

/**
 * @typedef {Object} CustomBoardBackgroundRemoveMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomEmoji
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CustomEmojiLoadMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomEmojiListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomEmojiCreateData
 * @property {string} member_id
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CustomField
 * @property {boolean} [cardFront]
 * @property {Object} [display]
 * @property {boolean} [display_cardFront]
 * @property {boolean} [displaycardFront]
 * @property {string} [fieldGroup]
 * @property {string} [id]
 * @property {string} idModel
 * @property {string} modelType
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [pos]
 * @property {string} type
 */

/**
 * @typedef {Object} CustomFieldLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldListMatch
 * @property {string} board_id
 */

/**
 * @typedef {Object} CustomFieldCreateData
 * @property {boolean} [cardFront]
 * @property {Object} [display]
 * @property {boolean} [display_cardFront]
 * @property {boolean} [displaycardFront]
 * @property {string} [fieldGroup]
 * @property {string} [id]
 * @property {string} idModel
 * @property {string} modelType
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [pos]
 * @property {string} type
 */

/**
 * @typedef {Object} CustomFieldUpdateData
 * @property {string} id
 * @property {boolean} [cardFront]
 * @property {Object} [display]
 * @property {boolean} [display_cardFront]
 * @property {boolean} [displaycardFront]
 * @property {string} [fieldGroup]
 * @property {string} [idModel]
 * @property {string} [modelType]
 * @property {string} [name]
 * @property {Array} [options]
 * @property {string} [pos]
 * @property {string} [type]
 */

/**
 * @typedef {Object} CustomFieldRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CustomFieldItem
 * @property {string} [id]
 * @property {string} [idCustomField]
 * @property {string} [idModel]
 * @property {string} [modelType]
 * @property {Object} [value]
 */

/**
 * @typedef {Object} CustomFieldItemListMatch
 * @property {string} card_id
 */

/**
 * @typedef {Object} CustomSticker
 * @property {string} [id]
 * @property {Array} [scaled]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CustomStickerLoadMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomStickerListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomStickerCreateData
 * @property {string} member_id
 * @property {string} [id]
 * @property {Array} [scaled]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CustomStickerRemoveMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} EmailPosition
 */

/**
 * @typedef {Object} EmailPositionUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} Emoji
 * @property {string} [category]
 * @property {Array} [keywords]
 * @property {string} [name]
 * @property {string} [native]
 * @property {number} [sheetX]
 * @property {number} [sheetY]
 * @property {string} [shortName]
 * @property {Array} [shortNames]
 * @property {string} [text]
 * @property {string} [texts]
 * @property {string} [tts]
 * @property {string} [unified]
 */

/**
 * @typedef {Object} EmojiListMatch
 * @property {string} [category]
 * @property {Array} [keywords]
 * @property {string} [name]
 * @property {string} [native]
 * @property {number} [sheetX]
 * @property {number} [sheetY]
 * @property {string} [shortName]
 * @property {Array} [shortNames]
 * @property {string} [text]
 * @property {string} [texts]
 * @property {string} [tts]
 * @property {string} [unified]
 */

/**
 * @typedef {Object} Enterpris
 * @property {string} [dateOrganizationPrefsLastUpdated]
 * @property {string} [displayName]
 * @property {Array} [domains]
 * @property {Array} [enterpriseDomains]
 * @property {string} [id]
 * @property {Array} [idAdmins]
 * @property {Array} [idOrganizations]
 * @property {Object} [idp]
 * @property {boolean} [isRealEnterprise]
 * @property {Object} [licenses]
 * @property {string} [logoHash]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {Object} [organizationPrefs]
 * @property {Array} [pluginWhitelistingEnabled]
 * @property {Object} [prefs]
 * @property {Array} [products]
 * @property {boolean} [ssoActivationFailed]
 */

/**
 * @typedef {Object} EnterprisLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EnterprisCreateData
 * @property {string} id
 * @property {string} [dateOrganizationPrefsLastUpdated]
 * @property {string} [displayName]
 * @property {Array} [domains]
 * @property {Array} [enterpriseDomains]
 * @property {Array} [idAdmins]
 * @property {Array} [idOrganizations]
 * @property {Object} [idp]
 * @property {boolean} [isRealEnterprise]
 * @property {Object} [licenses]
 * @property {string} [logoHash]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {Object} [organizationPrefs]
 * @property {Array} [pluginWhitelistingEnabled]
 * @property {Object} [prefs]
 * @property {Array} [products]
 * @property {boolean} [ssoActivationFailed]
 */

/**
 * @typedef {Object} EnterprisUpdateData
 * @property {string} id
 * @property {string} [dateOrganizationPrefsLastUpdated]
 * @property {string} [displayName]
 * @property {Array} [domains]
 * @property {Array} [enterpriseDomains]
 * @property {Array} [idAdmins]
 * @property {Array} [idOrganizations]
 * @property {Object} [idp]
 * @property {boolean} [isRealEnterprise]
 * @property {Object} [licenses]
 * @property {string} [logoHash]
 * @property {string} [logoUrl]
 * @property {string} [name]
 * @property {Object} [organizationPrefs]
 * @property {Array} [pluginWhitelistingEnabled]
 * @property {Object} [prefs]
 * @property {Array} [products]
 * @property {boolean} [ssoActivationFailed]
 */

/**
 * @typedef {Object} EnterprisSignupUrl
 * @property {string} [id]
 * @property {string} [signupUrl]
 */

/**
 * @typedef {Object} EnterprisSignupUrlLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EnterpriseAdmin
 * @property {string} [fullName]
 * @property {string} [id]
 * @property {string} [username]
 */

/**
 * @typedef {Object} EnterpriseAdminLoadMatch
 * @property {string} enterpris_id
 */

/**
 * @typedef {Object} EnterpriseAuditLog
 * @property {string} [date]
 * @property {string} [idAction]
 * @property {Object} [member]
 * @property {Object} [memberCreator]
 * @property {Object} [organization]
 * @property {string} [type]
 */

/**
 * @typedef {Object} EnterpriseAuditLogListMatch
 * @property {string} enterpris_id
 */

/**
 * @typedef {Object} Export
 * @property {number} [attempts]
 * @property {string} [exportUrl]
 * @property {boolean} [finished]
 * @property {string} [id]
 * @property {string} [size]
 * @property {string} [stage]
 * @property {string} [startedAt]
 * @property {Object} [status]
 */

/**
 * @typedef {Object} ExportLoadMatch
 * @property {string} board_id
 * @property {string} id
 */

/**
 * @typedef {Object} ExportListMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} ExportCreateData
 * @property {string} board_id
 * @property {number} [attempts]
 * @property {string} [exportUrl]
 * @property {boolean} [finished]
 * @property {string} [id]
 * @property {string} [size]
 * @property {string} [stage]
 * @property {string} [startedAt]
 * @property {Object} [status]
 */

/**
 * @typedef {Object} ExportRemoveMatch
 * @property {string} board_id
 * @property {string} id
 */

/**
 * @typedef {Object} ExportDownload
 */

/**
 * @typedef {Object} ExportDownloadLoadMatch
 * @property {string} board_id
 * @property {string} id_export
 */

/**
 * @typedef {Object} Generate
 */

/**
 * @typedef {Object} GenerateCreateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} IdEmailList
 */

/**
 * @typedef {Object} IdEmailListUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} IdLabel
 * @property {string} [id]
 */

/**
 * @typedef {Object} IdLabelRemoveMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} IdMember
 * @property {string} [id]
 */

/**
 * @typedef {Object} IdMemberRemoveMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} Label
 * @property {string} [id]
 */

/**
 * @typedef {Object} LabelLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} LabelCreateData
 * @property {string} [id]
 */

/**
 * @typedef {Object} LabelUpdateData
 * @property {string} id
 * @property {string} [field]
 */

/**
 * @typedef {Object} LabelRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} List
 * @property {string} [id]
 */

/**
 * @typedef {Object} ListLoadMatch
 * @property {string} [board_id]
 * @property {string} id
 */

/**
 * @typedef {Object} ListCreateData
 * @property {string} [id]
 */

/**
 * @typedef {Object} ListUpdateData
 * @property {string} id
 * @property {string} [field]
 */

/**
 * @typedef {Object} Member
 * @property {string} [aaEmail]
 * @property {string} [aaEnrolledDate]
 * @property {string} [aaId]
 * @property {boolean} [activityBlocked]
 * @property {string} [avatarHash]
 * @property {string} [avatarSource]
 * @property {string} [avatarUrl]
 * @property {string} [bio]
 * @property {Object} [bioData]
 * @property {boolean} [confirmed]
 * @property {string} [email]
 * @property {string} [fullName]
 * @property {string} [gravatarHash]
 * @property {string} [id]
 * @property {Array} [idBoards]
 * @property {Array} [idBoardsPinned]
 * @property {string} [idEnterprise]
 * @property {Array} [idEnterprisesAdmin]
 * @property {Array} [idEnterprisesDeactivated]
 * @property {string} [idMemberReferrer]
 * @property {Array} [idOrganizations]
 * @property {Array} [idPremOrgsAdmin]
 * @property {string} [initials]
 * @property {boolean} [isAaMastered]
 * @property {number} [ixUpdate]
 * @property {Object} [limits]
 * @property {Array} [loginTypes]
 * @property {Object} [marketingOptIn]
 * @property {string} [memberType]
 * @property {Object} [messagesDismissed]
 * @property {Object} [nonPublic]
 * @property {boolean} [nonPublicAvailable]
 * @property {Array} [oneTimeMessagesDismissed]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {Array} [products]
 * @property {string} [status]
 * @property {Array} [trophies]
 * @property {string} [uploadedAvatarHash]
 * @property {string} [uploadedAvatarUrl]
 * @property {string} [url]
 * @property {string} [username]
 */

/**
 * @typedef {Object} MemberLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} MemberListMatch
 * @property {string} [aaEmail]
 * @property {string} [aaEnrolledDate]
 * @property {string} [aaId]
 * @property {boolean} [activityBlocked]
 * @property {string} [avatarHash]
 * @property {string} [avatarSource]
 * @property {string} [avatarUrl]
 * @property {string} [bio]
 * @property {Object} [bioData]
 * @property {boolean} [confirmed]
 * @property {string} [email]
 * @property {string} [fullName]
 * @property {string} [gravatarHash]
 * @property {string} [id]
 * @property {Array} [idBoards]
 * @property {Array} [idBoardsPinned]
 * @property {string} [idEnterprise]
 * @property {Array} [idEnterprisesAdmin]
 * @property {Array} [idEnterprisesDeactivated]
 * @property {string} [idMemberReferrer]
 * @property {Array} [idOrganizations]
 * @property {Array} [idPremOrgsAdmin]
 * @property {string} [initials]
 * @property {boolean} [isAaMastered]
 * @property {number} [ixUpdate]
 * @property {Object} [limits]
 * @property {Array} [loginTypes]
 * @property {Object} [marketingOptIn]
 * @property {string} [memberType]
 * @property {Object} [messagesDismissed]
 * @property {Object} [nonPublic]
 * @property {boolean} [nonPublicAvailable]
 * @property {Array} [oneTimeMessagesDismissed]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {Array} [products]
 * @property {string} [status]
 * @property {Array} [trophies]
 * @property {string} [uploadedAvatarHash]
 * @property {string} [uploadedAvatarUrl]
 * @property {string} [url]
 * @property {string} [username]
 */

/**
 * @typedef {Object} MemberCreateData
 * @property {string} id
 * @property {string} [aaEmail]
 * @property {string} [aaEnrolledDate]
 * @property {string} [aaId]
 * @property {boolean} [activityBlocked]
 * @property {string} [avatarHash]
 * @property {string} [avatarSource]
 * @property {string} [avatarUrl]
 * @property {string} [bio]
 * @property {Object} [bioData]
 * @property {boolean} [confirmed]
 * @property {string} [email]
 * @property {string} [fullName]
 * @property {string} [gravatarHash]
 * @property {Array} [idBoards]
 * @property {Array} [idBoardsPinned]
 * @property {string} [idEnterprise]
 * @property {Array} [idEnterprisesAdmin]
 * @property {Array} [idEnterprisesDeactivated]
 * @property {string} [idMemberReferrer]
 * @property {Array} [idOrganizations]
 * @property {Array} [idPremOrgsAdmin]
 * @property {string} [initials]
 * @property {boolean} [isAaMastered]
 * @property {number} [ixUpdate]
 * @property {Object} [limits]
 * @property {Array} [loginTypes]
 * @property {Object} [marketingOptIn]
 * @property {string} [memberType]
 * @property {Object} [messagesDismissed]
 * @property {Object} [nonPublic]
 * @property {boolean} [nonPublicAvailable]
 * @property {Array} [oneTimeMessagesDismissed]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {Array} [products]
 * @property {string} [status]
 * @property {Array} [trophies]
 * @property {string} [uploadedAvatarHash]
 * @property {string} [uploadedAvatarUrl]
 * @property {string} [url]
 * @property {string} [username]
 */

/**
 * @typedef {Object} MemberUpdateData
 * @property {string} id
 * @property {string} [board_id]
 * @property {string} [organization_id]
 * @property {string} [aaEmail]
 * @property {string} [aaEnrolledDate]
 * @property {string} [aaId]
 * @property {boolean} [activityBlocked]
 * @property {string} [avatarHash]
 * @property {string} [avatarSource]
 * @property {string} [avatarUrl]
 * @property {string} [bio]
 * @property {Object} [bioData]
 * @property {boolean} [confirmed]
 * @property {string} [email]
 * @property {string} [fullName]
 * @property {string} [gravatarHash]
 * @property {Array} [idBoards]
 * @property {Array} [idBoardsPinned]
 * @property {string} [idEnterprise]
 * @property {Array} [idEnterprisesAdmin]
 * @property {Array} [idEnterprisesDeactivated]
 * @property {string} [idMemberReferrer]
 * @property {Array} [idOrganizations]
 * @property {Array} [idPremOrgsAdmin]
 * @property {string} [initials]
 * @property {boolean} [isAaMastered]
 * @property {number} [ixUpdate]
 * @property {Object} [limits]
 * @property {Array} [loginTypes]
 * @property {Object} [marketingOptIn]
 * @property {string} [memberType]
 * @property {Object} [messagesDismissed]
 * @property {Object} [nonPublic]
 * @property {boolean} [nonPublicAvailable]
 * @property {Array} [oneTimeMessagesDismissed]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {Array} [products]
 * @property {string} [status]
 * @property {Array} [trophies]
 * @property {string} [uploadedAvatarHash]
 * @property {string} [uploadedAvatarUrl]
 * @property {string} [url]
 * @property {string} [username]
 */

/**
 * @typedef {Object} MemberRemoveMatch
 * @property {string} [board_id]
 * @property {string} id
 * @property {string} [organization_id]
 */

/**
 * @typedef {Object} MemberPrivacy
 */

/**
 * @typedef {Object} MemberPrivacyLoadMatch
 * @property {string} plugin_id
 */

/**
 * @typedef {Object} MembersVoted
 * @property {string} [id]
 */

/**
 * @typedef {Object} MembersVotedLoadMatch
 * @property {string} card_id
 */

/**
 * @typedef {Object} MembersVotedRemoveMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} Membership
 * @property {boolean} [admin]
 * @property {boolean} [collaborator]
 * @property {boolean} [deactivated]
 * @property {string} [id]
 * @property {boolean} [licensed]
 * @property {boolean} [managed]
 * @property {Object} [member]
 */

/**
 * @typedef {Object} MembershipLoadMatch
 * @property {string} id
 * @property {string} organization_id
 */

/**
 * @typedef {Object} MembershipListMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} MembershipUpdateData
 * @property {string} board_id
 * @property {string} id
 * @property {boolean} [admin]
 * @property {boolean} [collaborator]
 * @property {boolean} [deactivated]
 * @property {boolean} [licensed]
 * @property {boolean} [managed]
 * @property {Object} [member]
 */

/**
 * @typedef {Object} MostRecent
 */

/**
 * @typedef {Object} NewBillableGuest
 * @property {string} [id]
 */

/**
 * @typedef {Object} NewBillableGuestLoadMatch
 * @property {string} id
 * @property {string} organization_id
 */

/**
 * @typedef {Object} Notification
 * @property {Object} board
 * @property {Object} [card]
 * @property {string} [data]
 * @property {string} [date]
 * @property {string} [dateRead]
 * @property {string} [id]
 * @property {string} [idAction]
 * @property {string} [idMemberCreator]
 * @property {Array} [reactions]
 * @property {string} [type]
 * @property {boolean} [unread]
 */

/**
 * @typedef {Object} NotificationLoadMatch
 * @property {string} id
 * @property {string} [field]
 */

/**
 * @typedef {Object} NotificationListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} NotificationUpdateData
 * @property {string} id
 * @property {Object} [board]
 * @property {Object} [card]
 * @property {string} [data]
 * @property {string} [date]
 * @property {string} [dateRead]
 * @property {string} [idAction]
 * @property {string} [idMemberCreator]
 * @property {Array} [reactions]
 * @property {string} [type]
 * @property {boolean} [unread]
 */

/**
 * @typedef {Object} NotificationChannelSetting
 * @property {Array} [blockedKeys]
 * @property {string} [channel]
 * @property {string} [id]
 * @property {string} [idMember]
 */

/**
 * @typedef {Object} NotificationChannelSettingLoadMatch
 * @property {string} channel
 * @property {string} member_id
 */

/**
 * @typedef {Object} NotificationChannelSettingListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} NotificationChannelSettingUpdateData
 * @property {string} channel
 * @property {string} member_id
 * @property {Array} [blockedKeys]
 * @property {string} [id]
 * @property {string} [idMember]
 */

/**
 * @typedef {Object} NotificationList
 * @property {string} [id]
 */

/**
 * @typedef {Object} NotificationListLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} NotificationMemberCreator
 * @property {string} [id]
 */

/**
 * @typedef {Object} NotificationMemberCreatorLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} NotificationsChannelSetting
 */

/**
 * @typedef {Object} Option
 * @property {string} [id]
 */

/**
 * @typedef {Object} OptionLoadMatch
 * @property {string} custom_field_id
 * @property {string} [id]
 */

/**
 * @typedef {Object} OptionRemoveMatch
 * @property {string} custom_field_id
 * @property {string} id
 */

/**
 * @typedef {Object} OrgInviteRestrict
 */

/**
 * @typedef {Object} OrgInviteRestrictRemoveMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} Organization
 * @property {string} [dateLastActivity]
 * @property {string} [displayName]
 * @property {string} [id]
 * @property {Array} [idBoards]
 * @property {string} [idEnterprise]
 * @property {Array} [memberships]
 * @property {string} [name]
 * @property {string} [offering]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {string} [url]
 */

/**
 * @typedef {Object} OrganizationLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} OrganizationListMatch
 * @property {string} enterpris_id
 */

/**
 * @typedef {Object} OrganizationCreateData
 * @property {string} [dateLastActivity]
 * @property {string} [displayName]
 * @property {string} [id]
 * @property {Array} [idBoards]
 * @property {string} [idEnterprise]
 * @property {Array} [memberships]
 * @property {string} [name]
 * @property {string} [offering]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {string} [url]
 */

/**
 * @typedef {Object} OrganizationUpdateData
 * @property {string} id
 * @property {string} [dateLastActivity]
 * @property {string} [displayName]
 * @property {Array} [idBoards]
 * @property {string} [idEnterprise]
 * @property {Array} [memberships]
 * @property {string} [name]
 * @property {string} [offering]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {string} [url]
 */

/**
 * @typedef {Object} OrganizationRemoveMatch
 * @property {string} [enterpris_id]
 * @property {string} id
 */

/**
 * @typedef {Object} PendingOrganization
 * @property {string} [date]
 * @property {string} [displayName]
 * @property {string} [id]
 * @property {string} [idMember]
 * @property {string} [logoUrl]
 * @property {Object} [memberRequestor]
 * @property {number} [membershipCount]
 * @property {Object} [transferability]
 */

/**
 * @typedef {Object} PendingOrganizationListMatch
 * @property {string} enterpris_id
 */

/**
 * @typedef {Object} Plugin
 * @property {string} [id]
 */

/**
 * @typedef {Object} PluginLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PluginListMatch
 * @property {string} board_id
 */

/**
 * @typedef {Object} PluginUpdateData
 * @property {string} id
 */

/**
 * @typedef {Object} PluginData
 */

/**
 * @typedef {Object} PluginDataLoadMatch
 * @property {string} card_id
 */

/**
 * @typedef {Object} PluginDataListMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} PluginListing
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {string} [name]
 * @property {string} [overview]
 */

/**
 * @typedef {Object} PluginListingCreateData
 * @property {string} id_plugin
 * @property {string} [description]
 * @property {string} [id]
 * @property {string} [locale]
 * @property {string} [name]
 * @property {string} [overview]
 */

/**
 * @typedef {Object} PluginListingUpdateData
 * @property {string} id
 * @property {string} id_plugin
 * @property {string} [description]
 * @property {string} [locale]
 * @property {string} [name]
 * @property {string} [overview]
 */

/**
 * @typedef {Object} Reaction
 * @property {string} [id]
 */

/**
 * @typedef {Object} ReactionLoadMatch
 * @property {string} [id]
 * @property {string} id_action
 */

/**
 * @typedef {Object} ReactionRemoveMatch
 * @property {string} id
 * @property {string} id_action
 */

/**
 * @typedef {Object} Read
 */

/**
 * @typedef {Object} ReadCreateData
 */

/**
 * @typedef {Object} SavedSearch
 * @property {string} [id]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [query]
 */

/**
 * @typedef {Object} SavedSearchLoadMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} SavedSearchListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} SavedSearchCreateData
 * @property {string} member_id
 * @property {string} [id]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [query]
 */

/**
 * @typedef {Object} SavedSearchUpdateData
 * @property {string} id
 * @property {string} member_id
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [query]
 */

/**
 * @typedef {Object} SavedSearchRemoveMatch
 * @property {string} id
 * @property {string} member_id
 */

/**
 * @typedef {Object} Search
 */

/**
 * @typedef {Object} SearchListMatch
 */

/**
 * @typedef {Object} ShowSidebar
 */

/**
 * @typedef {Object} ShowSidebarUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} ShowSidebarActivity
 */

/**
 * @typedef {Object} ShowSidebarActivityUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} ShowSidebarBoardAction
 */

/**
 * @typedef {Object} ShowSidebarBoardActionUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} ShowSidebarMember
 */

/**
 * @typedef {Object} ShowSidebarMemberUpdateData
 * @property {string} board_id
 */

/**
 * @typedef {Object} Sticker
 * @property {string} [id]
 */

/**
 * @typedef {Object} StickerLoadMatch
 * @property {string} card_id
 * @property {string} [id]
 */

/**
 * @typedef {Object} StickerUpdateData
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} StickerRemoveMatch
 * @property {string} card_id
 * @property {string} id
 */

/**
 * @typedef {Object} Tag
 * @property {string} [id]
 */

/**
 * @typedef {Object} TagListMatch
 * @property {string} organization_id
 */

/**
 * @typedef {Object} TagRemoveMatch
 * @property {string} id
 * @property {string} organization_id
 */

/**
 * @typedef {Object} Token
 * @property {string} [dateCreated]
 * @property {string} [dateExpires]
 * @property {string} [id]
 * @property {string} [idMember]
 * @property {string} [identifier]
 * @property {Array} [permissions]
 */

/**
 * @typedef {Object} TokenLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TokenListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} TokenRemoveMatch
 * @property {string} id
 */

/**
 * @typedef {Object} TransferrableOrganization
 * @property {string} [id]
 * @property {Array} [newBillableMembers]
 * @property {Array} [restrictedMembers]
 * @property {boolean} [transferrable]
 */

/**
 * @typedef {Object} TransferrableOrganizationLoadMatch
 * @property {string} enterpris_id
 * @property {string} id
 */

/**
 * @typedef {Object} TrelloList
 * @property {Object} [attachments]
 * @property {boolean} [closed]
 * @property {string} [id]
 * @property {string} [idBoard]
 * @property {Object} [limits]
 * @property {string} [name]
 * @property {number} [pos]
 * @property {string} [softLimit]
 * @property {boolean} [subscribed]
 */

/**
 * @typedef {Object} TrelloListLoadMatch
 * @property {string} action_id
 */

/**
 * @typedef {Object} TrelloListListMatch
 * @property {string} board_id
 */

/**
 * @typedef {Object} TrelloListCreateData
 * @property {string} board_id
 * @property {Object} [attachments]
 * @property {boolean} [closed]
 * @property {string} [id]
 * @property {string} [idBoard]
 * @property {Object} [limits]
 * @property {string} [name]
 * @property {number} [pos]
 * @property {string} [softLimit]
 * @property {boolean} [subscribed]
 */

/**
 * @typedef {Object} Webhook
 * @property {boolean} [active]
 * @property {string} [callbackURL]
 * @property {number} [consecutiveFailures]
 * @property {string} [description]
 * @property {string} [firstConsecutiveFailDate]
 * @property {string} [id]
 * @property {string} [idModel]
 */

/**
 * @typedef {Object} WebhookLoadMatch
 * @property {string} [field]
 * @property {string} id
 * @property {string} [token_id]
 */

/**
 * @typedef {Object} WebhookListMatch
 * @property {string} token_id
 */

/**
 * @typedef {Object} WebhookCreateData
 * @property {boolean} [active]
 * @property {string} [callbackURL]
 * @property {number} [consecutiveFailures]
 * @property {string} [description]
 * @property {string} [firstConsecutiveFailDate]
 * @property {string} [id]
 * @property {string} [idModel]
 */

/**
 * @typedef {Object} WebhookUpdateData
 * @property {string} id
 * @property {string} [token_id]
 * @property {boolean} [active]
 * @property {string} [callbackURL]
 * @property {number} [consecutiveFailures]
 * @property {string} [description]
 * @property {string} [firstConsecutiveFailDate]
 * @property {string} [idModel]
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {string} id
 * @property {string} [token_id]
 */

