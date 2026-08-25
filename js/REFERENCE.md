# Trello JavaScript SDK Reference

Complete API reference for the Trello JavaScript SDK.


## TrelloSDK

### Constructor

```ts
new TrelloSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TrelloSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = TrelloSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `TrelloSDK` instance in test mode.


### Instance Methods

#### `Action(data?: object)`

Create a new `Action` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionEntity` instance.

#### `ActionReactionsSummary(data?: object)`

Create a new `ActionReactionsSummary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ActionReactionsSummaryEntity` instance.

#### `Admin(data?: object)`

Create a new `Admin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AdminEntity` instance.

#### `Application(data?: object)`

Create a new `Application` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationEntity` instance.

#### `ApplicationCompliance(data?: object)`

Create a new `ApplicationCompliance` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApplicationComplianceEntity` instance.

#### `AssociatedDomain(data?: object)`

Create a new `AssociatedDomain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssociatedDomainEntity` instance.

#### `Attachment(data?: object)`

Create a new `Attachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AttachmentEntity` instance.

#### `Batch(data?: object)`

Create a new `Batch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchEntity` instance.

#### `Board(data?: object)`

Create a new `Board` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BoardEntity` instance.

#### `BoardBackground(data?: object)`

Create a new `BoardBackground` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BoardBackgroundEntity` instance.

#### `BoardPlugin(data?: object)`

Create a new `BoardPlugin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BoardPluginEntity` instance.

#### `BoardStar(data?: object)`

Create a new `BoardStar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BoardStarEntity` instance.

#### `Bulk(data?: object)`

Create a new `Bulk` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BulkEntity` instance.

#### `Card(data?: object)`

Create a new `Card` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardEntity` instance.

#### `CardCheckItemState(data?: object)`

Create a new `CardCheckItemState` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardCheckItemStateEntity` instance.

#### `CardList(data?: object)`

Create a new `CardList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CardListEntity` instance.

#### `CheckItem(data?: object)`

Create a new `CheckItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CheckItemEntity` instance.

#### `Checklist(data?: object)`

Create a new `Checklist` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ChecklistEntity` instance.

#### `ClaimableOrganization(data?: object)`

Create a new `ClaimableOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClaimableOrganizationEntity` instance.

#### `CustomBoardBackground(data?: object)`

Create a new `CustomBoardBackground` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomBoardBackgroundEntity` instance.

#### `CustomEmoji(data?: object)`

Create a new `CustomEmoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomEmojiEntity` instance.

#### `CustomField(data?: object)`

Create a new `CustomField` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldEntity` instance.

#### `CustomFieldItem(data?: object)`

Create a new `CustomFieldItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomFieldItemEntity` instance.

#### `CustomSticker(data?: object)`

Create a new `CustomSticker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CustomStickerEntity` instance.

#### `EmailPosition(data?: object)`

Create a new `EmailPosition` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailPositionEntity` instance.

#### `Emoji(data?: object)`

Create a new `Emoji` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmojiEntity` instance.

#### `Enterpris(data?: object)`

Create a new `Enterpris` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterprisEntity` instance.

#### `EnterprisSignupUrl(data?: object)`

Create a new `EnterprisSignupUrl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterprisSignupUrlEntity` instance.

#### `EnterpriseAdmin(data?: object)`

Create a new `EnterpriseAdmin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseAdminEntity` instance.

#### `EnterpriseAuditLog(data?: object)`

Create a new `EnterpriseAuditLog` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnterpriseAuditLogEntity` instance.

#### `Export(data?: object)`

Create a new `Export` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportEntity` instance.

#### `ExportDownload(data?: object)`

Create a new `ExportDownload` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ExportDownloadEntity` instance.

#### `Generate(data?: object)`

Create a new `Generate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GenerateEntity` instance.

#### `IdEmailList(data?: object)`

Create a new `IdEmailList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdEmailListEntity` instance.

#### `IdLabel(data?: object)`

Create a new `IdLabel` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdLabelEntity` instance.

#### `IdMember(data?: object)`

Create a new `IdMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `IdMemberEntity` instance.

#### `Label(data?: object)`

Create a new `Label` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LabelEntity` instance.

#### `List(data?: object)`

Create a new `List` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListEntity` instance.

#### `Member(data?: object)`

Create a new `Member` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberEntity` instance.

#### `MemberPrivacy(data?: object)`

Create a new `MemberPrivacy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MemberPrivacyEntity` instance.

#### `MembersVoted(data?: object)`

Create a new `MembersVoted` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MembersVotedEntity` instance.

