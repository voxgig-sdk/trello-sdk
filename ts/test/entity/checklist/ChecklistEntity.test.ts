

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ChecklistEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Checklist()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'checklist.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"checklist","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /checklists/{id}/checkItems","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"checked","or":"checked","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"due","or":"due","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"due_reminder","or":"due_reminder","r":false,"t":"`$NUMBER`","index$":2},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_member","or":"id_member","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"name","or":"name","r":true,"t":"`$STRING`","index$":4},{"a":true,"ex":"bottom","k":"query","n":"pos","or":"pos","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"POST","o":"/checklists/{id}/checkItems","q":{"$action":"check_item","exist":["checked","due","due_reminder","id","id_member","name","pos"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"},{"lit":"checkItems"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /checklists","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_card","or":"id_card","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_checklist_source","or":"id_checklist_source","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"pos","or":"pos","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"POST","o":"/checklists","q":{"exist":["id_card","id_checklist_source","name","pos"]},"r":{},"s":[{"lit":"checklists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /checklists/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"none","k":"query","n":"card","or":"card","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"all","k":"query","n":"check_item","or":"check_item","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"name, nameData, pos, state, due, dueReminder, idMember","k":"query","n":"check_item_field","or":"check_item_field","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/checklists/{id}","q":{"exist":["card","check_item","check_item_field","field","id"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /cards/{id}/checklists","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"all","k":"query","n":"check_item","or":"check_item","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"name,nameData,pos,state,due,dueReminder,idMember","k":"query","n":"check_item_field","or":"check_item_field","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"all","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/cards/{id}/checklists","q":{"exist":["card_id","check_item","check_item_field","field","filter"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"checklists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /checklists/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/checklists/{id}/{field}","q":{"exist":["field","id"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /boards/{id}/checklists","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards/{id}/checklists","q":{"exist":["board_id"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"checklists"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /cards/{id}/checklists/{idChecklist}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_checklist","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/cards/{id}/checklists/{idChecklist}","q":{"exist":["card_id","id"]},"r":{"param":{"id":"card_id","idChecklist":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"checklists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /checklists/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/checklists/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /checklists/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"value","or":"value","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"PUT","o":"/checklists/{id}/{field}","q":{"exist":["field","id","value"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /checklists/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"pos","or":"pos","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"PUT","o":"/checklists/{id}","q":{"exist":["id","name","pos"]},"r":{},"s":[{"lit":"checklists"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"],["$.main.kit.entity.card"]]},"key$":"checklist","name__orig":"checklist","Name":"Checklist","name_":"checklist","name-":"checklist","NAME":"CHECKLIST","index$":16}, {"active":true,"entity":"checklist","key$":"BasicChecklistFlow","kind":"basic","name":"BasicChecklistFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"checklist_ref01"},"m":{"card_id":"card01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"checklist_ref01","srcdatavar":"checklist_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-checklist_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"checklist_ref01","srcdatavar":"checklist_ref01_data","suffix":"_dt0"},"m":{"id":"checklist01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-checklist_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"checklist_ref01","suffix":"_rm0"},"m":{"id":"checklist01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Checklist', {"POST /checklists/{id}/checkItems":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"name","in":"query","description":"The name of the new check item on the checklist. Should be a string of length 1 to 16384.","required":true,"schema":{"type":"string","maxLength":16384,"minLength":1},"index$":1},{"name":"pos","in":"query","description":"The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.","required":false,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"type":"string","default":"bottom","x-ref":"#/components/schemas/posStringOrNumber"},"index$":2},{"name":"checked","in":"query","description":"Determines whether the check item is already checked when created.","required":false,"schema":{"type":"boolean","default":false},"index$":3},{"name":"due","in":"query","description":"A due date for the checkitem","required":false,"schema":{"type":"string","format":"date"},"index$":4},{"name":"dueReminder","in":"query","description":"A dueReminder for the due date on the checkitem","required":false,"schema":{"type":"number","nullable":true},"index$":5},{"name":"idMember","in":"query","description":"An ID of a member resource.","required":false,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":6}]},"POST /checklists":{"protocol":"http","parameters":[{"name":"idCard","in":"query","description":"The ID of the Card that the checklist should be added to.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"name","in":"query","description":"The name of the checklist. Should be a string of length 1 to 16384.","required":false,"schema":{"type":"string","maxLength":16384,"minLength":1},"index$":1},{"name":"pos","in":"query","description":"The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.","required":false,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},"index$":2},{"name":"idChecklistSource","in":"query","description":"The ID of a checklist to copy into the new checklist.","required":false,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":3}]},"GET /checklists/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"cards","in":"query","description":"Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).","required":false,"schema":{"type":"string","default":"none","enum":["all","closed","none","open","visible"]},"index$":1},{"name":"checkItems","in":"query","description":"The check items on the list to return. One of: `all`, `none`.","required":false,"schema":{"type":"string","enum":["all","none"],"default":"all"},"index$":2},{"name":"checkItem_fields","in":"query","description":"The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`","required":false,"schema":{"type":"string","default":"name, nameData, pos, state, due, dueReminder, idMember","enum":["all","name","nameData","pos","state","type","due","dueReminder","idMember"]},"index$":3},{"name":"fields","in":"query","description":"`all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":4}]},"GET /cards/{id}/checklists":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"checkItems","in":"query","description":"`all` or `none`","required":false,"schema":{"type":"string","enum":["all","none"],"default":"all"},"index$":1},{"name":"checkItem_fields","in":"query","description":"`all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`","required":false,"explode":false,"style":"form","schema":{"type":"string","default":"name,nameData,pos,state,due,dueReminder,idMember","enum":["name","nameData","pos","state","type","due","dueReminder","idMember"]},"index$":2},{"name":"filter","in":"query","description":"`all` or `none`","required":false,"schema":{"type":"string","default":"all","enum":["all","none"]},"index$":3},{"name":"fields","in":"query","explode":false,"style":"form","description":"`all` or a comma-separated list of: `idBoard,idCard,name,pos`","required":false,"schema":{"type":"string","default":"all","enum":["all","name","nameData","pos","state","type"]},"index$":4}]},"GET /checklists/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"field","in":"path","description":"Field to update.","required":true,"schema":{"type":"string","enum":["name","pos"]},"index$":1}]},"GET /boards/{id}/checklists":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the board","required":true,"schema":{"type":"string"},"index$":0}]},"DELETE /cards/{id}/checklists/{idChecklist}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idChecklist","in":"path","description":"The ID of the checklist to delete","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"DELETE /checklists/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /checklists/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"field","in":"path","description":"Field to update.","required":true,"schema":{"type":"string","enum":["name","pos"]},"index$":1},{"name":"value","in":"query","description":"The value to change the checklist name to. Should be a string of length 1 to 16384.","required":true,"schema":{"oneOf":[{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"}]},"index$":2}]},"PUT /checklists/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of a checklist.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"name","in":"query","description":"Name of the new checklist being created. Should be length of 1 to 16384.","required":false,"schema":{"type":"string"},"index$":1},{"name":"pos","in":"query","description":"Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.","required":false,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const checklist_ref01_ent = client.Checklist()
    let checklist_ref01_data = setup.data.new.checklist['checklist_ref01']
    checklist_ref01_data['card_id'] = setup.idmap['card01']

    checklist_ref01_data = (await checklist_ref01_ent.create(checklist_ref01_data)).data()
    assert(null != checklist_ref01_data.id)


    // UPDATE
    const checklist_ref01_data_up0: any = {}
    checklist_ref01_data_up0.id = checklist_ref01_data.id

    const checklist_ref01_resdata_up0 = (await checklist_ref01_ent.update(checklist_ref01_data_up0)).data()
    assert(checklist_ref01_resdata_up0.id === checklist_ref01_data_up0.id)


    // LOAD
    const checklist_ref01_match_dt0: any = {}
    checklist_ref01_match_dt0.id = checklist_ref01_data.id
    const checklist_ref01_data_dt0 = (await checklist_ref01_ent.load(checklist_ref01_match_dt0)).data()
    assert(checklist_ref01_data_dt0.id === checklist_ref01_data.id)


    // REMOVE
    const checklist_ref01_match_rm0: any = { id: checklist_ref01_data.id }
    await checklist_ref01_ent.remove(checklist_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/checklist/ChecklistTestData.json')

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
    ['checklist01','checklist02','checklist03','board01','board02','board03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CHECKLIST_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CHECKLIST_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CHECKLIST_ENTID']
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
  
