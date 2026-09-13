# Trello Golang SDK



The Golang SDK for the Trello API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.Action(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/trello-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/trello-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/trello-sdk/go=../trello-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/trello-sdk/go"
)

func main() {
    client := sdk.NewTrelloSDK(map[string]any{
        "apikey": os.Getenv("TRELLO_APIKEY"),
    })

    // List action records — the value is the array of records itself.
    actions, err := client.Action(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range actions.([]any) {
        fmt.Println(item)
    }

    // Load a single action — the value is the loaded record.
    action, err := client.Action(nil).Load(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(action)

    // Create a action.
    created, err := client.Action(nil).Create(map[string]any{"id_action": "example_id_action"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a action.
    updated, err := client.Action(nil).Update(map[string]any{"id": "example_id", "text": "example_text", "data": map[string]any{}}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a action.
    removed, err := client.Action(nil).Remove(map[string]any{"id": "example_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
boardstars, err := client.BoardStar(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = boardstars
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

boardStar, err := client.BoardStar(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(boardStar) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewTrelloSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewTrelloSDK

```go
func NewTrelloSDK(options map[string]any) *TrelloSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *TrelloSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### TrelloSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `Action` | `(data map[string]any) TrelloEntity` | Create an Action entity instance. |
| `ActionReactionsSummary` | `(data map[string]any) TrelloEntity` | Create an ActionReactionsSummary entity instance. |
| `Admin` | `(data map[string]any) TrelloEntity` | Create an Admin entity instance. |
| `Application` | `(data map[string]any) TrelloEntity` | Create an Application entity instance. |
| `ApplicationCompliance` | `(data map[string]any) TrelloEntity` | Create an ApplicationCompliance entity instance. |
| `AssociatedDomain` | `(data map[string]any) TrelloEntity` | Create an AssociatedDomain entity instance. |
| `Attachment` | `(data map[string]any) TrelloEntity` | Create an Attachment entity instance. |
| `Batch` | `(data map[string]any) TrelloEntity` | Create a Batch entity instance. |
| `Board` | `(data map[string]any) TrelloEntity` | Create a Board entity instance. |
| `BoardBackground` | `(data map[string]any) TrelloEntity` | Create a BoardBackground entity instance. |
| `BoardPlugin` | `(data map[string]any) TrelloEntity` | Create a BoardPlugin entity instance. |
| `BoardStar` | `(data map[string]any) TrelloEntity` | Create a BoardStar entity instance. |
| `Bulk` | `(data map[string]any) TrelloEntity` | Create a Bulk entity instance. |
| `Card` | `(data map[string]any) TrelloEntity` | Create a Card entity instance. |
| `CardCheckItemState` | `(data map[string]any) TrelloEntity` | Create a CardCheckItemState entity instance. |
| `CardList` | `(data map[string]any) TrelloEntity` | Create a CardList entity instance. |
| `CheckItem` | `(data map[string]any) TrelloEntity` | Create a CheckItem entity instance. |
| `Checklist` | `(data map[string]any) TrelloEntity` | Create a Checklist entity instance. |
| `ClaimableOrganization` | `(data map[string]any) TrelloEntity` | Create a ClaimableOrganization entity instance. |
| `CustomBoardBackground` | `(data map[string]any) TrelloEntity` | Create a CustomBoardBackground entity instance. |
| `CustomEmoji` | `(data map[string]any) TrelloEntity` | Create a CustomEmoji entity instance. |
| `CustomField` | `(data map[string]any) TrelloEntity` | Create a CustomField entity instance. |
| `CustomFieldItem` | `(data map[string]any) TrelloEntity` | Create a CustomFieldItem entity instance. |
| `CustomSticker` | `(data map[string]any) TrelloEntity` | Create a CustomSticker entity instance. |
| `EmailPosition` | `(data map[string]any) TrelloEntity` | Create an EmailPosition entity instance. |
| `Emoji` | `(data map[string]any) TrelloEntity` | Create an Emoji entity instance. |
| `Enterpris` | `(data map[string]any) TrelloEntity` | Create an Enterpris entity instance. |
| `EnterprisSignupUrl` | `(data map[string]any) TrelloEntity` | Create an EnterprisSignupUrl entity instance. |
| `EnterpriseAdmin` | `(data map[string]any) TrelloEntity` | Create an EnterpriseAdmin entity instance. |
| `EnterpriseAuditLog` | `(data map[string]any) TrelloEntity` | Create an EnterpriseAuditLog entity instance. |
| `Export` | `(data map[string]any) TrelloEntity` | Create an Export entity instance. |
| `ExportDownload` | `(data map[string]any) TrelloEntity` | Create an ExportDownload entity instance. |
| `Generate` | `(data map[string]any) TrelloEntity` | Create a Generate entity instance. |
| `IdEmailList` | `(data map[string]any) TrelloEntity` | Create an IdEmailList entity instance. |
| `IdLabel` | `(data map[string]any) TrelloEntity` | Create an IdLabel entity instance. |
| `IdMember` | `(data map[string]any) TrelloEntity` | Create an IdMember entity instance. |
| `Label` | `(data map[string]any) TrelloEntity` | Create a Label entity instance. |
| `List` | `(data map[string]any) TrelloEntity` | Create a List entity instance. |
| `Member` | `(data map[string]any) TrelloEntity` | Create a Member entity instance. |
| `MemberPrivacy` | `(data map[string]any) TrelloEntity` | Create a MemberPrivacy entity instance. |
| `MembersVoted` | `(data map[string]any) TrelloEntity` | Create a MembersVoted entity instance. |
| `Membership` | `(data map[string]any) TrelloEntity` | Create a Membership entity instance. |
| `MostRecent` | `(data map[string]any) TrelloEntity` | Create a MostRecent entity instance. |
| `NewBillableGuest` | `(data map[string]any) TrelloEntity` | Create a NewBillableGuest entity instance. |
| `Notification` | `(data map[string]any) TrelloEntity` | Create a Notification entity instance. |
| `NotificationChannelSetting` | `(data map[string]any) TrelloEntity` | Create a NotificationChannelSetting entity instance. |
| `NotificationList` | `(data map[string]any) TrelloEntity` | Create a NotificationList entity instance. |
| `NotificationMemberCreator` | `(data map[string]any) TrelloEntity` | Create a NotificationMemberCreator entity instance. |
| `NotificationsChannelSetting` | `(data map[string]any) TrelloEntity` | Create a NotificationsChannelSetting entity instance. |
| `Option` | `(data map[string]any) TrelloEntity` | Create an Option entity instance. |
| `OrgInviteRestrict` | `(data map[string]any) TrelloEntity` | Create an OrgInviteRestrict entity instance. |
| `Organization` | `(data map[string]any) TrelloEntity` | Create an Organization entity instance. |
| `PendingOrganization` | `(data map[string]any) TrelloEntity` | Create a PendingOrganization entity instance. |
| `Plugin` | `(data map[string]any) TrelloEntity` | Create a Plugin entity instance. |
| `PluginData` | `(data map[string]any) TrelloEntity` | Create a PluginData entity instance. |
| `PluginListing` | `(data map[string]any) TrelloEntity` | Create a PluginListing entity instance. |
| `Reaction` | `(data map[string]any) TrelloEntity` | Create a Reaction entity instance. |
| `Read` | `(data map[string]any) TrelloEntity` | Create a Read entity instance. |
| `SavedSearch` | `(data map[string]any) TrelloEntity` | Create a SavedSearch entity instance. |
| `Search` | `(data map[string]any) TrelloEntity` | Create a Search entity instance. |
| `ShowSidebar` | `(data map[string]any) TrelloEntity` | Create a ShowSidebar entity instance. |
| `ShowSidebarActivity` | `(data map[string]any) TrelloEntity` | Create a ShowSidebarActivity entity instance. |
| `ShowSidebarBoardAction` | `(data map[string]any) TrelloEntity` | Create a ShowSidebarBoardAction entity instance. |
| `ShowSidebarMember` | `(data map[string]any) TrelloEntity` | Create a ShowSidebarMember entity instance. |
| `Sticker` | `(data map[string]any) TrelloEntity` | Create a Sticker entity instance. |
| `Tag` | `(data map[string]any) TrelloEntity` | Create a Tag entity instance. |
| `Token` | `(data map[string]any) TrelloEntity` | Create a Token entity instance. |
| `TransferrableOrganization` | `(data map[string]any) TrelloEntity` | Create a TransferrableOrganization entity instance. |
| `TrelloList` | `(data map[string]any) TrelloEntity` | Create a TrelloList entity instance. |
| `Webhook` | `(data map[string]any) TrelloEntity` | Create a Webhook entity instance. |

### Entity interface (TrelloEntity)

All entities implement the `TrelloEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    action, err := client.Action(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // action is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### Action

| Field | Description |
| --- | --- |
| `"data"` |  |
| `"date"` |  |
| `"display"` |  |
| `"id"` |  |
| `"idMemberCreator"` |  |
| `"limits"` |  |
| `"memberCreator"` |  |
| `"native"` | The emoji to add as a native unicode emoji. |
| `"shortName"` | The primary `shortName` of the emoji to add. |
| `"skinVariation"` | The `skinVariation` of the emoji to add. |
| `"type"` |  |
| `"unified"` | The `unified` value of the emoji to add. |

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
| `"id"` |  |

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
| `"id"` |  |

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
| `"closed"` |  |
| `"creationMethod"` |  |
| `"dateLastActivity"` |  |
| `"dateLastView"` |  |
| `"datePluginDisable"` |  |
| `"desc"` |  |
| `"descData"` |  |
| `"enterpriseOwned"` |  |
| `"fullName"` | The full name of the user to as a member of the board. |
| `"id"` |  |
| `"idMemberCreator"` |  |
| `"idOrganization"` |  |
| `"idTags"` |  |
| `"ixUpdate"` |  |
| `"labelNames"` |  |
| `"limits"` |  |
| `"memberships"` |  |
| `"name"` | The name of the board. |
| `"pinned"` |  |
| `"powerUps"` |  |
| `"prefs"` |  |
| `"shortLink"` |  |
| `"shortUrl"` |  |
| `"starred"` |  |
| `"subscribed"` |  |
| `"templateGallery"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/boards/`

#### BoardBackground

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/customBoardBackgrounds`

#### BoardPlugin

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/boards/{id}/boardPlugins/{idPlugin}`

#### BoardStar

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"idBoard"` |  |
| `"pos"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/members/{id}/boardStars`

#### Bulk

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load, Update.

API path: `/enterprises/{id}/organizations/bulk/{idOrganizations}`

#### Card

| Field | Description |
| --- | --- |
| `"address"` |  |
| `"badges"` |  |
| `"cardRole"` |  |
| `"checkItemStates"` |  |
| `"closed"` |  |
| `"coordinates"` |  |
| `"cover"` |  |
| `"creationMethod"` |  |
| `"customFieldItems"` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `"dateLastActivity"` |  |
| `"desc"` |  |
| `"descData"` |  |
| `"due"` |  |
| `"dueReminder"` |  |
| `"id"` |  |
| `"idAttachmentCover"` |  |
| `"idBoard"` |  |
| `"idChecklists"` |  |
| `"idLabels"` |  |
| `"idList"` |  |
| `"idMembers"` |  |
| `"idMembersVoted"` |  |
| `"idShort"` |  |
| `"labels"` |  |
| `"limits"` |  |
| `"locationName"` |  |
| `"manualCoverAttachment"` |  |
| `"mirrorSourceId"` |  |
| `"name"` |  |
| `"pos"` |  |
| `"shortLink"` |  |
| `"shortUrl"` |  |
| `"subscribed"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/cards`

#### CardCheckItemState

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/cards/{id}/checkItemStates`

#### CardList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/cards/{id}/list`

#### CheckItem

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"idChecklist"` |  |
| `"name"` |  |
| `"nameData"` |  |
| `"pos"` |  |
| `"state"` |  |

Operations: Load, Remove, Update.

API path: `/cards/{id}/checkItem/{idCheckItem}`

#### Checklist

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load, Remove, Update.

API path: `/checklists/{id}/checkItems`

#### ClaimableOrganization

| Field | Description |
| --- | --- |
| `"activeMembershipCount"` |  |
| `"dateLastActive"` | The date of the most recent activity on any of the boards in the workspace. |
| `"displayName"` |  |
| `"id"` |  |
| `"idActiveAdmins"` |  |
| `"logoUrl"` |  |
| `"name"` |  |
| `"products"` |  |

Operations: List.

API path: `/enterprises/{id}/claimableOrganizations`

#### CustomBoardBackground

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/members/{id}/customBoardBackgrounds/{idBackground}`

#### CustomEmoji

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: Create, List, Load.

API path: `/members/{id}/customEmoji`

#### CustomField

| Field | Description |
| --- | --- |
| `"cardFront"` |  |
| `"display"` |  |
| `"display_cardFront"` | Whether this Custom Field should be shown on the front of Cards |
| `"displaycardFront"` | Whether to display this custom field on the front of cards |
| `"fieldGroup"` |  |
| `"id"` |  |
| `"idModel"` | The ID of the model for which the Custom Field is being defined. |
| `"modelType"` | The type of model that the Custom Field is being defined on. |
| `"name"` | The name of the Custom Field |
| `"options"` | If the type is `checkbox` |
| `"pos"` |  |
| `"type"` | The type of Custom Field to create. |

Operations: Create, List, Load, Remove, Update.

API path: `/customFields/{id}/options`

#### CustomFieldItem

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"idCustomField"` |  |
| `"idModel"` |  |
| `"modelType"` |  |
| `"value"` |  |

Operations: List.

API path: `/cards/{id}/customFieldItems`

#### CustomSticker

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"scaled"` |  |
| `"url"` |  |

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
| `"category"` |  |
| `"keywords"` |  |
| `"name"` |  |
| `"native"` |  |
| `"sheetX"` |  |
| `"sheetY"` |  |
| `"shortName"` |  |
| `"shortNames"` |  |
| `"text"` |  |
| `"texts"` |  |
| `"tts"` |  |
| `"unified"` |  |

Operations: List.

API path: `/emoji`

#### Enterpris

| Field | Description |
| --- | --- |
| `"dateOrganizationPrefsLastUpdated"` |  |
| `"displayName"` |  |
| `"domains"` |  |
| `"enterpriseDomains"` |  |
| `"id"` |  |
| `"idAdmins"` |  |
| `"idOrganizations"` |  |
| `"idp"` |  |
| `"isRealEnterprise"` |  |
| `"licenses"` |  |
| `"logoHash"` |  |
| `"logoUrl"` |  |
| `"name"` |  |
| `"organizationPrefs"` |  |
| `"pluginWhitelistingEnabled"` |  |
| `"prefs"` |  |
| `"products"` |  |
| `"ssoActivationFailed"` |  |

Operations: Create, Load, Update.

API path: `/enterprises/{id}/tokens`

#### EnterprisSignupUrl

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"signupUrl"` |  |

Operations: Load.

API path: `/enterprises/{id}/signupUrl`

#### EnterpriseAdmin

| Field | Description |
| --- | --- |
| `"fullName"` |  |
| `"id"` |  |
| `"username"` |  |

Operations: Load.

API path: `/enterprises/{id}/admins`

#### EnterpriseAuditLog

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"idAction"` |  |
| `"member"` |  |
| `"memberCreator"` |  |
| `"organization"` |  |
| `"type"` |  |

Operations: List.

API path: `/enterprises/{id}/auditlog`

#### Export

| Field | Description |
| --- | --- |
| `"attempts"` |  |
| `"exportUrl"` |  |
| `"finished"` |  |
| `"id"` |  |
| `"size"` |  |
| `"stage"` |  |
| `"startedAt"` |  |
| `"status"` |  |

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
| `"id"` |  |

Operations: Remove.

API path: `/cards/{id}/idLabels/{idLabel}`

#### IdMember

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Remove.

API path: `/cards/{id}/idMembers/{idMember}`

#### Label

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load, Remove, Update.

API path: `/labels`

#### List

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Create, Load, Update.

API path: `/lists`

#### Member

| Field | Description |
| --- | --- |
| `"aaEmail"` |  |
| `"aaEnrolledDate"` |  |
| `"aaId"` |  |
| `"activityBlocked"` |  |
| `"avatarHash"` |  |
| `"avatarSource"` |  |
| `"avatarUrl"` |  |
| `"bio"` |  |
| `"bioData"` |  |
| `"confirmed"` |  |
| `"email"` |  |
| `"fullName"` |  |
| `"gravatarHash"` |  |
| `"id"` |  |
| `"idBoards"` |  |
| `"idBoardsPinned"` |  |
| `"idEnterprise"` |  |
| `"idEnterprisesAdmin"` |  |
| `"idEnterprisesDeactivated"` |  |
| `"idMemberReferrer"` |  |
| `"idOrganizations"` |  |
| `"idPremOrgsAdmin"` |  |
| `"initials"` |  |
| `"isAaMastered"` |  |
| `"ixUpdate"` |  |
| `"limits"` |  |
| `"loginTypes"` |  |
| `"marketingOptIn"` |  |
| `"memberType"` |  |
| `"messagesDismissed"` |  |
| `"nonPublic"` | Profile data with restricted visibility. |
| `"nonPublicAvailable"` | Whether the response contains non-public profile data for the member |
| `"oneTimeMessagesDismissed"` |  |
| `"prefs"` |  |
| `"premiumFeatures"` |  |
| `"products"` |  |
| `"status"` |  |
| `"trophies"` |  |
| `"uploadedAvatarHash"` |  |
| `"uploadedAvatarUrl"` |  |
| `"url"` |  |
| `"username"` |  |

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
| `"id"` |  |

Operations: Load, Remove.

API path: `/cards/{id}/membersVoted`

#### Membership

| Field | Description |
| --- | --- |
| `"admin"` |  |
| `"collaborator"` |  |
| `"deactivated"` |  |
| `"id"` |  |
| `"licensed"` |  |
| `"managed"` |  |
| `"member"` |  |

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
| `"id"` |  |

Operations: Load.

API path: `/organizations/{id}/newBillableGuests/{idBoard}`

#### Notification

| Field | Description |
| --- | --- |
| `"board"` |  |
| `"card"` |  |
| `"data"` |  |
| `"date"` |  |
| `"dateRead"` |  |
| `"id"` |  |
| `"idAction"` |  |
| `"idMemberCreator"` |  |
| `"reactions"` |  |
| `"type"` |  |
| `"unread"` |  |

Operations: List, Load, Update.

API path: `/members/{id}/notifications`

#### NotificationChannelSetting

| Field | Description |
| --- | --- |
| `"blockedKeys"` | Singular key or array of notification keys |
| `"channel"` |  |
| `"id"` |  |
| `"idMember"` |  |

Operations: List, Load, Update.

API path: `/members/{id}/notificationsChannelSettings`

#### NotificationList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: Load.

API path: `/notifications/{id}/list`

#### NotificationMemberCreator

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"id"` |  |

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
| `"dateLastActivity"` |  |
| `"displayName"` |  |
| `"id"` |  |
| `"idBoards"` |  |
| `"idEnterprise"` |  |
| `"memberships"` |  |
| `"name"` |  |
| `"offering"` |  |
| `"prefs"` |  |
| `"premiumFeatures"` |  |
| `"url"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/organizations`

#### PendingOrganization

| Field | Description |
| --- | --- |
| `"date"` |  |
| `"displayName"` |  |
| `"id"` |  |
| `"idMember"` |  |
| `"logoUrl"` |  |
| `"memberRequestor"` |  |
| `"membershipCount"` |  |
| `"transferability"` |  |

Operations: List.

API path: `/enterprises/{id}/pendingOrganizations`

#### Plugin

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"description"` | The description to show for the given locale |
| `"id"` |  |
| `"locale"` | The locale that this listing should be displayed for. |
| `"name"` | The name to use for the given locale. |
| `"overview"` | The overview to show for the given locale. |

Operations: Create, Update.

API path: `/plugins/{idPlugin}/listing`

#### Reaction

| Field | Description |
| --- | --- |
| `"id"` |  |

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
| `"id"` |  |
| `"name"` |  |
| `"pos"` |  |
| `"query"` |  |

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
| `"id"` |  |

Operations: Load, Remove, Update.

API path: `/cards/{id}/stickers/{idSticker}`

#### Tag

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List, Remove.

API path: `/organizations/{id}/tags`

#### Token

| Field | Description |
| --- | --- |
| `"dateCreated"` |  |
| `"dateExpires"` |  |
| `"id"` |  |
| `"idMember"` |  |
| `"identifier"` |  |
| `"permissions"` |  |

Operations: List, Load, Remove.

API path: `/members/{id}/tokens`

#### TransferrableOrganization

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"newBillableMembers"` |  |
| `"restrictedMembers"` |  |
| `"transferrable"` |  |

Operations: Load.

API path: `/enterprises/{id}/transferrable/organization/{idOrganization}`

#### TrelloList

| Field | Description |
| --- | --- |
| `"attachments"` |  |
| `"closed"` |  |
| `"id"` |  |
| `"idBoard"` |  |
| `"limits"` |  |
| `"name"` | The name of the list |
| `"pos"` |  |
| `"softLimit"` |  |
| `"subscribed"` |  |

Operations: Create, List, Load.

API path: `/boards/{id}/lists`

#### Webhook

| Field | Description |
| --- | --- |
| `"active"` |  |
| `"callbackURL"` |  |
| `"consecutiveFailures"` |  |
| `"description"` |  |
| `"firstConsecutiveFailDate"` |  |
| `"id"` |  |
| `"idModel"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/webhooks/`



## Entities


### Action

Create an instance: `action := client.Action(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` |  |
| `date` | `string` |  |
| `display` | `map[string]any` |  |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `limits` | `map[string]any` |  |
| `memberCreator` | `map[string]any` |  |
| `native` | `string` | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | The `skinVariation` of the emoji to add. |
| `type` | `string` |  |
| `unified` | `string` | The `unified` value of the emoji to add. |

#### Example: Load

```go
action, err := client.Action(nil).Load(map[string]any{"id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(action) // the loaded record
```

#### Example: List

```go
actions, err := client.Action(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(actions) // the array of records
```

#### Example: Create

```go
result, err := client.Action(nil).Create(map[string]any{
    "id_action": "example_id_action",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ActionReactionsSummary

Create an instance: `actionReactionsSummary := client.ActionReactionsSummary(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
actionReactionsSummary, err := client.ActionReactionsSummary(nil).Load(map[string]any{"id_action": "id_action"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(actionReactionsSummary) // the loaded record
```


### Admin

Create an instance: `admin := client.Admin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Application

Create an instance: `application := client.Application(nil)`


### ApplicationCompliance

Create an instance: `applicationCompliance := client.ApplicationCompliance(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
applicationCompliance, err := client.ApplicationCompliance(nil).Load(map[string]any{"key": "key"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(applicationCompliance) // the loaded record
```


### AssociatedDomain

Create an instance: `associatedDomain := client.AssociatedDomain(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Attachment

Create an instance: `attachment := client.Attachment(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
attachment, err := client.Attachment(nil).Load(map[string]any{"id": "attachment_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(attachment) // the loaded record
```

#### Example: List

```go
attachments, err := client.Attachment(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(attachments) // the array of records
```


### Batch

Create an instance: `batch := client.Batch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
batch, err := client.Batch(nil).Load(map[string]any{"url": "url"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(batch) // the loaded record
```


### Board

Create an instance: `board := client.Board(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `labelNames` | `map[string]any` |  |
| `limits` | `map[string]any` |  |
| `memberships` | `string` |  |
| `name` | `string` | The name of the board. |
| `pinned` | `bool` |  |
| `powerUps` | `string` |  |
| `prefs` | `map[string]any` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `starred` | `bool` |  |
| `subscribed` | `bool` |  |
| `templateGallery` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
board, err := client.Board(nil).Load(map[string]any{"id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(board) // the loaded record
```

#### Example: List

```go
boards, err := client.Board(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(boards) // the array of records
```

#### Example: Create

```go
result, err := client.Board(nil).Create(map[string]any{
    "name": "example_name",
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BoardBackground

Create an instance: `boardBackground := client.BoardBackground(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
boardBackground, err := client.BoardBackground(nil).Load(map[string]any{"id": "board_background_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(boardBackground) // the loaded record
```

#### Example: List

```go
boardBackgrounds, err := client.BoardBackground(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(boardBackgrounds) // the array of records
```

#### Example: Create

```go
result, err := client.BoardBackground(nil).Create(map[string]any{
    "member_id": "example_member_id",
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### BoardPlugin

Create an instance: `boardPlugin := client.BoardPlugin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BoardStar

Create an instance: `boardStar := client.BoardStar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `pos` | `int` |  |

#### Example: Load

```go
boardStar, err := client.BoardStar(nil).Load(map[string]any{"id": "board_star_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(boardStar) // the loaded record
```

#### Example: List

```go
boardStars, err := client.BoardStar(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(boardStars) // the array of records
```

#### Example: Create

```go
result, err := client.BoardStar(nil).Create(map[string]any{
    "member_id": "example_member_id",
    "id_board": "example_id_board",
    "pos": "example_pos",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Bulk

Create an instance: `bulk := client.Bulk(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
bulk, err := client.Bulk(nil).Load(map[string]any{"id": []any{}, "enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(bulk) // the loaded record
```


### Card

Create an instance: `card := client.Card(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `address` | `string` |  |
| `badges` | `map[string]any` |  |
| `cardRole` | `string` |  |
| `checkItemStates` | `[]any` |  |
| `closed` | `bool` |  |
| `coordinates` | `string` |  |
| `cover` | `map[string]any` |  |
| `creationMethod` | `string` |  |
| `customFieldItems` | `[]any` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` |  |
| `desc` | `string` |  |
| `descData` | `map[string]any` |  |
| `due` | `string` |  |
| `dueReminder` | `string` |  |
| `id` | `string` |  |
| `idAttachmentCover` | `string` |  |
| `idBoard` | `string` |  |
| `idChecklists` | `[]any` |  |
| `idLabels` | `[]any` |  |
| `idList` | `string` |  |
| `idMembers` | `[]any` |  |
| `idMembersVoted` | `[]any` |  |
| `idShort` | `int` |  |
| `labels` | `[]any` |  |
| `limits` | `map[string]any` |  |
| `locationName` | `string` |  |
| `manualCoverAttachment` | `bool` |  |
| `mirrorSourceId` | `string` |  |
| `name` | `string` |  |
| `pos` | `float64` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `subscribed` | `bool` |  |
| `url` | `string` |  |

#### Example: Load

```go
card, err := client.Card(nil).Load(map[string]any{"id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(card) // the loaded record
```

#### Example: List

```go
cards, err := client.Card(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(cards) // the array of records
```

#### Example: Create

```go
result, err := client.Card(nil).Create(map[string]any{
    "id_list": "example_id_list",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CardCheckItemState

Create an instance: `cardCheckItemState := client.CardCheckItemState(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
cardCheckItemState, err := client.CardCheckItemState(nil).Load(map[string]any{"id": "card_check_item_state_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cardCheckItemState) // the loaded record
```


### CardList

Create an instance: `cardList := client.CardList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
cardList, err := client.CardList(nil).Load(map[string]any{"id": "card_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(cardList) // the loaded record
```


### CheckItem

Create an instance: `checkItem := client.CheckItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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

```go
checkItem, err := client.CheckItem(nil).Load(map[string]any{"id": "check_item_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checkItem) // the loaded record
```


### Checklist

Create an instance: `checklist := client.Checklist(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
checklist, err := client.Checklist(nil).Load(map[string]any{"id": "checklist_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(checklist) // the loaded record
```

#### Example: Create

```go
result, err := client.Checklist(nil).Create(map[string]any{
    "id_card": "example_id_card",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ClaimableOrganization

Create an instance: `claimableOrganization := client.ClaimableOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `activeMembershipCount` | `float64` |  |
| `dateLastActive` | `string` | The date of the most recent activity on any of the boards in the workspace. |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idActiveAdmins` | `[]any` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `products` | `[]any` |  |

#### Example: List

```go
claimableOrganizations, err := client.ClaimableOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(claimableOrganizations) // the array of records
```


### CustomBoardBackground

Create an instance: `customBoardBackground := client.CustomBoardBackground(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomEmoji

Create an instance: `customEmoji := client.CustomEmoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
customEmoji, err := client.CustomEmoji(nil).Load(map[string]any{"id": "custom_emoji_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customEmoji) // the loaded record
```

#### Example: List

```go
customEmojis, err := client.CustomEmoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customEmojis) // the array of records
```

#### Example: Create

```go
result, err := client.CustomEmoji(nil).Create(map[string]any{
    "member_id": "example_member_id",
    "file": "example_file",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CustomField

Create an instance: `customField := client.CustomField(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cardFront` | `bool` |  |
| `display` | `map[string]any` |  |
| `display_cardFront` | `bool` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `bool` | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | The type of model that the Custom Field is being defined on. |
| `name` | `string` | The name of the Custom Field |
| `options` | `[]any` | If the type is `checkbox` |
| `pos` | `string` |  |
| `type` | `string` | The type of Custom Field to create. |

#### Example: Load

```go
customField, err := client.CustomField(nil).Load(map[string]any{"id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customField) // the loaded record
```

#### Example: List

```go
customFields, err := client.CustomField(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFields) // the array of records
```

#### Example: Create

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


### CustomFieldItem

Create an instance: `customFieldItem := client.CustomFieldItem(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `idCustomField` | `string` |  |
| `idModel` | `string` |  |
| `modelType` | `string` |  |
| `value` | `map[string]any` |  |

#### Example: List

```go
customFieldItems, err := client.CustomFieldItem(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customFieldItems) // the array of records
```


### CustomSticker

Create an instance: `customSticker := client.CustomSticker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `scaled` | `[]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
customSticker, err := client.CustomSticker(nil).Load(map[string]any{"id": "custom_sticker_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(customSticker) // the loaded record
```

#### Example: List

```go
customStickers, err := client.CustomSticker(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(customStickers) // the array of records
```

#### Example: Create

```go
result, err := client.CustomSticker(nil).Create(map[string]any{
    "member_id": "example_member_id",
    "file": "example_file",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EmailPosition

Create an instance: `emailPosition := client.EmailPosition(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### Emoji

Create an instance: `emoji := client.Emoji(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `keywords` | `[]any` |  |
| `name` | `string` |  |
| `native` | `string` |  |
| `sheetX` | `float64` |  |
| `sheetY` | `float64` |  |
| `shortName` | `string` |  |
| `shortNames` | `[]any` |  |
| `text` | `string` |  |
| `texts` | `string` |  |
| `tts` | `string` |  |
| `unified` | `string` |  |

#### Example: List

```go
emojis, err := client.Emoji(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(emojis) // the array of records
```


### Enterpris

Create an instance: `enterpris := client.Enterpris(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateOrganizationPrefsLastUpdated` | `string` |  |
| `displayName` | `string` |  |
| `domains` | `[]any` |  |
| `enterpriseDomains` | `[]any` |  |
| `id` | `string` |  |
| `idAdmins` | `[]any` |  |
| `idOrganizations` | `[]any` |  |
| `idp` | `map[string]any` |  |
| `isRealEnterprise` | `bool` |  |
| `licenses` | `map[string]any` |  |
| `logoHash` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `organizationPrefs` | `map[string]any` |  |
| `pluginWhitelistingEnabled` | `[]any` |  |
| `prefs` | `map[string]any` |  |
| `products` | `[]any` |  |
| `ssoActivationFailed` | `bool` |  |

#### Example: Load

```go
enterpris, err := client.Enterpris(nil).Load(map[string]any{"id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpris) // the loaded record
```

#### Example: Create

```go
result, err := client.Enterpris(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnterprisSignupUrl

Create an instance: `enterprisSignupUrl := client.EnterprisSignupUrl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `signupUrl` | `string` |  |

#### Example: Load

```go
enterprisSignupUrl, err := client.EnterprisSignupUrl(nil).Load(map[string]any{"id": "enterpris_signup_url_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterprisSignupUrl) // the loaded record
```


### EnterpriseAdmin

Create an instance: `enterpriseAdmin := client.EnterpriseAdmin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fullName` | `string` |  |
| `id` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
enterpriseAdmin, err := client.EnterpriseAdmin(nil).Load(map[string]any{"enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseAdmin) // the loaded record
```


### EnterpriseAuditLog

Create an instance: `enterpriseAuditLog := client.EnterpriseAuditLog(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `idAction` | `string` |  |
| `member` | `map[string]any` |  |
| `memberCreator` | `map[string]any` |  |
| `organization` | `map[string]any` |  |
| `type` | `string` |  |

#### Example: List

```go
enterpriseAuditLogs, err := client.EnterpriseAuditLog(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(enterpriseAuditLogs) // the array of records
```


### Export

Create an instance: `export := client.Export(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attempts` | `float64` |  |
| `exportUrl` | `string` |  |
| `finished` | `bool` |  |
| `id` | `string` |  |
| `size` | `string` |  |
| `stage` | `string` |  |
| `startedAt` | `string` |  |
| `status` | `map[string]any` |  |

#### Example: Load

```go
export, err := client.Export(nil).Load(map[string]any{"id": "export_id", "board_id": "board_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(export) // the loaded record
```

#### Example: List

```go
exports, err := client.Export(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(exports) // the array of records
```

#### Example: Create

```go
result, err := client.Export(nil).Create(map[string]any{
    "board_id": "example_board_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ExportDownload

Create an instance: `exportDownload := client.ExportDownload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
exportDownload, err := client.ExportDownload(nil).Load(map[string]any{"board_id": "board_id", "id_export": "id_export"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(exportDownload) // the loaded record
```


### Generate

Create an instance: `generate := client.Generate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Generate(nil).Create(map[string]any{
    "board_id": "example_board_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### IdEmailList

Create an instance: `idEmailList := client.IdEmailList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### IdLabel

Create an instance: `idLabel := client.IdLabel(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### IdMember

Create an instance: `idMember := client.IdMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Label

Create an instance: `label := client.Label(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
label, err := client.Label(nil).Load(map[string]any{"id": "label_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(label) // the loaded record
```

#### Example: Create

```go
result, err := client.Label(nil).Create(map[string]any{
    "color": "example_color",
    "id_board": "example_id_board",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### List

Create an instance: `list := client.List(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
list, err := client.List(nil).Load(map[string]any{"id": "list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(list) // the loaded record
```

#### Example: Create

```go
result, err := client.List(nil).Create(map[string]any{
    "id_board": "example_id_board",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Member

Create an instance: `member := client.Member(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

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
| `bioData` | `map[string]any` |  |
| `confirmed` | `bool` |  |
| `email` | `string` |  |
| `fullName` | `string` |  |
| `gravatarHash` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `[]any` |  |
| `idBoardsPinned` | `[]any` |  |
| `idEnterprise` | `string` |  |
| `idEnterprisesAdmin` | `[]any` |  |
| `idEnterprisesDeactivated` | `[]any` |  |
| `idMemberReferrer` | `string` |  |
| `idOrganizations` | `[]any` |  |
| `idPremOrgsAdmin` | `[]any` |  |
| `initials` | `string` |  |
| `isAaMastered` | `bool` |  |
| `ixUpdate` | `float64` |  |
| `limits` | `map[string]any` |  |
| `loginTypes` | `[]any` |  |
| `marketingOptIn` | `map[string]any` |  |
| `memberType` | `string` |  |
| `messagesDismissed` | `map[string]any` |  |
| `nonPublic` | `map[string]any` | Profile data with restricted visibility. |
| `nonPublicAvailable` | `bool` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `[]any` |  |
| `prefs` | `map[string]any` |  |
| `premiumFeatures` | `[]any` |  |
| `products` | `[]any` |  |
| `status` | `string` |  |
| `trophies` | `[]any` |  |
| `uploadedAvatarHash` | `string` |  |
| `uploadedAvatarUrl` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```go
member, err := client.Member(nil).Load(map[string]any{"id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(member) // the loaded record
```

#### Example: List

```go
members, err := client.Member(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(members) // the array of records
```

#### Example: Create

```go
result, err := client.Member(nil).Create(map[string]any{
    "id": "example_id",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### MemberPrivacy

Create an instance: `memberPrivacy := client.MemberPrivacy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
memberPrivacy, err := client.MemberPrivacy(nil).Load(map[string]any{"plugin_id": "plugin_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(memberPrivacy) // the loaded record
```


### MembersVoted

Create an instance: `membersVoted := client.MembersVoted(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
membersVoted, err := client.MembersVoted(nil).Load(map[string]any{"card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(membersVoted) // the loaded record
```


### Membership

Create an instance: `membership := client.Membership(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `admin` | `bool` |  |
| `collaborator` | `bool` |  |
| `deactivated` | `bool` |  |
| `id` | `string` |  |
| `licensed` | `bool` |  |
| `managed` | `bool` |  |
| `member` | `map[string]any` |  |

#### Example: Load

```go
membership, err := client.Membership(nil).Load(map[string]any{"id": "membership_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(membership) // the loaded record
```

#### Example: List

```go
memberships, err := client.Membership(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(memberships) // the array of records
```


### MostRecent

Create an instance: `mostRecent := client.MostRecent(nil)`


### NewBillableGuest

Create an instance: `newBillableGuest := client.NewBillableGuest(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
newBillableGuest, err := client.NewBillableGuest(nil).Load(map[string]any{"id": "new_billable_guest_id", "organization_id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(newBillableGuest) // the loaded record
```


### Notification

Create an instance: `notification := client.Notification(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `map[string]any` |  |
| `card` | `map[string]any` |  |
| `data` | `string` |  |
| `date` | `string` |  |
| `dateRead` | `string` |  |
| `id` | `string` |  |
| `idAction` | `string` |  |
| `idMemberCreator` | `string` |  |
| `reactions` | `[]any` |  |
| `type` | `string` |  |
| `unread` | `bool` |  |

#### Example: Load

```go
notification, err := client.Notification(nil).Load(map[string]any{"id": "notification_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notification) // the loaded record
```

#### Example: List

```go
notifications, err := client.Notification(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notifications) // the array of records
```


### NotificationChannelSetting

Create an instance: `notificationChannelSetting := client.NotificationChannelSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedKeys` | `[]any` | Singular key or array of notification keys |
| `channel` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |

#### Example: Load

```go
notificationChannelSetting, err := client.NotificationChannelSetting(nil).Load(map[string]any{"channel": "channel", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationChannelSetting) // the loaded record
```

#### Example: List

```go
notificationChannelSettings, err := client.NotificationChannelSetting(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationChannelSettings) // the array of records
```


### NotificationList

Create an instance: `notificationList := client.NotificationList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
notificationList, err := client.NotificationList(nil).Load(map[string]any{"id": "notification_list_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationList) // the loaded record
```


### NotificationMemberCreator

Create an instance: `notificationMemberCreator := client.NotificationMemberCreator(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
notificationMemberCreator, err := client.NotificationMemberCreator(nil).Load(map[string]any{"id": "notification_member_creator_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(notificationMemberCreator) // the loaded record
```


### NotificationsChannelSetting

Create an instance: `notificationsChannelSetting := client.NotificationsChannelSetting(nil)`


### Option

Create an instance: `option := client.Option(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
option, err := client.Option(nil).Load(map[string]any{"id": "option_id", "custom_field_id": "custom_field_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(option) // the loaded record
```


### OrgInviteRestrict

Create an instance: `orgInviteRestrict := client.OrgInviteRestrict(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Remove(match, ctrl)` | Remove the matching entity. |


### Organization

Create an instance: `organization := client.Organization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateLastActivity` | `string` |  |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `[]any` |  |
| `idEnterprise` | `string` |  |
| `memberships` | `[]any` |  |
| `name` | `string` |  |
| `offering` | `string` |  |
| `prefs` | `map[string]any` |  |
| `premiumFeatures` | `[]any` |  |
| `url` | `string` |  |

#### Example: Load

```go
organization, err := client.Organization(nil).Load(map[string]any{"id": "organization_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(organization) // the loaded record
```

#### Example: List

```go
organizations, err := client.Organization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(organizations) // the array of records
```

#### Example: Create

```go
result, err := client.Organization(nil).Create(map[string]any{
    "display_name": "example_display_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PendingOrganization

Create an instance: `pendingOrganization := client.PendingOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `displayName` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |
| `logoUrl` | `string` |  |
| `memberRequestor` | `map[string]any` |  |
| `membershipCount` | `float64` |  |
| `transferability` | `map[string]any` |  |

#### Example: List

```go
pendingOrganizations, err := client.PendingOrganization(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pendingOrganizations) // the array of records
```


### Plugin

Create an instance: `plugin := client.Plugin(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
plugin, err := client.Plugin(nil).Load(map[string]any{"id": "plugin_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(plugin) // the loaded record
```

#### Example: List

```go
plugins, err := client.Plugin(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(plugins) // the array of records
```


### PluginData

Create an instance: `pluginData := client.PluginData(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Example: Load

```go
pluginData, err := client.PluginData(nil).Load(map[string]any{"card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(pluginData) // the loaded record
```

#### Example: List

```go
pluginDatas, err := client.PluginData(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(pluginDatas) // the array of records
```


### PluginListing

Create an instance: `pluginListing := client.PluginListing(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | The description to show for the given locale |
| `id` | `string` |  |
| `locale` | `string` | The locale that this listing should be displayed for. |
| `name` | `string` | The name to use for the given locale. |
| `overview` | `string` | The overview to show for the given locale. |

#### Example: Create

```go
result, err := client.PluginListing(nil).Create(map[string]any{
    "id_plugin": "example_id_plugin",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Reaction

Create an instance: `reaction := client.Reaction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
reaction, err := client.Reaction(nil).Load(map[string]any{"id": "reaction_id", "id_action": "id_action"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(reaction) // the loaded record
```


### Read

Create an instance: `read := client.Read(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Example: Create

```go
result, err := client.Read(nil).Create(map[string]any{
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### SavedSearch

Create an instance: `savedSearch := client.SavedSearch(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `name` | `string` |  |
| `pos` | `any` |  |
| `query` | `string` |  |

#### Example: Load

```go
savedSearch, err := client.SavedSearch(nil).Load(map[string]any{"id": "saved_search_id", "member_id": "member_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(savedSearch) // the loaded record
```

#### Example: List

```go
savedSearchs, err := client.SavedSearch(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(savedSearchs) // the array of records
```

#### Example: Create

```go
result, err := client.SavedSearch(nil).Create(map[string]any{
    "member_id": "example_member_id",
    "name": "example_name",
    "pos": "example_pos",
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Search

Create an instance: `search := client.Search(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Example: List

```go
searchs, err := client.Search(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(searchs) // the array of records
```


### ShowSidebar

Create an instance: `showSidebar := client.ShowSidebar(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### ShowSidebarActivity

Create an instance: `showSidebarActivity := client.ShowSidebarActivity(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### ShowSidebarBoardAction

Create an instance: `showSidebarBoardAction := client.ShowSidebarBoardAction(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### ShowSidebarMember

Create an instance: `showSidebarMember := client.ShowSidebarMember(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Update(data, ctrl)` | Update an existing entity. |


### Sticker

Create an instance: `sticker := client.Sticker(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```go
sticker, err := client.Sticker(nil).Load(map[string]any{"id": "sticker_id", "card_id": "card_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(sticker) // the loaded record
```


### Tag

Create an instance: `tag := client.Tag(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```go
tags, err := client.Tag(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tags) // the array of records
```


### Token

Create an instance: `token := client.Token(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `dateCreated` | `string` |  |
| `dateExpires` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |
| `identifier` | `string` |  |
| `permissions` | `[]any` |  |

#### Example: Load

```go
token, err := client.Token(nil).Load(map[string]any{"id": "token_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(token) // the loaded record
```

#### Example: List

```go
tokens, err := client.Token(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(tokens) // the array of records
```


### TransferrableOrganization

Create an instance: `transferrableOrganization := client.TransferrableOrganization(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `newBillableMembers` | `[]any` |  |
| `restrictedMembers` | `[]any` |  |
| `transferrable` | `bool` |  |

#### Example: Load

```go
transferrableOrganization, err := client.TransferrableOrganization(nil).Load(map[string]any{"id": "transferrable_organization_id", "enterpris_id": "enterpris_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(transferrableOrganization) // the loaded record
```


### TrelloList

Create an instance: `trelloList := client.TrelloList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `map[string]any` |  |
| `closed` | `bool` |  |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `limits` | `map[string]any` |  |
| `name` | `string` | The name of the list |
| `pos` | `float64` |  |
| `softLimit` | `string` |  |
| `subscribed` | `bool` |  |

#### Example: Load

```go
trelloList, err := client.TrelloList(nil).Load(map[string]any{"action_id": "action_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(trelloList) // the loaded record
```

#### Example: List

```go
trelloLists, err := client.TrelloList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(trelloLists) // the array of records
```

#### Example: Create

```go
result, err := client.TrelloList(nil).Create(map[string]any{
    "board_id": "example_board_id",
    "name": "example_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Webhook

Create an instance: `webhook := client.Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `callbackURL` | `string` |  |
| `consecutiveFailures` | `float64` |  |
| `description` | `string` |  |
| `firstConsecutiveFailDate` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` |  |

#### Example: Load

```go
webhook, err := client.Webhook(nil).Load(map[string]any{"id": "webhook_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhook) // the loaded record
```

#### Example: List

```go
webhooks, err := client.Webhook(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhooks) // the array of records
```

#### Example: Create

```go
result, err := client.Webhook(nil).Create(map[string]any{
    "callback_url": "example_callback_url",
    "id_model": "example_id_model",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/trello-sdk/go/
├── trello.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/trello-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
boardstar := client.BoardStar(nil)
boardstar.List(nil, nil)

// boardstar.Data() now returns the boardstar data from the last list
// boardstar.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
