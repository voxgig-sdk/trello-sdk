# Trello JavaScript SDK



The JavaScript SDK for the Trello API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.Action()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install trello
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { TrelloSDK } = require('@voxgig-sdk/trello-js')

const client = new TrelloSDK({
  apikey: process.env.TRELLO_APIKEY,
})
```

### Load an Action

```js
const action = await client.Action().load({ id: 'action_id' })
console.log(action)
```

### List Action Records

```js
const actions = await client.Action().list({ card_id: "example" })
for (const action of actions) {
  console.log(action)
}
```

### Create a Action

```js
const created = await client.Action().create({
  id_action: 'example_id_action',
})
console.log(created)
```

### Update a Action

```js
const updated = await client.Action().update({
  id: 'action_id',
  text: 'example_text',
  data: {},
})
console.log(updated)
```

### Remove a Action

```js
await client.Action().remove({ id: 'action_id' })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const boardstars = await client.BoardStar().list()
  console.log(boardstars)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```js
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```js
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```js
const client = TrelloSDK.test()

const boardstar = await client.BoardStar().list()
// boardstar is the entity, populated with mock response data
// — call boardstar.data() for the record itself
console.log(boardstar)
```

You can also use the instance method:

```js
const client = new TrelloSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.BoardStar()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new TrelloSDK({
  apikey: '...',
  extend: [logger],
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
cd js && npm test
```


## Reference

### TrelloSDK

#### Constructor

