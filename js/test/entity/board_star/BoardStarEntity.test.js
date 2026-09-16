
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { TrelloSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"idBoard","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"pos","req":false,"type":"`$INTEGER`","index$":2}],"id":{"field":"id","name":"id"},"name":"board_star","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_board","orig":"id_board","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"POST /members/{id}/boardStars","json":"{\"operationId\":\"post-members-id-boardstars\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"The ID of the board to star\",\"in\":\"query\",\"name\":\"idBoard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The position of the newly starred board. `top`, `bottom`, or a positive float.\",\"in\":\"query\",\"name\":\"pos\",\"required\":true,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"585063850027165010be15a8\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"example\":\"57f7df684f1ca8c2877162e0\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":32768,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/members/{id}/boardStars","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"}],"select":{"exist":["id_board","member_id","pos"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"board_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"mine","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /boards/{boardId}/boardStars","json":"{\"operationId\":\"get-boards-id-boardstars\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"boardId\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"Valid values: mine, none\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"mine\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"properties\":{\"id\":{\"example\":\"585063850027165010be15a8\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"example\":\"57f7df684f1ca8c2877162e0\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":32768,\"type\":\"integer\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards/{boardId}/boardStars","rename":{"param":{"boardId":"id"}},"segments":[{"lit":"boards"},{"var":"id"},{"lit":"boardStars"}],"select":{"exist":["filter","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_star","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /members/{id}/boardStars/{idStar}","json":"{\"operationId\":\"get-members-id-boardstars-idstar\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board star\",\"in\":\"path\",\"name\":\"idStar\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"585063850027165010be15a8\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"example\":\"57f7df684f1ca8c2877162e0\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":32768,\"type\":\"integer\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/boardStars/{idStar}","rename":{"param":{"id":"member_id","idStar":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"select":{"exist":["id","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/boardStars","json":"{\"operationId\":\"get-members-id-boardstars\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/boardStars","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"}],"select":{"exist":["member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_star","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /members/{id}/boardStars/{idStar}","json":"{\"operationId\":\"delete-members-id-boardstars-idstar\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board star\",\"in\":\"path\",\"name\":\"idStar\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/members/{id}/boardStars/{idStar}","rename":{"param":{"id":"member_id","idStar":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"select":{"exist":["id","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_star","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"pos","orig":"pos","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"PUT /members/{id}/boardStars/{idStar}","json":"{\"operationId\":\"put-members-id-boardstars-idstar\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the board star\",\"in\":\"path\",\"name\":\"idStar\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"New position for the starred board. `top`, `bottom`, or a positive float.\",\"in\":\"query\",\"name\":\"pos\",\"required\":false,\"schema\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/boardStars/{idStar}","rename":{"param":{"id":"member_id","idStar":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"boardStars"},{"var":"id"}],"select":{"exist":["id","member_id","pos"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["member"]]},"key$":"board_star","name__orig":"board_star","Name":"BoardStar","name_":"board_star","name-":"board-star","NAME":"BOARD_STAR","index$":11}, {"active":true,"entity":"board_star","key$":"BasicBoardStarFlow","kind":"basic","name":"BasicBoardStarFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"board_star_ref01"},"match":{"member_id":"member01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"board_id":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"board_star_ref01"}}],"index$":1},{"active":true,"data":{"member_id":"member01"},"input":{"ref":"board_star_ref01","srcdatavar":"board_star_ref01_data","suffix":"_up0","textfield":"idBoard"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_star_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"board_star_ref01","srcdatavar":"board_star_ref01_data","suffix":"_dt0"},"match":{"id":"board_star01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-board_star_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"board_star_ref01","suffix":"_rm0"},"match":{"id":"board_star01","member_id":"member01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"board_id":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"board_star_ref01"}}],"index$":5}]}, 'BoardStar')
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
    const board_star_ref01_match = {}
    board_star_ref01_match['board_id'] = setup.idmap['board01']

    const board_star_ref01_list = (await board_star_ref01_ent.list(board_star_ref01_match)).map((e) => e.data())

    assert(!isempty(select(board_star_ref01_list, { id: board_star_ref01_data.id })))


    // UPDATE
    const board_star_ref01_data_up0 = {}
    board_star_ref01_data_up0.id = board_star_ref01_data.id
    board_star_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const board_star_ref01_markdef_up0 = { name: 'idBoard', value: 'Mark01-board_star_ref01_' + setup.now }
    board_star_ref01_data_up0 [board_star_ref01_markdef_up0.name] = board_star_ref01_markdef_up0.value

    const board_star_ref01_resdata_up0 = (await board_star_ref01_ent.update(board_star_ref01_data_up0)).data()
    assert(board_star_ref01_resdata_up0.id === board_star_ref01_data_up0.id)

    assert(board_star_ref01_resdata_up0[board_star_ref01_markdef_up0.name] === board_star_ref01_markdef_up0.value)


    // LOAD
    const board_star_ref01_match_dt0 = {}
    board_star_ref01_match_dt0.id = board_star_ref01_data.id
    const board_star_ref01_data_dt0 = (await board_star_ref01_ent.load(board_star_ref01_match_dt0)).data()
    assert(board_star_ref01_data_dt0.id === board_star_ref01_data.id)


    // REMOVE
    const board_star_ref01_match_rm0 = {}
    board_star_ref01_match_rm0.id = board_star_ref01_data.id
    await board_star_ref01_ent.remove(board_star_ref01_match_rm0)
  

    // LIST
    const board_star_ref01_match_rt0 = {}
    board_star_ref01_match_rt0['board_id'] = setup.idmap['board01']

    const board_star_ref01_list_rt0 = (await board_star_ref01_ent.list(board_star_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(board_star_ref01_list_rt0, { id: board_star_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
    ['board_star01','board_star02','board_star03','member01','member02','member03'],
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
