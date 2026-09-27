
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


describe('ReactionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Reaction()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"reaction","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /actions/{idAction}/reactions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":true,"k":"query","n":"emoji","or":"emoji","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":true,"k":"query","n":"member","or":"member","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/actions/{idAction}/reactions/{id}","q":{"exist":["emoji","id","id_action","member"]},"r":{"param":{"idAction":"id_action"}},"s":[{"lit":"actions"},{"var":"id_action"},{"lit":"reactions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /actions/{idAction}/reactions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"emoji","or":"emoji","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":true,"k":"query","n":"member","or":"member","r":false,"t":"`$BOOLEAN`","index$":1}]},"k":"http","m":"GET","o":"/actions/{idAction}/reactions","q":{"exist":["emoji","id_action","member"]},"r":{"param":{"idAction":"id_action"}},"s":[{"lit":"actions"},{"var":"id_action"},{"lit":"reactions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /actions/{idAction}/reactions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/actions/{idAction}/reactions/{id}","q":{"exist":["id","id_action"]},"r":{"param":{"idAction":"id_action"}},"s":[{"lit":"actions"},{"var":"id_action"},{"lit":"reactions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.action"]]},"key$":"reaction","name__orig":"reaction","Name":"Reaction","name_":"reaction","name-":"reaction","NAME":"REACTION","index$":53}, {"active":true,"entity":"reaction","key$":"BasicReactionFlow","kind":"basic","name":"BasicReactionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"reaction_ref01","srcdatavar":"reaction_ref01_data","suffix":"_dt0"},"m":{"id":"reaction01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-reaction_ref01"}}],"index$":0}]}, 'Reaction', {"GET /actions/{idAction}/reactions/{id}":{"protocol":"http","parameters":[{"name":"idAction","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"id","in":"path","description":"The ID of the reaction","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"member","in":"query","description":"Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)","required":false,"schema":{"type":"boolean","default":true},"index$":2},{"name":"emoji","in":"query","description":"Whether to load the emoji as a nested resource.","required":false,"schema":{"type":"boolean","default":true},"index$":3}]},"GET /actions/{idAction}/reactions":{"protocol":"http","parameters":[{"name":"idAction","in":"path","description":"The ID of the action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"member","in":"query","description":"Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)","required":false,"schema":{"type":"boolean","default":true},"index$":1},{"name":"emoji","in":"query","description":"Whether to load the emoji as a nested resource.","required":false,"schema":{"type":"boolean","default":true},"index$":2}]},"DELETE /actions/{idAction}/reactions/{id}":{"protocol":"http","parameters":[{"name":"idAction","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"id","in":"path","description":"The ID of the reaction","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let reaction_ref01_data = Object.values(setup.data.existing.reaction)[0]

    // LOAD
    const reaction_ref01_ent = client.Reaction()
    const reaction_ref01_match_dt0 = {}
    reaction_ref01_match_dt0.id = reaction_ref01_data.id
    const reaction_ref01_data_dt0 = (await reaction_ref01_ent.load(reaction_ref01_match_dt0)).data()
    assert(reaction_ref01_data_dt0.id === reaction_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/reaction/ReactionTestData.json')

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
    ['reaction01','reaction02','reaction03','action01','action02','action03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_REACTION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_REACTION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_REACTION_ENTID']
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
  
