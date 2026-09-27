

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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"t":"`$BOOLEAN`","key$":"active","index$":0},"callbackURL":{"a":true,"fo":"url","h":"Callback Url","n":"callbackURL","r":false,"t":"`$STRING`","key$":"callbackURL","index$":1},"consecutiveFailures":{"a":true,"h":"Consecutive Failures","n":"consecutiveFailures","r":false,"t":"`$NUMBER`","key$":"consecutiveFailures","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":3},"firstConsecutiveFailDate":{"a":true,"fo":"date","h":"First Consecutive Fail Date","n":"firstConsecutiveFailDate","r":false,"t":"`$STRING`","key$":"firstConsecutiveFailDate","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"idModel":{"a":true,"h":"Id Model","n":"idModel","r":false,"t":"`$STRING`","key$":"idModel","index$":6}},"id":{"field":"id","name":"id"},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks/","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"callback_url","or":"callback_url","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_model","or":"id_model","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"POST","o":"/webhooks/","q":{"exist":["active","callback_url","description","id_model"]},"r":{},"s":[{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /tokens/{token}/webhooks","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"token_id","or":"token","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"callback_url","or":"callback_url","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_model","or":"id_model","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/tokens/{token}/webhooks","q":{"exist":["callback_url","description","id_model","token_id"]},"r":{"param":{"token":"token_id"}},"s":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /tokens/{token}/webhooks","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"token_id","or":"token","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/tokens/{token}/webhooks","q":{"exist":["token_id"]},"r":{"param":{"token":"token_id"}},"s":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/webhooks/{id}/{field}","q":{"exist":["field","id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /tokens/{token}/webhooks/{idWebhook}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_webhook","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"token_id","or":"token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/tokens/{token}/webhooks/{idWebhook}","q":{"exist":["id","token_id"]},"r":{"param":{"idWebhook":"id","token":"token_id"}},"s":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /webhooks/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/webhooks/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /tokens/{token}/webhooks/{idWebhook}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_webhook","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"token_id","or":"token","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/tokens/{token}/webhooks/{idWebhook}","q":{"exist":["id","token_id"]},"r":{"param":{"idWebhook":"id","token":"token_id"}},"s":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /webhooks/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/webhooks/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /webhooks/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"callback_url","or":"callback_url","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_model","or":"id_model","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"PUT","o":"/webhooks/{id}","q":{"exist":["active","callback_url","description","id","id_model"]},"r":{},"s":[{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /tokens/{token}/webhooks/{idWebhook}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_webhook","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"token_id","or":"token","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"callback_url","or":"callback_url","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"query","n":"id_model","or":"id_model","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/tokens/{token}/webhooks/{idWebhook}","q":{"exist":["callback_url","description","id","id_model","token_id"]},"r":{"param":{"idWebhook":"id","token":"token_id"}},"s":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.token"]]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":66}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_ref01"},"m":{"token_id":"token01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"token_id":"token01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhook_ref01"}}],"index$":1},{"a":true,"d":{"token_id":"token01"},"i":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_up0","textfield":"callbackURL"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_dt0"},"m":{"id":"webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"webhook_ref01","suffix":"_rm0"},"m":{"id":"webhook01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"token_id":"token01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"webhook_ref01"}}],"index$":5}]}, 'Webhook', {"POST /webhooks/":{"protocol":"http","parameters":[{"name":"description","in":"query","description":"A string with a length from `0` to `16384`.","required":false,"schema":{"type":"string","maxLength":16384,"minLength":0},"index$":0},{"name":"callbackURL","in":"query","description":"A valid URL that is reachable with a `HEAD` and `POST` request.","required":true,"schema":{"type":"string","format":"url"},"index$":1},{"name":"idModel","in":"query","description":"ID of the model to be monitored","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":2},{"name":"active","in":"query","description":"Determines whether the webhook is active and sending `POST` requests.","required":false,"schema":{"type":"boolean"},"index$":3}]},"POST /tokens/{token}/webhooks":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"description","in":"query","description":"A description to be displayed when retrieving information about the webhook.","required":false,"schema":{"type":"string"},"index$":1},{"name":"callbackURL","in":"query","description":"The URL that the webhook should POST information to.","required":true,"schema":{"type":"string","format":"url"},"index$":2},{"name":"idModel","in":"query","description":"ID of the object to create a webhook on.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":3}]},"GET /tokens/{token}/webhooks":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0}]},"GET /webhooks/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the webhook.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"field","in":"path","description":"Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`","required":true,"schema":{"enum":["active","callbackURL","description","idModel","consecutiveFailures","firstConsecutiveFailDate"],"type":"string"},"index$":1}]},"GET /tokens/{token}/webhooks/{idWebhook}":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"idWebhook","in":"path","description":"ID of the [Webhooks](ref:webhooks) to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"GET /webhooks/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the webhook to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"DELETE /tokens/{token}/webhooks/{idWebhook}":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"idWebhook","in":"path","description":"ID of the [Webhooks](ref:webhooks) to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"DELETE /webhooks/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the webhook to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /webhooks/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the webhook to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"description","in":"query","description":"A string with a length from `0` to `16384`.","required":false,"schema":{"type":"string","maxLength":16384,"minLength":0},"index$":1},{"name":"callbackURL","in":"query","description":"A valid URL that is reachable with a `HEAD` and `POST` request.","required":false,"schema":{"type":"string","format":"url"},"index$":2},{"name":"idModel","in":"query","description":"ID of the model to be monitored","required":false,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":3},{"name":"active","in":"query","description":"Determines whether the webhook is active and sending `POST` requests.","required":false,"schema":{"type":"boolean"},"index$":4}]},"PUT /tokens/{token}/webhooks/{idWebhook}":{"protocol":"http","parameters":[{"name":"token","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"idWebhook","in":"path","description":"ID of the [Webhooks](ref:webhooks) to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"description","in":"query","description":"A description to be displayed when retrieving information about the webhook.","required":false,"schema":{"type":"string"},"index$":2},{"name":"callbackURL","in":"query","description":"The URL that the webhook should `POST` information to.","required":false,"schema":{"type":"string","format":"url"},"index$":3},{"name":"idModel","in":"query","description":"ID of the object that the webhook is on.","required":false,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']
    webhook_ref01_data['token_id'] = setup.idmap['token01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data.id)


    // LIST
    const webhook_ref01_match: any = {}
    webhook_ref01_match['token_id'] = setup.idmap['token01']

    const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(webhook_ref01_list, { id: webhook_ref01_data.id })))


    // UPDATE
    const webhook_ref01_data_up0: any = {}
    webhook_ref01_data_up0.id = webhook_ref01_data.id
    webhook_ref01_data_up0 ['token_id'] = setup.idmap['token_id']

    const webhook_ref01_markdef_up0 = { name: 'callbackURL', value: 'Mark01-webhook_ref01_' + setup.now }
    ;(webhook_ref01_data_up0 as any)[webhook_ref01_markdef_up0.name] = webhook_ref01_markdef_up0.value

    const webhook_ref01_resdata_up0 = (await webhook_ref01_ent.update(webhook_ref01_data_up0)).data()
    assert(webhook_ref01_resdata_up0.id === webhook_ref01_data_up0.id)

    assert((webhook_ref01_resdata_up0 as any)[webhook_ref01_markdef_up0.name] === webhook_ref01_markdef_up0.value)


    // LOAD
    const webhook_ref01_match_dt0: any = {}
    webhook_ref01_match_dt0.id = webhook_ref01_data.id
    const webhook_ref01_data_dt0 = (await webhook_ref01_ent.load(webhook_ref01_match_dt0)).data()
    assert(webhook_ref01_data_dt0.id === webhook_ref01_data.id)


    // REMOVE
    const webhook_ref01_match_rm0: any = { id: webhook_ref01_data.id }
    await webhook_ref01_ent.remove(webhook_ref01_match_rm0)
  

    // LIST
    const webhook_ref01_match_rt0: any = {}
    webhook_ref01_match_rt0['token_id'] = setup.idmap['token01']

    const webhook_ref01_list_rt0 = (await webhook_ref01_ent.list(webhook_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(webhook_ref01_list_rt0, { id: webhook_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03','token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_WEBHOOK_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_WEBHOOK_ENTID']
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
  
