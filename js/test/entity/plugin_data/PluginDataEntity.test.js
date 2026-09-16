
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


describe('PluginDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.PluginData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"plugin_data","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"organization_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /organizations/{id}/pluginData","json":"{\"operationId\":\"get-organizations-id-plugindata\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"properties\":{\"access\":{\"enum\":[\"private\",\"shared\"],\"example\":\"private\",\"type\":\"string\"},\"id\":{\"example\":\"5c487f39294cab6ac1d6b305\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"586e8d7b1af892b26d5b76b1\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idPlugin\":{\"example\":\"55a5d915446f517774210003\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"scope\":{\"enum\":[\"member\",\"board\",\"organization\",\"card\"],\"example\":\"organization\",\"type\":\"string\"},\"value\":{\"example\":\"{\\\"token\\\":\\\"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5\\\"}\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/organizations/{id}/pluginData","rename":{"param":{"id":"organization_id"}},"segments":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"pluginData"}],"select":{"exist":["organization_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/pluginData","json":"{\"operationId\":\"get-cards-id-plugindata\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/pluginData","rename":{"param":{"id":"card_id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"pluginData"}],"select":{"exist":["card_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["card"],["organization"]]},"key$":"plugin_data","name__orig":"plugin_data","Name":"PluginData","name_":"plugin_data","name-":"plugin-data","NAME":"PLUGIN_DATA","index$":54}, {"active":true,"entity":"plugin_data","key$":"BasicPluginDataFlow","kind":"basic","name":"BasicPluginDataFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"organization_id":"organization01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"plugin_data_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"plugin_data_ref01","srcdatavar":"plugin_data_ref01_data","suffix":"_dt0"},"match":{"id":"plugin_data01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-plugin_data_ref01"}}],"index$":1}]}, 'PluginData')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let plugin_data_ref01_data = Object.values(setup.data.existing.plugin_data)[0]

    // LIST
    const plugin_data_ref01_ent = client.PluginData()
    const plugin_data_ref01_match = {}
    plugin_data_ref01_match['organization_id'] = setup.idmap['organization01']

    const plugin_data_ref01_list = (await plugin_data_ref01_ent.list(plugin_data_ref01_match)).map((e) => e.data())


    // LOAD
    const plugin_data_ref01_match_dt0 = {}
    const plugin_data_ref01_data_dt0 = (await plugin_data_ref01_ent.load(plugin_data_ref01_match_dt0)).data()
    assert(null != plugin_data_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/plugin_data/PluginDataTestData.json')

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
    ['plugin_data01','plugin_data02','plugin_data03','card01','card02','card03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_PLUGIN_DATA_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_PLUGIN_DATA_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_PLUGIN_DATA_ENTID']
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
  
