

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


describe('EnterpriseAuditLogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.EnterpriseAuditLog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'enterprise_audit_log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"date","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"idAction","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"member","req":false,"type":"`$OBJECT`","index$":2},{"active":true,"name":"memberCreator","req":false,"type":"`$OBJECT`","index$":3},{"active":true,"name":"organization","req":false,"type":"`$OBJECT`","index$":4},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":5}],"name":"enterprise_audit_log","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"enterpris_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /enterprises/{id}/auditlog","json":"{\"operationId\":\"get-enterprises-id-auditlog\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"date\":{\"example\":\"2018-04-26T17:03:25.155Z\",\"format\":\"date\",\"type\":\"string\"},\"idAction\":{\"example\":\"5dced8665015383ed5ca248c\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"member\":{\"properties\":{\"fullName\":{\"example\":\"Bentley Cook\",\"type\":\"string\"},\"id\":{\"example\":\"5bc79d4206526d2279c1e6ea\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"username\":{\"example\":\"bentleycook\",\"type\":\"string\"}},\"type\":\"object\"},\"memberCreator\":{\"properties\":{\"fullName\":{\"example\":\"Bob Loblaw (Trello)\",\"type\":\"string\"},\"id\":{\"example\":\"5bc79d4206526d2279c1e6ea\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"username\":{\"example\":\"bobloblaw\",\"type\":\"string\"}},\"type\":\"object\"},\"organization\":{\"properties\":{\"enterpriseJoinRequest\":{\"nullable\":true,\"properties\":{\"date\":{\"example\":\"2018-04-26T17:03:25.155Z\",\"format\":\"date\",\"type\":\"string\"},\"idEnterprise\":{\"example\":\"617ac9070293e6612650e0ca\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMember\":{\"example\":\"5bc79d4206526d2279c1e6ea\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":\"617ac9070293e6612650e0ca\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"organization name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"example\":\"addOrganizationToEnterprise\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/auditlog","rename":{"param":{"id":"enterpris_id"}},"segments":[{"lit":"enterprises"},{"var":"enterpris_id"},{"lit":"auditlog"}],"select":{"exist":["enterpris_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["enterpris"]]},"key$":"enterprise_audit_log","name__orig":"enterprise_audit_log","Name":"EnterpriseAuditLog","name_":"enterprise_audit_log","name-":"enterprise-audit-log","NAME":"ENTERPRISE_AUDIT_LOG","index$":29}, {"active":true,"entity":"enterprise_audit_log","key$":"BasicEnterpriseAuditLogFlow","kind":"basic","name":"BasicEnterpriseAuditLogFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"enterpris_id":"enterpris01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"enterprise_audit_log_ref01"}}],"index$":0}]}, 'EnterpriseAuditLog')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let enterprise_audit_log_ref01_data = Object.values(setup.data.existing.enterprise_audit_log)[0] as any

    // LIST
    const enterprise_audit_log_ref01_ent = client.EnterpriseAuditLog()
    const enterprise_audit_log_ref01_match: any = {}
    enterprise_audit_log_ref01_match['enterpris_id'] = setup.idmap['enterpris01']

    const enterprise_audit_log_ref01_list = (await enterprise_audit_log_ref01_ent.list(enterprise_audit_log_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/enterprise_audit_log/EnterpriseAuditLogTestData.json')

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
    ['enterprise_audit_log01','enterprise_audit_log02','enterprise_audit_log03','enterpris01','enterpris02','enterpris03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ENTERPRISE_AUDIT_LOG_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ENTERPRISE_AUDIT_LOG_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ENTERPRISE_AUDIT_LOG_ENTID']
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
  