```js
new TrelloSDK(options?)
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Action(data?)` | `ActionEntity` | Create an Action entity instance. |
| `ActionReactionsSummary(data?)` | `ActionReactionsSummaryEntity` | Create an ActionReactionsSummary entity instance. |
| `Admin(data?)` | `AdminEntity` | Create an Admin entity instance. |
| `Application(data?)` | `ApplicationEntity` | Create an Application entity instance. |
| `ApplicationCompliance(data?)` | `ApplicationComplianceEntity` | Create an ApplicationCompliance entity instance. |
| `AssociatedDomain(data?)` | `AssociatedDomainEntity` | Create an AssociatedDomain entity instance. |
| `Attachment(data?)` | `AttachmentEntity` | Create an Attachment entity instance. |
| `Batch(data?)` | `BatchEntity` | Create a Batch entity instance. |
| `Board(data?)` | `BoardEntity` | Create a Board entity instance. |
| `BoardBackground(data?)` | `BoardBackgroundEntity` | Create a BoardBackground entity instance. |
| `BoardPlugin(data?)` | `BoardPluginEntity` | Create a BoardPlugin entity instance. |
| `BoardStar(data?)` | `BoardStarEntity` | Create a BoardStar entity instance. |
| `Bulk(data?)` | `BulkEntity` | Create a Bulk entity instance. |
| `Card(data?)` | `CardEntity` | Create a Card entity instance. |
| `CardCheckItemState(data?)` | `CardCheckItemStateEntity` | Create a CardCheckItemState entity instance. |
| `CardList(data?)` | `CardListEntity` | Create a CardList entity instance. |
| `CheckItem(data?)` | `CheckItemEntity` | Create a CheckItem entity instance. |
| `Checklist(data?)` | `ChecklistEntity` | Create a Checklist entity instance. |
| `ClaimableOrganization(data?)` | `ClaimableOrganizationEntity` | Create a ClaimableOrganization entity instance. |
| `CustomBoardBackground(data?)` | `CustomBoardBackgroundEntity` | Create a CustomBoardBackground entity instance. |
| `CustomEmoji(data?)` | `CustomEmojiEntity` | Create a CustomEmoji entity instance. |
| `CustomField(data?)` | `CustomFieldEntity` | Create a CustomField entity instance. |
| `CustomFieldItem(data?)` | `CustomFieldItemEntity` | Create a CustomFieldItem entity instance. |
| `CustomSticker(data?)` | `CustomStickerEntity` | Create a CustomSticker entity instance. |
| `EmailPosition(data?)` | `EmailPositionEntity` | Create an EmailPosition entity instance. |
| `Emoji(data?)` | `EmojiEntity` | Create an Emoji entity instance. |
| `Enterpris(data?)` | `EnterprisEntity` | Create an Enterpris entity instance. |
| `EnterprisSignupUrl(data?)` | `EnterprisSignupUrlEntity` | Create an EnterprisSignupUrl entity instance. |
| `EnterpriseAdmin(data?)` | `EnterpriseAdminEntity` | Create an EnterpriseAdmin entity instance. |
| `EnterpriseAuditLog(data?)` | `EnterpriseAuditLogEntity` | Create an EnterpriseAuditLog entity instance. |
| `Export(data?)` | `ExportEntity` | Create an Export entity instance. |
| `ExportDownload(data?)` | `ExportDownloadEntity` | Create an ExportDownload entity instance. |
| `Generate(data?)` | `GenerateEntity` | Create a Generate entity instance. |
| `IdEmailList(data?)` | `IdEmailListEntity` | Create an IdEmailList entity instance. |
| `IdLabel(data?)` | `IdLabelEntity` | Create an IdLabel entity instance. |
| `IdMember(data?)` | `IdMemberEntity` | Create an IdMember entity instance. |
| `Label(data?)` | `LabelEntity` | Create a Label entity instance. |
| `List(data?)` | `ListEntity` | Create a List entity instance. |
| `Member(data?)` | `MemberEntity` | Create a Member entity instance. |
| `MemberPrivacy(data?)` | `MemberPrivacyEntity` | Create a MemberPrivacy entity instance. |
| `MembersVoted(data?)` | `MembersVotedEntity` | Create a MembersVoted entity instance. |
| `Membership(data?)` | `MembershipEntity` | Create a Membership entity instance. |
| `MostRecent(data?)` | `MostRecentEntity` | Create a MostRecent entity instance. |
| `NewBillableGuest(data?)` | `NewBillableGuestEntity` | Create a NewBillableGuest entity instance. |
| `Notification(data?)` | `NotificationEntity` | Create a Notification entity instance. |
| `NotificationChannelSetting(data?)` | `NotificationChannelSettingEntity` | Create a NotificationChannelSetting entity instance. |
| `NotificationList(data?)` | `NotificationListEntity` | Create a NotificationList entity instance. |
| `NotificationMemberCreator(data?)` | `NotificationMemberCreatorEntity` | Create a NotificationMemberCreator entity instance. |
| `NotificationsChannelSetting(data?)` | `NotificationsChannelSettingEntity` | Create a NotificationsChannelSetting entity instance. |
| `Option(data?)` | `OptionEntity` | Create an Option entity instance. |
| `OrgInviteRestrict(data?)` | `OrgInviteRestrictEntity` | Create an OrgInviteRestrict entity instance. |
| `Organization(data?)` | `OrganizationEntity` | Create an Organization entity instance. |
| `PendingOrganization(data?)` | `PendingOrganizationEntity` | Create a PendingOrganization entity instance. |
| `Plugin(data?)` | `PluginEntity` | Create a Plugin entity instance. |
| `PluginData(data?)` | `PluginDataEntity` | Create a PluginData entity instance. |
| `PluginListing(data?)` | `PluginListingEntity` | Create a PluginListing entity instance. |
| `Reaction(data?)` | `ReactionEntity` | Create a Reaction entity instance. |
| `Read(data?)` | `ReadEntity` | Create a Read entity instance. |
| `SavedSearch(data?)` | `SavedSearchEntity` | Create a SavedSearch entity instance. |
| `Search(data?)` | `SearchEntity` | Create a Search entity instance. |
| `ShowSidebar(data?)` | `ShowSidebarEntity` | Create a ShowSidebar entity instance. |
| `ShowSidebarActivity(data?)` | `ShowSidebarActivityEntity` | Create a ShowSidebarActivity entity instance. |
| `ShowSidebarBoardAction(data?)` | `ShowSidebarBoardActionEntity` | Create a ShowSidebarBoardAction entity instance. |
| `ShowSidebarMember(data?)` | `ShowSidebarMemberEntity` | Create a ShowSidebarMember entity instance. |
| `Sticker(data?)` | `StickerEntity` | Create a Sticker entity instance. |
| `Tag(data?)` | `TagEntity` | Create a Tag entity instance. |
| `Token(data?)` | `TokenEntity` | Create a Token entity instance. |
| `TransferrableOrganization(data?)` | `TransferrableOrganizationEntity` | Create a TransferrableOrganization entity instance. |
| `TrelloList(data?)` | `TrelloListEntity` | Create a TrelloList entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `tester(testopts?, sdkopts?)` | `TrelloSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `TrelloSDK.test(testopts?, sdkopts?)` | `TrelloSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): TrelloSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

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

Operations: create, list, load, remove, update.

API path: `/cards/{id}/actions/comments`

#### ActionReactionsSummary

| Field | Description |
| --- | --- |

Operations: load.

API path: `/actions/{idAction}/reactionsSummary`

#### Admin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove, update.

API path: `/enterprises/{id}/admins/{idMember}`

#### Application

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ApplicationCompliance

| Field | Description |
| --- | --- |

Operations: load.

API path: `/applications/{key}/compliance`

#### AssociatedDomain

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/organizations/{id}/prefs/associatedDomain`

#### Attachment

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list, load, remove.

API path: `/cards/{id}/attachments`

#### Batch

| Field | Description |
| --- | --- |

Operations: load.

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

Operations: create, list, load, remove, update.

API path: `/boards/`

#### BoardBackground

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, list, load, remove, update.

API path: `/members/{id}/customBoardBackgrounds`

#### BoardPlugin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/boards/{id}/boardPlugins/{idPlugin}`

