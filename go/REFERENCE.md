# Trello Golang SDK Reference

Complete API reference for the Trello Golang SDK.


## TrelloSDK

### Constructor

```go
func NewTrelloSDK(options map[string]any) *TrelloSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *TrelloSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *TrelloSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Action(data map[string]any) TrelloEntity`

Create a new `Action` entity instance. Pass `nil` for no initial data.

#### `ActionReactionsSummary(data map[string]any) TrelloEntity`

Create a new `ActionReactionsSummary` entity instance. Pass `nil` for no initial data.

#### `Admin(data map[string]any) TrelloEntity`

Create a new `Admin` entity instance. Pass `nil` for no initial data.

#### `Application(data map[string]any) TrelloEntity`

Create a new `Application` entity instance. Pass `nil` for no initial data.

#### `ApplicationCompliance(data map[string]any) TrelloEntity`

Create a new `ApplicationCompliance` entity instance. Pass `nil` for no initial data.

#### `AssociatedDomain(data map[string]any) TrelloEntity`

Create a new `AssociatedDomain` entity instance. Pass `nil` for no initial data.

#### `Attachment(data map[string]any) TrelloEntity`

Create a new `Attachment` entity instance. Pass `nil` for no initial data.

#### `Batch(data map[string]any) TrelloEntity`

Create a new `Batch` entity instance. Pass `nil` for no initial data.

#### `Board(data map[string]any) TrelloEntity`

Create a new `Board` entity instance. Pass `nil` for no initial data.

#### `BoardBackground(data map[string]any) TrelloEntity`

Create a new `BoardBackground` entity instance. Pass `nil` for no initial data.

#### `BoardPlugin(data map[string]any) TrelloEntity`

Create a new `BoardPlugin` entity instance. Pass `nil` for no initial data.

#### `BoardStar(data map[string]any) TrelloEntity`

Create a new `BoardStar` entity instance. Pass `nil` for no initial data.

#### `Bulk(data map[string]any) TrelloEntity`

Create a new `Bulk` entity instance. Pass `nil` for no initial data.

#### `Card(data map[string]any) TrelloEntity`

Create a new `Card` entity instance. Pass `nil` for no initial data.

#### `CardCheckItemState(data map[string]any) TrelloEntity`

Create a new `CardCheckItemState` entity instance. Pass `nil` for no initial data.

#### `CardList(data map[string]any) TrelloEntity`

Create a new `CardList` entity instance. Pass `nil` for no initial data.

#### `CheckItem(data map[string]any) TrelloEntity`

Create a new `CheckItem` entity instance. Pass `nil` for no initial data.

#### `Checklist(data map[string]any) TrelloEntity`

Create a new `Checklist` entity instance. Pass `nil` for no initial data.

#### `ClaimableOrganization(data map[string]any) TrelloEntity`

Create a new `ClaimableOrganization` entity instance. Pass `nil` for no initial data.

#### `CustomBoardBackground(data map[string]any) TrelloEntity`

Create a new `CustomBoardBackground` entity instance. Pass `nil` for no initial data.

#### `CustomEmoji(data map[string]any) TrelloEntity`

Create a new `CustomEmoji` entity instance. Pass `nil` for no initial data.

#### `CustomField(data map[string]any) TrelloEntity`

Create a new `CustomField` entity instance. Pass `nil` for no initial data.

#### `CustomFieldItem(data map[string]any) TrelloEntity`

Create a new `CustomFieldItem` entity instance. Pass `nil` for no initial data.

#### `CustomSticker(data map[string]any) TrelloEntity`

Create a new `CustomSticker` entity instance. Pass `nil` for no initial data.

#### `EmailPosition(data map[string]any) TrelloEntity`

Create a new `EmailPosition` entity instance. Pass `nil` for no initial data.

#### `Emoji(data map[string]any) TrelloEntity`

Create a new `Emoji` entity instance. Pass `nil` for no initial data.

#### `Enterpris(data map[string]any) TrelloEntity`

Create a new `Enterpris` entity instance. Pass `nil` for no initial data.

#### `EnterprisSignupUrl(data map[string]any) TrelloEntity`

