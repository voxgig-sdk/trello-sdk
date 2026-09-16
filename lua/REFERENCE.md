# Trello Lua SDK Reference

Complete API reference for the Trello Lua SDK.


## TrelloSDK

### Constructor

```lua
local sdk = require("trello_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Action(data)`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `ActionReactionsSummary(data)`

Create a new `ActionReactionsSummary` entity instance. Pass `nil` for no initial data.

#### `Admin(data)`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `Application(data)`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `ApplicationCompliance(data)`

Create a new `ApplicationCompliance` entity instance. Pass `nil` for no initial data.

#### `AssociatedDomain(data)`

Create a new `AssociatedDomain` entity instance. Pass `nil` for no initial data.

#### `Attachment(data)`

Create a new `Attachment` entity instance. Pass `nil` for no initial data.

#### `Batch(data)`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `Board(data)`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `BoardBackground(data)`

Create a new `BoardBackground` entity instance. Pass `nil` for no initial data.

#### `BoardPlugin(data)`

Create a new `BoardPlugin` entity instance. Pass `nil` for no initial data.

#### `BoardStar(data)`

Create a new `BoardStar` entity instance. Pass `nil` for no initial data.

#### `Bulk(data)`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `Card(data)`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `CardCheckItemState(data)`

Create a new `CardCheckItemState` entity instance. Pass `nil` for no initial data.

#### `CardList(data)`

Create a new `CardList` entity instance. Pass `nil` for no initial data.

#### `CheckItem(data)`

Create a new `CheckItem` entity instance. Pass `nil` for no initial data.

#### `Checklist(data)`

Create a new `Checklist` entity instance. Pass `nil` for no initial data.

#### `ClaimableOrganization(data)`

Create a new `ClaimableOrganization` entity instance. Pass `nil` for no initial data.

#### `CustomBoardBackground(data)`

Create a new `CustomBoardBackground` entity instance. Pass `nil` for no initial data.

#### `CustomEmoji(data)`

Create a new `CustomEmoji` entity instance. Pass `nil` for no initial data.

#### `CustomField(data)`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldItem(data)`

Create a new `CustomFieldItem` entity instance. Pass `nil` for no initial data.

#### `CustomSticker(data)`

Create a new `CustomSticker` entity instance. Pass `nil` for no initial data.

#### `EmailPosition(data)`

Create a new `EmailPosition` entity instance. Pass `nil` for no initial data.

#### `Emoji(data)`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `Enterpris(data)`

Create a new `Enterpris` entity instance. Pass `nil` for no initial data.

#### `EnterprisSignupUrl(data)`

Create a new `EnterprisSignupUrl` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAdmin(data)`

Create a new `EnterpriseAdmin` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAuditLog(data)`

Create a new `EnterpriseAuditLog` entity instance. Pass `nil` for no initial data.

#### `Export(data)`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `ExportDownload(data)`

Create a new `ExportDownload` entity instance. Pass `nil` for no initial data.

#### `Generate(data)`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `IdEmailList(data)`

Create a new `IdEmailList` entity instance. Pass `nil` for no initial data.

#### `IdLabel(data)`

Create a new `IdLabel` entity instance. Pass `nil` for no initial data.

#### `IdMember(data)`

Create a new `IdMember` entity instance. Pass `nil` for no initial data.

#### `Label(data)`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `List(data)`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `MemberPrivacy(data)`

Create a new `MemberPrivacy` entity instance. Pass `nil` for no initial data.

#### `MembersVoted(data)`

Create a new `MembersVoted` entity instance. Pass `nil` for no initial data.

#### `Membership(data)`

Create a new `Membership` entity instance. Pass `nil` for no initial data.

#### `MostRecent(data)`

Create a new `MostRecent` entity instance. Pass `nil` for no initial data.

#### `NewBillableGuest(data)`

Create a new `NewBillableGuest` entity instance. Pass `nil` for no initial data.

#### `Notification(data)`

Create a new `Notification` entity instance. Pass `nil` for no initial data.

