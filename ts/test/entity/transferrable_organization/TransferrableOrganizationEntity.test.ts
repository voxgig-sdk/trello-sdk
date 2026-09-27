

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"newBillableMembers":{"a":true,"h":"New Billable Members","n":"newBillableMembers","r":false,"t":"`$ARRAY`","key$":"newBillableMembers","index$":1},"restrictedMembers":{"a":true,"h":"Restricted Members","n":"restrictedMembers","r":false,"t":"`$ARRAY`","key$":"restrictedMembers","index$":2},"transferrable":{"a":true,"h":"Transferrable","n":"transferrable","r":false,"t":"`$BOOLEAN`","key$":"transferrable","index$":3}},"id":{"field":"id","name":"id"},"name":"transferrable_organization","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /enterprises/{id}/transferrable/organization/{idOrganization}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"enterprise_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_organization","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/enterprises/{id}/transferrable/organization/{idOrganization}","q":{"exist":["enterprise_id","id"]},"r":{"param":{"id":"enterprise_id","idOrganization":"id"}},"s":[{"lit":"enterprises"},{"var":"enterprise_id"},{"lit":"transferrable"},{"lit":"organization"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.enterprise"]]},"key$":"transferrable_organization","name__orig":"transferrable_organization","Name":"TransferrableOrganization","name_":"transferrable_organization","name-":"transferrable-organization","NAME":"TRANSFERRABLE_ORGANIZATION","index$":64}, {"active":true,"entity":"transferrable_organization","key$":"BasicTransferrableOrganizationFlow","kind":"basic","name":"BasicTransferrableOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"transferrable_organization_ref01","srcdatavar":"transferrable_organization_ref01_data","suffix":"_dt0"},"m":{"enterprise_id":"enterprise01","id":"transferrable_organization01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-transferrable_organization_ref01"}}],"index$":0}]}, 'TransferrableOrganization', {"GET /enterprises/{id}/transferrable/organization/{idOrganization}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"ID of the Enterprise to retrieve.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idOrganization","in":"path","description":"An ID of an Organization resource.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]}})
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
    ['transferrable_organization01','transferrable_organization02','transferrable_organization03','enterprise01','enterprise02','enterprise03'],
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
  
