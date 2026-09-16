# Trello Python SDK



The Python SDK for the Trello API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.Action()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/trello-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from trello_sdk import TrelloSDK

client = TrelloSDK({
    "apikey": os.environ.get("TRELLO_APIKEY"),
})
```

### 2. List action records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    actions = client.Action().list({"card_id": "example"})
    for action in actions:
        print(action)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an actionreactionssummary

ActionReactionsSummary is nested under id_action, so provide the `id_action`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    actionreactionssummary = client.ActionReactionsSummary().load({"id_action": "example_id_action"})
    print(actionreactionssummary)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.Action().create({"id_action": "example_id_action"})

# Update — the created record's id is a plain dict key
client.Action().update({"id": created.data_get()["id"], "text": "example_text", "data": {}})

# Remove
client.Action().remove({"id": created.data_get()["id"]})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    boardstars = client.BoardStar().list()
    print(boardstars)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = TrelloSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
boardstar = client.BoardStar().list()
# boardstar contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = TrelloSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
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
cd py && pytest test/
```


## Reference

### TrelloSDK

```python
from trello_sdk import TrelloSDK

client = TrelloSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = TrelloSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### TrelloSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
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
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `action = client.Action()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `dict` |  |
| `date` | `str` |  |
| `display` | `dict` |  |
| `id` | `str` |  |
| `idMemberCreator` | `str` |  |
| `limits` | `dict` |  |
| `memberCreator` | `dict` |  |
| `native` | `str` | The emoji to add as a native unicode emoji. |
| `shortName` | `str` | The primary `shortName` of the emoji to add. |
| `skinVariation` | `str` | The `skinVariation` of the emoji to add. |
| `type` | `str` |  |
| `unified` | `str` | The `unified` value of the emoji to add. |

#### Example: Load

```python
action = client.Action().load({"id": "action_id"})
```

#### Example: List

```python
actions = client.Action().list({"card_id": "example"})
```

#### Example: Create

```python
action = client.Action().create({
    "id_action": "example_id_action",  # str
})
```


### ActionReactionsSummary

Create an instance: `action_reactions_summary = client.ActionReactionsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
action_reactions_summary = client.ActionReactionsSummary().load({"id_action": "id_action"})
```


### Admin

Create an instance: `admin = client.Admin()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Application

Create an instance: `application = client.Application()`


### ApplicationCompliance

Create an instance: `application_compliance = client.ApplicationCompliance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
application_compliance = client.ApplicationCompliance().load({"key": "key"})
```


### AssociatedDomain

Create an instance: `associated_domain = client.AssociatedDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Attachment

Create an instance: `attachment = client.Attachment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
attachment = client.Attachment().load({"id": "attachment_id", "card_id": "card_id"})
```

#### Example: List

```python
attachments = client.Attachment().list({"card_id": "example"})
```


### Batch

Create an instance: `batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
batch = client.Batch().load({"url": "url"})
```


### Board

Create an instance: `board = client.Board()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `closed` | `bool` |  |
| `creationMethod` | `str` |  |
| `dateLastActivity` | `str` |  |
| `dateLastView` | `str` |  |
| `datePluginDisable` | `str` |  |
| `desc` | `str` |  |
| `descData` | `str` |  |
| `enterpriseOwned` | `bool` |  |
| `fullName` | `str` | The full name of the user to as a member of the board. |
| `id` | `str` |  |
| `idMemberCreator` | `str` |  |
| `idOrganization` | `str` |  |
| `idTags` | `str` |  |
| `ixUpdate` | `int` |  |
| `labelNames` | `dict` |  |
| `limits` | `dict` |  |
| `memberships` | `str` |  |
| `name` | `str` | The name of the board. |
| `pinned` | `bool` |  |
| `powerUps` | `str` |  |
| `prefs` | `dict` |  |
| `shortLink` | `str` |  |
| `shortUrl` | `str` |  |
| `starred` | `bool` |  |
| `subscribed` | `bool` |  |
| `templateGallery` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
board = client.Board().load({"id": "board_id"})
```