Create a new `EnterprisSignupUrl` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAdmin(data map[string]any) TrelloEntity`

Create a new `EnterpriseAdmin` entity instance. Pass `nil` for no initial data.

#### `EnterpriseAuditLog(data map[string]any) TrelloEntity`

Create a new `EnterpriseAuditLog` entity instance. Pass `nil` for no initial data.

#### `Export(data map[string]any) TrelloEntity`

Create a new `Export` entity instance. Pass `nil` for no initial data.

#### `ExportDownload(data map[string]any) TrelloEntity`

Create a new `ExportDownload` entity instance. Pass `nil` for no initial data.

#### `Generate(data map[string]any) TrelloEntity`

Create a new `Generate` entity instance. Pass `nil` for no initial data.

#### `IdEmailList(data map[string]any) TrelloEntity`

Create a new `IdEmailList` entity instance. Pass `nil` for no initial data.

#### `IdLabel(data map[string]any) TrelloEntity`

Create a new `IdLabel` entity instance. Pass `nil` for no initial data.

#### `IdMember(data map[string]any) TrelloEntity`

Create a new `IdMember` entity instance. Pass `nil` for no initial data.

#### `Label(data map[string]any) TrelloEntity`

Create a new `Label` entity instance. Pass `nil` for no initial data.

#### `List(data map[string]any) TrelloEntity`

Create a new `List` entity instance. Pass `nil` for no initial data.

#### `Member(data map[string]any) TrelloEntity`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `MemberPrivacy(data map[string]any) TrelloEntity`

Create a new `MemberPrivacy` entity instance. Pass `nil` for no initial data.

#### `MembersVoted(data map[string]any) TrelloEntity`

Create a new `MembersVoted` entity instance. Pass `nil` for no initial data.

#### `Membership(data map[string]any) TrelloEntity`

Create a new `Membership` entity instance. Pass `nil` for no initial data.

#### `MostRecent(data map[string]any) TrelloEntity`

Create a new `MostRecent` entity instance. Pass `nil` for no initial data.

#### `NewBillableGuest(data map[string]any) TrelloEntity`

Create a new `NewBillableGuest` entity instance. Pass `nil` for no initial data.

#### `Notification(data map[string]any) TrelloEntity`

Create a new `Notification` entity instance. Pass `nil` for no initial data.

#### `NotificationChannelSetting(data map[string]any) TrelloEntity`

Create a new `NotificationChannelSetting` entity instance. Pass `nil` for no initial data.

#### `NotificationList(data map[string]any) TrelloEntity`

Create a new `NotificationList` entity instance. Pass `nil` for no initial data.

#### `NotificationMemberCreator(data map[string]any) TrelloEntity`

Create a new `NotificationMemberCreator` entity instance. Pass `nil` for no initial data.

#### `NotificationsChannelSetting(data map[string]any) TrelloEntity`

Create a new `NotificationsChannelSetting` entity instance. Pass `nil` for no initial data.

#### `Option(data map[string]any) TrelloEntity`

Create a new `Option` entity instance. Pass `nil` for no initial data.

#### `OrgInviteRestrict(data map[string]any) TrelloEntity`

Create a new `OrgInviteRestrict` entity instance. Pass `nil` for no initial data.

#### `Organization(data map[string]any) TrelloEntity`

Create a new `Organization` entity instance. Pass `nil` for no initial data.

#### `PendingOrganization(data map[string]any) TrelloEntity`

Create a new `PendingOrganization` entity instance. Pass `nil` for no initial data.

#### `Plugin(data map[string]any) TrelloEntity`

Create a new `Plugin` entity instance. Pass `nil` for no initial data.

#### `PluginData(data map[string]any) TrelloEntity`

Create a new `PluginData` entity instance. Pass `nil` for no initial data.

#### `PluginListing(data map[string]any) TrelloEntity`

Create a new `PluginListing` entity instance. Pass `nil` for no initial data.

#### `Reaction(data map[string]any) TrelloEntity`

Create a new `Reaction` entity instance. Pass `nil` for no initial data.

#### `Read(data map[string]any) TrelloEntity`

Create a new `Read` entity instance. Pass `nil` for no initial data.

#### `SavedSearch(data map[string]any) TrelloEntity`

Create a new `SavedSearch` entity instance. Pass `nil` for no initial data.

#### `Search(data map[string]any) TrelloEntity`

Create a new `Search` entity instance. Pass `nil` for no initial data.

#### `ShowSidebar(data map[string]any) TrelloEntity`

Create a new `ShowSidebar` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarActivity(data map[string]any) TrelloEntity`

Create a new `ShowSidebarActivity` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarBoardAction(data map[string]any) TrelloEntity`

Create a new `ShowSidebarBoardAction` entity instance. Pass `nil` for no initial data.

#### `ShowSidebarMember(data map[string]any) TrelloEntity`

Create a new `ShowSidebarMember` entity instance. Pass `nil` for no initial data.

#### `Sticker(data map[string]any) TrelloEntity`

Create a new `Sticker` entity instance. Pass `nil` for no initial data.

#### `Tag(data map[string]any) TrelloEntity`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Token(data map[string]any) TrelloEntity`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `TransferrableOrganization(data map[string]any) TrelloEntity`

