"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('TrelloListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.TrelloList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'trello_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "r": false, "t": "`$OBJECT`", "key$": "attachments", "index$": 0 }, "closed": { "a": true, "h": "Closed", "n": "closed", "r": false, "t": "`$BOOLEAN`", "key$": "closed", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 2 }, "idBoard": { "a": true, "h": "Id Board", "n": "idBoard", "r": false, "t": "`$STRING`", "key$": "idBoard", "index$": 3 }, "limits": { "a": true, "h": "Limits", "n": "limits", "r": false, "t": "`$OBJECT`", "key$": "limits", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "The name of the list", "t": "`$STRING`", "key$": "name", "index$": 5 }, "pos": { "a": true, "h": "Pos", "n": "pos", "r": false, "t": "`$NUMBER`", "key$": "pos", "index$": 6 }, "softLimit": { "a": true, "h": "Soft Limit", "n": "softLimit", "r": false, "t": "`$STRING`", "key$": "softLimit", "index$": 7 }, "subscribed": { "a": true, "h": "Subscribed", "n": "subscribed", "r": false, "t": "`$BOOLEAN`", "key$": "subscribed", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "trello_list", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /boards/{id}/lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "name", "or": "name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "top", "k": "query", "n": "pos", "or": "pos", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/boards/{id}/lists", "q": { "exist": ["board_id", "name", "pos"] }, "r": { "param": { "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "lists" }], "t": { "req": "`reqdata`", "res": "`body.limits`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /boards/{id}/lists", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "card", "or": "card", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "all", "k": "query", "n": "card_field", "or": "card_field", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "all", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/boards/{id}/lists", "q": { "exist": ["board_id", "card", "card_field", "field", "filter"] }, "r": { "param": { "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "lists" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /actions/{id}/list", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "action_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "all", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/actions/{id}/list", "q": { "exist": ["action_id", "field"] }, "r": { "param": { "id": "action_id" } }, "s": [{ "lit": "actions" }, { "var": "action_id" }, { "lit": "list" }], "t": { "req": "`reqdata`", "res": "`body.limits`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.action"], ["$.main.kit.entity.board"]] }, "key$": "trello_list", "name__orig": "trello_list", "Name": "TrelloList", "name_": "trello_list", "name-": "trello-list", "NAME": "TRELLO_LIST", "index$": 65 }, { "active": true, "entity": "trello_list", "key$": "BasicTrelloListFlow", "kind": "basic", "name": "BasicTrelloListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "trello_list_ref01" }, "m": { "board_id": "board01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "board_id": "board01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "trello_list_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "trello_list_ref01", "srcdatavar": "trello_list_ref01_data", "suffix": "_dt0" }, "m": { "id": "trello_list01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-trello_list_ref01" } }], "index$": 2 }] }, 'TrelloList', { "POST /boards/{id}/lists": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "name", "in": "query", "description": "The name of the list to be created. 1 to 16384 characters long.", "required": true, "schema": { "type": "string" }, "index$": 1 }, { "name": "pos", "in": "query", "description": "Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.", "required": false, "schema": { "type": "string", "default": "top" }, "index$": 2 }] }, "GET /boards/{id}/lists": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "cards", "in": "query", "description": "Filter to apply to Cards.", "required": false, "schema": { "type": "string", "enum": ["all", "closed", "none", "open"], "x-ref": "#/components/schemas/ViewFilter" }, "index$": 1 }, { "name": "card_fields", "in": "query", "description": "`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)", "required": false, "schema": { "type": "string", "default": "all" }, "index$": 2 }, { "name": "filter", "in": "query", "description": "Filter to apply to Lists", "required": false, "schema": { "type": "string", "enum": ["all", "closed", "none", "open"], "x-ref": "#/components/schemas/ViewFilter" }, "index$": 3 }, { "name": "fields", "in": "query", "description": "`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)", "required": false, "schema": { "type": "string", "default": "all" }, "index$": 4 }] }, "GET /actions/{id}/list": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the action", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "fields", "in": "query", "description": "`all` or a comma-separated list of list fields", "required": false, "schema": { "type": "string", "enum": ["id"], "default": "all", "x-ref": "#/components/schemas/ListFields" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const trello_list_ref01_ent = client.TrelloList();
        let trello_list_ref01_data = setup.data.new.trello_list['trello_list_ref01'];
        trello_list_ref01_data['board_id'] = setup.idmap['board01'];
        trello_list_ref01_data = (await trello_list_ref01_ent.create(trello_list_ref01_data)).data();
        (0, node_assert_1.default)(null != trello_list_ref01_data.id);
        // LIST
        const trello_list_ref01_match = {};
        trello_list_ref01_match['board_id'] = setup.idmap['board01'];
        const trello_list_ref01_list = (await trello_list_ref01_ent.list(trello_list_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(trello_list_ref01_list, { id: trello_list_ref01_data.id })));
        // LOAD
        const trello_list_ref01_match_dt0 = {};
        trello_list_ref01_match_dt0.id = trello_list_ref01_data.id;
        const trello_list_ref01_data_dt0 = (await trello_list_ref01_ent.load(trello_list_ref01_match_dt0)).data();
        (0, node_assert_1.default)(trello_list_ref01_data_dt0.id === trello_list_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/trello_list/TrelloListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['trello_list01', 'trello_list02', 'trello_list03', 'action01', 'action02', 'action03', 'board01', 'board02', 'board03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_TRELLO_LIST_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_TRELLO_LIST_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_TRELLO_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.TrelloSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.TRELLO_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.TRELLO_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=TrelloListEntity.test.js.map