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
(0, node_test_1.describe)('MembershipEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Membership();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'membership.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "admin": { "a": true, "h": "Admin", "n": "admin", "r": false, "t": "`$BOOLEAN`", "key$": "admin", "index$": 0 }, "collaborator": { "a": true, "h": "Collaborator", "n": "collaborator", "r": false, "t": "`$BOOLEAN`", "key$": "collaborator", "index$": 1 }, "deactivated": { "a": true, "h": "Deactivated", "n": "deactivated", "r": false, "t": "`$BOOLEAN`", "key$": "deactivated", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "licensed": { "a": true, "h": "Licensed", "n": "licensed", "r": false, "t": "`$BOOLEAN`", "key$": "licensed", "index$": 4 }, "managed": { "a": true, "h": "Managed", "n": "managed", "r": false, "t": "`$BOOLEAN`", "key$": "managed", "index$": 5 }, "member": { "a": true, "h": "Member", "n": "member", "r": false, "t": "`$OBJECT`", "key$": "member", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "membership", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /enterprises/{id}/members/query", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "enterprise_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "none", "k": "query", "n": "active_since", "or": "active_since", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "admin", "or": "admin", "r": false, "t": "`$BOOLEAN`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "collaborator", "or": "collaborator", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": "none", "k": "query", "n": "cursor", "or": "cursor", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": false, "k": "query", "n": "deactivated", "or": "deactivated", "r": false, "t": "`$BOOLEAN`", "index$": 4 }, { "a": true, "ex": "none", "k": "query", "n": "inactive_since", "or": "inactive_since", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "ex": false, "k": "query", "n": "licensed", "or": "licensed", "r": false, "t": "`$BOOLEAN`", "index$": 6 }, { "a": true, "ex": "none", "k": "query", "n": "managed", "or": "managed", "r": false, "t": "`$BOOLEAN`", "index$": 7 }, { "a": true, "ex": "none", "k": "query", "n": "search", "or": "search", "r": false, "t": "`$STRING`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/enterprises/{id}/members/query", "q": { "exist": ["active_since", "admin", "collaborator", "cursor", "deactivated", "enterprise_id", "inactive_since", "licensed", "managed", "search"] }, "r": { "param": { "id": "enterprise_id" } }, "s": [{ "lit": "enterprises" }, { "var": "enterprise_id" }, { "lit": "members" }, { "lit": "query" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /organizations/{id}/memberships", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "organization_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "all", "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": false, "k": "query", "n": "member", "or": "member", "r": false, "t": "`$BOOLEAN`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/organizations/{id}/memberships", "q": { "exist": ["filter", "member", "organization_id"] }, "r": { "param": { "id": "organization_id" } }, "s": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "memberships" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /boards/{id}/memberships", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": false, "k": "query", "n": "activity", "or": "activity", "r": false, "t": "`$BOOLEAN`", "index$": 0 }, { "a": true, "ex": "all", "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": false, "k": "query", "n": "member", "or": "member", "r": false, "t": "`$BOOLEAN`", "index$": 2 }, { "a": true, "ex": "fullname,username", "k": "query", "n": "member_field", "or": "member_field", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": false, "k": "query", "n": "org_member_type", "or": "org_member_type", "r": false, "t": "`$BOOLEAN`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/boards/{id}/memberships", "q": { "exist": ["activity", "board_id", "filter", "member", "member_field", "org_member_type"] }, "r": { "param": { "id": "board_id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "memberships" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /organizations/{id}/memberships/{idMembership}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_membership", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "organization_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": false, "k": "query", "n": "member", "or": "member", "r": false, "t": "`$BOOLEAN`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/organizations/{id}/memberships/{idMembership}", "q": { "exist": ["id", "member", "organization_id"] }, "r": { "param": { "id": "organization_id", "idMembership": "id" } }, "s": [{ "lit": "organizations" }, { "var": "organization_id" }, { "lit": "memberships" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /boards/{id}/memberships/{idMembership}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "board_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_membership", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "fullName, username", "k": "query", "n": "member_field", "or": "member_field", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/boards/{id}/memberships/{idMembership}", "q": { "exist": ["board_id", "id", "member_field", "type"] }, "r": { "param": { "id": "board_id", "idMembership": "id" } }, "s": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "memberships" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.board"], ["$.main.kit.entity.enterprise"], ["$.main.kit.entity.organization"]] }, "key$": "membership", "name__orig": "membership", "Name": "Membership", "name_": "membership", "name-": "membership", "NAME": "MEMBERSHIP", "index$": 40 }, { "active": true, "entity": "membership", "key$": "BasicMembershipFlow", "kind": "basic", "name": "BasicMembershipFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "organization_id": "organization01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "membership_ref01" } }], "index$": 0 }, { "a": true, "d": { "board_id": "board01" }, "i": { "ref": "membership_ref01", "srcdatavar": "membership_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-membership_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "membership_ref01", "srcdatavar": "membership_ref01_data", "suffix": "_dt0" }, "m": { "id": "membership01", "organization_id": "organization01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-membership_ref01" } }], "index$": 2 }] }, 'Membership', { "GET /enterprises/{id}/members/query": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of the enterprise to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "licensed", "in": "query", "description": "When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 1 }, { "name": "deactivated", "in": "query", "description": "When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 2 }, { "name": "collaborator", "in": "query", "description": "When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 3 }, { "name": "managed", "in": "query", "description": "When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.", "required": false, "schema": { "type": "boolean", "default": "none" }, "index$": 4 }, { "name": "admin", "in": "query", "description": "When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 5 }, { "name": "activeSince", "in": "query", "description": "Returns only Trello users active since this date (inclusive).", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 6 }, { "name": "inactiveSince", "in": "query", "description": "Returns only Trello users active since this date (inclusive).", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 7 }, { "name": "search", "in": "query", "description": "Returns members with email address or full name that start with the search value.", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 8 }, { "name": "cursor", "in": "query", "description": "Cursor to return next set of results, use cursor returned in the response to query the next batch.", "required": false, "schema": { "type": "string", "default": "none" }, "index$": 9 }] }, "GET /organizations/{id}/memberships": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or name of the organization", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "filter", "in": "query", "description": "`all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`", "required": false, "style": "form", "explode": false, "schema": { "type": "string", "default": "all", "enum": ["all", "active", "admin", "deactivated", "me", "normal"] }, "index$": 1 }, { "name": "member", "in": "query", "description": "Whether to include the Member objects with the Memberships", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 2 }] }, "GET /boards/{id}/memberships": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the board", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "filter", "in": "query", "description": "One of `admins`, `all`, `none`, `normal`", "required": false, "schema": { "type": "string", "default": "all", "enum": ["admins", "all", "none", "normal"] }, "index$": 1 }, { "name": "activity", "in": "query", "description": "Works for premium organizations only.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 2 }, { "name": "orgMemberType", "in": "query", "description": "Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 3 }, { "name": "member", "in": "query", "description": "Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 4 }, { "name": "member_fields", "in": "query", "description": "Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).", "required": false, "style": "form", "explode": false, "schema": { "type": "string", "enum": ["id"], "default": "fullname,username", "x-ref": "#/components/schemas/MemberFields" }, "index$": 5 }] }, "GET /organizations/{id}/memberships/{idMembership}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID or name of the organization", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idMembership", "in": "path", "description": "The ID of the membership to load", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "member", "in": "query", "description": "Whether to include the Member object in the response", "required": false, "schema": { "type": "boolean", "default": false }, "index$": 2 }] }, "PUT /boards/{id}/memberships/{idMembership}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The id of the board to update", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idMembership", "in": "path", "description": "The id of a membership that should be added to this board.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "type", "in": "query", "description": "One of: admin, normal, observer. Determines the type of member that this membership will be to this board.", "required": true, "schema": { "type": "string", "enum": ["admin", "normal", "observer"] }, "index$": 2 }, { "name": "member_fields", "in": "query", "description": "Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username", "required": false, "explode": false, "style": "form", "schema": { "type": "string", "default": "fullName, username", "enum": ["all", "avatarHash", "bio", "bioData", "confirmed", "fullName", "idPremOrgsAdmin", "initials", "memberType", "products", "status", "url", "username"] }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let membership_ref01_data = Object.values(setup.data.existing.membership)[0];
        // LIST
        const membership_ref01_ent = client.Membership();
        const membership_ref01_match = {};
        membership_ref01_match['organization_id'] = setup.idmap['organization01'];
        const membership_ref01_list = (await membership_ref01_ent.list(membership_ref01_match)).map((e) => e.data());
        // UPDATE
        const membership_ref01_data_up0 = {};
        membership_ref01_data_up0.id = membership_ref01_data.id;
        membership_ref01_data_up0['board_id'] = setup.idmap['board_id'];
        const membership_ref01_resdata_up0 = (await membership_ref01_ent.update(membership_ref01_data_up0)).data();
        (0, node_assert_1.default)(membership_ref01_resdata_up0.id === membership_ref01_data_up0.id);
        // LOAD
        const membership_ref01_match_dt0 = {};
        membership_ref01_match_dt0.id = membership_ref01_data.id;
        const membership_ref01_data_dt0 = (await membership_ref01_ent.load(membership_ref01_match_dt0)).data();
        (0, node_assert_1.default)(membership_ref01_data_dt0.id === membership_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/membership/MembershipTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['membership01', 'membership02', 'membership03', 'board01', 'board02', 'board03', 'enterprise01', 'enterprise02', 'enterprise03', 'organization01', 'organization02', 'organization03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_MEMBERSHIP_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_MEMBERSHIP_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_MEMBERSHIP_ENTID'];
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
//# sourceMappingURL=MembershipEntity.test.js.map