
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"sticker","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_sticker","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/stickers/{idSticker}","json":"{\"operationId\":\"get-cards-id-stickers-idsticker\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the sticker\",\"in\":\"path\",\"name\":\"idSticker\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/stickers/{idSticker}","rename":{"param":{"id":"card_id","idSticker":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"select":{"exist":["card_id","field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /cards/{id}/stickers","json":"{\"operationId\":\"get-cards-id-stickers\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/stickers","rename":{"param":{"id":"card_id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"}],"select":{"exist":["card_id","field"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_sticker","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /cards/{id}/stickers/{idSticker}","json":"{\"operationId\":\"delete-cards-id-stickers-idsticker\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the sticker\",\"in\":\"path\",\"name\":\"idSticker\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/cards/{id}/stickers/{idSticker}","rename":{"param":{"id":"card_id","idSticker":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"select":{"exist":["card_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_sticker","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"left","orig":"left","reqd":true,"type":"`$NUMBER`","index$":0},{"active":true,"example":0,"kind":"query","name":"rotate","orig":"rotate","reqd":false,"type":"`$NUMBER`","index$":1},{"active":true,"kind":"query","name":"top","orig":"top","reqd":true,"type":"`$NUMBER`","index$":2},{"active":true,"kind":"query","name":"z_index","orig":"z_index","reqd":true,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"PUT /cards/{id}/stickers/{idSticker}","json":"{\"operationId\":\"put-cards-id-stickers-idsticker\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the sticker\",\"in\":\"path\",\"name\":\"idSticker\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The top position of the sticker, from -60 to 100\",\"in\":\"query\",\"name\":\"top\",\"required\":true,\"schema\":{\"format\":\"float\",\"maximum\":100,\"minimum\":-60,\"type\":\"number\"}},{\"description\":\"The left position of the sticker, from -60 to 100\",\"in\":\"query\",\"name\":\"left\",\"required\":true,\"schema\":{\"format\":\"float\",\"maximum\":100,\"minimum\":-60,\"type\":\"number\"}},{\"description\":\"The z-index of the sticker\",\"in\":\"query\",\"name\":\"zIndex\",\"required\":true,\"schema\":{\"type\":\"integer\"}},{\"description\":\"The rotation of the sticker\",\"in\":\"query\",\"name\":\"rotate\",\"required\":false,\"schema\":{\"default\":0,\"format\":\"float\",\"maximum\":360,\"minimum\":0,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/cards/{id}/stickers/{idSticker}","rename":{"param":{"id":"card_id","idSticker":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"stickers"},{"var":"id"}],"select":{"exist":["card_id","id","left","rotate","top","z_index"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["card"]]},"key$":"sticker","name__orig":"sticker","Name":"Sticker","name_":"sticker","name-":"sticker","NAME":"STICKER","index$":64}, {"active":true,"entity":"sticker","key$":"BasicStickerFlow","kind":"basic","name":"BasicStickerFlow","param":{},"step":[{"active":true,"data":{"card_id":"card01"},"input":{"ref":"sticker_ref01","srcdatavar":"sticker_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sticker_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"sticker_ref01","srcdatavar":"sticker_ref01_data","suffix":"_dt0"},"match":{"id":"sticker01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-sticker_ref01"}}],"index$":1}]}, 'Sticker')
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
  
