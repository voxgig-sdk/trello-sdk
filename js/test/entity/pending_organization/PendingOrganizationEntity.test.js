
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date":{"a":true,"fo":"date","h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":0},"displayName":{"a":true,"h":"Display Name","n":"displayName","r":false,"t":"`$STRING`","key$":"displayName","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"idMember":{"a":true,"h":"Id Member","n":"idMember","r":false,"t":"`$STRING`","key$":"idMember","index$":3},"logoUrl":{"a":true,"h":"Logo Url","n":"logoUrl","r":false,"t":"`$STRING`","key$":"logoUrl","index$":4},"memberRequestor":{"a":true,"h":"Member Requestor","n":"memberRequestor","r":false,"t":"`$OBJECT`","key$":"memberRequestor","index$":5},"membershipCount":{"a":true,"h":"Membership Count","n":"membershipCount","r":false,"t":"`$NUMBER`","key$":"membershipCount","index$":6},"transferability":{"a":true,"h":"Transferability","n":"transferability","r":false,"t":"`$OBJECT`","key$":"transferability","index$":7}},"id":{"field":"id","name":"id"},"name":"pending_organization","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /enterprises/{id}/pendingOrganizations","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"enterprise_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active_since","or":"active_since","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"inactive_since","or":"inactive_since","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/enterprises/{id}/pendingOrganizations","q":{"exist":["active_since","enterprise_id","inactive_since"]},"r":{"param":{"id":"enterprise_id"}},"s":[{"lit":"enterprises"},{"var":"enterprise_id"},{"lit":"pendingOrganizations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.enterprise"]]},"key$":"pending_organization","name__orig":"pending_organization","Name":"PendingOrganization","name_":"pending_organization","name-":"pending-organization","NAME":"PENDING_ORGANIZATION","index$":49}, {"active":true,"entity":"pending_organization","key$":"BasicPendingOrganizationFlow","kind":"basic","name":"BasicPendingOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"enterprise_id":"enterprise01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"pending_organization_ref01"}}],"index$":0}]}, 'PendingOrganization', {"GET /enterprises/{id}/pendingOrganizations":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the enterprise to retrieve","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"activeSince","in":"query","description":"Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace","required":false,"schema":{"type":"string"},"index$":1},{"name":"inactiveSince","in":"query","description":"Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace","required":false,"schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let pending_organization_ref01_data = Object.values(setup.data.existing.pending_organization)[0]

    // LIST
    const pending_organization_ref01_ent = client.PendingOrganization()
    const pending_organization_ref01_match = {}
    pending_organization_ref01_match['enterprise_id'] = setup.idmap['enterprise01']

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
    ['pending_organization01','pending_organization02','pending_organization03','enterprise01','enterprise02','enterprise03'],
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
  
