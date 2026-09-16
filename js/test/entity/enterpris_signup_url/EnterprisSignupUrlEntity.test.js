
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


describe('EnterprisSignupUrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.EnterprisSignupUrl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"signupUrl","req":false,"type":"`$STRING`","index$":1}],"id":{"field":"id","name":"id"},"name":"enterpris_signup_url","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"authenticate","orig":"authenticate","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":false,"kind":"query","name":"confirmation_accepted","orig":"confirmation_accepted","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":null,"kind":"query","name":"return_url","orig":"return_url","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":false,"kind":"query","name":"tos_accepted","orig":"tos_accepted","reqd":false,"type":"`$BOOLEAN`","index$":3}]},"contract":{"id":"GET /enterprises/{id}/signupUrl","json":"{\"operationId\":\"get-enterprises-id-signupurl\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"authenticate\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"confirmationAccepted\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Any valid URL.\",\"in\":\"query\",\"name\":\"returnUrl\",\"required\":false,\"schema\":{\"default\":null,\"format\":\"url\",\"nullable\":true,\"type\":\"string\"}},{\"description\":\"Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.\",\"in\":\"query\",\"name\":\"tosAccepted\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"signupUrl\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/signupUrl","segments":[{"lit":"enterprises"},{"var":"id"},{"lit":"signupUrl"}],"select":{"exist":["authenticate","confirmation_accepted","id","return_url","tos_accepted"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"enterpris_signup_url","name__orig":"enterpris_signup_url","Name":"EnterprisSignupUrl","name_":"enterpris_signup_url","name-":"enterpris-signup-url","NAME":"ENTERPRIS_SIGNUP_URL","index$":27}, {"active":true,"entity":"enterpris_signup_url","key$":"BasicEnterprisSignupUrlFlow","kind":"basic","name":"BasicEnterprisSignupUrlFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"enterpris_signup_url_ref01","srcdatavar":"enterpris_signup_url_ref01_data","suffix":"_dt0"},"match":{"id":"enterpris_signup_url01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enterpris_signup_url_ref01"}}],"index$":0}]}, 'EnterprisSignupUrl')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let enterpris_signup_url_ref01_data = Object.values(setup.data.existing.enterpris_signup_url)[0]

    // LOAD
    const enterpris_signup_url_ref01_ent = client.EnterprisSignupUrl()
    const enterpris_signup_url_ref01_match_dt0 = {}
    enterpris_signup_url_ref01_match_dt0.id = enterpris_signup_url_ref01_data.id
    const enterpris_signup_url_ref01_data_dt0 = (await enterpris_signup_url_ref01_ent.load(enterpris_signup_url_ref01_match_dt0)).data()
    assert(enterpris_signup_url_ref01_data_dt0.id === enterpris_signup_url_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/enterpris_signup_url/EnterprisSignupUrlTestData.json')

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
    ['enterpris_signup_url01','enterpris_signup_url02','enterpris_signup_url03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ENTERPRIS_SIGNUP_URL_ENTID']
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
  
