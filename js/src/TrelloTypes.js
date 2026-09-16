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
 * @property {string} [type]
 */

/**
 * @typedef {Object} ActionLoadMatch
 * @property {string} id
 * @property {boolean} [display]
 * @property {boolean} [entity]
 * @property {string} [field]
 * @property {boolean} [member]
 * @property {boolean} [member_creator]
 * @property {string} [member_creator_field]
 * @property {string} [member_field]
 */

/**
 * @typedef {Object} ActionListMatch
 * @property {string} card_id
 * @property {string} [filter]
 * @property {number} [page]
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
 * @property {string} [type]
 */

/**
 * @typedef {Object} ActionUpdateData
 * @property {string} id
 * @property {string} text
 * @property {Object} [data]
 * @property {string} [date]
 * @property {Object} [display]
 * @property {string} [idMemberCreator]
 * @property {Object} [limits]
 * @property {Object} [memberCreator]
 * @property {string} [type]
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
 * @property {Array} [field]
 */

/**
 * @typedef {Object} AttachmentListMatch
 * @property {string} card_id
 * @property {string} [field]
 * @property {string} [filter]
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
 * @property {string} url
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
 * @property {string} [action]
 * @property {string} [board_star]
 * @property {string} [card]
 * @property {boolean} [card_plugin_data]
 * @property {string} [checklist]
 * @property {boolean} [custom_field]
 * @property {string} [field]
 * @property {string} [label]
 * @property {string} [list]
 * @property {string} [member]
 * @property {string} [membership]
 * @property {boolean} [my_pref]
 * @property {boolean} [organization]
 * @property {boolean} [organization_plugin_data]
 * @property {boolean} [plugin_data]
 * @property {boolean} [tag]
 */

/**
 * @typedef {Object} BoardListMatch
 * @property {string} member_id
 * @property {string} [field]
 * @property {string} [filter]
 * @property {string} [list]
 * @property {boolean} [organization]
 * @property {string} [organization_field]
 */

/**
 * @typedef {Object} BoardCreateData
 * @property {boolean} [default_label]
 * @property {boolean} [default_list]
 * @property {string} [desc]
 * @property {string} [id_board_source]
 * @property {string} [id_organization]
 * @property {string} [keep_from_source]
 * @property {string} name
 * @property {string} [power_up]
 * @property {string} [prefs_background]
 * @property {string} [prefs_card_aging]
 * @property {boolean} [prefs_card_cover]
 * @property {string} [prefs_comment]
 * @property {string} [prefs_invitation]
 * @property {string} [prefs_permission_level]
 * @property {boolean} [prefs_self_join]
 * @property {string} [prefs_voting]
 * @property {boolean} [closed]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {string} [dateLastView]
 * @property {string} [datePluginDisable]
 * @property {string} [descData]
 * @property {boolean} [enterpriseOwned]
 * @property {string} id
 * @property {string} [idMemberCreator]
 * @property {string} [idOrganization]
 * @property {string} [idTags]
 * @property {number} [ixUpdate]
 * @property {Object} [labelNames]
 * @property {Object} [limits]
 * @property {string} [memberships]
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
 * @property {string} [desc]
 * @property {string} [id_organization]
 * @property {string} [name]
 * @property {string} ["prefs/background"]
 * @property {boolean} ["prefs/calendar_feed_enabled"]
 * @property {string} ["prefs/card_aging"]
 * @property {boolean} ["prefs/card_cover"]
 * @property {string} ["prefs/comment"]
 * @property {boolean} ["prefs/hide_vote"]
 * @property {string} ["prefs/invitation"]
 * @property {string} ["prefs/permission_level"]
 * @property {boolean} ["prefs/self_join"]
 * @property {string} ["prefs/voting"]
 * @property {string} [subscribed]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {string} [dateLastView]
 * @property {string} [datePluginDisable]
 * @property {string} [descData]
 * @property {boolean} [enterpriseOwned]
 * @property {string} [idMemberCreator]
 * @property {string} [idOrganization]
 * @property {string} [idTags]
 * @property {number} [ixUpdate]
 * @property {Object} [labelNames]
 * @property {Object} [limits]
 * @property {string} [memberships]
 * @property {boolean} [pinned]
 * @property {string} [powerUps]
 * @property {Object} [prefs]
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [starred]
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
 * @property {string} [field]
 * @property {string} [id_background]
 */

