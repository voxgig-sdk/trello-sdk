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
(0, node_test_1.describe)('EmojiEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Emoji();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'emoji.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "category", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "keywords", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "native", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "sheetX", "req": false, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "sheetY", "req": false, "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "shortName", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "shortNames", "req": false, "type": "`$ARRAY`", "index$": 7 }, { "active": true, "name": "text", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "texts", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "tts", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "unified", "req": false, "type": "`$STRING`", "index$": 11 }], "name": "emoji", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "locale", "orig": "locale", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": false, "kind": "query", "name": "spritesheet", "orig": "spritesheet", "reqd": false, "type": "`$BOOLEAN`", "index$": 1 }] }, "contract": { "id": "GET /emoji", "json": "{\"operationId\":\"emoji\",\"parameters\":[{\"description\":\"The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.\",\"in\":\"query\",\"name\":\"locale\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"`true` to return spritesheet URLs in the response\",\"in\":\"query\",\"name\":\"spritesheets\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"trello\":{\"items\":{\"properties\":{\"category\":{\"example\":\"Smileys & People\",\"type\":\"string\"},\"keywords\":{\"items\":{\"example\":\"face\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"example\":\"GRINNING FACE\",\"type\":\"string\"},\"native\":{\"example\":\"😀\",\"type\":\"string\"},\"sheetX\":{\"example\":30,\"type\":\"number\"},\"sheetY\":{\"example\":24,\"type\":\"number\"},\"shortName\":{\"example\":\"grinning\",\"type\":\"string\"},\"shortNames\":{\"items\":{\"example\":\"grinning\\\"\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"example\":\":)\",\"type\":\"string\"},\"texts\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"tts\":{\"example\":\"grinning face\",\"type\":\"string\"},\"unified\":{\"example\":\"1F600\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/emoji", "segments": [{ "lit": "emoji" }], "select": { "exist": ["locale", "spritesheet"] }, "transform": { "req": "`reqdata`", "res": "`body.trello`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "emoji", "name__orig": "emoji", "Name": "Emoji", "name_": "emoji", "name-": "emoji", "NAME": "EMOJI", "index$": 25 }, { "active": true, "entity": "emoji", "key$": "BasicEmojiFlow", "kind": "basic", "name": "BasicEmojiFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "emoji_ref01" } }], "index$": 0 }] }, 'Emoji');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let emoji_ref01_data = Object.values(setup.data.existing.emoji)[0];
        // LIST
        const emoji_ref01_ent = client.Emoji();
        const emoji_ref01_match = {};
        const emoji_ref01_list = (await emoji_ref01_ent.list(emoji_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/emoji/EmojiTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['emoji01', 'emoji02', 'emoji03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_EMOJI_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_EMOJI_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_EMOJI_ENTID'];
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
//# sourceMappingURL=EmojiEntity.test.js.map