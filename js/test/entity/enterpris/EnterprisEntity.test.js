
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


describe('EnterprisEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Enterpris()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
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
    const enterpris_ref01_data_up0 = {}
    enterpris_ref01_data_up0.id = enterpris_ref01_data.id

    const enterpris_ref01_markdef_up0 = { name: 'dateOrganizationPrefsLastUpdated', value: 'Mark01-enterpris_ref01_' + setup.now }
    enterpris_ref01_data_up0 [enterpris_ref01_markdef_up0.name] = enterpris_ref01_markdef_up0.value

    const enterpris_ref01_resdata_up0 = (await enterpris_ref01_ent.update(enterpris_ref01_data_up0)).data()
    assert(enterpris_ref01_resdata_up0.id === enterpris_ref01_data_up0.id)

    assert(enterpris_ref01_resdata_up0[enterpris_ref01_markdef_up0.name] === enterpris_ref01_markdef_up0.value)


    // LOAD
    const enterpris_ref01_match_dt0 = {}
    enterpris_ref01_match_dt0.id = enterpris_ref01_data.id
    const enterpris_ref01_data_dt0 = (await enterpris_ref01_ent.load(enterpris_ref01_match_dt0)).data()
    assert(enterpris_ref01_data_dt0.id === enterpris_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
  
