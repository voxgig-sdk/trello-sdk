
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


describe('EmojiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Emoji()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"category":{"a":true,"h":"Category","n":"category","r":false,"t":"`$STRING`","key$":"category","index$":0},"keywords":{"a":true,"h":"Keywords","n":"keywords","r":false,"t":"`$ARRAY`","key$":"keywords","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2},"native":{"a":true,"h":"Native","n":"native","r":false,"t":"`$STRING`","key$":"native","index$":3},"sheetX":{"a":true,"h":"Sheet X","n":"sheetX","r":false,"t":"`$NUMBER`","key$":"sheetX","index$":4},"sheetY":{"a":true,"h":"Sheet Y","n":"sheetY","r":false,"t":"`$NUMBER`","key$":"sheetY","index$":5},"shortName":{"a":true,"h":"Short Name","n":"shortName","r":false,"t":"`$STRING`","key$":"shortName","index$":6},"shortNames":{"a":true,"h":"Short Names","n":"shortNames","r":false,"t":"`$ARRAY`","key$":"shortNames","index$":7},"text":{"a":true,"h":"Text","n":"text","r":false,"t":"`$STRING`","key$":"text","index$":8},"texts":{"a":true,"h":"Texts","n":"texts","r":false,"t":"`$STRING`","key$":"texts","index$":9},"tts":{"a":true,"h":"Tts","n":"tts","r":false,"t":"`$STRING`","key$":"tts","index$":10},"unified":{"a":true,"h":"Unified","n":"unified","r":false,"t":"`$STRING`","key$":"unified","index$":11}},"name":"emoji","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emoji","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"locale","or":"locale","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"spritesheet","or":"spritesheet","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/emoji","q":{"exist":["locale","spritesheet"]},"r":{},"s":[{"lit":"emoji"}],"t":{"req":"`reqdata`","res":"`body.trello`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"emoji","name__orig":"emoji","Name":"Emoji","name_":"emoji","name-":"emoji","NAME":"EMOJI","index$":24}, {"active":true,"entity":"emoji","key$":"BasicEmojiFlow","kind":"basic","name":"BasicEmojiFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"emoji_ref01"}}],"index$":0}]}, 'Emoji', {"GET /emoji":{"protocol":"http","parameters":[{"name":"locale","in":"query","description":"The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.","required":false,"schema":{"type":"string"},"index$":0},{"name":"spritesheets","in":"query","description":"`true` to return spritesheet URLs in the response","required":false,"schema":{"type":"boolean","default":false},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let emoji_ref01_data = Object.values(setup.data.existing.emoji)[0]

    // LIST
    const emoji_ref01_ent = client.Emoji()
    const emoji_ref01_match = {}

    const emoji_ref01_list = (await emoji_ref01_ent.list(emoji_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/emoji/EmojiTestData.json')

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
    ['emoji01','emoji02','emoji03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_EMOJI_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_EMOJI_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_EMOJI_ENTID']
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
  
