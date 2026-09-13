
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


describe('ExportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Export()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const export_ref01_ent = client.Export()
    let export_ref01_data = setup.data.new.export['export_ref01']
    export_ref01_data['board_id'] = setup.idmap['board01']
    export_ref01_data['organization_id'] = setup.idmap['organization01']

    export_ref01_data = (await export_ref01_ent.create(export_ref01_data)).data()
    assert(null != export_ref01_data.id)


    // LIST
    const export_ref01_match = {}
    export_ref01_match['organization_id'] = setup.idmap['organization01']

    const export_ref01_list = (await export_ref01_ent.list(export_ref01_match)).map((e) => e.data())

    assert(!isempty(select(export_ref01_list, { id: export_ref01_data.id })))


    // LOAD
    const export_ref01_match_dt0 = {}
    export_ref01_match_dt0.id = export_ref01_data.id
    const export_ref01_data_dt0 = (await export_ref01_ent.load(export_ref01_match_dt0)).data()
    assert(export_ref01_data_dt0.id === export_ref01_data.id)


    // REMOVE
    const export_ref01_match_rm0 = {}
    export_ref01_match_rm0.id = export_ref01_data.id
    await export_ref01_ent.remove(export_ref01_match_rm0)
  

    // LIST
    const export_ref01_match_rt0 = {}
    export_ref01_match_rt0['organization_id'] = setup.idmap['organization01']

    const export_ref01_list_rt0 = (await export_ref01_ent.list(export_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(export_ref01_list_rt0, { id: export_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/export/ExportTestData.json')

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
    ['export01','export02','export03','board01','board02','board03','organization01','organization02','organization03','board01','board02','board03','export01','export02','export03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_EXPORT_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_EXPORT_ENTID']

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
  