#### `NotificationChannelSetting(data)`

Create a new `NotificationChannelSetting` entity instance. Pass `nil` for no initial data.

#### `NotificationList(data)`

Create a new `NotificationList` entity instance. Pass `nil` for no initial data.

#### `NotificationMemberCreator(data)`

Create a new `NotificationMemberCreator` entity instance. Pass `nil` for no initial data.

#### `NotificationsChannelSetting(data)`

Create a new `NotificationsChannelSetting` entity instance. Pass `nil` for no initial data.

#### `Option(data)`

Create a new `Option` entity instance. Pass `nil` for no initial data.

#### `OrgInviteRestrict(data)`

Create a new `OrgInviteRestrict` entity instance. Pass `nil` for no initial data.

#### `Organization(data)`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `PendingOrganization(data)`

Create a new `PendingOrganization` entity instance. Pass `nil` for no initial data.

#### `Plugin(data)`

Create a new `Plugin` entity instance. Pass `nil` for no initial data.

#### `PluginData(data)`

Create a new `PluginData` entity instance. Pass `nil` for no initial data.

#### `PluginListing(data)`

Create a new `PluginListing` entity instance. Pass `nil` for no initial data.

#### `Reaction(data)`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Read(data)`

Create a new `Read` entity instance. Pass `nil` for no initial data.

#### `SavedSearch(data)`

Create a new `SavedSearch` entity instance. Pass `nil` for no initial data.

#### `Search(data)`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `ShowSidebar(data)`

Create a new `ShowSidebar` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarActivity(data)`

Create a new `ShowSidebarActivity` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarBoardAction(data)`

