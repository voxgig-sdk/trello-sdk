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
(0, node_test_1.describe)('PluginListingEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.PluginListing();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'plugin_listing.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "short": "The description to show for the given locale", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "locale", "req": false, "short": "The locale that this listing should be displayed for.", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": false, "short": "The name to use for the given locale.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "overview", "req": false, "short": "The overview to show for the given locale.", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "plugin_listing", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id_plugin", "orig": "id_plugin", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /plugins/{idPlugin}/listing", "json": "{\"operationId\":\"post-plugins-idplugin-listing\",\"parameters\":[{\"description\":\"The ID of the Power-Up for which you are creating a new listing.\",\"in\":\"path\",\"name\":\"idPlugin\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"The description to show for the given locale\",\"type\":\"string\"},\"locale\":{\"description\":\"The locale that this listing should be displayed for.\",\"type\":\"string\"},\"name\":{\"description\":\"The name to use for the given locale.\",\"type\":\"string\"},\"overview\":{\"description\":\"The overview to show for the given locale.\",\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"example\":\"The [Glitch](https://glitch.com) Power-Up allows you to...\",\"type\":\"string\"},\"id\":{\"example\":\"5a7cd2f8f99c517f58da1579\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"locale\":{\"example\":\"en-US\",\"type\":\"string\"},\"name\":{\"example\":\"Attachment Section Example\",\"type\":\"string\"},\"overview\":{\"example\":\"\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/plugins/{idPlugin}/listing", "rename": { "param": { "idPlugin": "id_plugin" } }, "segments": [{ "lit": "plugins" }, { "var": "id_plugin" }, { "lit": "listing" }], "select": { "exist": ["id_plugin"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_listing", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id_plugin", "orig": "id_plugin", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "PUT /plugins/{idPlugin}/listings/{idListing}", "json": "{\"operationId\":\"put-plugins-idplugin-listings-idlisting\",\"parameters\":[{\"description\":\"The ID of the Power-Up whose listing is being updated.\",\"in\":\"path\",\"name\":\"idPlugin\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the existing listing for the Power-Up that is being updated.\",\"in\":\"path\",\"name\":\"idListing\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"description\":\"The description to show for the given locale\",\"type\":\"string\"},\"locale\":{\"description\":\"The locale that this listing should be displayed for.\",\"type\":\"string\"},\"name\":{\"description\":\"The name to use for the given locale.\",\"type\":\"string\"},\"overview\":{\"description\":\"The overview to show for the given locale.\",\"type\":\"string\"}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"description\":{\"example\":\"The [Glitch](https://glitch.com) Power-Up allows you to...\",\"type\":\"string\"},\"id\":{\"example\":\"5a7cd2f8f99c517f58da1579\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"locale\":{\"example\":\"en-US\",\"type\":\"string\"},\"name\":{\"example\":\"Attachment Section Example\",\"type\":\"string\"},\"overview\":{\"example\":\"\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/plugins/{idPlugin}/listings/{idListing}", "rename": { "param": { "idListing": "id", "idPlugin": "id_plugin" } }, "segments": [{ "lit": "plugins" }, { "var": "id_plugin" }, { "lit": "listings" }, { "var": "id" }], "select": { "exist": ["id", "id_plugin"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["plugin"]] }, "key$": "plugin_listing", "name__orig": "plugin_listing", "Name": "PluginListing", "name_": "plugin_listing", "name-": "plugin-listing", "NAME": "PLUGIN_LISTING", "index$": 55 }, { "active": true, "entity": "plugin_listing", "key$": "BasicPluginListingFlow", "kind": "basic", "name": "BasicPluginListingFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "plugin_listing_ref01" }, "match": { "id_plugin": "id_plugin01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": { "id_plugin": "id_plugin01" }, "input": { "ref": "plugin_listing_ref01", "srcdatavar": "plugin_listing_ref01_data", "suffix": "_up0", "textfield": "description" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-plugin_listing_ref01" } }], "valid": [], "index$": 1 }] }, 'PluginListing');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const plugin_listing_ref01_ent = client.PluginListing();
        let plugin_listing_ref01_data = setup.data.new.plugin_listing['plugin_listing_ref01'];
        plugin_listing_ref01_data['id_plugin'] = setup.idmap['id_plugin01'];
        plugin_listing_ref01_data = (await plugin_listing_ref01_ent.create(plugin_listing_ref01_data)).data();
        (0, node_assert_1.default)(null != plugin_listing_ref01_data.id);
        // UPDATE
        const plugin_listing_ref01_data_up0 = {};
        plugin_listing_ref01_data_up0.id = plugin_listing_ref01_data.id;
        plugin_listing_ref01_data_up0['id_plugin'] = setup.idmap['id_plugin'];
        const plugin_listing_ref01_markdef_up0 = { name: 'description', value: 'Mark01-plugin_listing_ref01_' + setup.now };
        plugin_listing_ref01_data_up0[plugin_listing_ref01_markdef_up0.name] = plugin_listing_ref01_markdef_up0.value;
        const plugin_listing_ref01_resdata_up0 = (await plugin_listing_ref01_ent.update(plugin_listing_ref01_data_up0)).data();
        (0, node_assert_1.default)(plugin_listing_ref01_resdata_up0.id === plugin_listing_ref01_data_up0.id);
        (0, node_assert_1.default)(plugin_listing_ref01_resdata_up0[plugin_listing_ref01_markdef_up0.name] === plugin_listing_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/plugin_listing/PluginListingTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['plugin_listing01', 'plugin_listing02', 'plugin_listing03', 'plugin01', 'plugin02', 'plugin03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_PLUGIN_LISTING_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_PLUGIN_LISTING_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_PLUGIN_LISTING_ENTID'];
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
//# sourceMappingURL=PluginListingEntity.test.js.map