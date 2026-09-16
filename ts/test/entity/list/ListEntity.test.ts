

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


describe('ListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.List()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"list","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_board","orig":"id_board","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_list_source","orig":"id_list_source","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"name","orig":"name","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"POST /lists","json":"{\"operationId\":\"post-lists\",\"parameters\":[{\"description\":\"Name for the list\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The long ID of the board the list should be created on\",\"in\":\"query\",\"name\":\"idBoard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the List to copy into the new List\",\"in\":\"query\",\"name\":\"idListSource\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Position of the list. `top`, `bottom`, or a positive floating point number\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"format\":\"float\",\"type\":\"number\"},{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/lists","segments":[{"lit":"lists"}],"select":{"exist":["id_board","id_list_source","name","pos"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_board","orig":"id_board","reqd":true,"type":"`$STRING`"},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_list","orig":"id_list","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /lists/{id}/moveAllCards","json":"{\"operationId\":\"post-lists-id-moveallcards\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board the cards should be moved to\",\"in\":\"query\",\"name\":\"idBoard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the list that the cards should be moved to\",\"in\":\"query\",\"name\":\"idList\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/lists/{id}/moveAllCards","segments":[{"lit":"lists"},{"var":"id"},{"lit":"moveAllCards"}],"select":{"$action":"move_all_card","exist":["id","id_board","id_list"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /lists/{id}/archiveAllCards","json":"{\"operationId\":\"post-lists-id-archiveallcards\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/lists/{id}/archiveAllCards","segments":[{"lit":"lists"},{"var":"id"},{"lit":"archiveAllCards"}],"select":{"$action":"archive_all_card","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"filter","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /boards/{id}/lists/{filter}","json":"{\"operationId\":\"get-boards-id-lists-filter\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of `all`, `closed`, `none`, `open`\",\"in\":\"path\",\"name\":\"filter\",\"required\":true,\"schema\":{\"enum\":[\"all\",\"closed\",\"none\",\"open\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards/{id}/lists/{filter}","rename":{"param":{"filter":"id","id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"lists"},{"var":"id"}],"select":{"exist":["board_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"name,closed,idBoard,pos","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /lists/{id}","json":"{\"operationId\":\"get-lists-id\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"`all` or a comma separated list of List field names.\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"name,closed,idBoard,pos\",\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/lists/{id}","segments":[{"lit":"lists"},{"var":"id"}],"select":{"exist":["field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"closed","orig":"closed","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_board","orig":"id_board","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"subscribed","orig":"subscribed","reqd":false,"type":"`$BOOLEAN`","index$":4}]},"contract":{"id":"PUT /lists/{id}","json":"{\"operationId\":\"put-lists-id\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"New name for the list\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Whether the list should be closed (archived)\",\"in\":\"query\",\"name\":\"closed\",\"required\":false,\"schema\":{\"type\":\"boolean\"}},{\"description\":\"ID of a board the list should be moved to\",\"explode\":false,\"in\":\"query\",\"name\":\"idBoard\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"New position for the list: `top`, `bottom`, or a positive floating point number\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"format\":\"float\",\"type\":\"number\"},{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"}]}},{\"description\":\"Whether the active member is subscribed to this list\",\"in\":\"query\",\"name\":\"subscribed\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/lists/{id}","segments":[{"lit":"lists"},{"var":"id"}],"select":{"exist":["closed","id","id_board","name","pos","subscribed"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"field","orig":"field","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"value","orig":"value","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"PUT /lists/{id}/{field}","json":"{\"operationId\":\"put-lists-id-field\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The field on the List to be updated\",\"in\":\"path\",\"name\":\"field\",\"required\":true,\"schema\":{\"enum\":[\"name\",\"pos\",\"subscribed\"],\"type\":\"string\"}},{\"description\":\"The new value for the field\",\"in\":\"query\",\"name\":\"value\",\"required\":false,\"schema\":{\"oneOf\":[{\"description\":\"The new name for the List\",\"type\":\"string\"},{\"description\":\"The new position for the List\",\"format\":\"float\",\"type\":\"number\"},{\"description\":\"The new position for the List\",\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"type\":\"boolean\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/lists/{id}/{field}","segments":[{"lit":"lists"},{"var":"id"},{"var":"field"}],"select":{"exist":["field","id","value"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"value","orig":"value","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"PUT /lists/{id}/closed","json":"{\"operationId\":\"put-lists-id-closed\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Set to true to close (archive) the list\",\"in\":\"query\",\"name\":\"value\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/lists/{id}/closed","segments":[{"lit":"lists"},{"var":"id"},{"lit":"closed"}],"select":{"$action":"closed","exist":["id","value"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"value","orig":"value","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"PUT /lists/{id}/idBoard","json":"{\"operationId\":\"put-id-idboard\",\"parameters\":[{\"description\":\"The ID of the list\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board to move the list to\",\"in\":\"query\",\"name\":\"value\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/lists/{id}/idBoard","segments":[{"lit":"lists"},{"var":"id"},{"lit":"idBoard"}],"select":{"$action":"id_board","exist":["id","value"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"update"}},"relations":{"ancestors":[["board"]]},"key$":"list","name__orig":"list","Name":"List","name_":"list","name-":"list","NAME":"LIST","index$":37}, {"active":true,"entity":"list","key$":"BasicListFlow","kind":"basic","name":"BasicListFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"list_ref01"},"match":{"board_id":"board01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"list_ref01","srcdatavar":"list_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"list_ref01","srcdatavar":"list_ref01_data","suffix":"_dt0"},"match":{"id":"list01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-list_ref01"}}],"index$":2}]}, 'List')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const list_ref01_ent = client.List()
    let list_ref01_data = setup.data.new.list['list_ref01']
    list_ref01_data['board_id'] = setup.idmap['board01']

    list_ref01_data = (await list_ref01_ent.create(list_ref01_data)).data()
    assert(null != list_ref01_data.id)


    // UPDATE
    const list_ref01_data_up0: any = {}
    list_ref01_data_up0.id = list_ref01_data.id

    const list_ref01_resdata_up0 = (await list_ref01_ent.update(list_ref01_data_up0)).data()
    assert(list_ref01_resdata_up0.id === list_ref01_data_up0.id)


    // LOAD
    const list_ref01_match_dt0: any = {}
    list_ref01_match_dt0.id = list_ref01_data.id
    const list_ref01_data_dt0 = (await list_ref01_ent.load(list_ref01_match_dt0)).data()
    assert(list_ref01_data_dt0.id === list_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list/ListTestData.json')

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
    ['list01','list02','list03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_LIST_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_LIST_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_LIST_ENTID']
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
  
