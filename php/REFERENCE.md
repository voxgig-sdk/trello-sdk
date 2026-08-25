# Trello PHP SDK Reference

Complete API reference for the Trello PHP SDK.


## TrelloSDK

### Constructor

```php
require_once __DIR__ . '/trello_sdk.php';

$client = new TrelloSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TrelloSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = TrelloSDK::test();
```


### Instance Methods

#### `Action($data = null)`

Create a new `ActionEntity` instance. Pass `null` for no initial data.

#### `ActionReactionsSummary($data = null)`

Create a new `ActionReactionsSummaryEntity` instance. Pass `null` for no initial data.

#### `Admin($data = null)`

Create a new `AdminEntity` instance. Pass `null` for no initial data.

#### `Application($data = null)`

Create a new `ApplicationEntity` instance. Pass `null` for no initial data.

#### `ApplicationCompliance($data = null)`

Create a new `ApplicationComplianceEntity` instance. Pass `null` for no initial data.

#### `AssociatedDomain($data = null)`

Create a new `AssociatedDomainEntity` instance. Pass `null` for no initial data.

#### `Attachment($data = null)`

Create a new `AttachmentEntity` instance. Pass `null` for no initial data.

#### `Batch($data = null)`

Create a new `BatchEntity` instance. Pass `null` for no initial data.

#### `Board($data = null)`

Create a new `BoardEntity` instance. Pass `null` for no initial data.

#### `BoardBackground($data = null)`

Create a new `BoardBackgroundEntity` instance. Pass `null` for no initial data.

#### `BoardPlugin($data = null)`

Create a new `BoardPluginEntity` instance. Pass `null` for no initial data.

#### `BoardStar($data = null)`

Create a new `BoardStarEntity` instance. Pass `null` for no initial data.

#### `Bulk($data = null)`

Create a new `BulkEntity` instance. Pass `null` for no initial data.

#### `Card($data = null)`

Create a new `CardEntity` instance. Pass `null` for no initial data.

#### `CardCheckItemState($data = null)`

Create a new `CardCheckItemStateEntity` instance. Pass `null` for no initial data.

#### `CardList($data = null)`

Create a new `CardListEntity` instance. Pass `null` for no initial data.

#### `CheckItem($data = null)`

Create a new `CheckItemEntity` instance. Pass `null` for no initial data.

#### `Checklist($data = null)`

Create a new `ChecklistEntity` instance. Pass `null` for no initial data.

#### `ClaimableOrganization($data = null)`

Create a new `ClaimableOrganizationEntity` instance. Pass `null` for no initial data.

#### `CustomBoardBackground($data = null)`

Create a new `CustomBoardBackgroundEntity` instance. Pass `null` for no initial data.

#### `CustomEmoji($data = null)`

Create a new `CustomEmojiEntity` instance. Pass `null` for no initial data.

#### `CustomField($data = null)`

Create a new `CustomFieldEntity` instance. Pass `null` for no initial data.

#### `CustomFieldItem($data = null)`

Create a new `CustomFieldItemEntity` instance. Pass `null` for no initial data.

#### `CustomSticker($data = null)`

Create a new `CustomStickerEntity` instance. Pass `null` for no initial data.

#### `EmailPosition($data = null)`

Create a new `EmailPositionEntity` instance. Pass `null` for no initial data.

#### `Emoji($data = null)`

Create a new `EmojiEntity` instance. Pass `null` for no initial data.

#### `Enterpris($data = null)`

Create a new `EnterprisEntity` instance. Pass `null` for no initial data.

#### `EnterprisSignupUrl($data = null)`

Create a new `EnterprisSignupUrlEntity` instance. Pass `null` for no initial data.

#### `EnterpriseAdmin($data = null)`

Create a new `EnterpriseAdminEntity` instance. Pass `null` for no initial data.

#### `EnterpriseAuditLog($data = null)`