#### Example: List

```python
boards = client.Board().list({"member_id": "example"})
```

#### Example: Create

```python
board = client.Board().create({
    "name": "example_name",  # str
    "id": "example_id",  # str
})
```


### BoardBackground

Create an instance: `board_background = client.BoardBackground()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
board_background = client.BoardBackground().load({"id": "board_background_id", "member_id": "member_id"})
```

#### Example: List

```python
board_backgrounds = client.BoardBackground().list({"member_id": "example"})
```

#### Example: Create

```python
board_background = client.BoardBackground().create({
    "member_id": "example_member_id",  # str
    "file": "example_file",  # str
})
```


### BoardPlugin

Create an instance: `board_plugin = client.BoardPlugin()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### BoardStar

Create an instance: `board_star = client.BoardStar()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `idBoard` | `str` |  |
| `pos` | `int` |  |

#### Example: Load

```python
board_star = client.BoardStar().load({"id": "board_star_id", "member_id": "member_id"})
```

#### Example: List

```python
board_stars = client.BoardStar().list({"id": "example_id"})
```

#### Example: Create

```python
board_star = client.BoardStar().create({
    "member_id": "example_member_id",  # str
    "id_board": "example_id_board",  # str
    "pos": "example_pos",  # Any
})
```


### Bulk

Create an instance: `bulk = client.Bulk()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
bulk = client.Bulk().load({"id": [], "enterpris_id": "enterpris_id"})
```


### Card

Create an instance: `card = client.Card()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `str` |  |
| `badges` | `dict` |  |
| `cardRole` | `str` |  |
| `checkItemStates` | `list` |  |
| `closed` | `bool` |  |
| `coordinates` | `str` |  |
| `cover` | `dict` |  |
| `creationMethod` | `str` |  |
| `customFieldItems` | `list` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `str` |  |
| `desc` | `str` |  |
| `descData` | `dict` |  |
| `due` | `str` |  |
| `dueReminder` | `str` |  |
| `id` | `str` |  |
| `idAttachmentCover` | `str` |  |
| `idBoard` | `str` |  |
| `idChecklists` | `list` |  |
| `idLabels` | `list` |  |
| `idList` | `str` |  |
| `idMembers` | `list` |  |
| `idMembersVoted` | `list` |  |
| `idShort` | `int` |  |
| `labels` | `list` |  |
| `limits` | `dict` |  |
| `locationName` | `str` |  |
| `manualCoverAttachment` | `bool` |  |
| `mirrorSourceId` | `str` |  |
| `name` | `str` |  |
| `pos` | `float` |  |
| `shortLink` | `str` |  |
| `shortUrl` | `str` |  |
| `subscribed` | `bool` |  |
| `url` | `str` |  |

#### Example: Load

```python
card = client.Card().load({"id": "card_id"})
```

#### Example: List

```python
cards = client.Card().list({"action_id": "example"})
```

#### Example: Create

```python
card = client.Card().create({
    "id_list": "example_id_list",  # str
})
```


### CardCheckItemState

Create an instance: `card_check_item_state = client.CardCheckItemState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
card_check_item_state = client.CardCheckItemState().load({"id": "card_check_item_state_id"})
```


### CardList

Create an instance: `card_list = client.CardList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
card_list = client.CardList().load({"id": "card_list_id"})
```


### CheckItem

Create an instance: `check_item = client.CheckItem()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `idChecklist` | `str` |  |
| `name` | `str` |  |
| `nameData` | `str` |  |
| `pos` | `str` |  |
| `state` | `str` |  |

#### Example: Load

```python
check_item = client.CheckItem().load({"id": "check_item_id", "card_id": "card_id"})
```


### Checklist

Create an instance: `checklist = client.Checklist()`

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
| `id` | `str` |  |

#### Example: Load

```python
checklist = client.Checklist().load({"id": "checklist_id"})
```

