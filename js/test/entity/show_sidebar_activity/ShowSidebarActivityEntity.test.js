
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


describe('ShowSidebarActivityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.ShowSidebarActivity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"show_sidebar_activity","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /boards/{id}/myPrefs/showSidebarActivity","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"board_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"value","or":"value","r":true,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"PUT","o":"/boards/{id}/myPrefs/showSidebarActivity","q":{"exist":["board_id","value"]},"r":{"param":{"id":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"myPrefs"},{"lit":"showSidebarActivity"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"]]},"key$":"show_sidebar_activity","name__orig":"show_sidebar_activity","Name":"ShowSidebarActivity","name_":"show_sidebar_activity","name-":"show-sidebar-activity","NAME":"SHOW_SIDEBAR_ACTIVITY","index$":58}, {"active":true,"entity":"show_sidebar_activity","key$":"BasicShowSidebarActivityFlow","kind":"basic","name":"BasicShowSidebarActivityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"show_sidebar_activity_ref01","srcdatavar":"show_sidebar_activity_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-show_sidebar_activity_ref01"}}],"v":[],"index$":0}]}, 'ShowSidebarActivity', {"PUT /boards/{id}/myPrefs/showSidebarActivity":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The id of the board to update","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"value","in":"query","description":"Determines whether to show sidebar activity.","required":true,"schema":{"type":"boolean"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let show_sidebar_activity_ref01_data = Object.values(setup.data.existing.show_sidebar_activity)[0]

    // UPDATE
    const show_sidebar_activity_ref01_ent = client.ShowSidebarActivity()
    const show_sidebar_activity_ref01_data_up0 = {}

    const show_sidebar_activity_ref01_resdata_up0 = (await show_sidebar_activity_ref01_ent.update(show_sidebar_activity_ref01_data_up0)).data()
    assert(null != show_sidebar_activity_ref01_resdata_up0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/show_sidebar_activity/ShowSidebarActivityTestData.json')

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
    ['show_sidebar_activity01','show_sidebar_activity02','show_sidebar_activity03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_SHOW_SIDEBAR_ACTIVITY_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_SHOW_SIDEBAR_ACTIVITY_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_SHOW_SIDEBAR_ACTIVITY_ENTID']
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
  
