
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


describe('NotificationEntity', async () => {

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Notification()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let notification_ref01_data = Object.values(setup.data.existing.notification)[0]

    // LIST
    const notification_ref01_ent = client.Notification()
    const notification_ref01_match = {}
    notification_ref01_match['member_id'] = setup.idmap['member01']

    const notification_ref01_list = (await notification_ref01_ent.list(notification_ref01_match)).map((e) => e.data())


    // UPDATE
    const notification_ref01_data_up0 = {}
    notification_ref01_data_up0.id = notification_ref01_data.id

    const notification_ref01_markdef_up0 = { name: 'data', value: 'Mark01-notification_ref01_' + setup.now }
    notification_ref01_data_up0 [notification_ref01_markdef_up0.name] = notification_ref01_markdef_up0.value

    const notification_ref01_resdata_up0 = (await notification_ref01_ent.update(notification_ref01_data_up0)).data()
    assert(notification_ref01_resdata_up0.id === notification_ref01_data_up0.id)

    assert(notification_ref01_resdata_up0[notification_ref01_markdef_up0.name] === notification_ref01_markdef_up0.value)


    // LOAD
    const notification_ref01_match_dt0 = {}
    notification_ref01_match_dt0.id = notification_ref01_data.id
    const notification_ref01_data_dt0 = (await notification_ref01_ent.load(notification_ref01_match_dt0)).data()
    assert(notification_ref01_data_dt0.id === notification_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/notification/NotificationTestData.json')

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
    ['notification01','notification02','notification03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_NOTIFICATION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_NOTIFICATION_ENTID']

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
  
