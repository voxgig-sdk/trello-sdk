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
(0, node_test_1.describe)('ReactionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Reaction();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'reaction.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "reaction", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id_action", "orig": "id_action", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": true, "kind": "query", "name": "emoji", "orig": "emoji", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": true, "kind": "query", "name": "member", "orig": "member", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /actions/{idAction}/reactions/{id}", "json": "{\"operationId\":\"get-actions-idaction-reactions-id\",\"parameters\":[{\"description\":\"The ID of the Action\",\"in\":\"path\",\"name\":\"idAction\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the reaction\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)\",\"in\":\"query\",\"name\":\"member\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Whether to load the emoji as a nested resource.\",\"in\":\"query\",\"name\":\"emoji\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/actions/{idAction}/reactions/{id}", "rename": { "param": { "idAction": "id_action" } }, "segments": [{ "lit": "actions" }, { "var": "id_action" }, { "lit": "reactions" }, { "var": "id" }], "select": { "exist": ["emoji", "id", "id_action", "member"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id_action", "orig": "id_action", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": true, "kind": "query", "name": "emoji", "orig": "emoji", "reqd": false, "type": "`$BOOLEAN`", "index$": 0 }, { "active": true, "example": true, "kind": "query", "name": "member", "orig": "member", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /actions/{idAction}/reactions", "json": "{\"operationId\":\"get-actions-idaction-reactions\",\"parameters\":[{\"description\":\"The ID of the action\",\"in\":\"path\",\"name\":\"idAction\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)\",\"in\":\"query\",\"name\":\"member\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"Whether to load the emoji as a nested resource.\",\"in\":\"query\",\"name\":\"emoji\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/actions/{idAction}/reactions", "rename": { "param": { "idAction": "id_action" } }, "segments": [{ "lit": "actions" }, { "var": "id_action" }, { "lit": "reactions" }], "select": { "exist": ["emoji", "id_action", "member"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id_action", "orig": "id_action", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /actions/{idAction}/reactions/{id}", "json": "{\"operationId\":\"delete-actions-idaction-reactions-id\",\"parameters\":[{\"description\":\"The ID of the Action\",\"in\":\"path\",\"name\":\"idAction\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the reaction\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/actions/{idAction}/reactions/{id}", "rename": { "param": { "idAction": "id_action" } }, "segments": [{ "lit": "actions" }, { "var": "id_action" }, { "lit": "reactions" }, { "var": "id" }], "select": { "exist": ["id", "id_action"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["action"]] }, "key$": "reaction", "name__orig": "reaction", "Name": "Reaction", "name_": "reaction", "name-": "reaction", "NAME": "REACTION", "index$": 56 }, { "active": true, "entity": "reaction", "key$": "BasicReactionFlow", "kind": "basic", "name": "BasicReactionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "reaction_ref01", "srcdatavar": "reaction_ref01_data", "suffix": "_dt0" }, "match": { "id": "reaction01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-reaction_ref01" } }], "index$": 0 }] }, 'Reaction');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let reaction_ref01_data = Object.values(setup.data.existing.reaction)[0];
        // LOAD
        const reaction_ref01_ent = client.Reaction();
        const reaction_ref01_match_dt0 = {};
        reaction_ref01_match_dt0.id = reaction_ref01_data.id;
        const reaction_ref01_data_dt0 = (await reaction_ref01_ent.load(reaction_ref01_match_dt0)).data();
        (0, node_assert_1.default)(reaction_ref01_data_dt0.id === reaction_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/reaction/ReactionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['reaction01', 'reaction02', 'reaction03', 'action01', 'action02', 'action03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_REACTION_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_REACTION_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_REACTION_ENTID'];
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
//# sourceMappingURL=ReactionEntity.test.js.map