
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


describe('StickerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Sticker()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"sticker","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cards/{id}/stickers/{idSticker}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_sticker","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/cards/{id}/stickers/{idSticker}","q":{"exist":["card_id","field","id"]},"r":{"param":{"id":"card_id","idSticker":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /cards/{id}/stickers","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/cards/{id}/stickers","q":{"exist":["card_id","field"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /cards/{id}/stickers/{idSticker}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_sticker","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/cards/{id}/stickers/{idSticker}","q":{"exist":["card_id","id"]},"r":{"param":{"id":"card_id","idSticker":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /cards/{id}/stickers/{idSticker}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_sticker","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"left","or":"left","r":true,"t":"`$NUMBER`","index$":0},{"a":true,"ex":0,"k":"query","n":"rotate","or":"rotate","r":false,"t":"`$NUMBER`","index$":1},{"a":true,"k":"query","n":"top","or":"top","r":true,"t":"`$NUMBER`","index$":2},{"a":true,"k":"query","n":"z_index","or":"z_index","r":true,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"PUT","o":"/cards/{id}/stickers/{idSticker}","q":{"exist":["card_id","id","left","rotate","top","z_index"]},"r":{"param":{"id":"card_id","idSticker":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.card"]]},"key$":"sticker","name__orig":"sticker","Name":"Sticker","name_":"sticker","name-":"sticker","NAME":"STICKER","index$":61}, {"active":true,"entity":"sticker","key$":"BasicStickerFlow","kind":"basic","name":"BasicStickerFlow","param":{},"step":[{"a":true,"d":{"card_id":"card01"},"i":{"ref":"sticker_ref01","srcdatavar":"sticker_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sticker_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"sticker_ref01","srcdatavar":"sticker_ref01_data","suffix":"_dt0"},"m":{"id":"sticker01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sticker_ref01"}}],"index$":1}]}, 'Sticker', {"GET /cards/{id}/stickers/{idSticker}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idSticker","in":"path","description":"The ID of the sticker","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"fields","in":"query","description":"`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":2}]},"GET /cards/{id}/stickers":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"fields","in":"query","description":"`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":2}]},"DELETE /cards/{id}/stickers/{idSticker}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idSticker","in":"path","description":"The ID of the sticker","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"PUT /cards/{id}/stickers/{idSticker}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idSticker","in":"path","description":"The ID of the sticker","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"top","in":"query","description":"The top position of the sticker, from -60 to 100","required":true,"schema":{"type":"number","format":"float","minimum":-60,"maximum":100},"index$":2},{"name":"left","in":"query","description":"The left position of the sticker, from -60 to 100","required":true,"schema":{"type":"number","format":"float","minimum":-60,"maximum":100},"index$":3},{"name":"zIndex","in":"query","description":"The z-index of the sticker","required":true,"schema":{"type":"integer"},"index$":4},{"name":"rotate","in":"query","description":"The rotation of the sticker","required":false,"schema":{"type":"number","format":"float","default":0,"minimum":0,"maximum":360},"index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sticker_ref01_data = Object.values(setup.data.existing.sticker)[0]

    // UPDATE
    const sticker_ref01_ent = client.Sticker()
    const sticker_ref01_data_up0 = {}
    sticker_ref01_data_up0.id = sticker_ref01_data.id
    sticker_ref01_data_up0 ['card_id'] = setup.idmap['card_id']

    const sticker_ref01_resdata_up0 = (await sticker_ref01_ent.update(sticker_ref01_data_up0)).data()
    assert(sticker_ref01_resdata_up0.id === sticker_ref01_data_up0.id)


    // LOAD
    const sticker_ref01_match_dt0 = {}
    sticker_ref01_match_dt0.id = sticker_ref01_data.id
    const sticker_ref01_data_dt0 = (await sticker_ref01_ent.load(sticker_ref01_match_dt0)).data()
    assert(sticker_ref01_data_dt0.id === sticker_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/sticker/StickerTestData.json')

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
    ['sticker01','sticker02','sticker03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_STICKER_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_STICKER_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_STICKER_ENTID']
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
  