#### Example: Create

```python
checklist = client.Checklist().create({
    "id_card": "example_id_card",  # str
})
```


### ClaimableOrganization

Create an instance: `claimable_organization = client.ClaimableOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeMembershipCount` | `float` |  |
| `dateLastActive` | `str` | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `str` |  |
| `id` | `str` |  |
| `idActiveAdmins` | `list` |  |
| `logoUrl` | `str` |  |
| `name` | `str` |  |
| `products` | `list` |  |

#### Example: List

```python
claimable_organizations = client.ClaimableOrganization().list({"enterpris_id": "example"})
```


### CustomBoardBackground

Create an instance: `custom_board_background = client.CustomBoardBackground()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### CustomEmoji

Create an instance: `custom_emoji = client.CustomEmoji()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` |  |
| `url` | `str` |  |

#### Example: Load

```python
custom_emoji = client.CustomEmoji().load({"id": "custom_emoji_id", "member_id": "member_id"})
```

#### Example: List

```python
custom_emojis = client.CustomEmoji().list({"member_id": "example"})
```

#### Example: Create

```python
custom_emoji = client.CustomEmoji().create({
    "member_id": "example_member_id",  # str
    "file": "example_file",  # str
    "name": "example_name",  # str
})
```


### CustomField

Create an instance: `custom_field = client.CustomField()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cardFront` | `bool` |  |
| `display` | `dict` |  |
| `display_cardFront` | `bool` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | Whether to display this custom field on the front of cards |
| `fieldGroup` | `str` |  |
| `id` | `str` |  |
| `idModel` | `str` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `str` | The type of model that the Custom Field is being defined on. |
| `name` | `str` | The name of the Custom Field |
| `options` | `list` | If the type is `checkbox` |
| `pos` | `str` |  |
| `type` | `str` | The type of Custom Field to create. |

#### Example: Load

```python
custom_field = client.CustomField().load({"id": "custom_field_id"})
```

#### Example: List

```python
custom_fields = client.CustomField().list({"board_id": "example"})
```

#### Example: Create

```python
custom_field = client.CustomField().create({
    "idModel": "example_idModel",  # str
    "modelType": "example_modelType",  # str
    "type": "example_type",  # str
})
```


### CustomFieldItem

Create an instance: `custom_field_item = client.CustomFieldItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `idCustomField` | `str` |  |
| `idModel` | `str` |  |
| `modelType` | `str` |  |
| `value` | `dict` |  |

#### Example: List

```python
custom_field_items = client.CustomFieldItem().list({"card_id": "example"})
```


### CustomSticker

Create an instance: `custom_sticker = client.CustomSticker()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `scaled` | `list` |  |
| `url` | `str` |  |

#### Example: Load

```python
custom_sticker = client.CustomSticker().load({"id": "custom_sticker_id", "member_id": "member_id"})
```

#### Example: List

```python
custom_stickers = client.CustomSticker().list({"member_id": "example"})
```

#### Example: Create

```python
custom_sticker = client.CustomSticker().create({
    "member_id": "example_member_id",  # str
    "file": "example_file",  # str
})
```


### EmailPosition

Create an instance: `email_position = client.EmailPosition()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Emoji

Create an instance: `emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `str` |  |
| `keywords` | `list` |  |
| `name` | `str` |  |
| `native` | `str` |  |
| `sheetX` | `float` |  |
| `sheetY` | `float` |  |
| `shortName` | `str` |  |
| `shortNames` | `list` |  |
| `text` | `str` |  |
| `texts` | `str` |  |
| `tts` | `str` |  |
| `unified` | `str` |  |

#### Example: List

```python
emojis = client.Emoji().list()
```


### Enterpris

Create an instance: `enterpris = client.Enterpris()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `str` |  |
| `displayName` | `str` |  |
| `domains` | `list` |  |
| `enterpriseDomains` | `list` |  |
| `id` | `str` |  |
| `idAdmins` | `list` |  |
| `idOrganizations` | `list` |  |
| `idp` | `dict` |  |
| `isRealEnterprise` | `bool` |  |
| `licenses` | `dict` |  |
| `logoHash` | `str` |  |
| `logoUrl` | `str` |  |
| `name` | `str` |  |
| `organizationPrefs` | `dict` |  |
| `pluginWhitelistingEnabled` | `list` |  |
| `prefs` | `dict` |  |
| `products` | `list` |  |
| `ssoActivationFailed` | `bool` |  |