Create a new `EnterpriseAuditLogEntity` instance. Pass `null` for no initial data.

#### `Export($data = null)`

Create a new `ExportEntity` instance. Pass `null` for no initial data.

#### `ExportDownload($data = null)`

Create a new `ExportDownloadEntity` instance. Pass `null` for no initial data.

#### `Generate($data = null)`

Create a new `GenerateEntity` instance. Pass `null` for no initial data.

#### `IdEmailList($data = null)`

Create a new `IdEmailListEntity` instance. Pass `null` for no initial data.

#### `IdLabel($data = null)`

Create a new `IdLabelEntity` instance. Pass `null` for no initial data.

#### `IdMember($data = null)`

Create a new `IdMemberEntity` instance. Pass `null` for no initial data.

#### `Label($data = null)`

Create a new `LabelEntity` instance. Pass `null` for no initial data.

#### `List($data = null)`

Create a new `ListEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `MemberPrivacy($data = null)`

Create a new `MemberPrivacyEntity` instance. Pass `null` for no initial data.

#### `MembersVoted($data = null)`

Create a new `MembersVotedEntity` instance. Pass `null` for no initial data.

#### `Membership($data = null)`

Create a new `MembershipEntity` instance. Pass `null` for no initial data.

#### `MostRecent($data = null)`

Create a new `MostRecentEntity` instance. Pass `null` for no initial data.

#### `NewBillableGuest($data = null)`

Create a new `NewBillableGuestEntity` instance. Pass `null` for no initial data.

#### `Notification($data = null)`

Create a new `NotificationEntity` instance. Pass `null` for no initial data.

#### `NotificationChannelSetting($data = null)`

Create a new `NotificationChannelSettingEntity` instance. Pass `null` for no initial data.

#### `NotificationList($data = null)`

Create a new `NotificationListEntity` instance. Pass `null` for no initial data.

#### `NotificationMemberCreator($data = null)`

Create a new `NotificationMemberCreatorEntity` instance. Pass `null` for no initial data.

#### `NotificationsChannelSetting($data = null)`

Create a new `NotificationsChannelSettingEntity` instance. Pass `null` for no initial data.

#### `Option($data = null)`

Create a new `OptionEntity` instance. Pass `null` for no initial data.

#### `OrgInviteRestrict($data = null)`

Create a new `OrgInviteRestrictEntity` instance. Pass `null` for no initial data.

#### `Organization($data = null)`

Create a new `OrganizationEntity` instance. Pass `null` for no initial data.

#### `PendingOrganization($data = null)`

Create a new `PendingOrganizationEntity` instance. Pass `null` for no initial data.

#### `Plugin($data = null)`

Create a new `PluginEntity` instance. Pass `null` for no initial data.

#### `PluginData($data = null)`

Create a new `PluginDataEntity` instance. Pass `null` for no initial data.

#### `PluginListing($data = null)`

Create a new `PluginListingEntity` instance. Pass `null` for no initial data.

#### `Reaction($data = null)`

Create a new `ReactionEntity` instance. Pass `null` for no initial data.

#### `Read($data = null)`

Create a new `ReadEntity` instance. Pass `null` for no initial data.

#### `SavedSearch($data = null)`

Create a new `SavedSearchEntity` instance. Pass `null` for no initial data.

#### `Search($data = null)`

Create a new `SearchEntity` instance. Pass `null` for no initial data.

#### `ShowSidebar($data = null)`

Create a new `ShowSidebarEntity` instance. Pass `null` for no initial data.

#### `ShowSidebarActivity($data = null)`

Create a new `ShowSidebarActivityEntity` instance. Pass `null` for no initial data.

#### `ShowSidebarBoardAction($data = null)`

Create a new `ShowSidebarBoardActionEntity` instance. Pass `null` for no initial data.

#### `ShowSidebarMember($data = null)`

Create a new `ShowSidebarMemberEntity` instance. Pass `null` for no initial data.

#### `Sticker($data = null)`

Create a new `StickerEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `Token($data = null)`

