

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('TokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Token()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"dateCreated":{"a":true,"fo":"date-time","h":"Date Created","n":"dateCreated","r":false,"t":"`$STRING`","key$":"dateCreated","index$":0},"dateExpires":{"a":true,"fo":"date-time","h":"Date Expires","n":"dateExpires","r":false,"t":"`$STRING`","key$":"dateExpires","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"idMember":{"a":true,"h":"Id Member","n":"idMember","r":false,"t":"`$STRING`","key$":"idMember","index$":3},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":false,"t":"`$STRING`","key$":"identifier","index$":4},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"t":"`$ARRAY`","union":{"branches":2,"count":1,"depth":3},"key$":"permissions","index$":5}},"id":{"field":"id","name":"id"},"name":"token","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /members/{id}/tokens","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"webhook","or":"webhook","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/tokens","q":{"exist":["member_id","webhook"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"tokens"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /tokens/{token}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"webhook","or":"webhook","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/tokens/{token}","q":{"exist":["field","id","webhook"]},"r":{"param":{"token":"id"}},"s":[{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /tokens/{token}/","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/tokens/{token}/","q":{"exist":["id"]},"r":{"param":{"token":"id"}},"s":[{"lit":"tokens"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.member"]]},"key$":"token","name__orig":"token","Name":"Token","name_":"token","name-":"token","NAME":"TOKEN","index$":63}, {"active":true,"entity":"token","key$":"BasicTokenFlow","kind":"basic","name":"BasicTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"token_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"token_ref01","srcdatavar":"token_ref01_data","suffix":"_dt0"},"m":{"id":"token01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-token_ref01"}}],"index$":1}]}, 'Token', {"GET /members/{id}/tokens":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"webhooks","in":"query","description":"Whether to include webhooks","required":false,"schema":{"type":"boolean","default":false},"index$":1}]},"GET /tokens/{token}":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"fields","in":"query","description":"`all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`","required":false,"schema":{"type":"string","enum":["identifier","idMember","dateCreated","dateExpires","permissions"],"default":"all","x-ref":"#/components/schemas/TokenFields"},"index$":1},{"name":"webhooks","in":"query","description":"Determines whether to include webhooks.","required":false,"schema":{"type":"boolean","default":false},"index$":2}]},"DELETE /tokens/{token}/":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let token_ref01_data = Object.values(setup.data.existing.token)[0] as any

    // LIST
    const token_ref01_ent = client.Token()
    const token_ref01_match: any = {}
    token_ref01_match['member_id'] = setup.idmap['member01']

    const token_ref01_list = (await token_ref01_ent.list(token_ref01_match)).map((e: any) => e.data())


    // LOAD
    const token_ref01_match_dt0: any = {}
    token_ref01_match_dt0.id = token_ref01_data.id
    const token_ref01_data_dt0 = (await token_ref01_ent.load(token_ref01_match_dt0)).data()
    assert(token_ref01_data_dt0.id === token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/token/TokenTestData.json')

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
    ['token01','token02','token03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_TOKEN_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_TOKEN_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_TOKEN_ENTID']
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
  
