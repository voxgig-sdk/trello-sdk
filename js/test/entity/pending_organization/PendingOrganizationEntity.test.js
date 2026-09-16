
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


describe('PendingOrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.PendingOrganization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"date","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"displayName","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"idMember","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"logoUrl","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"memberRequestor","req":false,"type":"`$OBJECT`","index$":5},{"active":true,"name":"membershipCount","req":false,"type":"`$NUMBER`","index$":6},{"active":true,"name":"transferability","req":false,"type":"`$OBJECT`","index$":7}],"id":{"field":"id","name":"id"},"name":"pending_organization","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"enterpris_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active_since","orig":"active_since","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"inactive_since","orig":"inactive_since","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /enterprises/{id}/pendingOrganizations","json":"{\"operationId\":\"get-enterprises-id-pendingOrganizations\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace\",\"in\":\"query\",\"name\":\"activeSince\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace\",\"in\":\"query\",\"name\":\"inactiveSince\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"date\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"617ac9070293e6612650e0ca\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"logoUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"memberRequestor\":{\"properties\":{\"fullName\":{\"example\":\"Bob Loblaw (Trello)\",\"type\":\"string\"},\"id\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"membershipCount\":{\"example\":2,\"type\":\"number\"},\"transferability\":{\"properties\":{\"newBillableMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"restrictedMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"transferrable\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected erorr\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/pendingOrganizations","rename":{"param":{"id":"enterpris_id"}},"segments":[{"lit":"enterprises"},{"var":"enterpris_id"},{"lit":"pendingOrganizations"}],"select":{"exist":["active_since","enterpris_id","inactive_since"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["enterpris"]]},"key$":"pending_organization","name__orig":"pending_organization","Name":"PendingOrganization","name_":"pending_organization","name-":"pending-organization","NAME":"PENDING_ORGANIZATION","index$":52}, {"active":true,"entity":"pending_organization","key$":"BasicPendingOrganizationFlow","kind":"basic","name":"BasicPendingOrganizationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"enterpris_id":"enterpris01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"pending_organization_ref01"}}],"index$":0}]}, 'PendingOrganization')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pending_organization_ref01_data = Object.values(setup.data.existing.pending_organization)[0]

    // LIST
    const pending_organization_ref01_ent = client.PendingOrganization()
    const pending_organization_ref01_match = {}
    pending_organization_ref01_match['enterpris_id'] = setup.idmap['enterpris01']

    const pending_organization_ref01_list = (await pending_organization_ref01_ent.list(pending_organization_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/pending_organization/PendingOrganizationTestData.json')

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
    ['pending_organization01','pending_organization02','pending_organization03','enterpris01','enterpris02','enterpris03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_PENDING_ORGANIZATION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_PENDING_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_PENDING_ORGANIZATION_ENTID']
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
  