#### BoardStar

| Field | Description |
| --- | --- |
| `id` |  |
| `idBoard` |  |
| `pos` |  |

Operations: create, list, load, remove, update.

API path: `/members/{id}/boardStars`

#### Bulk

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, update.

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

Operations: create, list, load, remove, update.

API path: `/cards`

#### CardCheckItemState

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/cards/{id}/checkItemStates`

#### CardList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

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

Operations: load, remove, update.

API path: `/cards/{id}/checkItem/{idCheckItem}`

#### Checklist

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, remove, update.

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

Operations: list.

API path: `/enterprises/{id}/claimableOrganizations`

#### CustomBoardBackground

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/members/{id}/customBoardBackgrounds/{idBackground}`

#### CustomEmoji

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `url` |  |

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

API path: `/customFields/{id}/options`

#### CustomFieldItem

| Field | Description |
| --- | --- |
| `id` |  |
| `idCustomField` |  |
| `idModel` |  |
| `modelType` |  |
| `value` |  |

Operations: list.

API path: `/cards/{id}/customFieldItems`

#### CustomSticker

| Field | Description |
| --- | --- |
| `id` |  |
| `scaled` |  |
| `url` |  |

Operations: create, list, load, remove.

API path: `/members/{id}/customStickers`

#### EmailPosition

| Field | Description |
| --- | --- |

Operations: update.

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

Operations: list.

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

Operations: create, load, update.

API path: `/enterprises/{id}/tokens`

#### EnterprisSignupUrl

| Field | Description |
| --- | --- |
| `id` |  |
| `signupUrl` |  |

Operations: load.

API path: `/enterprises/{id}/signupUrl`

#### EnterpriseAdmin

| Field | Description |
| --- | --- |
| `fullName` |  |
| `id` |  |
| `username` |  |

Operations: load.

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

Operations: list.

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

Operations: create, list, load, remove.

API path: `/boards/{id}/exports`

#### ExportDownload

| Field | Description |
| --- | --- |

Operations: load.

API path: `/boards/{id}/exports/{idExport}/download`

#### Generate

| Field | Description |
| --- | --- |

Operations: create.

API path: `/boards/{id}/calendarKey/generate`

#### IdEmailList

| Field | Description |
| --- | --- |

Operations: update.

API path: `/boards/{id}/myPrefs/idEmailList`

#### IdLabel

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/cards/{id}/idLabels/{idLabel}`

#### IdMember

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/cards/{id}/idMembers/{idMember}`

#### Label

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, remove, update.

API path: `/labels`

#### List

| Field | Description |
| --- | --- |
| `id` |  |

Operations: create, load, update.

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

Operations: create, list, load, remove, update.

API path: `/members/{id}/avatar`

#### MemberPrivacy

| Field | Description |
| --- | --- |

Operations: load.

API path: `/plugins/{id}/compliance/memberPrivacy`

#### MembersVoted

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, remove.

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

Operations: list, load, update.

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

Operations: load.

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

Operations: list, load, update.

API path: `/members/{id}/notifications`

#### NotificationChannelSetting

| Field | Description |
| --- | --- |
| `blockedKeys` | Singular key or array of notification keys |
| `channel` |  |
| `id` |  |
| `idMember` |  |

Operations: list, load, update.

API path: `/members/{id}/notificationsChannelSettings`

#### NotificationList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

API path: `/notifications/{id}/list`

#### NotificationMemberCreator

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load.

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

Operations: load, remove.

API path: `/customFields/{id}/options/{idCustomFieldOption}`

#### OrgInviteRestrict

| Field | Description |
| --- | --- |

Operations: remove.

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

Operations: create, list, load, remove, update.

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

Operations: list.

API path: `/enterprises/{id}/pendingOrganizations`

#### Plugin

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list, load, update.

API path: `/boards/{id}/boardPlugins`

#### PluginData

| Field | Description |
| --- | --- |

Operations: list, load.

API path: `/organizations/{id}/pluginData`

#### PluginListing

| Field | Description |
| --- | --- |
| `description` | The description to show for the given locale |
| `id` |  |
| `locale` | The locale that this listing should be displayed for. |
| `name` | The name to use for the given locale. |
| `overview` | The overview to show for the given locale. |

Operations: create, update.

API path: `/plugins/{idPlugin}/listing`

#### Reaction

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, remove.

API path: `/actions/{idAction}/reactions/{id}`

#### Read

| Field | Description |
| --- | --- |

Operations: create.

API path: `/notifications/all/read`

#### SavedSearch

| Field | Description |
| --- | --- |
| `id` |  |
| `name` |  |
| `pos` |  |
| `query` |  |

Operations: create, list, load, remove, update.

API path: `/members/{id}/savedSearches`

#### Search

| Field | Description |
| --- | --- |

Operations: list.

