
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { TrelloSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('StickerEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Sticker()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let sticker_ref01_data = Object.values(setup.data.existing.sticker)[0]

    // UPDATE
    const sticker_ref01_ent = client.Sticker()
    const sticker_ref01_data_up0 = {}
    sticker_ref01_data_up0.id = sticker_ref01_data.id
    sticker_ref01_data_up0 ['card_id'] = setup.idmap['card_id']

    const sticker_ref01_resdata_up0 = (await sticker_ref01_ent.update(sticker_ref01_data_up0)).data()
    assert(sticker_ref01_resdata_up0.id === sticker_ref01_data_up0.id)


    // LOAD
    const sticker_ref01_match_dt0 = {}
    sticker_ref01_match_dt0.id = sticker_ref01_data.id
    const sticker_ref01_data_dt0 = (await sticker_ref01_ent.load(sticker_ref01_match_dt0)).data()
    assert(sticker_ref01_data_dt0.id === sticker_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/sticker/StickerTestData.json')

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
    ['sticker01','sticker02','sticker03','card01','card02','card03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_STICKER_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_STICKER_ENTID']

  if ('TRUE' === env.TRELLO_TEST_LIVE) {
    client = new TrelloSDK(merge([
      {
        apikey: env.TRELLO_APIKEY,
      },
      extra
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
  