/**
 * @typedef {Object} BoardBackgroundListMatch
 * @property {string} member_id
 * @property {string} [filter]
 */

/**
 * @typedef {Object} BoardBackgroundCreateData
 * @property {string} member_id
 * @property {string} file
 * @property {string} [id]
 */

/**
 * @typedef {Object} BoardBackgroundUpdateData
 * @property {string} [id]
 * @property {string} member_id
 * @property {string} [brightness]
 * @property {boolean} [tile]
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
 * @property {string} [filter]
 */

/**
 * @typedef {Object} BoardStarCreateData
 * @property {string} member_id
 * @property {string} id_board
 * @property {*} pos
 * @property {string} [id]
 * @property {string} [idBoard]
 */

/**
 * @typedef {Object} BoardStarUpdateData
 * @property {string} id
 * @property {string} member_id
 * @property {*} [pos]
 * @property {string} [idBoard]
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
 * @property {Array} id_organization
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
 * @property {string} [action]
 * @property {string} [attachment]
 * @property {string} [attachment_field]
 * @property {boolean} [board]
 * @property {string} [board_field]
 * @property {boolean} [check_item_state]
 * @property {string} [checklist]
 * @property {string} [checklist_field]
 * @property {boolean} [custom_field_item]
 * @property {string} [field]
 * @property {boolean} [list]
 * @property {boolean} [member]
 * @property {string} [member_field]
 * @property {string} [member_voted_field]
 * @property {boolean} [members_voted]
 * @property {boolean} [plugin_data]
 * @property {boolean} [sticker]
 * @property {string} [sticker_field]
 */

/**
 * @typedef {Object} CardListMatch
 * @property {string} action_id
 * @property {string} [field]
 */

/**
 * @typedef {Object} CardCreateData
 * @property {string} [address]
 * @property {string} [card_role]
 * @property {string} [coordinate]
 * @property {string} [desc]
 * @property {string} [due]
 * @property {boolean} [due_complete]
 * @property {string} [file_source]
 * @property {string} [id_card_source]
 * @property {Array} [id_label]
 * @property {string} id_list
 * @property {Array} [id_member]
 * @property {string} [keep_from_source]
 * @property {string} [location_name]
 * @property {string} [mime_type]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [start]
 * @property {string} [url_source]
 * @property {Object} [badges]
 * @property {string} [cardRole]
 * @property {Array} [checkItemStates]
 * @property {boolean} [closed]
 * @property {string} [coordinates]
 * @property {Object} [cover]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {Object} [descData]
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
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
 * @property {boolean} [subscribed]
 * @property {string} [url]
 */

/**
 * @typedef {Object} CardUpdateData
 * @property {string} id
 * @property {string} [address]
 * @property {boolean} [closed]
 * @property {string} [coordinate]
 * @property {Object} [cover]
 * @property {string} [desc]
 * @property {string} [due]
 * @property {boolean} [due_complete]
 * @property {string} [id_attachment_cover]
 * @property {string} [id_board]
 * @property {string} [id_label]
 * @property {string} [id_list]
 * @property {string} [id_member]
 * @property {string} [location_name]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [start]
 * @property {boolean} [subscribed]
 * @property {Object} [badges]
 * @property {string} [cardRole]
 * @property {Array} [checkItemStates]
 * @property {string} [coordinates]
 * @property {string} [creationMethod]
 * @property {string} [dateLastActivity]
 * @property {Object} [descData]
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
 * @property {string} [shortLink]
 * @property {string} [shortUrl]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} CardList
 * @property {string} [id]
 */

/**
 * @typedef {Object} CardListLoadMatch
 * @property {string} id
 * @property {string} [field]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} CheckItemUpdateData
 * @property {string} [card_id]
 * @property {string} id
 * @property {string} [due]
 * @property {number} [due_reminder]
 * @property {string} [id_checklist]
 * @property {string} [id_member]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [state]
 * @property {string} [checklist_id]
 * @property {string} [id_card]
 * @property {string} [idChecklist]
 * @property {string} [nameData]
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
 * @property {string} [card]
 * @property {string} [check_item]
 * @property {string} [check_item_field]
 * @property {string} [field]
 */

