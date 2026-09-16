

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


describe('BoardBackgroundEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.BoardBackground()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'board_background.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"board_background","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"file","orig":"file","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /members/{id}/customBoardBackgrounds","json":"{\"operationId\":\"membersidcustomboardbackgrounds-1\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"file\",\"required\":true,\"schema\":{\"format\":\"binary\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/members/{id}/customBoardBackgrounds","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customBoardBackgrounds"}],"select":{"exist":["file","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/boardBackgrounds","json":"{\"operationId\":\"get-members-id-boardbackgrounds\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `all`, `custom`, `default`, `none`, `premium`\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"custom\",\"default\",\"none\",\"premium\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/boardBackgrounds","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardBackgrounds"}],"select":{"exist":["filter","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/customBoardBackgrounds","json":"{\"operationId\":\"get-members-id-customboardbackgrounds\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/customBoardBackgrounds","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customBoardBackgrounds"}],"select":{"exist":["member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_background","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/boardBackgrounds/{idBackground}","json":"{\"operationId\":\"get-members-id-boardbackgrounds-idbackground\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board background\",\"in\":\"path\",\"name\":\"idBackground\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"brightness\",\"fullSizeUrl\",\"scaled\",\"tile\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/boardBackgrounds/{idBackground}","rename":{"param":{"id":"member_id","idBackground":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardBackgrounds"},{"var":"id"}],"select":{"exist":["field","id","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id_background","orig":"id_background","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /members/{id}/customBoardBackgrounds/{idBackground}","json":"{\"operationId\":\"get-members-id-customboardbackgrounds-idbackground\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"The ID of the custom background\",\"in\":\"path\",\"name\":\"idBackground\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/customBoardBackgrounds/{idBackground}","rename":{"param":{"id":"member_id","idBackground":"id_background"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customBoardBackgrounds"},{"var":"id_background"}],"select":{"exist":["id_background","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_background","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /members/{id}/boardBackgrounds/{idBackground}","json":"{\"operationId\":\"delete-members-id-boardbackgrounds-idbackground\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board background\",\"in\":\"path\",\"name\":\"idBackground\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/members/{id}/boardBackgrounds/{idBackground}","rename":{"param":{"id":"member_id","idBackground":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardBackgrounds"},{"var":"id"}],"select":{"exist":["id","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_background","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"brightness","orig":"brightness","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"tile","orig":"tile","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"PUT /members/{id}/boardBackgrounds/{idBackground}","json":"{\"operationId\":\"put-members-id-boardbackgrounds-idbackground\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board background\",\"in\":\"path\",\"name\":\"idBackground\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `dark`, `light`, `unknown`\",\"in\":\"query\",\"name\":\"brightness\",\"required\":false,\"schema\":{\"enum\":[\"dark\",\"light\",\"unknown\"],\"type\":\"string\"}},{\"description\":\"Whether the background should be tiled\",\"in\":\"query\",\"name\":\"tile\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/boardBackgrounds/{idBackground}","rename":{"param":{"id":"member_id","idBackground":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardBackgrounds"},{"var":"id"}],"select":{"exist":["brightness","id","member_id","tile"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id_background","orig":"id_background","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"brightness","orig":"brightness","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"tile","orig":"tile","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"PUT /members/{id}/customBoardBackgrounds/{idBackground}","json":"{\"operationId\":\"put-members-id-customboardbackgrounds-idbackground\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"The ID of the custom background\",\"in\":\"path\",\"name\":\"idBackground\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: `dark`, `light`, `unknown`\",\"in\":\"query\",\"name\":\"brightness\",\"required\":false,\"schema\":{\"enum\":[\"dark\",\"light\",\"unknown\"],\"type\":\"string\"}},{\"description\":\"Whether to tile the background\",\"in\":\"query\",\"name\":\"tile\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/customBoardBackgrounds/{idBackground}","rename":{"param":{"id":"member_id","idBackground":"id_background"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customBoardBackgrounds"},{"var":"id_background"}],"select":{"exist":["brightness","id_background","member_id","tile"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["member"],["member","custom_board_background"]]},"key$":"board_background","name__orig":"board_background","Name":"BoardBackground","name_":"board_background","name-":"board-background","NAME":"BOARD_BACKGROUND","index$":9}, {"active":true,"entity":"board_background","key$":"BasicBoardBackgroundFlow","kind":"basic","name":"BasicBoardBackgroundFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"board_background_ref01"},"match":{"member_id":"member01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"member_id":"member01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"board_background_ref01"}}],"index$":1},{"active":true,"data":{"member_id":"member01"},"input":{"ref":"board_background_ref01","srcdatavar":"board_background_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_background_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"board_background_ref01","srcdatavar":"board_background_ref01_data","suffix":"_dt0"},"match":{"id":"board_background01","member_id":"member01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_background_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"board_background_ref01","suffix":"_rm0"},"match":{"id":"board_background01","member_id":"member01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"member_id":"member01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"board_background_ref01"}}],"index$":5}]}, 'BoardBackground')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const board_background_ref01_ent = client.BoardBackground()
    let board_background_ref01_data = setup.data.new.board_background['board_background_ref01']
    board_background_ref01_data['member_id'] = setup.idmap['member01']

    board_background_ref01_data = (await board_background_ref01_ent.create(board_background_ref01_data)).data()
    assert(null != board_background_ref01_data.id)


    // LIST
    const board_background_ref01_match: any = {}
    board_background_ref01_match['member_id'] = setup.idmap['member01']

    const board_background_ref01_list = (await board_background_ref01_ent.list(board_background_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(board_background_ref01_list, { id: board_background_ref01_data.id })))


    // UPDATE
    const board_background_ref01_data_up0: any = {}
    board_background_ref01_data_up0.id = board_background_ref01_data.id
    board_background_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const board_background_ref01_resdata_up0 = (await board_background_ref01_ent.update(board_background_ref01_data_up0)).data()
    assert(board_background_ref01_resdata_up0.id === board_background_ref01_data_up0.id)


    // LOAD
    const board_background_ref01_match_dt0: any = {}
    board_background_ref01_match_dt0.id = board_background_ref01_data.id
    const board_background_ref01_data_dt0 = (await board_background_ref01_ent.load(board_background_ref01_match_dt0)).data()
    assert(board_background_ref01_data_dt0.id === board_background_ref01_data.id)


    // REMOVE
    const board_background_ref01_match_rm0: any = { id: board_background_ref01_data.id }
    await board_background_ref01_ent.remove(board_background_ref01_match_rm0)
  

    // LIST
    const board_background_ref01_match_rt0: any = {}
    board_background_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const board_background_ref01_list_rt0 = (await board_background_ref01_ent.list(board_background_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(board_background_ref01_list_rt0, { id: board_background_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/board_background/BoardBackgroundTestData.json')

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
    ['board_background01','board_background02','board_background03','member01','member02','member03','member01','member02','member03','custom_board_background01','custom_board_background02','custom_board_background03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_BOARD_BACKGROUND_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_BOARD_BACKGROUND_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_BOARD_BACKGROUND_ENTID']
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
  
