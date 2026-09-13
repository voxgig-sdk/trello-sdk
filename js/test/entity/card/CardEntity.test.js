
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


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


describe('CardEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Card()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const card_ref01_ent = client.Card()
    let card_ref01_data = setup.data.new.card['card_ref01']
    card_ref01_data['action_id'] = setup.idmap['action01']
    card_ref01_data['board_id'] = setup.idmap['board01']
    card_ref01_data['list_id'] = setup.idmap['list01']
    card_ref01_data['member_id'] = setup.idmap['member01']

    card_ref01_data = (await card_ref01_ent.create(card_ref01_data)).data()
    assert(null != card_ref01_data.id)


    // LIST
    const card_ref01_match = {}
    card_ref01_match['list_id'] = setup.idmap['list01']

    const card_ref01_list = (await card_ref01_ent.list(card_ref01_match)).map((e) => e.data())

    assert(!isempty(select(card_ref01_list, { id: card_ref01_data.id })))


    // UPDATE
    const card_ref01_data_up0 = {}
    card_ref01_data_up0.id = card_ref01_data.id

    const card_ref01_markdef_up0 = { name: 'address', value: 'Mark01-card_ref01_' + setup.now }
    card_ref01_data_up0 [card_ref01_markdef_up0.name] = card_ref01_markdef_up0.value

    const card_ref01_resdata_up0 = (await card_ref01_ent.update(card_ref01_data_up0)).data()
    assert(card_ref01_resdata_up0.id === card_ref01_data_up0.id)

    assert(card_ref01_resdata_up0[card_ref01_markdef_up0.name] === card_ref01_markdef_up0.value)


    // LOAD
    const card_ref01_match_dt0 = {}
    card_ref01_match_dt0.id = card_ref01_data.id
    const card_ref01_data_dt0 = (await card_ref01_ent.load(card_ref01_match_dt0)).data()
    assert(card_ref01_data_dt0.id === card_ref01_data.id)


    // REMOVE
    const card_ref01_match_rm0 = {}
    card_ref01_match_rm0.id = card_ref01_data.id
    await card_ref01_ent.remove(card_ref01_match_rm0)
  

    // LIST
    const card_ref01_match_rt0 = {}
    card_ref01_match_rt0['list_id'] = setup.idmap['list01']

    const card_ref01_list_rt0 = (await card_ref01_ent.list(card_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(card_ref01_list_rt0, { id: card_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/card/CardTestData.json')

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
    ['card01','card02','card03','action01','action02','action03','board01','board02','board03','card01','card02','card03','checklist01','checklist02','checklist03','list01','list02','list03','member01','member02','member03','notification01','notification02','notification03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CARD_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CARD_ENTID']

  if ('TRUE' === env.TRELLO_TEST_LIVE) {
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
      extra || {}
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
    now: Date.now(),
  }

  return setup
}
  