Create a new `TransferrableOrganization` entity instance. Pass `nil` for no initial data.

#### `TrelloList(data map[string]any) TrelloEntity`

Create a new `TrelloList` entity instance. Pass `nil` for no initial data.

#### `Webhook(data map[string]any) TrelloEntity`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ActionEntity

```go
action := client.Action(nil)
fmt.Println(action.GetName()) // "action"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `map[string]any` | No |  |
| `date` | `string` | No |  |
| `display` | `map[string]any` | No |  |
| `id` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `limits` | `map[string]any` | No |  |
| `memberCreator` | `map[string]any` | No |  |
| `native` | `string` | No | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | No | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | No | The `skinVariation` of the emoji to add. |
| `type` | `string` | No |  |
| `unified` | `string` | No | The `unified` value of the emoji to add. |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Action(nil).Create(map[string]any{
    "id_action": "example_id_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Action(nil).Update(map[string]any{
    "id": "action_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Action(nil).Remove(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ActionReactionsSummaryEntity

```go
actionReactionsSummary := client.ActionReactionsSummary(nil)
fmt.Println(actionReactionsSummary.GetName()) // "action_reactions_summary"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ActionReactionsSummary(nil).Load(map[string]any{"id_action": "id_action"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ActionReactionsSummaryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AdminEntity

```go
admin := client.Admin(nil)
fmt.Println(admin.GetName()) // "admin"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Admin(nil).Update(map[string]any{
    "enterpris_id": "enterpris_id",
    "id": "id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Admin(nil).Remove(map[string]any{"enterpris_id": "enterpris_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AdminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationEntity

```go
application := client.Application(nil)
fmt.Println(application.GetName()) // "application"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ApplicationComplianceEntity

```go
applicationCompliance := client.ApplicationCompliance(nil)
fmt.Println(applicationCompliance.GetName()) // "application_compliance"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ApplicationCompliance(nil).Load(map[string]any{"key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ApplicationComplianceEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssociatedDomainEntity

```go
associatedDomain := client.AssociatedDomain(nil)
fmt.Println(associatedDomain.GetName()) // "associated_domain"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AssociatedDomain(nil).Remove(map[string]any{"organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssociatedDomainEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AttachmentEntity

```go
attachment := client.Attachment(nil)
fmt.Println(attachment.GetName()) // "attachment"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Attachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Attachment(nil).Load(map[string]any{"id": "attachment_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Attachment(nil).Remove(map[string]any{"id": "attachment_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AttachmentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BatchEntity

```go
batch := client.Batch(nil)
fmt.Println(batch.GetName()) // "batch"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Batch(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BatchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardEntity

```go
board := client.Board(nil)
fmt.Println(board.GetName()) // "board"
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
| `labelNames` | `map[string]any` | No |  |
| `limits` | `map[string]any` | No |  |
| `memberships` | `string` | No |  |
| `name` | `string` | No | The name of the board. |
| `pinned` | `bool` | No |  |
| `powerUps` | `string` | No |  |
| `prefs` | `map[string]any` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `starred` | `bool` | No |  |
| `subscribed` | `bool` | No |  |
| `templateGallery` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Board(nil).Load(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Board(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Board(nil).Update(map[string]any{
    "id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Board(nil).Remove(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardBackgroundEntity

```go
boardBackground := client.BoardBackground(nil)
fmt.Println(boardBackground.GetName()) // "board_background"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BoardBackground(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BoardBackground(nil).Load(map[string]any{"id": "board_background_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BoardBackground(nil).Create(map[string]any{
    "member_id": "example_member_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BoardBackground(nil).Update(map[string]any{
    "id": "board_background_id",
    "member_id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BoardBackground(nil).Remove(map[string]any{"id": "board_background_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardBackgroundEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardPluginEntity

```go
boardPlugin := client.BoardPlugin(nil)
fmt.Println(boardPlugin.GetName()) // "board_plugin"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BoardPlugin(nil).Remove(map[string]any{"board_id": "board_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardPluginEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BoardStarEntity

```go
boardStar := client.BoardStar(nil)
fmt.Println(boardStar.GetName()) // "board_star"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `pos` | `int` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.BoardStar(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.BoardStar(nil).Load(map[string]any{"id": "board_star_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.BoardStar(nil).Create(map[string]any{
    "member_id": "example_member_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.BoardStar(nil).Update(map[string]any{
    "id": "board_star_id",
    "member_id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.BoardStar(nil).Remove(map[string]any{"id": "board_star_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BoardStarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## BulkEntity

