# Trello Lua SDK



The Lua SDK for the Trello API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Action()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/trello-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("trello_sdk")

local client = sdk.new({
  apikey = os.getenv("TRELLO_APIKEY"),
})
```

### 2. List action records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local actions, err = client:Action():list()
if err then error(err) end

for _, item in ipairs(actions) do
  print(item["id"], item["date"])
end
```

### 3. Load an actionreactionssummary

ActionReactionsSummary is nested under id_action, so provide the `id_action`.

```lua
local actionreactionssummary, err = client:ActionReactionsSummary():load({ id_action = "example_id_action" })
if err then error(err) end
print(actionreactionssummary)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:Action():create({ id_action = "example_id_action" })
if err then error(err) end

-- Update
client:Action():update({ id = created:data_get()["id"], text = "example_text", data = {} })

-- Remove
client:Action():remove({ id = created:data_get()["id"] })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local boardstars, err = client:BoardStar():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:BoardStar():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRELLO_TEST_LIVE=TRUE
TRELLO_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### TrelloSDK

```lua
local sdk = require("trello_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### TrelloSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Action` | `(data) -> ActionEntity` | Create an Action entity instance. |
| `ActionReactionsSummary` | `(data) -> ActionReactionsSummaryEntity` | Create an ActionReactionsSummary entity instance. |
| `Admin` | `(data) -> AdminEntity` | Create an Admin entity instance. |
| `Application` | `(data) -> ApplicationEntity` | Create an Application entity instance. |
| `ApplicationCompliance` | `(data) -> ApplicationComplianceEntity` | Create an ApplicationCompliance entity instance. |
| `AssociatedDomain` | `(data) -> AssociatedDomainEntity` | Create an AssociatedDomain entity instance. |
| `Attachment` | `(data) -> AttachmentEntity` | Create an Attachment entity instance. |
| `Batch` | `(data) -> BatchEntity` | Create a Batch entity instance. |
| `Board` | `(data) -> BoardEntity` | Create a Board entity instance. |
| `BoardBackground` | `(data) -> BoardBackgroundEntity` | Create a BoardBackground entity instance. |
| `BoardPlugin` | `(data) -> BoardPluginEntity` | Create a BoardPlugin entity instance. |
| `BoardStar` | `(data) -> BoardStarEntity` | Create a BoardStar entity instance. |
| `Bulk` | `(data) -> BulkEntity` | Create a Bulk entity instance. |
| `Card` | `(data) -> CardEntity` | Create a Card entity instance. |
| `CardCheckItemState` | `(data) -> CardCheckItemStateEntity` | Create a CardCheckItemState entity instance. |
| `CardList` | `(data) -> CardListEntity` | Create a CardList entity instance. |
| `CheckItem` | `(data) -> CheckItemEntity` | Create a CheckItem entity instance. |
| `Checklist` | `(data) -> ChecklistEntity` | Create a Checklist entity instance. |
| `ClaimableOrganization` | `(data) -> ClaimableOrganizationEntity` | Create a ClaimableOrganization entity instance. |
| `CustomBoardBackground` | `(data) -> CustomBoardBackgroundEntity` | Create a CustomBoardBackground entity instance. |
| `CustomEmoji` | `(data) -> CustomEmojiEntity` | Create a CustomEmoji entity instance. |
| `CustomField` | `(data) -> CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldItem` | `(data) -> CustomFieldItemEntity` | Create a CustomFieldItem entity instance. |
| `CustomSticker` | `(data) -> CustomStickerEntity` | Create a CustomSticker entity instance. |
| `EmailPosition` | `(data) -> EmailPositionEntity` | Create an EmailPosition entity instance. |
| `Emoji` | `(data) -> EmojiEntity` | Create an Emoji entity instance. |
| `Enterpris` | `(data) -> EnterprisEntity` | Create an Enterpris entity instance. |
| `EnterprisSignupUrl` | `(data) -> EnterprisSignupUrlEntity` | Create an EnterprisSignupUrl entity instance. |
| `EnterpriseAdmin` | `(data) -> EnterpriseAdminEntity` | Create an EnterpriseAdmin entity instance. |
| `EnterpriseAuditLog` | `(data) -> EnterpriseAuditLogEntity` | Create an EnterpriseAuditLog entity instance. |
| `Export` | `(data) -> ExportEntity` | Create an Export entity instance. |
| `ExportDownload` | `(data) -> ExportDownloadEntity` | Create an ExportDownload entity instance. |
| `Generate` | `(data) -> GenerateEntity` | Create a Generate entity instance. |
| `IdEmailList` | `(data) -> IdEmailListEntity` | Create an IdEmailList entity instance. |
| `IdLabel` | `(data) -> IdLabelEntity` | Create an IdLabel entity instance. |
| `IdMember` | `(data) -> IdMemberEntity` | Create an IdMember entity instance. |
| `Label` | `(data) -> LabelEntity` | Create a Label entity instance. |
| `List` | `(data) -> ListEntity` | Create a List entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `MemberPrivacy` | `(data) -> MemberPrivacyEntity` | Create a MemberPrivacy entity instance. |
| `MembersVoted` | `(data) -> MembersVotedEntity` | Create a MembersVoted entity instance. |
| `Membership` | `(data) -> MembershipEntity` | Create a Membership entity instance. |
| `MostRecent` | `(data) -> MostRecentEntity` | Create a MostRecent entity instance. |
| `NewBillableGuest` | `(data) -> NewBillableGuestEntity` | Create a NewBillableGuest entity instance. |
| `Notification` | `(data) -> NotificationEntity` | Create a Notification entity instance. |
| `NotificationChannelSetting` | `(data) -> NotificationChannelSettingEntity` | Create a NotificationChannelSetting entity instance. |
| `NotificationList` | `(data) -> NotificationListEntity` | Create a NotificationList entity instance. |
| `NotificationMemberCreator` | `(data) -> NotificationMemberCreatorEntity` | Create a NotificationMemberCreator entity instance. |
| `NotificationsChannelSetting` | `(data) -> NotificationsChannelSettingEntity` | Create a NotificationsChannelSetting entity instance. |
| `Option` | `(data) -> OptionEntity` | Create an Option entity instance. |
| `OrgInviteRestrict` | `(data) -> OrgInviteRestrictEntity` | Create an OrgInviteRestrict entity instance. |
| `Organization` | `(data) -> OrganizationEntity` | Create an Organization entity instance. |
| `PendingOrganization` | `(data) -> PendingOrganizationEntity` | Create a PendingOrganization entity instance. |
| `Plugin` | `(data) -> PluginEntity` | Create a Plugin entity instance. |
| `PluginData` | `(data) -> PluginDataEntity` | Create a PluginData entity instance. |
| `PluginListing` | `(data) -> PluginListingEntity` | Create a PluginListing entity instance. |
| `Reaction` | `(data) -> ReactionEntity` | Create a Reaction entity instance. |
| `Read` | `(data) -> ReadEntity` | Create a Read entity instance. |
| `SavedSearch` | `(data) -> SavedSearchEntity` | Create a SavedSearch entity instance. |
| `Search` | `(data) -> SearchEntity` | Create a Search entity instance. |
| `ShowSidebar` | `(data) -> ShowSidebarEntity` | Create a ShowSidebar entity instance. |
| `ShowSidebarActivity` | `(data) -> ShowSidebarActivityEntity` | Create a ShowSidebarActivity entity instance. |
| `ShowSidebarBoardAction` | `(data) -> ShowSidebarBoardActionEntity` | Create a ShowSidebarBoardAction entity instance. |
| `ShowSidebarMember` | `(data) -> ShowSidebarMemberEntity` | Create a ShowSidebarMember entity instance. |
| `Sticker` | `(data) -> StickerEntity` | Create a Sticker entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `TransferrableOrganization` | `(data) -> TransferrableOrganizationEntity` | Create a TransferrableOrganization entity instance. |
| `TrelloList` | `(data) -> TrelloListEntity` | Create a TrelloList entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local action, err = client:Action():load({ id = "example_id" })
    if err then error(err) end
    -- action is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `data` |  |
| `date` |  |
| `display` |  |
| `id` |  |
| `idMemberCreator` |  |
| `limits` |  |
| `memberCreator` |  |
| `native` | The emoji to add as a native unicode emoji. |
| `shortName` | The primary `shortName` of the emoji to add. |
| `skinVariation` | The `skinVariation` of the emoji to add. |
| `type` |  |
| `unified` | The `unified` value of the emoji to add. |

Operations: Create, List, Load, Remove, Update.

API path: `/cards/{id}/actions/comments`

#### ActionReactionsSummary

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/actions/{idAction}/reactionsSummary`

#### Admin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove, Update.

API path: `/enterprises/{id}/admins/{idMember}`

#### Application

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ApplicationCompliance

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/applications/{key}/compliance`

#### AssociatedDomain

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/organizations/{id}/prefs/associatedDomain`

#### Attachment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List, Load, Remove.

API path: `/cards/{id}/attachments`

#### Batch

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/batch`

#### Board

| Field | Description |
| --- | --- |
| `closed` |  |
| `creationMethod` |  |
| `dateLastActivity` |  |
| `dateLastView` |  |
| `datePluginDisable` |  |
| `desc` |  |
| `descData` |  |
| `enterpriseOwned` |  |
| `fullName` | The full name of the user to as a member of the board. |
| `id` |  |
| `idMemberCreator` |  |
| `idOrganization` |  |
| `idTags` |  |
| `ixUpdate` |  |
| `labelNames` |  |
| `limits` |  |
| `memberships` |  |
| `name` | The name of the board. |
| `pinned` |  |
| `powerUps` |  |
| `prefs` |  |
| `shortLink` |  |
| `shortUrl` |  |
| `starred` |  |
| `subscribed` |  |
| `templateGallery` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/boards/`

#### BoardBackground

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/customBoardBackgrounds`

#### BoardPlugin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/boards/{id}/boardPlugins/{idPlugin}`

#### BoardStar

| Field | Description |
| --- | --- |
| `id` |  |
| `idBoard` |  |
| `pos` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/boardStars`

#### Bulk

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Update.

API path: `/enterprises/{id}/organizations/bulk/{idOrganizations}`

#### Card

| Field | Description |
| --- | --- |
| `address` |  |
| `badges` |  |
| `cardRole` |  |
| `checkItemStates` |  |
| `closed` |  |
| `coordinates` |  |
| `cover` |  |
| `creationMethod` |  |
| `customFieldItems` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` |  |
| `desc` |  |
| `descData` |  |
| `due` |  |
| `dueReminder` |  |
| `id` |  |
| `idAttachmentCover` |  |
| `idBoard` |  |
| `idChecklists` |  |
| `idLabels` |  |
| `idList` |  |
| `idMembers` |  |
| `idMembersVoted` |  |
| `idShort` |  |
| `labels` |  |
| `limits` |  |
| `locationName` |  |
| `manualCoverAttachment` |  |
| `mirrorSourceId` |  |
| `name` |  |
| `pos` |  |
| `shortLink` |  |
| `shortUrl` |  |
| `subscribed` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/cards`

#### CardCheckItemState

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/cards/{id}/checkItemStates`

#### CardList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/cards/{id}/list`

#### CheckItem

| Field | Description |
| --- | --- |
| `id` |  |
| `idChecklist` |  |
| `name` |  |
| `nameData` |  |
| `pos` |  |
| `state` |  |

Operations: Load, Remove, Update.

API path: `/cards/{id}/checkItem/{idCheckItem}`

#### Checklist

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Remove, Update.

API path: `/checklists/{id}/checkItems`

#### ClaimableOrganization

| Field | Description |
| --- | --- |
| `activeMembershipCount` |  |
| `dateLastActive` | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` |  |
| `id` |  |
| `idActiveAdmins` |  |
| `logoUrl` |  |
| `name` |  |
| `products` |  |

Operations: List.

API path: `/enterprises/{id}/claimableOrganizations`

#### CustomBoardBackground

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/members/{id}/customBoardBackgrounds/{idBackground}`

#### CustomEmoji

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `url` |  |

Operations: Create, List, Load.

API path: `/members/{id}/customEmoji`

#### CustomField

| Field | Description |
| --- | --- |
| `cardFront` |  |
| `display` |  |
| `display_cardFront` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | Whether to display this custom field on the front of cards |
| `fieldGroup` |  |
| `id` |  |
| `idModel` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | The type of model that the Custom Field is being defined on. |
| `name` | The name of the Custom Field |
| `options` | If the type is `checkbox` |
| `pos` |  |
| `type` | The type of Custom Field to create. |

Operations: Create, List, Load, Remove, Update.

API path: `/customFields/{id}/options`

#### CustomFieldItem

| Field | Description |
| --- | --- |
| `id` |  |
| `idCustomField` |  |
| `idModel` |  |
| `modelType` |  |
| `value` |  |

Operations: List.

API path: `/cards/{id}/customFieldItems`

#### CustomSticker

| Field | Description |
| --- | --- |
| `id` |  |
| `scaled` |  |
| `url` |  |

Operations: Create, List, Load, Remove.

API path: `/members/{id}/customStickers`

#### EmailPosition

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/emailPosition`

#### Emoji

| Field | Description |
| --- | --- |
| `category` |  |
| `keywords` |  |
| `name` |  |
| `native` |  |
| `sheetX` |  |
| `sheetY` |  |
| `shortName` |  |
| `shortNames` |  |
| `text` |  |
| `texts` |  |
| `tts` |  |
| `unified` |  |

Operations: List.

API path: `/emoji`

#### Enterpris

| Field | Description |
| --- | --- |
| `dateOrganizationPrefsLastUpdated` |  |
| `displayName` |  |
| `domains` |  |
| `enterpriseDomains` |  |
| `id` |  |
| `idAdmins` |  |
| `idOrganizations` |  |
| `idp` |  |
| `isRealEnterprise` |  |
| `licenses` |  |
| `logoHash` |  |
| `logoUrl` |  |
| `name` |  |
| `organizationPrefs` |  |
| `pluginWhitelistingEnabled` |  |
| `prefs` |  |
| `products` |  |
| `ssoActivationFailed` |  |

Operations: Create, Load, Update.

API path: `/enterprises/{id}/tokens`

#### EnterprisSignupUrl

| Field | Description |
| --- | --- |
| `id` |  |
| `signupUrl` |  |

Operations: Load.

API path: `/enterprises/{id}/signupUrl`

#### EnterpriseAdmin

| Field | Description |
| --- | --- |
| `fullName` |  |
| `id` |  |
| `username` |  |

Operations: Load.

API path: `/enterprises/{id}/admins`

#### EnterpriseAuditLog

| Field | Description |
| --- | --- |
| `date` |  |
| `idAction` |  |
| `member` |  |
| `memberCreator` |  |
| `organization` |  |
| `type` |  |

Operations: List.

API path: `/enterprises/{id}/auditlog`

#### Export

| Field | Description |
| --- | --- |
| `attempts` |  |
| `exportUrl` |  |
| `finished` |  |
| `id` |  |
| `size` |  |
| `stage` |  |
| `startedAt` |  |
| `status` |  |

Operations: Create, List, Load, Remove.

API path: `/boards/{id}/exports`

#### ExportDownload

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/boards/{id}/exports/{idExport}/download`

#### Generate

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/boards/{id}/calendarKey/generate`

#### IdEmailList

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/idEmailList`

#### IdLabel

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/cards/{id}/idLabels/{idLabel}`

#### IdMember

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/cards/{id}/idMembers/{idMember}`

#### Label

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Remove, Update.

API path: `/labels`

#### List

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Create, Load, Update.

API path: `/lists`

#### Member

| Field | Description |
| --- | --- |
| `aaEmail` |  |
| `aaEnrolledDate` |  |
| `aaId` |  |
| `activityBlocked` |  |
| `avatarHash` |  |
| `avatarSource` |  |
| `avatarUrl` |  |
| `bio` |  |
| `bioData` |  |
| `confirmed` |  |
| `email` |  |
| `fullName` |  |
| `gravatarHash` |  |
| `id` |  |
| `idBoards` |  |
| `idBoardsPinned` |  |
| `idEnterprise` |  |
| `idEnterprisesAdmin` |  |
| `idEnterprisesDeactivated` |  |
| `idMemberReferrer` |  |
| `idOrganizations` |  |
| `idPremOrgsAdmin` |  |
| `initials` |  |
| `isAaMastered` |  |
| `ixUpdate` |  |
| `limits` |  |
| `loginTypes` |  |
| `marketingOptIn` |  |
| `memberType` |  |
| `messagesDismissed` |  |
| `nonPublic` | Profile data with restricted visibility. |
| `nonPublicAvailable` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` |  |
| `prefs` |  |
| `premiumFeatures` |  |
| `products` |  |
| `status` |  |
| `trophies` |  |
| `uploadedAvatarHash` |  |
| `uploadedAvatarUrl` |  |
| `url` |  |
| `username` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/avatar`

#### MemberPrivacy

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/plugins/{id}/compliance/memberPrivacy`

#### MembersVoted

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove.

API path: `/cards/{id}/membersVoted`

#### Membership

| Field | Description |
| --- | --- |
| `admin` |  |
| `collaborator` |  |
| `deactivated` |  |
| `id` |  |
| `licensed` |  |
| `managed` |  |
| `member` |  |

Operations: List, Load, Update.

API path: `/enterprises/{id}/members/query`

#### MostRecent

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### NewBillableGuest

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/organizations/{id}/newBillableGuests/{idBoard}`

#### Notification

| Field | Description |
| --- | --- |
| `board` |  |
| `card` |  |
| `data` |  |
| `date` |  |
| `dateRead` |  |
| `id` |  |
| `idAction` |  |
| `idMemberCreator` |  |
| `reactions` |  |
| `type` |  |
| `unread` |  |

Operations: List, Load, Update.

API path: `/members/{id}/notifications`

#### NotificationChannelSetting

| Field | Description |
| --- | --- |
| `blockedKeys` | Singular key or array of notification keys |
| `channel` |  |
| `id` |  |
| `idMember` |  |

Operations: List, Load, Update.

API path: `/members/{id}/notificationsChannelSettings`

#### NotificationList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/notifications/{id}/list`

#### NotificationMemberCreator

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load.

API path: `/notifications/{id}/memberCreator`

#### NotificationsChannelSetting

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Option

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove.

API path: `/customFields/{id}/options/{idCustomFieldOption}`

#### OrgInviteRestrict

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/organizations/{id}/prefs/orgInviteRestrict`

#### Organization

| Field | Description |
| --- | --- |
| `dateLastActivity` |  |
| `displayName` |  |
| `id` |  |
| `idBoards` |  |
| `idEnterprise` |  |
| `memberships` |  |
| `name` |  |
| `offering` |  |
| `prefs` |  |
| `premiumFeatures` |  |
| `url` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/organizations`

#### PendingOrganization

| Field | Description |
| --- | --- |
| `date` |  |
| `displayName` |  |
| `id` |  |
| `idMember` |  |
| `logoUrl` |  |
| `memberRequestor` |  |
| `membershipCount` |  |
| `transferability` |  |

Operations: List.

API path: `/enterprises/{id}/pendingOrganizations`

#### Plugin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List, Load, Update.

API path: `/boards/{id}/boardPlugins`

#### PluginData

| Field | Description |
| --- | --- |

Operations: List, Load.

API path: `/organizations/{id}/pluginData`

#### PluginListing

| Field | Description |
| --- | --- |
| `description` | The description to show for the given locale |
| `id` |  |
| `locale` | The locale that this listing should be displayed for. |
| `name` | The name to use for the given locale. |
| `overview` | The overview to show for the given locale. |

Operations: Create, Update.

API path: `/plugins/{idPlugin}/listing`

#### Reaction

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove.

API path: `/actions/{idAction}/reactions/{id}`

#### Read

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/notifications/all/read`

#### SavedSearch

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `pos` |  |
| `query` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/savedSearches`

#### Search

| Field | Description |
| --- | --- |

Operations: List.

API path: `/search`

#### ShowSidebar

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/showSidebar`

#### ShowSidebarActivity

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/showSidebarActivity`

#### ShowSidebarBoardAction

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/showSidebarBoardActions`

#### ShowSidebarMember

| Field | Description |
| --- | --- |

Operations: Update.

API path: `/boards/{id}/myPrefs/showSidebarMembers`

#### Sticker

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Load, Remove, Update.

API path: `/cards/{id}/stickers/{idSticker}`

#### Tag

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List, Remove.

API path: `/organizations/{id}/tags`

#### Token

| Field | Description |
| --- | --- |
| `dateCreated` |  |
| `dateExpires` |  |
| `id` |  |
| `idMember` |  |
| `identifier` |  |
| `permissions` |  |

Operations: List, Load, Remove.

API path: `/members/{id}/tokens`

#### TransferrableOrganization

| Field | Description |
| --- | --- |
| `id` |  |
| `newBillableMembers` |  |
| `restrictedMembers` |  |
| `transferrable` |  |

Operations: Load.

API path: `/enterprises/{id}/transferrable/organization/{idOrganization}`

#### TrelloList

| Field | Description |
| --- | --- |
| `attachments` |  |
| `closed` |  |
| `id` |  |
| `idBoard` |  |
| `limits` |  |
| `name` | The name of the list |
| `pos` |  |
| `softLimit` |  |
| `subscribed` |  |

Operations: Create, List, Load.

API path: `/boards/{id}/lists`

#### Webhook

| Field | Description |
| --- | --- |
| `active` |  |
| `callbackURL` |  |
| `consecutiveFailures` |  |
| `description` |  |
| `firstConsecutiveFailDate` |  |
| `id` |  |
| `idModel` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/webhooks/`



## Entities


### Action

Create an instance: `local action = client:Action(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `table` |  |
| `date` | `string` |  |
| `display` | `table` |  |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `limits` | `table` |  |
| `memberCreator` | `table` |  |
| `native` | `string` | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | The `skinVariation` of the emoji to add. |
| `type` | `string` |  |
| `unified` | `string` | The `unified` value of the emoji to add. |

#### Example: Load

```lua
local action, err = client:Action():load({ id = "action_id" })
```

#### Example: List

```lua
local actions, err = client:Action():list()
```

#### Example: Create

```lua
local action, err = client:Action():create({
  id_action = "example_id_action", -- string
})
```


### ActionReactionsSummary

Create an instance: `local action_reactions_summary = client:ActionReactionsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local action_reactions_summary, err = client:ActionReactionsSummary():load({ id_action = "id_action" })
```


### Admin

Create an instance: `local admin = client:Admin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Application

Create an instance: `local application = client:Application(nil)`


### ApplicationCompliance

Create an instance: `local application_compliance = client:ApplicationCompliance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local application_compliance, err = client:ApplicationCompliance():load({ key = "key" })
```


### AssociatedDomain

Create an instance: `local associated_domain = client:AssociatedDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Attachment

Create an instance: `local attachment = client:Attachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local attachment, err = client:Attachment():load({ id = "attachment_id", card_id = "card_id" })
```

#### Example: List

```lua
local attachments, err = client:Attachment():list()
```


### Batch

Create an instance: `local batch = client:Batch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local batch, err = client:Batch():load({ url = "url" })
```


### Board

Create an instance: `local board = client:Board(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed` | `boolean` |  |
| `creationMethod` | `string` |  |
| `dateLastActivity` | `string` |  |
| `dateLastView` | `string` |  |
| `datePluginDisable` | `string` |  |
| `desc` | `string` |  |
| `descData` | `string` |  |
| `enterpriseOwned` | `boolean` |  |
| `fullName` | `string` | The full name of the user to as a member of the board. |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `idOrganization` | `string` |  |
| `idTags` | `string` |  |
| `ixUpdate` | `number` |  |
| `labelNames` | `table` |  |
| `limits` | `table` |  |
| `memberships` | `string` |  |
| `name` | `string` | The name of the board. |
| `pinned` | `boolean` |  |
| `powerUps` | `string` |  |
| `prefs` | `table` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `starred` | `boolean` |  |
| `subscribed` | `boolean` |  |
| `templateGallery` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local board, err = client:Board():load({ id = "board_id" })
```

#### Example: List

```lua
local boards, err = client:Board():list()
```

#### Example: Create

```lua
local board, err = client:Board():create({
  name = "example_name", -- string
  id = "example_id", -- string
})
```


### BoardBackground

Create an instance: `local board_background = client:BoardBackground(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local board_background, err = client:BoardBackground():load({ id = "board_background_id", member_id = "member_id" })
```

#### Example: List

```lua
local board_backgrounds, err = client:BoardBackground():list()
```

#### Example: Create

```lua
local board_background, err = client:BoardBackground():create({
  member_id = "example_member_id", -- string
  file = "example_file", -- string
})
```


### BoardPlugin

Create an instance: `local board_plugin = client:BoardPlugin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BoardStar

Create an instance: `local board_star = client:BoardStar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `pos` | `number` |  |

#### Example: Load

```lua
local board_star, err = client:BoardStar():load({ id = "board_star_id", member_id = "member_id" })
```

#### Example: List

```lua
local board_stars, err = client:BoardStar():list()
```

#### Example: Create

```lua
local board_star, err = client:BoardStar():create({
  member_id = "example_member_id", -- string
  id_board = "example_id_board", -- string
  pos = "example_pos", -- any
})
```


### Bulk

Create an instance: `local bulk = client:Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local bulk, err = client:Bulk():load({ id = {}, enterpris_id = "enterpris_id" })
```


### Card

Create an instance: `local card = client:Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` |  |
| `badges` | `table` |  |
| `cardRole` | `string` |  |
| `checkItemStates` | `table` |  |
| `closed` | `boolean` |  |
| `coordinates` | `string` |  |
| `cover` | `table` |  |
| `creationMethod` | `string` |  |
| `customFieldItems` | `table` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` |  |
| `desc` | `string` |  |
| `descData` | `table` |  |
| `due` | `string` |  |
| `dueReminder` | `string` |  |
| `id` | `string` |  |
| `idAttachmentCover` | `string` |  |
| `idBoard` | `string` |  |
| `idChecklists` | `table` |  |
| `idLabels` | `table` |  |
| `idList` | `string` |  |
| `idMembers` | `table` |  |
| `idMembersVoted` | `table` |  |
| `idShort` | `number` |  |
| `labels` | `table` |  |
| `limits` | `table` |  |
| `locationName` | `string` |  |
| `manualCoverAttachment` | `boolean` |  |
| `mirrorSourceId` | `string` |  |
| `name` | `string` |  |
| `pos` | `number` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `subscribed` | `boolean` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local card, err = client:Card():load({ id = "card_id" })
```

#### Example: List

```lua
local cards, err = client:Card():list()
```

#### Example: Create

```lua
local card, err = client:Card():create({
  id_list = "example_id_list", -- string
})
```


### CardCheckItemState

Create an instance: `local card_check_item_state = client:CardCheckItemState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local card_check_item_state, err = client:CardCheckItemState():load({ id = "card_check_item_state_id" })
```


### CardList

Create an instance: `local card_list = client:CardList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local card_list, err = client:CardList():load({ id = "card_list_id" })
```


### CheckItem

Create an instance: `local check_item = client:CheckItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `idChecklist` | `string` |  |
| `name` | `string` |  |
| `nameData` | `string` |  |
| `pos` | `string` |  |
| `state` | `string` |  |

#### Example: Load

```lua
local check_item, err = client:CheckItem():load({ id = "check_item_id", card_id = "card_id" })
```


### Checklist

Create an instance: `local checklist = client:Checklist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local checklist, err = client:Checklist():load({ id = "checklist_id" })
```

#### Example: Create

```lua
local checklist, err = client:Checklist():create({
  id_card = "example_id_card", -- string
})
```


### ClaimableOrganization

Create an instance: `local claimable_organization = client:ClaimableOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeMembershipCount` | `number` |  |
| `dateLastActive` | `string` | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idActiveAdmins` | `table` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `products` | `table` |  |

#### Example: List

```lua
local claimable_organizations, err = client:ClaimableOrganization():list()
```


### CustomBoardBackground

Create an instance: `local custom_board_background = client:CustomBoardBackground(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomEmoji

Create an instance: `local custom_emoji = client:CustomEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local custom_emoji, err = client:CustomEmoji():load({ id = "custom_emoji_id", member_id = "member_id" })
```

#### Example: List

```lua
local custom_emojis, err = client:CustomEmoji():list()
```

#### Example: Create

```lua
local custom_emoji, err = client:CustomEmoji():create({
  member_id = "example_member_id", -- string
  file = "example_file", -- string
  name = "example_name", -- string
})
```


### CustomField

Create an instance: `local custom_field = client:CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cardFront` | `boolean` |  |
| `display` | `table` |  |
| `display_cardFront` | `boolean` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `boolean` | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | The type of model that the Custom Field is being defined on. |
| `name` | `string` | The name of the Custom Field |
| `options` | `table` | If the type is `checkbox` |
| `pos` | `string` |  |
| `type` | `string` | The type of Custom Field to create. |

#### Example: Load

```lua
local custom_field, err = client:CustomField():load({ id = "custom_field_id" })
```

#### Example: List

```lua
local custom_fields, err = client:CustomField():list()
```

#### Example: Create

```lua
local custom_field, err = client:CustomField():create({
  idModel = "example_idModel", -- string
  modelType = "example_modelType", -- string
  type = "example_type", -- string
})
```


### CustomFieldItem

Create an instance: `local custom_field_item = client:CustomFieldItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `idCustomField` | `string` |  |
| `idModel` | `string` |  |
| `modelType` | `string` |  |
| `value` | `table` |  |

#### Example: List

```lua
local custom_field_items, err = client:CustomFieldItem():list()
```


### CustomSticker

Create an instance: `local custom_sticker = client:CustomSticker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `scaled` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local custom_sticker, err = client:CustomSticker():load({ id = "custom_sticker_id", member_id = "member_id" })
```

#### Example: List

```lua
local custom_stickers, err = client:CustomSticker():list()
```

#### Example: Create

```lua
local custom_sticker, err = client:CustomSticker():create({
  member_id = "example_member_id", -- string
  file = "example_file", -- string
})
```


### EmailPosition

Create an instance: `local email_position = client:EmailPosition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Emoji

Create an instance: `local emoji = client:Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `keywords` | `table` |  |
| `name` | `string` |  |
| `native` | `string` |  |
| `sheetX` | `number` |  |
| `sheetY` | `number` |  |
| `shortName` | `string` |  |
| `shortNames` | `table` |  |
| `text` | `string` |  |
| `texts` | `string` |  |
| `tts` | `string` |  |
| `unified` | `string` |  |

#### Example: List

```lua
local emojis, err = client:Emoji():list()
```


### Enterpris

Create an instance: `local enterpris = client:Enterpris(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` |  |
| `displayName` | `string` |  |
| `domains` | `table` |  |
| `enterpriseDomains` | `table` |  |
| `id` | `string` |  |
| `idAdmins` | `table` |  |
| `idOrganizations` | `table` |  |
| `idp` | `table` |  |
| `isRealEnterprise` | `boolean` |  |
| `licenses` | `table` |  |
| `logoHash` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `organizationPrefs` | `table` |  |
| `pluginWhitelistingEnabled` | `table` |  |
| `prefs` | `table` |  |
| `products` | `table` |  |
| `ssoActivationFailed` | `boolean` |  |

#### Example: Load

```lua
local enterpris, err = client:Enterpris():load({ id = "enterpris_id" })
```

#### Example: Create

```lua
local enterpris, err = client:Enterpris():create({
  id = "example_id", -- string
})
```


### EnterprisSignupUrl

Create an instance: `local enterpris_signup_url = client:EnterprisSignupUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `signupUrl` | `string` |  |

#### Example: Load

```lua
local enterpris_signup_url, err = client:EnterprisSignupUrl():load({ id = "enterpris_signup_url_id" })
```


### EnterpriseAdmin

Create an instance: `local enterprise_admin = client:EnterpriseAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fullName` | `string` |  |
| `id` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local enterprise_admin, err = client:EnterpriseAdmin():load({ enterpris_id = "enterpris_id" })
```


### EnterpriseAuditLog

Create an instance: `local enterprise_audit_log = client:EnterpriseAuditLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `idAction` | `string` |  |
| `member` | `table` |  |
| `memberCreator` | `table` |  |
| `organization` | `table` |  |
| `type` | `string` |  |

#### Example: List

```lua
local enterprise_audit_logs, err = client:EnterpriseAuditLog():list()
```


### Export

Create an instance: `local export = client:Export(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attempts` | `number` |  |
| `exportUrl` | `string` |  |
| `finished` | `boolean` |  |
| `id` | `string` |  |
| `size` | `string` |  |
| `stage` | `string` |  |
| `startedAt` | `string` |  |
| `status` | `table` |  |

#### Example: Load

```lua
local export, err = client:Export():load({ id = "export_id", board_id = "board_id" })
```

#### Example: List

```lua
local exports, err = client:Export():list()
```

#### Example: Create

```lua
local export, err = client:Export():create({
  board_id = "example_board_id", -- string
})
```


### ExportDownload

Create an instance: `local export_download = client:ExportDownload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local export_download, err = client:ExportDownload():load({ board_id = "board_id", id_export = "id_export" })
```


### Generate

Create an instance: `local generate = client:Generate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local generate, err = client:Generate():create({
  board_id = "example_board_id", -- string
})
```


### IdEmailList

Create an instance: `local id_email_list = client:IdEmailList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### IdLabel

Create an instance: `local id_label = client:IdLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### IdMember

Create an instance: `local id_member = client:IdMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Label

Create an instance: `local label = client:Label(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local label, err = client:Label():load({ id = "label_id" })
```

#### Example: Create

```lua
local label, err = client:Label():create({
  color = "example_color", -- string
  id_board = "example_id_board", -- string
  name = "example_name", -- string
})
```


### List

Create an instance: `local list = client:List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local list, err = client:List():load({ id = "list_id" })
```

#### Example: Create

```lua
local list, err = client:List():create({
  id_board = "example_id_board", -- string
  name = "example_name", -- string
})
```


### Member

Create an instance: `local member = client:Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aaEmail` | `string` |  |
| `aaEnrolledDate` | `string` |  |
| `aaId` | `string` |  |
| `activityBlocked` | `boolean` |  |
| `avatarHash` | `string` |  |
| `avatarSource` | `string` |  |
| `avatarUrl` | `string` |  |
| `bio` | `string` |  |
| `bioData` | `table` |  |
| `confirmed` | `boolean` |  |
| `email` | `string` |  |
| `fullName` | `string` |  |
| `gravatarHash` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `table` |  |
| `idBoardsPinned` | `table` |  |
| `idEnterprise` | `string` |  |
| `idEnterprisesAdmin` | `table` |  |
| `idEnterprisesDeactivated` | `table` |  |
| `idMemberReferrer` | `string` |  |
| `idOrganizations` | `table` |  |
| `idPremOrgsAdmin` | `table` |  |
| `initials` | `string` |  |
| `isAaMastered` | `boolean` |  |
| `ixUpdate` | `number` |  |
| `limits` | `table` |  |
| `loginTypes` | `table` |  |
| `marketingOptIn` | `table` |  |
| `memberType` | `string` |  |
| `messagesDismissed` | `table` |  |
| `nonPublic` | `table` | Profile data with restricted visibility. |
| `nonPublicAvailable` | `boolean` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `table` |  |
| `prefs` | `table` |  |
| `premiumFeatures` | `table` |  |
| `products` | `table` |  |
| `status` | `string` |  |
| `trophies` | `table` |  |
| `uploadedAvatarHash` | `string` |  |
| `uploadedAvatarUrl` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```lua
local member, err = client:Member():load({ id = "member_id" })
```

#### Example: List

```lua
local members, err = client:Member():list()
```

#### Example: Create

```lua
local member, err = client:Member():create({
  id = "example_id", -- string
})
```


### MemberPrivacy

Create an instance: `local member_privacy = client:MemberPrivacy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local member_privacy, err = client:MemberPrivacy():load({ plugin_id = "plugin_id" })
```


### MembersVoted

Create an instance: `local members_voted = client:MembersVoted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local members_voted, err = client:MembersVoted():load({ card_id = "card_id" })
```


### Membership

Create an instance: `local membership = client:Membership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin` | `boolean` |  |
| `collaborator` | `boolean` |  |
| `deactivated` | `boolean` |  |
| `id` | `string` |  |
| `licensed` | `boolean` |  |
| `managed` | `boolean` |  |
| `member` | `table` |  |

#### Example: Load

```lua
local membership, err = client:Membership():load({ id = "membership_id", organization_id = "organization_id" })
```

#### Example: List

```lua
local memberships, err = client:Membership():list()
```


### MostRecent

Create an instance: `local most_recent = client:MostRecent(nil)`


### NewBillableGuest

Create an instance: `local new_billable_guest = client:NewBillableGuest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local new_billable_guest, err = client:NewBillableGuest():load({ id = "new_billable_guest_id", organization_id = "organization_id" })
```


### Notification

Create an instance: `local notification = client:Notification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `table` |  |
| `card` | `table` |  |
| `data` | `string` |  |
| `date` | `string` |  |
| `dateRead` | `string` |  |
| `id` | `string` |  |
| `idAction` | `string` |  |
| `idMemberCreator` | `string` |  |
| `reactions` | `table` |  |
| `type` | `string` |  |
| `unread` | `boolean` |  |

#### Example: Load

```lua
local notification, err = client:Notification():load({ id = "notification_id" })
```

#### Example: List

```lua
local notifications, err = client:Notification():list()
```


### NotificationChannelSetting

Create an instance: `local notification_channel_setting = client:NotificationChannelSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedKeys` | `table` | Singular key or array of notification keys |
| `channel` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |

#### Example: Load

```lua
local notification_channel_setting, err = client:NotificationChannelSetting():load({ channel = "channel", member_id = "member_id" })
```

#### Example: List

```lua
local notification_channel_settings, err = client:NotificationChannelSetting():list()
```


### NotificationList

Create an instance: `local notification_list = client:NotificationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local notification_list, err = client:NotificationList():load({ id = "notification_list_id" })
```


### NotificationMemberCreator

Create an instance: `local notification_member_creator = client:NotificationMemberCreator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local notification_member_creator, err = client:NotificationMemberCreator():load({ id = "notification_member_creator_id" })
```


### NotificationsChannelSetting

Create an instance: `local notifications_channel_setting = client:NotificationsChannelSetting(nil)`


### Option

Create an instance: `local option = client:Option(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local option, err = client:Option():load({ id = "option_id", custom_field_id = "custom_field_id" })
```


### OrgInviteRestrict

Create an instance: `local org_invite_restrict = client:OrgInviteRestrict(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Organization

Create an instance: `local organization = client:Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateLastActivity` | `string` |  |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `table` |  |
| `idEnterprise` | `string` |  |
| `memberships` | `table` |  |
| `name` | `string` |  |
| `offering` | `string` |  |
| `prefs` | `table` |  |
| `premiumFeatures` | `table` |  |
| `url` | `string` |  |

#### Example: Load

```lua
local organization, err = client:Organization():load({ id = "organization_id" })
```

#### Example: List

```lua
local organizations, err = client:Organization():list()
```

#### Example: Create

```lua
local organization, err = client:Organization():create({
  display_name = "example_display_name", -- string
})
```


### PendingOrganization

Create an instance: `local pending_organization = client:PendingOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |
| `logoUrl` | `string` |  |
| `memberRequestor` | `table` |  |
| `membershipCount` | `number` |  |
| `transferability` | `table` |  |

#### Example: List

```lua
local pending_organizations, err = client:PendingOrganization():list()
```


### Plugin

Create an instance: `local plugin = client:Plugin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local plugin, err = client:Plugin():load({ id = "plugin_id" })
```

#### Example: List

```lua
local plugins, err = client:Plugin():list()
```


### PluginData

Create an instance: `local plugin_data = client:PluginData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local plugin_data, err = client:PluginData():load({ card_id = "card_id" })
```

#### Example: List

```lua
local plugin_datas, err = client:PluginData():list()
```


### PluginListing

Create an instance: `local plugin_listing = client:PluginListing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description to show for the given locale |
| `id` | `string` |  |
| `locale` | `string` | The locale that this listing should be displayed for. |
| `name` | `string` | The name to use for the given locale. |
| `overview` | `string` | The overview to show for the given locale. |

#### Example: Create

```lua
local plugin_listing, err = client:PluginListing():create({
  id_plugin = "example_id_plugin", -- string
})
```


### Reaction

Create an instance: `local reaction = client:Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local reaction, err = client:Reaction():load({ id = "reaction_id", id_action = "id_action" })
```


### Read

Create an instance: `local read = client:Read(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local read, err = client:Read():create({
})
```


### SavedSearch

Create an instance: `local saved_search = client:SavedSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `pos` | `any` |  |
| `query` | `string` |  |

#### Example: Load

```lua
local saved_search, err = client:SavedSearch():load({ id = "saved_search_id", member_id = "member_id" })
```

#### Example: List

```lua
local saved_searchs, err = client:SavedSearch():list()
```

#### Example: Create

```lua
local saved_search, err = client:SavedSearch():create({
  member_id = "example_member_id", -- string
  name = "example_name", -- string
  pos = "example_pos", -- any
  query = "example_query", -- string
})
```


### Search

Create an instance: `local search = client:Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```lua
local searchs, err = client:Search():list()
```


### ShowSidebar

Create an instance: `local show_sidebar = client:ShowSidebar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarActivity

Create an instance: `local show_sidebar_activity = client:ShowSidebarActivity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarBoardAction

Create an instance: `local show_sidebar_board_action = client:ShowSidebarBoardAction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarMember

Create an instance: `local show_sidebar_member = client:ShowSidebarMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Sticker

Create an instance: `local sticker = client:Sticker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```lua
local sticker, err = client:Sticker():load({ id = "sticker_id", card_id = "card_id" })
```


### Tag

Create an instance: `local tag = client:Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```lua
local tags, err = client:Tag():list()
```


### Token

Create an instance: `local token = client:Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateCreated` | `string` |  |
| `dateExpires` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |
| `identifier` | `string` |  |
| `permissions` | `table` |  |

#### Example: Load

```lua
local token, err = client:Token():load({ id = "token_id" })
```

#### Example: List

```lua
local tokens, err = client:Token():list()
```


### TransferrableOrganization

Create an instance: `local transferrable_organization = client:TransferrableOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `newBillableMembers` | `table` |  |
| `restrictedMembers` | `table` |  |
| `transferrable` | `boolean` |  |

#### Example: Load

```lua
local transferrable_organization, err = client:TransferrableOrganization():load({ id = "transferrable_organization_id", enterpris_id = "enterpris_id" })
```


### TrelloList

Create an instance: `local trello_list = client:TrelloList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `table` |  |
| `closed` | `boolean` |  |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `limits` | `table` |  |
| `name` | `string` | The name of the list |
| `pos` | `number` |  |
| `softLimit` | `string` |  |
| `subscribed` | `boolean` |  |

#### Example: Load

```lua
local trello_list, err = client:TrelloList():load({ action_id = "action_id" })
```

#### Example: List

```lua
local trello_lists, err = client:TrelloList():list()
```

#### Example: Create

```lua
local trello_list, err = client:TrelloList():create({
  board_id = "example_board_id", -- string
  name = "example_name", -- string
})
```


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `callbackURL` | `string` |  |
| `consecutiveFailures` | `number` |  |
| `description` | `string` |  |
| `firstConsecutiveFailDate` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` |  |

#### Example: Load

```lua
local webhook, err = client:Webhook():load({ id = "webhook_id" })
```

#### Example: List

```lua
local webhooks, err = client:Webhook():list()
```

#### Example: Create

```lua
local webhook, err = client:Webhook():create({
  callback_url = "example_callback_url", -- string
  id_model = "example_id_model", -- string
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── trello_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`trello_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local boardstar = client:BoardStar()
boardstar:list()

-- boardstar:data_get() now returns the boardstar data from the last list
-- boardstar:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