/**
 * @typedef {Object} ChecklistCreateData
 * @property {string} id_card
 * @property {string} [id_checklist_source]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {string} [id]
 */

/**
 * @typedef {Object} ChecklistUpdateData
 * @property {string} [field]
 * @property {string} id
 * @property {*} [value]
 * @property {string} [name]
 * @property {*} [pos]
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
 * @property {string} [active_since]
 * @property {string} [cursor]
 * @property {string} [inactive_since]
 * @property {number} [limit]
 * @property {string} [name]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} CustomEmojiListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomEmojiCreateData
 * @property {string} member_id
 * @property {string} file
 * @property {string} name
 * @property {string} [id]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} CustomStickerListMatch
 * @property {string} member_id
 */

/**
 * @typedef {Object} CustomStickerCreateData
 * @property {string} member_id
 * @property {string} file
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
 * @property {string} value
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
 * @property {string} [locale]
 * @property {boolean} [spritesheet]
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
 * @property {string} [field]
 * @property {string} [member]
 * @property {number} [member_count]
 * @property {string} [member_field]
 * @property {string} [member_filter]
 * @property {string} [member_sort]
 * @property {string} [member_sort_by]
 * @property {string} [member_sort_order]
 * @property {number} [member_start_index]
 * @property {string} [organization]
 * @property {string} [organization_field]
 * @property {string} [organization_membership]
 * @property {boolean} [organization_paid_account]
 */

/**
 * @typedef {Object} EnterprisCreateData
 * @property {string} id
 * @property {string} [expiration]
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
 * @property {string} id_organization
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
 * @property {boolean} [authenticate]
 * @property {boolean} [confirmation_accepted]
 * @property {string} [return_url]
 * @property {boolean} [tos_accepted]
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
 * @property {string} [field]
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
 * @property {boolean} [attachment]
 * @property {number} [attachment_age]
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
 * @property {string} value
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} LabelCreateData
 * @property {string} color
 * @property {string} id_board
 * @property {string} name
 * @property {string} [id]
 */

/**
 * @typedef {Object} LabelUpdateData
 * @property {string} id
 * @property {string} [color]
 * @property {string} [name]
 * @property {string} [field]
 * @property {string} [value]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} ListCreateData
 * @property {string} id_board
 * @property {string} [id_list_source]
 * @property {string} name
 * @property {*} [pos]
 * @property {string} [id]
 */

/**
 * @typedef {Object} ListUpdateData
 * @property {string} id
 * @property {boolean} [closed]
 * @property {string} [id_board]
 * @property {string} [name]
 * @property {*} [pos]
 * @property {boolean} [subscribed]
 * @property {string} [field]
 * @property {*} [value]
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
 * @property {string} [action]
 * @property {string} [board]
 * @property {string} [board_background]
 * @property {boolean} [board_star]
 * @property {string} [boards_invited]
 * @property {string} [boards_invited_field]
 * @property {string} [card]
 * @property {string} [custom_board_background]
 * @property {string} [custom_emoji]
 * @property {string} [custom_sticker]
 * @property {string} [field]
 * @property {string} [notification]
 * @property {string} [organization]
 * @property {string} [organization_field]
 * @property {boolean} [organization_paid_account]
 * @property {string} [organizations_invited]
 * @property {string} [organizations_invited_field]
 * @property {boolean} [paid_account]
 * @property {boolean} [saved_search]
 * @property {string} [token]
 */

/**
 * @typedef {Object} MemberListMatch
 * @property {string} [id_board]
 * @property {string} [id_organization]
 * @property {number} [limit]
 * @property {boolean} [only_org_member]
 * @property {string} query
 */

