
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { TrelloSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('NotificationChannelSettingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.NotificationChannelSetting()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'notification_channel_setting.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let notification_channel_setting_ref01_data = Object.values(setup.data.existing.notification_channel_setting)[0] as any

    // LIST
    const notification_channel_setting_ref01_ent = client.NotificationChannelSetting()
    const notification_channel_setting_ref01_match: any = {}
    notification_channel_setting_ref01_match['member_id'] = setup.idmap['member01']

    const notification_channel_setting_ref01_list = (await notification_channel_setting_ref01_ent.list(notification_channel_setting_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const notification_channel_setting_ref01_data_up0: any = {}
    notification_channel_setting_ref01_data_up0.id = notification_channel_setting_ref01_data.id

    const notification_channel_setting_ref01_markdef_up0 = { name: 'idMember', value: 'Mark01-notification_channel_setting_ref01_' + setup.now }
    ;(notification_channel_setting_ref01_data_up0 as any)[notification_channel_setting_ref01_markdef_up0.name] = notification_channel_setting_ref01_markdef_up0.value

    const notification_channel_setting_ref01_resdata_up0 = (await notification_channel_setting_ref01_ent.update(notification_channel_setting_ref01_data_up0)).data()
    assert(notification_channel_setting_ref01_resdata_up0.id === notification_channel_setting_ref01_data_up0.id)

    assert((notification_channel_setting_ref01_resdata_up0 as any)[notification_channel_setting_ref01_markdef_up0.name] === notification_channel_setting_ref01_markdef_up0.value)


    // LOAD
    const notification_channel_setting_ref01_match_dt0: any = {}
    notification_channel_setting_ref01_match_dt0.id = notification_channel_setting_ref01_data.id
    const notification_channel_setting_ref01_data_dt0 = (await notification_channel_setting_ref01_ent.load(notification_channel_setting_ref01_match_dt0)).data()
    assert(notification_channel_setting_ref01_data_dt0.id === notification_channel_setting_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/notification_channel_setting/NotificationChannelSettingTestData.json')

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
    ['notification_channel_setting01','notification_channel_setting02','notification_channel_setting03','member01','member02','member03','member01','member02','member03','notifications_channel_setting01','notifications_channel_setting02','notifications_channel_setting03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  if (live) {
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
