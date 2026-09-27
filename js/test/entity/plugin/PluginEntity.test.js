
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


describe('PluginEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Plugin()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"plugin","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /boards/{id}/boardPlugins","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards/{id}/boardPlugins","q":{"exist":["board_id"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"boardPlugins"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /boards/{id}/plugins","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"enabled","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/boards/{id}/plugins","q":{"exist":["board_id","filter"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"plugins"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /plugins/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/plugins/{id}/","q":{"exist":["id"]},"r":{},"s":[{"lit":"plugins"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /plugins/{id}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/plugins/{id}/","q":{"exist":["id"]},"r":{},"s":[{"lit":"plugins"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"]]},"key$":"plugin","name__orig":"plugin","Name":"Plugin","name_":"plugin","name-":"plugin","NAME":"PLUGIN","index$":50}, {"active":true,"entity":"plugin","key$":"BasicPluginFlow","kind":"basic","name":"BasicPluginFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"board_id":"board01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"plugin_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"plugin_ref01","srcdatavar":"plugin_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-plugin_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"plugin_ref01","srcdatavar":"plugin_ref01_data","suffix":"_dt0"},"m":{"id":"plugin01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-plugin_ref01"}}],"index$":2}]}, 'Plugin', {"GET /boards/{id}/boardPlugins":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Board","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /boards/{id}/plugins":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the board","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"filter","in":"query","description":"One of: `enabled` or `available`","required":false,"schema":{"type":"string","default":"enabled","enum":["enabled","available"]},"index$":1}]},"GET /plugins/{id}/":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or name of the organization","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /plugins/{id}/":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or name of the organization","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let plugin_ref01_data = Object.values(setup.data.existing.plugin)[0]

    // LIST
    const plugin_ref01_ent = client.Plugin()
    const plugin_ref01_match = {}
    plugin_ref01_match['board_id'] = setup.idmap['board01']

    const plugin_ref01_list = (await plugin_ref01_ent.list(plugin_ref01_match)).map((e) => e.data())


    // UPDATE
    const plugin_ref01_data_up0 = {}
    plugin_ref01_data_up0.id = plugin_ref01_data.id

    const plugin_ref01_resdata_up0 = (await plugin_ref01_ent.update(plugin_ref01_data_up0)).data()
    assert(plugin_ref01_resdata_up0.id === plugin_ref01_data_up0.id)


    // LOAD
    const plugin_ref01_match_dt0 = {}
    plugin_ref01_match_dt0.id = plugin_ref01_data.id
    const plugin_ref01_data_dt0 = (await plugin_ref01_ent.load(plugin_ref01_match_dt0)).data()
    assert(plugin_ref01_data_dt0.id === plugin_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/plugin/PluginTestData.json')

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
    ['plugin01','plugin02','plugin03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_PLUGIN_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_PLUGIN_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_PLUGIN_ENTID']
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
  