#### Example: Load

```python
enterpris = client.Enterpris().load({"id": "enterpris_id"})
```

#### Example: Create

```python
enterpris = client.Enterpris().create({
    "id": "example_id",  # str
})
```


### EnterprisSignupUrl

Create an instance: `enterpris_signup_url = client.EnterprisSignupUrl()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `signupUrl` | `str` |  |

#### Example: Load

```python
enterpris_signup_url = client.EnterprisSignupUrl().load({"id": "enterpris_signup_url_id"})
```


### EnterpriseAdmin

Create an instance: `enterprise_admin = client.EnterpriseAdmin()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fullName` | `str` |  |
| `id` | `str` |  |
| `username` | `str` |  |

#### Example: Load

```python
enterprise_admin = client.EnterpriseAdmin().load({"enterpris_id": "enterpris_id"})
```


### EnterpriseAuditLog

Create an instance: `enterprise_audit_log = client.EnterpriseAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` |  |
| `idAction` | `str` |  |
| `member` | `dict` |  |
| `memberCreator` | `dict` |  |
| `organization` | `dict` |  |
| `type` | `str` |  |

#### Example: List

```python
enterprise_audit_logs = client.EnterpriseAuditLog().list({"enterpris_id": "example"})
```


### Export

Create an instance: `export = client.Export()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attempts` | `float` |  |
| `exportUrl` | `str` |  |
| `finished` | `bool` |  |
| `id` | `str` |  |
| `size` | `str` |  |
| `stage` | `str` |  |
| `startedAt` | `str` |  |
| `status` | `dict` |  |

#### Example: Load

```python
export = client.Export().load({"id": "export_id", "board_id": "board_id"})
```

#### Example: List

```python
exports = client.Export().list({"organization_id": "example"})
```

#### Example: Create

```python
export = client.Export().create({
    "board_id": "example_board_id",  # str
})
```


### ExportDownload

Create an instance: `export_download = client.ExportDownload()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
export_download = client.ExportDownload().load({"board_id": "board_id", "id_export": "id_export"})
```


### Generate

Create an instance: `generate = client.Generate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
generate = client.Generate().create({
    "board_id": "example_board_id",  # str
})
```


### IdEmailList

Create an instance: `id_email_list = client.IdEmailList()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### IdLabel

Create an instance: `id_label = client.IdLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### IdMember

Create an instance: `id_member = client.IdMember()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Label

Create an instance: `label = client.Label()`

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
| `id` | `str` |  |

#### Example: Load

```python
label = client.Label().load({"id": "label_id"})
```

#### Example: Create

```python
label = client.Label().create({
    "color": "example_color",  # str
    "id_board": "example_id_board",  # str
    "name": "example_name",  # str
})
```


### List

Create an instance: `list = client.List()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
list = client.List().load({"id": "list_id"})
```

#### Example: Create

```python
list = client.List().create({
    "id_board": "example_id_board",  # str
    "name": "example_name",  # str
})
```


### Member

