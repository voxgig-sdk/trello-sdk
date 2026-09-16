
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


describe('CardListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CardList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"card_list","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/list","json":"{\"operationId\":\"get-cards-id-list\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/list","segments":[{"lit":"cards"},{"var":"id"},{"lit":"list"}],"select":{"exist":["field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"card_list","name__orig":"card_list","Name":"CardList","name_":"card_list","name-":"card-list","NAME":"CARD_LIST","index$":15}, {"active":true,"entity":"card_list","key$":"BasicCardListFlow","kind":"basic","name":"BasicCardListFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"card_list_ref01","srcdatavar":"card_list_ref01_data","suffix":"_dt0"},"match":{"id":"card_list01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-card_list_ref01"}}],"index$":0}]}, 'CardList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let card_list_ref01_data = Object.values(setup.data.existing.card_list)[0]

    // LOAD
    const card_list_ref01_ent = client.CardList()
    const card_list_ref01_match_dt0 = {}
    card_list_ref01_match_dt0.id = card_list_ref01_data.id
    const card_list_ref01_data_dt0 = (await card_list_ref01_ent.load(card_list_ref01_match_dt0)).data()
    assert(card_list_ref01_data_dt0.id === card_list_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/card_list/CardListTestData.json')

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
    ['card_list01','card_list02','card_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CARD_LIST_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CARD_LIST_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CARD_LIST_ENTID']
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
  
