
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


describe('NotificationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Notification()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"board":{"a":true,"h":"Board","n":"board","r":true,"t":"`$OBJECT`","key$":"board","index$":0},"card":{"a":true,"h":"Card","n":"card","r":false,"t":"`$OBJECT`","union":{"branches":2,"count":2,"depth":3},"key$":"card","index$":1},"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$STRING`","key$":"data","index$":2},"date":{"a":true,"h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":3},"dateRead":{"a":true,"h":"Date Read","n":"dateRead","r":false,"t":"`$STRING`","key$":"dateRead","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"idAction":{"a":true,"h":"Id Action","n":"idAction","r":false,"t":"`$STRING`","key$":"idAction","index$":6},"idMemberCreator":{"a":true,"h":"Id Member Creator","n":"idMemberCreator","r":false,"t":"`$STRING`","key$":"idMemberCreator","index$":7},"reactions":{"a":true,"h":"Reactions","n":"reactions","r":false,"t":"`$ARRAY`","key$":"reactions","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":9},"unread":{"a":true,"h":"Unread","n":"unread","r":false,"t":"`$BOOLEAN`","key$":"unread","index$":10}},"id":{"field":"id","name":"id"},"name":"notification","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /members/{id}/notifications","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"display","or":"display","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":false,"k":"query","n":"entity","or":"entity","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"all","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"50","k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"ex":true,"k":"query","n":"member_creator","or":"member_creator","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"member_creator_field","or":"member_creator_field","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"0","k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":8},{"a":true,"ex":"all","k":"query","n":"read_filter","or":"read_filter","r":false,"t":"`$STRING`","index$":9},{"a":true,"k":"query","n":"since","or":"since","r":false,"t":"`$STRING`","index$":10}]},"k":"http","m":"GET","o":"/members/{id}/notifications","q":{"exist":["before","display","entity","field","filter","limit","member_creator","member_creator_field","member_id","page","read_filter","since"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"notifications"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /notifications/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":false,"k":"query","n":"board","or":"board","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":"name","k":"query","n":"board_field","or":"board_field","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":false,"k":"query","n":"card","or":"card","r":false,"t":"`$BOOLEAN`","index$":2},{"a":true,"ex":"name","k":"query","n":"card_field","or":"card_field","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":false,"k":"query","n":"display","or":"display","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":false,"k":"query","n":"entity","or":"entity","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":6},{"a":true,"ex":false,"k":"query","n":"list","or":"list","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":true,"k":"query","n":"member","or":"member","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"ex":true,"k":"query","n":"member_creator","or":"member_creator","r":false,"t":"`$BOOLEAN`","index$":9},{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"member_creator_field","or":"member_creator_field","r":false,"t":"`$STRING`","index$":10},{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"member_field","or":"member_field","r":false,"t":"`$STRING`","index$":11},{"a":true,"ex":false,"k":"query","n":"organization","or":"organization","r":false,"t":"`$BOOLEAN`","index$":12},{"a":true,"ex":"displayName","k":"query","n":"organization_field","or":"organization_field","r":false,"t":"`$STRING`","index$":13}]},"k":"http","m":"GET","o":"/notifications/{id}","q":{"exist":["board","board_field","card","card_field","display","entity","field","id","list","member","member_creator","member_creator_field","member_field","organization","organization_field"]},"r":{},"s":[{"lit":"notifications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /notifications/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/notifications/{id}/{field}","q":{"exist":["field","id"]},"r":{},"s":[{"lit":"notifications"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /notifications/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"unread","or":"unread","r":false,"t":"`$BOOLEAN`","index$":0}]},"k":"http","m":"PUT","o":"/notifications/{id}","q":{"exist":["id","unread"]},"r":{},"s":[{"lit":"notifications"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /notifications/{id}/unread","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"value","or":"value","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/notifications/{id}/unread","q":{"$action":"unread","exist":["id","value"]},"r":{},"s":[{"lit":"notifications"},{"var":"id"},{"lit":"unread"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.member"]]},"key$":"notification","name__orig":"notification","Name":"Notification","name_":"notification","name-":"notification","NAME":"NOTIFICATION","index$":42}, {"active":true,"entity":"notification","key$":"BasicNotificationFlow","kind":"basic","name":"BasicNotificationFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"notification_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"notification_ref01","srcdatavar":"notification_ref01_data","suffix":"_up0","textfield":"data"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"notification_ref01","srcdatavar":"notification_ref01_data","suffix":"_dt0"},"m":{"id":"notification01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_ref01"}}],"index$":2}]}, 'Notification', {"GET /members/{id}/notifications":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"entities","in":"query","description":"","required":false,"schema":{"type":"boolean","default":false},"index$":1},{"name":"display","in":"query","description":"","required":false,"schema":{"type":"boolean","default":false},"index$":2},{"name":"filter","in":"query","description":"","required":false,"schema":{"type":"string","default":"all"},"index$":3},{"name":"read_filter","in":"query","description":"One of: `all`, `read`, `unread`","required":false,"schema":{"type":"string","default":"all"},"index$":4},{"name":"fields","in":"query","description":"`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"all"},"index$":5},{"name":"limit","in":"query","description":"Max 1000","required":false,"schema":{"type":"integer","format":"int32","default":"50"},"index$":6},{"name":"page","in":"query","description":"Max 100","required":false,"schema":{"type":"integer","format":"int32","default":"0"},"index$":7},{"name":"before","in":"query","description":"A notification ID","required":false,"schema":{"type":"string"},"index$":8},{"name":"since","in":"query","description":"A notification ID","required":false,"schema":{"type":"string"},"index$":9},{"name":"memberCreator","in":"query","description":"","required":false,"schema":{"type":"boolean","default":true},"index$":10},{"name":"memberCreator_fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"avatarHash,fullName,initials,username"},"index$":11}]},"GET /notifications/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the notification","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"board","in":"query","description":"Whether to include the board object","required":false,"schema":{"type":"boolean","default":false},"index$":1},{"name":"board_fields","in":"query","description":"`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"style":"form","explode":false,"schema":{"type":"string","enum":["id","name","desc","descData","closed","idMemberCreator","idOrganization","pinned","url","shortUrl","prefs","labelNames","starred","limits","memberships","enterpriseOwned"],"default":"name","x-ref":"#/components/schemas/BoardFields"},"index$":2},{"name":"card","in":"query","description":"Whether to include the card object","required":false,"schema":{"type":"boolean","default":false},"index$":3},{"name":"card_fields","in":"query","description":"`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"style":"form","explode":false,"schema":{"type":"string","enum":["id","address","badges","checkItemStates","closed","coordinates","creationMethod","dueComplete","dateLastActivity","desc","descData","due","dueReminder","idBoard","idChecklists","idLabels","idList","idMembers","idMembersVoted","idShort","idAttachmentCover","labels","limits","locationName","manualCoverAttachment","name","pos","shortLink","shortUrl","subscribed","url","cover","isTemplate"],"description":"The fields on a Card.","default":"name","x-ref":"#/components/schemas/CardFields"},"index$":4},{"name":"display","in":"query","description":"Whether to include the display object with the results","required":false,"schema":{"type":"boolean","default":false},"index$":5},{"name":"entities","in":"query","description":"Whether to include the entities object with the results","required":false,"schema":{"type":"boolean","default":false},"index$":6},{"name":"fields","in":"query","description":"`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"style":"form","explode":false,"schema":{"type":"string","enum":["id","unread","type","date","dateRead","data","card","board","idMemberCreator","idAction","reactions"],"default":"all","x-ref":"#/components/schemas/NotificationFields"},"index$":7},{"name":"list","in":"query","description":"Whether to include the list object","required":false,"schema":{"type":"boolean","default":false},"index$":8},{"name":"member","in":"query","description":"Whether to include the member object","required":false,"schema":{"type":"boolean","default":true},"index$":9},{"name":"member_fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"style":"form","explode":false,"schema":{"type":"string","enum":["id"],"default":"avatarHash,fullName,initials,username","x-ref":"#/components/schemas/MemberFields"},"index$":10},{"name":"memberCreator","in":"query","description":"Whether to include the member object of the creator","required":false,"schema":{"type":"boolean","default":true},"index$":11},{"name":"memberCreator_fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","enum":["id"],"default":"avatarHash,fullName,initials,username","x-ref":"#/components/schemas/MemberFields"},"index$":12},{"name":"organization","in":"query","description":"Whether to include the organization object","required":false,"schema":{"type":"boolean","default":false},"index$":13},{"name":"organization_fields","in":"query","description":"`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","enum":["id","name"],"default":"displayName","x-ref":"#/components/schemas/OrganizationFields"},"index$":14}]},"GET /notifications/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the notification","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"field","in":"path","description":"A notification [field](/cloud/trello/guides/rest-api/object-definitions/)","required":true,"schema":{"type":"string","enum":["id","unread","type","date","dateRead","data","card","board","idMemberCreator","idAction","reactions"],"x-ref":"#/components/schemas/NotificationFields"},"index$":1}]},"PUT /notifications/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the notification","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"unread","in":"query","description":"Whether the notification should be marked as read or not","required":false,"schema":{"type":"boolean"},"index$":1}]},"PUT /notifications/{id}/unread":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the notification","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"value","in":"query","description":"","required":false,"schema":{"type":"string"},"index$":1}]}})
    }
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
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_NOTIFICATION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_NOTIFICATION_ENTID']
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
  