Create an instance: `member = client.Member()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `aaEmail` | `str` |  |
| `aaEnrolledDate` | `str` |  |
| `aaId` | `str` |  |
| `activityBlocked` | `bool` |  |
| `avatarHash` | `str` |  |
| `avatarSource` | `str` |  |
| `avatarUrl` | `str` |  |
| `bio` | `str` |  |
| `bioData` | `dict` |  |
| `confirmed` | `bool` |  |
| `email` | `str` |  |
| `fullName` | `str` |  |
| `gravatarHash` | `str` |  |
| `id` | `str` |  |
| `idBoards` | `list` |  |
| `idBoardsPinned` | `list` |  |
| `idEnterprise` | `str` |  |
| `idEnterprisesAdmin` | `list` |  |
| `idEnterprisesDeactivated` | `list` |  |
| `idMemberReferrer` | `str` |  |
| `idOrganizations` | `list` |  |
| `idPremOrgsAdmin` | `list` |  |
| `initials` | `str` |  |
| `isAaMastered` | `bool` |  |
| `ixUpdate` | `float` |  |
| `limits` | `dict` |  |
| `loginTypes` | `list` |  |
| `marketingOptIn` | `dict` |  |
| `memberType` | `str` |  |
| `messagesDismissed` | `dict` |  |
| `nonPublic` | `dict` | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `list` |  |
| `prefs` | `dict` |  |
| `premiumFeatures` | `list` |  |
| `products` | `list` |  |
| `status` | `str` |  |
| `trophies` | `list` |  |
| `uploadedAvatarHash` | `str` |  |
| `uploadedAvatarUrl` | `str` |  |
| `url` | `str` |  |
| `username` | `str` |  |

#### Example: Load

```python
member = client.Member().load({"id": "member_id"})
```

#### Example: List

```python
members = client.Member().list({"query": "example"})
```

#### Example: Create

```python
member = client.Member().create({
    "id": "example_id",  # str
})
```


### MemberPrivacy

Create an instance: `member_privacy = client.MemberPrivacy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
member_privacy = client.MemberPrivacy().load({"plugin_id": "plugin_id"})
```


### MembersVoted

Create an instance: `members_voted = client.MembersVoted()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
members_voted = client.MembersVoted().load({"card_id": "card_id"})
```


### Membership

Create an instance: `membership = client.Membership()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin` | `bool` |  |
| `collaborator` | `bool` |  |
| `deactivated` | `bool` |  |
| `id` | `str` |  |
| `licensed` | `bool` |  |
| `managed` | `bool` |  |
| `member` | `dict` |  |

#### Example: Load

```python
membership = client.Membership().load({"id": "membership_id", "organization_id": "organization_id"})
```

#### Example: List

```python
memberships = client.Membership().list({"organization_id": "example"})
```


### MostRecent

Create an instance: `most_recent = client.MostRecent()`


### NewBillableGuest

Create an instance: `new_billable_guest = client.NewBillableGuest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
new_billable_guest = client.NewBillableGuest().load({"id": "new_billable_guest_id", "organization_id": "organization_id"})
```


### Notification

Create an instance: `notification = client.Notification()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `dict` |  |
| `card` | `dict` |  |
| `data` | `str` |  |
| `date` | `str` |  |
| `dateRead` | `str` |  |
| `id` | `str` |  |
| `idAction` | `str` |  |
| `idMemberCreator` | `str` |  |
| `reactions` | `list` |  |
| `type` | `str` |  |
| `unread` | `bool` |  |

#### Example: Load

```python
notification = client.Notification().load({"id": "notification_id"})
```

#### Example: List

```python
notifications = client.Notification().list({"member_id": "example"})
```


### NotificationChannelSetting

Create an instance: `notification_channel_setting = client.NotificationChannelSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedKeys` | `list` | Singular key or array of notification keys |
| `channel` | `str` |  |
| `id` | `str` |  |
| `idMember` | `str` |  |

#### Example: Load

```python
notification_channel_setting = client.NotificationChannelSetting().load({"channel": "channel", "member_id": "member_id"})
```

#### Example: List

```python
notification_channel_settings = client.NotificationChannelSetting().list({"member_id": "example"})
```


### NotificationList

Create an instance: `notification_list = client.NotificationList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
notification_list = client.NotificationList().load({"id": "notification_list_id"})
```


### NotificationMemberCreator