#### `Membership(data?: object)`

Create a new `Membership` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MembershipEntity` instance.

#### `MostRecent(data?: object)`

Create a new `MostRecent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MostRecentEntity` instance.

#### `NewBillableGuest(data?: object)`

Create a new `NewBillableGuest` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NewBillableGuestEntity` instance.

#### `Notification(data?: object)`

Create a new `Notification` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationEntity` instance.

#### `NotificationChannelSetting(data?: object)`

Create a new `NotificationChannelSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationChannelSettingEntity` instance.

#### `NotificationList(data?: object)`

Create a new `NotificationList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationListEntity` instance.

#### `NotificationMemberCreator(data?: object)`

Create a new `NotificationMemberCreator` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationMemberCreatorEntity` instance.

#### `NotificationsChannelSetting(data?: object)`

Create a new `NotificationsChannelSetting` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `NotificationsChannelSettingEntity` instance.

#### `Option(data?: object)`

Create a new `Option` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OptionEntity` instance.

#### `OrgInviteRestrict(data?: object)`

Create a new `OrgInviteRestrict` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrgInviteRestrictEntity` instance.

#### `Organization(data?: object)`

Create a new `Organization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OrganizationEntity` instance.

#### `PendingOrganization(data?: object)`

Create a new `PendingOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PendingOrganizationEntity` instance.

#### `Plugin(data?: object)`

Create a new `Plugin` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PluginEntity` instance.

#### `PluginData(data?: object)`

Create a new `PluginData` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PluginDataEntity` instance.

#### `PluginListing(data?: object)`

Create a new `PluginListing` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PluginListingEntity` instance.

#### `Reaction(data?: object)`

Create a new `Reaction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReactionEntity` instance.

#### `Read(data?: object)`

Create a new `Read` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReadEntity` instance.

#### `SavedSearch(data?: object)`

Create a new `SavedSearch` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SavedSearchEntity` instance.

#### `Search(data?: object)`

Create a new `Search` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SearchEntity` instance.

#### `ShowSidebar(data?: object)`

Create a new `ShowSidebar` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShowSidebarEntity` instance.

#### `ShowSidebarActivity(data?: object)`

Create a new `ShowSidebarActivity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShowSidebarActivityEntity` instance.

#### `ShowSidebarBoardAction(data?: object)`

Create a new `ShowSidebarBoardAction` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShowSidebarBoardActionEntity` instance.

#### `ShowSidebarMember(data?: object)`

Create a new `ShowSidebarMember` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ShowSidebarMemberEntity` instance.

#### `Sticker(data?: object)`

Create a new `Sticker` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StickerEntity` instance.

#### `Tag(data?: object)`

Create a new `Tag` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TagEntity` instance.

#### `Token(data?: object)`

Create a new `Token` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TokenEntity` instance.

#### `TransferrableOrganization(data?: object)`

Create a new `TransferrableOrganization` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TransferrableOrganizationEntity` instance.

#### `TrelloList(data?: object)`

Create a new `TrelloList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TrelloListEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `TrelloSDK.test()`.

**Returns:** `TrelloSDK` instance in test mode.


---

## ActionEntity

