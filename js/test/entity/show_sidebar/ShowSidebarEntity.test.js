
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


describe('ShowSidebarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.ShowSidebar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"show_sidebar","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"value","orig":"value","reqd":true,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"PUT /boards/{id}/myPrefs/showSidebar","json":"{\"operationId\":\"put-boards-id-myPrefs-showsidebar\",\"parameters\":[{\"description\":\"The id of the board to update\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Determines whether to show the side bar.\",\"in\":\"query\",\"name\":\"value\",\"required\":true,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/boards/{id}/myPrefs/showSidebar","rename":{"param":{"id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"myPrefs"},{"lit":"showSidebar"}],"select":{"exist":["board_id","value"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["board"]]},"key$":"show_sidebar","name__orig":"show_sidebar","Name":"ShowSidebar","name_":"show_sidebar","name-":"show-sidebar","NAME":"SHOW_SIDEBAR","index$":60}, {"active":true,"entity":"show_sidebar","key$":"BasicShowSidebarFlow","kind":"basic","name":"BasicShowSidebarFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"show_sidebar_ref01","srcdatavar":"show_sidebar_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-show_sidebar_ref01"}}],"valid":[],"index$":0}]}, 'ShowSidebar')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let show_sidebar_ref01_data = Object.values(setup.data.existing.show_sidebar)[0]

    // UPDATE
    const show_sidebar_ref01_ent = client.ShowSidebar()
    const show_sidebar_ref01_data_up0 = {}

    const show_sidebar_ref01_resdata_up0 = (await show_sidebar_ref01_ent.update(show_sidebar_ref01_data_up0)).data()
    assert(null != show_sidebar_ref01_resdata_up0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/show_sidebar/ShowSidebarTestData.json')

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
    ['show_sidebar01','show_sidebar02','show_sidebar03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_SHOW_SIDEBAR_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_SHOW_SIDEBAR_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_SHOW_SIDEBAR_ENTID']
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
  