Create an instance: `notification_member_creator = client.NotificationMemberCreator()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
notification_member_creator = client.NotificationMemberCreator().load({"id": "notification_member_creator_id"})
```


### NotificationsChannelSetting

Create an instance: `notifications_channel_setting = client.NotificationsChannelSetting()`


### Option

Create an instance: `option = client.Option()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
option = client.Option().load({"id": "option_id", "custom_field_id": "custom_field_id"})
```


### OrgInviteRestrict

Create an instance: `org_invite_restrict = client.OrgInviteRestrict()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Organization

Create an instance: `organization = client.Organization()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateLastActivity` | `str` |  |
| `displayName` | `str` |  |
| `id` | `str` |  |
| `idBoards` | `list` |  |
| `idEnterprise` | `str` |  |
| `memberships` | `list` |  |
| `name` | `str` |  |
| `offering` | `str` |  |
| `prefs` | `dict` |  |
| `premiumFeatures` | `list` |  |
| `url` | `str` |  |

#### Example: Load

```python
organization = client.Organization().load({"id": "organization_id"})
```

#### Example: List

```python
organizations = client.Organization().list({"enterpris_id": "example"})
```

#### Example: Create

```python
organization = client.Organization().create({
    "display_name": "example_display_name",  # str
})
```


### PendingOrganization

Create an instance: `pending_organization = client.PendingOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `str` |  |
| `displayName` | `str` |  |
| `id` | `str` |  |
| `idMember` | `str` |  |
| `logoUrl` | `str` |  |
| `memberRequestor` | `dict` |  |
| `membershipCount` | `float` |  |
| `transferability` | `dict` |  |

#### Example: List

```python
pending_organizations = client.PendingOrganization().list({"enterpris_id": "example"})
```


### Plugin

Create an instance: `plugin = client.Plugin()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
plugin = client.Plugin().load({"id": "plugin_id"})
```

#### Example: List

```python
plugins = client.Plugin().list({"board_id": "example"})
```


### PluginData

Create an instance: `plugin_data = client.PluginData()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```python
plugin_data = client.PluginData().load({"card_id": "card_id"})
```

#### Example: List

```python
plugin_datas = client.PluginData().list({"organization_id": "example"})
```


### PluginListing

Create an instance: `plugin_listing = client.PluginListing()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | The description to show for the given locale |
| `id` | `str` |  |
| `locale` | `str` | The locale that this listing should be displayed for. |
| `name` | `str` | The name to use for the given locale. |
| `overview` | `str` | The overview to show for the given locale. |

#### Example: Create

```python
plugin_listing = client.PluginListing().create({
    "id_plugin": "example_id_plugin",  # str
})
```


### Reaction

Create an instance: `reaction = client.Reaction()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
reaction = client.Reaction().load({"id": "reaction_id", "id_action": "id_action"})
```


### Read

Create an instance: `read = client.Read()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
read = client.Read().create({
})
```


### SavedSearch

Create an instance: `saved_search = client.SavedSearch()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `name` | `str` |  |
| `pos` | `Any` |  |
| `query` | `str` |  |

#### Example: Load

```python
saved_search = client.SavedSearch().load({"id": "saved_search_id", "member_id": "member_id"})
```

#### Example: List

```python
saved_searchs = client.SavedSearch().list({"member_id": "example"})
```

#### Example: Create

```python
saved_search = client.SavedSearch().create({
    "member_id": "example_member_id",  # str
    "name": "example_name",  # str
    "pos": "example_pos",  # Any
    "query": "example_query",  # str
})
```


### Search

Create an instance: `search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Example: List

```python
searchs = client.Search().list({"query": "example"})
```


### ShowSidebar

Create an instance: `show_sidebar = client.ShowSidebar()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarActivity

Create an instance: `show_sidebar_activity = client.ShowSidebarActivity()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarBoardAction

Create an instance: `show_sidebar_board_action = client.ShowSidebarBoardAction()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarMember

Create an instance: `show_sidebar_member = client.ShowSidebarMember()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Sticker

