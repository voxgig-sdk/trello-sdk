
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


describe('MembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Membership()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
  
