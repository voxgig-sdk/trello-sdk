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
(0, node_test_1.describe)('ChecklistEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.Checklist();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['create', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'checklist.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "checklist", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "example": false, "kind": "query", "name": "checked", "orig": "checked", "reqd": false, "type": "`$BOOLEAN`" }, { "active": true, "kind": "query", "name": "due", "orig": "due", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "query", "name": "due_reminder", "orig": "due_reminder", "reqd": false, "type": "`$NUMBER`" }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "query", "name": "id_member", "orig": "id_member", "reqd": false, "type": "`$STRING`" }, { "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": true, "type": "`$STRING`" }, { "active": true, "example": "bottom", "kind": "query", "name": "pos", "orig": "pos", "reqd": false, "type": "`$STRING`" }] }, "contract": { "id": "POST /checklists/{id}/checkItems", "json": "{\"operationId\":\"post-checklists-id-checkitems\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The name of the new check item on the checklist. Should be a string of length 1 to 16384.\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"maxLength\":16384,\"minLength\":1,\"type\":\"string\"}},{\"description\":\"The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"default\":\"bottom\",\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}],\"type\":\"string\"}},{\"description\":\"Determines whether the check item is already checked when created.\",\"in\":\"query\",\"name\":\"checked\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"A due date for the checkitem\",\"in\":\"query\",\"name\":\"due\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"A dueReminder for the due date on the checkitem\",\"in\":\"query\",\"name\":\"dueReminder\",\"required\":false,\"schema\":{\"nullable\":true,\"type\":\"number\"}},{\"description\":\"An ID of a member resource.\",\"in\":\"query\",\"name\":\"idMember\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/checklists/{id}/checkItems", "segments": [{ "lit": "checklists" }, { "var": "id" }, { "lit": "checkItems" }], "select": { "$action": "check_item", "exist": ["checked", "due", "due_reminder", "id", "id_member", "name", "pos"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "query", "name": "id_card", "orig": "id_card", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "query", "name": "id_checklist_source", "orig": "id_checklist_source", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "pos", "orig": "pos", "reqd": false, "type": "`$ANY`", "index$": 3 }] }, "contract": { "id": "POST /checklists", "json": "{\"operationId\":\"post-checklists\",\"parameters\":[{\"description\":\"The ID of the Card that the checklist should be added to.\",\"in\":\"query\",\"name\":\"idCard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The name of the checklist. Should be a string of length 1 to 16384.\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"maxLength\":16384,\"minLength\":1,\"type\":\"string\"}},{\"description\":\"The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}},{\"description\":\"The ID of a checklist to copy into the new checklist.\",\"in\":\"query\",\"name\":\"idChecklistSource\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/checklists", "segments": [{ "lit": "checklists" }], "select": { "exist": ["id_card", "id_checklist_source", "name", "pos"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "none", "kind": "query", "name": "card", "orig": "card", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "all", "kind": "query", "name": "check_item", "orig": "check_item", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "name, nameData, pos, state, due, dueReminder, idMember", "kind": "query", "name": "check_item_field", "orig": "check_item_field", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "all", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /checklists/{id}", "json": "{\"operationId\":\"get-checklists-id\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).\",\"in\":\"query\",\"name\":\"cards\",\"required\":false,\"schema\":{\"default\":\"none\",\"enum\":[\"all\",\"closed\",\"none\",\"open\",\"visible\"],\"type\":\"string\"}},{\"description\":\"The check items on the list to return. One of: `all`, `none`.\",\"in\":\"query\",\"name\":\"checkItems\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"none\"],\"type\":\"string\"}},{\"description\":\"The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`\",\"in\":\"query\",\"name\":\"checkItem_fields\",\"required\":false,\"schema\":{\"default\":\"name, nameData, pos, state, due, dueReminder, idMember\",\"enum\":[\"all\",\"name\",\"nameData\",\"pos\",\"state\",\"type\",\"due\",\"dueReminder\",\"idMember\"],\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/checklists/{id}", "segments": [{ "lit": "checklists" }, { "var": "id" }], "select": { "exist": ["card", "check_item", "check_item_field", "field", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "card_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "all", "kind": "query", "name": "check_item", "orig": "check_item", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "name,nameData,pos,state,due,dueReminder,idMember", "kind": "query", "name": "check_item_field", "orig": "check_item_field", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "all", "kind": "query", "name": "field", "orig": "field", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "all", "kind": "query", "name": "filter", "orig": "filter", "reqd": false, "type": "`$STRING`", "index$": 3 }] }, "contract": { "id": "GET /cards/{id}/checklists", "json": "{\"operationId\":\"get-cards-id-checklists\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or `none`\",\"in\":\"query\",\"name\":\"checkItems\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"none\"],\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`\",\"explode\":false,\"in\":\"query\",\"name\":\"checkItem_fields\",\"required\":false,\"schema\":{\"default\":\"name,nameData,pos,state,due,dueReminder,idMember\",\"enum\":[\"name\",\"nameData\",\"pos\",\"state\",\"type\",\"due\",\"dueReminder\",\"idMember\"],\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"`all` or `none`\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"none\"],\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of: `idBoard,idCard,name,pos`\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"name\",\"nameData\",\"pos\",\"state\",\"type\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/cards/{id}/checklists", "rename": { "param": { "id": "card_id" } }, "segments": [{ "lit": "cards" }, { "var": "card_id" }, { "lit": "checklists" }], "select": { "exist": ["card_id", "check_item", "check_item_field", "field", "filter"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "field", "orig": "field", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /checklists/{id}/{field}", "json": "{\"operationId\":\"get-checklists-id-field\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Field to update.\",\"in\":\"path\",\"name\":\"field\",\"required\":true,\"schema\":{\"enum\":[\"name\",\"pos\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/checklists/{id}/{field}", "segments": [{ "lit": "checklists" }, { "var": "id" }, { "var": "field" }], "select": { "exist": ["field", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "board_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /boards/{id}/checklists", "json": "{\"operationId\":\"boards-id-checklists\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/boards/{id}/checklists", "rename": { "param": { "id": "board_id" } }, "segments": [{ "lit": "boards" }, { "var": "board_id" }, { "lit": "checklists" }], "select": { "exist": ["board_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "card_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id_checklist", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /cards/{id}/checklists/{idChecklist}", "json": "{\"operationId\":\"delete-cards-id-checklists-idchecklist\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the checklist to delete\",\"in\":\"path\",\"name\":\"idChecklist\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/cards/{id}/checklists/{idChecklist}", "rename": { "param": { "id": "card_id", "idChecklist": "id" } }, "segments": [{ "lit": "cards" }, { "var": "card_id" }, { "lit": "checklists" }, { "var": "id" }], "select": { "exist": ["card_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "DELETE /checklists/{id}", "json": "{\"operationId\":\"delete-checklists-id\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/checklists/{id}", "segments": [{ "lit": "checklists" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "field", "orig": "field", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "value", "orig": "value", "reqd": true, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "PUT /checklists/{id}/{field}", "json": "{\"operationId\":\"put-checklists-id-field\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Field to update.\",\"in\":\"path\",\"name\":\"field\",\"required\":true,\"schema\":{\"enum\":[\"name\",\"pos\"],\"type\":\"string\"}},{\"description\":\"The value to change the checklist name to. Should be a string of length 1 to 16384.\",\"in\":\"query\",\"name\":\"value\",\"required\":true,\"schema\":{\"oneOf\":[{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/checklists/{id}/{field}", "segments": [{ "lit": "checklists" }, { "var": "id" }, { "var": "field" }], "select": { "exist": ["field", "id", "value"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "5abbe4b7ddc1b351ef961414", "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "pos", "orig": "pos", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "PUT /checklists/{id}", "json": "{\"operationId\":\"put-checlists-id\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Name of the new checklist being created. Should be length of 1 to 16384.\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/checklists/{id}", "segments": [{ "lit": "checklists" }, { "var": "id" }], "select": { "exist": ["id", "name", "pos"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["board"], ["card"]] }, "key$": "checklist", "name__orig": "checklist", "Name": "Checklist", "name_": "checklist", "name-": "checklist", "NAME": "CHECKLIST", "index$": 17 }, { "active": true, "entity": "checklist", "key$": "BasicChecklistFlow", "kind": "basic", "name": "BasicChecklistFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "checklist_ref01" }, "match": { "card_id": "card01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "checklist_ref01", "srcdatavar": "checklist_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-checklist_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "checklist_ref01", "srcdatavar": "checklist_ref01_data", "suffix": "_dt0" }, "match": { "id": "checklist01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-checklist_ref01" } }], "index$": 2 }, { "active": true, "data": {}, "input": { "ref": "checklist_ref01", "suffix": "_rm0" }, "match": { "id": "checklist01" }, "op": "remove", "spec": [], "valid": [], "index$": 3 }] }, 'Checklist');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const checklist_ref01_ent = client.Checklist();
        let checklist_ref01_data = setup.data.new.checklist['checklist_ref01'];
        checklist_ref01_data['card_id'] = setup.idmap['card01'];
        checklist_ref01_data = (await checklist_ref01_ent.create(checklist_ref01_data)).data();
        (0, node_assert_1.default)(null != checklist_ref01_data.id);
        // UPDATE
        const checklist_ref01_data_up0 = {};
        checklist_ref01_data_up0.id = checklist_ref01_data.id;
        const checklist_ref01_resdata_up0 = (await checklist_ref01_ent.update(checklist_ref01_data_up0)).data();
        (0, node_assert_1.default)(checklist_ref01_resdata_up0.id === checklist_ref01_data_up0.id);
        // LOAD
        const checklist_ref01_match_dt0 = {};
        checklist_ref01_match_dt0.id = checklist_ref01_data.id;
        const checklist_ref01_data_dt0 = (await checklist_ref01_ent.load(checklist_ref01_match_dt0)).data();
        (0, node_assert_1.default)(checklist_ref01_data_dt0.id === checklist_ref01_data.id);
        // REMOVE
        const checklist_ref01_match_rm0 = { id: checklist_ref01_data.id };
        await checklist_ref01_ent.remove(checklist_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/checklist/ChecklistTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['checklist01', 'checklist02', 'checklist03', 'board01', 'board02', 'board03', 'card01', 'card02', 'card03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_CHECKLIST_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_CHECKLIST_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_CHECKLIST_ENTID'];
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
//# sourceMappingURL=ChecklistEntity.test.js.map