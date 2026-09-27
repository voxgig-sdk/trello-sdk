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
(0, node_test_1.describe)('ExportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Export();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'export.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attempts": { "a": true, "h": "Attempts", "n": "attempts", "r": false, "t": "`$NUMBER`", "key$": "attempts", "index$": 0 }, "exportUrl": { "a": true, "h": "Export Url", "n": "exportUrl", "r": false, "t": "`$STRING`", "key$": "exportUrl", "index$": 1 }, "finished": { "a": true, "h": "Finished", "n": "finished", "r": false, "t": "`$BOOLEAN`", "key$": "finished", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "size": { "a": true, "h": "Size", "n": "size", "r": false, "t": "`$STRING`", "key$": "size", "index$": 4 }, "stage": { "a": true, "h": "Stage", "n": "stage", "r": false, "t": "`$STRING`", "key$": "stage", "index$": 5 }, "startedAt": { "a": true, "fo": "date-time", "h": "Started At", "n": "startedAt", "r": false, "t": "`$STRING`", "key$": "startedAt", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$OBJECT`", "key$": "status", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "export", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /boards/{id}/exports", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": false, "k": "query", "n": "attachment", "or": "attachment", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": 0, "k": "query", "n": "attachment_age", "or": "attachment_age", "r": false, "t": "`$NUMBER`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/boards/{id}/exports", "q": { "exist": ["attachment", "attachment_age", "board_id"] }, "r": { "param": { "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }], "t": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /organizations/{id}/exports", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "organization_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": true, "k": "query", "n": "attachment", "or": "attachment", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/organizations/{id}/exports", "q": { "exist": ["attachment", "organization_id"] }, "r": { "param": { "id": "organization_id" } }, "s": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "exports" }], "t": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /organizations/{id}/exports", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "organization_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/organizations/{id}/exports", "q": { "exist": ["organization_id"] }, "r": { "param": { "id": "organization_id" } }, "s": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "exports" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /boards/{id}/exports/{idExport}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_export", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/boards/{id}/exports/{idExport}", "q": { "exist": ["board_id", "id"] }, "r": { "param": { "id": "board_id", "idExport": "id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /boards/{id}/exports/mostRecent", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/boards/{id}/exports/mostRecent", "q": { "$action": "most_recent", "exist": ["board_id"] }, "r": { "param": { "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "lit": "mostRecent" }], "t": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /boards/{id}/exports/{idExport}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_export", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/boards/{id}/exports/{idExport}", "q": { "exist": ["board_id", "id"] }, "r": { "param": { "id": "board_id", "idExport": "id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.board"], ["$.main.kit.entity.organization"]] }, "key$": "export", "name__orig": "export", "Name": "Export", "name_": "export", "name-": "export", "NAME": "EXPORT", "index$": 29 }, { "active": true, "entity": "export", "key$": "BasicExportFlow", "kind": "basic", "name": "BasicExportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "export_ref01" }, "m": { "board_id": "board01", "organization_id": "organization01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "organization_id": "organization01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "export_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "export_ref01", "srcdatavar": "export_ref01_data", "suffix": "_dt0" }, "m": { "id": "export01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-export_ref01" } }], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "export_ref01", "suffix": "_rm0" }, "m": { "board_id": "board01", "id": "export01" }, "o": "remove", "s": [], "v": [], "index$": 3 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": { "organization_id": "organization01" }, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "export_ref01" } }], "index$": 4 }] }, 'Export', { "POST /boards/{id}/exports": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "attachments", "in": "query", "description": "Whether the export should include attachments", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 1 }, { "name": "attachment_age", "in": "query", "description": "Only include attachments created within this many days. `0` means no limit.", "required": false, "schema": { "type": "number", "minimum": 0, "maximum": 3650, "default": 0 }, "index$": 2 }] }, "POST /organizations/{id}/exports": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or name of the Workspace", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "attachments", "in": "query", "description": "Whether the CSV should include attachments or not.", "required": false, "schema": { "type": "boolean", "default": true }, "index$": 1 }] }, "GET /organizations/{id}/exports": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or name of the Workspace", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }] }, "GET /boards/{id}/exports/{idExport}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idExport", "in": "path", "description": "The ID of the export", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "GET /boards/{id}/exports/mostRecent": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }] }, "DELETE /boards/{id}/exports/{idExport}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idExport", "in": "path", "description": "The ID of the export", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const export_ref01_ent = client.Export();
        let export_ref01_data = setup.data.new.export['export_ref01'];
        export_ref01_data['board_id'] = setup.idmap['board01'];
        export_ref01_data['organization_id'] = setup.idmap['organization01'];
        export_ref01_data = (await export_ref01_ent.create(export_ref01_data)).data();
        (0, node_assert_1.default)(null != export_ref01_data.id);
        // LIST
        const export_ref01_match = {};
        export_ref01_match['organization_id'] = setup.idmap['organization01'];
        const export_ref01_list = (await export_ref01_ent.list(export_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(export_ref01_list, { id: export_ref01_data.id })));
        // LOAD
        const export_ref01_match_dt0 = {};
        export_ref01_match_dt0.id = export_ref01_data.id;
        const export_ref01_data_dt0 = (await export_ref01_ent.load(export_ref01_match_dt0)).data();
        (0, node_assert_1.default)(export_ref01_data_dt0.id === export_ref01_data.id);
        // REMOVE
        const export_ref01_match_rm0 = { id: export_ref01_data.id };
        await export_ref01_ent.remove(export_ref01_match_rm0);
        // LIST
        const export_ref01_match_rt0 = {};
        export_ref01_match_rt0['organization_id'] = setup.idmap['organization01'];
        const export_ref01_list_rt0 = (await export_ref01_ent.list(export_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(export_ref01_list_rt0, { id: export_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/export/ExportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['export01', 'export02', 'export03', 'board01', 'board02', 'board03', 'organization01', 'organization02', 'organization03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_EXPORT_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_EXPORT_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_EXPORT_ENTID'];
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
//# sourceMappingURL=ExportEntity.test.js.map