
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


describe('TokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Token()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"dateCreated","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"dateExpires","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"idMember","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"identifier","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"permissions","req":false,"type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":3},"index$":5}],"id":{"field":"id","name":"id"},"name":"token","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"webhook","orig":"webhook","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /members/{id}/tokens","json":"{\"operationId\":\"get-members-id-tokens\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether to include webhooks\",\"in\":\"query\",\"name\":\"webhooks\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"dateCreated\":{\"example\":\"2019-10-16T14:27:17.304Z\",\"format\":\"date-time\",\"type\":\"string\"},\"dateExpires\":{\"example\":null,\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5da728c55235b443c5b97181\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"identifier\":{\"example\":\"App Name\",\"type\":\"string\"},\"permissions\":{\"items\":{\"properties\":{\"idModel\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"enum\":[\"*\"],\"type\":\"string\"}]},\"modelType\":{\"enum\":[\"board\",\"member\",\"organization\",\"enterprise\"],\"type\":\"string\"},\"read\":{\"type\":\"boolean\"},\"write\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/tokens","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"tokens"}],"select":{"exist":["member_id","webhook"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"token","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":false,"kind":"query","name":"webhook","orig":"webhook","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /tokens/{token}","json":"{\"operationId\":\"get-tokens-token\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"identifier\",\"idMember\",\"dateCreated\",\"dateExpires\",\"permissions\"],\"type\":\"string\"}},{\"description\":\"Determines whether to include webhooks.\",\"in\":\"query\",\"name\":\"webhooks\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"dateCreated\":{\"example\":\"2019-10-16T14:27:17.304Z\",\"format\":\"date-time\",\"type\":\"string\"},\"dateExpires\":{\"example\":null,\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5da728c55235b443c5b97181\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"identifier\":{\"example\":\"App Name\",\"type\":\"string\"},\"permissions\":{\"items\":{\"properties\":{\"idModel\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"enum\":[\"*\"],\"type\":\"string\"}]},\"modelType\":{\"enum\":[\"board\",\"member\",\"organization\",\"enterprise\"],\"type\":\"string\"},\"read\":{\"type\":\"boolean\"},\"write\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/tokens/{token}","rename":{"param":{"token":"id"}},"segments":[{"lit":"tokens"},{"var":"id"}],"select":{"exist":["field","id","webhook"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"token","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /tokens/{token}/","json":"{\"operationId\":\"delete-token\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/tokens/{token}/","rename":{"param":{"token":"id"}},"segments":[{"lit":"tokens"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["member"]]},"key$":"token","name__orig":"token","Name":"Token","name_":"token","name-":"token","NAME":"TOKEN","index$":66}, {"active":true,"entity":"token","key$":"BasicTokenFlow","kind":"basic","name":"BasicTokenFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"member_id":"member01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"token_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"token_ref01","srcdatavar":"token_ref01_data","suffix":"_dt0"},"match":{"id":"token01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-token_ref01"}}],"index$":1}]}, 'Token')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let token_ref01_data = Object.values(setup.data.existing.token)[0]

    // LIST
    const token_ref01_ent = client.Token()
    const token_ref01_match = {}
    token_ref01_match['member_id'] = setup.idmap['member01']

    const token_ref01_list = (await token_ref01_ent.list(token_ref01_match)).map((e) => e.data())


    // LOAD
    const token_ref01_match_dt0 = {}
    token_ref01_match_dt0.id = token_ref01_data.id
    const token_ref01_data_dt0 = (await token_ref01_ent.load(token_ref01_match_dt0)).data()
    assert(token_ref01_data_dt0.id === token_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/token/TokenTestData.json')

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
    ['token01','token02','token03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_TOKEN_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_TOKEN_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_TOKEN_ENTID']
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
  
