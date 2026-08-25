# Trello Python SDK Reference

Complete API reference for the Trello Python SDK.


## TrelloSDK

### Constructor

```python
from trello_sdk import TrelloSDK

client = TrelloSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TrelloSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = TrelloSDK.test()
```


### Instance Methods

#### `Action(data=None)`

Create a new `ActionEntity` instance. Pass `None` for no initial data.

#### `ActionReactionsSummary(data=None)`

Create a new `ActionReactionsSummaryEntity` instance. Pass `None` for no initial data.

#### `Admin(data=None)`

Create a new `AdminEntity` instance. Pass `None` for no initial data.

#### `Application(data=None)`

Create a new `ApplicationEntity` instance. Pass `None` for no initial data.

#### `ApplicationCompliance(data=None)`

Create a new `ApplicationComplianceEntity` instance. Pass `None` for no initial data.

#### `AssociatedDomain(data=None)`

Create a new `AssociatedDomainEntity` instance. Pass `None` for no initial data.

#### `Attachment(data=None)`

Create a new `AttachmentEntity` instance. Pass `None` for no initial data.

#### `Batch(data=None)`

Create a new `BatchEntity` instance. Pass `None` for no initial data.

#### `Board(data=None)`

Create a new `BoardEntity` instance. Pass `None` for no initial data.

#### `BoardBackground(data=None)`

Create a new `BoardBackgroundEntity` instance. Pass `None` for no initial data.

#### `BoardPlugin(data=None)`

Create a new `BoardPluginEntity` instance. Pass `None` for no initial data.

#### `BoardStar(data=None)`

Create a new `BoardStarEntity` instance. Pass `None` for no initial data.

#### `Bulk(data=None)`

Create a new `BulkEntity` instance. Pass `None` for no initial data.

#### `Card(data=None)`

Create a new `CardEntity` instance. Pass `None` for no initial data.

#### `CardCheckItemState(data=None)`

Create a new `CardCheckItemStateEntity` instance. Pass `None` for no initial data.

#### `CardList(data=None)`

Create a new `CardListEntity` instance. Pass `None` for no initial data.

#### `CheckItem(data=None)`

Create a new `CheckItemEntity` instance. Pass `None` for no initial data.

#### `Checklist(data=None)`

Create a new `ChecklistEntity` instance. Pass `None` for no initial data.

#### `ClaimableOrganization(data=None)`

Create a new `ClaimableOrganizationEntity` instance. Pass `None` for no initial data.

#### `CustomBoardBackground(data=None)`

Create a new `CustomBoardBackgroundEntity` instance. Pass `None` for no initial data.

#### `CustomEmoji(data=None)`

Create a new `CustomEmojiEntity` instance. Pass `None` for no initial data.

#### `CustomField(data=None)`

Create a new `CustomFieldEntity` instance. Pass `None` for no initial data.

#### `CustomFieldItem(data=None)`

Create a new `CustomFieldItemEntity` instance. Pass `None` for no initial data.

#### `CustomSticker(data=None)`

Create a new `CustomStickerEntity` instance. Pass `None` for no initial data.

#### `EmailPosition(data=None)`

Create a new `EmailPositionEntity` instance. Pass `None` for no initial data.

#### `Emoji(data=None)`

Create a new `EmojiEntity` instance. Pass `None` for no initial data.

#### `Enterpris(data=None)`

Create a new `EnterprisEntity` instance. Pass `None` for no initial data.

#### `EnterprisSignupUrl(data=None)`

Create a new `EnterprisSignupUrlEntity` instance. Pass `None` for no initial data.

#### `EnterpriseAdmin(data=None)`

Create a new `EnterpriseAdminEntity` instance. Pass `None` for no initial data.

#### `EnterpriseAuditLog(data=None)`

Create a new `EnterpriseAuditLogEntity` instance. Pass `None` for no initial data.

#### `Export(data=None)`

Create a new `ExportEntity` instance. Pass `None` for no initial data.

#### `ExportDownload(data=None)`

Create a new `ExportDownloadEntity` instance. Pass `None` for no initial data.

#### `Generate(data=None)`

Create a new `GenerateEntity` instance. Pass `None` for no initial data.