API path: `/search`

#### ShowSidebar

| Field | Description |
| --- | --- |

Operations: update.

API path: `/boards/{id}/myPrefs/showSidebar`

#### ShowSidebarActivity

| Field | Description |
| --- | --- |

Operations: update.

API path: `/boards/{id}/myPrefs/showSidebarActivity`

#### ShowSidebarBoardAction

| Field | Description |
| --- | --- |

Operations: update.

API path: `/boards/{id}/myPrefs/showSidebarBoardActions`

#### ShowSidebarMember

| Field | Description |
| --- | --- |

Operations: update.

API path: `/boards/{id}/myPrefs/showSidebarMembers`

#### Sticker

| Field | Description |
| --- | --- |
| `id` |  |

Operations: load, remove, update.

API path: `/cards/{id}/stickers/{idSticker}`

#### Tag

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list, remove.

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

Operations: list, load, remove.

API path: `/members/{id}/tokens`

#### TransferrableOrganization

| Field | Description |
| --- | --- |
| `id` |  |
| `newBillableMembers` |  |
| `restrictedMembers` |  |
| `transferrable` |  |

Operations: load.

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

Operations: create, list, load.

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

Operations: create, list, load, remove, update.

API path: `/webhooks/`



## Entities


### Action

Create an instance: `const action = client.Action()`

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
| `data` | `Object` |  |
| `date` | `string` |  |
| `display` | `Object` |  |
| `id` | `string` |  |
| `idMemberCreator` | `string` |  |
| `limits` | `Object` |  |
| `memberCreator` | `Object` |  |
| `native` | `string` | The emoji to add as a native unicode emoji. |
| `shortName` | `string` | The primary `shortName` of the emoji to add. |
| `skinVariation` | `string` | The `skinVariation` of the emoji to add. |
| `type` | `string` |  |
| `unified` | `string` | The `unified` value of the emoji to add. |

#### Example: Load

```ts
const action = await client.Action().load({ id: 'action_id' })
```

#### Example: List

```ts
const actions = await client.Action().list({ card_id: "example" })
```

#### Example: Create

```ts
const action = await client.Action().create({
  id_action: 'example_id_action',
})
```


### ActionReactionsSummary

Create an instance: `const action_reactions_summary = client.ActionReactionsSummary()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const action_reactions_summary = await client.ActionReactionsSummary().load({ id_action: 'id_action' })
```


### Admin

Create an instance: `const admin = client.Admin()`

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

Create an instance: `const application = client.Application()`


### ApplicationCompliance

Create an instance: `const application_compliance = client.ApplicationCompliance()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const application_compliance = await client.ApplicationCompliance().load({ key: 'key' })
```


### AssociatedDomain

Create an instance: `const associated_domain = client.AssociatedDomain()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Attachment

Create an instance: `const attachment = client.Attachment()`

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

```ts
const attachment = await client.Attachment().load({ id: 'attachment_id', card_id: 'card_id' })
```

#### Example: List

```ts
const attachments = await client.Attachment().list({ card_id: "example" })
```


### Batch

Create an instance: `const batch = client.Batch()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const batch = await client.Batch().load({ url: 'url' })
```


### Board

Create an instance: `const board = client.Board()`

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
| `labelNames` | `Object` |  |
| `limits` | `Object` |  |
| `memberships` | `string` |  |
| `name` | `string` | The name of the board. |
| `pinned` | `boolean` |  |
| `powerUps` | `string` |  |
| `prefs` | `Object` |  |
| `shortLink` | `string` |  |
| `shortUrl` | `string` |  |
| `starred` | `boolean` |  |
| `subscribed` | `boolean` |  |
| `templateGallery` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const board = await client.Board().load({ id: 'board_id' })
```

#### Example: List

```ts
const boards = await client.Board().list({ member_id: "example" })
```

#### Example: Create

```ts
const board = await client.Board().create({
  name: 'example_name',
  id: 'example_id',
})
```


### BoardBackground

Create an instance: `const board_background = client.BoardBackground()`

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

```ts
const board_background = await client.BoardBackground().load({ id: 'board_background_id', member_id: 'member_id' })
```

#### Example: List

```ts
const board_backgrounds = await client.BoardBackground().list({ member_id: "example" })
```

#### Example: Create

```ts
const board_background = await client.BoardBackground().create({
  member_id: 'example_member_id',
  file: 'example_file',
})
```


### BoardPlugin

