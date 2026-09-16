# Trello REST API

The Trello REST API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 70 entities and 261 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [Action](docs/api/action.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [ActionReactionsSummary](docs/api/action_reactions_summary.html)

Results: Success.

SDK operations: `load`.

### [Admin](docs/api/admin.html)

Results: Success.

SDK operations: `remove`, `update`.

### [Application](docs/api/application.html)

SDK operations: .

### [ApplicationCompliance](docs/api/application_compliance.html)

Results: Success.

SDK operations: `load`.

### [AssociatedDomain](docs/api/associated_domain.html)

Results: Success.

SDK operations: `remove`.

### [Attachment](docs/api/attachment.html)

Results: Success.

SDK operations: `list`, `load`, `remove`.

### [Batch](docs/api/batch.html)

Results: Success.

SDK operations: `load`.

### [Board](docs/api/board.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `name`: The name of the board.

### [BoardBackground](docs/api/board_background.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [BoardPlugin](docs/api/board_plugin.html)

Results: Success.

SDK operations: `remove`.

### [BoardStar](docs/api/board_star.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [Bulk](docs/api/bulk.html)

Results: Success.

SDK operations: `load`, `update`.

### [Card](docs/api/card.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [CardCheckItemState](docs/api/card_check_item_state.html)

Results: Success.

SDK operations: `load`.

### [CardList](docs/api/card_list.html)

Results: Success.

SDK operations: `load`.

### [CheckItem](docs/api/check_item.html)

Results: Success.

SDK operations: `load`, `remove`, `update`.

### [Checklist](docs/api/checklist.html)

Results: Success.

SDK operations: `create`, `load`, `remove`, `update`.

### [ClaimableOrganization](docs/api/claimable_organization.html)

Results: Success.

SDK operations: `list`.

Key fields to recognise:

- `dateLastActive`: The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.

### [CustomBoardBackground](docs/api/custom_board_background.html)

Results: Success.

SDK operations: `remove`.

### [CustomEmoji](docs/api/custom_emoji.html)

Results: Success.

SDK operations: `create`, `list`, `load`.

### [CustomField](docs/api/custom_field.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `display_cardFront`: Whether this Custom Field should be shown on the front of Cards
- `displaycardFront`: Whether to display this custom field on the front of cards
- `idModel`: The ID of the model for which the Custom Field is being defined.
- `modelType`: The type of model that the Custom Field is being defined on.
- `name`: The name of the Custom Field

### [CustomFieldItem](docs/api/custom_field_item.html)

Results: Success.

SDK operations: `list`.

### [CustomSticker](docs/api/custom_sticker.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`.

### [EmailPosition](docs/api/email_position.html)

Results: Success.

SDK operations: `update`.

### [Emoji](docs/api/emoji.html)

Results: Success.

SDK operations: `list`.

### [Enterpris](docs/api/enterpris.html)

Results: Success.

SDK operations: `create`, `load`, `update`.

### [EnterprisSignupUrl](docs/api/enterpris_signup_url.html)

Results: Success.

SDK operations: `load`.

### [EnterpriseAdmin](docs/api/enterprise_admin.html)

Results: Success.

SDK operations: `load`.

### [EnterpriseAuditLog](docs/api/enterprise_audit_log.html)

Results: Success.

SDK operations: `list`.

### [Export](docs/api/export.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`.

### [ExportDownload](docs/api/export_download.html)

SDK operations: `load`.

### [Generate](docs/api/generate.html)

Results: Success.

SDK operations: `create`.

### [IdEmailList](docs/api/id_email_list.html)

Results: Success.

SDK operations: `update`.

### [IdLabel](docs/api/id_label.html)

Results: Success.

SDK operations: `remove`.

### [IdMember](docs/api/id_member.html)

Results: Success.

SDK operations: `remove`.

### [Label](docs/api/label.html)

Results: Success.

SDK operations: `create`, `load`, `remove`, `update`.

### [List](docs/api/list.html)

Results: Success.

SDK operations: `create`, `load`, `update`.

### [Member](docs/api/member.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `nonPublic`: Profile data with restricted visibility. These fields are visible only to members of the same organization. The values here (full name, for example) may differ from the values at the top level of the response.
- `nonPublicAvailable`: Whether the response contains non-public profile data for the member

### [MemberPrivacy](docs/api/member_privacy.html)

Results: Success.

SDK operations: `load`.

### [MembersVoted](docs/api/members_voted.html)

Results: Success.

SDK operations: `load`, `remove`.

### [Membership](docs/api/membership.html)

Results: Success.

SDK operations: `list`, `load`, `update`.

### [MostRecent](docs/api/most_recent.html)

SDK operations: .

### [NewBillableGuest](docs/api/new_billable_guest.html)

Results: Success.

SDK operations: `load`.

### [Notification](docs/api/notification.html)

Results: Success.

SDK operations: `list`, `load`, `update`.

### [NotificationChannelSetting](docs/api/notification_channel_setting.html)

Results: Success.

SDK operations: `list`, `load`, `update`.

Key fields to recognise:

- `blockedKeys`: Singular key or array of notification keys

### [NotificationList](docs/api/notification_list.html)

Results: Success.

SDK operations: `load`.

### [NotificationMemberCreator](docs/api/notification_member_creator.html)

Results: Success.

SDK operations: `load`.

### [NotificationsChannelSetting](docs/api/notifications_channel_setting.html)

SDK operations: .

### [Option](docs/api/option.html)

Results: Success.

SDK operations: `load`, `remove`.

### [OrgInviteRestrict](docs/api/org_invite_restrict.html)

Results: Success.

SDK operations: `remove`.

### [Organization](docs/api/organization.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [PendingOrganization](docs/api/pending_organization.html)

Results: Success.

SDK operations: `list`.

### [Plugin](docs/api/plugin.html)

Results: Success.

SDK operations: `list`, `load`, `update`.

### [PluginData](docs/api/plugin_data.html)

Results: Success.

SDK operations: `list`, `load`.

### [PluginListing](docs/api/plugin_listing.html)

Results: Success.

SDK operations: `create`, `update`.

Key fields to recognise:

- `description`: The description to show for the given locale
- `locale`: The locale that this listing should be displayed for.
- `name`: The name to use for the given locale.
- `overview`: The overview to show for the given locale.

### [Reaction](docs/api/reaction.html)

Results: Success.

SDK operations: `load`, `remove`.

### [Read](docs/api/read.html)

Results: Success.

SDK operations: `create`.

### [SavedSearch](docs/api/saved_search.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### [Search](docs/api/search.html)

Results: Success.

SDK operations: `list`.

### [ShowSidebar](docs/api/show_sidebar.html)

Results: Success.

SDK operations: `update`.

### [ShowSidebarActivity](docs/api/show_sidebar_activity.html)

Results: Success.

SDK operations: `update`.

### [ShowSidebarBoardAction](docs/api/show_sidebar_board_action.html)

Results: Success.

SDK operations: `update`.

### [ShowSidebarMember](docs/api/show_sidebar_member.html)

Results: Success.

SDK operations: `update`.

### [Sticker](docs/api/sticker.html)

Results: Success.

SDK operations: `load`, `remove`, `update`.

### [Tag](docs/api/tag.html)

Results: Success.

SDK operations: `list`, `remove`.

### [Token](docs/api/token.html)

Results: Success.

SDK operations: `list`, `load`, `remove`.

### [TransferrableOrganization](docs/api/transferrable_organization.html)

Results: Success.

SDK operations: `load`.

### [TrelloList](docs/api/trello_list.html)

Results: Success.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `name`: The name of the list

### [Webhook](docs/api/webhook.html)

Results: Success.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| [Action](docs/api/action.html) | `create` | `POST /cards/{id}/actions/comments` | Required |
| [Action](docs/api/action.html) | `create` | `POST /actions/{idAction}/reactions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /cards/{id}/actions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /members/{id}/actions` | Required |
| [Action](docs/api/action.html) | `list` | `GET /organizations/{id}/actions` | Required |
| [Action](docs/api/action.html) | `load` | `GET /boards/{boardId}/actions` | Required |
| [Action](docs/api/action.html) | `load` | `GET /actions/{id}` | Required |
| [Action](docs/api/action.html) | `load` | `GET /actions/{id}/{field}` | Required |
| [Action](docs/api/action.html) | `load` | `GET /lists/{id}/actions` | Required |
| [Action](docs/api/action.html) | `remove` | `DELETE /cards/{id}/actions/{idAction}/comments` | Required |
| [Action](docs/api/action.html) | `remove` | `DELETE /actions/{id}` | Required |
| [Action](docs/api/action.html) | `update` | `PUT /cards/{id}/actions/{idAction}/comments` | Required |
| [Action](docs/api/action.html) | `update` | `PUT /actions/{id}` | Required |
| [Action](docs/api/action.html) | `update` | `PUT /actions/{id}/text` | Required |
| [ActionReactionsSummary](docs/api/action_reactions_summary.html) | `load` | `GET /actions/{idAction}/reactionsSummary` | Required |
| [Admin](docs/api/admin.html) | `remove` | `DELETE /enterprises/{id}/admins/{idMember}` | Required |
| [Admin](docs/api/admin.html) | `update` | `PUT /enterprises/{id}/admins/{idMember}` | Required |
| [ApplicationCompliance](docs/api/application_compliance.html) | `load` | `GET /applications/{key}/compliance` | Required |
| [AssociatedDomain](docs/api/associated_domain.html) | `remove` | `DELETE /organizations/{id}/prefs/associatedDomain` | Required |
| [Attachment](docs/api/attachment.html) | `list` | `GET /cards/{id}/attachments` | Required |
| [Attachment](docs/api/attachment.html) | `load` | `GET /cards/{id}/attachments/{idAttachment}` | Required |
| [Attachment](docs/api/attachment.html) | `remove` | `DELETE /cards/{id}/attachments/{idAttachment}` | Required |
| [Batch](docs/api/batch.html) | `load` | `GET /batch` | Required |
| [Board](docs/api/board.html) | `create` | `POST /boards/` | Required |
| [Board](docs/api/board.html) | `create` | `POST /boards/{id}/labels` | Required |
| [Board](docs/api/board.html) | `create` | `POST /boards/{id}/boardPlugins` | Required |
| [Board](docs/api/board.html) | `create` | `POST /boards/{id}/idTags` | Required |
| [Board](docs/api/board.html) | `create` | `POST /boards/{id}/markedAsViewed` | Required |
| [Board](docs/api/board.html) | `list` | `GET /members/{id}/boards` | Required |
| [Board](docs/api/board.html) | `list` | `GET /organizations/{id}/boards` | Required |
| [Board](docs/api/board.html) | `list` | `GET /members/{id}/boardsInvited` | Required |
| [Board](docs/api/board.html) | `load` | `GET /boards/{id}` | Required |
| [Board](docs/api/board.html) | `load` | `GET /actions/{id}/board` | Required |
| [Board](docs/api/board.html) | `load` | `GET /cards/{id}/board` | Required |
| [Board](docs/api/board.html) | `load` | `GET /checklists/{id}/board` | Required |
| [Board](docs/api/board.html) | `load` | `GET /boards/{id}/{field}` | Required |
| [Board](docs/api/board.html) | `load` | `GET /lists/{id}/board` | Required |
| [Board](docs/api/board.html) | `load` | `GET /notifications/{id}/board` | Required |
| [Board](docs/api/board.html) | `remove` | `DELETE /boards/{id}` | Required |
| [Board](docs/api/board.html) | `update` | `PUT /boards/{id}` | Required |
| [Board](docs/api/board.html) | `update` | `PUT /boards/{id}/members` | Required |
| [BoardBackground](docs/api/board_background.html) | `create` | `POST /members/{id}/customBoardBackgrounds` | Required |
| [BoardBackground](docs/api/board_background.html) | `list` | `GET /members/{id}/boardBackgrounds` | Required |
| [BoardBackground](docs/api/board_background.html) | `list` | `GET /members/{id}/customBoardBackgrounds` | Required |
| [BoardBackground](docs/api/board_background.html) | `load` | `GET /members/{id}/boardBackgrounds/{idBackground}` | Required |
| [BoardBackground](docs/api/board_background.html) | `load` | `GET /members/{id}/customBoardBackgrounds/{idBackground}` | Required |
| [BoardBackground](docs/api/board_background.html) | `remove` | `DELETE /members/{id}/boardBackgrounds/{idBackground}` | Required |
| [BoardBackground](docs/api/board_background.html) | `update` | `PUT /members/{id}/boardBackgrounds/{idBackground}` | Required |
| [BoardBackground](docs/api/board_background.html) | `update` | `PUT /members/{id}/customBoardBackgrounds/{idBackground}` | Required |
| [BoardPlugin](docs/api/board_plugin.html) | `remove` | `DELETE /boards/{id}/boardPlugins/{idPlugin}` | Required |
| [BoardStar](docs/api/board_star.html) | `create` | `POST /members/{id}/boardStars` | Required |
| [BoardStar](docs/api/board_star.html) | `list` | `GET /boards/{boardId}/boardStars` | Required |
| [BoardStar](docs/api/board_star.html) | `load` | `GET /members/{id}/boardStars/{idStar}` | Required |
| [BoardStar](docs/api/board_star.html) | `load` | `GET /members/{id}/boardStars` | Required |
| [BoardStar](docs/api/board_star.html) | `remove` | `DELETE /members/{id}/boardStars/{idStar}` | Required |
| [BoardStar](docs/api/board_star.html) | `update` | `PUT /members/{id}/boardStars/{idStar}` | Required |
| [Bulk](docs/api/bulk.html) | `load` | `GET /enterprises/{id}/organizations/bulk/{idOrganizations}` | Required |
| [Bulk](docs/api/bulk.html) | `load` | `GET /enterprises/{id}/transferrable/bulk/{idOrganizations}` | Required |
| [Bulk](docs/api/bulk.html) | `update` | `PUT /enterprises/${id}/enterpriseJoinRequest/bulk` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/attachments` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/stickers` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/checklists` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/labels` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/idLabels` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/idMembers` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/membersVoted` | Required |
| [Card](docs/api/card.html) | `create` | `POST /cards/{id}/markAssociatedNotificationsRead` | Required |
| [Card](docs/api/card.html) | `list` | `GET /actions/{id}/card` | Required |
| [Card](docs/api/card.html) | `list` | `GET /members/{id}/cards` | Required |
| [Card](docs/api/card.html) | `list` | `GET /lists/{id}/cards` | Required |
| [Card](docs/api/card.html) | `load` | `GET /cards/{id}` | Required |
| [Card](docs/api/card.html) | `load` | `GET /boards/{id}/cards/{filter}` | Required |
| [Card](docs/api/card.html) | `load` | `GET /cards/{id}/{field}` | Required |
| [Card](docs/api/card.html) | `load` | `GET /notifications/{id}/card` | Required |
| [Card](docs/api/card.html) | `load` | `GET /boards/{id}/cards` | Required |
| [Card](docs/api/card.html) | `load` | `GET /checklists/{id}/cards` | Required |
| [Card](docs/api/card.html) | `remove` | `DELETE /cards/{id}` | Required |
| [Card](docs/api/card.html) | `update` | `PUT /cards/{id}` | Required |
| [Card](docs/api/card.html) | `update` | `PUT /cards/{idCard}/customFields` | Required |
| [CardCheckItemState](docs/api/card_check_item_state.html) | `load` | `GET /cards/{id}/checkItemStates` | Required |
| [CardList](docs/api/card_list.html) | `load` | `GET /cards/{id}/list` | Required |
| [CheckItem](docs/api/check_item.html) | `load` | `GET /cards/{id}/checkItem/{idCheckItem}` | Required |
| [CheckItem](docs/api/check_item.html) | `load` | `GET /checklists/{id}/checkItems` | Required |
| [CheckItem](docs/api/check_item.html) | `load` | `GET /checklists/{id}/checkItems/{idCheckItem}` | Required |
| [CheckItem](docs/api/check_item.html) | `remove` | `DELETE /cards/{id}/checkItem/{idCheckItem}` | Required |
| [CheckItem](docs/api/check_item.html) | `remove` | `DELETE /checklists/{id}/checkItems/{idCheckItem}` | Required |
| [CheckItem](docs/api/check_item.html) | `update` | `PUT /cards/{id}/checkItem/{idCheckItem}` | Required |
| [CheckItem](docs/api/check_item.html) | `update` | `PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}` | Required |
| [Checklist](docs/api/checklist.html) | `create` | `POST /checklists/{id}/checkItems` | Required |
| [Checklist](docs/api/checklist.html) | `create` | `POST /checklists` | Required |
| [Checklist](docs/api/checklist.html) | `load` | `GET /checklists/{id}` | Required |
| [Checklist](docs/api/checklist.html) | `load` | `GET /cards/{id}/checklists` | Required |
| [Checklist](docs/api/checklist.html) | `load` | `GET /checklists/{id}/{field}` | Required |
| [Checklist](docs/api/checklist.html) | `load` | `GET /boards/{id}/checklists` | Required |
| [Checklist](docs/api/checklist.html) | `remove` | `DELETE /cards/{id}/checklists/{idChecklist}` | Required |
| [Checklist](docs/api/checklist.html) | `remove` | `DELETE /checklists/{id}` | Required |
| [Checklist](docs/api/checklist.html) | `update` | `PUT /checklists/{id}/{field}` | Required |
| [Checklist](docs/api/checklist.html) | `update` | `PUT /checklists/{id}` | Required |
| [ClaimableOrganization](docs/api/claimable_organization.html) | `list` | `GET /enterprises/{id}/claimableOrganizations` | Required |
| [CustomBoardBackground](docs/api/custom_board_background.html) | `remove` | `DELETE /members/{id}/customBoardBackgrounds/{idBackground}` | Required |
| [CustomEmoji](docs/api/custom_emoji.html) | `create` | `POST /members/{id}/customEmoji` | Required |
| [CustomEmoji](docs/api/custom_emoji.html) | `list` | `GET /members/{id}/customEmoji` | Required |
| [CustomEmoji](docs/api/custom_emoji.html) | `load` | `GET /members/{id}/customEmoji/{idEmoji}` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /customFields/{id}/options` | Required |
| [CustomField](docs/api/custom_field.html) | `create` | `POST /customFields` | Required |
| [CustomField](docs/api/custom_field.html) | `list` | `GET /boards/{id}/customFields` | Required |
| [CustomField](docs/api/custom_field.html) | `load` | `GET /customFields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `remove` | `DELETE /customFields/{id}` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /cards/{idCard}/customField/{idCustomField}/item` | Required |
| [CustomField](docs/api/custom_field.html) | `update` | `PUT /customFields/{id}` | Required |
| [CustomFieldItem](docs/api/custom_field_item.html) | `list` | `GET /cards/{id}/customFieldItems` | Required |
| [CustomSticker](docs/api/custom_sticker.html) | `create` | `POST /members/{id}/customStickers` | Required |
| [CustomSticker](docs/api/custom_sticker.html) | `list` | `GET /members/{id}/customStickers` | Required |
| [CustomSticker](docs/api/custom_sticker.html) | `load` | `GET /members/{id}/customStickers/{idSticker}` | Required |
| [CustomSticker](docs/api/custom_sticker.html) | `remove` | `DELETE /members/{id}/customStickers/{idSticker}` | Required |
| [EmailPosition](docs/api/email_position.html) | `update` | `PUT /boards/{id}/myPrefs/emailPosition` | Required |
| [Emoji](docs/api/emoji.html) | `list` | `GET /emoji` | Not required |
| [Enterpris](docs/api/enterpris.html) | `create` | `POST /enterprises/{id}/tokens` | Required |
| [Enterpris](docs/api/enterpris.html) | `load` | `GET /enterprises/{id}` | Required |
| [Enterpris](docs/api/enterpris.html) | `update` | `PUT /enterprises/{id}/organizations` | Required |
| [EnterprisSignupUrl](docs/api/enterpris_signup_url.html) | `load` | `GET /enterprises/{id}/signupUrl` | Required |
| [EnterpriseAdmin](docs/api/enterprise_admin.html) | `load` | `GET /enterprises/{id}/admins` | Required |
| [EnterpriseAuditLog](docs/api/enterprise_audit_log.html) | `list` | `GET /enterprises/{id}/auditlog` | Required |
| [Export](docs/api/export.html) | `create` | `POST /boards/{id}/exports` | Required |
| [Export](docs/api/export.html) | `create` | `POST /organizations/{id}/exports` | Required |
| [Export](docs/api/export.html) | `list` | `GET /organizations/{id}/exports` | Required |
| [Export](docs/api/export.html) | `load` | `GET /boards/{id}/exports/{idExport}` | Required |
| [Export](docs/api/export.html) | `load` | `GET /boards/{id}/exports/mostRecent` | Required |
| [Export](docs/api/export.html) | `remove` | `DELETE /boards/{id}/exports/{idExport}` | Required |
| [ExportDownload](docs/api/export_download.html) | `load` | `GET /boards/{id}/exports/{idExport}/download` | Required |
| [Generate](docs/api/generate.html) | `create` | `POST /boards/{id}/calendarKey/generate` | Required |
| [Generate](docs/api/generate.html) | `create` | `POST /boards/{id}/emailKey/generate` | Required |
| [IdEmailList](docs/api/id_email_list.html) | `update` | `PUT /boards/{id}/myPrefs/idEmailList` | Required |
| [IdLabel](docs/api/id_label.html) | `remove` | `DELETE /cards/{id}/idLabels/{idLabel}` | Required |
| [IdMember](docs/api/id_member.html) | `remove` | `DELETE /cards/{id}/idMembers/{idMember}` | Required |
| [Label](docs/api/label.html) | `create` | `POST /labels` | Required |
| [Label](docs/api/label.html) | `load` | `GET /boards/{id}/labels` | Required |
| [Label](docs/api/label.html) | `load` | `GET /labels/{id}` | Required |
| [Label](docs/api/label.html) | `remove` | `DELETE /labels/{id}` | Required |
| [Label](docs/api/label.html) | `update` | `PUT /labels/{id}` | Required |
| [Label](docs/api/label.html) | `update` | `PUT /labels/{id}/{field}` | Required |
| [List](docs/api/list.html) | `create` | `POST /lists` | Required |
| [List](docs/api/list.html) | `create` | `POST /lists/{id}/moveAllCards` | Required |
| [List](docs/api/list.html) | `create` | `POST /lists/{id}/archiveAllCards` | Required |
| [List](docs/api/list.html) | `load` | `GET /boards/{id}/lists/{filter}` | Required |
| [List](docs/api/list.html) | `load` | `GET /lists/{id}` | Required |
| [List](docs/api/list.html) | `update` | `PUT /lists/{id}` | Required |
| [List](docs/api/list.html) | `update` | `PUT /lists/{id}/{field}` | Required |
| [List](docs/api/list.html) | `update` | `PUT /lists/{id}/closed` | Required |
| [List](docs/api/list.html) | `update` | `PUT /lists/{id}/idBoard` | Required |
| [Member](docs/api/member.html) | `create` | `POST /members/{id}/avatar` | Required |
| [Member](docs/api/member.html) | `create` | `POST /members/{id}/boardBackgrounds` | Required |
| [Member](docs/api/member.html) | `create` | `POST /members/{id}/oneTimeMessagesDismissed` | Required |
| [Member](docs/api/member.html) | `list` | `GET /enterprises/{id}/members` | Required |
| [Member](docs/api/member.html) | `list` | `GET /search/members/` | Required |
| [Member](docs/api/member.html) | `list` | `GET /actions/{id}/member` | Required |
| [Member](docs/api/member.html) | `list` | `GET /actions/{id}/memberCreator` | Required |
| [Member](docs/api/member.html) | `list` | `GET /tokens/{token}/member` | Required |
| [Member](docs/api/member.html) | `list` | `GET /organizations/{id}/members` | Required |
| [Member](docs/api/member.html) | `load` | `GET /members/{id}` | Required |
| [Member](docs/api/member.html) | `load` | `GET /enterprises/{id}/members/{idMember}` | Required |
| [Member](docs/api/member.html) | `load` | `GET /cards/{id}/members` | Required |
| [Member](docs/api/member.html) | `load` | `GET /members/{id}/{field}` | Required |
| [Member](docs/api/member.html) | `load` | `GET /notifications/{id}/member` | Required |
| [Member](docs/api/member.html) | `load` | `GET /boards/{id}/members` | Required |
| [Member](docs/api/member.html) | `remove` | `DELETE /boards/{id}/members/{idMember}` | Required |
| [Member](docs/api/member.html) | `remove` | `DELETE /organizations/{id}/members/{idMember}` | Required |
| [Member](docs/api/member.html) | `remove` | `DELETE /organizations/{id}/members/{idMember}/all` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /members/{id}` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /enterprises/{id}/members/{idMember}/deactivated` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /boards/{id}/members/{idMember}` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /enterprises/{id}/members/{idMember}/licensed` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /organizations/{id}/members/{idMember}` | Required |
| [Member](docs/api/member.html) | `update` | `PUT /organizations/{id}/members/{idMember}/deactivated` | Required |
| [MemberPrivacy](docs/api/member_privacy.html) | `load` | `GET /plugins/{id}/compliance/memberPrivacy` | Required |
| [MembersVoted](docs/api/members_voted.html) | `load` | `GET /cards/{id}/membersVoted` | Required |
| [MembersVoted](docs/api/members_voted.html) | `remove` | `DELETE /cards/{id}/membersVoted/{idMember}` | Required |
| [Membership](docs/api/membership.html) | `list` | `GET /enterprises/{id}/members/query` | Required |
| [Membership](docs/api/membership.html) | `list` | `GET /organizations/{id}/memberships` | Required |
| [Membership](docs/api/membership.html) | `load` | `GET /boards/{id}/memberships` | Required |
| [Membership](docs/api/membership.html) | `load` | `GET /organizations/{id}/memberships/{idMembership}` | Required |
| [Membership](docs/api/membership.html) | `update` | `PUT /boards/{id}/memberships/{idMembership}` | Required |
| [NewBillableGuest](docs/api/new_billable_guest.html) | `load` | `GET /organizations/{id}/newBillableGuests/{idBoard}` | Required |
| [Notification](docs/api/notification.html) | `list` | `GET /members/{id}/notifications` | Required |
| [Notification](docs/api/notification.html) | `load` | `GET /notifications/{id}` | Required |
| [Notification](docs/api/notification.html) | `load` | `GET /notifications/{id}/{field}` | Required |
| [Notification](docs/api/notification.html) | `update` | `PUT /notifications/{id}` | Required |
| [Notification](docs/api/notification.html) | `update` | `PUT /notifications/{id}/unread` | Required |
| [NotificationChannelSetting](docs/api/notification_channel_setting.html) | `list` | `GET /members/{id}/notificationsChannelSettings` | Required |
| [NotificationChannelSetting](docs/api/notification_channel_setting.html) | `load` | `GET /members/{id}/notificationsChannelSettings/{channel}` | Required |
| [NotificationChannelSetting](docs/api/notification_channel_setting.html) | `update` | `PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}` | Required |
| [NotificationChannelSetting](docs/api/notification_channel_setting.html) | `update` | `PUT /members/{id}/notificationsChannelSettings/{channel}` | Required |
| [NotificationChannelSetting](docs/api/notification_channel_setting.html) | `update` | `PUT /members/{id}/notificationsChannelSettings` | Required |
| [NotificationList](docs/api/notification_list.html) | `load` | `GET /notifications/{id}/list` | Required |
| [NotificationMemberCreator](docs/api/notification_member_creator.html) | `load` | `GET /notifications/{id}/memberCreator` | Required |
| [Option](docs/api/option.html) | `load` | `GET /customFields/{id}/options/{idCustomFieldOption}` | Required |
| [Option](docs/api/option.html) | `load` | `GET /customFields/{id}/options` | Required |
| [Option](docs/api/option.html) | `remove` | `DELETE /customFields/{id}/options/{idCustomFieldOption}` | Required |
| [OrgInviteRestrict](docs/api/org_invite_restrict.html) | `remove` | `DELETE /organizations/{id}/prefs/orgInviteRestrict` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations/{id}/logo` | Required |
| [Organization](docs/api/organization.html) | `create` | `POST /organizations/{id}/tags` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /enterprises/{id}/organizations` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /members/{id}/organizations` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /actions/{id}/organization` | Required |
| [Organization](docs/api/organization.html) | `list` | `GET /members/{id}/organizationsInvited` | Required |
| [Organization](docs/api/organization.html) | `load` | `GET /organizations/{id}/{field}` | Required |
| [Organization](docs/api/organization.html) | `load` | `GET /notifications/{id}/organization` | Required |
| [Organization](docs/api/organization.html) | `load` | `GET /organizations/{id}` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /enterprises/{id}/organizations/{idOrg}` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /organizations/{id}` | Required |
| [Organization](docs/api/organization.html) | `remove` | `DELETE /organizations/{id}/logo` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{id}` | Required |
| [Organization](docs/api/organization.html) | `update` | `PUT /organizations/{id}/members` | Required |
| [PendingOrganization](docs/api/pending_organization.html) | `list` | `GET /enterprises/{id}/pendingOrganizations` | Required |
| [Plugin](docs/api/plugin.html) | `list` | `GET /boards/{id}/boardPlugins` | Required |
| [Plugin](docs/api/plugin.html) | `load` | `GET /boards/{id}/plugins` | Required |
| [Plugin](docs/api/plugin.html) | `load` | `GET /plugins/{id}/` | Required |
| [Plugin](docs/api/plugin.html) | `update` | `PUT /plugins/{id}/` | Required |
| [PluginData](docs/api/plugin_data.html) | `list` | `GET /organizations/{id}/pluginData` | Required |
| [PluginData](docs/api/plugin_data.html) | `load` | `GET /cards/{id}/pluginData` | Required |
| [PluginListing](docs/api/plugin_listing.html) | `create` | `POST /plugins/{idPlugin}/listing` | Required |
| [PluginListing](docs/api/plugin_listing.html) | `update` | `PUT /plugins/{idPlugin}/listings/{idListing}` | Required |
| [Reaction](docs/api/reaction.html) | `load` | `GET /actions/{idAction}/reactions/{id}` | Required |
| [Reaction](docs/api/reaction.html) | `load` | `GET /actions/{idAction}/reactions` | Required |
| [Reaction](docs/api/reaction.html) | `remove` | `DELETE /actions/{idAction}/reactions/{id}` | Required |
| [Read](docs/api/read.html) | `create` | `POST /notifications/all/read` | Required |
| [SavedSearch](docs/api/saved_search.html) | `create` | `POST /members/{id}/savedSearches` | Required |
| [SavedSearch](docs/api/saved_search.html) | `list` | `GET /members/{id}/savedSearches` | Required |
| [SavedSearch](docs/api/saved_search.html) | `load` | `GET /members/{id}/savedSearches/{idSearch}` | Required |
| [SavedSearch](docs/api/saved_search.html) | `remove` | `DELETE /members/{id}/savedSearches/{idSearch}` | Required |
| [SavedSearch](docs/api/saved_search.html) | `update` | `PUT /members/{id}/savedSearches/{idSearch}` | Required |
| [Search](docs/api/search.html) | `list` | `GET /search` | Required |
| [ShowSidebar](docs/api/show_sidebar.html) | `update` | `PUT /boards/{id}/myPrefs/showSidebar` | Required |
| [ShowSidebarActivity](docs/api/show_sidebar_activity.html) | `update` | `PUT /boards/{id}/myPrefs/showSidebarActivity` | Required |
| [ShowSidebarBoardAction](docs/api/show_sidebar_board_action.html) | `update` | `PUT /boards/{id}/myPrefs/showSidebarBoardActions` | Required |
| [ShowSidebarMember](docs/api/show_sidebar_member.html) | `update` | `PUT /boards/{id}/myPrefs/showSidebarMembers` | Required |
| [Sticker](docs/api/sticker.html) | `load` | `GET /cards/{id}/stickers/{idSticker}` | Required |
| [Sticker](docs/api/sticker.html) | `load` | `GET /cards/{id}/stickers` | Required |
| [Sticker](docs/api/sticker.html) | `remove` | `DELETE /cards/{id}/stickers/{idSticker}` | Required |
| [Sticker](docs/api/sticker.html) | `update` | `PUT /cards/{id}/stickers/{idSticker}` | Required |
| [Tag](docs/api/tag.html) | `list` | `GET /organizations/{id}/tags` | Required |
| [Tag](docs/api/tag.html) | `remove` | `DELETE /organizations/{id}/tags/{idTag}` | Required |
| [Token](docs/api/token.html) | `list` | `GET /members/{id}/tokens` | Required |
| [Token](docs/api/token.html) | `load` | `GET /tokens/{token}` | Required |
| [Token](docs/api/token.html) | `remove` | `DELETE /tokens/{token}/` | Required |
| [TransferrableOrganization](docs/api/transferrable_organization.html) | `load` | `GET /enterprises/{id}/transferrable/organization/{idOrganization}` | Required |
| [TrelloList](docs/api/trello_list.html) | `create` | `POST /boards/{id}/lists` | Required |
| [TrelloList](docs/api/trello_list.html) | `list` | `GET /boards/{id}/lists` | Required |
| [TrelloList](docs/api/trello_list.html) | `load` | `GET /actions/{id}/list` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /webhooks/` | Required |
| [Webhook](docs/api/webhook.html) | `create` | `POST /tokens/{token}/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `list` | `GET /tokens/{token}/webhooks` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /webhooks/{id}/{field}` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /tokens/{token}/webhooks/{idWebhook}` | Required |
| [Webhook](docs/api/webhook.html) | `load` | `GET /webhooks/{id}` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /tokens/{token}/webhooks/{idWebhook}` | Required |
| [Webhook](docs/api/webhook.html) | `remove` | `DELETE /webhooks/{id}` | Required |
| [Webhook](docs/api/webhook.html) | `update` | `PUT /webhooks/{id}` | Required |
| [Webhook](docs/api/webhook.html) | `update` | `PUT /tokens/{token}/webhooks/{idWebhook}` | Required |

## Connect to the API

- API server: `https://api.trello.com/1`

