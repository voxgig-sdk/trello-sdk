
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


describe('BoardStarEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.BoardStar()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const board_star_ref01_ent = client.BoardStar()
    let board_star_ref01_data = setup.data.new.board_star['board_star_ref01']
    board_star_ref01_data['member_id'] = setup.idmap['member01']

    board_star_ref01_data = (await board_star_ref01_ent.create(board_star_ref01_data)).data()
    assert(null != board_star_ref01_data.id)


    // LIST
    const board_star_ref01_match = {}
    board_star_ref01_match['board_id'] = setup.idmap['board01']

    const board_star_ref01_list = (await board_star_ref01_ent.list(board_star_ref01_match)).map((e) => e.data())

    assert(!isempty(select(board_star_ref01_list, { id: board_star_ref01_data.id })))


    // UPDATE
    const board_star_ref01_data_up0 = {}
    board_star_ref01_data_up0.id = board_star_ref01_data.id
    board_star_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const board_star_ref01_markdef_up0 = { name: 'idBoard', value: 'Mark01-board_star_ref01_' + setup.now }
    board_star_ref01_data_up0 [board_star_ref01_markdef_up0.name] = board_star_ref01_markdef_up0.value

    const board_star_ref01_resdata_up0 = (await board_star_ref01_ent.update(board_star_ref01_data_up0)).data()
    assert(board_star_ref01_resdata_up0.id === board_star_ref01_data_up0.id)

    assert(board_star_ref01_resdata_up0[board_star_ref01_markdef_up0.name] === board_star_ref01_markdef_up0.value)


    // LOAD
    const board_star_ref01_match_dt0 = {}
    board_star_ref01_match_dt0.id = board_star_ref01_data.id
    const board_star_ref01_data_dt0 = (await board_star_ref01_ent.load(board_star_ref01_match_dt0)).data()
    assert(board_star_ref01_data_dt0.id === board_star_ref01_data.id)


    // REMOVE
    const board_star_ref01_match_rm0 = {}
    board_star_ref01_match_rm0.id = board_star_ref01_data.id
    await board_star_ref01_ent.remove(board_star_ref01_match_rm0)
  

    // LIST
    const board_star_ref01_match_rt0 = {}
    board_star_ref01_match_rt0['board_id'] = setup.idmap['board01']

    const board_star_ref01_list_rt0 = (await board_star_ref01_ent.list(board_star_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(board_star_ref01_list_rt0, { id: board_star_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/board_star/BoardStarTestData.json')

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
    ['board_star01','board_star02','board_star03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_BOARD_STAR_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_BOARD_STAR_ENTID']

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
  
