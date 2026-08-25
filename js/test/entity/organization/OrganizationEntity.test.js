
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


describe('OrganizationEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Organization()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_ref01_ent = client.Organization()
    let organization_ref01_data = setup.data.new.organization['organization_ref01']
    organization_ref01_data['action_id'] = setup.idmap['action01']
    organization_ref01_data['enterpris_id'] = setup.idmap['enterpris01']
    organization_ref01_data['member_id'] = setup.idmap['member01']

    organization_ref01_data = (await organization_ref01_ent.create(organization_ref01_data)).data()
    assert(null != organization_ref01_data.id)


    // LIST
    const organization_ref01_match = {}
    organization_ref01_match['member_id'] = setup.idmap['member01']

    const organization_ref01_list = (await organization_ref01_ent.list(organization_ref01_match)).map((e) => e.data())

    assert(!isempty(select(organization_ref01_list, { id: organization_ref01_data.id })))


    // UPDATE
    const organization_ref01_data_up0 = {}
    organization_ref01_data_up0.id = organization_ref01_data.id

    const organization_ref01_markdef_up0 = { name: 'dateLastActivity', value: 'Mark01-organization_ref01_' + setup.now }
    organization_ref01_data_up0 [organization_ref01_markdef_up0.name] = organization_ref01_markdef_up0.value

    const organization_ref01_resdata_up0 = (await organization_ref01_ent.update(organization_ref01_data_up0)).data()
    assert(organization_ref01_resdata_up0.id === organization_ref01_data_up0.id)

    assert(organization_ref01_resdata_up0[organization_ref01_markdef_up0.name] === organization_ref01_markdef_up0.value)


    // LOAD
    const organization_ref01_match_dt0 = {}
    organization_ref01_match_dt0.id = organization_ref01_data.id
    const organization_ref01_data_dt0 = (await organization_ref01_ent.load(organization_ref01_match_dt0)).data()
    assert(organization_ref01_data_dt0.id === organization_ref01_data.id)


    // REMOVE
    const organization_ref01_match_rm0 = {}
    organization_ref01_match_rm0.id = organization_ref01_data.id
    await organization_ref01_ent.remove(organization_ref01_match_rm0)
  

    // LIST
    const organization_ref01_match_rt0 = {}
    organization_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const organization_ref01_list_rt0 = (await organization_ref01_ent.list(organization_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(organization_ref01_list_rt0, { id: organization_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/organization/OrganizationTestData.json')

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
    ['organization01','organization02','organization03','action01','action02','action03','enterpris01','enterpris02','enterpris03','member01','member02','member03','notification01','notification02','notification03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ORGANIZATION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_ORGANIZATION_ENTID']

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
  
