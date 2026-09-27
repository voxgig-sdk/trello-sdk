
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


describe('CustomStickerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomSticker()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"scaled":{"a":true,"h":"Scaled","n":"scaled","r":false,"t":"`$ARRAY`","key$":"scaled","index$":1},"url":{"a":true,"fo":"url","h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":2}},"id":{"field":"id","name":"id"},"name":"custom_sticker","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /members/{id}/customStickers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"file","or":"file","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/members/{id}/customStickers","q":{"exist":["file","member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"customStickers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /members/{id}/customStickers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/customStickers","q":{"exist":["member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"customStickers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /members/{id}/customStickers/{idSticker}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_sticker","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/customStickers/{idSticker}","q":{"exist":["field","id","member_id"]},"r":{"param":{"id":"member_id","idSticker":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"customStickers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /members/{id}/customStickers/{idSticker}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_sticker","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/members/{id}/customStickers/{idSticker}","q":{"exist":["id","member_id"]},"r":{"param":{"id":"member_id","idSticker":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"customStickers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.member"]]},"key$":"custom_sticker","name__orig":"custom_sticker","Name":"CustomSticker","name_":"custom_sticker","name-":"custom-sticker","NAME":"CUSTOM_STICKER","index$":22}, {"active":true,"entity":"custom_sticker","key$":"BasicCustomStickerFlow","kind":"basic","name":"BasicCustomStickerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"custom_sticker_ref01"},"m":{"member_id":"member01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"custom_sticker_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"custom_sticker_ref01","srcdatavar":"custom_sticker_ref01_data","suffix":"_dt0"},"m":{"id":"custom_sticker01","member_id":"member01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_sticker_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"custom_sticker_ref01","suffix":"_rm0"},"m":{"id":"custom_sticker01","member_id":"member01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"custom_sticker_ref01"}}],"index$":4}]}, 'CustomSticker', {"POST /members/{id}/customStickers":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"file","in":"query","description":"","required":true,"schema":{"type":"string","format":"binary"},"index$":1}]},"GET /members/{id}/customStickers":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /members/{id}/customStickers/{idSticker}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idSticker","in":"path","description":"The ID of the uploaded sticker","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"fields","in":"query","description":"`all` or a comma-separated list of `scaled`, `url`","required":false,"explode":false,"style":"form","schema":{"enum":["scaled","url","all"],"type":"string","default":"all"},"index$":2}]},"DELETE /members/{id}/customStickers/{idSticker}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idSticker","in":"path","description":"The ID of the uploaded sticker","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_sticker_ref01_ent = client.CustomSticker()
    let custom_sticker_ref01_data = setup.data.new.custom_sticker['custom_sticker_ref01']
    custom_sticker_ref01_data['member_id'] = setup.idmap['member01']

    custom_sticker_ref01_data = (await custom_sticker_ref01_ent.create(custom_sticker_ref01_data)).data()
    assert(null != custom_sticker_ref01_data.id)


    // LIST
    const custom_sticker_ref01_match = {}
    custom_sticker_ref01_match['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match)).map((e) => e.data())

    assert(!isempty(select(custom_sticker_ref01_list, { id: custom_sticker_ref01_data.id })))


    // LOAD
    const custom_sticker_ref01_match_dt0 = {}
    custom_sticker_ref01_match_dt0.id = custom_sticker_ref01_data.id
    const custom_sticker_ref01_data_dt0 = (await custom_sticker_ref01_ent.load(custom_sticker_ref01_match_dt0)).data()
    assert(custom_sticker_ref01_data_dt0.id === custom_sticker_ref01_data.id)


    // REMOVE
    const custom_sticker_ref01_match_rm0 = {}
    custom_sticker_ref01_match_rm0.id = custom_sticker_ref01_data.id
    await custom_sticker_ref01_ent.remove(custom_sticker_ref01_match_rm0)
  

    // LIST
    const custom_sticker_ref01_match_rt0 = {}
    custom_sticker_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list_rt0 = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(custom_sticker_ref01_list_rt0, { id: custom_sticker_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_sticker/CustomStickerTestData.json')

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
    ['custom_sticker01','custom_sticker02','custom_sticker03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_STICKER_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_STICKER_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CUSTOM_STICKER_ENTID']
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
  
