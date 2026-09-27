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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "activeMembershipCount": { "a": true, "h": "Active Membership Count", "n": "activeMembershipCount", "r": false, "t": "`$NUMBER`", "key$": "activeMembershipCount", "index$": 0 }, "dateLastActive": { "a": true, "fo": "date", "h": "Date Last Active", "n": "dateLastActive", "r": false, "sh": "The date of the most recent activity on any of the boards in the workspace.", "t": "`$STRING`", "key$": "dateLastActive", "index$": 1 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": false, "t": "`$STRING`", "key$": "displayName", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "idActiveAdmins": { "a": true, "h": "Id Active Admins", "n": "idActiveAdmins", "r": false, "t": "`$ARRAY`", "key$": "idActiveAdmins", "index$": 4 }, "logoUrl": { "a": true, "h": "Logo Url", "n": "logoUrl", "r": false, "t": "`$STRING`", "key$": "logoUrl", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 6 }, "products": { "a": true, "h": "Products", "n": "products", "r": false, "t": "`$ARRAY`", "key$": "products", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "claimable_organization", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /enterprises/{id}/claimableOrganizations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "enterprise_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "active_since", "or": "active_since", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "inactive_since", "or": "inactive_since", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/enterprises/{id}/claimableOrganizations", "q": { "exist": ["active_since", "cursor", "enterprise_id", "inactive_since", "limit", "name"] }, "r": { "param": { "id": "enterprise_id" } }, "s": [{ "lit": "enterprises" }, { "var": "enterprise_id" }, { "lit": "claimableOrganizations" }], "t": { "req": "`reqdata`", "res": "`body.organizations`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.enterprise"]] }, "key$": "claimable_organization", "name__orig": "claimable_organization", "Name": "ClaimableOrganization", "name_": "claimable_organization", "name-": "claimable-organization", "NAME": "CLAIMABLE_ORGANIZATION", "index$": 17 }, { "active": true, "entity": "claimable_organization", "key$": "BasicClaimableOrganizationFlow", "kind": "basic", "name": "BasicClaimableOrganizationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "enterprise_id": "enterprise01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "claimable_organization_ref01" } }], "index$": 0 }] }, 'ClaimableOrganization', { "GET /enterprises/{id}/claimableOrganizations": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the enterprise to retrieve", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "limit", "in": "query", "description": "Limits the number of workspaces to be sorted", "required": false, "schema": { "type": "integer" }, "index$": 1 }, { "name": "cursor", "in": "query", "description": "Specifies the sort order to return matching documents", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "name", "in": "query", "description": "Name of the enterprise to retrieve workspaces for", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "activeSince", "in": "query", "description": "Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "inactiveSince", "in": "query", "description": "Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace", "required": false, "schema": { "type": "string" }, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let claimable_organization_ref01_data = Object.values(setup.data.existing.claimable_organization)[0];
        // LIST
        const claimable_organization_ref01_ent = client.ClaimableOrganization();
        const claimable_organization_ref01_match = {};
        claimable_organization_ref01_match['enterprise_id'] = setup.idmap['enterprise01'];
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
    let idmap = transform(['claimable_organization01', 'claimable_organization02', 'claimable_organization03', 'enterprise01', 'enterprise02', 'enterprise03'], {
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