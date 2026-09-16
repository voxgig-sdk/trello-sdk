

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


describe('TrelloListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.TrelloList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'trello_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"attachments","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"closed","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"idBoard","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"limits","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"name","req":false,"short":"The name of the list","type":"`$STRING`","index$":5},{"active":true,"name":"pos","req":false,"type":"`$NUMBER`","index$":6},{"active":true,"name":"softLimit","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"subscribed","req":false,"type":"`$BOOLEAN`","index$":8}],"id":{"field":"id","name":"id"},"name":"trello_list","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"name","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"top","kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /boards/{id}/lists","json":"{\"operationId\":\"post-boards-id-lists\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The name of the list to be created. 1 to 16384 characters long.\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"default\":\"top\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"closed\":{\"type\":\"boolean\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"type\":\"string\"},\"limits\":{\"properties\":{\"attachments\":{\"properties\":{\"perBoard\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the list\",\"example\":\"Things to buy today\",\"type\":\"string\"},\"pos\":{\"type\":\"number\"},\"softLimit\":{\"type\":\"string\"},\"subscribed\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/boards/{id}/lists","rename":{"param":{"id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"lists"}],"select":{"exist":["board_id","name","pos"]},"transform":{"req":"`reqdata`","res":"`body.limits`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"card","orig":"card","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"all","kind":"query","name":"card_field","orig":"card_field","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /boards/{id}/lists","json":"{\"operationId\":\"get-boards-id-lists\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Filter to apply to Cards.\",\"in\":\"query\",\"name\":\"cards\",\"required\":false,\"schema\":{\"enum\":[\"all\",\"closed\",\"none\",\"open\"],\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)\",\"in\":\"query\",\"name\":\"card_fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}},{\"description\":\"Filter to apply to Lists\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"enum\":[\"all\",\"closed\",\"none\",\"open\"],\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"closed\":{\"type\":\"boolean\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"type\":\"string\"},\"limits\":{\"properties\":{\"attachments\":{\"properties\":{\"perBoard\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the list\",\"example\":\"Things to buy today\",\"type\":\"string\"},\"pos\":{\"type\":\"number\"},\"softLimit\":{\"type\":\"string\"},\"subscribed\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards/{id}/lists","rename":{"param":{"id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"lists"}],"select":{"exist":["board_id","card","card_field","field","filter"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"action_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /actions/{id}/list","json":"{\"operationId\":\"get-actions-id-list\",\"parameters\":[{\"description\":\"The ID of the action\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of list fields\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"id\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"closed\":{\"type\":\"boolean\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"type\":\"string\"},\"limits\":{\"properties\":{\"attachments\":{\"properties\":{\"perBoard\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"name\":{\"description\":\"The name of the list\",\"example\":\"Things to buy today\",\"type\":\"string\"},\"pos\":{\"type\":\"number\"},\"softLimit\":{\"type\":\"string\"},\"subscribed\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/actions/{id}/list","rename":{"param":{"id":"action_id"}},"segments":[{"lit":"actions"},{"var":"action_id"},{"lit":"list"}],"select":{"exist":["action_id","field"]},"transform":{"req":"`reqdata`","res":"`body.limits`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["action"],["board"]]},"key$":"trello_list","name__orig":"trello_list","Name":"TrelloList","name_":"trello_list","name-":"trello-list","NAME":"TRELLO_LIST","index$":68}, {"active":true,"entity":"trello_list","key$":"BasicTrelloListFlow","kind":"basic","name":"BasicTrelloListFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"trello_list_ref01"},"match":{"board_id":"board01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"board_id":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"trello_list_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"trello_list_ref01","srcdatavar":"trello_list_ref01_data","suffix":"_dt0"},"match":{"id":"trello_list01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-trello_list_ref01"}}],"index$":2}]}, 'TrelloList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const trello_list_ref01_ent = client.TrelloList()
    let trello_list_ref01_data = setup.data.new.trello_list['trello_list_ref01']
    trello_list_ref01_data['board_id'] = setup.idmap['board01']

    trello_list_ref01_data = (await trello_list_ref01_ent.create(trello_list_ref01_data)).data()
    assert(null != trello_list_ref01_data.id)


    // LIST
    const trello_list_ref01_match: any = {}
    trello_list_ref01_match['board_id'] = setup.idmap['board01']

    const trello_list_ref01_list = (await trello_list_ref01_ent.list(trello_list_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(trello_list_ref01_list, { id: trello_list_ref01_data.id })))


    // LOAD
    const trello_list_ref01_match_dt0: any = {}
    trello_list_ref01_match_dt0.id = trello_list_ref01_data.id
    const trello_list_ref01_data_dt0 = (await trello_list_ref01_ent.load(trello_list_ref01_match_dt0)).data()
    assert(trello_list_ref01_data_dt0.id === trello_list_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/trello_list/TrelloListTestData.json')

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
    ['trello_list01','trello_list02','trello_list03','action01','action02','action03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_TRELLO_LIST_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_TRELLO_LIST_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_TRELLO_LIST_ENTID']
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
  
