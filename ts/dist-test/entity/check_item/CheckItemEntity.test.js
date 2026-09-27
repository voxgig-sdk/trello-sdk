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
(0, node_test_1.describe)('CheckItemEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('TRELLO_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.TrelloSDK.test();
        const ent = testsdk.CheckItem();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.TRELLO_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'check_item.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 }, "idChecklist": { "a": true, "h": "Id Checklist", "n": "idChecklist", "r": false, "t": "`$STRING`", "key$": "idChecklist", "index$": 1 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 2 }, "nameData": { "a": true, "h": "Name Data", "n": "nameData", "r": false, "t": "`$STRING`", "key$": "nameData", "index$": 3 }, "pos": { "a": true, "h": "Pos", "n": "pos", "r": false, "t": "`$STRING`", "key$": "pos", "index$": 4 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "check_item", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /cards/{id}/checkItem/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "card_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "name,nameData,pos,state,due,dueReminder,idMember", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/cards/{id}/checkItem/{idCheckItem}", "q": { "exist": ["card_id", "field", "id"] }, "r": { "param": { "id": "card_id", "idCheckItem": "id" } }, "s": [{ "lit": "cards" }, { "var": "card_id" }, { "lit": "checkItem" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /checklists/{id}/checkItems", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "checklist_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "name, nameData, pos, state, due, dueReminder, idMember", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "all", "k": "query", "n": "filter", "or": "filter", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/checklists/{id}/checkItems", "q": { "exist": ["checklist_id", "field", "filter"] }, "r": { "param": { "id": "checklist_id" } }, "s": [{ "lit": "checklists" }, { "var": "checklist_id" }, { "lit": "checkItems" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /checklists/{id}/checkItems/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "checklist_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "name, nameData, pos, state, due, dueReminder, idMember", "k": "query", "n": "field", "or": "field", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/checklists/{id}/checkItems/{idCheckItem}", "q": { "exist": ["checklist_id", "field", "id"] }, "r": { "param": { "id": "checklist_id", "idCheckItem": "id" } }, "s": [{ "lit": "checklists" }, { "var": "checklist_id" }, { "lit": "checkItems" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /cards/{id}/checkItem/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "card_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/cards/{id}/checkItem/{idCheckItem}", "q": { "exist": ["card_id", "id"] }, "r": { "param": { "id": "card_id", "idCheckItem": "id" } }, "s": [{ "lit": "cards" }, { "var": "card_id" }, { "lit": "checkItem" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /checklists/{id}/checkItems/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "checklist_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/checklists/{id}/checkItems/{idCheckItem}", "q": { "exist": ["checklist_id", "id"] }, "r": { "param": { "id": "checklist_id", "idCheckItem": "id" } }, "s": [{ "lit": "checklists" }, { "var": "checklist_id" }, { "lit": "checkItems" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /cards/{id}/checkItem/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "card_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "due", "or": "due", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "due_reminder", "or": "due_reminder", "r": false, "t": "`$NUMBER`", "index$": 1 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_checklist", "or": "id_checklist", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "query", "n": "id_member", "or": "id_member", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "k": "query", "n": "pos", "or": "pos", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$STRING`", "index$": 6 }] }, "k": "http", "m": "PUT", "o": "/cards/{id}/checkItem/{idCheckItem}", "q": { "exist": ["card_id", "due", "due_reminder", "id", "id_checklist", "id_member", "name", "pos", "state"] }, "r": { "param": { "id": "card_id", "idCheckItem": "id" } }, "s": [{ "lit": "cards" }, { "var": "card_id" }, { "lit": "checkItem" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "checklist_id", "or": "id_checklist", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id", "or": "id_check_item", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "5abbe4b7ddc1b351ef961414", "k": "param", "n": "id_card", "or": "id_card", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "pos", "or": "pos", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}", "q": { "exist": ["checklist_id", "id", "id_card", "pos"] }, "r": { "param": { "idCard": "id_card", "idCheckItem": "id", "idChecklist": "checklist_id" } }, "s": [{ "lit": "cards" }, { "var": "id_card" }, { "lit": "checklist" }, { "var": "checklist_id" }, { "lit": "checkItem" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.card"], ["$.main.kit.entity.card", "$.main.kit.entity.checklist"]] }, "key$": "check_item", "name__orig": "check_item", "Name": "CheckItem", "name_": "check_item", "name-": "check-item", "NAME": "CHECK_ITEM", "index$": 15 }, { "active": true, "entity": "check_item", "key$": "BasicCheckItemFlow", "kind": "basic", "name": "BasicCheckItemFlow", "param": {}, "step": [{ "a": true, "d": { "checklist_id": "checklist01", "id_card": "id_card01" }, "i": { "ref": "check_item_ref01", "srcdatavar": "check_item_ref01_data", "suffix": "_up0", "textfield": "idChecklist" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-check_item_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "check_item_ref01", "srcdatavar": "check_item_ref01_data", "suffix": "_dt0" }, "m": { "checklist_id": "checklist01", "id": "check_item01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-check_item_ref01" } }], "index$": 1 }] }, 'CheckItem', { "GET /cards/{id}/checkItem/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the Card", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "The ID of the checkitem", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "fields", "in": "query", "description": "`all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`", "required": false, "schema": { "type": "string", "default": "name,nameData,pos,state,due,dueReminder,idMember" }, "index$": 2 }] }, "GET /checklists/{id}/checkItems": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of a checklist.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "filter", "in": "query", "description": "One of: `all`, `none`.", "required": false, "schema": { "type": "string", "default": "all", "enum": ["all", "none"] }, "index$": 1 }, { "name": "fields", "in": "query", "description": "One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.", "required": false, "explode": false, "style": "form", "schema": { "type": "string", "default": "name, nameData, pos, state, due, dueReminder, idMember", "enum": ["all", "name", "nameData", "pos", "state", "type", "due", "dueReminder", "idMember"] }, "index$": 2 }] }, "GET /checklists/{id}/checkItems/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of a checklist.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "ID of the check item to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "fields", "in": "query", "description": "One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.", "required": false, "style": "form", "explode": false, "schema": { "type": "string", "default": "name, nameData, pos, state, due, dueReminder, idMember", "enum": ["all", "name", "nameData", "pos", "state", "type", "due", "dueReminder", "idMember"] }, "index$": 2 }] }, "DELETE /cards/{id}/checkItem/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the Card", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "The ID of the checkitem", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "DELETE /checklists/{id}/checkItems/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "ID of a checklist.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "ID of the check item to retrieve.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }] }, "PUT /cards/{id}/checkItem/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "description": "The ID of the Card", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "The ID of the checkitem", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "name", "in": "query", "description": "The new name for the checklist item", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "state", "in": "query", "description": "One of: `complete`, `incomplete`", "required": false, "schema": { "type": "string", "enum": ["complete", "incomplete"] }, "index$": 3 }, { "name": "idChecklist", "in": "query", "description": "The ID of the checklist this item is in", "required": false, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 4 }, { "name": "pos", "in": "query", "description": "`top`, `bottom`, or a positive float", "required": false, "schema": { "oneOf": [{ "type": "string", "enum": ["top", "bottom"] }, { "type": "number", "format": "float", "example": 1293.5 }], "x-ref": "#/components/schemas/posStringOrNumber" }, "index$": 5 }, { "name": "due", "in": "query", "description": "A due date for the checkitem", "required": false, "schema": { "type": "string", "format": "date" }, "index$": 6 }, { "name": "dueReminder", "in": "query", "description": "A dueReminder for the due date on the checkitem", "required": false, "schema": { "type": "number", "nullable": true }, "index$": 7 }, { "name": "idMember", "in": "query", "description": "The ID of the member to remove from the card", "required": false, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 8 }] }, "PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}": { "protocol": "http", "parameters": [{ "name": "idCard", "in": "path", "description": "The ID of the Card", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 0 }, { "name": "idCheckItem", "in": "path", "description": "The ID of the checklist item to update", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 1 }, { "name": "pos", "in": "query", "description": "`top`, `bottom`, or a positive float", "required": false, "schema": { "oneOf": [{ "type": "string", "enum": ["top", "bottom"] }, { "type": "number", "format": "float", "example": 1293.5 }], "x-ref": "#/components/schemas/posStringOrNumber" }, "index$": 2 }, { "name": "idChecklist", "in": "path", "description": "The ID of the item to update.", "required": true, "schema": { "type": "string", "pattern": "^[0-9a-fA-F]{24}$", "example": "5abbe4b7ddc1b351ef961414", "x-ref": "#/components/schemas/TrelloID" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let check_item_ref01_data = Object.values(setup.data.existing.check_item)[0];
        // UPDATE
        const check_item_ref01_ent = client.CheckItem();
        const check_item_ref01_data_up0 = {};
        check_item_ref01_data_up0.id = check_item_ref01_data.id;
        check_item_ref01_data_up0['checklist_id'] = setup.idmap['checklist_id'];
        check_item_ref01_data_up0['id_card'] = setup.idmap['id_card'];
        const check_item_ref01_markdef_up0 = { name: 'idChecklist', value: 'Mark01-check_item_ref01_' + setup.now };
        check_item_ref01_data_up0[check_item_ref01_markdef_up0.name] = check_item_ref01_markdef_up0.value;
        const check_item_ref01_resdata_up0 = (await check_item_ref01_ent.update(check_item_ref01_data_up0)).data();
        (0, node_assert_1.default)(check_item_ref01_resdata_up0.id === check_item_ref01_data_up0.id);
        (0, node_assert_1.default)(check_item_ref01_resdata_up0[check_item_ref01_markdef_up0.name] === check_item_ref01_markdef_up0.value);
        // LOAD
        const check_item_ref01_match_dt0 = {};
        check_item_ref01_match_dt0.id = check_item_ref01_data.id;
        const check_item_ref01_data_dt0 = (await check_item_ref01_ent.load(check_item_ref01_match_dt0)).data();
        (0, node_assert_1.default)(check_item_ref01_data_dt0.id === check_item_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/check_item/CheckItemTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.TrelloSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['check_item01', 'check_item02', 'check_item03', 'card01', 'card02', 'card03', 'checklist01', 'checklist02', 'checklist03', 'id_card01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'TRELLO_TEST_CHECK_ITEM_ENTID': idmap,
        'TRELLO_TEST_LIVE': 'FALSE',
        'TRELLO_TEST_EXPLAIN': 'FALSE',
        'TRELLO_APIKEY': '',
    });
    idmap = env['TRELLO_TEST_CHECK_ITEM_ENTID'];
    const live = 'TRUE' === env.TRELLO_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['TRELLO_TEST_CHECK_ITEM_ENTID'];
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
//# sourceMappingURL=CheckItemEntity.test.js.map