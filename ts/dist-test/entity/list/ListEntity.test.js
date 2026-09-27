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
(0, node_test_1.describe)('ListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.List();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "list", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /lists", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_board", "or": "id_board", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_list_source", "or": "id_list_source", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "pos", "or": "pos", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "POST", "o": "/lists", "q": { "exist": ["id_board", "id_list_source", "name", "pos"] }, "r": {}, "s": [{ "lit": "lists" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /lists/{id}/moveAllCards", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_board", "or": "id_board", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_list", "or": "id_list", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/lists/{id}/moveAllCards", "q": { "$action": "move_all_card", "exist": ["id", "id_board", "id_list"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }, { "lit": "moveAllCards" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /lists/{id}/archiveAllCards", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/lists/{id}/archiveAllCards", "q": { "$action": "archive_all_card", "exist": ["id"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }, { "lit": "archiveAllCards" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /boards/{id}/lists/{filter}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "filter", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/boards/{id}/lists/{filter}", "q": { "exist": ["board_id", "id"] }, "r": { "param": { "filter": "id", "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /lists/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "name,closed,idBoard,pos", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/lists/{id}", "q": { "exist": ["field", "id"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /lists/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "closed", "or": "closed", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_board", "or": "id_board", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "pos", "or": "pos", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "subscribed", "or": "subscribed", "r": false, "t": "`$BOOLEAN`", "index$": 4 }] }, "k": "http", "m": "PUT", "o": "/lists/{id}", "q": { "exist": ["closed", "id", "id_board", "name", "pos", "subscribed"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /lists/{id}/{field}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "field", "or": "field", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "value", "or": "value", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/lists/{id}/{field}", "q": { "exist": ["field", "id", "value"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }, { "var": "field" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "PUT /lists/{id}/closed", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "value", "or": "value", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/lists/{id}/closed", "q": { "$action": "closed", "exist": ["id", "value"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }, { "lit": "closed" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "PUT /lists/{id}/idBoard", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "value", "or": "value", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/lists/{id}/idBoard", "q": { "$action": "id_board", "exist": ["id", "value"] }, "r": {}, "s": [{ "lit": "lists" }, { "var": "id" }, { "lit": "idBoard" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.board"]] }, "key$": "list", "name__orig": "list", "Name": "List", "name_": "list", "name-": "list", "NAME": "LIST", "index$": 36 }, { "active": true, "entity": "list", "key$": "BasicListFlow", "kind": "basic", "name": "BasicListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "list_ref01" }, "m": { "board_id": "board01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "list_ref01", "srcdatavar": "list_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-list_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "list_ref01", "srcdatavar": "list_ref01_data", "suffix": "_dt0" }, "m": { "id": "list01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-list_ref01" } }], "index$": 2 }] }, 'List', { "POST /lists": { "protocol": "http", "parameters": [{ "name": "name", "in": "query", "description": "Name for the list", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "idBoard", "in": "query", "description": "The long ID of the board the list should be created on", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "idListSource", "in": "query", "description": "ID of the List to copy into the new List", "required": false, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 2 }, { "name": "pos", "in": "query", "description": "Position of the list. `top`, `bottom`, or a positive floating point number", "required": false, "schema": { "oneOf": [{ "type": "number", "format": "float" }, { "type": "string", "enum": ["top", "bottom"] }] }, "index$": 3 }] }, "POST /lists/{id}/moveAllCards": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idBoard", "in": "query", "description": "The ID of the board the cards should be moved to", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "idList", "in": "query", "description": "The ID of the list that the cards should be moved to", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 2 }] }, "POST /lists/{id}/archiveAllCards": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }] }, "GET /boards/{id}/lists/{filter}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "filter", "in": "path", "description": "One of `all`, `closed`, `none`, `open`", "required": true, "schema": { "type": "string", "enum": ["all", "closed", "none", "open"], "x-ref": "#/components/schemas/ViewFilter" }, "index$": 1 }] }, "GET /lists/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "fields", "in": "query", "style": "form", "explode": false, "description": "`all` or a comma separated list of List field names.", "required": false, "schema": { "type": "string", "default": "name,closed,idBoard,pos" }, "index$": 1 }] }, "PUT /lists/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "name", "in": "query", "description": "New name for the list", "required": false, "schema": { "type": "string" }, "index$": 1 }, { "name": "closed", "in": "query", "description": "Whether the list should be closed (archived)", "required": false, "schema": { "type": "boolean" }, "index$": 2 }, { "name": "idBoard", "in": "query", "description": "ID of a board the list should be moved to", "required": false, "explode": false, "style": "form", "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 3 }, { "name": "pos", "in": "query", "description": "New position for the list: `top`, `bottom`, or a positive floating point number", "required": false, "schema": { "oneOf": [{ "type": "number", "format": "float" }, { "type": "string", "enum": ["top", "bottom"] }] }, "index$": 4 }, { "name": "subscribed", "in": "query", "description": "Whether the active member is subscribed to this list", "required": false, "schema": { "type": "boolean" }, "index$": 5 }] }, "PUT /lists/{id}/{field}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "field", "in": "path", "description": "The field on the List to be updated", "required": true, "schema": { "type": "string", "enum": ["name", "pos", "subscribed"] }, "index$": 1 }, { "name": "value", "in": "query", "description": "The new value for the field", "required": false, "schema": { "oneOf": [{ "type": "string", "description": "The new name for the List" }, { "type": "number", "format": "float", "description": "The new position for the List" }, { "type": "string", "enum": ["top", "bottom"], "description": "The new position for the List" }, { "type": "boolean" }] }, "index$": 2 }] }, "PUT /lists/{id}/closed": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "value", "in": "query", "description": "Set to true to close (archive) the list", "required": false, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "PUT /lists/{id}/idBoard": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the list", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "value", "in": "query", "description": "The ID of the board to move the list to", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const list_ref01_ent = client.List();
        let list_ref01_data = setup.data.new.list['list_ref01'];
        list_ref01_data['board_id'] = setup.idmap['board01'];
        list_ref01_data = (await list_ref01_ent.create(list_ref01_data)).data();
        (0, node_assert_1.default)(null != list_ref01_data.id);
        // UPDATE
        const list_ref01_data_up0 = {};
        list_ref01_data_up0.id = list_ref01_data.id;
        const list_ref01_resdata_up0 = (await list_ref01_ent.update(list_ref01_data_up0)).data();
        (0, node_assert_1.default)(list_ref01_resdata_up0.id === list_ref01_data_up0.id);
        // LOAD
        const list_ref01_match_dt0 = {};
        list_ref01_match_dt0.id = list_ref01_data.id;
        const list_ref01_data_dt0 = (await list_ref01_ent.load(list_ref01_match_dt0)).data();
        (0, node_assert_1.default)(list_ref01_data_dt0.id === list_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list/ListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list01', 'list02', 'list03', 'board01', 'board02', 'board03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_LIST_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_LIST_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_LIST_ENTID'];
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
//# sourceMappingURL=ListEntity.test.js.map