Create an instance: `sticker = client.Sticker()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: Load

```python
sticker = client.Sticker().load({"id": "sticker_id", "card_id": "card_id"})
```


### Tag

Create an instance: `tag = client.Tag()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
tags = client.Tag().list({"organization_id": "example"})
```


### Token

Create an instance: `token = client.Token()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateCreated` | `str` |  |
| `dateExpires` | `str` |  |
| `id` | `str` |  |
| `idMember` | `str` |  |
| `identifier` | `str` |  |
| `permissions` | `list` |  |

#### Example: Load

```python
token = client.Token().load({"id": "token_id"})
```

#### Example: List

```python
tokens = client.Token().list({"member_id": "example"})
```


### TransferrableOrganization

Create an instance: `transferrable_organization = client.TransferrableOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `newBillableMembers` | `list` |  |
| `restrictedMembers` | `list` |  |
| `transferrable` | `bool` |  |

#### Example: Load

```python
transferrable_organization = client.TransferrableOrganization().load({"id": "transferrable_organization_id", "enterpris_id": "enterpris_id"})
```


### TrelloList

Create an instance: `trello_list = client.TrelloList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `dict` |  |
| `closed` | `bool` |  |
| `id` | `str` |  |
| `idBoard` | `str` |  |
| `limits` | `dict` |  |
| `name` | `str` | The name of the list |
| `pos` | `float` |  |
| `softLimit` | `str` |  |
| `subscribed` | `bool` |  |

#### Example: Load

```python
trello_list = client.TrelloList().load({"action_id": "action_id"})
```

#### Example: List

```python
trello_lists = client.TrelloList().list({"board_id": "example"})
```

#### Example: Create

```python
trello_list = client.TrelloList().create({
    "board_id": "example_board_id",  # str
    "name": "example_name",  # str
})
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `callbackURL` | `str` |  |
| `consecutiveFailures` | `float` |  |
| `description` | `str` |  |
| `firstConsecutiveFailDate` | `str` |  |
| `id` | `str` |  |
| `idModel` | `str` |  |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```

#### Example: List

```python
webhooks = client.Webhook().list({"token_id": "example"})
```

#### Example: Create

```python
webhook = client.Webhook().create({
    "callback_url": "example_callback_url",  # str
    "id_model": "example_id_model",  # str
})
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Request/response capture ring buffer for debugging |
| [`idempotency`](#idempotency) | Idempotency keys for safe retries of mutating operations |
| [`metrics`](#metrics) | Statistics capture: per-operation counters and latency |
| [`paging`](#paging) | Pagination signals for list operations |
| [`ratelimit`](#ratelimit) | Client-side rate limiting via a token bucket |
| [`retry`](#retry) | Automatic retry of transient failures with exponential backoff |
| [`test`](#test) | In-memory mock transport for testing without a live server |
| [`timeout`](#timeout) | Per-request timeout with transport abort |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Request/response capture ring buffer for debugging.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency keys for safe retries of mutating operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Statistics capture: per-operation counters and latency.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Pagination signals for list operations.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Client-side rate limiting via a token bucket.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Automatic retry of transient failures with exponential backoff.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Per-request timeout with transport abort.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **DebugFeature**: Request/response capture ring buffer for debugging
- **IdempotencyFeature**: Idempotency keys for safe retries of mutating operations
- **MetricsFeature**: Statistics capture: per-operation counters and latency
- **PagingFeature**: Pagination signals for list operations
- **RatelimitFeature**: Client-side rate limiting via a token bucket
- **RetryFeature**: Automatic retry of transient failures with exponential backoff
- **TestFeature**: In-memory mock transport for testing without a live server
- **TimeoutFeature**: Per-request timeout with transport abort

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── trello_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`trello_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
boardstar = client.BoardStar()
boardstar.list()

# boardstar.data_get() now returns the boardstar data from the last list
# boardstar.match_get() returns the last match criteria
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