Create a new `ShowSidebarBoardAction` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarMember(data)`

Create a new `ShowSidebarMember` entity instance. Pass `nil` for no initial data.

#### `Sticker(data)`

Create a new `Sticker` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Token(data)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `TransferrableOrganization(data)`

Create a new `TransferrableOrganization` entity instance. Pass `nil` for no initial data.

#### `TrelloList(data)`

Create a new `TrelloList` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ActionEntity

```lua
local action = client:Action(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `date` | `string` | No |  |
| `display` | `table` | No |  |
| `id` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `limits` | `table` | No |  |
| `memberCreator` | `table` | No |  |
| `native` | `string` | No | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | No | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | No | The `skinVariation` of the emoji to add. |
| `type` | `string` | No |  |
| `unified` | `string` | No | The `unified` value of the emoji to add. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Action():create({
  id_action = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Action():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Action():load({ id = "action_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Action():remove({ id = "action_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Action():update({
  id = "action_id",
  text = "text",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ActionReactionsSummaryEntity

```lua
local action_reactions_summary = client:ActionReactionsSummary(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ActionReactionsSummary():load({ id_action = "id_action" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ActionReactionsSummaryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AdminEntity

```lua
local admin = client:Admin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Admin():remove({ enterpris_id = "enterpris_id", id = "id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Admin():update({
  enterpris_id = "enterpris_id",
  id = "id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationEntity

```lua
local application = client:Application(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ApplicationComplianceEntity

```lua
local application_compliance = client:ApplicationCompliance(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ApplicationCompliance():load({ key = "key" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApplicationComplianceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssociatedDomainEntity

```lua
local associated_domain = client:AssociatedDomain(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AssociatedDomain():remove({ organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedDomainEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AttachmentEntity

```lua
local attachment = client:Attachment(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Attachment():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Attachment():load({ id = "attachment_id", card_id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Attachment():remove({ id = "attachment_id", card_id = "card_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BatchEntity

```lua
local batch = client:Batch(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Batch():load({ url = "url" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardEntity

```lua
local board = client:Board(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed` | `boolean` | No |  |
| `creationMethod` | `string` | No |  |
| `dateLastActivity` | `string` | No |  |
| `dateLastView` | `string` | No |  |
| `datePluginDisable` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `string` | No |  |
| `enterpriseOwned` | `boolean` | No |  |
| `fullName` | `string` | No | The full name of the user to as a member of the board. |
| `id` | `string` | Yes |  |
| `idMemberCreator` | `string` | No |  |
| `idOrganization` | `string` | No |  |
| `idTags` | `string` | No |  |
| `ixUpdate` | `number` | No |  |
| `labelNames` | `table` | No |  |
| `limits` | `table` | No |  |
| `memberships` | `string` | No |  |
| `name` | `string` | No | The name of the board. |
| `pinned` | `boolean` | No |  |
| `powerUps` | `string` | No |  |
| `prefs` | `table` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `starred` | `boolean` | No |  |
| `subscribed` | `boolean` | No |  |
| `templateGallery` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Board():create({
  name = --[[ string ]],
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Board():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Board():load({ id = "board_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Board():remove({ id = "board_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Board():update({
  id = "board_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardBackgroundEntity

```lua
local board_background = client:BoardBackground(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BoardBackground():create({
  member_id = --[[ string ]],
  file = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BoardBackground():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BoardBackground():load({ id = "board_background_id", member_id = "member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BoardBackground():remove({ id = "board_background_id", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BoardBackground():update({
  id = "board_background_id",
  member_id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardBackgroundEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardPluginEntity

```lua
local board_plugin = client:BoardPlugin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BoardPlugin():remove({ board_id = "board_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardPluginEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BoardStarEntity

```lua
local board_star = client:BoardStar(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `pos` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:BoardStar():create({
  member_id = --[[ string ]],
  id_board = --[[ string ]],
  pos = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:BoardStar():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:BoardStar():load({ id = "board_star_id", member_id = "member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:BoardStar():remove({ id = "board_star_id", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:BoardStar():update({
  id = "board_star_id",
  member_id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BoardStarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BulkEntity

```lua
local bulk = client:Bulk(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Bulk():load({ id = {}, enterpris_id = "enterpris_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Bulk():update({
  id = "bulk_id",
  id_organization = {},
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CardEntity

```lua
local card = client:Card(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No |  |
| `badges` | `table` | No |  |
| `cardRole` | `string` | No |  |
| `checkItemStates` | `table` | No |  |
| `closed` | `boolean` | No |  |
| `coordinates` | `string` | No |  |
| `cover` | `table` | No |  |
| `creationMethod` | `string` | No |  |
| `customFieldItems` | `table` | No | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `table` | No |  |
| `due` | `string` | No |  |
| `dueReminder` | `string` | No |  |
| `id` | `string` | No |  |
| `idAttachmentCover` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `idChecklists` | `table` | No |  |
| `idLabels` | `table` | No |  |
| `idList` | `string` | No |  |
| `idMembers` | `table` | No |  |
| `idMembersVoted` | `table` | No |  |
| `idShort` | `number` | No |  |
| `labels` | `table` | No |  |
| `limits` | `table` | No |  |
| `locationName` | `string` | No |  |
| `manualCoverAttachment` | `boolean` | No |  |
| `mirrorSourceId` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `number` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `subscribed` | `boolean` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Card():create({
  id_list = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Card():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Card():load({ id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Card():remove({ id = "card_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Card():update({
  id = "card_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CardCheckItemStateEntity

```lua
local card_check_item_state = client:CardCheckItemState(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CardCheckItemState():load({ id = "card_check_item_state_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardCheckItemStateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CardListEntity

```lua
local card_list = client:CardList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CardList():load({ id = "card_list_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CardListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CheckItemEntity

```lua
local check_item = client:CheckItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idChecklist` | `string` | No |  |
| `name` | `string` | No |  |
| `nameData` | `string` | No |  |
| `pos` | `string` | No |  |
| `state` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CheckItem():load({ id = "check_item_id", card_id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CheckItem():remove({ id = "check_item_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CheckItem():update({
  id = "check_item_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CheckItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ChecklistEntity

```lua
local checklist = client:Checklist(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Checklist():create({
  id_card = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Checklist():load({ id = "checklist_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Checklist():remove({ id = "checklist_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Checklist():update({
  id = "checklist_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ChecklistEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ClaimableOrganizationEntity

```lua
local claimable_organization = client:ClaimableOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeMembershipCount` | `number` | No |  |
| `dateLastActive` | `string` | No | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idActiveAdmins` | `table` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `products` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ClaimableOrganization():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClaimableOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomBoardBackgroundEntity

```lua
local custom_board_background = client:CustomBoardBackground(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomBoardBackground():remove({ id = "id", member_id = "member_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomBoardBackgroundEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomEmojiEntity

```lua
local custom_emoji = client:CustomEmoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomEmoji():create({
  member_id = --[[ string ]],
  file = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomEmoji():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomEmoji():load({ id = "custom_emoji_id", member_id = "member_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomEmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldEntity

```lua
local custom_field = client:CustomField(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cardFront` | `boolean` | No |  |
| `display` | `table` | No |  |
| `display_cardFront` | `boolean` | No | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `boolean` | No | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | Yes | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | Yes | The type of model that the Custom Field is being defined on. |
| `name` | `string` | No | The name of the Custom Field |
| `options` | `table` | No | If the type is `checkbox` |
| `pos` | `string` | No |  |
| `type` | `string` | Yes | The type of Custom Field to create. |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomField():create({
  idModel = --[[ string ]],
  modelType = --[[ string ]],
  type = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomField():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomField():load({ id = "custom_field_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomField():remove({ id = "custom_field_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:CustomField():update({
  id = "custom_field_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomFieldItemEntity

```lua
local custom_field_item = client:CustomFieldItem(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idCustomField` | `string` | No |  |
| `idModel` | `string` | No |  |
| `modelType` | `string` | No |  |
| `value` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomFieldItem():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomFieldItemEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CustomStickerEntity

```lua
local custom_sticker = client:CustomSticker(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scaled` | `table` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CustomSticker():create({
  member_id = --[[ string ]],
  file = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:CustomSticker():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:CustomSticker():load({ id = "custom_sticker_id", member_id = "member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:CustomSticker():remove({ id = "custom_sticker_id", member_id = "member_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CustomStickerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmailPositionEntity

```lua
local email_position = client:EmailPosition(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EmailPosition():update({
  board_id = "board_id",
  value = "value",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailPositionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmojiEntity

```lua
local emoji = client:Emoji(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `keywords` | `table` | No |  |
| `name` | `string` | No |  |
| `native` | `string` | No |  |
| `sheetX` | `number` | No |  |
| `sheetY` | `number` | No |  |
| `shortName` | `string` | No |  |
| `shortNames` | `table` | No |  |
| `text` | `string` | No |  |
| `texts` | `string` | No |  |
| `tts` | `string` | No |  |
| `unified` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Emoji():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterprisEntity

```lua
local enterpris = client:Enterpris(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` | No |  |
| `displayName` | `string` | No |  |
| `domains` | `table` | No |  |
| `enterpriseDomains` | `table` | No |  |
| `id` | `string` | No |  |
| `idAdmins` | `table` | No |  |
| `idOrganizations` | `table` | No |  |
| `idp` | `table` | No |  |
| `isRealEnterprise` | `boolean` | No |  |
| `licenses` | `table` | No |  |
| `logoHash` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `organizationPrefs` | `table` | No |  |
| `pluginWhitelistingEnabled` | `table` | No |  |
| `prefs` | `table` | No |  |
| `products` | `table` | No |  |
| `ssoActivationFailed` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Enterpris():create({
  id = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Enterpris():load({ id = "enterpris_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Enterpris():update({
  id = "enterpris_id",
  id_organization = "id_organization",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterprisEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterprisSignupUrlEntity

```lua
local enterpris_signup_url = client:EnterprisSignupUrl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `signupUrl` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EnterprisSignupUrl():load({ id = "enterpris_signup_url_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterprisSignupUrlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseAdminEntity

```lua
local enterprise_admin = client:EnterpriseAdmin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullName` | `string` | No |  |
| `id` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EnterpriseAdmin():load({ enterpris_id = "enterpris_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAdminEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnterpriseAuditLogEntity

```lua
local enterprise_audit_log = client:EnterpriseAuditLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `idAction` | `string` | No |  |
| `member` | `table` | No |  |
| `memberCreator` | `table` | No |  |
| `organization` | `table` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnterpriseAuditLog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnterpriseAuditLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExportEntity

```lua
local export = client:Export(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attempts` | `number` | No |  |
| `exportUrl` | `string` | No |  |
| `finished` | `boolean` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `stage` | `string` | No |  |
| `startedAt` | `string` | No |  |
| `status` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Export():create({
  board_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Export():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Export():load({ id = "export_id", board_id = "board_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Export():remove({ id = "export_id", board_id = "board_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ExportDownloadEntity

```lua
local export_download = client:ExportDownload(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ExportDownload():load({ board_id = "board_id", id_export = "id_export" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ExportDownloadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GenerateEntity

```lua
local generate = client:Generate(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Generate():create({
  board_id = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdEmailListEntity

```lua
local id_email_list = client:IdEmailList(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:IdEmailList():update({
  board_id = "board_id",
  value = "value",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdEmailListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdLabelEntity

```lua
local id_label = client:IdLabel(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IdLabel():remove({ card_id = "card_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdLabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## IdMemberEntity

```lua
local id_member = client:IdMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:IdMember():remove({ card_id = "card_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `IdMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LabelEntity

```lua
local label = client:Label(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Label():create({
  color = --[[ string ]],
  id_board = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Label():load({ id = "label_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Label():remove({ id = "label_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Label():update({
  id = "label_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListEntity

```lua
local list = client:List(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:List():create({
  id_board = --[[ string ]],
  name = --[[ string ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:List():load({ id = "list_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:List():update({
  id = "list_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aaEmail` | `string` | No |  |
| `aaEnrolledDate` | `string` | No |  |
| `aaId` | `string` | No |  |
| `activityBlocked` | `boolean` | No |  |
| `avatarHash` | `string` | No |  |
| `avatarSource` | `string` | No |  |
| `avatarUrl` | `string` | No |  |
| `bio` | `string` | No |  |
| `bioData` | `table` | No |  |
| `confirmed` | `boolean` | No |  |
| `email` | `string` | No |  |
| `fullName` | `string` | No |  |
| `gravatarHash` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `table` | No |  |
| `idBoardsPinned` | `table` | No |  |
| `idEnterprise` | `string` | No |  |
| `idEnterprisesAdmin` | `table` | No |  |
| `idEnterprisesDeactivated` | `table` | No |  |
| `idMemberReferrer` | `string` | No |  |
| `idOrganizations` | `table` | No |  |
| `idPremOrgsAdmin` | `table` | No |  |
| `initials` | `string` | No |  |
| `isAaMastered` | `boolean` | No |  |
| `ixUpdate` | `number` | No |  |
| `limits` | `table` | No |  |
| `loginTypes` | `table` | No |  |
| `marketingOptIn` | `table` | No |  |
| `memberType` | `string` | No |  |
| `messagesDismissed` | `table` | No |  |
| `nonPublic` | `table` | No | Profile data with restricted visibility. |
| `nonPublicAvailable` | `boolean` | No | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `table` | No |  |
| `prefs` | `table` | No |  |
| `premiumFeatures` | `table` | No |  |
| `products` | `table` | No |  |
| `status` | `string` | No |  |
| `trophies` | `table` | No |  |
| `uploadedAvatarHash` | `string` | No |  |
| `uploadedAvatarUrl` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Member():create({
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Member():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Member():load({ id = "member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Member():remove({ id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Member():update({
  id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberPrivacyEntity

```lua
local member_privacy = client:MemberPrivacy(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MemberPrivacy():load({ plugin_id = "plugin_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberPrivacyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MembersVotedEntity

```lua
local members_voted = client:MembersVoted(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:MembersVoted():load({ card_id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:MembersVoted():remove({ card_id = "card_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembersVotedEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MembershipEntity

```lua
local membership = client:Membership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | `boolean` | No |  |
| `collaborator` | `boolean` | No |  |
| `deactivated` | `boolean` | No |  |
| `id` | `string` | No |  |
| `licensed` | `boolean` | No |  |
| `managed` | `boolean` | No |  |
| `member` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Membership():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Membership():load({ id = "membership_id", organization_id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Membership():update({
  id = "membership_id",
  board_id = "board_id",
  type = "type",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MostRecentEntity

```lua
local most_recent = client:MostRecent(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MostRecentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NewBillableGuestEntity

```lua
local new_billable_guest = client:NewBillableGuest(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NewBillableGuest():load({ id = "new_billable_guest_id", organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NewBillableGuestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationEntity

```lua
local notification = client:Notification(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `table` | Yes |  |
| `card` | `table` | No |  |
| `data` | `string` | No |  |
| `date` | `string` | No |  |
| `dateRead` | `string` | No |  |
| `id` | `string` | No |  |
| `idAction` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `reactions` | `table` | No |  |
| `type` | `string` | No |  |
| `unread` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Notification():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Notification():load({ id = "notification_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Notification():update({
  id = "notification_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationChannelSettingEntity

```lua
local notification_channel_setting = client:NotificationChannelSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedKeys` | `table` | No | Singular key or array of notification keys |
| `channel` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | update |
| --- | --- | --- | --- |
| `blockedKeys` | - | - | Yes |
| `channel` | - | - | Yes |
| `id` | - | - | - |
| `idMember` | - | - | - |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:NotificationChannelSetting():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NotificationChannelSetting():load({ channel = "channel", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:NotificationChannelSetting():update({
  channel = "channel",
  member_id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationChannelSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationListEntity

```lua
local notification_list = client:NotificationList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NotificationList():load({ id = "notification_list_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationMemberCreatorEntity

```lua
local notification_member_creator = client:NotificationMemberCreator(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NotificationMemberCreator():load({ id = "notification_member_creator_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationMemberCreatorEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NotificationsChannelSettingEntity

```lua
local notifications_channel_setting = client:NotificationsChannelSetting(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NotificationsChannelSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OptionEntity

```lua
local option = client:Option(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Option():load({ id = "option_id", custom_field_id = "custom_field_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Option():remove({ id = "option_id", custom_field_id = "custom_field_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OptionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgInviteRestrictEntity

```lua
local org_invite_restrict = client:OrgInviteRestrict(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:OrgInviteRestrict():remove({ organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgInviteRestrictEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationEntity

```lua
local organization = client:Organization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateLastActivity` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `table` | No |  |
| `idEnterprise` | `string` | No |  |
| `memberships` | `table` | No |  |
| `name` | `string` | No |  |
| `offering` | `string` | No |  |
| `prefs` | `table` | No |  |
| `premiumFeatures` | `table` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Organization():create({
  display_name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Organization():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Organization():load({ id = "organization_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Organization():remove({ id = "organization_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Organization():update({
  id = "organization_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PendingOrganizationEntity

```lua
local pending_organization = client:PendingOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `memberRequestor` | `table` | No |  |
| `membershipCount` | `number` | No |  |
| `transferability` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PendingOrganization():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PendingOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PluginEntity

```lua
local plugin = client:Plugin(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Plugin():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Plugin():load({ id = "plugin_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Plugin():update({
  id = "plugin_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PluginDataEntity

```lua
local plugin_data = client:PluginData(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PluginData():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PluginData():load({ card_id = "card_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginDataEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PluginListingEntity

```lua
local plugin_listing = client:PluginListing(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | The description to show for the given locale |
| `id` | `string` | No |  |
| `locale` | `string` | No | The locale that this listing should be displayed for. |
| `name` | `string` | No | The name to use for the given locale. |
| `overview` | `string` | No | The overview to show for the given locale. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PluginListing():create({
  id_plugin = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PluginListing():update({
  id = "id",
  id_plugin = "id_plugin",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PluginListingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReactionEntity

```lua
local reaction = client:Reaction(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Reaction():load({ id = "reaction_id", id_action = "id_action" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Reaction():remove({ id = "reaction_id", id_action = "id_action" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReadEntity

```lua
local read = client:Read(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Read():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SavedSearchEntity

```lua
local saved_search = client:SavedSearch(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `any` | No |  |
| `query` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:SavedSearch():create({
  member_id = --[[ string ]],
  name = --[[ string ]],
  pos = --[[ any ]],
  query = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:SavedSearch():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:SavedSearch():load({ id = "saved_search_id", member_id = "member_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:SavedSearch():remove({ id = "saved_search_id", member_id = "member_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:SavedSearch():update({
  id = "saved_search_id",
  member_id = "member_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SavedSearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SearchEntity

```lua
local search = client:Search(nil)
```

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Search():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShowSidebarEntity

```lua
local show_sidebar = client:ShowSidebar(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ShowSidebar():update({
  board_id = "board_id",
  value = true,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShowSidebarActivityEntity

```lua
local show_sidebar_activity = client:ShowSidebarActivity(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ShowSidebarActivity():update({
  board_id = "board_id",
  value = true,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarActivityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShowSidebarBoardActionEntity

```lua
local show_sidebar_board_action = client:ShowSidebarBoardAction(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ShowSidebarBoardAction():update({
  board_id = "board_id",
  value = true,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarBoardActionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ShowSidebarMemberEntity

```lua
local show_sidebar_member = client:ShowSidebarMember(nil)
```

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ShowSidebarMember():update({
  board_id = "board_id",
  value = true,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ShowSidebarMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StickerEntity

```lua
local sticker = client:Sticker(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Sticker():load({ id = "sticker_id", card_id = "card_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Sticker():remove({ id = "sticker_id", card_id = "card_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Sticker():update({
  id = "sticker_id",
  card_id = "card_id",
  left = 1,
  top = 1,
  z_index = 1,
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StickerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Tag():list()
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Tag():remove({ id = "id", organization_id = "organization_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TokenEntity

```lua
local token = client:Token(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateCreated` | `string` | No |  |
| `dateExpires` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `identifier` | `string` | No |  |
| `permissions` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Token():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Token():load({ id = "token_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Token():remove({ id = "token_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransferrableOrganizationEntity

```lua
local transferrable_organization = client:TransferrableOrganization(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `newBillableMembers` | `table` | No |  |
| `restrictedMembers` | `table` | No |  |
| `transferrable` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TransferrableOrganization():load({ id = "transferrable_organization_id", enterpris_id = "enterpris_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferrableOrganizationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TrelloListEntity

```lua
local trello_list = client:TrelloList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `table` | No |  |
| `closed` | `boolean` | No |  |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `limits` | `table` | No |  |
| `name` | `string` | No | The name of the list |
| `pos` | `number` | No |  |
| `softLimit` | `string` | No |  |
| `subscribed` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:TrelloList():create({
  board_id = --[[ string ]],
  name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:TrelloList():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:TrelloList():load({ action_id = "action_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TrelloListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `callbackURL` | `string` | No |  |
| `consecutiveFailures` | `number` | No |  |
| `description` | `string` | No |  |
| `firstConsecutiveFailDate` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Webhook():create({
  callback_url = --[[ string ]],
  id_model = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webhook():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webhook():load({ id = "webhook_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ id = "webhook_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Webhook():update({
  id = "webhook_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Request/response capture ring buffer for debugging |
| `idempotency` | 0.0.1 | Idempotency keys for safe retries of mutating operations |
| `metrics` | 0.0.1 | Statistics capture: per-operation counters and latency |
| `paging` | 0.0.1 | Pagination signals for list operations |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    debug = { active = true },
    idempotency = { active = true },
    metrics = { active = true },
    paging = { active = true },
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Request/response capture ring buffer for debugging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency keys for safe retries of mutating operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Statistics capture: per-operation counters and latency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Pagination signals for list operations.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

