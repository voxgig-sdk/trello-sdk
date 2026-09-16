
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


describe('CustomFieldItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomFieldItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"idCustomField","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"idModel","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"modelType","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"value","req":false,"type":"`$OBJECT`","index$":4}],"id":{"field":"id","name":"id"},"name":"custom_field_item","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/customFieldItems","json":"{\"operationId\":\"get-cards-id-customfielditems\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idCustomField\":{\"example\":\"5b080fd8017bd1653b5480fa\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"5b080ff194611b41aaaa9570\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"modelType\":{\"enum\":[\"card\",\"board\",\"member\"],\"example\":\"card\",\"type\":\"string\"},\"value\":{\"properties\":{\"checked\":{\"example\":\"true\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/customFieldItems","rename":{"param":{"id":"card_id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"customFieldItems"}],"select":{"exist":["card_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["card"]]},"key$":"custom_field_item","name__orig":"custom_field_item","Name":"CustomFieldItem","name_":"custom_field_item","name-":"custom-field-item","NAME":"CUSTOM_FIELD_ITEM","index$":22}, {"active":true,"entity":"custom_field_item","key$":"BasicCustomFieldItemFlow","kind":"basic","name":"BasicCustomFieldItemFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"card_id":"card01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_field_item_ref01"}}],"index$":0}]}, 'CustomFieldItem')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let custom_field_item_ref01_data = Object.values(setup.data.existing.custom_field_item)[0]

    // LIST
    const custom_field_item_ref01_ent = client.CustomFieldItem()
    const custom_field_item_ref01_match = {}
    custom_field_item_ref01_match['card_id'] = setup.idmap['card01']

    const custom_field_item_ref01_list = (await custom_field_item_ref01_ent.list(custom_field_item_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_field_item/CustomFieldItemTestData.json')

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
    ['custom_field_item01','custom_field_item02','custom_field_item03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_FIELD_ITEM_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_FIELD_ITEM_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CUSTOM_FIELD_ITEM_ENTID']
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
  
