
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


describe('SavedSearchEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.SavedSearch()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const saved_search_ref01_ent = client.SavedSearch()
    let saved_search_ref01_data = setup.data.new.saved_search['saved_search_ref01']
    saved_search_ref01_data['member_id'] = setup.idmap['member01']

    saved_search_ref01_data = (await saved_search_ref01_ent.create(saved_search_ref01_data)).data()
    assert(null != saved_search_ref01_data.id)


    // LIST
    const saved_search_ref01_match = {}
    saved_search_ref01_match['member_id'] = setup.idmap['member01']

    const saved_search_ref01_list = (await saved_search_ref01_ent.list(saved_search_ref01_match)).map((e) => e.data())

    assert(!isempty(select(saved_search_ref01_list, { id: saved_search_ref01_data.id })))


    // UPDATE
    const saved_search_ref01_data_up0 = {}
    saved_search_ref01_data_up0.id = saved_search_ref01_data.id
    saved_search_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const saved_search_ref01_markdef_up0 = { name: 'name', value: 'Mark01-saved_search_ref01_' + setup.now }
    saved_search_ref01_data_up0 [saved_search_ref01_markdef_up0.name] = saved_search_ref01_markdef_up0.value

    const saved_search_ref01_resdata_up0 = (await saved_search_ref01_ent.update(saved_search_ref01_data_up0)).data()
    assert(saved_search_ref01_resdata_up0.id === saved_search_ref01_data_up0.id)

    assert(saved_search_ref01_resdata_up0[saved_search_ref01_markdef_up0.name] === saved_search_ref01_markdef_up0.value)


    // LOAD
    const saved_search_ref01_match_dt0 = {}
    saved_search_ref01_match_dt0.id = saved_search_ref01_data.id
    const saved_search_ref01_data_dt0 = (await saved_search_ref01_ent.load(saved_search_ref01_match_dt0)).data()
    assert(saved_search_ref01_data_dt0.id === saved_search_ref01_data.id)


    // REMOVE
    const saved_search_ref01_match_rm0 = {}
    saved_search_ref01_match_rm0.id = saved_search_ref01_data.id
    await saved_search_ref01_ent.remove(saved_search_ref01_match_rm0)
  

    // LIST
    const saved_search_ref01_match_rt0 = {}
    saved_search_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const saved_search_ref01_list_rt0 = (await saved_search_ref01_ent.list(saved_search_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(saved_search_ref01_list_rt0, { id: saved_search_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/saved_search/SavedSearchTestData.json')

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
    ['saved_search01','saved_search02','saved_search03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_SAVED_SEARCH_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_SAVED_SEARCH_ENTID']

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
  
