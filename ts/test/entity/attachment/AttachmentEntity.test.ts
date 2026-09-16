

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"attachment","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"false","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /cards/{id}/attachments","json":"{\"operationId\":\"get-cards-id-attachments\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}},{\"description\":\"Use `cover` to restrict to just the cover attachment\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"false\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"properties\":{\"bytes\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"date\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"edgeColor\":{\"enum\":[\"yellow\",\"purple\",\"blue\",\"red\",\"green\",\"orange\",\"black\",\"sky\",\"pink\",\"lime\"],\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5bc79d4206526d2279c1e6ea\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5bc79d4206526d2279c1e6eb\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"isUpload\":{\"example\":false,\"type\":\"boolean\"},\"mimeType\":{\"example\":\"\",\"type\":\"string\"},\"name\":{\"example\":\"Deprecation Extension Notice\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"format\":\"float\",\"type\":\"number\"},\"previews\":{\"example\":[],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://admin.typeform.com/form/RzExEM/share#/link\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/attachments","rename":{"param":{"id":"card_id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"}],"select":{"exist":["card_id","field","filter"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_attachment","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":["all"],"kind":"query","name":"field","orig":"field","reqd":false,"type":"`$ARRAY`","index$":0}]},"contract":{"id":"GET /cards/{id}/attachments/{idAttachment}","json":"{\"operationId\":\"get-cards-id-attachments-idattachment\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the Attachment\",\"in\":\"path\",\"name\":\"idAttachment\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The Attachment fields to be included in the response.\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":[\"all\"],\"items\":{\"anyOf\":[{\"enum\":[\"id\",\"bytes\",\"date\",\"edgeColor\",\"idMember\",\"isUpload\",\"mimeType\",\"name\",\"previews\",\"url\",\"pos\"],\"type\":\"string\"}]},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"properties\":{\"bytes\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"date\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"edgeColor\":{\"enum\":[\"yellow\",\"purple\",\"blue\",\"red\",\"green\",\"orange\",\"black\",\"sky\",\"pink\",\"lime\"],\"example\":null,\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5bc79d4206526d2279c1e6ea\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5bc79d4206526d2279c1e6eb\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"isUpload\":{\"example\":false,\"type\":\"boolean\"},\"mimeType\":{\"example\":\"\",\"type\":\"string\"},\"name\":{\"example\":\"Deprecation Extension Notice\",\"type\":\"string\"},\"pos\":{\"example\":1638,\"format\":\"float\",\"type\":\"number\"},\"previews\":{\"example\":[],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://admin.typeform.com/form/RzExEM/share#/link\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/cards/{id}/attachments/{idAttachment}","rename":{"param":{"id":"card_id","idAttachment":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"},{"var":"id"}],"select":{"exist":["card_id","field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"card_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_attachment","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_attachment","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"DELETE /cards/{id}/attachments/{idAttachment}","json":"{\"operationId\":\"deleted-cards-id-attachments-idattachment\",\"parameters\":[{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the Attachment\",\"in\":\"path\",\"name\":\"idAttachment\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the Card\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the attachment to delete\",\"in\":\"path\",\"name\":\"idAttachment\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/cards/{id}/attachments/{idAttachment}","rename":{"param":{"id":"card_id","idAttachment":"id"}},"segments":[{"lit":"cards"},{"var":"card_id"},{"lit":"attachments"},{"var":"id"}],"select":{"exist":["card_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["card"]]},"key$":"attachment","name__orig":"attachment","Name":"Attachment","name_":"attachment","name-":"attachment","NAME":"ATTACHMENT","index$":6}, {"active":true,"entity":"attachment","key$":"BasicAttachmentFlow","kind":"basic","name":"BasicAttachmentFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"card_id":"card01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"attachment_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"attachment_ref01","srcdatavar":"attachment_ref01_data","suffix":"_dt0"},"match":{"card_id":"card01","id":"attachment01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-attachment_ref01"}}],"index$":1}]}, 'Attachment')
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
  
