

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


describe('TransferrableOrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.TransferrableOrganization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'transferrable_organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"newBillableMembers","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"restrictedMembers","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"transferrable","req":false,"type":"`$BOOLEAN`","index$":3}],"id":{"field":"id","name":"id"},"name":"transferrable_organization","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"enterpris_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_organization","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /enterprises/{id}/transferrable/organization/{idOrganization}","json":"{\"operationId\":\"get-enterprises-id-transferrable-organization-idOrganization\",\"parameters\":[{\"description\":\"ID of the Enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"An ID of an Organization resource.\",\"in\":\"path\",\"name\":\"idOrganization\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"newBillableMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"restrictedMembers\":{\"items\":{\"properties\":{\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bob Loblaw\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"initials\":{\"example\":\"BL\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"transferrable\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/transferrable/organization/{idOrganization}","rename":{"param":{"id":"enterpris_id","idOrganization":"id"}},"segments":[{"lit":"enterprises"},{"var":"enterpris_id"},{"lit":"transferrable"},{"lit":"organization"},{"var":"id"}],"select":{"exist":["enterpris_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["enterpris"]]},"key$":"transferrable_organization","name__orig":"transferrable_organization","Name":"TransferrableOrganization","name_":"transferrable_organization","name-":"transferrable-organization","NAME":"TRANSFERRABLE_ORGANIZATION","index$":67}, {"active":true,"entity":"transferrable_organization","key$":"BasicTransferrableOrganizationFlow","kind":"basic","name":"BasicTransferrableOrganizationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"transferrable_organization_ref01","srcdatavar":"transferrable_organization_ref01_data","suffix":"_dt0"},"match":{"enterpris_id":"enterpris01","id":"transferrable_organization01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-transferrable_organization_ref01"}}],"index$":0}]}, 'TransferrableOrganization')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let transferrable_organization_ref01_data = Object.values(setup.data.existing.transferrable_organization)[0] as any

    // LOAD
    const transferrable_organization_ref01_ent = client.TransferrableOrganization()
    const transferrable_organization_ref01_match_dt0: any = {}
    transferrable_organization_ref01_match_dt0.id = transferrable_organization_ref01_data.id
    const transferrable_organization_ref01_data_dt0 = (await transferrable_organization_ref01_ent.load(transferrable_organization_ref01_match_dt0)).data()
    assert(transferrable_organization_ref01_data_dt0.id === transferrable_organization_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/transferrable_organization/TransferrableOrganizationTestData.json')

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
    ['transferrable_organization01','transferrable_organization02','transferrable_organization03','enterpris01','enterpris02','enterpris03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_TRANSFERRABLE_ORGANIZATION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_TRANSFERRABLE_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_TRANSFERRABLE_ORGANIZATION_ENTID']
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
  
