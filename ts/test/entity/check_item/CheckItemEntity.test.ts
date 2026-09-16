

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TrelloSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CheckItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CheckItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'check_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"idChecklist","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"nameData","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"pos","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"check_item","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"name,nameData,pos,state,due,dueReminder,idMember","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/checkItem/{idCheckItem}","json":"{\"operationId\":\"get-cards-id-checkitem-idcheckitem\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the checkitem\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"name,nameData,pos,state,due,dueReminder,idMember\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/checkItem/{idCheckItem}","rename":{"param":{"id":"card_id","idCheckItem":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"checkItem"},{"var":"id"}],"select":{"exist":["card_id","field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"checklist_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"name, nameData, pos, state, due, dueReminder, idMember","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"all","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /checklists/{id}/checkItems","json":"{\"operationId\":\"get-checklists-id-checkitems\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `all`, `none`.\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"none\"],\"type\":\"string\"}},{\"description\":\"One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"name, nameData, pos, state, due, dueReminder, idMember\",\"enum\":[\"all\",\"name\",\"nameData\",\"pos\",\"state\",\"type\",\"due\",\"dueReminder\",\"idMember\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/checklists/{id}/checkItems","rename":{"param":{"id":"checklist_id"}},"segments":[{"lit":"checklists"},{"var":"checklist_id"},{"lit":"checkItems"}],"select":{"exist":["checklist_id","field","filter"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"checklist_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"name, nameData, pos, state, due, dueReminder, idMember","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /checklists/{id}/checkItems/{idCheckItem}","json":"{\"operationId\":\"get-checklists-id-checkitems-idcheckitem\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the check item to retrieve.\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"name, nameData, pos, state, due, dueReminder, idMember\",\"enum\":[\"all\",\"name\",\"nameData\",\"pos\",\"state\",\"type\",\"due\",\"dueReminder\",\"idMember\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/checklists/{id}/checkItems/{idCheckItem}","rename":{"param":{"id":"checklist_id","idCheckItem":"id"}},"segments":[{"lit":"checklists"},{"var":"checklist_id"},{"lit":"checkItems"},{"var":"id"}],"select":{"exist":["checklist_id","field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /cards/{id}/checkItem/{idCheckItem}","json":"{\"operationId\":\"delete-cards-id-checkitem-idcheckitem\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the checkitem\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/cards/{id}/checkItem/{idCheckItem}","rename":{"param":{"id":"card_id","idCheckItem":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"checkItem"},{"var":"id"}],"select":{"exist":["card_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"checklist_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /checklists/{id}/checkItems/{idCheckItem}","json":"{\"operationId\":\"delete-checklists-id-checkitems-idcheckitem\",\"parameters\":[{\"description\":\"ID of a checklist.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the check item to retrieve.\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/checklists/{id}/checkItems/{idCheckItem}","rename":{"param":{"id":"checklist_id","idCheckItem":"id"}},"segments":[{"lit":"checklists"},{"var":"checklist_id"},{"lit":"checkItems"},{"var":"id"}],"select":{"exist":["checklist_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"due","orig":"due","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"due_reminder","orig":"due_reminder","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_checklist","orig":"id_checklist","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_member","orig":"id_member","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"kind":"query","name":"state","orig":"state","reqd":false,"type":"`$STRING`","index$":6}]},"contract":{"id":"PUT /cards/{id}/checkItem/{idCheckItem}","json":"{\"operationId\":\"put-cards-id-checkitem-idcheckitem\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the checkitem\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The new name for the checklist item\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"One of: `complete`, `incomplete`\",\"in\":\"query\",\"name\":\"state\",\"required\":false,\"schema\":{\"enum\":[\"complete\",\"incomplete\"],\"type\":\"string\"}},{\"description\":\"The ID of the checklist this item is in\",\"in\":\"query\",\"name\":\"idChecklist\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`top`, `bottom`, or a positive float\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}},{\"description\":\"A due date for the checkitem\",\"in\":\"query\",\"name\":\"due\",\"required\":false,\"schema\":{\"format\":\"date\",\"type\":\"string\"}},{\"description\":\"A dueReminder for the due date on the checkitem\",\"in\":\"query\",\"name\":\"dueReminder\",\"required\":false,\"schema\":{\"nullable\":true,\"type\":\"number\"}},{\"description\":\"The ID of the member to remove from the card\",\"in\":\"query\",\"name\":\"idMember\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/cards/{id}/checkItem/{idCheckItem}","rename":{"param":{"id":"card_id","idCheckItem":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"checkItem"},{"var":"id"}],"select":{"exist":["card_id","due","due_reminder","id","id_checklist","id_member","name","pos","state"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"checklist_id","orig":"id_checklist","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_check_item","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id_card","orig":"id_card","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}","json":"{\"operationId\":\"put-cards-idcard-checklist-idchecklist-checkitem-idcheckitem\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"idCard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the checklist item to update\",\"in\":\"path\",\"name\":\"idCheckItem\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`top`, `bottom`, or a positive float\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}},{\"description\":\"The ID of the item to update.\",\"in\":\"path\",\"name\":\"idChecklist\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5dc9b509f02f4314edc4303a\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idChecklist\":{\"example\":\"5dc9b507756e182c76007621\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"nameData\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"pos\":{\"example\":1673,\"type\":\"string\"},\"state\":{\"enum\":[\"complete\",\"incomplete\"],\"example\":\"incomplete\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}","rename":{"param":{"idCard":"id_card","idCheckItem":"id","idChecklist":"checklist_id"}},"segments":[{"lit":"cards"},{"var":"id_card"},{"lit":"checklist"},{"var":"checklist_id"},{"lit":"checkItem"},{"var":"id"}],"select":{"exist":["checklist_id","id","id_card","pos"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["card"],["card","checklist"]]},"key$":"check_item","name__orig":"check_item","Name":"CheckItem","name_":"check_item","name-":"check-item","NAME":"CHECK_ITEM","index$":16}, {"active":true,"entity":"check_item","key$":"BasicCheckItemFlow","kind":"basic","name":"BasicCheckItemFlow","param":{},"step":[{"active":true,"data":{"checklist_id":"checklist01","id_card":"id_card01"},"input":{"ref":"check_item_ref01","srcdatavar":"check_item_ref01_data","suffix":"_up0","textfield":"idChecklist"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-check_item_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"check_item_ref01","srcdatavar":"check_item_ref01_data","suffix":"_dt0"},"match":{"checklist_id":"checklist01","id":"check_item01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-check_item_ref01"}}],"index$":1}]}, 'CheckItem')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let check_item_ref01_data = Object.values(setup.data.existing.check_item)[0] as any

    // UPDATE
    const check_item_ref01_ent = client.CheckItem()
    const check_item_ref01_data_up0: any = {}
    check_item_ref01_data_up0.id = check_item_ref01_data.id
    check_item_ref01_data_up0 ['checklist_id'] = setup.idmap['checklist_id']
    check_item_ref01_data_up0 ['id_card'] = setup.idmap['id_card']

    const check_item_ref01_markdef_up0 = { name: 'idChecklist', value: 'Mark01-check_item_ref01_' + setup.now }
    ;(check_item_ref01_data_up0 as any)[check_item_ref01_markdef_up0.name] = check_item_ref01_markdef_up0.value

    const check_item_ref01_resdata_up0 = (await check_item_ref01_ent.update(check_item_ref01_data_up0)).data()
    assert(check_item_ref01_resdata_up0.id === check_item_ref01_data_up0.id)

    assert((check_item_ref01_resdata_up0 as any)[check_item_ref01_markdef_up0.name] === check_item_ref01_markdef_up0.value)


    // LOAD
    const check_item_ref01_match_dt0: any = {}
    check_item_ref01_match_dt0.id = check_item_ref01_data.id
    const check_item_ref01_data_dt0 = (await check_item_ref01_ent.load(check_item_ref01_match_dt0)).data()
    assert(check_item_ref01_data_dt0.id === check_item_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/check_item/CheckItemTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = TrelloSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['check_item01','check_item02','check_item03','card01','card02','card03','card01','card02','card03','checklist01','checklist02','checklist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CHECK_ITEM_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CHECK_ITEM_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CHECK_ITEM_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TrelloSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
