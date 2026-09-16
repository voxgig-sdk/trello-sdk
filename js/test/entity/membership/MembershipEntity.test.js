
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


describe('MembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Membership()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"admin","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"collaborator","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"deactivated","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"licensed","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"managed","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"member","req":false,"type":"`$OBJECT`","index$":6}],"id":{"field":"id","name":"id"},"name":"membership","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"enterpris_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"none","kind":"query","name":"active_since","orig":"active_since","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":false,"kind":"query","name":"admin","orig":"admin","reqd":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"example":false,"kind":"query","name":"collaborator","orig":"collaborator","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"example":"none","kind":"query","name":"cursor","orig":"cursor","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":false,"kind":"query","name":"deactivated","orig":"deactivated","reqd":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"example":"none","kind":"query","name":"inactive_since","orig":"inactive_since","reqd":false,"type":"`$STRING`","index$":5},{"active":true,"example":false,"kind":"query","name":"licensed","orig":"licensed","reqd":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"example":"none","kind":"query","name":"managed","orig":"managed","reqd":false,"type":"`$BOOLEAN`","index$":7},{"active":true,"example":"none","kind":"query","name":"search","orig":"search","reqd":false,"type":"`$STRING`","index$":8}]},"contract":{"id":"GET /enterprises/{id}/members/query","json":"{\"operationId\":\"get-users-id\",\"parameters\":[{\"description\":\"ID of the enterprise to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.\",\"in\":\"query\",\"name\":\"licensed\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.\",\"in\":\"query\",\"name\":\"deactivated\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.\",\"in\":\"query\",\"name\":\"collaborator\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.\",\"in\":\"query\",\"name\":\"managed\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"boolean\"}},{\"description\":\"When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.\",\"in\":\"query\",\"name\":\"admin\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Returns only Trello users active since this date (inclusive).\",\"in\":\"query\",\"name\":\"activeSince\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Returns only Trello users active since this date (inclusive).\",\"in\":\"query\",\"name\":\"inactiveSince\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Returns members with email address or full name that start with the search value.\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}},{\"description\":\"Cursor to return next set of results, use cursor returned in the response to query the next batch.\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"schema\":{\"default\":\"none\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"admin\":{\"type\":\"boolean\"},\"collaborator\":{\"type\":\"boolean\"},\"deactivated\":{\"type\":\"boolean\"},\"licensed\":{\"type\":\"boolean\"},\"managed\":{\"type\":\"boolean\"},\"member\":{\"example\":{\"avatarURL\":\"trello.com/avatarURL\",\"confirmed\":true,\"dateLastImpression\":\"2023-05-24T22:41:36.406Z\",\"email\":\"amath@trello.com\",\"fullname\":\"Lex Math\",\"id\":\"646e92a0a016198d3cf81e8a\",\"initials\":\"AM\",\"memberType\":\"Admin\",\"username\":\"amath\"},\"properties\":{\"avatarURL\":{\"type\":\"string\"},\"confirmed\":{\"type\":\"boolean\"},\"dateLastImpression\":{\"type\":\"string\"},\"email\":{\"type\":\"string\"},\"fullname\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"initials\":{\"type\":\"string\"},\"memberType\":{\"type\":\"string\"},\"username\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/enterprises/{id}/members/query","rename":{"param":{"id":"enterpris_id"}},"segments":[{"lit":"enterprises"},{"var":"enterpris_id"},{"lit":"members"},{"lit":"query"}],"select":{"exist":["active_since","admin","collaborator","cursor","deactivated","enterpris_id","inactive_since","licensed","managed","search"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"organization_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":false,"kind":"query","name":"member","orig":"member","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"GET /organizations/{id}/memberships","json":"{\"operationId\":\"get-organizations-id-memberships\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`\",\"explode\":false,\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"all\",\"active\",\"admin\",\"deactivated\",\"me\",\"normal\"],\"type\":\"string\"},\"style\":\"form\"},{\"description\":\"Whether to include the Member objects with the Memberships\",\"in\":\"query\",\"name\":\"member\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"oneOf\":[{\"description\":\"\",\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}]},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/organizations/{id}/memberships","rename":{"param":{"id":"organization_id"}},"segments":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"memberships"}],"select":{"exist":["filter","member","organization_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":false,"kind":"query","name":"activity","orig":"activity","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"example":"all","kind":"query","name":"filter","orig":"filter","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":false,"kind":"query","name":"member","orig":"member","reqd":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"example":"fullname,username","kind":"query","name":"member_field","orig":"member_field","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":false,"kind":"query","name":"org_member_type","orig":"org_member_type","reqd":false,"type":"`$BOOLEAN`","index$":4}]},"contract":{"id":"GET /boards/{id}/memberships","json":"{\"operationId\":\"get-boards-id-memberships\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of `admins`, `all`, `none`, `normal`\",\"in\":\"query\",\"name\":\"filter\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"admins\",\"all\",\"none\",\"normal\"],\"type\":\"string\"}},{\"description\":\"Works for premium organizations only.\",\"in\":\"query\",\"name\":\"activity\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.\",\"in\":\"query\",\"name\":\"orgMemberType\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).\",\"in\":\"query\",\"name\":\"member\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}},{\"description\":\"Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).\",\"explode\":false,\"in\":\"query\",\"name\":\"member_fields\",\"required\":false,\"schema\":{\"default\":\"fullname,username\",\"enum\":[\"id\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"description\":\"\",\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards/{id}/memberships","rename":{"param":{"id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"memberships"}],"select":{"exist":["activity","board_id","filter","member","member_field","org_member_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_membership","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"organization_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":false,"kind":"query","name":"member","orig":"member","reqd":false,"type":"`$BOOLEAN`","index$":0}]},"contract":{"id":"GET /organizations/{id}/memberships/{idMembership}","json":"{\"operationId\":\"get-organizations-id-memberships-idmembership\",\"parameters\":[{\"description\":\"The ID or name of the organization\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The ID of the membership to load\",\"in\":\"path\",\"name\":\"idMembership\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Whether to include the Member object in the response\",\"in\":\"query\",\"name\":\"member\",\"required\":false,\"schema\":{\"default\":false,\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"description\":\"\",\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/organizations/{id}/memberships/{idMembership}","rename":{"param":{"id":"organization_id","idMembership":"id"}},"segments":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"memberships"},{"var":"id"}],"select":{"exist":["id","member","organization_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_membership","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":"fullName, username","kind":"query","name":"member_field","orig":"member_field","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"type","orig":"type","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /boards/{id}/memberships/{idMembership}","json":"{\"operationId\":\"put-boards-id-memberships-idmembership\",\"parameters\":[{\"description\":\"The id of the board to update\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"The id of a membership that should be added to this board.\",\"in\":\"path\",\"name\":\"idMembership\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"One of: admin, normal, observer. Determines the type of member that this membership will be to this board.\",\"in\":\"query\",\"name\":\"type\",\"required\":true,\"schema\":{\"enum\":[\"admin\",\"normal\",\"observer\"],\"type\":\"string\"}},{\"description\":\"Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username\",\"explode\":false,\"in\":\"query\",\"name\":\"member_fields\",\"required\":false,\"schema\":{\"default\":\"fullName, username\",\"enum\":[\"all\",\"avatarHash\",\"bio\",\"bioData\",\"confirmed\",\"fullName\",\"idPremOrgsAdmin\",\"initials\",\"memberType\",\"products\",\"status\",\"url\",\"username\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/boards/{id}/memberships/{idMembership}","rename":{"param":{"id":"board_id","idMembership":"id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"memberships"},{"var":"id"}],"select":{"exist":["board_id","id","member_field","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["board"],["enterpris"],["organization"]]},"key$":"membership","name__orig":"membership","Name":"Membership","name_":"membership","name-":"membership","NAME":"MEMBERSHIP","index$":41}, {"active":true,"entity":"membership","key$":"BasicMembershipFlow","kind":"basic","name":"BasicMembershipFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"organization_id":"organization01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"membership_ref01"}}],"index$":0},{"active":true,"data":{"board_id":"board01"},"input":{"ref":"membership_ref01","srcdatavar":"membership_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-membership_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"membership_ref01","srcdatavar":"membership_ref01_data","suffix":"_dt0"},"match":{"id":"membership01","organization_id":"organization01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-membership_ref01"}}],"index$":2}]}, 'Membership')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let membership_ref01_data = Object.values(setup.data.existing.membership)[0]

    // LIST
    const membership_ref01_ent = client.Membership()
    const membership_ref01_match = {}
    membership_ref01_match['organization_id'] = setup.idmap['organization01']

    const membership_ref01_list = (await membership_ref01_ent.list(membership_ref01_match)).map((e) => e.data())


    // UPDATE
    const membership_ref01_data_up0 = {}
    membership_ref01_data_up0.id = membership_ref01_data.id
    membership_ref01_data_up0 ['board_id'] = setup.idmap['board_id']

    const membership_ref01_resdata_up0 = (await membership_ref01_ent.update(membership_ref01_data_up0)).data()
    assert(membership_ref01_resdata_up0.id === membership_ref01_data_up0.id)


    // LOAD
    const membership_ref01_match_dt0 = {}
    membership_ref01_match_dt0.id = membership_ref01_data.id
    const membership_ref01_data_dt0 = (await membership_ref01_ent.load(membership_ref01_match_dt0)).data()
    assert(membership_ref01_data_dt0.id === membership_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/membership/MembershipTestData.json')

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
    ['membership01','membership02','membership03','board01','board02','board03','enterpris01','enterpris02','enterpris03','organization01','organization02','organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_MEMBERSHIP_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_MEMBERSHIP_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_MEMBERSHIP_ENTID']
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
  
