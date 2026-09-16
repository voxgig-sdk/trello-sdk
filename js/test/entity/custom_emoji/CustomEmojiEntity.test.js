
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


describe('CustomEmojiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomEmoji()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"url","name":"url","req":false,"type":"`$STRING`","index$":2}],"id":{"field":"id","name":"id"},"name":"custom_emoji","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"file","orig":"file","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"name","orig":"name","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /members/{id}/customEmoji","json":"{\"operationId\":\"post-members-id-customemoji\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"\",\"in\":\"query\",\"name\":\"file\",\"required\":true,\"schema\":{\"format\":\"binary\",\"type\":\"string\"}},{\"description\":\"Name for the emoji. 2 - 64 characters\",\"in\":\"query\",\"name\":\"name\",\"required\":true,\"schema\":{\"maxLength\":64,\"minLength\":2,\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5900ac11ed55d6d2c355c5d6\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"chorizo\",\"type\":\"string\"},\"url\":{\"example\":\"https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/members/{id}/customEmoji","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customEmoji"}],"select":{"exist":["file","member_id","name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/customEmoji","json":"{\"operationId\":\"get-members-id-customemoji\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"id\":{\"example\":\"5900ac11ed55d6d2c355c5d6\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"chorizo\",\"type\":\"string\"},\"url\":{\"example\":\"https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/customEmoji","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customEmoji"}],"select":{"exist":["member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_emoji","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/customEmoji/{idEmoji}","json":"{\"operationId\":\"membersidcustomemojiidemoji\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the custom emoji\",\"in\":\"path\",\"name\":\"idEmoji\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of `name`, `url`\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"name\",\"url\",\"all\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"id\":{\"example\":\"5900ac11ed55d6d2c355c5d6\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"chorizo\",\"type\":\"string\"},\"url\":{\"example\":\"https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/customEmoji/{idEmoji}","rename":{"param":{"id":"member_id","idEmoji":"id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"customEmoji"},{"var":"id"}],"select":{"exist":["field","id","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["member"]]},"key$":"custom_emoji","name__orig":"custom_emoji","Name":"CustomEmoji","name_":"custom_emoji","name-":"custom-emoji","NAME":"CUSTOM_EMOJI","index$":20}, {"active":true,"entity":"custom_emoji","key$":"BasicCustomEmojiFlow","kind":"basic","name":"BasicCustomEmojiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"custom_emoji_ref01"},"match":{"member_id":"member01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"member_id":"member01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_emoji_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"custom_emoji_ref01","srcdatavar":"custom_emoji_ref01_data","suffix":"_dt0"},"match":{"id":"custom_emoji01","member_id":"member01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_emoji_ref01"}}],"index$":2}]}, 'CustomEmoji')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_emoji_ref01_ent = client.CustomEmoji()
    let custom_emoji_ref01_data = setup.data.new.custom_emoji['custom_emoji_ref01']
    custom_emoji_ref01_data['member_id'] = setup.idmap['member01']

    custom_emoji_ref01_data = (await custom_emoji_ref01_ent.create(custom_emoji_ref01_data)).data()
    assert(null != custom_emoji_ref01_data.id)


    // LIST
    const custom_emoji_ref01_match = {}
    custom_emoji_ref01_match['member_id'] = setup.idmap['member01']

    const custom_emoji_ref01_list = (await custom_emoji_ref01_ent.list(custom_emoji_ref01_match)).map((e) => e.data())

    assert(!isempty(select(custom_emoji_ref01_list, { id: custom_emoji_ref01_data.id })))


    // LOAD
    const custom_emoji_ref01_match_dt0 = {}
    custom_emoji_ref01_match_dt0.id = custom_emoji_ref01_data.id
    const custom_emoji_ref01_data_dt0 = (await custom_emoji_ref01_ent.load(custom_emoji_ref01_match_dt0)).data()
    assert(custom_emoji_ref01_data_dt0.id === custom_emoji_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_emoji/CustomEmojiTestData.json')

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
    ['custom_emoji01','custom_emoji02','custom_emoji03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_EMOJI_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_EMOJI_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CUSTOM_EMOJI_ENTID']
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
  
