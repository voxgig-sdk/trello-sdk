

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('NotificationMemberCreatorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.NotificationMemberCreator()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'notification_member_creator.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"notification_member_creator","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"all","kind":"query","name":"field","orig":"field","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /notifications/{id}/memberCreator","json":"{\"operationId\":\"get-notifications-id-membercreator\",\"parameters\":[{\"description\":\"The ID of the notification\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)\",\"explode\":false,\"in\":\"query\",\"name\":\"fields\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"id\"],\"type\":\"string\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"aaEmail\":{\"example\":null,\"format\":\"email\",\"nullable\":true,\"type\":\"string\"},\"aaEnrolledDate\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"aaId\":{\"example\":null,\"nullable\":true,\"type\":\"string\"},\"activityBlocked\":{\"example\":false,\"type\":\"boolean\"},\"avatarHash\":{\"example\":\"fc8faaaee46666a4eb8b626c08933e16\",\"type\":\"string\"},\"avatarSource\":{\"enum\":[\"gravatar\",\"upload\"],\"example\":\"gravatar\",\"type\":\"string\"},\"avatarUrl\":{\"example\":\"https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16\",\"format\":\"url\",\"type\":\"string\"},\"bio\":{\"example\":\"👋 I'm a developer advocate at Trello!\",\"type\":\"string\"},\"bioData\":{\"properties\":{\"emoji\":{\"type\":\"object\"}},\"type\":\"object\"},\"confirmed\":{\"example\":true,\"type\":\"boolean\"},\"email\":{\"example\":\"bcook@atlassian.com\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bentley Cook\",\"type\":\"string\"},\"gravatarHash\":{\"example\":\"0a1e804f6e35a65ae5e1f7ef4c92471c\",\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoards\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idBoardsPinned\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"nullable\":true,\"type\":\"array\"},\"idEnterprise\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idEnterprisesAdmin\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idEnterprisesDeactivated\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"idMemberReferrer\":{\"example\":null,\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idOrganizations\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"idPremOrgsAdmin\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"initials\":{\"example\":\"BC\",\"type\":\"string\"},\"isAaMastered\":{\"example\":false,\"type\":\"boolean\"},\"ixUpdate\":{\"example\":\"48427\",\"type\":\"number\"},\"limits\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"},\"loginTypes\":{\"items\":{\"enum\":[\"password\",\"saml\"],\"example\":\"password\",\"type\":\"string\"},\"type\":\"array\"},\"marketingOptIn\":{\"properties\":{\"date\":{\"example\":\"2018-04-26T17:03:25.155Z\",\"format\":\"date\",\"type\":\"string\"},\"optedIn\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"},\"memberType\":{\"enum\":[\"normal\",\"ghost\"],\"example\":\"normal\",\"type\":\"string\"},\"messagesDismissed\":{\"properties\":{\"_id\":{\"example\":\"5995d44573d197eada632a32\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"count\":{\"example\":4,\"type\":\"string\"},\"lastDismissed\":{\"example\":\"2019-03-11T20:19:46.809Z\",\"format\":\"date\",\"type\":\"string\"},\"name\":{\"example\":\"ad-security-features\",\"type\":\"string\"}},\"type\":\"object\"},\"nonPublic\":{\"description\":\"Profile data with restricted visibility. These fields are visible only to members of the\\nsame organization. The values here (full name, for example) may differ from the values\\nat the top level of the response.\\n\",\"properties\":{\"avatarHash\":{\"example\":\"db2adf80c2e6c26b76e1f10400eb4c45\",\"type\":\"string\"},\"avatarUrl\":{\"description\":\"A URL that references the non-public avatar for the member\",\"example\":\"https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45\",\"format\":\"url\",\"type\":\"string\"},\"fullName\":{\"example\":\"Bentley Cook\",\"type\":\"string\"},\"initials\":{\"example\":\"BC\",\"type\":\"string\"}},\"type\":\"object\"},\"nonPublicAvailable\":{\"description\":\"Whether the response contains non-public profile data for the member\",\"example\":false,\"type\":\"boolean\"},\"oneTimeMessagesDismissed\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"prefs\":{\"properties\":{\"colorBlind\":{\"example\":true,\"type\":\"boolean\"},\"locale\":{\"example\":\"en-AU\",\"type\":\"string\"},\"minutesBeforeDeadlineToNotify\":{\"example\":1440,\"type\":\"integer\"},\"minutesBetweenSummaries\":{\"example\":60,\"type\":\"integer\"},\"privacy\":{\"properties\":{\"avatar\":{\"enum\":[\"public\",\"private\",\"collaborator\"],\"example\":\"public\",\"type\":\"string\"},\"fullName\":{\"enum\":[\"public\",\"private\",\"collaborator\"],\"example\":\"public\",\"type\":\"string\"}},\"type\":\"object\"},\"sendSummaries\":{\"example\":true,\"type\":\"boolean\"},\"timezone\":{\"example\":\"America/Chicago\",\"type\":\"string\"},\"timezoneInfo\":{\"properties\":{\"dateNext\":{\"example\":\"2020-03-08T08:00:00.000Z\",\"format\":\"date\",\"type\":\"string\"},\"offsetCurrent\":{\"example\":360,\"type\":\"integer\"},\"offsetNext\":{\"example\":300,\"type\":\"integer\"},\"timezoneCurrent\":{\"example\":\"CST\",\"type\":\"string\"},\"timezoneNext\":{\"example\":\"CDT\",\"type\":\"string\"}},\"type\":\"object\"},\"twoFactor\":{\"properties\":{\"enabled\":{\"example\":true,\"type\":\"boolean\"},\"needsNewBackups\":{\"example\":false,\"type\":\"boolean\"}},\"type\":\"object\"}},\"type\":\"object\"},\"premiumFeatures\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"products\":{\"items\":{\"type\":\"integer\"},\"type\":\"array\"},\"status\":{\"enum\":[\"disconnected\"],\"example\":\"disconnected\",\"type\":\"string\"},\"trophies\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"uploadedAvatarHash\":{\"example\":\"dac3ad49ff117829dd63a79bb2ea3426\",\"type\":\"string\"},\"uploadedAvatarUrl\":{\"example\":\"https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426\",\"format\":\"url\",\"type\":\"string\"},\"url\":{\"example\":\"https://trello.com/bentleycook\",\"format\":\"url\",\"type\":\"string\"},\"username\":{\"example\":\"bentleycook\",\"type\":\"string\"}},\"type\":\"object\"}]}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/notifications/{id}/memberCreator","segments":[{"lit":"notifications"},{"var":"id"},{"lit":"memberCreator"}],"select":{"exist":["field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"notification_member_creator","name__orig":"notification_member_creator","Name":"NotificationMemberCreator","name_":"notification_member_creator","name-":"notification-member-creator","NAME":"NOTIFICATION_MEMBER_CREATOR","index$":47}, {"active":true,"entity":"notification_member_creator","key$":"BasicNotificationMemberCreatorFlow","kind":"basic","name":"BasicNotificationMemberCreatorFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"notification_member_creator_ref01","srcdatavar":"notification_member_creator_ref01_data","suffix":"_dt0"},"match":{"id":"notification_member_creator01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-notification_member_creator_ref01"}}],"index$":0}]}, 'NotificationMemberCreator')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let notification_member_creator_ref01_data = Object.values(setup.data.existing.notification_member_creator)[0] as any

    // LOAD
    const notification_member_creator_ref01_ent = client.NotificationMemberCreator()
    const notification_member_creator_ref01_match_dt0: any = {}
    notification_member_creator_ref01_match_dt0.id = notification_member_creator_ref01_data.id
    const notification_member_creator_ref01_data_dt0 = (await notification_member_creator_ref01_ent.load(notification_member_creator_ref01_match_dt0)).data()
    assert(notification_member_creator_ref01_data_dt0.id === notification_member_creator_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/notification_member_creator/NotificationMemberCreatorTestData.json')

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
    ['notification_member_creator01','notification_member_creator02','notification_member_creator03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_NOTIFICATION_MEMBER_CREATOR_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_NOTIFICATION_MEMBER_CREATOR_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_NOTIFICATION_MEMBER_CREATOR_ENTID']
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
  