#### `IdEmailList(data=None)`

Create a new `IdEmailListEntity` instance. Pass `None` for no initial data.

#### `IdLabel(data=None)`

Create a new `IdLabelEntity` instance. Pass `None` for no initial data.

#### `IdMember(data=None)`

Create a new `IdMemberEntity` instance. Pass `None` for no initial data.

#### `Label(data=None)`

Create a new `LabelEntity` instance. Pass `None` for no initial data.

#### `List(data=None)`

Create a new `ListEntity` instance. Pass `None` for no initial data.

#### `Member(data=None)`

Create a new `MemberEntity` instance. Pass `None` for no initial data.

#### `MemberPrivacy(data=None)`

Create a new `MemberPrivacyEntity` instance. Pass `None` for no initial data.

#### `MembersVoted(data=None)`

Create a new `MembersVotedEntity` instance. Pass `None` for no initial data.

#### `Membership(data=None)`

Create a new `MembershipEntity` instance. Pass `None` for no initial data.

#### `MostRecent(data=None)`

Create a new `MostRecentEntity` instance. Pass `None` for no initial data.

#### `NewBillableGuest(data=None)`

Create a new `NewBillableGuestEntity` instance. Pass `None` for no initial data.

#### `Notification(data=None)`

Create a new `NotificationEntity` instance. Pass `None` for no initial data.

#### `NotificationChannelSetting(data=None)`

Create a new `NotificationChannelSettingEntity` instance. Pass `None` for no initial data.

#### `NotificationList(data=None)`

Create a new `NotificationListEntity` instance. Pass `None` for no initial data.

#### `NotificationMemberCreator(data=None)`

Create a new `NotificationMemberCreatorEntity` instance. Pass `None` for no initial data.

#### `NotificationsChannelSetting(data=None)`

Create a new `NotificationsChannelSettingEntity` instance. Pass `None` for no initial data.

#### `Option(data=None)`

Create a new `OptionEntity` instance. Pass `None` for no initial data.

#### `OrgInviteRestrict(data=None)`

Create a new `OrgInviteRestrictEntity` instance. Pass `None` for no initial data.

#### `Organization(data=None)`

Create a new `OrganizationEntity` instance. Pass `None` for no initial data.

#### `PendingOrganization(data=None)`

Create a new `PendingOrganizationEntity` instance. Pass `None` for no initial data.

#### `Plugin(data=None)`

Create a new `PluginEntity` instance. Pass `None` for no initial data.

#### `PluginData(data=None)`

Create a new `PluginDataEntity` instance. Pass `None` for no initial data.

#### `PluginListing(data=None)`

Create a new `PluginListingEntity` instance. Pass `None` for no initial data.

#### `Reaction(data=None)`

Create a new `ReactionEntity` instance. Pass `None` for no initial data.

#### `Read(data=None)`

Create a new `ReadEntity` instance. Pass `None` for no initial data.

#### `SavedSearch(data=None)`

Create a new `SavedSearchEntity` instance. Pass `None` for no initial data.

#### `Search(data=None)`

Create a new `SearchEntity` instance. Pass `None` for no initial data.

#### `ShowSidebar(data=None)`

Create a new `ShowSidebarEntity` instance. Pass `None` for no initial data.

#### `ShowSidebarActivity(data=None)`

Create a new `ShowSidebarActivityEntity` instance. Pass `None` for no initial data.

#### `ShowSidebarBoardAction(data=None)`

Create a new `ShowSidebarBoardActionEntity` instance. Pass `None` for no initial data.

#### `ShowSidebarMember(data=None)`

Create a new `ShowSidebarMemberEntity` instance. Pass `None` for no initial data.

#### `Sticker(data=None)`

Create a new `StickerEntity` instance. Pass `None` for no initial data.

#### `Tag(data=None)`

Create a new `TagEntity` instance. Pass `None` for no initial data.

#### `Token(data=None)`

Create a new `TokenEntity` instance. Pass `None` for no initial data.

#### `TransferrableOrganization(data=None)`

Create a new `TransferrableOrganizationEntity` instance. Pass `None` for no initial data.

#### `TrelloList(data=None)`

