

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


describe('EnterprisEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Enterpris()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'enterpris.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"dateOrganizationPrefsLastUpdated","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"displayName","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"domains","req":false,"type":"`$ARRAY`","index$":2},{"active":true,"name":"enterpriseDomains","req":false,"type":"`$ARRAY`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"idAdmins","req":false,"type":"`$ARRAY`","index$":5},{"active":true,"name":"idOrganizations","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"idp","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"isRealEnterprise","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"name":"licenses","req":false,"type":"`$OBJECT`","index$":9},{"active":true,"name":"logoHash","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"logoUrl","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"organizationPrefs","req":false,"type":"`$OBJECT`","index$":13},{"active":true,"name":"pluginWhitelistingEnabled","req":false,"type":"`$ARRAY`","index$":14},{"active":true,"name":"prefs","req":false,"type":"`$OBJECT`","index$":15},{"active":true,"name":"products","req":false,"type":"`$ARRAY`","index$":16},{"active":true,"name":"ssoActivationFailed","req":false,"type":"`$BOOLEAN`","index$":17}],"id":{"field":"id","name":"id"},"name":"enterpris","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"none","kind":"query","name":"expiration","orig":"expiration","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /enterprises/{id}/tokens","json":"{\"operationId\":\"post-enterprises-id-tokens\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"One of: `1hour`, `1day`, `30days`, `never`\",\"in\":\"query\",\"name\":\"expiration\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/enterprises/{id}/tokens","segments":[{"lit":"enterprises"},{"var":"id"},{"lit":"tokens"}],"select":{"$action":"token","exist":["expiration","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"none","kind":"query","name":"member","orig":"member","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"10","kind":"query","name":"member_count","orig":"member_count","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"avatarHash, fullName, initials, username","kind":"query","name":"member_field","orig":"member_field","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":"none","kind":"query","name":"member_filter","orig":"member_filter","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"member_sort","orig":"member_sort","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":"none","kind":"query","name":"member_sort_by","orig":"member_sort_by","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"example":"id","kind":"query","name":"member_sort_order","orig":"member_sort_order","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"example":"1","kind":"query","name":"member_start_index","orig":"member_start_index","reqd":false,"type":"`$INTEGER`","index$":8},{"active":true,"example":"none","kind":"query","name":"organization","orig":"organization","reqd":false,"type":"`$STRING`","index$":9},{"active":true,"example":"none","kind":"query","name":"organization_field","orig":"organization_field","reqd":false,"type":"`$STRING`","index$":10},{"active":true,"example":"none","kind":"query","name":"organization_membership","orig":"organization_membership","reqd":false,"type":"`$STRING`","index$":11},{"active":true,"example":false,"kind":"query","name":"organization_paid_account","orig":"organization_paid_account","reqd":false,"type":"`$BOOLEAN`","index$":12}]},"contract":{"id":"GET /enterprises/{id}","json":"{\"operationId\":\"get-enterprises-id\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`\",\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"type\":\"string\"}},{\"description\":\"One of: `none`, `normal`, `admins`, `owners`, `all`\",\"in\":\"query\",\"name\":\"members\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"One of: `avatarHash`, `fullName`, `initials`, `username`\",\"in\":\"query\",\"name\":\"member_fields\",\"required\":false,\"schema\":{\"default\":\"avatarHash, fullName, initials, username\",\"type\":\"string\"}},{\"description\":\"Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.\",\"in\":\"query\",\"name\":\"member_filter\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.\",\"in\":\"query\",\"name\":\"member_sort\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.\",\"in\":\"query\",\"name\":\"member_sortBy\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`\",\"in\":\"query\",\"name\":\"member_sortOrder\",\"required\":false,\"schema\":{\"default\":\"id\",\"type\":\"string\"}},{\"description\":\"Any integer between 0 and 100.\",\"in\":\"query\",\"name\":\"member_startIndex\",\"required\":false,\"schema\":{\"default\":\"1\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"0 to 100\",\"in\":\"query\",\"name\":\"member_count\",\"required\":false,\"schema\":{\"default\":\"10\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"One of: `none`, `members`, `public`, `all`\",\"in\":\"query\",\"name\":\"organizations\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Any valid value that the [nested organization field resource]() accepts.\",\"in\":\"query\",\"name\":\"organization_fields\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Whether or not to include paid account information in the returned workspace objects\",\"in\":\"query\",\"name\":\"organization_paid_accounts\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`\",\"in\":\"query\",\"name\":\"organization_memberships\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"dateOrganizationPrefsLastUpdated\":{\"example\":\"2019-08-22T18:15:53.546Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Bentley's Test Enterprise!\",\"type\":\"string\"},\"domains\":{\"items\":{\"format\":\"url\",\"type\":\"string\"},\"type\":\"array\"},\"enterpriseDomains\":{\"items\":{\"format\":\"url\",\"type\":\"string\"},\"type\":\"array\"},\"id\":{\"example\":\"59c15d19566e197b23665901\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idAdmins\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idOrganizations\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idp\":{\"properties\":{\"certificate\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"loginUrl\":{\"example\":null,\"format\":\"url\",\"nullable\":true,\"type\":\"string\"},\"requestSigned\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"},\"isRealEnterprise\":{\"example\":true,\"type\":\"boolean\"},\"licenses\":{\"properties\":{\"maxMembers\":{\"example\":null,\"format\":\"integer\",\"nullable\":true,\"type\":\"number\"},\"relatedEnterprises\":{\"items\":{\"properties\":{\"count\":{\"example\":5,\"format\":\"integer\",\"type\":\"number\"},\"displayName\":{\"example\":\"My Test Enterprise!\",\"type\":\"string\"},\"name\":{\"example\":\"enterprise_name\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"totalMembers\":{\"example\":5,\"format\":\"integer\",\"type\":\"number\"}},\"type\":\"object\"},\"logoHash\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"logoUrl\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"name\":{\"example\":\"bentley_test\",\"type\":\"string\"},\"organizationPrefs\":{\"properties\":{\"attachmentRestrictions\":{\"items\":{\"enum\":[\"computer\",\"trello\",\"google-drive\",\"box\",\"onedrive\",\"link\"],\"type\":\"string\"},\"type\":\"array\"},\"boardDeleteRestrict\":{\"type\":\"object\"},\"boardVisibilityRestrict\":{\"type\":\"object\"},\"permissionLevel\":{\"enum\":[\"org\",\"private\",\"public\",\"enterprise\",\"domain\"],\"example\":\"private\",\"type\":\"string\"}},\"type\":\"object\"},\"pluginWhitelistingEnabled\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"prefs\":{\"properties\":{\"autoJoinOrganizations\":{\"example\":false,\"type\":\"boolean\"},\"brandingColor\":{\"type\":\"string\"},\"mandatoryTransferDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"maxMembers\":{\"example\":null,\"nullable\":true,\"type\":\"number\"},\"notifications\":{\"type\":\"object\"},\"signup\":{\"properties\":{\"banner\":{\"type\":\"string\"},\"bannerHtml\":{\"example\":\"<p>Hello</p>\\n\",\"type\":\"string\"}},\"type\":\"object\"},\"ssoOnly\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"},\"products\":{\"items\":{\"format\":\"integer\",\"type\":\"number\"},\"type\":\"array\"},\"ssoActivationFailed\":{\"type\":\"boolean\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}","segments":[{"lit":"enterprises"},{"var":"id"}],"select":{"exist":["field","id","member","member_count","member_field","member_filter","member_sort","member_sort_by","member_sort_order","member_start_index","organization","organization_field","organization_membership","organization_paid_account"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"id_organization","orig":"id_organization","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /enterprises/{id}/organizations","json":"{\"operationId\":\"put-enterprises-id-organizations\",\"parameters\":[{\"description\":\"ID of the Enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of Organization to be transferred to Enterprise.\",\"in\":\"query\",\"name\":\"idOrganization\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"anyOf\":[{\"properties\":{\"dateLastActivity\":{\"example\":\"2018-10-17T19:10:14.808Z\",\"format\":\"date\",\"type\":\"string\"},\"displayName\":{\"example\":\"Organization Name\",\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoards\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idEnterprise\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"memberships\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"type\":\"string\"},\"offering\":{\"example\":\"trello.enterprise\",\"type\":\"string\"},\"prefs\":{\"properties\":{\"attachmentRestrictions\":{\"items\":{\"enum\":[\"computer\",\"trello\",\"google-drive\",\"box\",\"onedrive\",\"link\"],\"type\":\"string\"},\"type\":\"array\"},\"boardDeleteRestrict\":{\"type\":\"object\"},\"boardVisibilityRestrict\":{\"type\":\"object\"},\"permissionLevel\":{\"enum\":[\"org\",\"private\",\"public\",\"enterprise\",\"domain\"],\"example\":\"private\",\"type\":\"string\"}},\"type\":\"object\"},\"premiumFeatures\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"url\":{\"example\":\"https://trello.com/w/<name>\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unauthorized\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"The specified resource was not found\"},\"default\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"type\":\"string\"},\"message\":{\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}}},\"description\":\"Unexpected error\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/enterprises/{id}/organizations","segments":[{"lit":"enterprises"},{"var":"id"},{"lit":"organizations"}],"select":{"$action":"organization","exist":["id","id_organization"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"enterpris","name__orig":"enterpris","Name":"Enterpris","name_":"enterpris","name-":"enterpris","NAME":"ENTERPRIS","index$":26}, {"active":true,"entity":"enterpris","key$":"BasicEnterprisFlow","kind":"basic","name":"BasicEnterprisFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"enterpris_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"enterpris_ref01","srcdatavar":"enterpris_ref01_data","suffix":"_up0","textfield":"dateOrganizationPrefsLastUpdated"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enterpris_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"enterpris_ref01","srcdatavar":"enterpris_ref01_data","suffix":"_dt0"},"match":{"id":"enterpris01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enterpris_ref01"}}],"index$":2}]}, 'Enterpris')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const enterpris_ref01_ent = client.Enterpris()
    let enterpris_ref01_data = setup.data.new.enterpris['enterpris_ref01']

    enterpris_ref01_data = (await enterpris_ref01_ent.create(enterpris_ref01_data)).data()
    assert(null != enterpris_ref01_data.id)


    // UPDATE
    const enterpris_ref01_data_up0: any = {}
    enterpris_ref01_data_up0.id = enterpris_ref01_data.id

    const enterpris_ref01_markdef_up0 = { name: 'dateOrganizationPrefsLastUpdated', value: 'Mark01-enterpris_ref01_' + setup.now }
    ;(enterpris_ref01_data_up0 as any)[enterpris_ref01_markdef_up0.name] = enterpris_ref01_markdef_up0.value

    const enterpris_ref01_resdata_up0 = (await enterpris_ref01_ent.update(enterpris_ref01_data_up0)).data()
    assert(enterpris_ref01_resdata_up0.id === enterpris_ref01_data_up0.id)

    assert((enterpris_ref01_resdata_up0 as any)[enterpris_ref01_markdef_up0.name] === enterpris_ref01_markdef_up0.value)


    // LOAD
    const enterpris_ref01_match_dt0: any = {}
    enterpris_ref01_match_dt0.id = enterpris_ref01_data.id
    const enterpris_ref01_data_dt0 = (await enterpris_ref01_ent.load(enterpris_ref01_match_dt0)).data()
    assert(enterpris_ref01_data_dt0.id === enterpris_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/enterpris/EnterprisTestData.json')

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
    ['enterpris01','enterpris02','enterpris03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ENTERPRIS_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ENTERPRIS_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ENTERPRIS_ENTID']
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
  
