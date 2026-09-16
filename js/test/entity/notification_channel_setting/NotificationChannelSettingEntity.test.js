
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { TrelloSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


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

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"blockedKeys","op":{"update":{"req":true,"type":"`$ANY`"}},"req":false,"short":"Singular key or array of notification keys","type":"`$ARRAY`","index$":0},{"active":true,"name":"channel","op":{"update":{"req":true,"type":"`$STRING`"}},"req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"idMember","req":false,"type":"`$STRING`","index$":3}],"id":{"field":"id","from":{"channel":"channel"},"name":"id","parts":["channel","blocked_key"],"sep":"/"},"name":"notification_channel_setting","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /members/{id}/notificationsChannelSettings","json":"{\"operationId\":\"get-members-id-notificationChannelSettings\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"blockedKeys\":{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/notificationsChannelSettings","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"}],"select":{"exist":["member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"email","kind":"param","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /members/{id}/notificationsChannelSettings/{channel}","json":"{\"operationId\":\"get-members-id-notificationChannelSettings-channel\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"Channel to block notifications on\",\"in\":\"path\",\"name\":\"channel\",\"required\":true,\"schema\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/members/{id}/notificationsChannelSettings/{channel}","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"},{"var":"channel"}],"select":{"exist":["channel","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"notification_comment_card","kind":"param","name":"blocked_key","orig":"blocked_key","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"email","kind":"param","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"PUT /members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}","json":"{\"operationId\":\"put-members-id-notificationChannelSettings-channel-blockedKeys\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"Channel to block notifications on\",\"in\":\"path\",\"name\":\"channel\",\"required\":true,\"schema\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"}},{\"description\":\"Singular key or comma-separated list of notification keys\",\"in\":\"path\",\"name\":\"blockedKeys\",\"required\":true,\"schema\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}","rename":{"param":{"blockedKeys":"blocked_key"}},"segments":[{"lit":"members"},{"var":"id"},{"lit":"notificationsChannelSettings"},{"var":"channel"},{"var":"blocked_key"}],"select":{"exist":["blocked_key","channel","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"email","kind":"param","name":"channel","orig":"channel","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /members/{id}/notificationsChannelSettings/{channel}","json":"{\"operationId\":\"put-members-id-notificationChannelSettings-channel-blockedKeys\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}},{\"description\":\"Channel to block notifications on\",\"in\":\"path\",\"name\":\"channel\",\"required\":true,\"schema\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"description\":\"Singular key or array of notification keys\",\"oneOf\":[{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"}]}},\"required\":[\"blockedKeys\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/notificationsChannelSettings/{channel}","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"},{"var":"channel"}],"select":{"exist":["channel","member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"member_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /members/{id}/notificationsChannelSettings","json":"{\"operationId\":\"put-members-id-notificationChannelSettings-channel-blockedKeys\",\"parameters\":[{\"description\":\"The ID or username of the member\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},{\"type\":\"string\"}]}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"description\":\"Blocked key or array of blocked keys.\",\"oneOf\":[{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"}]},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"}},\"required\":[\"channel\",\"blockedKeys\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"blockedKeys\":{\"items\":{\"enum\":[\"notification_comment_card\",\"notification_added_a_due_date\",\"notification_changed_due_date\",\"notification_card_due_soon\",\"notification_removed_from_card\",\"notification_added_attachment_to_card\",\"notification_created_card\",\"notification_moved_card\",\"notification_archived_card\",\"notification_unarchived_card\"],\"example\":\"notification_comment_card\",\"type\":\"string\"},\"type\":\"array\"},\"channel\":{\"enum\":[\"email\"],\"example\":\"email\",\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idMember\":{\"example\":\"5589c3ea49b40cedc28cf70e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/members/{id}/notificationsChannelSettings","rename":{"param":{"id":"member_id"}},"segments":[{"lit":"members"},{"var":"member_id"},{"lit":"notificationsChannelSettings"}],"select":{"exist":["member_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["member"],["member","notifications_channel_setting"]]},"key$":"notification_channel_setting","name__orig":"notification_channel_setting","Name":"NotificationChannelSetting","name_":"notification_channel_setting","name-":"notification-channel-setting","NAME":"NOTIFICATION_CHANNEL_SETTING","index$":45}, {"active":true,"entity":"notification_channel_setting","key$":"BasicNotificationChannelSettingFlow","kind":"basic","name":"BasicNotificationChannelSettingFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"member_id":"member01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"notification_channel_setting_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"notification_channel_setting_ref01","srcdatavar":"notification_channel_setting_ref01_data","suffix":"_up0","textfield":"idMember"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_channel_setting_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"notification_channel_setting_ref01","srcdatavar":"notification_channel_setting_ref01_data","suffix":"_dt0"},"match":{"id":"notification_channel_setting01","member_id":"member01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_channel_setting_ref01"}}],"index$":2}]}, 'NotificationChannelSetting')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let notification_channel_setting_ref01_data = Object.values(setup.data.existing.notification_channel_setting)[0]

    // LIST
    const notification_channel_setting_ref01_ent = client.NotificationChannelSetting()
    const notification_channel_setting_ref01_match = {}
    notification_channel_setting_ref01_match['member_id'] = setup.idmap['member01']

    const notification_channel_setting_ref01_list = (await notification_channel_setting_ref01_ent.list(notification_channel_setting_ref01_match)).map((e) => e.data())


    // UPDATE
    const notification_channel_setting_ref01_data_up0 = {}
    notification_channel_setting_ref01_data_up0.id = notification_channel_setting_ref01_data.id

    const notification_channel_setting_ref01_markdef_up0 = { name: 'idMember', value: 'Mark01-notification_channel_setting_ref01_' + setup.now }
    notification_channel_setting_ref01_data_up0 [notification_channel_setting_ref01_markdef_up0.name] = notification_channel_setting_ref01_markdef_up0.value

    const notification_channel_setting_ref01_resdata_up0 = (await notification_channel_setting_ref01_ent.update(notification_channel_setting_ref01_data_up0)).data()
    assert(notification_channel_setting_ref01_resdata_up0.id === notification_channel_setting_ref01_data_up0.id)

    assert(notification_channel_setting_ref01_resdata_up0[notification_channel_setting_ref01_markdef_up0.name] === notification_channel_setting_ref01_markdef_up0.value)


    // LOAD
    const notification_channel_setting_ref01_match_dt0 = {}
    notification_channel_setting_ref01_match_dt0.id = notification_channel_setting_ref01_data.id
    const notification_channel_setting_ref01_data_dt0 = (await notification_channel_setting_ref01_ent.load(notification_channel_setting_ref01_match_dt0)).data()
    assert(notification_channel_setting_ref01_data_dt0.id === notification_channel_setting_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
