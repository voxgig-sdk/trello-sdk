

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


describe('CustomFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'custom_field.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cardFront":{"a":true,"h":"Card Front","n":"cardFront","r":false,"t":"`$BOOLEAN`","key$":"cardFront","index$":0},"display":{"a":true,"h":"Display","n":"display","r":false,"t":"`$OBJECT`","key$":"display","index$":1},"display_cardFront":{"a":true,"h":"Display Card Front","n":"display_cardFront","r":false,"sh":"Whether this Custom Field should be shown on the front of Cards","t":"`$BOOLEAN`","key$":"display_cardFront","index$":2},"displaycardFront":{"a":true,"h":"Displaycard Front","n":"displaycardFront","r":false,"sh":"Whether to display this custom field on the front of cards","t":"`$BOOLEAN`","key$":"displaycardFront","index$":3},"fieldGroup":{"a":true,"h":"Field Group","n":"fieldGroup","r":false,"t":"`$STRING`","key$":"fieldGroup","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"idModel":{"a":true,"h":"Id Model","n":"idModel","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The ID of the model for which the Custom Field is being defined.","t":"`$STRING`","key$":"idModel","index$":6},"modelType":{"a":true,"h":"Model Type","n":"modelType","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type of model that the Custom Field is being defined on.","t":"`$STRING`","key$":"modelType","index$":7},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the Custom Field","t":"`$STRING`","key$":"name","index$":8},"options":{"a":true,"h":"Options","n":"options","r":false,"sh":"If the type is `checkbox`","t":"`$ARRAY`","key$":"options","index$":9},"pos":{"a":true,"h":"Pos","n":"pos","op":{"create":{"req":true,"type":"`$ANY`"}},"r":false,"t":"`$STRING`","key$":"pos","index$":10},"type":{"a":true,"h":"Type","n":"type","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The type of Custom Field to create.","t":"`$STRING`","key$":"type","index$":11}},"id":{"field":"id","name":"id"},"name":"custom_field","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /customFields/{id}/options","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/customFields/{id}/options","q":{"$action":"option","exist":["id"]},"r":{},"s":[{"lit":"customFields"},{"var":"id"},{"lit":"options"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /customFields","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/customFields","q":{},"r":{},"s":[{"lit":"customFields"}],"t":{"req":"`reqdata`","res":"`body.display`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /boards/{id}/customFields","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards/{id}/customFields","q":{"exist":["board_id"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"customFields"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /customFields/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/customFields/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"customFields"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.display`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /customFields/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/customFields/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"customFields"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /cards/{idCard}/customField/{idCustomField}/item","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_card","or":"id_card","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_custom_field","or":"id_custom_field","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/cards/{idCard}/customField/{idCustomField}/item","q":{"$action":"item","exist":["id_card","id_custom_field"]},"r":{"param":{"idCard":"id_card","idCustomField":"id_custom_field"}},"s":[{"lit":"cards"},{"var":"id_card"},{"lit":"customField"},{"var":"id_custom_field"},{"lit":"item"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /customFields/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/customFields/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"customFields"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.display`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"],["$.main.kit.entity.card"]]},"key$":"custom_field","name__orig":"custom_field","Name":"CustomField","name_":"custom_field","name-":"custom-field","NAME":"CUSTOM_FIELD","index$":20}, {"active":true,"entity":"custom_field","key$":"BasicCustomFieldFlow","kind":"basic","name":"BasicCustomFieldFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_field_ref01"},"m":{"board_id":"board01","id_card":"id_card01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"board_id":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_field_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_up0","textfield":"fieldGroup"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_dt0"},"m":{"id":"custom_field01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"custom_field_ref01","suffix":"_rm0"},"m":{"id":"custom_field01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"board_id":"board01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"custom_field_ref01"}}],"index$":5}]}, 'CustomField', {"POST /customFields/{id}/options":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the customfield.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"POST /customFields":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["idModel","modelType","name","type","pos"],"properties":{"idModel":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","description":"The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.","x-ref":"#/components/schemas/TrelloID","key$":"idModel"},"modelType":{"enum":["board"],"type":"string","description":"The type of model that the Custom Field is being defined on. This should always be `board`.","key$":"modelType"},"name":{"type":"string","description":"The name of the Custom Field","key$":"name"},"type":{"enum":["checkbox","list","number","text","date"],"type":"string","description":"The type of Custom Field to create.","key$":"type"},"options":{"type":"string","description":"If the type is `checkbox` ","key$":"options"},"pos":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"description":"","x-ref":"#/components/schemas/posStringOrNumber","key$":"pos"},"display_cardFront":{"type":"boolean","description":"Whether this Custom Field should be shown on the front of Cards","default":true,"key$":"display_cardFront"}},"index$":1}}}},"parameters":[]},"GET /boards/{id}/customFields":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the board","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /customFields/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the Custom Field.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"DELETE /customFields/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the Custom Field.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /cards/{idCard}/customField/{idCustomField}/item":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"oneOf":[{"type":"object","properties":{"value":{"type":"object","description":"An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.","properties":{"text":{},"checked":{},"date":{},"number":{}}}}},{"type":"object","properties":{"idValue":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","description":"The ID of the option for the list type Custom Field","x-ref":"#/components/schemas/TrelloID"}}}]}}}},"parameters":[{"name":"idCard","in":"path","description":"ID of the card that the Custom Field value should be set/updated for","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idCustomField","in":"path","description":"ID of the Custom Field on the card.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"PUT /customFields/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the Custom Field","key$":"name"},"pos":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber","key$":"pos"},"display/cardFront":{"type":"boolean","description":"Whether to display this custom field on the front of cards","key$":"display/cardFront"}},"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"ID of the Custom Field.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_field_ref01_ent = client.CustomField()
    let custom_field_ref01_data = setup.data.new.custom_field['custom_field_ref01']
    custom_field_ref01_data['board_id'] = setup.idmap['board01']
    custom_field_ref01_data['id_card'] = setup.idmap['id_card01']

    custom_field_ref01_data = (await custom_field_ref01_ent.create(custom_field_ref01_data)).data()
    assert(null != custom_field_ref01_data.id)


    // LIST
    const custom_field_ref01_match: any = {}
    custom_field_ref01_match['board_id'] = setup.idmap['board01']

    const custom_field_ref01_list = (await custom_field_ref01_ent.list(custom_field_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(custom_field_ref01_list, { id: custom_field_ref01_data.id })))


    // UPDATE
    const custom_field_ref01_data_up0: any = {}
    custom_field_ref01_data_up0.id = custom_field_ref01_data.id

    const custom_field_ref01_markdef_up0 = { name: 'fieldGroup', value: 'Mark01-custom_field_ref01_' + setup.now }
    ;(custom_field_ref01_data_up0 as any)[custom_field_ref01_markdef_up0.name] = custom_field_ref01_markdef_up0.value

    const custom_field_ref01_resdata_up0 = (await custom_field_ref01_ent.update(custom_field_ref01_data_up0)).data()
    assert(custom_field_ref01_resdata_up0.id === custom_field_ref01_data_up0.id)

    assert((custom_field_ref01_resdata_up0 as any)[custom_field_ref01_markdef_up0.name] === custom_field_ref01_markdef_up0.value)


    // LOAD
    const custom_field_ref01_match_dt0: any = {}
    custom_field_ref01_match_dt0.id = custom_field_ref01_data.id
    const custom_field_ref01_data_dt0 = (await custom_field_ref01_ent.load(custom_field_ref01_match_dt0)).data()
    assert(custom_field_ref01_data_dt0.id === custom_field_ref01_data.id)


    // REMOVE
    const custom_field_ref01_match_rm0: any = { id: custom_field_ref01_data.id }
    await custom_field_ref01_ent.remove(custom_field_ref01_match_rm0)
  

    // LIST
    const custom_field_ref01_match_rt0: any = {}
    custom_field_ref01_match_rt0['board_id'] = setup.idmap['board01']

    const custom_field_ref01_list_rt0 = (await custom_field_ref01_ent.list(custom_field_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(custom_field_ref01_list_rt0, { id: custom_field_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_field/CustomFieldTestData.json')

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
    ['custom_field01','custom_field02','custom_field03','board01','board02','board03','card01','card02','card03','id_card01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_FIELD_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_FIELD_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CUSTOM_FIELD_ENTID']
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
  
