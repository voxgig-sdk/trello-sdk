

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


describe('BoardStarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.BoardStar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'board_star.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"idBoard":{"a":true,"h":"Id Board","n":"idBoard","r":false,"t":"`$STRING`","key$":"idBoard","index$":1},"pos":{"a":true,"h":"Pos","n":"pos","r":false,"t":"`$INTEGER`","key$":"pos","index$":2}},"id":{"field":"id","name":"id"},"name":"board_star","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /members/{id}/boardStars","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_board","or":"id_board","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"pos","or":"pos","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/members/{id}/boardStars","q":{"exist":["id_board","member_id","pos"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /boards/{boardId}/boardStars","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"board_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mine","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards/{boardId}/boardStars","q":{"exist":["filter","id"]},"r":{"param":{"boardId":"id"}},"s":[{"lit":"boards"},{"var":"id"},{"lit":"boardStars"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /members/{id}/boardStars/{idStar}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_star","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/members/{id}/boardStars/{idStar}","q":{"exist":["id","member_id"]},"r":{"param":{"id":"member_id","idStar":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /members/{id}/boardStars","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/boardStars","q":{"exist":["member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /members/{id}/boardStars/{idStar}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_star","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/members/{id}/boardStars/{idStar}","q":{"exist":["id","member_id"]},"r":{"param":{"id":"member_id","idStar":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /members/{id}/boardStars/{idStar}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_star","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"pos","or":"pos","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"PUT","o":"/members/{id}/boardStars/{idStar}","q":{"exist":["id","member_id","pos"]},"r":{"param":{"id":"member_id","idStar":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.member"]]},"key$":"board_star","name__orig":"board_star","Name":"BoardStar","name_":"board_star","name-":"board-star","NAME":"BOARD_STAR","index$":10}, {"active":true,"entity":"board_star","key$":"BasicBoardStarFlow","kind":"basic","name":"BasicBoardStarFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"board_star_ref01"},"m":{"member_id":"member01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"board_id":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"board_star_ref01"}}],"index$":1},{"a":true,"d":{"member_id":"member01"},"i":{"ref":"board_star_ref01","srcdatavar":"board_star_ref01_data","suffix":"_up0","textfield":"idBoard"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_star_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"board_star_ref01","srcdatavar":"board_star_ref01_data","suffix":"_dt0"},"m":{"id":"board_star01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_star_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"board_star_ref01","suffix":"_rm0"},"m":{"id":"board_star01","member_id":"member01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"board_id":"board01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"board_star_ref01"}}],"index$":5}]}, 'BoardStar', {"POST /members/{id}/boardStars":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0},{"name":"idBoard","in":"query","description":"The ID of the board to star","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"pos","in":"query","description":"The position of the newly starred board. `top`, `bottom`, or a positive float.","required":true,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},"index$":2}]},"GET /boards/{boardId}/boardStars":{"protocol":"http","parameters":[{"name":"boardId","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"filter","in":"query","description":"Valid values: mine, none","required":false,"schema":{"type":"string","default":"mine"},"index$":1}]},"GET /members/{id}/boardStars/{idStar}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idStar","in":"path","description":"The ID of the board star","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"GET /members/{id}/boardStars":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"DELETE /members/{id}/boardStars/{idStar}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idStar","in":"path","description":"The ID of the board star","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"PUT /members/{id}/boardStars/{idStar}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idStar","in":"path","description":"The ID of the board star","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"pos","in":"query","description":"New position for the starred board. `top`, `bottom`, or a positive float.","required":false,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const board_star_ref01_ent = client.BoardStar()
    let board_star_ref01_data = setup.data.new.board_star['board_star_ref01']
    board_star_ref01_data['member_id'] = setup.idmap['member01']

    board_star_ref01_data = (await board_star_ref01_ent.create(board_star_ref01_data)).data()
    assert(null != board_star_ref01_data.id)


    // LIST
    const board_star_ref01_match: any = {}
    board_star_ref01_match['board_id'] = setup.idmap['board01']

    const board_star_ref01_list = (await board_star_ref01_ent.list(board_star_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(board_star_ref01_list, { id: board_star_ref01_data.id })))


    // UPDATE
    const board_star_ref01_data_up0: any = {}
    board_star_ref01_data_up0.id = board_star_ref01_data.id
    board_star_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const board_star_ref01_markdef_up0 = { name: 'idBoard', value: 'Mark01-board_star_ref01_' + setup.now }
    ;(board_star_ref01_data_up0 as any)[board_star_ref01_markdef_up0.name] = board_star_ref01_markdef_up0.value

    const board_star_ref01_resdata_up0 = (await board_star_ref01_ent.update(board_star_ref01_data_up0)).data()
    assert(board_star_ref01_resdata_up0.id === board_star_ref01_data_up0.id)

    assert((board_star_ref01_resdata_up0 as any)[board_star_ref01_markdef_up0.name] === board_star_ref01_markdef_up0.value)


    // LOAD
    const board_star_ref01_match_dt0: any = {}
    board_star_ref01_match_dt0.id = board_star_ref01_data.id
    const board_star_ref01_data_dt0 = (await board_star_ref01_ent.load(board_star_ref01_match_dt0)).data()
    assert(board_star_ref01_data_dt0.id === board_star_ref01_data.id)


    // REMOVE
    const board_star_ref01_match_rm0: any = { id: board_star_ref01_data.id }
    await board_star_ref01_ent.remove(board_star_ref01_match_rm0)
  

    // LIST
    const board_star_ref01_match_rt0: any = {}
    board_star_ref01_match_rt0['board_id'] = setup.idmap['board01']

    const board_star_ref01_list_rt0 = (await board_star_ref01_ent.list(board_star_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(board_star_ref01_list_rt0, { id: board_star_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/board_star/BoardStarTestData.json')

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
    ['board_star01','board_star02','board_star03','member01','member02','member03','board01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_BOARD_STAR_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_BOARD_STAR_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_BOARD_STAR_ENTID']
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
  
