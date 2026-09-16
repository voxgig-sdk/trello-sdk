
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


describe('ClaimableOrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.ClaimableOrganization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"activeMembershipCount","req":false,"type":"`$NUMBER`","index$":0},{"active":true,"format":"date","name":"dateLastActive","req":false,"short":"The date of the most recent activity on any of the boards in the workspace.","type":"`$STRING`","index$":1},{"active":true,"name":"displayName","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"idActiveAdmins","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"logoUrl","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"products","req":false,"type":"`$ARRAY`","index$":7}],"id":{"field":"id","name":"id"},"name":"claimable_organization","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"enterpris_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active_since","orig":"active_since","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"inactive_since","orig":"inactive_since","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"limit","orig":"limit","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /enterprises/{id}/claimableOrganizations","json":"{\"operationId\":\"get-enterprises-id-claimableOrganizations\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Limits the number of workspaces to be sorted\",\"in\":\"query\",\"name\":\"limit\",\"required\":false,\"schema\":{\"type\":\"integer\"}},{\"description\":\"Specifies the sort order to return matching documents\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Name of the enterprise to retrieve workspaces for\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace\",\"in\":\"query\",\"name\":\"activeSince\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace\",\"in\":\"query\",\"name\":\"inactiveSince\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"claimableCount\":{\"example\":2,\"type\":\"number\"},\"organizations\":{\"items\":{\"properties\":{\"activeMembershipCount\":{\"example\":5,\"type\":\"number\"},\"dateLastActive\":{\"description\":\"The date of the most recent activity on any of the boards in the workspace. If the workspace has no boards, or the boards have no activity, this value will be null.\",\"example\":\"2019-08-22T18:15:53.546Z\",\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"617abd5995eae45169a11059\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idActiveAdmins\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"logoUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"name\":{\"example\":\"organization_name\",\"type\":\"string\"},\"products\":{\"items\":{\"format\":\"integer\",\"type\":\"number\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected erorr\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/claimableOrganizations","rename":{"param":{"id":"enterpris_id"}},"segments":[{"lit":"enterprises"},{"var":"enterpris_id"},{"lit":"claimableOrganizations"}],"select":{"exist":["active_since","cursor","enterpris_id","inactive_since","limit","name"]},"transform":{"req":"`reqdata`","res":"`body.organizations`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["enterpris"]]},"key$":"claimable_organization","name__orig":"claimable_organization","Name":"ClaimableOrganization","name_":"claimable_organization","name-":"claimable-organization","NAME":"CLAIMABLE_ORGANIZATION","index$":18}, {"active":true,"entity":"claimable_organization","key$":"BasicClaimableOrganizationFlow","kind":"basic","name":"BasicClaimableOrganizationFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"enterpris_id":"enterpris01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"claimable_organization_ref01"}}],"index$":0}]}, 'ClaimableOrganization')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let claimable_organization_ref01_data = Object.values(setup.data.existing.claimable_organization)[0]

    // LIST
    const claimable_organization_ref01_ent = client.ClaimableOrganization()
    const claimable_organization_ref01_match = {}
    claimable_organization_ref01_match['enterpris_id'] = setup.idmap['enterpris01']

    const claimable_organization_ref01_list = (await claimable_organization_ref01_ent.list(claimable_organization_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/claimable_organization/ClaimableOrganizationTestData.json')

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
    ['claimable_organization01','claimable_organization02','claimable_organization03','enterpris01','enterpris02','enterpris03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CLAIMABLE_ORGANIZATION_ENTID']
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
  
