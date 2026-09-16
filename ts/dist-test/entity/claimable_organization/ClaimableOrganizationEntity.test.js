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
(0, node_test_1.describe)('ClaimableOrganizationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.ClaimableOrganization();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'claimable_organization.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "activeMembershipCount", "req": false, "type": "`$NUMBER`", "index$": 0 }, { "active": true, "format": "date", "name": "dateLastActive", "req": false, "short": "The date of the most recent activity on any of the boards in the workspace.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "displayName", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "idActiveAdmins", "req": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "logoUrl", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "products", "req": false, "type": "`$ARRAY`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "claimable_organization", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "enterpris_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "active_since", "orig": "active_since", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "inactive_since", "orig": "inactive_since", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "limit", "orig": "limit", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /enterprises/{id}/claimableOrganizations", "json": "{\"operationId\":\"get-enterprises-id-claimableOrganizations\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Limits the number of workspaces to be sorted\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Specifies the sort order to return matching documents\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Name of the enterprise to retrieve workspaces for\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace\",\"in\":\"query\",\"name\":\"activeSince\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace\",\"in\":\"query\",\"name\":\"inactiveSince\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"claimableCount\":{\"example\":2,\"type\":\"number\"},\"organizations\":{\"items\":{\"properties\":{\"activeMembershipCount\":{\"example\":5,\"type\":\"number\"},\"dateLastActive\":{\"description\":\"The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.\",\"example\":\"2019-08-22T18:15:53.546Z\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"617abd5995eae45169a11059\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idActiveAdmins\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"logoUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"name\":{\"example\":\"organization_name\",\"type\":\"string\"},\"products\":{\"items\":{\"format\":\"integer\",\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected erorr\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/enterprises/{id}/claimableOrganizations", "rename": { "param": { "id": "enterpris_id" } }, "segments": [{ "lit": "enterprises" }, { "var": "enterpris_id" }, { "lit": "claimableOrganizations" }], "select": { "exist": ["active_since", "cursor", "enterpris_id", "inactive_since", "limit", "name"] }, "transform": { "req": "`reqdata`", "res": "`body.organizations`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["enterpris"]] }, "key$": "claimable_organization", "name__orig": "claimable_organization", "Name": "ClaimableOrganization", "name_": "claimable_organization", "name-": "claimable-organization", "NAME": "CLAIMABLE_ORGANIZATION", "index$": 18 }, { "active": true, "entity": "claimable_organization", "key$": "BasicClaimableOrganizationFlow", "kind": "basic", "name": "BasicClaimableOrganizationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "enterpris_id": "enterpris01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "claimable_organization_ref01" } }], "index$": 0 }] }, 'ClaimableOrganization');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let claimable_organization_ref01_data = Object.values(setup.data.existing.claimable_organization)[0];
        // LIST
        const claimable_organization_ref01_ent = client.ClaimableOrganization();
        const claimable_organization_ref01_match = {};
        claimable_organization_ref01_match['enterpris_id'] = setup.idmap['enterpris01'];
        const claimable_organization_ref01_list = (await claimable_organization_ref01_ent.list(claimable_organization_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/claimable_organization/ClaimableOrganizationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['claimable_organization01', 'claimable_organization02', 'claimable_organization03', 'enterpris01', 'enterpris02', 'enterpris03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID'];
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
//# sourceMappingURL=ClaimableOrganizationEntity.test.js.map