The default credential is sent in the `key` query.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

A read request without required parameters or authentication is `GET /emoji`. For example:

```sh
curl --fail-with-body --silent --show-error 'https://api.trello.com/1/emoji'
```

Inspect the response using the [Emoji](docs/api/emoji.html) reference. This checks the public route; authenticated operations need their own credentials and request data.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `trello_list`: List records for an entity. Supported entities: `action`, `attachment`, `board`, `board_background`, `board_star`, `card`, `claimable_organization`, `custom_emoji`, `custom_field`, `custom_field_item`, `custom_sticker`, `emoji`, `enterprise_audit_log`, `export`, `member`, `membership`, `notification`, `notification_channel_setting`, `organization`, `pending_organization`, `plugin`, `plugin_data`, `saved_search`, `search`, `tag`, `token`, `trello_list`, `webhook`.
- `trello_load`: Load one record for an entity. Supported entities: `action`, `action_reactions_summary`, `application_compliance`, `attachment`, `batch`, `board`, `board_background`, `board_star`, `bulk`, `card`, `card_check_item_state`, `card_list`, `check_item`, `checklist`, `custom_emoji`, `custom_field`, `custom_sticker`, `enterpris`, `enterpris_signup_url`, `enterprise_admin`, `export`, `export_download`, `label`, `list`, `member`, `member_privacy`, `members_voted`, `membership`, `new_billable_guest`, `notification`, `notification_channel_setting`, `notification_list`, `notification_member_creator`, `option`, `organization`, `plugin`, `plugin_data`, `reaction`, `saved_search`, `sticker`, `token`, `transferrable_organization`, `trello_list`, `webhook`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

