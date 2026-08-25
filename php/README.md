# Trello PHP SDK



The PHP SDK for the Trello API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Action()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/trello-sdk/releases](https://github.com/voxgig-sdk/trello-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'trello_sdk.php';

$client = new TrelloSDK([
    "apikey" => getenv("TRELLO_APIKEY"),
]);
```

### 2. List action records

```php
try {
    // list() returns an array of Action records — iterate directly.
    $actions = $client->Action()->list();
    foreach ($actions as $item) {
        echo $item["id"] . " " . $item["data"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an actionreactionssummary

ActionReactionsSummary is nested under id_action, so provide the `id_action`.

```php
try {
    // load() returns the ENTITY — call data_get() for the ActionReactionsSummary record (throws on error).
    $actionreactionssummary = $client->ActionReactionsSummary()->load(["id_action" => "example_id_action"]);
    print_r($actionreactionssummary);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created Action record.
$created = $client->Action()->create(["id_action" => "example_id_action"]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->Action()->update(["id" => $created->data_get()["id"], "data" => [], "date" => "example_date"]);

// Remove
$client->Action()->remove(["id" => $created->data_get()["id"]]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $boardstars = $client->BoardStar()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = TrelloSDK::test([
    "entity" => ["boardstar" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$boardstar = $client->BoardStar()->list();
print_r($boardstar);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new TrelloSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
TRELLO_TEST_LIVE=TRUE
TRELLO_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### TrelloSDK

```php
require_once 'trello_sdk.php';
$client = new TrelloSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = TrelloSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### TrelloSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Action` | `($data): ActionEntity` | Create an Action entity instance. |
| `ActionReactionsSummary` | `($data): ActionReactionsSummaryEntity` | Create an ActionReactionsSummary entity instance. |
| `Admin` | `($data): AdminEntity` | Create an Admin entity instance. |
| `Application` | `($data): ApplicationEntity` | Create an Application entity instance. |
| `ApplicationCompliance` | `($data): ApplicationComplianceEntity` | Create an ApplicationCompliance entity instance. |
| `AssociatedDomain` | `($data): AssociatedDomainEntity` | Create an AssociatedDomain entity instance. |
| `Attachment` | `($data): AttachmentEntity` | Create an Attachment entity instance. |
| `Batch` | `($data): BatchEntity` | Create a Batch entity instance. |
| `Board` | `($data): BoardEntity` | Create a Board entity instance. |
| `BoardBackground` | `($data): BoardBackgroundEntity` | Create a BoardBackground entity instance. |
| `BoardPlugin` | `($data): BoardPluginEntity` | Create a BoardPlugin entity instance. |
| `BoardStar` | `($data): BoardStarEntity` | Create a BoardStar entity instance. |
| `Bulk` | `($data): BulkEntity` | Create a Bulk entity instance. |
| `Card` | `($data): CardEntity` | Create a Card entity instance. |
| `CardCheckItemState` | `($data): CardCheckItemStateEntity` | Create a CardCheckItemState entity instance. |
| `CardList` | `($data): CardListEntity` | Create a CardList entity instance. |
| `CheckItem` | `($data): CheckItemEntity` | Create a CheckItem entity instance. |
| `Checklist` | `($data): ChecklistEntity` | Create a Checklist entity instance. |
| `ClaimableOrganization` | `($data): ClaimableOrganizationEntity` | Create a ClaimableOrganization entity instance. |
| `CustomBoardBackground` | `($data): CustomBoardBackgroundEntity` | Create a CustomBoardBackground entity instance. |
| `CustomEmoji` | `($data): CustomEmojiEntity` | Create a CustomEmoji entity instance. |
| `CustomField` | `($data): CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldItem` | `($data): CustomFieldItemEntity` | Create a CustomFieldItem entity instance. |
| `CustomSticker` | `($data): CustomStickerEntity` | Create a CustomSticker entity instance. |
| `EmailPosition` | `($data): EmailPositionEntity` | Create an EmailPosition entity instance. |
| `Emoji` | `($data): EmojiEntity` | Create an Emoji entity instance. |
| `Enterpris` | `($data): EnterprisEntity` | Create an Enterpris entity instance. |
| `EnterprisSignupUrl` | `($data): EnterprisSignupUrlEntity` | Create an EnterprisSignupUrl entity instance. |
| `EnterpriseAdmin` | `($data): EnterpriseAdminEntity` | Create an EnterpriseAdmin entity instance. |
| `EnterpriseAuditLog` | `($data): EnterpriseAuditLogEntity` | Create an EnterpriseAuditLog entity instance. |
| `Export` | `($data): ExportEntity` | Create an Export entity instance. |
| `ExportDownload` | `($data): ExportDownloadEntity` | Create an ExportDownload entity instance. |
| `Generate` | `($data): GenerateEntity` | Create a Generate entity instance. |
| `IdEmailList` | `($data): IdEmailListEntity` | Create an IdEmailList entity instance. |
| `IdLabel` | `($data): IdLabelEntity` | Create an IdLabel entity instance. |
| `IdMember` | `($data): IdMemberEntity` | Create an IdMember entity instance. |
| `Label` | `($data): LabelEntity` | Create a Label entity instance. |
| `List` | `($data): ListEntity` | Create a List entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `MemberPrivacy` | `($data): MemberPrivacyEntity` | Create a MemberPrivacy entity instance. |
| `MembersVoted` | `($data): MembersVotedEntity` | Create a MembersVoted entity instance. |
| `Membership` | `($data): MembershipEntity` | Create a Membership entity instance. |
| `MostRecent` | `($data): MostRecentEntity` | Create a MostRecent entity instance. |
| `NewBillableGuest` | `($data): NewBillableGuestEntity` | Create a NewBillableGuest entity instance. |
| `Notification` | `($data): NotificationEntity` | Create a Notification entity instance. |
| `NotificationChannelSetting` | `($data): NotificationChannelSettingEntity` | Create a NotificationChannelSetting entity instance. |
| `NotificationList` | `($data): NotificationListEntity` | Create a NotificationList entity instance. |
| `NotificationMemberCreator` | `($data): NotificationMemberCreatorEntity` | Create a NotificationMemberCreator entity instance. |
| `NotificationsChannelSetting` | `($data): NotificationsChannelSettingEntity` | Create a NotificationsChannelSetting entity instance. |
| `Option` | `($data): OptionEntity` | Create an Option entity instance. |
| `OrgInviteRestrict` | `($data): OrgInviteRestrictEntity` | Create an OrgInviteRestrict entity instance. |
| `Organization` | `($data): OrganizationEntity` | Create an Organization entity instance. |
| `PendingOrganization` | `($data): PendingOrganizationEntity` | Create a PendingOrganization entity instance. |
| `Plugin` | `($data): PluginEntity` | Create a Plugin entity instance. |
| `PluginData` | `($data): PluginDataEntity` | Create a PluginData entity instance. |
| `PluginListing` | `($data): PluginListingEntity` | Create a PluginListing entity instance. |
| `Reaction` | `($data): ReactionEntity` | Create a Reaction entity instance. |
| `Read` | `($data): ReadEntity` | Create a Read entity instance. |
| `SavedSearch` | `($data): SavedSearchEntity` | Create a SavedSearch entity instance. |
| `Search` | `($data): SearchEntity` | Create a Search entity instance. |
| `ShowSidebar` | `($data): ShowSidebarEntity` | Create a ShowSidebar entity instance. |
| `ShowSidebarActivity` | `($data): ShowSidebarActivityEntity` | Create a ShowSidebarActivity entity instance. |
| `ShowSidebarBoardAction` | `($data): ShowSidebarBoardActionEntity` | Create a ShowSidebarBoardAction entity instance. |
| `ShowSidebarMember` | `($data): ShowSidebarMemberEntity` | Create a ShowSidebarMember entity instance. |
| `Sticker` | `($data): StickerEntity` | Create a Sticker entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `Token` | `($data): TokenEntity` | Create a Token entity instance. |
| `TransferrableOrganization` | `($data): TransferrableOrganizationEntity` | Create a TransferrableOrganization entity instance. |
| `TrelloList` | `($data): TrelloListEntity` | Create a TrelloList entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$action = $client->Action();`

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
| `data` | `array` |  |
| `date` | `string` |  |
| `display` | `array` |  |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `limits` | `array` |  |
| `memberCreator` | `array` |  |
| `native` | `string` | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | The `skinVariation` of the emoji to add. |
| `type` | `string` |  |
| `unified` | `string` | The `unified` value of the emoji to add. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Action record (throws on error).
$action = $client->Action()->load(["id" => "action_id"]);
```

#### Example: List

```php
// list() returns an array of Action records (throws on error).
$actions = $client->Action()->list();
```

#### Example: Create

```php
$action = $client->Action()->create([
    "id_action" => null, // string
]);
```


### ActionReactionsSummary

Create an instance: `$action_reactions_summary = $client->ActionReactionsSummary();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ActionReactionsSummary record (throws on error).
$action_reactions_summary = $client->ActionReactionsSummary()->load(["id_action" => "id_action"]);
```


### Admin

Create an instance: `$admin = $client->Admin();`

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

Create an instance: `$application = $client->Application();`


### ApplicationCompliance

Create an instance: `$application_compliance = $client->ApplicationCompliance();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ApplicationCompliance record (throws on error).
$application_compliance = $client->ApplicationCompliance()->load(["key" => "key"]);
```


### AssociatedDomain

Create an instance: `$associated_domain = $client->AssociatedDomain();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Attachment

Create an instance: `$attachment = $client->Attachment();`

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

```php
// load() returns the ENTITY — call data_get() for the Attachment record (throws on error).
$attachment = $client->Attachment()->load(["id" => "attachment_id", "card_id" => "card_id"]);
```

#### Example: List

```php
// list() returns an array of Attachment records (throws on error).
$attachments = $client->Attachment()->list();
```


### Batch

Create an instance: `$batch = $client->Batch();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Batch record (throws on error).
$batch = $client->Batch()->load();
```


### Board

Create an instance: `$board = $client->Board();`

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
| `closed` | `bool` |  |
| `creationMethod` | `string` |  |
| `dateLastActivity` | `string` |  |
| `dateLastView` | `string` |  |
| `datePluginDisable` | `string` |  |
| `desc` | `string` |  |
| `descData` | `string` |  |
| `enterpriseOwned` | `bool` |  |
| `fullName` | `string` | The full name of the user to as a member of the board. |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `idOrganization` | `string` |  |
| `idTags` | `string` |  |
| `ixUpdate` | `int` |  |
| `labelNames` | `array` |  |
| `limits` | `array` |  |
| `memberships` | `string` |  |
| `name` | `string` | The name of the board. |
| `pinned` | `bool` |  |
| `powerUps` | `string` |  |
| `prefs` | `array` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `starred` | `bool` |  |
| `subscribed` | `bool` |  |
| `templateGallery` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Board record (throws on error).
$board = $client->Board()->load(["id" => "board_id"]);
```

#### Example: List

```php
// list() returns an array of Board records (throws on error).
$boards = $client->Board()->list();
```

#### Example: Create

```php
$board = $client->Board()->create([
    "id" => null, // string
]);
```


### BoardBackground

Create an instance: `$board_background = $client->BoardBackground();`

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

```php
// load() returns the ENTITY — call data_get() for the BoardBackground record (throws on error).
$board_background = $client->BoardBackground()->load(["id" => "board_background_id", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of BoardBackground records (throws on error).
$board_backgrounds = $client->BoardBackground()->list();
```

#### Example: Create

```php
$board_background = $client->BoardBackground()->create([
    "member_id" => null, // string
]);
```


### BoardPlugin

Create an instance: `$board_plugin = $client->BoardPlugin();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BoardStar

Create an instance: `$board_star = $client->BoardStar();`

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
| `pos` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the BoardStar record (throws on error).
$board_star = $client->BoardStar()->load(["id" => "board_star_id", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of BoardStar records (throws on error).
$board_stars = $client->BoardStar()->list();
```

#### Example: Create

```php
$board_star = $client->BoardStar()->create([
    "member_id" => null, // string
]);
```


### Bulk

Create an instance: `$bulk = $client->Bulk();`

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

```php
// load() returns the ENTITY — call data_get() for the Bulk record (throws on error).
$bulk = $client->Bulk()->load(["id" => [], "enterpris_id" => "enterpris_id"]);
```


### Card

Create an instance: `$card = $client->Card();`

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
| `badges` | `array` |  |
| `cardRole` | `string` |  |
| `checkItemStates` | `array` |  |
| `closed` | `bool` |  |
| `coordinates` | `string` |  |
| `cover` | `array` |  |
| `creationMethod` | `string` |  |
| `customFieldItems` | `array` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` |  |
| `desc` | `string` |  |
| `descData` | `array` |  |
| `due` | `string` |  |
| `dueReminder` | `string` |  |
| `id` | `string` |  |
| `idAttachmentCover` | `string` |  |
| `idBoard` | `string` |  |
| `idChecklists` | `array` |  |
| `idLabels` | `array` |  |
| `idList` | `string` |  |
| `idMembers` | `array` |  |
| `idMembersVoted` | `array` |  |
| `idShort` | `int` |  |
| `labels` | `array` |  |
| `limits` | `array` |  |
| `locationName` | `string` |  |
| `manualCoverAttachment` | `bool` |  |
| `mirrorSourceId` | `string` |  |
| `name` | `string` |  |
| `pos` | `float` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `subscribed` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Card record (throws on error).
$card = $client->Card()->load(["id" => "card_id"]);
```

#### Example: List

```php
// list() returns an array of Card records (throws on error).
$cards = $client->Card()->list();
```

#### Example: Create

```php
$card = $client->Card()->create([
]);
```


### CardCheckItemState

Create an instance: `$card_check_item_state = $client->CardCheckItemState();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CardCheckItemState record (throws on error).
$card_check_item_state = $client->CardCheckItemState()->load(["id" => "card_check_item_state_id"]);
```


### CardList

Create an instance: `$card_list = $client->CardList();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CardList record (throws on error).
$card_list = $client->CardList()->load(["id" => "card_list_id"]);
```


### CheckItem

Create an instance: `$check_item = $client->CheckItem();`

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

```php
// load() returns the ENTITY — call data_get() for the CheckItem record (throws on error).
$check_item = $client->CheckItem()->load(["id" => "check_item_id", "card_id" => "card_id"]);
```


### Checklist

Create an instance: `$checklist = $client->Checklist();`

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

```php
// load() returns the ENTITY — call data_get() for the Checklist record (throws on error).
$checklist = $client->Checklist()->load(["id" => "checklist_id"]);
```

#### Example: Create

```php
$checklist = $client->Checklist()->create([
]);
```


### ClaimableOrganization

Create an instance: `$claimable_organization = $client->ClaimableOrganization();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeMembershipCount` | `float` |  |
| `dateLastActive` | `string` | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idActiveAdmins` | `array` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `products` | `array` |  |

#### Example: List

```php
// list() returns an array of ClaimableOrganization records (throws on error).
$claimable_organizations = $client->ClaimableOrganization()->list();
```


### CustomBoardBackground

Create an instance: `$custom_board_background = $client->CustomBoardBackground();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomEmoji

Create an instance: `$custom_emoji = $client->CustomEmoji();`

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

```php
// load() returns the ENTITY — call data_get() for the CustomEmoji record (throws on error).
$custom_emoji = $client->CustomEmoji()->load(["id" => "custom_emoji_id", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of CustomEmoji records (throws on error).
$custom_emojis = $client->CustomEmoji()->list();
```

#### Example: Create

```php
$custom_emoji = $client->CustomEmoji()->create([
    "member_id" => null, // string
]);
```


### CustomField

Create an instance: `$custom_field = $client->CustomField();`

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
| `cardFront` | `bool` |  |
| `display` | `array` |  |
| `display_cardFront` | `bool` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | The type of model that the Custom Field is being defined on. |
| `name` | `string` | The name of the Custom Field |
| `options` | `array` | If the type is `checkbox` |
| `pos` | `string` |  |
| `type` | `string` | The type of Custom Field to create. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomField record (throws on error).
$custom_field = $client->CustomField()->load(["id" => "custom_field_id"]);
```

#### Example: List

```php
// list() returns an array of CustomField records (throws on error).
$custom_fields = $client->CustomField()->list();
```

#### Example: Create

```php
$custom_field = $client->CustomField()->create([
    "idModel" => null, // string
    "modelType" => null, // string
    "type" => null, // string
]);
```


### CustomFieldItem

Create an instance: `$custom_field_item = $client->CustomFieldItem();`

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
| `value` | `array` |  |

#### Example: List

```php
// list() returns an array of CustomFieldItem records (throws on error).
$custom_field_items = $client->CustomFieldItem()->list();
```


### CustomSticker

Create an instance: `$custom_sticker = $client->CustomSticker();`

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
| `scaled` | `array` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the CustomSticker record (throws on error).
$custom_sticker = $client->CustomSticker()->load(["id" => "custom_sticker_id", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of CustomSticker records (throws on error).
$custom_stickers = $client->CustomSticker()->list();
```

#### Example: Create

```php
$custom_sticker = $client->CustomSticker()->create([
    "member_id" => null, // string
]);
```


### EmailPosition

Create an instance: `$email_position = $client->EmailPosition();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Emoji

Create an instance: `$emoji = $client->Emoji();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `keywords` | `array` |  |
| `name` | `string` |  |
| `native` | `string` |  |
| `sheetX` | `float` |  |
| `sheetY` | `float` |  |
| `shortName` | `string` |  |
| `shortNames` | `array` |  |
| `text` | `string` |  |
| `texts` | `string` |  |
| `tts` | `string` |  |
| `unified` | `string` |  |

#### Example: List

```php
// list() returns an array of Emoji records (throws on error).
$emojis = $client->Emoji()->list();
```


### Enterpris

Create an instance: `$enterpris = $client->Enterpris();`

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
| `domains` | `array` |  |
| `enterpriseDomains` | `array` |  |
| `id` | `string` |  |
| `idAdmins` | `array` |  |
| `idOrganizations` | `array` |  |
| `idp` | `array` |  |
| `isRealEnterprise` | `bool` |  |
| `licenses` | `array` |  |
| `logoHash` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `organizationPrefs` | `array` |  |
| `pluginWhitelistingEnabled` | `array` |  |
| `prefs` | `array` |  |
| `products` | `array` |  |
| `ssoActivationFailed` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Enterpris record (throws on error).
$enterpris = $client->Enterpris()->load(["id" => "enterpris_id"]);
```

#### Example: Create

```php
$enterpris = $client->Enterpris()->create([
    "id" => null, // string
]);
```


### EnterprisSignupUrl

Create an instance: `$enterpris_signup_url = $client->EnterprisSignupUrl();`

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

```php
// load() returns the ENTITY — call data_get() for the EnterprisSignupUrl record (throws on error).
$enterpris_signup_url = $client->EnterprisSignupUrl()->load(["id" => "enterpris_signup_url_id"]);
```


### EnterpriseAdmin

Create an instance: `$enterprise_admin = $client->EnterpriseAdmin();`

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

```php
// load() returns the ENTITY — call data_get() for the EnterpriseAdmin record (throws on error).
$enterprise_admin = $client->EnterpriseAdmin()->load(["enterpris_id" => "enterpris_id"]);
```


### EnterpriseAuditLog

Create an instance: `$enterprise_audit_log = $client->EnterpriseAuditLog();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `idAction` | `string` |  |
| `member` | `array` |  |
| `memberCreator` | `array` |  |
| `organization` | `array` |  |
| `type` | `string` |  |

#### Example: List

```php
// list() returns an array of EnterpriseAuditLog records (throws on error).
$enterprise_audit_logs = $client->EnterpriseAuditLog()->list();
```


### Export

Create an instance: `$export = $client->Export();`

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
| `attempts` | `float` |  |
| `exportUrl` | `string` |  |
| `finished` | `bool` |  |
| `id` | `string` |  |
| `size` | `string` |  |
| `stage` | `string` |  |
| `startedAt` | `string` |  |
| `status` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Export record (throws on error).
$export = $client->Export()->load(["id" => "export_id", "board_id" => "board_id"]);
```

#### Example: List

```php
// list() returns an array of Export records (throws on error).
$exports = $client->Export()->list();
```

#### Example: Create

```php
$export = $client->Export()->create([
    "board_id" => null, // string
]);
```


### ExportDownload

Create an instance: `$export_download = $client->ExportDownload();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ExportDownload record (throws on error).
$export_download = $client->ExportDownload()->load(["board_id" => "board_id", "id_export" => "id_export"]);
```


### Generate

Create an instance: `$generate = $client->Generate();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$generate = $client->Generate()->create([
    "board_id" => null, // string
]);
```


### IdEmailList

Create an instance: `$id_email_list = $client->IdEmailList();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### IdLabel

Create an instance: `$id_label = $client->IdLabel();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### IdMember

Create an instance: `$id_member = $client->IdMember();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Label

Create an instance: `$label = $client->Label();`

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

```php
// load() returns the ENTITY — call data_get() for the Label record (throws on error).
$label = $client->Label()->load(["id" => "label_id"]);
```

#### Example: Create

```php
$label = $client->Label()->create([
]);
```


### List

Create an instance: `$list = $client->List();`

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

```php
// load() returns the ENTITY — call data_get() for the List record (throws on error).
$list = $client->List()->load(["id" => "list_id"]);
```

#### Example: Create

```php
$list = $client->List()->create([
]);
```


### Member

Create an instance: `$member = $client->Member();`

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
| `activityBlocked` | `bool` |  |
| `avatarHash` | `string` |  |
| `avatarSource` | `string` |  |
| `avatarUrl` | `string` |  |
| `bio` | `string` |  |
| `bioData` | `array` |  |
| `confirmed` | `bool` |  |
| `email` | `string` |  |
| `fullName` | `string` |  |
| `gravatarHash` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `array` |  |
| `idBoardsPinned` | `array` |  |
| `idEnterprise` | `string` |  |
| `idEnterprisesAdmin` | `array` |  |
| `idEnterprisesDeactivated` | `array` |  |
| `idMemberReferrer` | `string` |  |
| `idOrganizations` | `array` |  |
| `idPremOrgsAdmin` | `array` |  |
| `initials` | `string` |  |
| `isAaMastered` | `bool` |  |
| `ixUpdate` | `float` |  |
| `limits` | `array` |  |
| `loginTypes` | `array` |  |
| `marketingOptIn` | `array` |  |
| `memberType` | `string` |  |
| `messagesDismissed` | `array` |  |
| `nonPublic` | `array` | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `array` |  |
| `prefs` | `array` |  |
| `premiumFeatures` | `array` |  |
| `products` | `array` |  |
| `status` | `string` |  |
| `trophies` | `array` |  |
| `uploadedAvatarHash` | `string` |  |
| `uploadedAvatarUrl` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Member record (throws on error).
$member = $client->Member()->load(["id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of Member records (throws on error).
$members = $client->Member()->list();
```

#### Example: Create

```php
$member = $client->Member()->create([
    "id" => null, // string
]);
```


### MemberPrivacy

Create an instance: `$member_privacy = $client->MemberPrivacy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the MemberPrivacy record (throws on error).
$member_privacy = $client->MemberPrivacy()->load(["plugin_id" => "plugin_id"]);
```


### MembersVoted

Create an instance: `$members_voted = $client->MembersVoted();`

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

```php
// load() returns the ENTITY — call data_get() for the MembersVoted record (throws on error).
$members_voted = $client->MembersVoted()->load(["card_id" => "card_id"]);
```


### Membership

Create an instance: `$membership = $client->Membership();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin` | `bool` |  |
| `collaborator` | `bool` |  |
| `deactivated` | `bool` |  |
| `id` | `string` |  |
| `licensed` | `bool` |  |
| `managed` | `bool` |  |
| `member` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Membership record (throws on error).
$membership = $client->Membership()->load(["id" => "membership_id", "organization_id" => "organization_id"]);
```

#### Example: List

```php
// list() returns an array of Membership records (throws on error).
$memberships = $client->Membership()->list();
```


### MostRecent

Create an instance: `$most_recent = $client->MostRecent();`


### NewBillableGuest

Create an instance: `$new_billable_guest = $client->NewBillableGuest();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NewBillableGuest record (throws on error).
$new_billable_guest = $client->NewBillableGuest()->load(["id" => "new_billable_guest_id", "organization_id" => "organization_id"]);
```


### Notification

Create an instance: `$notification = $client->Notification();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `array` |  |
| `card` | `array` |  |
| `data` | `string` |  |
| `date` | `string` |  |
| `dateRead` | `string` |  |
| `id` | `string` |  |
| `idAction` | `string` |  |
| `idMemberCreator` | `string` |  |
| `reactions` | `array` |  |
| `type` | `string` |  |
| `unread` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Notification record (throws on error).
$notification = $client->Notification()->load(["id" => "notification_id"]);
```

#### Example: List

```php
// list() returns an array of Notification records (throws on error).
$notifications = $client->Notification()->list();
```


### NotificationChannelSetting

Create an instance: `$notification_channel_setting = $client->NotificationChannelSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedKeys` | `array` | Singular key or array of notification keys |
| `channel` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NotificationChannelSetting record (throws on error).
$notification_channel_setting = $client->NotificationChannelSetting()->load(["channel" => "channel", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of NotificationChannelSetting records (throws on error).
$notification_channel_settings = $client->NotificationChannelSetting()->list();
```


### NotificationList

Create an instance: `$notification_list = $client->NotificationList();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NotificationList record (throws on error).
$notification_list = $client->NotificationList()->load(["id" => "notification_list_id"]);
```


### NotificationMemberCreator

Create an instance: `$notification_member_creator = $client->NotificationMemberCreator();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the NotificationMemberCreator record (throws on error).
$notification_member_creator = $client->NotificationMemberCreator()->load(["id" => "notification_member_creator_id"]);
```


### NotificationsChannelSetting

Create an instance: `$notifications_channel_setting = $client->NotificationsChannelSetting();`


### Option

Create an instance: `$option = $client->Option();`

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

```php
// load() returns the ENTITY — call data_get() for the Option record (throws on error).
$option = $client->Option()->load(["id" => "option_id", "custom_field_id" => "custom_field_id"]);
```


### OrgInviteRestrict

Create an instance: `$org_invite_restrict = $client->OrgInviteRestrict();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Organization

Create an instance: `$organization = $client->Organization();`

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
| `idBoards` | `array` |  |
| `idEnterprise` | `string` |  |
| `memberships` | `array` |  |
| `name` | `string` |  |
| `offering` | `string` |  |
| `prefs` | `array` |  |
| `premiumFeatures` | `array` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Organization record (throws on error).
$organization = $client->Organization()->load(["id" => "organization_id"]);
```

#### Example: List

```php
// list() returns an array of Organization records (throws on error).
$organizations = $client->Organization()->list();
```

#### Example: Create

```php
$organization = $client->Organization()->create([
]);
```


### PendingOrganization

Create an instance: `$pending_organization = $client->PendingOrganization();`

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
| `memberRequestor` | `array` |  |
| `membershipCount` | `float` |  |
| `transferability` | `array` |  |

#### Example: List

```php
// list() returns an array of PendingOrganization records (throws on error).
$pending_organizations = $client->PendingOrganization()->list();
```


### Plugin

Create an instance: `$plugin = $client->Plugin();`

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

```php
// load() returns the ENTITY — call data_get() for the Plugin record (throws on error).
$plugin = $client->Plugin()->load(["id" => "plugin_id"]);
```

#### Example: List

```php
// list() returns an array of Plugin records (throws on error).
$plugins = $client->Plugin()->list();
```


### PluginData

Create an instance: `$plugin_data = $client->PluginData();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PluginData record (throws on error).
$plugin_data = $client->PluginData()->load(["card_id" => "card_id"]);
```

#### Example: List

```php
// list() returns an array of PluginData records (throws on error).
$plugin_datas = $client->PluginData()->list();
```


### PluginListing

Create an instance: `$plugin_listing = $client->PluginListing();`

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

```php
$plugin_listing = $client->PluginListing()->create([
    "id_plugin" => null, // string
]);
```


### Reaction

Create an instance: `$reaction = $client->Reaction();`

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

```php
// load() returns the ENTITY — call data_get() for the Reaction record (throws on error).
$reaction = $client->Reaction()->load(["id" => "reaction_id", "id_action" => "id_action"]);
```


### Read

Create an instance: `$read = $client->Read();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$read = $client->Read()->create([
]);
```


### SavedSearch

Create an instance: `$saved_search = $client->SavedSearch();`

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
| `pos` | `mixed` |  |
| `query` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the SavedSearch record (throws on error).
$saved_search = $client->SavedSearch()->load(["id" => "saved_search_id", "member_id" => "member_id"]);
```

#### Example: List

```php
// list() returns an array of SavedSearch records (throws on error).
$saved_searchs = $client->SavedSearch()->list();
```

#### Example: Create

```php
$saved_search = $client->SavedSearch()->create([
    "member_id" => null, // string
]);
```


### Search

Create an instance: `$search = $client->Search();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```php
// list() returns an array of Search records (throws on error).
$searchs = $client->Search()->list();
```


### ShowSidebar

Create an instance: `$show_sidebar = $client->ShowSidebar();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarActivity

Create an instance: `$show_sidebar_activity = $client->ShowSidebarActivity();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarBoardAction

Create an instance: `$show_sidebar_board_action = $client->ShowSidebarBoardAction();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarMember

Create an instance: `$show_sidebar_member = $client->ShowSidebarMember();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Sticker

Create an instance: `$sticker = $client->Sticker();`

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

```php
// load() returns the ENTITY — call data_get() for the Sticker record (throws on error).
$sticker = $client->Sticker()->load(["id" => "sticker_id", "card_id" => "card_id"]);
```


### Tag

Create an instance: `$tag = $client->Tag();`

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

```php
// list() returns an array of Tag records (throws on error).
$tags = $client->Tag()->list();
```


### Token

Create an instance: `$token = $client->Token();`

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
| `permissions` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Token record (throws on error).
$token = $client->Token()->load(["id" => "token_id"]);
```

#### Example: List

```php
// list() returns an array of Token records (throws on error).
$tokens = $client->Token()->list();
```


### TransferrableOrganization

Create an instance: `$transferrable_organization = $client->TransferrableOrganization();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `newBillableMembers` | `array` |  |
| `restrictedMembers` | `array` |  |
| `transferrable` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TransferrableOrganization record (throws on error).
$transferrable_organization = $client->TransferrableOrganization()->load(["id" => "transferrable_organization_id", "enterpris_id" => "enterpris_id"]);
```


### TrelloList

Create an instance: `$trello_list = $client->TrelloList();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `array` |  |
| `closed` | `bool` |  |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `limits` | `array` |  |
| `name` | `string` | The name of the list |
| `pos` | `float` |  |
| `softLimit` | `string` |  |
| `subscribed` | `bool` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the TrelloList record (throws on error).
$trello_list = $client->TrelloList()->load(["action_id" => "action_id"]);
```

#### Example: List

```php
// list() returns an array of TrelloList records (throws on error).
$trello_lists = $client->TrelloList()->list();
```

#### Example: Create

```php
$trello_list = $client->TrelloList()->create([
    "board_id" => null, // string
]);
```


### Webhook

Create an instance: `$webhook = $client->Webhook();`

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
| `active` | `bool` |  |
| `callbackURL` | `string` |  |
| `consecutiveFailures` | `float` |  |
| `description` | `string` |  |
| `firstConsecutiveFailDate` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Webhook record (throws on error).
$webhook = $client->Webhook()->load(["id" => "webhook_id"]);
```

#### Example: List

```php
// list() returns an array of Webhook records (throws on error).
$webhooks = $client->Webhook()->list();
```

#### Example: Create

```php
$webhook = $client->Webhook()->create([
]);
```


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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── trello_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`trello_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$boardstar = $client->BoardStar();
$boardstar->list();

// $boardstar->data_get() now returns the boardstar data from the last list
// $boardstar->match_get() returns the last match criteria
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
