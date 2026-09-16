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
(0, node_test_1.describe)('CustomStickerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.CustomSticker();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'list', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'custom_sticker.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "scaled", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "format": "url", "name": "url", "req": false, "type": "`$STRING`", "index$": 2 }], "id": { "field": "id", "name": "id" }, "name": "custom_sticker", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "file", "orig": "file", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /members/{id}/customStickers", "json": "{\"operationId\":\"post-members-id-customstickers\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"file\",\"required\":true,\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"scaled\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/members/{id}/customStickers", "rename": { "param": { "id": "member_id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customStickers" }], "select": { "exist": ["file", "member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /members/{id}/customStickers", "json": "{\"operationId\":\"get-members-id-customstickers\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"scaled\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/members/{id}/customStickers", "rename": { "param": { "id": "member_id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customStickers" }], "select": { "exist": ["member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_sticker", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": "all", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /members/{id}/customStickers/{idSticker}", "json": "{\"operationId\":\"get-members-id-customstickers-idsticker\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the uploaded sticker\",\"in\":\"path\",\"name\":\"idSticker\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of `scaled`, `url`\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"scaled\",\"url\",\"all\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"scaled\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"url\":{\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/members/{id}/customStickers/{idSticker}", "rename": { "param": { "id": "member_id", "idSticker": "id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customStickers" }, { "var": "id" }], "select": { "exist": ["field", "id", "member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_sticker", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /members/{id}/customStickers/{idSticker}", "json": "{\"operationId\":\"delete-members-id-customstickers-idsticker\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the uploaded sticker\",\"in\":\"path\",\"name\":\"idSticker\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/members/{id}/customStickers/{idSticker}", "rename": { "param": { "id": "member_id", "idSticker": "id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "customStickers" }, { "var": "id" }], "select": { "exist": ["id", "member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["member"]] }, "key$": "custom_sticker", "name__orig": "custom_sticker", "Name": "CustomSticker", "name_": "custom_sticker", "name-": "custom-sticker", "NAME": "CUSTOM_STICKER", "index$": 23 }, { "active": true, "entity": "custom_sticker", "key$": "BasicCustomStickerFlow", "kind": "basic", "name": "BasicCustomStickerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "custom_sticker_ref01" }, "match": { "member_id": "member01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "member_id": "member01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "custom_sticker_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "custom_sticker_ref01", "srcdatavar": "custom_sticker_ref01_data", "suffix": "_dt0" }, "match": { "id": "custom_sticker01", "member_id": "member01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-custom_sticker_ref01" } }], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "custom_sticker_ref01", "suffix": "_rm0" }, "match": { "id": "custom_sticker01", "member_id": "member01" }, "op": "remove", "spec": [], "valid": [], "index$": 3 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "member_id": "member01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "custom_sticker_ref01" } }], "index$": 4 }] }, 'CustomSticker');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const custom_sticker_ref01_ent = client.CustomSticker();
        let custom_sticker_ref01_data = setup.data.new.custom_sticker['custom_sticker_ref01'];
        custom_sticker_ref01_data['member_id'] = setup.idmap['member01'];
        custom_sticker_ref01_data = (await custom_sticker_ref01_ent.create(custom_sticker_ref01_data)).data();
        (0, node_assert_1.default)(null != custom_sticker_ref01_data.id);
        // LIST
        const custom_sticker_ref01_match = {};
        custom_sticker_ref01_match['member_id'] = setup.idmap['member01'];
        const custom_sticker_ref01_list = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(custom_sticker_ref01_list, { id: custom_sticker_ref01_data.id })));
        // LOAD
        const custom_sticker_ref01_match_dt0 = {};
        custom_sticker_ref01_match_dt0.id = custom_sticker_ref01_data.id;
        const custom_sticker_ref01_data_dt0 = (await custom_sticker_ref01_ent.load(custom_sticker_ref01_match_dt0)).data();
        (0, node_assert_1.default)(custom_sticker_ref01_data_dt0.id === custom_sticker_ref01_data.id);
        // REMOVE
        const custom_sticker_ref01_match_rm0 = { id: custom_sticker_ref01_data.id };
        await custom_sticker_ref01_ent.remove(custom_sticker_ref01_match_rm0);
        // LIST
        const custom_sticker_ref01_match_rt0 = {};
        custom_sticker_ref01_match_rt0['member_id'] = setup.idmap['member01'];
        const custom_sticker_ref01_list_rt0 = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(custom_sticker_ref01_list_rt0, { id: custom_sticker_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/custom_sticker/CustomStickerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['custom_sticker01', 'custom_sticker02', 'custom_sticker03', 'member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_CUSTOM_STICKER_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_CUSTOM_STICKER_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_CUSTOM_STICKER_ENTID'];
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
//# sourceMappingURL=CustomStickerEntity.test.js.map