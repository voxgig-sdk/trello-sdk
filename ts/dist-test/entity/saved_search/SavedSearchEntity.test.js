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
(0, node_test_1.describe)('SavedSearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.SavedSearch();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'saved_search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "pos", "req": false, "type": "`$ANY`", "union": { "branches": 2, "count": 1, "depth": 0 }, "index$": 2 }, { "active": true, "name": "query", "req": false, "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "saved_search", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "pos", "orig": "pos", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "query", "orig": "query", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "POST /members/{id}/savedSearches", "json": "{\"operationId\":\"post-members-id-savedsearches\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The name for the saved search\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The search query\",\"in\":\"query\",\"name\":\"query\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The position of the saved search. `top`, `bottom`, or a positive float.\",\"in\":\"query\",\"name\":\"pos\",\"required\":true,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5589b47349b40cedc28ceae2\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"My Cards\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},\"query\":{\"example\":\"@me\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/members/{id}/savedSearches", "rename": { "param": { "id": "member_id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "savedSearches" }], "select": { "exist": ["member_id", "name", "pos", "query"] }, "transform": { "req": "`reqdata`", "res": "`body.pos`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /members/{id}/savedSearches", "json": "{\"operationId\":\"get-members-id-savedsearches\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5589b47349b40cedc28ceae2\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"My Cards\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},\"query\":{\"example\":\"@me\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/members/{id}/savedSearches", "rename": { "param": { "id": "member_id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "savedSearches" }], "select": { "exist": ["member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id_search", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /members/{id}/savedSearches/{idSearch}", "json": "{\"operationId\":\"get-members-id-savedsearches-idsearch\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The ID of the saved search to delete\",\"in\":\"path\",\"name\":\"idSearch\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5589b47349b40cedc28ceae2\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"My Cards\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},\"query\":{\"example\":\"@me\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/members/{id}/savedSearches/{idSearch}", "rename": { "param": { "id": "member_id", "idSearch": "id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "savedSearches" }, { "var": "id" }], "select": { "exist": ["id", "member_id"] }, "transform": { "req": "`reqdata`", "res": "`body.pos`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id_search", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /members/{id}/savedSearches/{idSearch}", "json": "{\"operationId\":\"delete-members-id-savedsearches-idsearch\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The ID of the saved search to delete\",\"in\":\"path\",\"name\":\"idSearch\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/members/{id}/savedSearches/{idSearch}", "rename": { "param": { "id": "member_id", "idSearch": "id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "savedSearches" }, { "var": "id" }], "select": { "exist": ["id", "member_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id_search", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "member_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "pos", "orig": "pos", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "query", "orig": "query", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "PUT /members/{id}/savedSearches/{idSearch}", "json": "{\"operationId\":\"put-members-id-savedsearches-idsearch\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The ID of the saved search to delete\",\"in\":\"path\",\"name\":\"idSearch\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The new name for the saved search\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The new search query\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"New position for saves search. `top`, `bottom`, or a positive float.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5589b47349b40cedc28ceae2\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"My Cards\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},\"query\":{\"example\":\"@me\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/members/{id}/savedSearches/{idSearch}", "rename": { "param": { "id": "member_id", "idSearch": "id" } }, "segments": [{ "lit": "members" }, { "var": "member_id" }, { "lit": "savedSearches" }, { "var": "id" }], "select": { "exist": ["id", "member_id", "name", "pos", "query"] }, "transform": { "req": "`reqdata`", "res": "`body.pos`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["member"]] }, "key$": "saved_search", "name__orig": "saved_search", "Name": "SavedSearch", "name_": "saved_search", "name-": "saved-search", "NAME": "SAVED_SEARCH", "index$": 58 }, { "active": true, "entity": "saved_search", "key$": "BasicSavedSearchFlow", "kind": "basic", "name": "BasicSavedSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "saved_search_ref01" }, "match": { "member_id": "member01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "member_id": "member01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "saved_search_ref01" } }], "index$": 1 }, { "active": true, "data": { "member_id": "member01" }, "input": { "ref": "saved_search_ref01", "srcdatavar": "saved_search_ref01_data", "suffix": "_up0", "textfield": "name" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-saved_search_ref01" } }], "valid": [], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "saved_search_ref01", "srcdatavar": "saved_search_ref01_data", "suffix": "_dt0" }, "match": { "id": "saved_search01", "member_id": "member01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-saved_search_ref01" } }], "index$": 3 }, { "active": true, "data": {}, "input": { "ref": "saved_search_ref01", "suffix": "_rm0" }, "match": { "id": "saved_search01", "member_id": "member01" }, "op": "remove", "spec": [], "valid": [], "index$": 4 }, { "active": true, "data": {}, "input": { "suffix": "_rt0" }, "match": { "member_id": "member01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemNotExists", "def": { "ref": "saved_search_ref01" } }], "index$": 5 }] }, 'SavedSearch');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const saved_search_ref01_ent = client.SavedSearch();
        let saved_search_ref01_data = setup.data.new.saved_search['saved_search_ref01'];
        saved_search_ref01_data['member_id'] = setup.idmap['member01'];
        saved_search_ref01_data = (await saved_search_ref01_ent.create(saved_search_ref01_data)).data();
        (0, node_assert_1.default)(null != saved_search_ref01_data.id);
        // LIST
        const saved_search_ref01_match = {};
        saved_search_ref01_match['member_id'] = setup.idmap['member01'];
        const saved_search_ref01_list = (await saved_search_ref01_ent.list(saved_search_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(saved_search_ref01_list, { id: saved_search_ref01_data.id })));
        // UPDATE
        const saved_search_ref01_data_up0 = {};
        saved_search_ref01_data_up0.id = saved_search_ref01_data.id;
        saved_search_ref01_data_up0['member_id'] = setup.idmap['member_id'];
        const saved_search_ref01_markdef_up0 = { name: 'name', value: 'Mark01-saved_search_ref01_' + setup.now };
        saved_search_ref01_data_up0[saved_search_ref01_markdef_up0.name] = saved_search_ref01_markdef_up0.value;
        const saved_search_ref01_resdata_up0 = (await saved_search_ref01_ent.update(saved_search_ref01_data_up0)).data();
        (0, node_assert_1.default)(saved_search_ref01_resdata_up0.id === saved_search_ref01_data_up0.id);
        (0, node_assert_1.default)(saved_search_ref01_resdata_up0[saved_search_ref01_markdef_up0.name] === saved_search_ref01_markdef_up0.value);
        // LOAD
        const saved_search_ref01_match_dt0 = {};
        saved_search_ref01_match_dt0.id = saved_search_ref01_data.id;
        const saved_search_ref01_data_dt0 = (await saved_search_ref01_ent.load(saved_search_ref01_match_dt0)).data();
        (0, node_assert_1.default)(saved_search_ref01_data_dt0.id === saved_search_ref01_data.id);
        // REMOVE
        const saved_search_ref01_match_rm0 = { id: saved_search_ref01_data.id };
        await saved_search_ref01_ent.remove(saved_search_ref01_match_rm0);
        // LIST
        const saved_search_ref01_match_rt0 = {};
        saved_search_ref01_match_rt0['member_id'] = setup.idmap['member01'];
        const saved_search_ref01_list_rt0 = (await saved_search_ref01_ent.list(saved_search_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(saved_search_ref01_list_rt0, { id: saved_search_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/saved_search/SavedSearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['saved_search01', 'saved_search02', 'saved_search03', 'member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_SAVED_SEARCH_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_SAVED_SEARCH_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_SAVED_SEARCH_ENTID'];
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
//# sourceMappingURL=SavedSearchEntity.test.js.map