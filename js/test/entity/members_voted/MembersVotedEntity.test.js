
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


describe('MembersVotedEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.MembersVoted()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"members_voted","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cards/{id}/membersVoted","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/cards/{id}/membersVoted","q":{"exist":["card_id","field"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"membersVoted"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /cards/{id}/membersVoted/{idMember}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_member","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/cards/{id}/membersVoted/{idMember}","q":{"exist":["card_id","id"]},"r":{"param":{"id":"card_id","idMember":"id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"membersVoted"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.card"]]},"key$":"members_voted","name__orig":"members_voted","Name":"MembersVoted","name_":"members_voted","name-":"members-voted","NAME":"MEMBERS_VOTED","index$":39}, {"active":true,"entity":"members_voted","key$":"BasicMembersVotedFlow","kind":"basic","name":"BasicMembersVotedFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"members_voted_ref01","srcdatavar":"members_voted_ref01_data","suffix":"_dt0"},"m":{"id":"members_voted01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-members_voted_ref01"}}],"index$":0}]}, 'MembersVoted', {"GET /cards/{id}/membersVoted":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"avatarHash,fullName,initials,username"},"index$":1}]},"DELETE /cards/{id}/membersVoted/{idMember}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idMember","in":"path","description":"The ID of the member whose vote to remove","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let members_voted_ref01_data = Object.values(setup.data.existing.members_voted)[0]

    // LOAD
    const members_voted_ref01_ent = client.MembersVoted()
    const members_voted_ref01_match_dt0 = {}
    members_voted_ref01_match_dt0.id = members_voted_ref01_data.id
    const members_voted_ref01_data_dt0 = (await members_voted_ref01_ent.load(members_voted_ref01_match_dt0)).data()
    assert(members_voted_ref01_data_dt0.id === members_voted_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/members_voted/MembersVotedTestData.json')

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
    ['members_voted01','members_voted02','members_voted03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_MEMBERS_VOTED_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_MEMBERS_VOTED_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_MEMBERS_VOTED_ENTID']
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
  
