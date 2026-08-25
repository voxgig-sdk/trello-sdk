
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


describe('TrelloListEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.TrelloList()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const trello_list_ref01_ent = client.TrelloList()
    let trello_list_ref01_data = setup.data.new.trello_list['trello_list_ref01']
    trello_list_ref01_data['board_id'] = setup.idmap['board01']

    trello_list_ref01_data = (await trello_list_ref01_ent.create(trello_list_ref01_data)).data()
    assert(null != trello_list_ref01_data.id)


    // LIST
    const trello_list_ref01_match = {}
    trello_list_ref01_match['board_id'] = setup.idmap['board01']

    const trello_list_ref01_list = (await trello_list_ref01_ent.list(trello_list_ref01_match)).map((e) => e.data())

    assert(!isempty(select(trello_list_ref01_list, { id: trello_list_ref01_data.id })))


    // LOAD
    const trello_list_ref01_match_dt0 = {}
    trello_list_ref01_match_dt0.id = trello_list_ref01_data.id
    const trello_list_ref01_data_dt0 = (await trello_list_ref01_ent.load(trello_list_ref01_match_dt0)).data()
    assert(trello_list_ref01_data_dt0.id === trello_list_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/trello_list/TrelloListTestData.json')

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
    ['trello_list01','trello_list02','trello_list03','action01','action02','action03','board01','board02','board03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_TRELLO_LIST_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_TRELLO_LIST_ENTID']

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
  
