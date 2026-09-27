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
(0, node_test_1.describe)('EnterpriseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Enterprise();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'enterprise.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "dateOrganizationPrefsLastUpdated": { "a": true, "fo": "date", "h": "Date Organization Prefs Last Updated", "n": "dateOrganizationPrefsLastUpdated", "r": false, "t": "`$STRING`", "key$": "dateOrganizationPrefsLastUpdated", "index$": 0 }, "displayName": { "a": true, "h": "Display Name", "n": "displayName", "r": false, "t": "`$STRING`", "key$": "displayName", "index$": 1 }, "domains": { "a": true, "h": "Domains", "n": "domains", "r": false, "t": "`$ARRAY`", "key$": "domains", "index$": 2 }, "enterpriseDomains": { "a": true, "h": "Enterprise Domains", "n": "enterpriseDomains", "r": false, "t": "`$ARRAY`", "key$": "enterpriseDomains", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "idAdmins": { "a": true, "h": "Id Admins", "n": "idAdmins", "r": false, "t": "`$ARRAY`", "key$": "idAdmins", "index$": 5 }, "idOrganizations": { "a": true, "h": "Id Organizations", "n": "idOrganizations", "r": false, "t": "`$ARRAY`", "key$": "idOrganizations", "index$": 6 }, "idp": { "a": true, "h": "Idp", "n": "idp", "r": false, "t": "`$OBJECT`", "key$": "idp", "index$": 7 }, "isRealEnterprise": { "a": true, "h": "Is Real Enterprise", "n": "isRealEnterprise", "r": false, "t": "`$BOOLEAN`", "key$": "isRealEnterprise", "index$": 8 }, "licenses": { "a": true, "h": "Licenses", "n": "licenses", "r": false, "t": "`$OBJECT`", "key$": "licenses", "index$": 9 }, "logoHash": { "a": true, "h": "Logo Hash", "n": "logoHash", "r": false, "t": "`$STRING`", "key$": "logoHash", "index$": 10 }, "logoUrl": { "a": true, "h": "Logo Url", "n": "logoUrl", "r": false, "t": "`$STRING`", "key$": "logoUrl", "index$": 11 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 12 }, "organizationPrefs": { "a": true, "h": "Organization Prefs", "n": "organizationPrefs", "r": false, "t": "`$OBJECT`", "key$": "organizationPrefs", "index$": 13 }, "pluginWhitelistingEnabled": { "a": true, "h": "Plugin Whitelisting Enabled", "n": "pluginWhitelistingEnabled", "r": false, "t": "`$ARRAY`", "key$": "pluginWhitelistingEnabled", "index$": 14 }, "prefs": { "a": true, "h": "Prefs", "n": "prefs", "r": false, "t": "`$OBJECT`", "key$": "prefs", "index$": 15 }, "products": { "a": true, "h": "Products", "n": "products", "r": false, "t": "`$ARRAY`", "key$": "products", "index$": 16 }, "ssoActivationFailed": { "a": true, "h": "Sso Activation Failed", "n": "ssoActivationFailed", "r": false, "t": "`$BOOLEAN`", "key$": "ssoActivationFailed", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "enterprise", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /enterprises/{id}/tokens", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "none", "k": "query", "n": "expiration", "or": "expiration", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/enterprises/{id}/tokens", "q": { "$action": "token", "exist": ["expiration", "id"] }, "r": {}, "s": [{ "lit": "enterprises" }, { "var": "id" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /enterprises/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "all", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "none", "k": "query", "n": "member", "or": "member", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "10", "k": "query", "n": "member_count", "or": "member_count", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "avatarHash, fullName, initials, username", "k": "query", "n": "member_field", "or": "member_field", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "none", "k": "query", "n": "member_filter", "or": "member_filter", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "member_sort", "or": "member_sort", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": "none", "k": "query", "n": "member_sort_by", "or": "member_sort_by", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "ex": "id", "k": "query", "n": "member_sort_order", "or": "member_sort_order", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "ex": "1", "k": "query", "n": "member_start_index", "or": "member_start_index", "r": false, "t": "`$INTEGER`", "index$": 8 }, { "a": true, "ex": "none", "k": "query", "n": "organization", "or": "organization", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "ex": "none", "k": "query", "n": "organization_field", "or": "organization_field", "r": false, "t": "`$STRING`", "index$": 10 }, { "a": true, "ex": "none", "k": "query", "n": "organization_membership", "or": "organization_membership", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "ex": false, "k": "query", "n": "organization_paid_account", "or": "organization_paid_account", "r": false, "t": "`$BOOLEAN`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/enterprises/{id}", "q": { "exist": ["field", "id", "member", "member_count", "member_field", "member_filter", "member_sort", "member_sort_by", "member_sort_order", "member_start_index", "organization", "organization_field", "organization_membership", "organization_paid_account"] }, "r": {}, "s": [{ "lit": "enterprises" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /enterprises/{id}/organizations", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "id_organization", "or": "id_organization", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/enterprises/{id}/organizations", "q": { "$action": "organization", "exist": ["id", "id_organization"] }, "r": {}, "s": [{ "lit": "enterprises" }, { "var": "id" }, { "lit": "organizations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "enterprise", "name__orig": "enterprise", "Name": "Enterprise", "name_": "enterprise", "name-": "enterprise", "NAME": "ENTERPRISE", "index$": 25 }, { "active": true, "entity": "enterprise", "key$": "BasicEnterpriseFlow", "kind": "basic", "name": "BasicEnterpriseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "enterprise_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "enterprise_ref01", "srcdatavar": "enterprise_ref01_data", "suffix": "_up0", "textfield": "dateOrganizationPrefsLastUpdated" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-enterprise_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "enterprise_ref01", "srcdatavar": "enterprise_ref01_data", "suffix": "_dt0" }, "m": { "id": "enterprise01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-enterprise_ref01" } }], "index$": 2 }] }, 'Enterprise', { "POST /enterprises/{id}/tokens": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the enterprise to retrieve.", "required": true, "schema": { "type": "string" }, "index$": 0 }, { "name": "expiration", "in": "query", "description": "One of: `1hour`, `1day`, `30days`, `never`", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 1 }] }, "GET /enterprises/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "fields", "in": "query", "description": "Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`", "required": false, "schema": { "type": "string", "default": "all" }, "index$": 1 }, { "name": "members", "in": "query", "description": "One of: `none`, `normal`, `admins`, `owners`, `all`", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 2 }, { "name": "member_fields", "in": "query", "description": "One of: `avatarHash`, `fullName`, `initials`, `username`", "required": false, "schema": { "type": "string", "default": "avatarHash, fullName, initials, username" }, "index$": 3 }, { "name": "member_filter", "in": "query", "description": "Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 4 }, { "name": "member_sort", "in": "query", "description": "This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "member_sortBy", "in": "query", "description": "Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 6 }, { "name": "member_sortOrder", "in": "query", "description": "Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`", "required": false, "schema": { "type": "string", "default": "id" }, "index$": 7 }, { "name": "member_startIndex", "in": "query", "description": "Any integer between 0 and 100.", "required": false, "schema": { "type": "integer", "format": "int32", "default": "1" }, "index$": 8 }, { "name": "member_count", "in": "query", "description": "0 to 100", "required": false, "schema": { "type": "integer", "format": "int32", "default": "10" }, "index$": 9 }, { "name": "organizations", "in": "query", "description": "One of: `none`, `members`, `public`, `all`", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 10 }, { "name": "organization_fields", "in": "query", "description": "Any valid value that the [nested organization field resource]() accepts.", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 11 }, { "name": "organization_paid_accounts", "in": "query", "description": "Whether or not to include paid account information in the returned workspace objects", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 12 }, { "name": "organization_memberships", "in": "query", "description": "Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 13 }] }, "PUT /enterprises/{id}/organizations": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the Enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idOrganization", "in": "query", "description": "ID of Organization to be transferred to Enterprise.", "required": true, "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const enterprise_ref01_ent = client.Enterprise();
        let enterprise_ref01_data = setup.data.new.enterprise['enterprise_ref01'];
        enterprise_ref01_data = (await enterprise_ref01_ent.create(enterprise_ref01_data)).data();
        (0, node_assert_1.default)(null != enterprise_ref01_data.id);
        // UPDATE
        const enterprise_ref01_data_up0 = {};
        enterprise_ref01_data_up0.id = enterprise_ref01_data.id;
        const enterprise_ref01_markdef_up0 = { name: 'dateOrganizationPrefsLastUpdated', value: 'Mark01-enterprise_ref01_' + setup.now };
        enterprise_ref01_data_up0[enterprise_ref01_markdef_up0.name] = enterprise_ref01_markdef_up0.value;
        const enterprise_ref01_resdata_up0 = (await enterprise_ref01_ent.update(enterprise_ref01_data_up0)).data();
        (0, node_assert_1.default)(enterprise_ref01_resdata_up0.id === enterprise_ref01_data_up0.id);
        (0, node_assert_1.default)(enterprise_ref01_resdata_up0[enterprise_ref01_markdef_up0.name] === enterprise_ref01_markdef_up0.value);
        // LOAD
        const enterprise_ref01_match_dt0 = {};
        enterprise_ref01_match_dt0.id = enterprise_ref01_data.id;
        const enterprise_ref01_data_dt0 = (await enterprise_ref01_ent.load(enterprise_ref01_match_dt0)).data();
        (0, node_assert_1.default)(enterprise_ref01_data_dt0.id === enterprise_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/enterprise/EnterpriseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['enterprise01', 'enterprise02', 'enterprise03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_ENTERPRISE_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_ENTERPRISE_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_ENTERPRISE_ENTID'];
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
//# sourceMappingURL=EnterpriseEntity.test.js.map