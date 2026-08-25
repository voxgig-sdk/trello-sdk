
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


describe('CheckItemEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CheckItem()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let check_item_ref01_data = Object.values(setup.data.existing.check_item)[0]

    // UPDATE
    const check_item_ref01_ent = client.CheckItem()
    const check_item_ref01_data_up0 = {}
    check_item_ref01_data_up0.id = check_item_ref01_data.id
    check_item_ref01_data_up0 ['checklist_id'] = setup.idmap['checklist_id']
    check_item_ref01_data_up0 ['id_card'] = setup.idmap['id_card']

    const check_item_ref01_markdef_up0 = { name: 'idChecklist', value: 'Mark01-check_item_ref01_' + setup.now }
    check_item_ref01_data_up0 [check_item_ref01_markdef_up0.name] = check_item_ref01_markdef_up0.value

    const check_item_ref01_resdata_up0 = (await check_item_ref01_ent.update(check_item_ref01_data_up0)).data()
    assert(check_item_ref01_resdata_up0.id === check_item_ref01_data_up0.id)

    assert(check_item_ref01_resdata_up0[check_item_ref01_markdef_up0.name] === check_item_ref01_markdef_up0.value)


    // LOAD
    const check_item_ref01_match_dt0 = {}
    check_item_ref01_match_dt0.id = check_item_ref01_data.id
    const check_item_ref01_data_dt0 = (await check_item_ref01_ent.load(check_item_ref01_match_dt0)).data()
    assert(check_item_ref01_data_dt0.id === check_item_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/check_item/CheckItemTestData.json')

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
    ['check_item01','check_item02','check_item03','card01','card02','card03','card01','card02','card03','checklist01','checklist02','checklist03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CHECK_ITEM_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_CHECK_ITEM_ENTID']

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
  