/**
 * @typedef {Object} MemberCreateData
 * @property {string} id
 * @property {string} [file]
 * @property {string} [value]
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
 * @property {string} [avatar_source]
 * @property {string} [bio]
 * @property {string} [full_name]
 * @property {string} [initial]
 * @property {boolean} ["prefs/color_blind"]
 * @property {string} ["prefs/locale"]
 * @property {number} ["prefs/minutes_between_summary"]
 * @property {string} [username]
 * @property {string} [board_id]
 * @property {boolean} [allow_billable_guest]
 * @property {string} [type]
 * @property {string} [organization_id]
 * @property {string} [aaEmail]
 * @property {string} [aaEnrolledDate]
 * @property {string} [aaId]
 * @property {boolean} [activityBlocked]
 * @property {string} [avatarHash]
 * @property {string} [avatarSource]
 * @property {string} [avatarUrl]
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
 * @property {string} [field]
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
 * @property {boolean} [member]
 */

/**
 * @typedef {Object} MembershipListMatch
 * @property {string} organization_id
 * @property {string} [filter]
 * @property {boolean} [member]
 */

/**
 * @typedef {Object} MembershipUpdateData
 * @property {string} board_id
 * @property {string} id
 * @property {string} [member_field]
 * @property {string} type
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
 * @property {boolean} [board]
 * @property {string} [board_field]
 * @property {boolean} [card]
 * @property {string} [card_field]
 * @property {boolean} [display]
 * @property {boolean} [entity]
 * @property {string} [field]
 * @property {boolean} [list]
 * @property {boolean} [member]
 * @property {boolean} [member_creator]
 * @property {string} [member_creator_field]
 * @property {string} [member_field]
 * @property {boolean} [organization]
 * @property {string} [organization_field]
 */

/**
 * @typedef {Object} NotificationListMatch
 * @property {string} member_id
 * @property {string} [before]
 * @property {boolean} [display]
 * @property {boolean} [entity]
 * @property {string} [field]
 * @property {string} [filter]
 * @property {number} [limit]
 * @property {boolean} [member_creator]
 * @property {string} [member_creator_field]
 * @property {number} [page]
 * @property {string} [read_filter]
 * @property {string} [since]
 */

/**
 * @typedef {Object} NotificationUpdateData
 * @property {string} id
 * @property {boolean} [unread]
 * @property {Object} [board]
 * @property {Object} [card]
 * @property {string} [data]
 * @property {string} [date]
 * @property {string} [dateRead]
 * @property {string} [idAction]
 * @property {string} [idMemberCreator]
 * @property {Array} [reactions]
 * @property {string} [type]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} NotificationMemberCreator
 * @property {string} [id]
 */

/**
 * @typedef {Object} NotificationMemberCreatorLoadMatch
 * @property {string} id
 * @property {string} [field]
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
 * @property {number} [count]
 * @property {string} [field]
 * @property {string} [filter]
 * @property {number} [start_index]
 */

/**
 * @typedef {Object} OrganizationCreateData
 * @property {string} [desc]
 * @property {string} display_name
 * @property {string} [name]
 * @property {string} [website]
 * @property {string} [dateLastActivity]
 * @property {string} [displayName]
 * @property {string} [id]
 * @property {Array} [idBoards]
 * @property {string} [idEnterprise]
 * @property {Array} [memberships]
 * @property {string} [offering]
 * @property {Object} [prefs]
 * @property {Array} [premiumFeatures]
 * @property {string} [url]
 */

/**
 * @typedef {Object} OrganizationUpdateData
 * @property {string} id
 * @property {string} [desc]
 * @property {string} [display_name]
 * @property {string} [name]
 * @property {string} ["prefs/associated_domain"]
 * @property {string} ["prefs/board_visibility_restrict/org"]
 * @property {string} ["prefs/board_visibility_restrict/private"]
 * @property {string} ["prefs/board_visibility_restrict/public"]
 * @property {boolean} ["prefs/external_members_disabled"]
 * @property {number} ["prefs/google_apps_version"]
 * @property {string} ["prefs/org_invite_restrict"]
 * @property {string} ["prefs/permission_level"]
 * @property {string} [website]
 * @property {string} [dateLastActivity]
 * @property {string} [displayName]
 * @property {Array} [idBoards]
 * @property {string} [idEnterprise]
 * @property {Array} [memberships]
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
 * @property {string} [active_since]
 * @property {string} [inactive_since]
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
 * @property {boolean} [emoji]
 * @property {boolean} [member]
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
 * @property {Array} [ids]
 * @property {boolean} [read]
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
 * @property {string} name
 * @property {*} pos
 * @property {string} query
 * @property {string} [id]
 */