```go
bulk := client.Bulk(nil)
fmt.Println(bulk.GetName()) // "bulk"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Bulk(nil).Load(map[string]any{"id": []any{}, "enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Bulk(nil).Update(map[string]any{
    "id": "bulk_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `BulkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CardEntity

```go
card := client.Card(nil)
fmt.Println(card.GetName()) // "card"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `address` | `string` | No |  |
| `badges` | `map[string]any` | No |  |
| `cardRole` | `string` | No |  |
| `checkItemStates` | `[]any` | No |  |
| `closed` | `bool` | No |  |
| `coordinates` | `string` | No |  |
| `cover` | `map[string]any` | No |  |
| `creationMethod` | `string` | No |  |
| `customFieldItems` | `[]any` | No | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` | No |  |
| `desc` | `string` | No |  |
| `descData` | `map[string]any` | No |  |
| `due` | `string` | No |  |
| `dueReminder` | `string` | No |  |
| `id` | `string` | No |  |
| `idAttachmentCover` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `idChecklists` | `[]any` | No |  |
| `idLabels` | `[]any` | No |  |
| `idList` | `string` | No |  |
| `idMembers` | `[]any` | No |  |
| `idMembersVoted` | `[]any` | No |  |
| `idShort` | `int` | No |  |
| `labels` | `[]any` | No |  |
| `limits` | `map[string]any` | No |  |
| `locationName` | `string` | No |  |
| `manualCoverAttachment` | `bool` | No |  |
| `mirrorSourceId` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `float64` | No |  |
| `shortLink` | `string` | No |  |
| `shortUrl` | `string` | No |  |
| `subscribed` | `bool` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Card(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Card(nil).Update(map[string]any{
    "id": "card_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Card(nil).Remove(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CardCheckItemStateEntity

```go
cardCheckItemState := client.CardCheckItemState(nil)
fmt.Println(cardCheckItemState.GetName()) // "card_check_item_state"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CardCheckItemState(nil).Load(map[string]any{"id": "card_check_item_state_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardCheckItemStateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CardListEntity

```go
cardList := client.CardList(nil)
fmt.Println(cardList.GetName()) // "card_list"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CardList(nil).Load(map[string]any{"id": "card_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CardListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CheckItemEntity

```go
checkItem := client.CheckItem(nil)
fmt.Println(checkItem.GetName()) // "check_item"
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

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CheckItem(nil).Load(map[string]any{"id": "check_item_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CheckItem(nil).Update(map[string]any{
    "id": "check_item_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CheckItem(nil).Remove(map[string]any{"id": "check_item_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CheckItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ChecklistEntity

```go
checklist := client.Checklist(nil)
fmt.Println(checklist.GetName()) // "checklist"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Checklist(nil).Load(map[string]any{"id": "checklist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Checklist(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Checklist(nil).Update(map[string]any{
    "id": "checklist_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Checklist(nil).Remove(map[string]any{"id": "checklist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ChecklistEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ClaimableOrganizationEntity

```go
claimableOrganization := client.ClaimableOrganization(nil)
fmt.Println(claimableOrganization.GetName()) // "claimable_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `activeMembershipCount` | `float64` | No |  |
| `dateLastActive` | `string` | No | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idActiveAdmins` | `[]any` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `products` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ClaimableOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClaimableOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomBoardBackgroundEntity

```go
customBoardBackground := client.CustomBoardBackground(nil)
fmt.Println(customBoardBackground.GetName()) // "custom_board_background"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomBoardBackground(nil).Remove(map[string]any{"id": "id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomBoardBackgroundEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomEmojiEntity

```go
customEmoji := client.CustomEmoji(nil)
fmt.Println(customEmoji.GetName()) // "custom_emoji"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomEmoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomEmoji(nil).Load(map[string]any{"id": "custom_emoji_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomEmoji(nil).Create(map[string]any{
    "member_id": "example_member_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomEmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomFieldEntity

```go
customField := client.CustomField(nil)
fmt.Println(customField.GetName()) // "custom_field"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cardFront` | `bool` | No |  |
| `display` | `map[string]any` | No |  |
| `display_cardFront` | `bool` | No | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | No | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | Yes | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | Yes | The type of model that the Custom Field is being defined on. |
| `name` | `string` | No | The name of the Custom Field |
| `options` | `[]any` | No | If the type is `checkbox` |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomField(nil).Create(map[string]any{
    "idModel": "example_idModel",
    "modelType": "example_modelType",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.CustomField(nil).Update(map[string]any{
    "id": "custom_field_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomField(nil).Remove(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomFieldItemEntity

```go
customFieldItem := client.CustomFieldItem(nil)
fmt.Println(customFieldItem.GetName()) // "custom_field_item"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `idCustomField` | `string` | No |  |
| `idModel` | `string` | No |  |
| `modelType` | `string` | No |  |
| `value` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomFieldItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomFieldItemEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CustomStickerEntity

```go
customSticker := client.CustomSticker(nil)
fmt.Println(customSticker.GetName()) // "custom_sticker"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `scaled` | `[]any` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.CustomSticker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.CustomSticker(nil).Load(map[string]any{"id": "custom_sticker_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.CustomSticker(nil).Create(map[string]any{
    "member_id": "example_member_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.CustomSticker(nil).Remove(map[string]any{"id": "custom_sticker_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CustomStickerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmailPositionEntity

```go
emailPosition := client.EmailPosition(nil)
fmt.Println(emailPosition.GetName()) // "email_position"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EmailPosition(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmailPositionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmojiEntity

```go
emoji := client.Emoji(nil)
fmt.Println(emoji.GetName()) // "emoji"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `category` | `string` | No |  |
| `keywords` | `[]any` | No |  |
| `name` | `string` | No |  |
| `native` | `string` | No |  |
| `sheetX` | `float64` | No |  |
| `sheetY` | `float64` | No |  |
| `shortName` | `string` | No |  |
| `shortNames` | `[]any` | No |  |
| `text` | `string` | No |  |
| `texts` | `string` | No |  |
| `tts` | `string` | No |  |
| `unified` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Emoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmojiEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterprisEntity

```go
enterpris := client.Enterpris(nil)
fmt.Println(enterpris.GetName()) // "enterpris"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` | No |  |
| `displayName` | `string` | No |  |
| `domains` | `[]any` | No |  |
| `enterpriseDomains` | `[]any` | No |  |
| `id` | `string` | No |  |
| `idAdmins` | `[]any` | No |  |
| `idOrganizations` | `[]any` | No |  |
| `idp` | `map[string]any` | No |  |
| `isRealEnterprise` | `bool` | No |  |
| `licenses` | `map[string]any` | No |  |
| `logoHash` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `name` | `string` | No |  |
| `organizationPrefs` | `map[string]any` | No |  |
| `pluginWhitelistingEnabled` | `[]any` | No |  |
| `prefs` | `map[string]any` | No |  |
| `products` | `[]any` | No |  |
| `ssoActivationFailed` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Enterpris(nil).Load(map[string]any{"id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Enterpris(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Enterpris(nil).Update(map[string]any{
    "id": "enterpris_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterprisEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterprisSignupUrlEntity

```go
enterprisSignupUrl := client.EnterprisSignupUrl(nil)
fmt.Println(enterprisSignupUrl.GetName()) // "enterpris_signup_url"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `signupUrl` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EnterprisSignupUrl(nil).Load(map[string]any{"id": "enterpris_signup_url_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterprisSignupUrlEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterpriseAdminEntity

```go
enterpriseAdmin := client.EnterpriseAdmin(nil)
fmt.Println(enterpriseAdmin.GetName()) // "enterprise_admin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fullName` | `string` | No |  |
| `id` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EnterpriseAdmin(nil).Load(map[string]any{"enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseAdminEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnterpriseAuditLogEntity

```go
enterpriseAuditLog := client.EnterpriseAuditLog(nil)
fmt.Println(enterpriseAuditLog.GetName()) // "enterprise_audit_log"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `idAction` | `string` | No |  |
| `member` | `map[string]any` | No |  |
| `memberCreator` | `map[string]any` | No |  |
| `organization` | `map[string]any` | No |  |
| `type` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnterpriseAuditLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnterpriseAuditLogEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExportEntity

```go
export := client.Export(nil)
fmt.Println(export.GetName()) // "export"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attempts` | `float64` | No |  |
| `exportUrl` | `string` | No |  |
| `finished` | `bool` | No |  |
| `id` | `string` | No |  |
| `size` | `string` | No |  |
| `stage` | `string` | No |  |
| `startedAt` | `string` | No |  |
| `status` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Export(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Export(nil).Load(map[string]any{"id": "export_id", "board_id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Export(nil).Create(map[string]any{
    "board_id": "example_board_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Export(nil).Remove(map[string]any{"id": "export_id", "board_id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ExportDownloadEntity

```go
exportDownload := client.ExportDownload(nil)
fmt.Println(exportDownload.GetName()) // "export_download"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ExportDownload(nil).Load(map[string]any{"board_id": "board_id", "id_export": "id_export"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ExportDownloadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GenerateEntity

```go
generate := client.Generate(nil)
fmt.Println(generate.GetName()) // "generate"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Generate(nil).Create(map[string]any{
    "board_id": "example_board_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GenerateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IdEmailListEntity

```go
idEmailList := client.IdEmailList(nil)
fmt.Println(idEmailList.GetName()) // "id_email_list"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.IdEmailList(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdEmailListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IdLabelEntity

```go
idLabel := client.IdLabel(nil)
fmt.Println(idLabel.GetName()) // "id_label"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IdLabel(nil).Remove(map[string]any{"card_id": "card_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdLabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## IdMemberEntity

```go
idMember := client.IdMember(nil)
fmt.Println(idMember.GetName()) // "id_member"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.IdMember(nil).Remove(map[string]any{"card_id": "card_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `IdMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## LabelEntity

```go
label := client.Label(nil)
fmt.Println(label.GetName()) // "label"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Label(nil).Load(map[string]any{"id": "label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Label(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Label(nil).Update(map[string]any{
    "id": "label_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Label(nil).Remove(map[string]any{"id": "label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `LabelEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListEntity

```go
list := client.List(nil)
fmt.Println(list.GetName()) // "list"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.List(nil).Load(map[string]any{"id": "list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.List(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.List(nil).Update(map[string]any{
    "id": "list_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberEntity

```go
member := client.Member(nil)
fmt.Println(member.GetName()) // "member"
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
| `bioData` | `map[string]any` | No |  |
| `confirmed` | `bool` | No |  |
| `email` | `string` | No |  |
| `fullName` | `string` | No |  |
| `gravatarHash` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `[]any` | No |  |
| `idBoardsPinned` | `[]any` | No |  |
| `idEnterprise` | `string` | No |  |
| `idEnterprisesAdmin` | `[]any` | No |  |
| `idEnterprisesDeactivated` | `[]any` | No |  |
| `idMemberReferrer` | `string` | No |  |
| `idOrganizations` | `[]any` | No |  |
| `idPremOrgsAdmin` | `[]any` | No |  |
| `initials` | `string` | No |  |
| `isAaMastered` | `bool` | No |  |
| `ixUpdate` | `float64` | No |  |
| `limits` | `map[string]any` | No |  |
| `loginTypes` | `[]any` | No |  |
| `marketingOptIn` | `map[string]any` | No |  |
| `memberType` | `string` | No |  |
| `messagesDismissed` | `map[string]any` | No |  |
| `nonPublic` | `map[string]any` | No | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | No | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `[]any` | No |  |
| `prefs` | `map[string]any` | No |  |
| `premiumFeatures` | `[]any` | No |  |
| `products` | `[]any` | No |  |
| `status` | `string` | No |  |
| `trophies` | `[]any` | No |  |
| `uploadedAvatarHash` | `string` | No |  |
| `uploadedAvatarUrl` | `string` | No |  |
| `url` | `string` | No |  |
| `username` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Member(nil).Load(map[string]any{"id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Member(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Member(nil).Update(map[string]any{
    "id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Member(nil).Remove(map[string]any{"id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MemberPrivacyEntity

```go
memberPrivacy := client.MemberPrivacy(nil)
fmt.Println(memberPrivacy.GetName()) // "member_privacy"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MemberPrivacy(nil).Load(map[string]any{"plugin_id": "plugin_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MemberPrivacyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MembersVotedEntity

```go
membersVoted := client.MembersVoted(nil)
fmt.Println(membersVoted.GetName()) // "members_voted"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.MembersVoted(nil).Load(map[string]any{"card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.MembersVoted(nil).Remove(map[string]any{"card_id": "card_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MembersVotedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MembershipEntity

```go
membership := client.Membership(nil)
fmt.Println(membership.GetName()) // "membership"
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
| `member` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Membership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Membership(nil).Load(map[string]any{"id": "membership_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Membership(nil).Update(map[string]any{
    "id": "membership_id",
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MembershipEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MostRecentEntity

```go
mostRecent := client.MostRecent(nil)
fmt.Println(mostRecent.GetName()) // "most_recent"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MostRecentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NewBillableGuestEntity

```go
newBillableGuest := client.NewBillableGuest(nil)
fmt.Println(newBillableGuest.GetName()) // "new_billable_guest"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NewBillableGuest(nil).Load(map[string]any{"id": "new_billable_guest_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NewBillableGuestEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationEntity

```go
notification := client.Notification(nil)
fmt.Println(notification.GetName()) // "notification"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `board` | `map[string]any` | Yes |  |
| `card` | `map[string]any` | No |  |
| `data` | `string` | No |  |
| `date` | `string` | No |  |
| `dateRead` | `string` | No |  |
| `id` | `string` | No |  |
| `idAction` | `string` | No |  |
| `idMemberCreator` | `string` | No |  |
| `reactions` | `[]any` | No |  |
| `type` | `string` | No |  |
| `unread` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Notification(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Notification(nil).Load(map[string]any{"id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Notification(nil).Update(map[string]any{
    "id": "notification_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationChannelSettingEntity

```go
notificationChannelSetting := client.NotificationChannelSetting(nil)
fmt.Println(notificationChannelSetting.GetName()) // "notification_channel_setting"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blockedKeys` | `[]any` | No | Singular key or array of notification keys |
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

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.NotificationChannelSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NotificationChannelSetting(nil).Load(map[string]any{"channel": "channel", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.NotificationChannelSetting(nil).Update(map[string]any{
    "channel": "channel",
    "member_id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationChannelSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationListEntity

```go
notificationList := client.NotificationList(nil)
fmt.Println(notificationList.GetName()) // "notification_list"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NotificationList(nil).Load(map[string]any{"id": "notification_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationMemberCreatorEntity

```go
notificationMemberCreator := client.NotificationMemberCreator(nil)
fmt.Println(notificationMemberCreator.GetName()) // "notification_member_creator"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.NotificationMemberCreator(nil).Load(map[string]any{"id": "notification_member_creator_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationMemberCreatorEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## NotificationsChannelSettingEntity

```go
notificationsChannelSetting := client.NotificationsChannelSetting(nil)
fmt.Println(notificationsChannelSetting.GetName()) // "notifications_channel_setting"
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `NotificationsChannelSettingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OptionEntity

```go
option := client.Option(nil)
fmt.Println(option.GetName()) // "option"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Option(nil).Load(map[string]any{"id": "option_id", "custom_field_id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Option(nil).Remove(map[string]any{"id": "option_id", "custom_field_id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OptionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrgInviteRestrictEntity

```go
orgInviteRestrict := client.OrgInviteRestrict(nil)
fmt.Println(orgInviteRestrict.GetName()) // "org_invite_restrict"
```

### Operations

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.OrgInviteRestrict(nil).Remove(map[string]any{"organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrgInviteRestrictEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## OrganizationEntity

```go
organization := client.Organization(nil)
fmt.Println(organization.GetName()) // "organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateLastActivity` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idBoards` | `[]any` | No |  |
| `idEnterprise` | `string` | No |  |
| `memberships` | `[]any` | No |  |
| `name` | `string` | No |  |
| `offering` | `string` | No |  |
| `prefs` | `map[string]any` | No |  |
| `premiumFeatures` | `[]any` | No |  |
| `url` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Organization(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Organization(nil).Update(map[string]any{
    "id": "organization_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Organization(nil).Remove(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `OrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PendingOrganizationEntity

```go
pendingOrganization := client.PendingOrganization(nil)
fmt.Println(pendingOrganization.GetName()) // "pending_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date` | `string` | No |  |
| `displayName` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `logoUrl` | `string` | No |  |
| `memberRequestor` | `map[string]any` | No |  |
| `membershipCount` | `float64` | No |  |
| `transferability` | `map[string]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PendingOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PendingOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PluginEntity

```go
plugin := client.Plugin(nil)
fmt.Println(plugin.GetName()) // "plugin"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Plugin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Plugin(nil).Load(map[string]any{"id": "plugin_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Plugin(nil).Update(map[string]any{
    "id": "plugin_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PluginEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PluginDataEntity

```go
pluginData := client.PluginData(nil)
fmt.Println(pluginData.GetName()) // "plugin_data"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PluginData(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PluginData(nil).Load(map[string]any{"card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PluginDataEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PluginListingEntity

```go
pluginListing := client.PluginListing(nil)
fmt.Println(pluginListing.GetName()) // "plugin_listing"
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

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.PluginListing(nil).Create(map[string]any{
    "id_plugin": "example_id_plugin",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.PluginListing(nil).Update(map[string]any{
    "id": "id",
    "id_plugin": "id_plugin",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PluginListingEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReactionEntity

```go
reaction := client.Reaction(nil)
fmt.Println(reaction.GetName()) // "reaction"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Reaction(nil).Load(map[string]any{"id": "reaction_id", "id_action": "id_action"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Reaction(nil).Remove(map[string]any{"id": "reaction_id", "id_action": "id_action"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReactionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReadEntity

```go
read := client.Read(nil)
fmt.Println(read.GetName()) // "read"
```

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Read(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReadEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SavedSearchEntity

```go
savedSearch := client.SavedSearch(nil)
fmt.Println(savedSearch.GetName()) // "saved_search"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |
| `name` | `string` | No |  |
| `pos` | `any` | No |  |
| `query` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.SavedSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.SavedSearch(nil).Load(map[string]any{"id": "saved_search_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.SavedSearch(nil).Create(map[string]any{
    "member_id": "example_member_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.SavedSearch(nil).Update(map[string]any{
    "id": "saved_search_id",
    "member_id": "member_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.SavedSearch(nil).Remove(map[string]any{"id": "saved_search_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SavedSearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## SearchEntity

```go
search := client.Search(nil)
fmt.Println(search.GetName()) // "search"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `SearchEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShowSidebarEntity

```go
showSidebar := client.ShowSidebar(nil)
fmt.Println(showSidebar.GetName()) // "show_sidebar"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ShowSidebar(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShowSidebarEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShowSidebarActivityEntity

```go
showSidebarActivity := client.ShowSidebarActivity(nil)
fmt.Println(showSidebarActivity.GetName()) // "show_sidebar_activity"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ShowSidebarActivity(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShowSidebarActivityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShowSidebarBoardActionEntity

```go
showSidebarBoardAction := client.ShowSidebarBoardAction(nil)
fmt.Println(showSidebarBoardAction.GetName()) // "show_sidebar_board_action"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ShowSidebarBoardAction(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShowSidebarBoardActionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ShowSidebarMemberEntity

```go
showSidebarMember := client.ShowSidebarMember(nil)
fmt.Println(showSidebarMember.GetName()) // "show_sidebar_member"
```

### Operations

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.ShowSidebarMember(nil).Update(map[string]any{
    "board_id": "board_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ShowSidebarMemberEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StickerEntity

```go
sticker := client.Sticker(nil)
fmt.Println(sticker.GetName()) // "sticker"
```

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Sticker(nil).Load(map[string]any{"id": "sticker_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Sticker(nil).Update(map[string]any{
    "id": "sticker_id",
    "card_id": "card_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Sticker(nil).Remove(map[string]any{"id": "sticker_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StickerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TagEntity

```go
tag := client.Tag(nil)
fmt.Println(tag.GetName()) // "tag"
```

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Tag(nil).Remove(map[string]any{"id": "id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TokenEntity

```go
token := client.Token(nil)
fmt.Println(token.GetName()) // "token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `dateCreated` | `string` | No |  |
| `dateExpires` | `string` | No |  |
| `id` | `string` | No |  |
| `idMember` | `string` | No |  |
| `identifier` | `string` | No |  |
| `permissions` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Token(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Token(nil).Load(map[string]any{"id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Token(nil).Remove(map[string]any{"id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TransferrableOrganizationEntity

```go
transferrableOrganization := client.TransferrableOrganization(nil)
fmt.Println(transferrableOrganization.GetName()) // "transferrable_organization"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `newBillableMembers` | `[]any` | No |  |
| `restrictedMembers` | `[]any` | No |  |
| `transferrable` | `bool` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TransferrableOrganization(nil).Load(map[string]any{"id": "transferrable_organization_id", "enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TransferrableOrganizationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## TrelloListEntity

```go
trelloList := client.TrelloList(nil)
fmt.Println(trelloList.GetName()) // "trello_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `map[string]any` | No |  |
| `closed` | `bool` | No |  |
| `id` | `string` | No |  |
| `idBoard` | `string` | No |  |
| `limits` | `map[string]any` | No |  |
| `name` | `string` | No | The name of the list |
| `pos` | `float64` | No |  |
| `softLimit` | `string` | No |  |
| `subscribed` | `bool` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.TrelloList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.TrelloList(nil).Load(map[string]any{"action_id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.TrelloList(nil).Create(map[string]any{
    "board_id": "example_board_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `TrelloListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEntity

```go
webhook := client.Webhook(nil)
fmt.Println(webhook.GetName()) // "webhook"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `callbackURL` | `string` | No |  |
| `consecutiveFailures` | `float64` | No |  |
| `description` | `string` | No |  |
| `firstConsecutiveFailDate` | `string` | No |  |
| `id` | `string` | No |  |
| `idModel` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Webhook(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Webhook(nil).Update(map[string]any{
    "id": "webhook_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Webhook(nil).Remove(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewTrelloSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

