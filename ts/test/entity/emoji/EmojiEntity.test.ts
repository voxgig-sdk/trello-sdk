

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TrelloSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


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

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'emoji.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"category","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"keywords","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"native","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"sheetX","req":false,"type":"`$NUMBER`","index$":4},{"active":true,"name":"sheetY","req":false,"type":"`$NUMBER`","index$":5},{"active":true,"name":"shortName","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"shortNames","req":false,"type":"`$ARRAY`","index$":7},{"active":true,"name":"text","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"texts","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"tts","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"unified","req":false,"type":"`$STRING`","index$":11}],"name":"emoji","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"locale","orig":"locale","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":false,"kind":"query","name":"spritesheet","orig":"spritesheet","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /emoji","json":"{\"operationId\":\"emoji\",\"parameters\":[{\"description\":\"The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.\",\"in\":\"query\",\"name\":\"locale\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"`true` to return spritesheet URLs in the response\",\"in\":\"query\",\"name\":\"spritesheets\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"trello\":{\"items\":{\"properties\":{\"category\":{\"example\":\"Smileys & People\",\"type\":\"string\"},\"keywords\":{\"items\":{\"example\":\"face\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"example\":\"GRINNING FACE\",\"type\":\"string\"},\"native\":{\"example\":\"😀\",\"type\":\"string\"},\"sheetX\":{\"example\":30,\"type\":\"number\"},\"sheetY\":{\"example\":24,\"type\":\"number\"},\"shortName\":{\"example\":\"grinning\",\"type\":\"string\"},\"shortNames\":{\"items\":{\"example\":\"grinning\\\"\",\"type\":\"string\"},\"type\":\"array\"},\"text\":{\"example\":\":)\",\"type\":\"string\"},\"texts\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"tts\":{\"example\":\"grinning face\",\"type\":\"string\"},\"unified\":{\"example\":\"1F600\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/emoji","segments":[{"lit":"emoji"}],"select":{"exist":["locale","spritesheet"]},"transform":{"req":"`reqdata`","res":"`body.trello`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"emoji","name__orig":"emoji","Name":"Emoji","name_":"emoji","name-":"emoji","NAME":"EMOJI","index$":25}, {"active":true,"entity":"emoji","key$":"BasicEmojiFlow","kind":"basic","name":"BasicEmojiFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"emoji_ref01"}}],"index$":0}]}, 'Emoji')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let emoji_ref01_data = Object.values(setup.data.existing.emoji)[0] as any

    // LIST
    const emoji_ref01_ent = client.Emoji()
    const emoji_ref01_match: any = {}

    const emoji_ref01_list = (await emoji_ref01_ent.list(emoji_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