/**
 * @typedef {Object} SavedSearchUpdateData
 * @property {string} id
 * @property {string} member_id
 * @property {string} [name]
 * @property {string} [pos]
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
 * @property {string} [board_field]
 * @property {boolean} [board_organization]
 * @property {number} [boards_limit]
 * @property {string} [card_attachment]
 * @property {boolean} [card_board]
 * @property {string} [card_field]
 * @property {boolean} [card_list]
 * @property {boolean} [card_member]
 * @property {boolean} [card_sticker]
 * @property {number} [cards_limit]
 * @property {number} [cards_page]
 * @property {*} [id_board]
 * @property {string} [id_card]
 * @property {string} [id_organization]
 * @property {string} [member_field]
 * @property {number} [members_limit]
 * @property {string} [model_type]
 * @property {string} [organization_field]
 * @property {number} [organizations_limit]
 * @property {boolean} [partial]
 * @property {string} query
 */

/**
 * @typedef {Object} ShowSidebar
 */

/**
 * @typedef {Object} ShowSidebarUpdateData
 * @property {string} board_id
 * @property {boolean} value
 */

/**
 * @typedef {Object} ShowSidebarActivity
 */

/**
 * @typedef {Object} ShowSidebarActivityUpdateData
 * @property {string} board_id
 * @property {boolean} value
 */

/**
 * @typedef {Object} ShowSidebarBoardAction
 */

/**
 * @typedef {Object} ShowSidebarBoardActionUpdateData
 * @property {string} board_id
 * @property {boolean} value
 */

/**
 * @typedef {Object} ShowSidebarMember
 */

/**
 * @typedef {Object} ShowSidebarMemberUpdateData
 * @property {string} board_id
 * @property {boolean} value
 */

/**
 * @typedef {Object} Sticker
 * @property {string} [id]
 */

/**
 * @typedef {Object} StickerLoadMatch
 * @property {string} card_id
 * @property {string} [id]
 * @property {string} [field]
 */

/**
 * @typedef {Object} StickerUpdateData
 * @property {string} card_id
 * @property {string} id
 * @property {number} left
 * @property {number} [rotate]
 * @property {number} top
 * @property {number} z_index
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
 * @property {string} [field]
 * @property {boolean} [webhook]
 */

/**
 * @typedef {Object} TokenListMatch
 * @property {string} member_id
 * @property {boolean} [webhook]
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
 * @property {string} [field]
 */

/**
 * @typedef {Object} TrelloListListMatch
 * @property {string} board_id
 * @property {string} [card]
 * @property {string} [card_field]
 * @property {string} [field]
 * @property {string} [filter]
 */

/**
 * @typedef {Object} TrelloListCreateData
 * @property {string} board_id
 * @property {string} name
 * @property {string} [pos]
 * @property {Object} [attachments]
 * @property {boolean} [closed]
 * @property {string} [id]
 * @property {string} [idBoard]
 * @property {Object} [limits]
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
 * @property {string} callback_url
 * @property {string} [description]
 * @property {string} id_model
 * @property {string} [token_id]
 * @property {string} [callbackURL]
 * @property {number} [consecutiveFailures]
 * @property {string} [firstConsecutiveFailDate]
 * @property {string} [id]
 * @property {string} [idModel]
 */

/**
 * @typedef {Object} WebhookUpdateData
 * @property {string} id
 * @property {boolean} [active]
 * @property {string} [callback_url]
 * @property {string} [description]
 * @property {string} [id_model]
 * @property {string} [token_id]
 * @property {string} [callbackURL]
 * @property {number} [consecutiveFailures]
 * @property {string} [firstConsecutiveFailDate]
 * @property {string} [idModel]
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {string} id
 * @property {string} [token_id]
 */

