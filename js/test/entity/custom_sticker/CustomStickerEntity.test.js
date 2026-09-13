
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


describe('CustomStickerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomSticker()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_sticker_ref01_ent = client.CustomSticker()
    let custom_sticker_ref01_data = setup.data.new.custom_sticker['custom_sticker_ref01']
    custom_sticker_ref01_data['member_id'] = setup.idmap['member01']

    custom_sticker_ref01_data = (await custom_sticker_ref01_ent.create(custom_sticker_ref01_data)).data()
    assert(null != custom_sticker_ref01_data.id)


    // LIST
    const custom_sticker_ref01_match = {}
    custom_sticker_ref01_match['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match)).map((e) => e.data())

    assert(!isempty(select(custom_sticker_ref01_list, { id: custom_sticker_ref01_data.id })))


    // LOAD
    const custom_sticker_ref01_match_dt0 = {}
    custom_sticker_ref01_match_dt0.id = custom_sticker_ref01_data.id
    const custom_sticker_ref01_data_dt0 = (await custom_sticker_ref01_ent.load(custom_sticker_ref01_match_dt0)).data()
    assert(custom_sticker_ref01_data_dt0.id === custom_sticker_ref01_data.id)


    // REMOVE
    const custom_sticker_ref01_match_rm0 = {}
    custom_sticker_ref01_match_rm0.id = custom_sticker_ref01_data.id
    await custom_sticker_ref01_ent.remove(custom_sticker_ref01_match_rm0)
  

    // LIST
    const custom_sticker_ref01_match_rt0 = {}
    custom_sticker_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list_rt0 = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(custom_sticker_ref01_list_rt0, { id: custom_sticker_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_sticker/CustomStickerTestData.json')

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
    ['custom_sticker01','custom_sticker02','custom_sticker03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_STICKER_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_STICKER_ENTID']

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
  
