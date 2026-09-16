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
(0, node_test_1.describe)('OptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Option();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'option.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "option", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "custom_field_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_custom_field_option", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /customFields/{id}/options/{idCustomFieldOption}", "json": "{\"operationId\":\"get-customfields-options-idcustomfieldoption\",\"parameters\":[{\"description\":\"ID of the customfielditem.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the customfieldoption to retrieve.\",\"in\":\"path\",\"name\":\"idCustomFieldOption\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/customFields/{id}/options/{idCustomFieldOption}", "rename": { "param": { "id": "custom_field_id", "idCustomFieldOption": "id" } }, "segments": [{ "lit": "customFields" }, { "var": "custom_field_id" }, { "lit": "options" }, { "var": "id" }], "select": { "exist": ["custom_field_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "custom_field_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /customFields/{id}/options", "json": "{\"operationId\":\"post-customfields-id-options\",\"parameters\":[{\"description\":\"ID of the customfield.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/customFields/{id}/options", "rename": { "param": { "id": "custom_field_id" } }, "segments": [{ "lit": "customFields" }, { "var": "custom_field_id" }, { "lit": "options" }], "select": { "exist": ["custom_field_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "custom_field_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_custom_field_option", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /customFields/{id}/options/{idCustomFieldOption}", "json": "{\"operationId\":\"delete-customfields-options-idcustomfieldoption\",\"parameters\":[{\"description\":\"ID of the customfielditem.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the customfieldoption to retrieve.\",\"in\":\"path\",\"name\":\"idCustomFieldOption\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/customFields/{id}/options/{idCustomFieldOption}", "rename": { "param": { "id": "custom_field_id", "idCustomFieldOption": "id" } }, "segments": [{ "lit": "customFields" }, { "var": "custom_field_id" }, { "lit": "options" }, { "var": "id" }], "select": { "exist": ["custom_field_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["custom_field"]] }, "key$": "option", "name__orig": "option", "Name": "Option", "name_": "option", "name-": "option", "NAME": "OPTION", "index$": 49 }, { "active": true, "entity": "option", "key$": "BasicOptionFlow", "kind": "basic", "name": "BasicOptionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "option_ref01", "srcdatavar": "option_ref01_data", "suffix": "_dt0" }, "match": { "id": "option01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-option_ref01" } }], "index$": 0 }] }, 'Option');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let option_ref01_data = Object.values(setup.data.existing.option)[0];
        // LOAD
        const option_ref01_ent = client.Option();
        const option_ref01_match_dt0 = {};
        option_ref01_match_dt0.id = option_ref01_data.id;
        const option_ref01_data_dt0 = (await option_ref01_ent.load(option_ref01_match_dt0)).data();
        (0, node_assert_1.default)(option_ref01_data_dt0.id === option_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/option/OptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['option01', 'option02', 'option03', 'custom_field01', 'custom_field02', 'custom_field03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_OPTION_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_OPTION_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_OPTION_ENTID'];
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
//# sourceMappingURL=OptionEntity.test.js.map