# trello-mcp

[MCP](https://modelcontextprotocol.io) server exposing the Trello SDK as
two agent tools — `trello_list` and `trello_load` — built on the
[official Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk) and the
sibling Go SDK at `../go`. Runs over **stdio** (default, for spawnable installs)
or **streamable HTTP** (one shared server for several agents).

## Examples

```sh
# 1. Build a native binary (-> dist/<os>-<arch>/trello-mcp)
make build

# 2. Provide credentials via the environment
export TRELLO_APIKEY=sk_live_xxx

# 3a. Install into Claude Code over stdio (most common)
claude mcp add --scope user trello \
  -- /absolute/path/to/trello-mcp -transport stdio

# 3b. …or run a shared HTTP server instead
./trello-mcp -transport http -addr :8080
```

Tool-call arguments (what an agent sends):

```jsonc
// trello_list: first page of records
{ "entity": "action" }
{ "entity": "action", "query": { } }

// trello_load: one record by id
{ "entity": "action", "query": { "id": 1 } }
```

> The rest of this guide follows the [Diátaxis](https://diataxis.fr) framework:
> a hands-on **Tutorial**, task-focused **How-to guides**, a factual
> **Reference**, and background **Explanation**.

## Tutorial: install and call a tool

1. **Build** the server from this `go-mcp/` directory:

   ```sh
   make build          # -> dist/<os>-<arch>/trello-mcp
   ```

2. **Set your API key:**

   ```sh
   export TRELLO_APIKEY=sk_live_xxx
   ```

3. **Install it into Claude Code** (stdio transport):

   ```sh
   claude mcp add --scope user trello \
     -- "$PWD"/dist/*/trello-mcp -transport stdio
   ```

4. **Restart Claude Code.** The `trello_list` and `trello_load` tools now appear
   in new sessions. Ask the agent to *"list action using trello"*
   and it calls `trello_list` with `{"entity":"action"}`.

## How-to guides

### Authenticate and choose an environment

Configuration is read from the environment — nothing is written to disk:

```sh
export TRELLO_APIKEY=sk_live_xxx            # API key
export TRELLO_BASE=https://api.example.com  # optional: override the API base URL
```

Set these in the shell that launches the server (or in the `claude mcp add`
environment) so every tool call is authenticated.

### Run as a shared HTTP server

```sh
./trello-mcp -transport http -addr :8080
```

Streamable HTTP lets several agents share one running process; stdio (the
default) spawns a fresh process per client.

### Call the `trello_list` tool

Args: `entity` (required), `query` (optional filter map). Returns the first
page of records as JSON:

```jsonc
{ "entity": "action" }
```

### Call the `trello_load` tool

Args: `entity` (required), `query` = `{"id":N}` (required). Returns the single
record as JSON:

```jsonc
{ "entity": "action", "query": { "id": 1 } }
```

### Cross-compile release binaries

```sh
make build       # native binary for this machine
make build-all   # linux/darwin/windows x amd64/arm64, under dist/<os>-<arch>/
```

## Reference

### Tools

| Tool | Args | Returns |
|------|------|---------|
| `trello_list` | `entity` (required), `query` (optional map) | First page of records as JSON |
| `trello_load` | `entity` (required), `query` = `{id:N}` | Single record as JSON |

On error, a tool returns an MCP error result (`isError: true`) whose text is the
failure message (e.g. unknown entity, or an API error).

### `Args` schema

Both tools take the same argument object:

| Field | Type | Notes |
|-------|------|-------|
| `entity` | string | One of the 70 supported entities (see below). |
| `query` | object | Optional match map. `{"id":N}` for load; omit or `{}` for list. |

JSON schemas are emitted by the SDK from the `Args` struct's `json` /
`jsonschema` tags — no schema is hand-written.

### Transports & flags

| Flag | Default | Purpose |
|------|---------|---------|
| `-transport` | `stdio` | `stdio` (spawnable) or `http` (streamable HTTP). |
| `-addr` | `:8080` | Listen address for the `http` transport. |

### Environment variables

| Variable | Purpose |
|----------|---------|
| `TRELLO_APIKEY` | API key sent with every request. |
| `TRELLO_BASE` | Optional override of the API base URL. |

### Entities

The 70 entities valid as the `entity` argument:

action | action_reactions_summary | admin | application | application_compliance | associated_domain | attachment | batch | board | board_background | board_plugin | board_star | bulk | card | card_check_item_state | card_list | check_item | checklist | claimable_organization | custom_board_background | custom_emoji | custom_field | custom_field_item | custom_sticker | email_position | emoji | enterpris | enterpris_signup_url | enterprise_admin | enterprise_audit_log | export | export_download | generate | id_email_list | id_label | id_member | label | list | member | member_privacy | members_voted | membership | most_recent | new_billable_guest | notification | notification_channel_setting | notification_list | notification_member_creator | notifications_channel_setting | option | org_invite_restrict | organization | pending_organization | plugin | plugin_data | plugin_listing | reaction | read | saved_search | search | show_sidebar | show_sidebar_activity | show_sidebar_board_action | show_sidebar_member | sticker | tag | token | transferrable_organization | trello_list | webhook

### Smoke test via HTTP (raw JSON-RPC)

```sh
./trello-mcp -transport http -addr :18080 &

# initialize, grab the session id
curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -D headers \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-06-18","capabilities":{},"clientInfo":{"name":"smoke","version":"0"}}}'

SESSION=$(awk '/Mcp-Session-Id/ {print $2}' headers | tr -d '\r')

curl -sN -X POST http://localhost:18080 \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json, text/event-stream' \
  -H "Mcp-Session-Id: $SESSION" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"trello_load","arguments":{"entity":"action","query":{"id":1}}}}'
```

## Explanation

### How tools map to the SDK

`main.go` builds the SDK client (configured from the environment) and registers
two tools. Each dispatches on the `entity` argument to the matching entity in
the sibling Go SDK at `../go`, calls `List` or `Load`, unwraps the `Entity`
wrappers to plain data, and returns it as pretty-printed JSON.

### Why two transports

**stdio** is the standard for agent hosts that spawn a server per client
(Claude Code's `claude mcp add`). **streamable HTTP** keeps one process running
that many agents can share — handy for a long-lived deployment.

### Schema generation

The input schema is derived from the `Args` Go struct's `json` / `jsonschema`
tags at registration time, so the advertised tool schema can never drift from
the code that consumes it.

## Generated by

sdkgen `go-mcp` target. See the target source under `.sdk/src/cmp/go-mcp/` in
this repo, or upstream at
`github.com/voxgig/sdkgen/project/.sdk/src/cmp/go-mcp/`.