Create an instance: `const board_plugin = client.BoardPlugin()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### BoardStar

Create an instance: `const board_star = client.BoardStar()`

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

```ts
const board_star = await client.BoardStar().load({ id: 'board_star_id', member_id: 'member_id' })
```

#### Example: List

```ts
const board_stars = await client.BoardStar().list({ id: "example_id" })
```

#### Example: Create

```ts
const board_star = await client.BoardStar().create({
  member_id: 'example_member_id',
  id_board: 'example_id_board',
  pos: 'example_pos',
})
```


### Bulk

Create an instance: `const bulk = client.Bulk()`

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

```ts
const bulk = await client.Bulk().load({ id: [], enterpris_id: 'enterpris_id' })
```


### Card

Create an instance: `const card = client.Card()`

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
| `badges` | `Object` |  |
| `cardRole` | `string` |  |
| `checkItemStates` | `Array` |  |
| `closed` | `boolean` |  |
| `coordinates` | `string` |  |
| `cover` | `Object` |  |
| `creationMethod` | `string` |  |
| `customFieldItems` | `Array` | An array of objects containing the custom field ID, key and value, and ID of list type option. |
| `dateLastActivity` | `string` |  |
| `desc` | `string` |  |
| `descData` | `Object` |  |
| `due` | `string` |  |
| `dueReminder` | `string` |  |
| `id` | `string` |  |
| `idAttachmentCover` | `string` |  |
| `idBoard` | `string` |  |
| `idChecklists` | `Array` |  |
| `idLabels` | `Array` |  |
| `idList` | `string` |  |
| `idMembers` | `Array` |  |
| `idMembersVoted` | `Array` |  |
| `idShort` | `number` |  |
| `labels` | `Array` |  |
| `limits` | `Object` |  |
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

```ts
const card = await client.Card().load({ id: 'card_id' })
```

#### Example: List

```ts
const cards = await client.Card().list({ action_id: "example" })
```

#### Example: Create

```ts
const card = await client.Card().create({
  id_list: 'example_id_list',
})
```


### CardCheckItemState

Create an instance: `const card_check_item_state = client.CardCheckItemState()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const card_check_item_state = await client.CardCheckItemState().load({ id: 'card_check_item_state_id' })
```


### CardList

Create an instance: `const card_list = client.CardList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const card_list = await client.CardList().load({ id: 'card_list_id' })
```


### CheckItem

Create an instance: `const check_item = client.CheckItem()`

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

```ts
const check_item = await client.CheckItem().load({ id: 'check_item_id', card_id: 'card_id' })
```


### Checklist

Create an instance: `const checklist = client.Checklist()`

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

```ts
const checklist = await client.Checklist().load({ id: 'checklist_id' })
```

#### Example: Create

```ts
const checklist = await client.Checklist().create({
  id_card: 'example_id_card',
})
```


### ClaimableOrganization

Create an instance: `const claimable_organization = client.ClaimableOrganization()`

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
| `idActiveAdmins` | `Array` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `products` | `Array` |  |

#### Example: List

```ts
const claimable_organizations = await client.ClaimableOrganization().list({ enterpris_id: "example" })
```


### CustomBoardBackground

Create an instance: `const custom_board_background = client.CustomBoardBackground()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### CustomEmoji

Create an instance: `const custom_emoji = client.CustomEmoji()`

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

```ts
const custom_emoji = await client.CustomEmoji().load({ id: 'custom_emoji_id', member_id: 'member_id' })
```

#### Example: List

```ts
const custom_emojis = await client.CustomEmoji().list({ member_id: "example" })
```

#### Example: Create

```ts
const custom_emoji = await client.CustomEmoji().create({
  member_id: 'example_member_id',
  file: 'example_file',
  name: 'example_name',
})
```


### CustomField

Create an instance: `const custom_field = client.CustomField()`

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
| `display` | `Object` |  |
| `display_cardFront` | `boolean` | Whether this Custom Field should be shown on the front of Cards |
| `displaycardFront` | `boolean` | Whether to display this custom field on the front of cards |
| `fieldGroup` | `string` |  |
| `id` | `string` |  |
| `idModel` | `string` | The ID of the model for which the Custom Field is being defined. |
| `modelType` | `string` | The type of model that the Custom Field is being defined on. |
| `name` | `string` | The name of the Custom Field |
| `options` | `Array` | If the type is `checkbox` |
| `pos` | `string` |  |
| `type` | `string` | The type of Custom Field to create. |

#### Example: Load

```ts
const custom_field = await client.CustomField().load({ id: 'custom_field_id' })
```

#### Example: List

```ts
const custom_fields = await client.CustomField().list({ board_id: "example" })
```

#### Example: Create

```ts
const custom_field = await client.CustomField().create({
  idModel: 'example_idModel',
  modelType: 'example_modelType',
  type: 'example_type',
})
```


### CustomFieldItem

Create an instance: `const custom_field_item = client.CustomFieldItem()`

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
| `value` | `Object` |  |

#### Example: List

```ts
const custom_field_items = await client.CustomFieldItem().list({ card_id: "example" })
```


### CustomSticker

