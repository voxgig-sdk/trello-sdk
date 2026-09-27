
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


describe('EnterpriseSignupUrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.EnterpriseSignupUrl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"signupUrl":{"a":true,"h":"Signup Url","n":"signupUrl","r":false,"t":"`$STRING`","key$":"signupUrl","index$":1}},"id":{"field":"id","name":"id"},"name":"enterprise_signup_url","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /enterprises/{id}/signupUrl","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"authenticate","or":"authenticate","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":false,"k":"query","n":"confirmation_accepted","or":"confirmation_accepted","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":null,"k":"query","n":"return_url","or":"return_url","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":false,"k":"query","n":"tos_accepted","or":"tos_accepted","r":false,"t":"`$BOOLEAN`","index$":3}]},"k":"http","m":"GET","o":"/enterprises/{id}/signupUrl","q":{"exist":["authenticate","confirmation_accepted","id","return_url","tos_accepted"]},"r":{},"s":[{"lit":"enterprises"},{"var":"id"},{"lit":"signupUrl"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"enterprise_signup_url","name__orig":"enterprise_signup_url","Name":"EnterpriseSignupUrl","name_":"enterprise_signup_url","name-":"enterprise-signup-url","NAME":"ENTERPRISE_SIGNUP_URL","index$":28}, {"active":true,"entity":"enterprise_signup_url","key$":"BasicEnterpriseSignupUrlFlow","kind":"basic","name":"BasicEnterpriseSignupUrlFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"enterprise_signup_url_ref01","srcdatavar":"enterprise_signup_url_ref01_data","suffix":"_dt0"},"m":{"id":"enterprise_signup_url01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enterprise_signup_url_ref01"}}],"index$":0}]}, 'EnterpriseSignupUrl', {"GET /enterprises/{id}/signupUrl":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the enterprise to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"authenticate","in":"query","description":"","required":false,"schema":{"type":"boolean","default":false},"index$":1},{"name":"confirmationAccepted","in":"query","description":"","required":false,"schema":{"type":"boolean","default":false},"index$":2},{"name":"returnUrl","in":"query","description":"Any valid URL.","required":false,"schema":{"type":"string","format":"url","default":null,"nullable":true},"index$":3},{"name":"tosAccepted","in":"query","description":"Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.","required":false,"schema":{"type":"boolean","default":false},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let enterprise_signup_url_ref01_data = Object.values(setup.data.existing.enterprise_signup_url)[0]

    // LOAD
    const enterprise_signup_url_ref01_ent = client.EnterpriseSignupUrl()
    const enterprise_signup_url_ref01_match_dt0 = {}
    enterprise_signup_url_ref01_match_dt0.id = enterprise_signup_url_ref01_data.id
    const enterprise_signup_url_ref01_data_dt0 = (await enterprise_signup_url_ref01_ent.load(enterprise_signup_url_ref01_match_dt0)).data()
    assert(enterprise_signup_url_ref01_data_dt0.id === enterprise_signup_url_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/enterprise_signup_url/EnterpriseSignupUrlTestData.json')

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
    ['enterprise_signup_url01','enterprise_signup_url02','enterprise_signup_url03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ENTERPRISE_SIGNUP_URL_ENTID']
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
  