Create a new `TokenEntity` instance. Pass `null` for no initial data.

#### `TransferrableOrganization($data = null)`

Create a new `TransferrableOrganizationEntity` instance. Pass `null` for no initial data.

#### `TrelloList($data = null)`

Create a new `TrelloListEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): TrelloUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ActionEntity

```php
$action = $client->Action();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `array` | No |  |
| `date` | `string` | No |  |
| `display` | `array` | No |  |
| `id` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `limits` | `array` | No |  |
| `memberCreator` | `array` | No |  |
| `native` | `string` | No | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | No | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | No | The `skinVariation` of the emoji to add. |
| `type` | `string` | No |  |
| `unified` | `string` | No | The `unified` value of the emoji to add. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Action()->create([
  "id_action" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Action()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->load(["id" => "action_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Action()->remove(["id" => "action_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Action()->update([
  "id" => "action_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionEntity`

Create a new `ActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ActionReactionsSummaryEntity

```php
$action_reactions_summary = $client->ActionReactionsSummary();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ActionReactionsSummary()->load(["id_action" => "id_action"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ActionReactionsSummaryEntity`

Create a new `ActionReactionsSummaryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AdminEntity

```php
$admin = $client->Admin();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Admin()->remove(["enterpris_id" => "enterpris_id", "id" => "id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Admin()->update([
  "enterpris_id" => "enterpris_id",
  "id" => "id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AdminEntity`

Create a new `AdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationEntity

```php
$application = $client->Application();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationEntity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ApplicationComplianceEntity

```php
$application_compliance = $client->ApplicationCompliance();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ApplicationCompliance()->load(["key" => "key"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ApplicationComplianceEntity`

Create a new `ApplicationComplianceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssociatedDomainEntity

```php
$associated_domain = $client->AssociatedDomain();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AssociatedDomain()->remove(["organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssociatedDomainEntity`

Create a new `AssociatedDomainEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AttachmentEntity

```php
$attachment = $client->Attachment();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Attachment()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Attachment()->load(["id" => "attachment_id", "card_id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Attachment()->remove(["id" => "attachment_id", "card_id" => "card_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AttachmentEntity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BatchEntity

```php
$batch = $client->Batch();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Batch()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BatchEntity`

Create a new `BatchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardEntity

```php
$board = $client->Board();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `closed` | `bool` | No |  |
| `creationMethod` | `string` | No |  |
| `dateLastActivity` | `string` | No |  |
| `dateLastView` | `string` | No |  |
| `datePluginDisable` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `string` | No |  |
| `enterpriseOwned` | `bool` | No |  |
| `fullName` | `string` | No | The full name of the user to as a member of the board. |
| `id` | `string` | Yes |  |
| `idMemberCreator` | `string` | No |  |
| `idOrganization` | `string` | No |  |
| `idTags` | `string` | No |  |
| `ixUpdate` | `int` | No |  |
| `labelNames` | `array` | No |  |
| `limits` | `array` | No |  |
| `memberships` | `string` | No |  |
| `name` | `string` | No | The name of the board. |
| `pinned` | `bool` | No |  |
| `powerUps` | `string` | No |  |
| `prefs` | `array` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `starred` | `bool` | No |  |
| `subscribed` | `bool` | No |  |
| `templateGallery` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Board()->create([
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Board()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Board()->load(["id" => "board_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Board()->remove(["id" => "board_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Board()->update([
  "id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardEntity`

Create a new `BoardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardBackgroundEntity

```php
$board_background = $client->BoardBackground();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BoardBackground()->create([
  "member_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BoardBackground()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BoardBackground()->load(["id" => "board_background_id", "member_id" => "member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BoardBackground()->remove(["id" => "board_background_id", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BoardBackground()->update([
  "id" => "board_background_id",
  "member_id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardBackgroundEntity`

Create a new `BoardBackgroundEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardPluginEntity

```php
$board_plugin = $client->BoardPlugin();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BoardPlugin()->remove(["board_id" => "board_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardPluginEntity`

Create a new `BoardPluginEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BoardStarEntity

```php
$board_star = $client->BoardStar();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `pos` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->BoardStar()->create([
  "member_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->BoardStar()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->BoardStar()->load(["id" => "board_star_id", "member_id" => "member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->BoardStar()->remove(["id" => "board_star_id", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->BoardStar()->update([
  "id" => "board_star_id",
  "member_id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BoardStarEntity`

Create a new `BoardStarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BulkEntity

```php
$bulk = $client->Bulk();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Bulk()->load(["id" => [], "enterpris_id" => "enterpris_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Bulk()->update([
  "id" => "bulk_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BulkEntity`

Create a new `BulkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CardEntity

```php
$card = $client->Card();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No |  |
| `badges` | `array` | No |  |
| `cardRole` | `string` | No |  |
| `checkItemStates` | `array` | No |  |
| `closed` | `bool` | No |  |
| `coordinates` | `string` | No |  |
| `cover` | `array` | No |  |
| `creationMethod` | `string` | No |  |
| `customFieldItems` | `array` | No | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `array` | No |  |
| `due` | `string` | No |  |
| `dueReminder` | `string` | No |  |
| `id` | `string` | No |  |
| `idAttachmentCover` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `idChecklists` | `array` | No |  |
| `idLabels` | `array` | No |  |
| `idList` | `string` | No |  |
| `idMembers` | `array` | No |  |
| `idMembersVoted` | `array` | No |  |
| `idShort` | `int` | No |  |
| `labels` | `array` | No |  |
| `limits` | `array` | No |  |
| `locationName` | `string` | No |  |
| `manualCoverAttachment` | `bool` | No |  |
| `mirrorSourceId` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `float` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `subscribed` | `bool` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Card()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Card()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->load(["id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Card()->remove(["id" => "card_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Card()->update([
  "id" => "card_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardEntity`

Create a new `CardEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CardCheckItemStateEntity

```php
$card_check_item_state = $client->CardCheckItemState();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CardCheckItemState()->load(["id" => "card_check_item_state_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardCheckItemStateEntity`

Create a new `CardCheckItemStateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CardListEntity

```php
$card_list = $client->CardList();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CardList()->load(["id" => "card_list_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CardListEntity`

Create a new `CardListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CheckItemEntity

```php
$check_item = $client->CheckItem();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CheckItem()->load(["id" => "check_item_id", "card_id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CheckItem()->remove(["id" => "check_item_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CheckItem()->update([
  "id" => "check_item_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CheckItemEntity`

Create a new `CheckItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ChecklistEntity

```php
$checklist = $client->Checklist();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Checklist()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Checklist()->load(["id" => "checklist_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Checklist()->remove(["id" => "checklist_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Checklist()->update([
  "id" => "checklist_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ChecklistEntity`

Create a new `ChecklistEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ClaimableOrganizationEntity

```php
$claimable_organization = $client->ClaimableOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeMembershipCount` | `float` | No |  |
| `dateLastActive` | `string` | No | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idActiveAdmins` | `array` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `products` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ClaimableOrganization()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClaimableOrganizationEntity`

Create a new `ClaimableOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomBoardBackgroundEntity

```php
$custom_board_background = $client->CustomBoardBackground();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomBoardBackground()->remove(["id" => "id", "member_id" => "member_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomBoardBackgroundEntity`

Create a new `CustomBoardBackgroundEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomEmojiEntity

```php
$custom_emoji = $client->CustomEmoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomEmoji()->create([
  "member_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomEmoji()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomEmoji()->load(["id" => "custom_emoji_id", "member_id" => "member_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomEmojiEntity`

Create a new `CustomEmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldEntity

```php
$custom_field = $client->CustomField();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cardFront` | `bool` | No |  |
| `display` | `array` | No |  |
| `display_cardFront` | `bool` | No | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | No | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | Yes | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | Yes | The type of model that the Custom Field is being defined on. |
| `name` | `string` | No | The name of the Custom Field |
| `options` | `array` | No | If the type is `checkbox` |
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomField()->create([
  "idModel" => null, // string
  "modelType" => null, // string
  "type" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomField()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomField()->remove(["id" => "custom_field_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->CustomField()->update([
  "id" => "custom_field_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldEntity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomFieldItemEntity

```php
$custom_field_item = $client->CustomFieldItem();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idCustomField` | `string` | No |  |
| `idModel` | `string` | No |  |
| `modelType` | `string` | No |  |
| `value` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomFieldItem()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomFieldItemEntity`

Create a new `CustomFieldItemEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CustomStickerEntity

```php
$custom_sticker = $client->CustomSticker();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scaled` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CustomSticker()->create([
  "member_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->CustomSticker()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->CustomSticker()->load(["id" => "custom_sticker_id", "member_id" => "member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->CustomSticker()->remove(["id" => "custom_sticker_id", "member_id" => "member_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CustomStickerEntity`

Create a new `CustomStickerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmailPositionEntity

```php
$email_position = $client->EmailPosition();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EmailPosition()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmailPositionEntity`

Create a new `EmailPositionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmojiEntity

```php
$emoji = $client->Emoji();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `keywords` | `array` | No |  |
| `name` | `string` | No |  |
| `native` | `string` | No |  |
| `sheetX` | `float` | No |  |
| `sheetY` | `float` | No |  |
| `shortName` | `string` | No |  |
| `shortNames` | `array` | No |  |
| `text` | `string` | No |  |
| `texts` | `string` | No |  |
| `tts` | `string` | No |  |
| `unified` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Emoji()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmojiEntity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterprisEntity

```php
$enterpris = $client->Enterpris();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` | No |  |
| `displayName` | `string` | No |  |
| `domains` | `array` | No |  |
| `enterpriseDomains` | `array` | No |  |
| `id` | `string` | No |  |
| `idAdmins` | `array` | No |  |
| `idOrganizations` | `array` | No |  |
| `idp` | `array` | No |  |
| `isRealEnterprise` | `bool` | No |  |
| `licenses` | `array` | No |  |
| `logoHash` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `organizationPrefs` | `array` | No |  |
| `pluginWhitelistingEnabled` | `array` | No |  |
| `prefs` | `array` | No |  |
| `products` | `array` | No |  |
| `ssoActivationFailed` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Enterpris()->create([
  "id" => null, // string
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Enterpris()->load(["id" => "enterpris_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Enterpris()->update([
  "id" => "enterpris_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterprisEntity`

Create a new `EnterprisEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterprisSignupUrlEntity

```php
$enterpris_signup_url = $client->EnterprisSignupUrl();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signupUrl` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EnterprisSignupUrl()->load(["id" => "enterpris_signup_url_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterprisSignupUrlEntity`

Create a new `EnterprisSignupUrlEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseAdminEntity

```php
$enterprise_admin = $client->EnterpriseAdmin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullName` | `string` | No |  |
| `id` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EnterpriseAdmin()->load(["enterpris_id" => "enterpris_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseAdminEntity`

Create a new `EnterpriseAdminEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnterpriseAuditLogEntity

```php
$enterprise_audit_log = $client->EnterpriseAuditLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `idAction` | `string` | No |  |
| `member` | `array` | No |  |
| `memberCreator` | `array` | No |  |
| `organization` | `array` | No |  |
| `type` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnterpriseAuditLog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnterpriseAuditLogEntity`

Create a new `EnterpriseAuditLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExportEntity

```php
$export = $client->Export();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attempts` | `float` | No |  |
| `exportUrl` | `string` | No |  |
| `finished` | `bool` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `stage` | `string` | No |  |
| `startedAt` | `string` | No |  |
| `status` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Export()->create([
  "board_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Export()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Export()->load(["id" => "export_id", "board_id" => "board_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Export()->remove(["id" => "export_id", "board_id" => "board_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExportEntity`

Create a new `ExportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ExportDownloadEntity

```php
$export_download = $client->ExportDownload();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ExportDownload()->load(["board_id" => "board_id", "id_export" => "id_export"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ExportDownloadEntity`

Create a new `ExportDownloadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GenerateEntity

```php
$generate = $client->Generate();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Generate()->create([
  "board_id" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GenerateEntity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IdEmailListEntity

```php
$id_email_list = $client->IdEmailList();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->IdEmailList()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IdEmailListEntity`

Create a new `IdEmailListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IdLabelEntity

```php
$id_label = $client->IdLabel();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IdLabel()->remove(["card_id" => "card_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IdLabelEntity`

Create a new `IdLabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## IdMemberEntity

```php
$id_member = $client->IdMember();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->IdMember()->remove(["card_id" => "card_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): IdMemberEntity`

Create a new `IdMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LabelEntity

```php
$label = $client->Label();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Label()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Label()->load(["id" => "label_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Label()->remove(["id" => "label_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Label()->update([
  "id" => "label_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LabelEntity`

Create a new `LabelEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListEntity

```php
$list = $client->List();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->List()->create([
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->List()->load(["id" => "list_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->List()->update([
  "id" => "list_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListEntity`

Create a new `ListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aaEmail` | `string` | No |  |
| `aaEnrolledDate` | `string` | No |  |
| `aaId` | `string` | No |  |
| `activityBlocked` | `bool` | No |  |
| `avatarHash` | `string` | No |  |
| `avatarSource` | `string` | No |  |
| `avatarUrl` | `string` | No |  |
| `bio` | `string` | No |  |
| `bioData` | `array` | No |  |
| `confirmed` | `bool` | No |  |
| `email` | `string` | No |  |
| `fullName` | `string` | No |  |
| `gravatarHash` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `array` | No |  |
| `idBoardsPinned` | `array` | No |  |
| `idEnterprise` | `string` | No |  |
| `idEnterprisesAdmin` | `array` | No |  |
| `idEnterprisesDeactivated` | `array` | No |  |
| `idMemberReferrer` | `string` | No |  |
| `idOrganizations` | `array` | No |  |
| `idPremOrgsAdmin` | `array` | No |  |
| `initials` | `string` | No |  |
| `isAaMastered` | `bool` | No |  |
| `ixUpdate` | `float` | No |  |
| `limits` | `array` | No |  |
| `loginTypes` | `array` | No |  |
| `marketingOptIn` | `array` | No |  |
| `memberType` | `string` | No |  |
| `messagesDismissed` | `array` | No |  |
| `nonPublic` | `array` | No | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | No | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `array` | No |  |
| `prefs` | `array` | No |  |
| `premiumFeatures` | `array` | No |  |
| `products` | `array` | No |  |
| `status` | `string` | No |  |
| `trophies` | `array` | No |  |
| `uploadedAvatarHash` | `string` | No |  |
| `uploadedAvatarUrl` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Member()->create([
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Member()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->load(["id" => "member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Member()->remove(["id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Member()->update([
  "id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberPrivacyEntity

```php
$member_privacy = $client->MemberPrivacy();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MemberPrivacy()->load(["plugin_id" => "plugin_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberPrivacyEntity`

Create a new `MemberPrivacyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MembersVotedEntity

```php
$members_voted = $client->MembersVoted();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->MembersVoted()->load(["card_id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->MembersVoted()->remove(["card_id" => "card_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MembersVotedEntity`

Create a new `MembersVotedEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MembershipEntity

```php
$membership = $client->Membership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `admin` | `bool` | No |  |
| `collaborator` | `bool` | No |  |
| `deactivated` | `bool` | No |  |
| `id` | `string` | No |  |
| `licensed` | `bool` | No |  |
| `managed` | `bool` | No |  |
| `member` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Membership()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Membership()->load(["id" => "membership_id", "organization_id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Membership()->update([
  "id" => "membership_id",
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MembershipEntity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MostRecentEntity

```php
$most_recent = $client->MostRecent();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MostRecentEntity`

Create a new `MostRecentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NewBillableGuestEntity

```php
$new_billable_guest = $client->NewBillableGuest();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NewBillableGuest()->load(["id" => "new_billable_guest_id", "organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NewBillableGuestEntity`

Create a new `NewBillableGuestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationEntity

```php
$notification = $client->Notification();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `array` | Yes |  |
| `card` | `array` | No |  |
| `data` | `string` | No |  |
| `date` | `string` | No |  |
| `dateRead` | `string` | No |  |
| `id` | `string` | No |  |
| `idAction` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `reactions` | `array` | No |  |
| `type` | `string` | No |  |
| `unread` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Notification()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Notification()->load(["id" => "notification_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Notification()->update([
  "id" => "notification_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationEntity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationChannelSettingEntity

```php
$notification_channel_setting = $client->NotificationChannelSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedKeys` | `array` | No | Singular key or array of notification keys |
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->NotificationChannelSetting()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NotificationChannelSetting()->load(["channel" => "channel", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->NotificationChannelSetting()->update([
  "channel" => "channel",
  "member_id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationChannelSettingEntity`

Create a new `NotificationChannelSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationListEntity

```php
$notification_list = $client->NotificationList();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NotificationList()->load(["id" => "notification_list_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationListEntity`

Create a new `NotificationListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationMemberCreatorEntity

```php
$notification_member_creator = $client->NotificationMemberCreator();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NotificationMemberCreator()->load(["id" => "notification_member_creator_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationMemberCreatorEntity`

Create a new `NotificationMemberCreatorEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NotificationsChannelSettingEntity

```php
$notifications_channel_setting = $client->NotificationsChannelSetting();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NotificationsChannelSettingEntity`

Create a new `NotificationsChannelSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OptionEntity

```php
$option = $client->Option();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Option()->load(["id" => "option_id", "custom_field_id" => "custom_field_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Option()->remove(["id" => "option_id", "custom_field_id" => "custom_field_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OptionEntity`

Create a new `OptionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgInviteRestrictEntity

```php
$org_invite_restrict = $client->OrgInviteRestrict();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->OrgInviteRestrict()->remove(["organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgInviteRestrictEntity`

Create a new `OrgInviteRestrictEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationEntity

```php
$organization = $client->Organization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateLastActivity` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `array` | No |  |
| `idEnterprise` | `string` | No |  |
| `memberships` | `array` | No |  |
| `name` | `string` | No |  |
| `offering` | `string` | No |  |
| `prefs` | `array` | No |  |
| `premiumFeatures` | `array` | No |  |
| `url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Organization()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Organization()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->load(["id" => "organization_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Organization()->remove(["id" => "organization_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Organization()->update([
  "id" => "organization_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationEntity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PendingOrganizationEntity

```php
$pending_organization = $client->PendingOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `memberRequestor` | `array` | No |  |
| `membershipCount` | `float` | No |  |
| `transferability` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PendingOrganization()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PendingOrganizationEntity`

Create a new `PendingOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PluginEntity

```php
$plugin = $client->Plugin();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Plugin()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Plugin()->load(["id" => "plugin_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Plugin()->update([
  "id" => "plugin_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PluginEntity`

Create a new `PluginEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PluginDataEntity

```php
$plugin_data = $client->PluginData();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PluginData()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PluginData()->load(["card_id" => "card_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PluginDataEntity`

Create a new `PluginDataEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PluginListingEntity

```php
$plugin_listing = $client->PluginListing();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PluginListing()->create([
  "id_plugin" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PluginListing()->update([
  "id" => "id",
  "id_plugin" => "id_plugin",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PluginListingEntity`

Create a new `PluginListingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReactionEntity

```php
$reaction = $client->Reaction();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Reaction()->load(["id" => "reaction_id", "id_action" => "id_action"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Reaction()->remove(["id" => "reaction_id", "id_action" => "id_action"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReactionEntity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReadEntity

```php
$read = $client->Read();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Read()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReadEntity`

Create a new `ReadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SavedSearchEntity

```php
$saved_search = $client->SavedSearch();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `mixed` | No |  |
| `query` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->SavedSearch()->create([
  "member_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->SavedSearch()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->SavedSearch()->load(["id" => "saved_search_id", "member_id" => "member_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->SavedSearch()->remove(["id" => "saved_search_id", "member_id" => "member_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->SavedSearch()->update([
  "id" => "saved_search_id",
  "member_id" => "member_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SavedSearchEntity`

Create a new `SavedSearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SearchEntity

```php
$search = $client->Search();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Search()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SearchEntity`

Create a new `SearchEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShowSidebarEntity

```php
$show_sidebar = $client->ShowSidebar();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ShowSidebar()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShowSidebarEntity`

Create a new `ShowSidebarEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShowSidebarActivityEntity

```php
$show_sidebar_activity = $client->ShowSidebarActivity();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ShowSidebarActivity()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShowSidebarActivityEntity`

Create a new `ShowSidebarActivityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShowSidebarBoardActionEntity

```php
$show_sidebar_board_action = $client->ShowSidebarBoardAction();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ShowSidebarBoardAction()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShowSidebarBoardActionEntity`

Create a new `ShowSidebarBoardActionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ShowSidebarMemberEntity

```php
$show_sidebar_member = $client->ShowSidebarMember();
```

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ShowSidebarMember()->update([
  "board_id" => "board_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ShowSidebarMemberEntity`

Create a new `ShowSidebarMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StickerEntity

```php
$sticker = $client->Sticker();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Sticker()->load(["id" => "sticker_id", "card_id" => "card_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Sticker()->remove(["id" => "sticker_id", "card_id" => "card_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Sticker()->update([
  "id" => "sticker_id",
  "card_id" => "card_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StickerEntity`

Create a new `StickerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Tag()->list();
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Tag()->remove(["id" => "id", "organization_id" => "organization_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TokenEntity

```php
$token = $client->Token();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateCreated` | `string` | No |  |
| `dateExpires` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `identifier` | `string` | No |  |
| `permissions` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Token()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Token()->load(["id" => "token_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Token()->remove(["id" => "token_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TokenEntity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransferrableOrganizationEntity

```php
$transferrable_organization = $client->TransferrableOrganization();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newBillableMembers` | `array` | No |  |
| `restrictedMembers` | `array` | No |  |
| `transferrable` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TransferrableOrganization()->load(["id" => "transferrable_organization_id", "enterpris_id" => "enterpris_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransferrableOrganizationEntity`

Create a new `TransferrableOrganizationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TrelloListEntity

```php
$trello_list = $client->TrelloList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `array` | No |  |
| `closed` | `bool` | No |  |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `limits` | `array` | No |  |
| `name` | `string` | No | The name of the list |
| `pos` | `float` | No |  |
| `softLimit` | `string` | No |  |
| `subscribed` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->TrelloList()->create([
  "board_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->TrelloList()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->TrelloList()->load(["action_id" => "action_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TrelloListEntity`

Create a new `TrelloListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `callbackURL` | `string` | No |  |
| `consecutiveFailures` | `float` | No |  |
| `description` | `string` | No |  |
| `firstConsecutiveFailDate` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Webhook()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webhook()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["id" => "webhook_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Webhook()->update([
  "id" => "webhook_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new TrelloSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