Create an instance: `const custom_sticker = client.CustomSticker()`

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
| `scaled` | `Array` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const custom_sticker = await client.CustomSticker().load({ id: 'custom_sticker_id', member_id: 'member_id' })
```

#### Example: List

```ts
const custom_stickers = await client.CustomSticker().list({ member_id: "example" })
```

#### Example: Create

```ts
const custom_sticker = await client.CustomSticker().create({
  member_id: 'example_member_id',
  file: 'example_file',
})
```


### EmailPosition

Create an instance: `const email_position = client.EmailPosition()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Emoji

Create an instance: `const emoji = client.Emoji()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `category` | `string` |  |
| `keywords` | `Array` |  |
| `name` | `string` |  |
| `native` | `string` |  |
| `sheetX` | `number` |  |
| `sheetY` | `number` |  |
| `shortName` | `string` |  |
| `shortNames` | `Array` |  |
| `text` | `string` |  |
| `texts` | `string` |  |
| `tts` | `string` |  |
| `unified` | `string` |  |

#### Example: List

```ts
const emojis = await client.Emoji().list()
```


### Enterpris

Create an instance: `const enterpris = client.Enterpris()`

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
| `domains` | `Array` |  |
| `enterpriseDomains` | `Array` |  |
| `id` | `string` |  |
| `idAdmins` | `Array` |  |
| `idOrganizations` | `Array` |  |
| `idp` | `Object` |  |
| `isRealEnterprise` | `boolean` |  |
| `licenses` | `Object` |  |
| `logoHash` | `string` |  |
| `logoUrl` | `string` |  |
| `name` | `string` |  |
| `organizationPrefs` | `Object` |  |
| `pluginWhitelistingEnabled` | `Array` |  |
| `prefs` | `Object` |  |
| `products` | `Array` |  |
| `ssoActivationFailed` | `boolean` |  |

#### Example: Load

```ts
const enterpris = await client.Enterpris().load({ id: 'enterpris_id' })
```

#### Example: Create

```ts
const enterpris = await client.Enterpris().create({
  id: 'example_id',
})
```


### EnterprisSignupUrl

Create an instance: `const enterpris_signup_url = client.EnterprisSignupUrl()`

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

```ts
const enterpris_signup_url = await client.EnterprisSignupUrl().load({ id: 'enterpris_signup_url_id' })
```


### EnterpriseAdmin

Create an instance: `const enterprise_admin = client.EnterpriseAdmin()`

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

```ts
const enterprise_admin = await client.EnterpriseAdmin().load({ enterpris_id: 'enterpris_id' })
```


### EnterpriseAuditLog

Create an instance: `const enterprise_audit_log = client.EnterpriseAuditLog()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date` | `string` |  |
| `idAction` | `string` |  |
| `member` | `Object` |  |
| `memberCreator` | `Object` |  |
| `organization` | `Object` |  |
| `type` | `string` |  |

#### Example: List

```ts
const enterprise_audit_logs = await client.EnterpriseAuditLog().list({ enterpris_id: "example" })
```


### Export

Create an instance: `const export_ = client.Export()`

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
| `status` | `Object` |  |

#### Example: Load

```ts
const export_ = await client.Export().load({ id: 'export_id', board_id: 'board_id' })
```

#### Example: List

```ts
const export_s = await client.Export().list({ organization_id: "example" })
```

#### Example: Create

```ts
const export_ = await client.Export().create({
  board_id: 'example_board_id',
})
```


### ExportDownload

Create an instance: `const export_download = client.ExportDownload()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const export_download = await client.ExportDownload().load({ board_id: 'board_id', id_export: 'id_export' })
```


### Generate

Create an instance: `const generate = client.Generate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const generate = await client.Generate().create({
  board_id: 'example_board_id',
})
```


### IdEmailList

Create an instance: `const id_email_list = client.IdEmailList()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### IdLabel

Create an instance: `const id_label = client.IdLabel()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### IdMember

Create an instance: `const id_member = client.IdMember()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Label

Create an instance: `const label = client.Label()`

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

```ts
const label = await client.Label().load({ id: 'label_id' })
```

#### Example: Create

```ts
const label = await client.Label().create({
  color: 'example_color',
  id_board: 'example_id_board',
  name: 'example_name',
})
```


### List

Create an instance: `const list = client.List()`

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

```ts
const list = await client.List().load({ id: 'list_id' })
```

#### Example: Create

```ts
const list = await client.List().create({
  id_board: 'example_id_board',
  name: 'example_name',
})
```


### Member

