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

#### `Board(data=None)`

Create a new `BoardEntity` instance. Pass `None` for no initial data.

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

