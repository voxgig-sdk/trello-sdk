

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


describe('LabelEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Label()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'label.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"label","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /labels","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"color","or":"color","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"id_board","or":"id_board","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"name","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/labels","q":{"exist":["color","id_board","name"]},"r":{},"s":[{"lit":"labels"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /boards/{id}/labels","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"field","or":"field","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/boards/{id}/labels","q":{"exist":["board_id","field","limit"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"labels"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /labels/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/labels/{id}","q":{"exist":["field","id"]},"r":{},"s":[{"lit":"labels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /labels/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/labels/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"labels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /labels/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"color","or":"color","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/labels/{id}","q":{"exist":["color","id","name"]},"r":{},"s":[{"lit":"labels"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /labels/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"value","or":"value","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/labels/{id}/{field}","q":{"exist":["field","id","value"]},"r":{},"s":[{"lit":"labels"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"]]},"key$":"label","name__orig":"label","Name":"Label","name_":"label","name-":"label","NAME":"LABEL","index$":35}, {"active":true,"entity":"label","key$":"BasicLabelFlow","kind":"basic","name":"BasicLabelFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"label_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"label_ref01","srcdatavar":"label_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-label_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"label_ref01","srcdatavar":"label_ref01_data","suffix":"_dt0"},"m":{"id":"label01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-label_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"label_ref01","suffix":"_rm0"},"m":{"id":"label01"},"o":"remove","s":[],"v":[],"index$":3}]}, 'Label', {"POST /labels":{"protocol":"http","parameters":[{"name":"name","in":"query","description":"Name for the label","required":true,"schema":{"type":"string"},"index$":0},{"name":"color","in":"query","description":"The color for the label.","required":true,"schema":{"type":"string","enum":["yellow","purple","blue","red","green","orange","black","sky","pink","lime"],"nullable":true,"x-ref":"#/components/schemas/Color"},"index$":1},{"name":"idBoard","in":"query","description":"The ID of the Board to create the Label on.","required":true,"schema":{"type":"string"},"index$":2}]},"GET /boards/{id}/labels":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Board.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"fields","in":"query","description":"The fields to be returned for the Labels.","required":false,"schema":{"type":"object","properties":{"id":{"description":"The ID of the label.","example":"5abbe4b7ddc1b351ef961414","pattern":"^[0-9a-fA-F]{24}$","type":"string","x-ref":"#/components/schemas/TrelloID"},"idBoard":{"description":"The ID of the board the label is on.","example":"5abbe4b7ddc1b351ef961414","pattern":"^[0-9a-fA-F]{24}$","type":"string","x-ref":"#/components/schemas/TrelloID"},"name":{"description":"The name displayed for the label.","example":"Overdue","maxLength":16384,"minLength":0,"nullable":true,"type":"string"},"color":{"description":"The color of the label. Null means no color and the label will not be shown on the front of Cards.","enum":["yellow","purple","blue","red","green","orange","black","sky","pink","lime"],"nullable":true,"type":"string","x-ref":"#/components/schemas/Color"}},"x-ref":"#/components/schemas/Label"},"index$":1},{"name":"limit","in":"query","description":"The number of Labels to be returned.","required":false,"schema":{"type":"integer","format":"int32","default":50,"minimum":0,"maximum":1000},"index$":2}]},"GET /labels/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Label","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"fields","in":"query","description":"all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":1}]},"DELETE /labels/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Label","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /labels/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Label","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"name","in":"query","description":"The new name for the label","required":false,"schema":{"type":"string"},"index$":1},{"name":"color","in":"query","description":"The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options","required":false,"schema":{"type":"string","enum":["yellow","purple","blue","red","green","orange","black","sky","pink","lime"],"nullable":true,"x-ref":"#/components/schemas/Color"},"index$":2}]},"PUT /labels/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The id of the label","required":true,"schema":{"type":"string"},"index$":0},{"name":"field","in":"path","description":"The field on the Label to update.","required":true,"schema":{"type":"string","enum":["color","name"]},"index$":1},{"name":"value","in":"query","description":"The new value for the field.","schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const label_ref01_ent = client.Label()
    let label_ref01_data = setup.data.new.label['label_ref01']

    label_ref01_data = (await label_ref01_ent.create(label_ref01_data)).data()
    assert(null != label_ref01_data.id)


    // UPDATE
    const label_ref01_data_up0: any = {}
    label_ref01_data_up0.id = label_ref01_data.id

    const label_ref01_resdata_up0 = (await label_ref01_ent.update(label_ref01_data_up0)).data()
    assert(label_ref01_resdata_up0.id === label_ref01_data_up0.id)


    // LOAD
    const label_ref01_match_dt0: any = {}
    label_ref01_match_dt0.id = label_ref01_data.id
    const label_ref01_data_dt0 = (await label_ref01_ent.load(label_ref01_match_dt0)).data()
    assert(label_ref01_data_dt0.id === label_ref01_data.id)


    // REMOVE
    const label_ref01_match_rm0: any = { id: label_ref01_data.id }
    await label_ref01_ent.remove(label_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/label/LabelTestData.json')

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
    ['label01','label02','label03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_LABEL_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_LABEL_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_LABEL_ENTID']
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
  
