

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { TrelloSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


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
      if (!live && maybeSkipControl(t, 'entityOp', 'notification_channel_setting.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blockedKeys":{"a":true,"h":"Blocked Keys","n":"blockedKeys","op":{"update":{"req":true,"type":"`$ANY`"}},"r":false,"sh":"Singular key or array of notification keys","t":"`$ARRAY`","key$":"blockedKeys","index$":0},"channel":{"a":true,"h":"Channel","n":"channel","op":{"update":{"req":true,"type":"`$STRING`"}},"r":false,"t":"`$STRING`","key$":"channel","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"idMember":{"a":true,"h":"Id Member","n":"idMember","r":false,"t":"`$STRING`","key$":"idMember","index$":3}},"id":{"field":"id","from":{"channel":"channel"},"name":"id","parts":["channel","blocked_key"],"sep":"/"},"name":"notification_channel_setting","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /members/{id}/notificationsChannelSettings","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/notificationsChannelSettings","q":{"exist":["member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /members/{id}/notificationsChannelSettings/{channel}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"email","k":"param","n":"channel","or":"channel","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/members/{id}/notificationsChannelSettings/{channel}","q":{"exist":["channel","member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"},{"var":"channel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"notification_comment_card","k":"param","n":"blocked_key","or":"blocked_key","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"email","k":"param","n":"channel","or":"channel","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}","q":{"exist":["blocked_key","channel","id"]},"r":{"param":{"blockedKeys":"blocked_key"}},"s":[{"lit":"members"},{"var":"id"},{"lit":"notificationsChannelSettings"},{"var":"channel"},{"var":"blocked_key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /members/{id}/notificationsChannelSettings/{channel}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"email","k":"param","n":"channel","or":"channel","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/members/{id}/notificationsChannelSettings/{channel}","q":{"exist":["channel","member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"},{"var":"channel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /members/{id}/notificationsChannelSettings","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/members/{id}/notificationsChannelSettings","q":{"exist":["member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.member"],["$.main.kit.entity.member"]]},"key$":"notification_channel_setting","name__orig":"notification_channel_setting","Name":"NotificationChannelSetting","name_":"notification_channel_setting","name-":"notification-channel-setting","NAME":"NOTIFICATION_CHANNEL_SETTING","index$":43}, {"active":true,"entity":"notification_channel_setting","key$":"BasicNotificationChannelSettingFlow","kind":"basic","name":"BasicNotificationChannelSettingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"notification_channel_setting_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"notification_channel_setting_ref01","srcdatavar":"notification_channel_setting_ref01_data","suffix":"_up0","textfield":"idMember"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_channel_setting_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"notification_channel_setting_ref01","srcdatavar":"notification_channel_setting_ref01_data","suffix":"_dt0"},"m":{"id":"notification_channel_setting01","member_id":"member01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_channel_setting_ref01"}}],"index$":2}]}, 'NotificationChannelSetting', {"GET /members/{id}/notificationsChannelSettings":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0}]},"GET /members/{id}/notificationsChannelSettings/{channel}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0},{"name":"channel","in":"path","description":"Channel to block notifications on","required":true,"schema":{"type":"string","enum":["email"],"example":"email","x-ref":"#/components/schemas/Channel"},"index$":1}]},"PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0},{"name":"channel","in":"path","description":"Channel to block notifications on","required":true,"schema":{"type":"string","enum":["email"],"example":"email","x-ref":"#/components/schemas/Channel"},"index$":1},{"name":"blockedKeys","in":"path","description":"Singular key or comma-separated list of notification keys","required":true,"schema":{"type":"string","enum":["notification_comment_card","notification_added_a_due_date","notification_changed_due_date","notification_card_due_soon","notification_removed_from_card","notification_added_attachment_to_card","notification_created_card","notification_moved_card","notification_archived_card","notification_unarchived_card"],"example":"notification_comment_card","x-ref":"#/components/schemas/BlockedKey"},"index$":2}]},"PUT /members/{id}/notificationsChannelSettings/{channel}":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["blockedKeys"],"properties":{"blockedKeys":{"description":"Singular key or array of notification keys","oneOf":[{"type":"string","enum":["notification_comment_card","notification_added_a_due_date","notification_changed_due_date","notification_card_due_soon","notification_removed_from_card","notification_added_attachment_to_card","notification_created_card","notification_moved_card","notification_archived_card","notification_unarchived_card"],"example":"notification_comment_card","x-ref":"#/components/schemas/BlockedKey"},{"type":"array","items":{"type":"string","enum":[],"example":"notification_comment_card","x-ref":"#/components/schemas/BlockedKey"}}],"key$":"blockedKeys"}},"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0},{"name":"channel","in":"path","description":"Channel to block notifications on","required":true,"schema":{"type":"string","enum":["email"],"example":"email","x-ref":"#/components/schemas/Channel"},"index$":1}]},"PUT /members/{id}/notificationsChannelSettings":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["channel","blockedKeys"],"properties":{"channel":{"type":"string","enum":["email"],"example":"email","x-ref":"#/components/schemas/Channel","key$":"channel"},"blockedKeys":{"description":"Blocked key or array of blocked keys.","oneOf":[{"type":"string","enum":["notification_comment_card","notification_added_a_due_date","notification_changed_due_date","notification_card_due_soon","notification_removed_from_card","notification_added_attachment_to_card","notification_created_card","notification_moved_card","notification_archived_card","notification_unarchived_card"],"example":"notification_comment_card","x-ref":"#/components/schemas/BlockedKey"},{"type":"array","items":{"type":"string","enum":[],"example":"notification_comment_card","x-ref":"#/components/schemas/BlockedKey"}}],"key$":"blockedKeys"}},"index$":1}}}},"parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"oneOf":[{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},{"type":"string"}]},"index$":0}]}})
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
    ['notification_channel_setting01','notification_channel_setting02','notification_channel_setting03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_NOTIFICATION_CHANNEL_SETTING_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new TrelloSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.TRELLO_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