Create an instance: `const member = client.Member()`

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
| `bioData` | `Object` |  |
| `confirmed` | `boolean` |  |
| `email` | `string` |  |
| `fullName` | `string` |  |
| `gravatarHash` | `string` |  |
| `id` | `string` |  |
| `idBoards` | `Array` |  |
| `idBoardsPinned` | `Array` |  |
| `idEnterprise` | `string` |  |
| `idEnterprisesAdmin` | `Array` |  |
| `idEnterprisesDeactivated` | `Array` |  |
| `idMemberReferrer` | `string` |  |
| `idOrganizations` | `Array` |  |
| `idPremOrgsAdmin` | `Array` |  |
| `initials` | `string` |  |
| `isAaMastered` | `boolean` |  |
| `ixUpdate` | `number` |  |
| `limits` | `Object` |  |
| `loginTypes` | `Array` |  |
| `marketingOptIn` | `Object` |  |
| `memberType` | `string` |  |
| `messagesDismissed` | `Object` |  |
| `nonPublic` | `Object` | Profile data with restricted visibility. |
| `nonPublicAvailable` | `boolean` | Whether the response contains non-public profile data for the member |
| `oneTimeMessagesDismissed` | `Array` |  |
| `prefs` | `Object` |  |
| `premiumFeatures` | `Array` |  |
| `products` | `Array` |  |
| `status` | `string` |  |
| `trophies` | `Array` |  |
| `uploadedAvatarHash` | `string` |  |
| `uploadedAvatarUrl` | `string` |  |
| `url` | `string` |  |
| `username` | `string` |  |

#### Example: Load

```ts
const member = await client.Member().load({ id: 'member_id' })
```

#### Example: List

```ts
const members = await client.Member().list({ query: "example" })
```

#### Example: Create

```ts
const member = await client.Member().create({
  id: 'example_id',
})
```


### MemberPrivacy

Create an instance: `const member_privacy = client.MemberPrivacy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const member_privacy = await client.MemberPrivacy().load({ plugin_id: 'plugin_id' })
```


### MembersVoted

Create an instance: `const members_voted = client.MembersVoted()`

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

```ts
const members_voted = await client.MembersVoted().load({ card_id: 'card_id' })
```


### Membership

Create an instance: `const membership = client.Membership()`

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
| `member` | `Object` |  |

#### Example: Load

```ts
const membership = await client.Membership().load({ id: 'membership_id', organization_id: 'organization_id' })
```

#### Example: List

```ts
const memberships = await client.Membership().list({ organization_id: "example" })
```


### MostRecent

Create an instance: `const most_recent = client.MostRecent()`


### NewBillableGuest

Create an instance: `const new_billable_guest = client.NewBillableGuest()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const new_billable_guest = await client.NewBillableGuest().load({ id: 'new_billable_guest_id', organization_id: 'organization_id' })
```


### Notification

Create an instance: `const notification = client.Notification()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `board` | `Object` |  |
| `card` | `Object` |  |
| `data` | `string` |  |
| `date` | `string` |  |
| `dateRead` | `string` |  |
| `id` | `string` |  |
| `idAction` | `string` |  |
| `idMemberCreator` | `string` |  |
| `reactions` | `Array` |  |
| `type` | `string` |  |
| `unread` | `boolean` |  |

#### Example: Load

```ts
const notification = await client.Notification().load({ id: 'notification_id' })
```

#### Example: List

```ts
const notifications = await client.Notification().list({ member_id: "example" })
```


### NotificationChannelSetting

Create an instance: `const notification_channel_setting = client.NotificationChannelSetting()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blockedKeys` | `Array` | Singular key or array of notification keys |
| `channel` | `string` |  |
| `id` | `string` |  |
| `idMember` | `string` |  |

#### Example: Load

```ts
const notification_channel_setting = await client.NotificationChannelSetting().load({ channel: 'channel', member_id: 'member_id' })
```

#### Example: List

```ts
const notification_channel_settings = await client.NotificationChannelSetting().list({ member_id: "example" })
```


### NotificationList

Create an instance: `const notification_list = client.NotificationList()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const notification_list = await client.NotificationList().load({ id: 'notification_list_id' })
```


### NotificationMemberCreator

Create an instance: `const notification_member_creator = client.NotificationMemberCreator()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: Load

```ts
const notification_member_creator = await client.NotificationMemberCreator().load({ id: 'notification_member_creator_id' })
```


### NotificationsChannelSetting

Create an instance: `const notifications_channel_setting = client.NotificationsChannelSetting()`


### Option

Create an instance: `const option = client.Option()`

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

```ts
const option = await client.Option().load({ id: 'option_id', custom_field_id: 'custom_field_id' })
```


### OrgInviteRestrict

