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
(0, node_test_1.describe)('BulkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Bulk();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'bulk.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "bulk", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "enterpris_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "id_organization", "reqd": true, "type": "`$ARRAY`", "index$": 1 }] }, "contract": { "id": "GET /enterprises/{id}/organizations/bulk/{idOrganizations}", "json": "{\"operationId\":\"get-enterprises-id-organizations-bulk-idOrganizations\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"An array of IDs of the organizations to be removed from the enterprise.\",\"in\":\"path\",\"name\":\"idOrganizations\",\"required\":true,\"schema\":{\"items\":{\"anyOf\":[{\"properties\":{\"dateLastActivity\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoards\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idEnterprise\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"memberships\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"type\":\"string\"},\"offering\":{\"example\":\"trello.enterprise\",\"type\":\"string\"},\"prefs\":{\"properties\":{\"attachmentRestrictions\":{\"items\":{\"enum\":[\"computer\",\"trello\",\"google-drive\",\"box\",\"onedrive\",\"link\"],\"type\":\"string\"},\"type\":\"array\"},\"boardDeleteRestrict\":{\"type\":\"object\"},\"boardVisibilityRestrict\":{\"type\":\"object\"},\"permissionLevel\":{\"enum\":[\"org\",\"private\",\"public\",\"enterprise\",\"domain\"],\"example\":\"private\",\"type\":\"string\"}},\"type\":\"object\"},\"premiumFeatures\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://trello.com/w/<name>\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected Error\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/enterprises/{id}/organizations/bulk/{idOrganizations}", "rename": { "param": { "id": "enterpris_id", "idOrganizations": "id" } }, "segments": [{ "lit": "enterprises" }, { "var": "enterpris_id" }, { "lit": "organizations" }, { "lit": "bulk" }, { "var": "id" }], "select": { "exist": ["enterpris_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "enterpris_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "id_organization", "reqd": true, "type": "`$ARRAY`", "index$": 1 }] }, "contract": { "id": "GET /enterprises/{id}/transferrable/bulk/{idOrganizations}", "json": "{\"operationId\":\"get-enterprises-id-transferrable-bulk-idOrganizations\",\"parameters\":[{\"description\":\"ID of the Enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"An array of IDs of an Organization resource.\",\"in\":\"path\",\"name\":\"idOrganizations\",\"required\":true,\"schema\":{\"items\":{\"anyOf\":[{\"properties\":{\"dateLastActivity\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoards\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idEnterprise\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"memberships\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"type\":\"string\"},\"offering\":{\"example\":\"trello.enterprise\",\"type\":\"string\"},\"prefs\":{\"properties\":{\"attachmentRestrictions\":{\"items\":{\"enum\":[\"computer\",\"trello\",\"google-drive\",\"box\",\"onedrive\",\"link\"],\"type\":\"string\"},\"type\":\"array\"},\"boardDeleteRestrict\":{\"type\":\"object\"},\"boardVisibilityRestrict\":{\"type\":\"object\"},\"permissionLevel\":{\"enum\":[\"org\",\"private\",\"public\",\"enterprise\",\"domain\"],\"example\":\"private\",\"type\":\"string\"}},\"type\":\"object\"},\"premiumFeatures\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://trello.com/w/<name>\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"anyOf\":[{\"properties\":{\"newBillableMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"restrictedMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"transferrable\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/enterprises/{id}/transferrable/bulk/{idOrganizations}", "rename": { "param": { "id": "enterpris_id", "idOrganizations": "id" } }, "segments": [{ "lit": "enterprises" }, { "var": "enterpris_id" }, { "lit": "transferrable" }, { "lit": "bulk" }, { "var": "id" }], "select": { "exist": ["enterpris_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "id_organization", "orig": "id_organization", "reqd": true, "type": "`$ARRAY`", "index$": 0 }] }, "contract": { "id": "PUT /enterprises/${id}/enterpriseJoinRequest/bulk", "json": "{\"operationId\":\"put-enterprises-id-enterpriseJoinRequest-bulk\",\"parameters\":[{\"description\":\"ID of the Enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"An array of IDs of an Organization resource.\",\"in\":\"query\",\"name\":\"idOrganizations\",\"required\":true,\"schema\":{\"items\":{\"anyOf\":[{\"properties\":{\"dateLastActivity\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoards\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idEnterprise\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"memberships\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"type\":\"string\"},\"offering\":{\"example\":\"trello.enterprise\",\"type\":\"string\"},\"prefs\":{\"properties\":{\"attachmentRestrictions\":{\"items\":{\"enum\":[\"computer\",\"trello\",\"google-drive\",\"box\",\"onedrive\",\"link\"],\"type\":\"string\"},\"type\":\"array\"},\"boardDeleteRestrict\":{\"type\":\"object\"},\"boardVisibilityRestrict\":{\"type\":\"object\"},\"permissionLevel\":{\"enum\":[\"org\",\"private\",\"public\",\"enterprise\",\"domain\"],\"example\":\"private\",\"type\":\"string\"}},\"type\":\"object\"},\"premiumFeatures\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://trello.com/w/<name>\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/enterprises/${id}/enterpriseJoinRequest/bulk", "segments": [{ "lit": "enterprises" }, { "lit": "${id}" }, { "lit": "enterpriseJoinRequest" }, { "lit": "bulk" }], "select": { "exist": ["id", "id_organization"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["enterpris"]] }, "key$": "bulk", "name__orig": "bulk", "Name": "Bulk", "name_": "bulk", "name-": "bulk", "NAME": "BULK", "index$": 12 }, { "active": true, "entity": "bulk", "key$": "BasicBulkFlow", "kind": "basic", "name": "BasicBulkFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "bulk_ref01", "srcdatavar": "bulk_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bulk_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "bulk_ref01", "srcdatavar": "bulk_ref01_data", "suffix": "_dt0" }, "match": { "enterpris_id": "enterpris01", "id": "bulk01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bulk_ref01" } }], "index$": 1 }] }, 'Bulk');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let bulk_ref01_data = Object.values(setup.data.existing.bulk)[0];
        // UPDATE
        const bulk_ref01_ent = client.Bulk();
        const bulk_ref01_data_up0 = {};
        bulk_ref01_data_up0.id = bulk_ref01_data.id;
        const bulk_ref01_resdata_up0 = (await bulk_ref01_ent.update(bulk_ref01_data_up0)).data();
        (0, node_assert_1.default)(bulk_ref01_resdata_up0.id === bulk_ref01_data_up0.id);
        // LOAD
        const bulk_ref01_match_dt0 = {};
        bulk_ref01_match_dt0.id = bulk_ref01_data.id;
        const bulk_ref01_data_dt0 = (await bulk_ref01_ent.load(bulk_ref01_match_dt0)).data();
        (0, node_assert_1.default)(bulk_ref01_data_dt0.id === bulk_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/bulk/BulkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['bulk01', 'bulk02', 'bulk03', 'enterpris01', 'enterpris02', 'enterpris03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_BULK_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_BULK_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_BULK_ENTID'];
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
//# sourceMappingURL=BulkEntity.test.js.map