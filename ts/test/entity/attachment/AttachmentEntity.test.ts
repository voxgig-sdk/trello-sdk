

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


describe('AttachmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Attachment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'attachment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"attachment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cards/{id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"false","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/cards/{id}/attachments","q":{"exist":["card_id","field","filter"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cards/{id}/attachments/{idAttachment}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_attachment","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":["all"],"k":"query","n":"field","or":"field","r":false,"t":"`$ARRAY`","index$":0}]},"k":"http","m":"GET","o":"/cards/{id}/attachments/{idAttachment}","q":{"exist":["card_id","field","id"]},"r":{"param":{"id":"card_id","idAttachment":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /cards/{id}/attachments/{idAttachment}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_attachment","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_attachment","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/cards/{id}/attachments/{idAttachment}","q":{"exist":["card_id","id"]},"r":{"param":{"id":"card_id","idAttachment":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.card"]]},"key$":"attachment","name__orig":"attachment","Name":"Attachment","name_":"attachment","name-":"attachment","NAME":"ATTACHMENT","index$":5}, {"active":true,"entity":"attachment","key$":"BasicAttachmentFlow","kind":"basic","name":"BasicAttachmentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"card_id":"card01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"attachment_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"attachment_ref01","srcdatavar":"attachment_ref01_data","suffix":"_dt0"},"m":{"card_id":"card01","id":"attachment01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-attachment_ref01"}}],"index$":1}]}, 'Attachment', {"GET /cards/{id}/attachments":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"fields","in":"query","description":"`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":1},{"name":"filter","in":"query","description":"Use `cover` to restrict to just the cover attachment","required":false,"schema":{"type":"string","default":"false"},"index$":2}]},"GET /cards/{id}/attachments/{idAttachment}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idAttachment","in":"path","description":"The ID of the Attachment","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"fields","in":"query","description":"The Attachment fields to be included in the response.","required":false,"style":"form","explode":false,"schema":{"type":"array","items":{"anyOf":[{"type":"string","enum":["id","bytes","date","edgeColor","idMember","isUpload","mimeType","name","previews","url","pos"],"x-ref":"#/components/schemas/AttachmentFields"}]},"default":["all"]},"index$":2}]},"DELETE /cards/{id}/attachments/{idAttachment}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idAttachment","in":"path","description":"The ID of the Attachment","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":2},{"name":"idAttachment","in":"path","description":"The ID of the attachment to delete","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let attachment_ref01_data = Object.values(setup.data.existing.attachment)[0] as any

    // LIST
    const attachment_ref01_ent = client.Attachment()
    const attachment_ref01_match: any = {}
    attachment_ref01_match['card_id'] = setup.idmap['card01']

    const attachment_ref01_list = (await attachment_ref01_ent.list(attachment_ref01_match)).map((e: any) => e.data())


    // LOAD
    const attachment_ref01_match_dt0: any = {}
    attachment_ref01_match_dt0.id = attachment_ref01_data.id
    const attachment_ref01_data_dt0 = (await attachment_ref01_ent.load(attachment_ref01_match_dt0)).data()
    assert(attachment_ref01_data_dt0.id === attachment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/attachment/AttachmentTestData.json')

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
    ['attachment01','attachment02','attachment03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ATTACHMENT_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ATTACHMENT_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ATTACHMENT_ENTID']
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
  
