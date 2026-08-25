
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


describe('BoardBackgroundEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.BoardBackground()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const board_background_ref01_ent = client.BoardBackground()
    let board_background_ref01_data = setup.data.new.board_background['board_background_ref01']
    board_background_ref01_data['member_id'] = setup.idmap['member01']

    board_background_ref01_data = (await board_background_ref01_ent.create(board_background_ref01_data)).data()
    assert(null != board_background_ref01_data.id)


    // LIST
    const board_background_ref01_match = {}
    board_background_ref01_match['member_id'] = setup.idmap['member01']

    const board_background_ref01_list = (await board_background_ref01_ent.list(board_background_ref01_match)).map((e) => e.data())

    assert(!isempty(select(board_background_ref01_list, { id: board_background_ref01_data.id })))


    // UPDATE
    const board_background_ref01_data_up0 = {}
    board_background_ref01_data_up0.id = board_background_ref01_data.id
    board_background_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const board_background_ref01_resdata_up0 = (await board_background_ref01_ent.update(board_background_ref01_data_up0)).data()
    assert(board_background_ref01_resdata_up0.id === board_background_ref01_data_up0.id)


    // LOAD
    const board_background_ref01_match_dt0 = {}
    board_background_ref01_match_dt0.id = board_background_ref01_data.id
    const board_background_ref01_data_dt0 = (await board_background_ref01_ent.load(board_background_ref01_match_dt0)).data()
    assert(board_background_ref01_data_dt0.id === board_background_ref01_data.id)


    // REMOVE
    const board_background_ref01_match_rm0 = {}
    board_background_ref01_match_rm0.id = board_background_ref01_data.id
    await board_background_ref01_ent.remove(board_background_ref01_match_rm0)
  

    // LIST
    const board_background_ref01_match_rt0 = {}
    board_background_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const board_background_ref01_list_rt0 = (await board_background_ref01_ent.list(board_background_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(board_background_ref01_list_rt0, { id: board_background_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/board_background/BoardBackgroundTestData.json')

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
    ['board_background01','board_background02','board_background03','member01','member02','member03','member01','member02','member03','custom_board_background01','custom_board_background02','custom_board_background03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_BOARD_BACKGROUND_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_BOARD_BACKGROUND_ENTID']

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
  