```ts
const action = client.Action()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Object` | No |  |
| `date` | `string` | No |  |
| `display` | `Object` | No |  |
| `id` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `limits` | `Object` | No |  |
| `memberCreator` | `Object` | No |  |
| `native` | `string` | No | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | No | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | No | The `skinVariation` of the emoji to add. |
| `type` | `string` | No |  |
| `unified` | `string` | No | The `unified` value of the emoji to add. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Action().create({
  id_action: 'example_id_action',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Action().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Action().load({ id: 'action_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Action().remove({ id: 'action_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Action().update({
  id: 'action_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ActionReactionsSummaryEntity

```ts
const action_reactions_summary = client.ActionReactionsSummary()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ActionReactionsSummary().load({ id_action: 'id_action' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ActionReactionsSummaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AdminEntity

```ts
const admin = client.Admin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Admin().remove({ enterpris_id: 'enterpris_id', id: 'id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Admin().update({
  enterpris_id: 'enterpris_id',
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationEntity

```ts
const application = client.Application()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApplicationComplianceEntity

```ts
const application_compliance = client.ApplicationCompliance()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ApplicationCompliance().load({ key: 'key' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApplicationComplianceEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssociatedDomainEntity

```ts
const associated_domain = client.AssociatedDomain()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AssociatedDomain().remove({ organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssociatedDomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AttachmentEntity

```ts
const attachment = client.Attachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Attachment().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Attachment().load({ id: 'attachment_id', card_id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Attachment().remove({ id: 'attachment_id', card_id: 'card_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchEntity

```ts
const batch = client.Batch()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Batch().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BoardEntity

```ts
const board = client.Board()
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
| `labelNames` | `Object` | No |  |
| `limits` | `Object` | No |  |
| `memberships` | `string` | No |  |
| `name` | `string` | No | The name of the board. |
| `pinned` | `boolean` | No |  |
| `powerUps` | `string` | No |  |
| `prefs` | `Object` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `starred` | `boolean` | No |  |
| `subscribed` | `boolean` | No |  |
| `templateGallery` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Board().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Board().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Board().load({ id: 'board_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Board().remove({ id: 'board_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Board().update({
  id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BoardEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BoardBackgroundEntity

```ts
const board_background = client.BoardBackground()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BoardBackground().create({
  member_id: 'example_member_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BoardBackground().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BoardBackground().load({ id: 'board_background_id', member_id: 'member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BoardBackground().remove({ id: 'board_background_id', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BoardBackground().update({
  id: 'board_background_id',
  member_id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BoardBackgroundEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BoardPluginEntity

```ts
const board_plugin = client.BoardPlugin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BoardPlugin().remove({ board_id: 'board_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BoardPluginEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BoardStarEntity

```ts
const board_star = client.BoardStar()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `pos` | `number` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BoardStar().create({
  member_id: 'example_member_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.BoardStar().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.BoardStar().load({ id: 'board_star_id', member_id: 'member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.BoardStar().remove({ id: 'board_star_id', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.BoardStar().update({
  id: 'board_star_id',
  member_id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BoardStarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BulkEntity

```ts
const bulk = client.Bulk()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Bulk().load({ id: [], enterpris_id: 'enterpris_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Bulk().update({
  id: 'bulk_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BulkEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CardEntity

```ts
const card = client.Card()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No |  |
| `badges` | `Object` | No |  |
| `cardRole` | `string` | No |  |
| `checkItemStates` | `Array` | No |  |
| `closed` | `boolean` | No |  |
| `coordinates` | `string` | No |  |
| `cover` | `Object` | No |  |
| `creationMethod` | `string` | No |  |
| `customFieldItems` | `Array` | No | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `Object` | No |  |
| `due` | `string` | No |  |
| `dueReminder` | `string` | No |  |
| `id` | `string` | No |  |
| `idAttachmentCover` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `idChecklists` | `Array` | No |  |
| `idLabels` | `Array` | No |  |
| `idList` | `string` | No |  |
| `idMembers` | `Array` | No |  |
| `idMembersVoted` | `Array` | No |  |
| `idShort` | `number` | No |  |
| `labels` | `Array` | No |  |
| `limits` | `Object` | No |  |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Card().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Card().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Card().load({ id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Card().remove({ id: 'card_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Card().update({
  id: 'card_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CardCheckItemStateEntity

```ts
const card_check_item_state = client.CardCheckItemState()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CardCheckItemState().load({ id: 'card_check_item_state_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardCheckItemStateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CardListEntity

```ts
const card_list = client.CardList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CardList().load({ id: 'card_list_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CardListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CheckItemEntity

```ts
const check_item = client.CheckItem()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CheckItem().load({ id: 'check_item_id', card_id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CheckItem().remove({ id: 'check_item_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CheckItem().update({
  id: 'check_item_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CheckItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ChecklistEntity

```ts
const checklist = client.Checklist()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Checklist().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Checklist().load({ id: 'checklist_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Checklist().remove({ id: 'checklist_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Checklist().update({
  id: 'checklist_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ChecklistEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ClaimableOrganizationEntity

```ts
const claimable_organization = client.ClaimableOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeMembershipCount` | `number` | No |  |
| `dateLastActive` | `string` | No | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idActiveAdmins` | `Array` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `products` | `Array` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ClaimableOrganization().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClaimableOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomBoardBackgroundEntity

```ts
const custom_board_background = client.CustomBoardBackground()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomBoardBackground().remove({ id: 'id', member_id: 'member_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomBoardBackgroundEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomEmojiEntity

```ts
const custom_emoji = client.CustomEmoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomEmoji().create({
  member_id: 'example_member_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomEmoji().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomEmoji().load({ id: 'custom_emoji_id', member_id: 'member_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomEmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldEntity

```ts
const custom_field = client.CustomField()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cardFront` | `boolean` | No |  |
| `display` | `Object` | No |  |
| `display_cardFront` | `boolean` | No | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `boolean` | No | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | Yes | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | Yes | The type of model that the Custom Field is being defined on. |
| `name` | `string` | No | The name of the Custom Field |
| `options` | `Array` | No | If the type is `checkbox` |
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomField().create({
  idModel: 'example_idModel',
  modelType: 'example_modelType',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomField().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomField().load({ id: 'custom_field_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomField().remove({ id: 'custom_field_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.CustomField().update({
  id: 'custom_field_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomFieldItemEntity

```ts
const custom_field_item = client.CustomFieldItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idCustomField` | `string` | No |  |
| `idModel` | `string` | No |  |
| `modelType` | `string` | No |  |
| `value` | `Object` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomFieldItem().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomFieldItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CustomStickerEntity

```ts
const custom_sticker = client.CustomSticker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scaled` | `Array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CustomSticker().create({
  member_id: 'example_member_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.CustomSticker().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.CustomSticker().load({ id: 'custom_sticker_id', member_id: 'member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.CustomSticker().remove({ id: 'custom_sticker_id', member_id: 'member_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CustomStickerEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailPositionEntity

```ts
const email_position = client.EmailPosition()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.EmailPosition().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailPositionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmojiEntity

```ts
const emoji = client.Emoji()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `keywords` | `Array` | No |  |
| `name` | `string` | No |  |
| `native` | `string` | No |  |
| `sheetX` | `number` | No |  |
| `sheetY` | `number` | No |  |
| `shortName` | `string` | No |  |
| `shortNames` | `Array` | No |  |
| `text` | `string` | No |  |
| `texts` | `string` | No |  |
| `tts` | `string` | No |  |
| `unified` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Emoji().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmojiEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterprisEntity

```ts
const enterpris = client.Enterpris()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` | No |  |
| `displayName` | `string` | No |  |
| `domains` | `Array` | No |  |
| `enterpriseDomains` | `Array` | No |  |
| `id` | `string` | No |  |
| `idAdmins` | `Array` | No |  |
| `idOrganizations` | `Array` | No |  |
| `idp` | `Object` | No |  |
| `isRealEnterprise` | `boolean` | No |  |
| `licenses` | `Object` | No |  |
| `logoHash` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `organizationPrefs` | `Object` | No |  |
| `pluginWhitelistingEnabled` | `Array` | No |  |
| `prefs` | `Object` | No |  |
| `products` | `Array` | No |  |
| `ssoActivationFailed` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Enterpris().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Enterpris().load({ id: 'enterpris_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Enterpris().update({
  id: 'enterpris_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterprisEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterprisSignupUrlEntity

```ts
const enterpris_signup_url = client.EnterprisSignupUrl()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `signupUrl` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnterprisSignupUrl().load({ id: 'enterpris_signup_url_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterprisSignupUrlEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseAdminEntity

```ts
const enterprise_admin = client.EnterpriseAdmin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullName` | `string` | No |  |
| `id` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnterpriseAdmin().load({ enterpris_id: 'enterpris_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseAdminEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnterpriseAuditLogEntity

```ts
const enterprise_audit_log = client.EnterpriseAuditLog()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `idAction` | `string` | No |  |
| `member` | `Object` | No |  |
| `memberCreator` | `Object` | No |  |
| `organization` | `Object` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnterpriseAuditLog().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnterpriseAuditLogEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExportEntity

```ts
const export_ = client.Export()
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
| `status` | `Object` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Export().create({
  board_id: 'example_board_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Export().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Export().load({ id: 'export_id', board_id: 'board_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Export().remove({ id: 'export_id', board_id: 'board_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ExportDownloadEntity

```ts
const export_download = client.ExportDownload()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ExportDownload().load({ board_id: 'board_id', id_export: 'id_export' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ExportDownloadEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GenerateEntity

```ts
const generate = client.Generate()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Generate().create({
  board_id: 'example_board_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GenerateEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdEmailListEntity

```ts
const id_email_list = client.IdEmailList()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.IdEmailList().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdEmailListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdLabelEntity

```ts
const id_label = client.IdLabel()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IdLabel().remove({ card_id: 'card_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdLabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## IdMemberEntity

```ts
const id_member = client.IdMember()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.IdMember().remove({ card_id: 'card_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `IdMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LabelEntity

```ts
const label = client.Label()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Label().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Label().load({ id: 'label_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Label().remove({ id: 'label_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Label().update({
  id: 'label_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LabelEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListEntity

```ts
const list = client.List()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.List().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.List().load({ id: 'list_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.List().update({
  id: 'list_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberEntity

```ts
const member = client.Member()
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
| `bioData` | `Object` | No |  |
| `confirmed` | `boolean` | No |  |
| `email` | `string` | No |  |
| `fullName` | `string` | No |  |
| `gravatarHash` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `Array` | No |  |
| `idBoardsPinned` | `Array` | No |  |
| `idEnterprise` | `string` | No |  |
| `idEnterprisesAdmin` | `Array` | No |  |
| `idEnterprisesDeactivated` | `Array` | No |  |
| `idMemberReferrer` | `string` | No |  |
| `idOrganizations` | `Array` | No |  |
| `idPremOrgsAdmin` | `Array` | No |  |
| `initials` | `string` | No |  |
| `isAaMastered` | `boolean` | No |  |
| `ixUpdate` | `number` | No |  |
| `limits` | `Object` | No |  |
| `loginTypes` | `Array` | No |  |
| `marketingOptIn` | `Object` | No |  |
| `memberType` | `string` | No |  |
| `messagesDismissed` | `Object` | No |  |
| `nonPublic` | `Object` | No | Profile data with restricted visibility. |
| `nonPublicAvailable` | `boolean` | No | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `Array` | No |  |
| `prefs` | `Object` | No |  |
| `premiumFeatures` | `Array` | No |  |
| `products` | `Array` | No |  |
| `status` | `string` | No |  |
| `trophies` | `Array` | No |  |
| `uploadedAvatarHash` | `string` | No |  |
| `uploadedAvatarUrl` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Member().create({
  id: 'example_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Member().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Member().load({ id: 'member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Member().remove({ id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Member().update({
  id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MemberPrivacyEntity

```ts
const member_privacy = client.MemberPrivacy()
```

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MemberPrivacy().load({ plugin_id: 'plugin_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MemberPrivacyEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MembersVotedEntity

```ts
const members_voted = client.MembersVoted()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.MembersVoted().load({ card_id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.MembersVoted().remove({ card_id: 'card_id', id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MembersVotedEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MembershipEntity

```ts
const membership = client.Membership()
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
| `member` | `Object` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Membership().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Membership().load({ id: 'membership_id', organization_id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Membership().update({
  id: 'membership_id',
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MembershipEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MostRecentEntity

```ts
const most_recent = client.MostRecent()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MostRecentEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NewBillableGuestEntity

```ts
const new_billable_guest = client.NewBillableGuest()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NewBillableGuest().load({ id: 'new_billable_guest_id', organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NewBillableGuestEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationEntity

```ts
const notification = client.Notification()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `Object` | Yes |  |
| `card` | `Object` | No |  |
| `data` | `string` | No |  |
| `date` | `string` | No |  |
| `dateRead` | `string` | No |  |
| `id` | `string` | No |  |
| `idAction` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `reactions` | `Array` | No |  |
| `type` | `string` | No |  |
| `unread` | `boolean` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Notification().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Notification().load({ id: 'notification_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Notification().update({
  id: 'notification_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationChannelSettingEntity

```ts
const notification_channel_setting = client.NotificationChannelSetting()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedKeys` | `Array` | No | Singular key or array of notification keys |
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.NotificationChannelSetting().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NotificationChannelSetting().load({ channel: 'channel', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.NotificationChannelSetting().update({
  channel: 'channel',
  member_id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationChannelSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationListEntity

```ts
const notification_list = client.NotificationList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NotificationList().load({ id: 'notification_list_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationMemberCreatorEntity

```ts
const notification_member_creator = client.NotificationMemberCreator()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.NotificationMemberCreator().load({ id: 'notification_member_creator_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationMemberCreatorEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## NotificationsChannelSettingEntity

```ts
const notifications_channel_setting = client.NotificationsChannelSetting()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `NotificationsChannelSettingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OptionEntity

```ts
const option = client.Option()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Option().load({ id: 'option_id', custom_field_id: 'custom_field_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Option().remove({ id: 'option_id', custom_field_id: 'custom_field_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrgInviteRestrictEntity

```ts
const org_invite_restrict = client.OrgInviteRestrict()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.OrgInviteRestrict().remove({ organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrgInviteRestrictEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OrganizationEntity

```ts
const organization = client.Organization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateLastActivity` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `Array` | No |  |
| `idEnterprise` | `string` | No |  |
| `memberships` | `Array` | No |  |
| `name` | `string` | No |  |
| `offering` | `string` | No |  |
| `prefs` | `Object` | No |  |
| `premiumFeatures` | `Array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Organization().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Organization().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Organization().load({ id: 'organization_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Organization().remove({ id: 'organization_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Organization().update({
  id: 'organization_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PendingOrganizationEntity

```ts
const pending_organization = client.PendingOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `memberRequestor` | `Object` | No |  |
| `membershipCount` | `number` | No |  |
| `transferability` | `Object` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PendingOrganization().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PendingOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PluginEntity

```ts
const plugin = client.Plugin()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Plugin().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Plugin().load({ id: 'plugin_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Plugin().update({
  id: 'plugin_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PluginEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PluginDataEntity

```ts
const plugin_data = client.PluginData()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PluginData().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.PluginData().load({ card_id: 'card_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PluginDataEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PluginListingEntity

```ts
const plugin_listing = client.PluginListing()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.PluginListing().create({
  id_plugin: 'example_id_plugin',
})
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.PluginListing().update({
  id: 'id',
  id_plugin: 'id_plugin',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PluginListingEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReactionEntity

```ts
const reaction = client.Reaction()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Reaction().load({ id: 'reaction_id', id_action: 'id_action' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Reaction().remove({ id: 'reaction_id', id_action: 'id_action' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReactionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReadEntity

```ts
const read = client.Read()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Read().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReadEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SavedSearchEntity

```ts
const saved_search = client.SavedSearch()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `*` | No |  |
| `query` | `string` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.SavedSearch().create({
  member_id: 'example_member_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.SavedSearch().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.SavedSearch().load({ id: 'saved_search_id', member_id: 'member_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.SavedSearch().remove({ id: 'saved_search_id', member_id: 'member_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.SavedSearch().update({
  id: 'saved_search_id',
  member_id: 'member_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SavedSearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SearchEntity

```ts
const search = client.Search()
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Search().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SearchEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShowSidebarEntity

```ts
const show_sidebar = client.ShowSidebar()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ShowSidebar().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShowSidebarEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShowSidebarActivityEntity

```ts
const show_sidebar_activity = client.ShowSidebarActivity()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ShowSidebarActivity().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShowSidebarActivityEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShowSidebarBoardActionEntity

```ts
const show_sidebar_board_action = client.ShowSidebarBoardAction()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ShowSidebarBoardAction().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShowSidebarBoardActionEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ShowSidebarMemberEntity

```ts
const show_sidebar_member = client.ShowSidebarMember()
```

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.ShowSidebarMember().update({
  board_id: 'board_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ShowSidebarMemberEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StickerEntity

```ts
const sticker = client.Sticker()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Sticker().load({ id: 'sticker_id', card_id: 'card_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Sticker().remove({ id: 'sticker_id', card_id: 'card_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Sticker().update({
  id: 'sticker_id',
  card_id: 'card_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StickerEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TagEntity

```ts
const tag = client.Tag()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Tag().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Tag().remove({ id: 'id', organization_id: 'organization_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TagEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TokenEntity

```ts
const token = client.Token()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateCreated` | `string` | No |  |
| `dateExpires` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `identifier` | `string` | No |  |
| `permissions` | `Array` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Token().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Token().load({ id: 'token_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Token().remove({ id: 'token_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TransferrableOrganizationEntity

```ts
const transferrable_organization = client.TransferrableOrganization()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `newBillableMembers` | `Array` | No |  |
| `restrictedMembers` | `Array` | No |  |
| `transferrable` | `boolean` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TransferrableOrganization().load({ id: 'transferrable_organization_id', enterpris_id: 'enterpris_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TransferrableOrganizationEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TrelloListEntity

```ts
const trello_list = client.TrelloList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `Object` | No |  |
| `closed` | `boolean` | No |  |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `limits` | `Object` | No |  |
| `name` | `string` | No | The name of the list |
| `pos` | `number` | No |  |
| `softLimit` | `string` | No |  |
| `subscribed` | `boolean` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.TrelloList().create({
  board_id: 'example_board_id',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.TrelloList().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.TrelloList().load({ action_id: 'action_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TrelloListEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Webhook().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Webhook().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'webhook_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Webhook().update({
  id: 'webhook_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `TrelloSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new TrelloSDK({
  feature: {
    test: { active: true },
  }
})
```

