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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "bulk", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /enterprises/{id}/organizations/bulk/{idOrganizations}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "enterprise_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id_organization", "r": true, "t": "`$ARRAY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/enterprises/{id}/organizations/bulk/{idOrganizations}", "q": { "exist": ["enterprise_id", "id"] }, "r": { "param": { "id": "enterprise_id", "idOrganizations": "id" } }, "s": [{ "lit": "enterprises" }, { "var": "enterprise_id" }, { "lit": "organizations" }, { "lit": "bulk" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /enterprises/{id}/transferrable/bulk/{idOrganizations}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "enterprise_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "id_organization", "r": true, "t": "`$ARRAY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/enterprises/{id}/transferrable/bulk/{idOrganizations}", "q": { "exist": ["enterprise_id", "id"] }, "r": { "param": { "id": "enterprise_id", "idOrganizations": "id" } }, "s": [{ "lit": "enterprises" }, { "var": "enterprise_id" }, { "lit": "transferrable" }, { "lit": "bulk" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /enterprises/${id}/enterpriseJoinRequest/bulk", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "id_organization", "or": "id_organization", "r": true, "t": "`$ARRAY`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/enterprises/${id}/enterpriseJoinRequest/bulk", "q": { "exist": ["id", "id_organization"] }, "r": {}, "s": [{ "lit": "enterprises" }, { "lit": "${id}" }, { "lit": "enterpriseJoinRequest" }, { "lit": "bulk" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.enterprise"]] }, "key$": "bulk", "name__orig": "bulk", "Name": "Bulk", "name_": "bulk", "name-": "bulk", "NAME": "BULK", "index$": 11 }, { "active": true, "entity": "bulk", "key$": "BasicBulkFlow", "kind": "basic", "name": "BasicBulkFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "bulk_ref01", "srcdatavar": "bulk_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bulk_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "bulk_ref01", "srcdatavar": "bulk_ref01_data", "suffix": "_dt0" }, "m": { "enterprise_id": "enterprise01", "id": "bulk01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-bulk_ref01" } }], "index$": 1 }] }, 'Bulk', { "GET /enterprises/{id}/organizations/bulk/{idOrganizations}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idOrganizations", "in": "path", "description": "An array of IDs of the organizations to be removed from the enterprise.", "required": true, "schema": { "type": "array", "items": { "anyOf": [{ "type": "object", "properties": { "id": { "example": "5abbe4b7ddc1b351ef961414", "key$": "id", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "name": { "key$": "name", "type": "string" }, "displayName": { "example": "Organization Name", "key$": "displayName", "type": "string" }, "dateLastActivity": { "example": "2018-10-17T19:10:14.808Z", "format": "date", "key$": "dateLastActivity", "type": "string" }, "prefs": { "key$": "prefs", "properties": { "attachmentRestrictions": {}, "boardDeleteRestrict": {}, "boardVisibilityRestrict": {}, "permissionLevel": {} }, "type": "object", "x-ref": "#/components/schemas/OrganizationPrefs" }, "idEnterprise": { "example": "5abbe4b7ddc1b351ef961414", "key$": "idEnterprise", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "offering": { "example": "trello.enterprise", "key$": "offering", "type": "string" }, "url": { "example": "https://trello.com/w/<name>", "format": "url", "key$": "url", "type": "string" }, "idBoards": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "idBoards", "type": "array" }, "memberships": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "memberships", "type": "array" }, "premiumFeatures": { "items": { "type": "string" }, "key$": "premiumFeatures", "type": "array" } }, "x-ref": "#/components/schemas/Organization" }] } }, "index$": 1 }] }, "GET /enterprises/{id}/transferrable/bulk/{idOrganizations}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the Enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idOrganizations", "in": "path", "description": "An array of IDs of an Organization resource.", "required": true, "schema": { "type": "array", "items": { "anyOf": [{ "type": "object", "properties": { "id": { "example": "5abbe4b7ddc1b351ef961414", "key$": "id", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "name": { "key$": "name", "type": "string" }, "displayName": { "example": "Organization Name", "key$": "displayName", "type": "string" }, "dateLastActivity": { "example": "2018-10-17T19:10:14.808Z", "format": "date", "key$": "dateLastActivity", "type": "string" }, "prefs": { "key$": "prefs", "properties": { "attachmentRestrictions": {}, "boardDeleteRestrict": {}, "boardVisibilityRestrict": {}, "permissionLevel": {} }, "type": "object", "x-ref": "#/components/schemas/OrganizationPrefs" }, "idEnterprise": { "example": "5abbe4b7ddc1b351ef961414", "key$": "idEnterprise", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "offering": { "example": "trello.enterprise", "key$": "offering", "type": "string" }, "url": { "example": "https://trello.com/w/<name>", "format": "url", "key$": "url", "type": "string" }, "idBoards": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "idBoards", "type": "array" }, "memberships": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "memberships", "type": "array" }, "premiumFeatures": { "items": { "type": "string" }, "key$": "premiumFeatures", "type": "array" } }, "x-ref": "#/components/schemas/Organization" }] } }, "index$": 1 }] }, "PUT /enterprises/${id}/enterpriseJoinRequest/bulk": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the Enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idOrganizations", "in": "query", "description": "An array of IDs of an Organization resource.", "required": true, "schema": { "type": "array", "items": { "anyOf": [{ "type": "object", "properties": { "id": { "example": "5abbe4b7ddc1b351ef961414", "key$": "id", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "name": { "key$": "name", "type": "string" }, "displayName": { "example": "Organization Name", "key$": "displayName", "type": "string" }, "dateLastActivity": { "example": "2018-10-17T19:10:14.808Z", "format": "date", "key$": "dateLastActivity", "type": "string" }, "prefs": { "key$": "prefs", "properties": { "attachmentRestrictions": {}, "boardDeleteRestrict": {}, "boardVisibilityRestrict": {}, "permissionLevel": {} }, "type": "object", "x-ref": "#/components/schemas/OrganizationPrefs" }, "idEnterprise": { "example": "5abbe4b7ddc1b351ef961414", "key$": "idEnterprise", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "offering": { "example": "trello.enterprise", "key$": "offering", "type": "string" }, "url": { "example": "https://trello.com/w/<name>", "format": "url", "key$": "url", "type": "string" }, "idBoards": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "idBoards", "type": "array" }, "memberships": { "items": { "example": "5abbe4b7ddc1b351ef961414", "pattern": "^[0-9a-fA-F]{24}$", "type": "string", "x-ref": "#/components/schemas/TrelloID" }, "key$": "memberships", "type": "array" }, "premiumFeatures": { "items": { "type": "string" }, "key$": "premiumFeatures", "type": "array" } }, "x-ref": "#/components/schemas/Organization" }] } }, "index$": 1 }] } });
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
    let idmap = transform(['bulk01', 'bulk02', 'bulk03', 'enterprise01', 'enterprise02', 'enterprise03'], {
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