Create a new `TrelloListEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ActionEntity

```python
action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `dict` | No |  |
| `date` | `str` | No |  |
| `display` | `dict` | No |  |
| `id` | `str` | No |  |
| `idMemberCreator` | `str` | No |  |
| `limits` | `dict` | No |  |
| `memberCreator` | `dict` | No |  |
| `native` | `str` | No | The emoji to add as a native unicode emoji. |
| `shortName` | `str` | No | The primary `shortName` of the emoji to add. |
| `skinVariation` | `str` | No | The `skinVariation` of the emoji to add. |
| `type` | `str` | No |  |
| `unified` | `str` | No | The `unified` value of the emoji to add. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Action().create({
    "id_action": "example_id_action",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Action().list({"card_id": "example"})
for action in results:
    print(action)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Action().load({"id": "action_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Action().remove({"id": "action_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Action().update({
    "id": "action_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ActionReactionsSummaryEntity

```python
action_reactions_summary = client.ActionReactionsSummary()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ActionReactionsSummary().load({"id_action": "id_action"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionReactionsSummaryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AdminEntity

```python
admin = client.Admin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Admin().remove({"enterpris_id": "enterpris_id", "id": "id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Admin().update({
    "enterpris_id": "enterpris_id",
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationEntity

```python
application = client.Application()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApplicationComplianceEntity

```python
application_compliance = client.ApplicationCompliance()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ApplicationCompliance().load({"key": "key"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationComplianceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssociatedDomainEntity

```python
associated_domain = client.AssociatedDomain()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AssociatedDomain().remove({"organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedDomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AttachmentEntity

```python
attachment = client.Attachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Attachment().list({"card_id": "example"})
for attachment in results:
    print(attachment)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Attachment().load({"id": "attachment_id", "card_id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Attachment().remove({"id": "attachment_id", "card_id": "card_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchEntity

```python
batch = client.Batch()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Batch().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardEntity

```python
board = client.Board()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed` | `bool` | No |  |
| `creationMethod` | `str` | No |  |
| `dateLastActivity` | `str` | No |  |
| `dateLastView` | `str` | No |  |
| `datePluginDisable` | `str` | No |  |
| `desc` | `str` | No |  |
| `descData` | `str` | No |  |
| `enterpriseOwned` | `bool` | No |  |
| `fullName` | `str` | No | The full name of the user to as a member of the board. |
| `id` | `str` | Yes |  |
| `idMemberCreator` | `str` | No |  |
| `idOrganization` | `str` | No |  |
| `idTags` | `str` | No |  |
| `ixUpdate` | `int` | No |  |
| `labelNames` | `dict` | No |  |
| `limits` | `dict` | No |  |
| `memberships` | `str` | No |  |
| `name` | `str` | No | The name of the board. |
| `pinned` | `bool` | No |  |
| `powerUps` | `str` | No |  |
| `prefs` | `dict` | No |  |
| `shortLink` | `str` | No |  |
| `shortUrl` | `str` | No |  |
| `starred` | `bool` | No |  |
| `subscribed` | `bool` | No |  |
| `templateGallery` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Board().create({
    "id": "example_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Board().list({"member_id": "example"})
for board in results:
    print(board)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Board().load({"id": "board_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Board().remove({"id": "board_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Board().update({
    "id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardBackgroundEntity

```python
board_background = client.BoardBackground()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BoardBackground().create({
    "member_id": "example_member_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BoardBackground().list({"member_id": "example"})
for board_background in results:
    print(board_background)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BoardBackground().load({"id": "board_background_id", "member_id": "member_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BoardBackground().remove({"id": "board_background_id", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BoardBackground().update({
    "id": "board_background_id",
    "member_id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardBackgroundEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardPluginEntity

```python
board_plugin = client.BoardPlugin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BoardPlugin().remove({"board_id": "board_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardPluginEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BoardStarEntity

```python
board_star = client.BoardStar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `idBoard` | `str` | No |  |
| `pos` | `int` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BoardStar().create({
    "member_id": "example_member_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.BoardStar().list({"id": "example_id"})
for board_star in results:
    print(board_star)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.BoardStar().load({"id": "board_star_id", "member_id": "member_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.BoardStar().remove({"id": "board_star_id", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.BoardStar().update({
    "id": "board_star_id",
    "member_id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardStarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BulkEntity

```python
bulk = client.Bulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Bulk().load({"id": [], "enterpris_id": "enterpris_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Bulk().update({
    "id": "bulk_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CardEntity

```python
card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `str` | No |  |
| `badges` | `dict` | No |  |
| `cardRole` | `str` | No |  |
| `checkItemStates` | `list` | No |  |
| `closed` | `bool` | No |  |
| `coordinates` | `str` | No |  |
| `cover` | `dict` | No |  |
| `creationMethod` | `str` | No |  |
| `customFieldItems` | `list` | No | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `str` | No |  |
| `desc` | `str` | No |  |
| `descData` | `dict` | No |  |
| `due` | `str` | No |  |
| `dueReminder` | `str` | No |  |
| `id` | `str` | No |  |
| `idAttachmentCover` | `str` | No |  |
| `idBoard` | `str` | No |  |
| `idChecklists` | `list` | No |  |
| `idLabels` | `list` | No |  |
| `idList` | `str` | No |  |
| `idMembers` | `list` | No |  |
| `idMembersVoted` | `list` | No |  |
| `idShort` | `int` | No |  |
| `labels` | `list` | No |  |
| `limits` | `dict` | No |  |
| `locationName` | `str` | No |  |
| `manualCoverAttachment` | `bool` | No |  |
| `mirrorSourceId` | `str` | No |  |
| `name` | `str` | No |  |
| `pos` | `float` | No |  |
| `shortLink` | `str` | No |  |
| `shortUrl` | `str` | No |  |
| `subscribed` | `bool` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Card().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Card().list({"action_id": "example"})
for card in results:
    print(card)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Card().load({"id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Card().remove({"id": "card_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Card().update({
    "id": "card_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CardCheckItemStateEntity

```python
card_check_item_state = client.CardCheckItemState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CardCheckItemState().load({"id": "card_check_item_state_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardCheckItemStateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CardListEntity

```python
card_list = client.CardList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CardList().load({"id": "card_list_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CheckItemEntity

```python
check_item = client.CheckItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `idChecklist` | `str` | No |  |
| `name` | `str` | No |  |
| `nameData` | `str` | No |  |
| `pos` | `str` | No |  |
| `state` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CheckItem().load({"id": "check_item_id", "card_id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CheckItem().remove({"id": "check_item_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CheckItem().update({
    "id": "check_item_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ChecklistEntity

```python
checklist = client.Checklist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Checklist().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Checklist().load({"id": "checklist_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Checklist().remove({"id": "checklist_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Checklist().update({
    "id": "checklist_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChecklistEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ClaimableOrganizationEntity

```python
claimable_organization = client.ClaimableOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeMembershipCount` | `float` | No |  |
| `dateLastActive` | `str` | No | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `str` | No |  |
| `id` | `str` | No |  |
| `idActiveAdmins` | `list` | No |  |
| `logoUrl` | `str` | No |  |
| `name` | `str` | No |  |
| `products` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ClaimableOrganization().list({"enterpris_id": "example"})
for claimable_organization in results:
    print(claimable_organization)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimableOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomBoardBackgroundEntity

```python
custom_board_background = client.CustomBoardBackground()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomBoardBackground().remove({"id": "id", "member_id": "member_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomBoardBackgroundEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomEmojiEntity

```python
custom_emoji = client.CustomEmoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomEmoji().create({
    "member_id": "example_member_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomEmoji().list({"member_id": "example"})
for custom_emoji in results:
    print(custom_emoji)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomEmoji().load({"id": "custom_emoji_id", "member_id": "member_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomEmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldEntity

```python
custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cardFront` | `bool` | No |  |
| `display` | `dict` | No |  |
| `display_cardFront` | `bool` | No | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | No | Whether to display this custom field on the front of cards |
| `fieldGroup` | `str` | No |  |
| `id` | `str` | No |  |
| `idModel` | `str` | Yes | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `str` | Yes | The type of model that the Custom Field is being defined on. |
| `name` | `str` | No | The name of the Custom Field |
| `options` | `list` | No | If the type is `checkbox` |
| `pos` | `str` | No |  |
| `type` | `str` | Yes | The type of Custom Field to create. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `cardFront` | - | - | - | - | - |
| `display` | - | - | - | - | - |
| `display_cardFront` | - | - | - | - | - |
| `displaycardFront` | - | - | - | - | - |
| `fieldGroup` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `idModel` | - | Yes | - | - | - |
| `modelType` | - | Yes | - | - | - |
| `name` | - | - | Yes | - | - |
| `options` | - | - | - | - | - |
| `pos` | - | - | Yes | - | - |
| `type` | - | Yes | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomField().create({
    "idModel": "example_idModel",  # str
    "modelType": "example_modelType",  # str
    "type": "example_type",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomField().list({"board_id": "example"})
for custom_field in results:
    print(custom_field)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomField().load({"id": "custom_field_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomField().remove({"id": "custom_field_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.CustomField().update({
    "id": "custom_field_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomFieldItemEntity

```python
custom_field_item = client.CustomFieldItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `idCustomField` | `str` | No |  |
| `idModel` | `str` | No |  |
| `modelType` | `str` | No |  |
| `value` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomFieldItem().list({"card_id": "example"})
for custom_field_item in results:
    print(custom_field_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CustomStickerEntity

```python
custom_sticker = client.CustomSticker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `scaled` | `list` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CustomSticker().create({
    "member_id": "example_member_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.CustomSticker().list({"member_id": "example"})
for custom_sticker in results:
    print(custom_sticker)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.CustomSticker().load({"id": "custom_sticker_id", "member_id": "member_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.CustomSticker().remove({"id": "custom_sticker_id", "member_id": "member_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomStickerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailPositionEntity

```python
email_position = client.EmailPosition()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EmailPosition().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailPositionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmojiEntity

```python
emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `str` | No |  |
| `keywords` | `list` | No |  |
| `name` | `str` | No |  |
| `native` | `str` | No |  |
| `sheetX` | `float` | No |  |
| `sheetY` | `float` | No |  |
| `shortName` | `str` | No |  |
| `shortNames` | `list` | No |  |
| `text` | `str` | No |  |
| `texts` | `str` | No |  |
| `tts` | `str` | No |  |
| `unified` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Emoji().list()
for emoji in results:
    print(emoji)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterprisEntity

```python
enterpris = client.Enterpris()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `str` | No |  |
| `displayName` | `str` | No |  |
| `domains` | `list` | No |  |
| `enterpriseDomains` | `list` | No |  |
| `id` | `str` | No |  |
| `idAdmins` | `list` | No |  |
| `idOrganizations` | `list` | No |  |
| `idp` | `dict` | No |  |
| `isRealEnterprise` | `bool` | No |  |
| `licenses` | `dict` | No |  |
| `logoHash` | `str` | No |  |
| `logoUrl` | `str` | No |  |
| `name` | `str` | No |  |
| `organizationPrefs` | `dict` | No |  |
| `pluginWhitelistingEnabled` | `list` | No |  |
| `prefs` | `dict` | No |  |
| `products` | `list` | No |  |
| `ssoActivationFailed` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Enterpris().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Enterpris().load({"id": "enterpris_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Enterpris().update({
    "id": "enterpris_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterprisEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterprisSignupUrlEntity

```python
enterpris_signup_url = client.EnterprisSignupUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `signupUrl` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EnterprisSignupUrl().load({"id": "enterpris_signup_url_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterprisSignupUrlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseAdminEntity

```python
enterprise_admin = client.EnterpriseAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullName` | `str` | No |  |
| `id` | `str` | No |  |
| `username` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EnterpriseAdmin().load({"enterpris_id": "enterpris_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAdminEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnterpriseAuditLogEntity

```python
enterprise_audit_log = client.EnterpriseAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | No |  |
| `idAction` | `str` | No |  |
| `member` | `dict` | No |  |
| `memberCreator` | `dict` | No |  |
| `organization` | `dict` | No |  |
| `type` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnterpriseAuditLog().list({"enterpris_id": "example"})
for enterprise_audit_log in results:
    print(enterprise_audit_log)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAuditLogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExportEntity

```python
export = client.Export()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attempts` | `float` | No |  |
| `exportUrl` | `str` | No |  |
| `finished` | `bool` | No |  |
| `id` | `str` | No |  |
| `size` | `str` | No |  |
| `stage` | `str` | No |  |
| `startedAt` | `str` | No |  |
| `status` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Export().create({
    "board_id": "example_board_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Export().list({"organization_id": "example"})
for export in results:
    print(export)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Export().load({"id": "export_id", "board_id": "board_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Export().remove({"id": "export_id", "board_id": "board_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ExportDownloadEntity

```python
export_download = client.ExportDownload()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ExportDownload().load({"board_id": "board_id", "id_export": "id_export"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportDownloadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GenerateEntity

```python
generate = client.Generate()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Generate().create({
    "board_id": "example_board_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdEmailListEntity

```python
id_email_list = client.IdEmailList()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.IdEmailList().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdEmailListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdLabelEntity

```python
id_label = client.IdLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IdLabel().remove({"card_id": "card_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdLabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## IdMemberEntity

```python
id_member = client.IdMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.IdMember().remove({"card_id": "card_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LabelEntity

```python
label = client.Label()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Label().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Label().load({"id": "label_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Label().remove({"id": "label_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Label().update({
    "id": "label_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListEntity

```python
list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.List().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.List().load({"id": "list_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.List().update({
    "id": "list_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberEntity

```python
member = client.Member()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aaEmail` | `str` | No |  |
| `aaEnrolledDate` | `str` | No |  |
| `aaId` | `str` | No |  |
| `activityBlocked` | `bool` | No |  |
| `avatarHash` | `str` | No |  |
| `avatarSource` | `str` | No |  |
| `avatarUrl` | `str` | No |  |
| `bio` | `str` | No |  |
| `bioData` | `dict` | No |  |
| `confirmed` | `bool` | No |  |
| `email` | `str` | No |  |
| `fullName` | `str` | No |  |
| `gravatarHash` | `str` | No |  |
| `id` | `str` | No |  |
| `idBoards` | `list` | No |  |
| `idBoardsPinned` | `list` | No |  |
| `idEnterprise` | `str` | No |  |
| `idEnterprisesAdmin` | `list` | No |  |
| `idEnterprisesDeactivated` | `list` | No |  |
| `idMemberReferrer` | `str` | No |  |
| `idOrganizations` | `list` | No |  |
| `idPremOrgsAdmin` | `list` | No |  |
| `initials` | `str` | No |  |
| `isAaMastered` | `bool` | No |  |
| `ixUpdate` | `float` | No |  |
| `limits` | `dict` | No |  |
| `loginTypes` | `list` | No |  |
| `marketingOptIn` | `dict` | No |  |
| `memberType` | `str` | No |  |
| `messagesDismissed` | `dict` | No |  |
| `nonPublic` | `dict` | No | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | No | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `list` | No |  |
| `prefs` | `dict` | No |  |
| `premiumFeatures` | `list` | No |  |
| `products` | `list` | No |  |
| `status` | `str` | No |  |
| `trophies` | `list` | No |  |
| `uploadedAvatarHash` | `str` | No |  |
| `uploadedAvatarUrl` | `str` | No |  |
| `url` | `str` | No |  |
| `username` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Member().create({
    "id": "example_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Member().list()
for member in results:
    print(member)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Member().load({"id": "member_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Member().remove({"id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Member().update({
    "id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MemberPrivacyEntity

```python
member_privacy = client.MemberPrivacy()
```

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MemberPrivacy().load({"plugin_id": "plugin_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberPrivacyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MembersVotedEntity

```python
members_voted = client.MembersVoted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.MembersVoted().load({"card_id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.MembersVoted().remove({"card_id": "card_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembersVotedEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MembershipEntity

```python
membership = client.Membership()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | `bool` | No |  |
| `collaborator` | `bool` | No |  |
| `deactivated` | `bool` | No |  |
| `id` | `str` | No |  |
| `licensed` | `bool` | No |  |
| `managed` | `bool` | No |  |
| `member` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Membership().list({"organization_id": "example"})
for membership in results:
    print(membership)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Membership().load({"id": "membership_id", "organization_id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Membership().update({
    "id": "membership_id",
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembershipEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MostRecentEntity

```python
most_recent = client.MostRecent()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MostRecentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NewBillableGuestEntity

```python
new_billable_guest = client.NewBillableGuest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NewBillableGuest().load({"id": "new_billable_guest_id", "organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewBillableGuestEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationEntity

```python
notification = client.Notification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `dict` | Yes |  |
| `card` | `dict` | No |  |
| `data` | `str` | No |  |
| `date` | `str` | No |  |
| `dateRead` | `str` | No |  |
| `id` | `str` | No |  |
| `idAction` | `str` | No |  |
| `idMemberCreator` | `str` | No |  |
| `reactions` | `list` | No |  |
| `type` | `str` | No |  |
| `unread` | `bool` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Notification().list({"member_id": "example"})
for notification in results:
    print(notification)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Notification().load({"id": "notification_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Notification().update({
    "id": "notification_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationChannelSettingEntity

```python
notification_channel_setting = client.NotificationChannelSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedKeys` | `list` | No | Singular key or array of notification keys |
| `channel` | `str` | No |  |
| `id` | `str` | No |  |
| `idMember` | `str` | No |  |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `blockedKeys` | - | - | Yes |
| `channel` | - | - | Yes |
| `id` | - | - | - |
| `idMember` | - | - | - |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.NotificationChannelSetting().list({"member_id": "example"})
for notification_channel_setting in results:
    print(notification_channel_setting)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NotificationChannelSetting().load({"channel": "channel", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.NotificationChannelSetting().update({
    "channel": "channel",
    "member_id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationChannelSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationListEntity

```python
notification_list = client.NotificationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NotificationList().load({"id": "notification_list_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationMemberCreatorEntity

```python
notification_member_creator = client.NotificationMemberCreator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.NotificationMemberCreator().load({"id": "notification_member_creator_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationMemberCreatorEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## NotificationsChannelSettingEntity

```python
notifications_channel_setting = client.NotificationsChannelSetting()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationsChannelSettingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OptionEntity

```python
option = client.Option()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Option().load({"id": "option_id", "custom_field_id": "custom_field_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Option().remove({"id": "option_id", "custom_field_id": "custom_field_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrgInviteRestrictEntity

```python
org_invite_restrict = client.OrgInviteRestrict()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.OrgInviteRestrict().remove({"organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgInviteRestrictEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OrganizationEntity

```python
organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateLastActivity` | `str` | No |  |
| `displayName` | `str` | No |  |
| `id` | `str` | No |  |
| `idBoards` | `list` | No |  |
| `idEnterprise` | `str` | No |  |
| `memberships` | `list` | No |  |
| `name` | `str` | No |  |
| `offering` | `str` | No |  |
| `prefs` | `dict` | No |  |
| `premiumFeatures` | `list` | No |  |
| `url` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Organization().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Organization().list({"enterpris_id": "example"})
for organization in results:
    print(organization)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Organization().load({"id": "organization_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Organization().remove({"id": "organization_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Organization().update({
    "id": "organization_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PendingOrganizationEntity

```python
pending_organization = client.PendingOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `str` | No |  |
| `displayName` | `str` | No |  |
| `id` | `str` | No |  |
| `idMember` | `str` | No |  |
| `logoUrl` | `str` | No |  |
| `memberRequestor` | `dict` | No |  |
| `membershipCount` | `float` | No |  |
| `transferability` | `dict` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PendingOrganization().list({"enterpris_id": "example"})
for pending_organization in results:
    print(pending_organization)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PendingOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PluginEntity

```python
plugin = client.Plugin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Plugin().list({"board_id": "example"})
for plugin in results:
    print(plugin)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Plugin().load({"id": "plugin_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Plugin().update({
    "id": "plugin_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PluginDataEntity

```python
plugin_data = client.PluginData()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PluginData().list({"organization_id": "example"})
for plugin_data in results:
    print(plugin_data)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PluginData().load({"card_id": "card_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginDataEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PluginListingEntity

```python
plugin_listing = client.PluginListing()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | The description to show for the given locale |
| `id` | `str` | No |  |
| `locale` | `str` | No | The locale that this listing should be displayed for. |
| `name` | `str` | No | The name to use for the given locale. |
| `overview` | `str` | No | The overview to show for the given locale. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PluginListing().create({
    "id_plugin": "example_id_plugin",  # str
})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.PluginListing().update({
    "id": "id",
    "id_plugin": "id_plugin",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginListingEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReactionEntity

```python
reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Reaction().load({"id": "reaction_id", "id_action": "id_action"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Reaction().remove({"id": "reaction_id", "id_action": "id_action"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReadEntity

```python
read = client.Read()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Read().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReadEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SavedSearchEntity

```python
saved_search = client.SavedSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `name` | `str` | No |  |
| `pos` | `Any` | No |  |
| `query` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.SavedSearch().create({
    "member_id": "example_member_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.SavedSearch().list({"member_id": "example"})
for saved_search in results:
    print(saved_search)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.SavedSearch().load({"id": "saved_search_id", "member_id": "member_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.SavedSearch().remove({"id": "saved_search_id", "member_id": "member_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.SavedSearch().update({
    "id": "saved_search_id",
    "member_id": "member_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedSearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SearchEntity

```python
search = client.Search()
```

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Search().list()
for search in results:
    print(search)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShowSidebarEntity

```python
show_sidebar = client.ShowSidebar()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ShowSidebar().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShowSidebarActivityEntity

```python
show_sidebar_activity = client.ShowSidebarActivity()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ShowSidebarActivity().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarActivityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShowSidebarBoardActionEntity

```python
show_sidebar_board_action = client.ShowSidebarBoardAction()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ShowSidebarBoardAction().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarBoardActionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ShowSidebarMemberEntity

```python
show_sidebar_member = client.ShowSidebarMember()
```

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.ShowSidebarMember().update({
    "board_id": "board_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarMemberEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StickerEntity

```python
sticker = client.Sticker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Sticker().load({"id": "sticker_id", "card_id": "card_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Sticker().remove({"id": "sticker_id", "card_id": "card_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Sticker().update({
    "id": "sticker_id",
    "card_id": "card_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StickerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TagEntity

```python
tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Tag().list({"organization_id": "example"})
for tag in results:
    print(tag)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Tag().remove({"id": "id", "organization_id": "organization_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TokenEntity

```python
token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateCreated` | `str` | No |  |
| `dateExpires` | `str` | No |  |
| `id` | `str` | No |  |
| `idMember` | `str` | No |  |
| `identifier` | `str` | No |  |
| `permissions` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Token().list({"member_id": "example"})
for token in results:
    print(token)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Token().load({"id": "token_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Token().remove({"id": "token_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TransferrableOrganizationEntity

```python
transferrable_organization = client.TransferrableOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |
| `newBillableMembers` | `list` | No |  |
| `restrictedMembers` | `list` | No |  |
| `transferrable` | `bool` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TransferrableOrganization().load({"id": "transferrable_organization_id", "enterpris_id": "enterpris_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferrableOrganizationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TrelloListEntity

```python
trello_list = client.TrelloList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `dict` | No |  |
| `closed` | `bool` | No |  |
| `id` | `str` | No |  |
| `idBoard` | `str` | No |  |
| `limits` | `dict` | No |  |
| `name` | `str` | No | The name of the list |
| `pos` | `float` | No |  |
| `softLimit` | `str` | No |  |
| `subscribed` | `bool` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.TrelloList().create({
    "board_id": "example_board_id",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.TrelloList().list({"board_id": "example"})
for trello_list in results:
    print(trello_list)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.TrelloList().load({"action_id": "action_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrelloListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `callbackURL` | `str` | No |  |
| `consecutiveFailures` | `float` | No |  |
| `description` | `str` | No |  |
| `firstConsecutiveFailDate` | `str` | No |  |
| `id` | `str` | No |  |
| `idModel` | `str` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Webhook().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webhook().list({"token_id": "example"})
for webhook in results:
    print(webhook)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "webhook_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Webhook().update({
    "id": "webhook_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = TrelloSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

