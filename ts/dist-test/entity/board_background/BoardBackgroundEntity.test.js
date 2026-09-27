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
(0, node_test_1.describe)('BoardBackgroundEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.BoardBackground();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'board_background.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "board_background", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /members/{id}/customBoardBackgrounds", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "file", "or": "file", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/members/{id}/customBoardBackgrounds", "q": { "exist": ["file", "member_id"] }, "r": { "param": { "id": "member_id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customBoardBackgrounds" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /members/{id}/boardBackgrounds", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "all", "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/members/{id}/boardBackgrounds", "q": { "exist": ["filter", "member_id"] }, "r": { "param": { "id": "member_id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "boardBackgrounds" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /members/{id}/customBoardBackgrounds", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/members/{id}/customBoardBackgrounds", "q": { "exist": ["member_id"] }, "r": { "param": { "id": "member_id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customBoardBackgrounds" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /members/{id}/boardBackgrounds/{idBackground}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "all", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/members/{id}/boardBackgrounds/{idBackground}", "q": { "exist": ["field", "id", "member_id"] }, "r": { "param": { "id": "member_id", "idBackground": "id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "boardBackgrounds" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /members/{id}/customBoardBackgrounds/{idBackground}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id_background", "or": "id_background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/members/{id}/customBoardBackgrounds/{idBackground}", "q": { "exist": ["id_background", "member_id"] }, "r": { "param": { "id": "member_id", "idBackground": "id_background" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customBoardBackgrounds" }, { "var": "id_background" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /members/{id}/boardBackgrounds/{idBackground}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/members/{id}/boardBackgrounds/{idBackground}", "q": { "exist": ["id", "member_id"] }, "r": { "param": { "id": "member_id", "idBackground": "id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "boardBackgrounds" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /members/{id}/boardBackgrounds/{idBackground}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "brightness", "or": "brightness", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "tile", "or": "tile", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/members/{id}/boardBackgrounds/{idBackground}", "q": { "exist": ["brightness", "id", "member_id", "tile"] }, "r": { "param": { "id": "member_id", "idBackground": "id" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "boardBackgrounds" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /members/{id}/customBoardBackgrounds/{idBackground}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id_background", "or": "id_background", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "member_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "brightness", "or": "brightness", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "tile", "or": "tile", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/members/{id}/customBoardBackgrounds/{idBackground}", "q": { "exist": ["brightness", "id_background", "member_id", "tile"] }, "r": { "param": { "id": "member_id", "idBackground": "id_background" } }, "s": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customBoardBackgrounds" }, { "var": "id_background" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.member"], ["$.main.kit.entity.member", "$.main.kit.entity.custom_board_background"]] }, "key$": "board_background", "name__orig": "board_background", "Name": "BoardBackground", "name_": "board_background", "name-": "board-background", "NAME": "BOARD_BACKGROUND", "index$": 8 }, { "active": true, "entity": "board_background", "key$": "BasicBoardBackgroundFlow", "kind": "basic", "name": "BasicBoardBackgroundFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "board_background_ref01" }, "m": { "member_id": "member01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "member_id": "member01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "board_background_ref01" } }], "index$": 1 }, { "a": true, "d": { "member_id": "member01" }, "i": { "ref": "board_background_ref01", "srcdatavar": "board_background_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-board_background_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "board_background_ref01", "srcdatavar": "board_background_ref01_data", "suffix": "_dt0" }, "m": { "id": "board_background01", "member_id": "member01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-board_background_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "board_background_ref01", "suffix": "_rm0" }, "m": { "id": "board_background01", "member_id": "member01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "member_id": "member01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "board_background_ref01" } }], "index$": 5 }] }, 'BoardBackground', { "POST /members/{id}/customBoardBackgrounds": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "file", "in": "query", "description": "", "required": true, "schema": { "type": "string", "format": "binary" }, "index$": 1 }] }, "GET /members/{id}/boardBackgrounds": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "filter", "in": "query", "description": "One of: `all`, `custom`, `default`, `none`, `premium`", "required": false, "schema": { "enum": ["all", "custom", "default", "none", "premium"], "type": "string", "default": "all" }, "index$": 1 }] }, "GET /members/{id}/customBoardBackgrounds": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }] }, "GET /members/{id}/boardBackgrounds/{idBackground}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idBackground", "in": "path", "description": "The ID of the board background", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "fields", "in": "query", "description": "`all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`", "required": false, "schema": { "type": "string", "default": "all", "enum": ["all", "brightness", "fullSizeUrl", "scaled", "tile"] }, "index$": 2 }] }, "GET /members/{id}/customBoardBackgrounds/{idBackground}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "oneOf": [{ "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, { "type": "string" }] }, "index$": 0 }, { "name": "idBackground", "in": "path", "description": "The ID of the custom background", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "DELETE /members/{id}/boardBackgrounds/{idBackground}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idBackground", "in": "path", "description": "The ID of the board background", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "PUT /members/{id}/boardBackgrounds/{idBackground}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idBackground", "in": "path", "description": "The ID of the board background", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "brightness", "in": "query", "description": "One of: `dark`, `light`, `unknown`", "required": false, "schema": { "enum": ["dark", "light", "unknown"], "type": "string" }, "index$": 2 }, { "name": "tile", "in": "query", "description": "Whether the background should be tiled", "required": false, "schema": { "type": "boolean" }, "index$": 3 }] }, "PUT /members/{id}/customBoardBackgrounds/{idBackground}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or username of the member", "required": true, "schema": { "oneOf": [{ "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, { "type": "string" }] }, "index$": 0 }, { "name": "idBackground", "in": "path", "description": "The ID of the custom background", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "brightness", "in": "query", "description": "One of: `dark`, `light`, `unknown`", "required": false, "schema": { "enum": ["dark", "light", "unknown"], "type": "string" }, "index$": 2 }, { "name": "tile", "in": "query", "description": "Whether to tile the background", "required": false, "schema": { "type": "boolean" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const board_background_ref01_ent = client.BoardBackground();
        let board_background_ref01_data = setup.data.new.board_background['board_background_ref01'];
        board_background_ref01_data['member_id'] = setup.idmap['member01'];
        board_background_ref01_data = (await board_background_ref01_ent.create(board_background_ref01_data)).data();
        (0, node_assert_1.default)(null != board_background_ref01_data.id);
        // LIST
        const board_background_ref01_match = {};
        board_background_ref01_match['member_id'] = setup.idmap['member01'];
        const board_background_ref01_list = (await board_background_ref01_ent.list(board_background_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(board_background_ref01_list, { id: board_background_ref01_data.id })));
        // UPDATE
        const board_background_ref01_data_up0 = {};
        board_background_ref01_data_up0.id = board_background_ref01_data.id;
        board_background_ref01_data_up0['member_id'] = setup.idmap['member_id'];
        const board_background_ref01_resdata_up0 = (await board_background_ref01_ent.update(board_background_ref01_data_up0)).data();
        (0, node_assert_1.default)(board_background_ref01_resdata_up0.id === board_background_ref01_data_up0.id);
        // LOAD
        const board_background_ref01_match_dt0 = {};
        board_background_ref01_match_dt0.id = board_background_ref01_data.id;
        const board_background_ref01_data_dt0 = (await board_background_ref01_ent.load(board_background_ref01_match_dt0)).data();
        (0, node_assert_1.default)(board_background_ref01_data_dt0.id === board_background_ref01_data.id);
        // REMOVE
        const board_background_ref01_match_rm0 = { id: board_background_ref01_data.id };
        await board_background_ref01_ent.remove(board_background_ref01_match_rm0);
        // LIST
        const board_background_ref01_match_rt0 = {};
        board_background_ref01_match_rt0['member_id'] = setup.idmap['member01'];
        const board_background_ref01_list_rt0 = (await board_background_ref01_ent.list(board_background_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(board_background_ref01_list_rt0, { id: board_background_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/board_background/BoardBackgroundTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['board_background01', 'board_background02', 'board_background03', 'member01', 'member02', 'member03', 'custom_board_background01', 'custom_board_background02', 'custom_board_background03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_BOARD_BACKGROUND_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_BOARD_BACKGROUND_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_BOARD_BACKGROUND_ENTID'];
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
//# sourceMappingURL=BoardBackgroundEntity.test.js.map