Create an instance: `const org_invite_restrict = client.OrgInviteRestrict()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### Organization

Create an instance: `const organization = client.Organization()`

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
| `idBoards` | `Array` |  |
| `idEnterprise` | `string` |  |
| `memberships` | `Array` |  |
| `name` | `string` |  |
| `offering` | `string` |  |
| `prefs` | `Object` |  |
| `premiumFeatures` | `Array` |  |
| `url` | `string` |  |

#### Example: Load

```ts
const organization = await client.Organization().load({ id: 'organization_id' })
```

#### Example: List

```ts
const organizations = await client.Organization().list({ enterpris_id: "example" })
```

#### Example: Create

```ts
const organization = await client.Organization().create({
  display_name: 'example_display_name',
})
```


### PendingOrganization

Create an instance: `const pending_organization = client.PendingOrganization()`

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
| `memberRequestor` | `Object` |  |
| `membershipCount` | `number` |  |
| `transferability` | `Object` |  |

#### Example: List

```ts
const pending_organizations = await client.PendingOrganization().list({ enterpris_id: "example" })
```


### Plugin

Create an instance: `const plugin = client.Plugin()`

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

```ts
const plugin = await client.Plugin().load({ id: 'plugin_id' })
```

#### Example: List

```ts
const plugins = await client.Plugin().list({ board_id: "example" })
```


### PluginData

Create an instance: `const plugin_data = client.PluginData()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```ts
const plugin_data = await client.PluginData().load({ card_id: 'card_id' })
```

#### Example: List

```ts
const plugin_datas = await client.PluginData().list({ organization_id: "example" })
```


### PluginListing

Create an instance: `const plugin_listing = client.PluginListing()`

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

```ts
const plugin_listing = await client.PluginListing().create({
  id_plugin: 'example_id_plugin',
})
```


### Reaction

Create an instance: `const reaction = client.Reaction()`

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

```ts
const reaction = await client.Reaction().load({ id: 'reaction_id', id_action: 'id_action' })
```


### Read

Create an instance: `const read = client.Read()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const read = await client.Read().create({
})
```


### SavedSearch

Create an instance: `const saved_search = client.SavedSearch()`

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
| `pos` | `*` |  |
| `query` | `string` |  |

#### Example: Load

```ts
const saved_search = await client.SavedSearch().load({ id: 'saved_search_id', member_id: 'member_id' })
```

#### Example: List

```ts
const saved_searchs = await client.SavedSearch().list({ member_id: "example" })
```

#### Example: Create

```ts
const saved_search = await client.SavedSearch().create({
  member_id: 'example_member_id',
  name: 'example_name',
  pos: 'example_pos',
  query: 'example_query',
})
```


### Search

Create an instance: `const search = client.Search()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Example: List

```ts
const searchs = await client.Search().list({ query: "example" })
```


### ShowSidebar

Create an instance: `const show_sidebar = client.ShowSidebar()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarActivity

Create an instance: `const show_sidebar_activity = client.ShowSidebarActivity()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarBoardAction

Create an instance: `const show_sidebar_board_action = client.ShowSidebarBoardAction()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### ShowSidebarMember

Create an instance: `const show_sidebar_member = client.ShowSidebarMember()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |


### Sticker

Create an instance: `const sticker = client.Sticker()`

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

```ts
const sticker = await client.Sticker().load({ id: 'sticker_id', card_id: 'card_id' })
```


### Tag

Create an instance: `const tag = client.Tag()`

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

```ts
const tags = await client.Tag().list({ organization_id: "example" })
```


### Token

Create an instance: `const token = client.Token()`

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
| `permissions` | `Array` |  |

#### Example: Load

```ts
const token = await client.Token().load({ id: 'token_id' })
```

#### Example: List

```ts
const tokens = await client.Token().list({ member_id: "example" })
```


### TransferrableOrganization

Create an instance: `const transferrable_organization = client.TransferrableOrganization()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `newBillableMembers` | `Array` |  |
| `restrictedMembers` | `Array` |  |
| `transferrable` | `boolean` |  |

#### Example: Load

```ts
const transferrable_organization = await client.TransferrableOrganization().load({ id: 'transferrable_organization_id', enterpris_id: 'enterpris_id' })
```


### TrelloList

Create an instance: `const trello_list = client.TrelloList()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `Object` |  |
| `closed` | `boolean` |  |
| `id` | `string` |  |
| `idBoard` | `string` |  |
| `limits` | `Object` |  |
| `name` | `string` | The name of the list |
| `pos` | `number` |  |
| `softLimit` | `string` |  |
| `subscribed` | `boolean` |  |

#### Example: Load

```ts
const trello_list = await client.TrelloList().load({ action_id: 'action_id' })
```

#### Example: List

```ts
const trello_lists = await client.TrelloList().list({ board_id: "example" })
```

#### Example: Create

```ts
const trello_list = await client.TrelloList().create({
  board_id: 'example_board_id',
  name: 'example_name',
})
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

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

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```

#### Example: List

```ts
const webhooks = await client.Webhook().list({ token_id: "example" })
```

#### Example: Create

```ts
const webhook = await client.Webhook().create({
  callback_url: 'example_callback_url',
  id_model: 'example_id_model',
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

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
trello/
├── src/
│   ├── TrelloSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { TrelloSDK } = require('@voxgig-sdk/trello-js')
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const boardstar = client.BoardStar()
await boardstar.list()

// boardstar.data() now returns the boardstar data from the last `list`
// boardstar.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
