
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


describe('ActionReactionsSummaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.ActionReactionsSummary()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"action_reactions_summary","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /actions/{idAction}/reactionsSummary","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/actions/{idAction}/reactionsSummary","q":{"exist":["id_action"]},"r":{"param":{"idAction":"id_action"}},"s":[{"lit":"actions"},{"var":"id_action"},{"lit":"reactionsSummary"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.action"]]},"key$":"action_reactions_summary","name__orig":"action_reactions_summary","Name":"ActionReactionsSummary","name_":"action_reactions_summary","name-":"action-reactions-summary","NAME":"ACTION_REACTIONS_SUMMARY","index$":1}, {"active":true,"entity":"action_reactions_summary","key$":"BasicActionReactionsSummaryFlow","kind":"basic","name":"BasicActionReactionsSummaryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"action_reactions_summary_ref01","srcdatavar":"action_reactions_summary_ref01_data","suffix":"_dt0"},"m":{"id":"action_reactions_summary01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-action_reactions_summary_ref01"}}],"index$":0}]}, 'ActionReactionsSummary', {"GET /actions/{idAction}/reactionsSummary":{"protocol":"http","parameters":[{"name":"idAction","in":"path","description":"The ID of the action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let action_reactions_summary_ref01_data = Object.values(setup.data.existing.action_reactions_summary)[0]

    // LOAD
    const action_reactions_summary_ref01_ent = client.ActionReactionsSummary()
    const action_reactions_summary_ref01_match_dt0 = {}
    const action_reactions_summary_ref01_data_dt0 = (await action_reactions_summary_ref01_ent.load(action_reactions_summary_ref01_match_dt0)).data()
    assert(null != action_reactions_summary_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/action_reactions_summary/ActionReactionsSummaryTestData.json')

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
    ['action_reactions_summary01','action_reactions_summary02','action_reactions_summary03','action01','action02','action03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ACTION_REACTIONS_SUMMARY_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ACTION_REACTIONS_SUMMARY_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ACTION_REACTIONS_SUMMARY_ENTID']
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
  
