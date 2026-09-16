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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "attempts", "req": false, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "exportUrl", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "finished", "req": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "size", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "stage", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "date-time", "name": "startedAt", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "status", "req": false, "type": "`$OBJECT`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "export", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": false, "kind": "query", "name": "attachment", "orig": "attachment", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": 0, "kind": "query", "name": "attachment_age", "orig": "attachment_age", "reqd": false, "type": "`$NUMBER`", "index$": 1 }] }, "contract": { "id": "POST /boards/{id}/exports", "json": "{\"operationId\":\"post-boards-id-exports\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether the export should include attachments\",\"in\":\"query\",\"name\":\"attachments\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Only include attachments created within this many days. `0` means no limit.\",\"in\":\"query\",\"name\":\"attachment_age\",\"required\":false,\"schema\":{\"default\":0,\"maximum\":3650,\"minimum\":0,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"exportUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"size\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"startedAt\":{\"example\":\"2019-11-15T16:55:02.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"properties\":{\"attempts\":{\"example\":0,\"type\":\"number\"},\"finished\":{\"example\":false,\"type\":\"boolean\"},\"stage\":{\"example\":\"Export_queued\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/boards/{id}/exports", "rename": { "param": { "id": "board_id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }], "select": { "exist": ["attachment", "attachment_age", "board_id"] }, "transform": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "organization_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": true, "kind": "query", "name": "attachment", "orig": "attachment", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }] }, "contract": { "id": "POST /organizations/{id}/exports", "json": "{\"operationId\":\"post-organizations-id-exports\",\"parameters\":[{\"description\":\"The ID or name of the Workspace\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether the CSV should include attachments or not.\",\"in\":\"query\",\"name\":\"attachments\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"exportUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"size\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"startedAt\":{\"example\":\"2019-11-15T16:55:02.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"properties\":{\"attempts\":{\"example\":0,\"type\":\"number\"},\"finished\":{\"example\":false,\"type\":\"boolean\"},\"stage\":{\"example\":\"Export_queued\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/organizations/{id}/exports", "rename": { "param": { "id": "organization_id" } }, "segments": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "exports" }], "select": { "exist": ["attachment", "organization_id"] }, "transform": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "organization_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /organizations/{id}/exports", "json": "{\"operationId\":\"get-organizations-id-exports\",\"parameters\":[{\"description\":\"The ID or name of the Workspace\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"exportUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"size\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"startedAt\":{\"example\":\"2019-11-15T16:55:02.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"properties\":{\"attempts\":{\"example\":0,\"type\":\"number\"},\"finished\":{\"example\":false,\"type\":\"boolean\"},\"stage\":{\"example\":\"Export_queued\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/organizations/{id}/exports", "rename": { "param": { "id": "organization_id" } }, "segments": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "exports" }], "select": { "exist": ["organization_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_export", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /boards/{id}/exports/{idExport}", "json": "{\"operationId\":\"get-boards-id-exports-idexport\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the export\",\"in\":\"path\",\"name\":\"idExport\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"exportUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"size\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"startedAt\":{\"example\":\"2019-11-15T16:55:02.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"properties\":{\"attempts\":{\"example\":0,\"type\":\"number\"},\"finished\":{\"example\":false,\"type\":\"boolean\"},\"stage\":{\"example\":\"Export_queued\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/boards/{id}/exports/{idExport}", "rename": { "param": { "id": "board_id", "idExport": "id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "var": "id" }], "select": { "exist": ["board_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`" }] }, "contract": { "id": "GET /boards/{id}/exports/mostRecent", "json": "{\"operationId\":\"get-boards-id-exports-mostrecent\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"exportUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"size\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"startedAt\":{\"example\":\"2019-11-15T16:55:02.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"properties\":{\"attempts\":{\"example\":0,\"type\":\"number\"},\"finished\":{\"example\":false,\"type\":\"boolean\"},\"stage\":{\"example\":\"Export_queued\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"404\":{\"description\":\"Board has no export, or is not in a Workspace\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/boards/{id}/exports/mostRecent", "rename": { "param": { "id": "board_id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "lit": "mostRecent" }], "select": { "$action": "most_recent", "exist": ["board_id"] }, "transform": { "req": "`reqdata`", "res": "`body.status`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_export", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /boards/{id}/exports/{idExport}", "json": "{\"operationId\":\"delete-boards-id-exports-idexport\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the export\",\"in\":\"path\",\"name\":\"idExport\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/boards/{id}/exports/{idExport}", "rename": { "param": { "id": "board_id", "idExport": "id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "exports" }, { "var": "id" }], "select": { "exist": ["board_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["board"], ["organization"], ["board", "export"]] }, "key$": "export", "name__orig": "export", "Name": "Export", "name_": "export", "name-": "export", "NAME": "EXPORT", "index$": 30 }, { "active": true, "entity": "export", "key$": "BasicExportFlow", "kind": "basic", "name": "BasicExportFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "export_ref01" }, "match": { "board_id": "board01", "organization_id": "organization01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "organization_id": "organization01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "export_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "export_ref01", "srcdatavar": "export_ref01_data", "suffix": "_dt0" }, "match": { "id": "export01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-export_ref01" } }], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "export_ref01", "suffix": "_rm0" }, "match": { "board_id": "board01", "id": "export01" }, "op": "remove", "spec": [], "valid": [], "index$": 3 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "organization_id": "organization01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "export_ref01" } }], "index$": 4 }] }, 'Export');
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
    let idmap = transform(['export01', 'export02', 'export03', 'board01', 'board02', 'board03', 'organization01', 'organization02', 'organization03', 'board01', 'board02', 'board03', 'export01', 'export02', 'export03'], {
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