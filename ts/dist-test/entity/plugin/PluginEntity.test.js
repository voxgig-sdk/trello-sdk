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
(0, node_test_1.describe)('PluginEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Plugin();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'plugin.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "plugin", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /boards/{id}/boardPlugins", "json": "{\"operationId\":\"get-boards-id-boardplugins\",\"parameters\":[{\"description\":\"The ID of the Board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/boards/{id}/boardPlugins", "rename": { "param": { "id": "board_id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "boardPlugins" }], "select": { "exist": ["board_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "enabled", "kind": "query", "name": "filter", "orig": "filter", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /boards/{id}/plugins", "json": "{\"operationId\":\"get-board-id-plugins\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `enabled` or `available`\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"enabled\",\"enum\":[\"enabled\",\"available\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/boards/{id}/plugins", "rename": { "param": { "id": "board_id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "plugins" }], "select": { "exist": ["board_id", "filter"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /plugins/{id}/", "json": "{\"operationId\":\"get-plugins-id\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/plugins/{id}/", "segments": [{ "lit": "plugins" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "PUT /plugins/{id}/", "json": "{\"operationId\":\"put-plugins-id\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/plugins/{id}/", "segments": [{ "lit": "plugins" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["board"]] }, "key$": "plugin", "name__orig": "plugin", "Name": "Plugin", "name_": "plugin", "name-": "plugin", "NAME": "PLUGIN", "index$": 53 }, { "active": true, "entity": "plugin", "key$": "BasicPluginFlow", "kind": "basic", "name": "BasicPluginFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "board_id": "board01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "plugin_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "plugin_ref01", "srcdatavar": "plugin_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-plugin_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "plugin_ref01", "srcdatavar": "plugin_ref01_data", "suffix": "_dt0" }, "match": { "id": "plugin01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-plugin_ref01" } }], "index$": 2 }] }, 'Plugin');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let plugin_ref01_data = Object.values(setup.data.existing.plugin)[0];
        // LIST
        const plugin_ref01_ent = client.Plugin();
        const plugin_ref01_match = {};
        plugin_ref01_match['board_id'] = setup.idmap['board01'];
        const plugin_ref01_list = (await plugin_ref01_ent.list(plugin_ref01_match)).map((e) => e.data());
        // UPDATE
        const plugin_ref01_data_up0 = {};
        plugin_ref01_data_up0.id = plugin_ref01_data.id;
        const plugin_ref01_resdata_up0 = (await plugin_ref01_ent.update(plugin_ref01_data_up0)).data();
        (0, node_assert_1.default)(plugin_ref01_resdata_up0.id === plugin_ref01_data_up0.id);
        // LOAD
        const plugin_ref01_match_dt0 = {};
        plugin_ref01_match_dt0.id = plugin_ref01_data.id;
        const plugin_ref01_data_dt0 = (await plugin_ref01_ent.load(plugin_ref01_match_dt0)).data();
        (0, node_assert_1.default)(plugin_ref01_data_dt0.id === plugin_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/plugin/PluginTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['plugin01', 'plugin02', 'plugin03', 'board01', 'board02', 'board03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_PLUGIN_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_PLUGIN_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_PLUGIN_ENTID'];
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
//# sourceMappingURL=PluginEntity.test.js.map