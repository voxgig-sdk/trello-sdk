

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


describe('ReadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Read()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'read.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"read","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"ids","orig":"ids","reqd":false,"type":"`$ARRAY`","index$":0},{"active":true,"example":true,"kind":"query","name":"read","orig":"read","reqd":false,"type":"`$BOOLEAN`","index$":1}]},"contract":{"id":"POST /notifications/all/read","json":"{\"operationId\":\"post-notifications-all-read\",\"parameters\":[{\"description\":\"Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)\",\"in\":\"query\",\"name\":\"read\",\"required\":false,\"schema\":{\"default\":true,\"type\":\"boolean\"}},{\"description\":\"A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.\",\"explode\":false,\"in\":\"query\",\"name\":\"ids\",\"schema\":{\"items\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"type\":\"array\"},\"style\":\"form\"}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"board\":{\"properties\":{\"closed\":{\"example\":false,\"type\":\"boolean\"},\"creationMethod\":{\"nullable\":true,\"type\":\"string\"},\"dateLastActivity\":{\"format\":\"date\",\"type\":\"string\"},\"dateLastView\":{\"format\":\"date\",\"type\":\"string\"},\"datePluginDisable\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"desc\":{\"example\":\"Track changes to Trello's Platform on this board.\",\"type\":\"string\"},\"descData\":{\"type\":\"string\"},\"enterpriseOwned\":{\"type\":\"boolean\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMemberCreator\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idOrganization\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idTags\":{\"type\":\"string\"},\"ixUpdate\":{\"type\":\"integer\"},\"labelNames\":{\"properties\":{\"black\":{\"example\":\"Capabilties\",\"type\":\"string\"},\"blue\":{\"example\":\"News\",\"type\":\"string\"},\"green\":{\"example\":\"Addition\",\"type\":\"string\"},\"lime\":{\"example\":\"Delight\",\"type\":\"string\"},\"orange\":{\"example\":\"Deprecation\",\"type\":\"string\"},\"pink\":{\"example\":\"REST API\",\"type\":\"string\"},\"purple\":{\"example\":\"Power-Ups\",\"type\":\"string\"},\"red\":{\"example\":\"Deletion\",\"type\":\"string\"},\"sky\":{\"example\":\"Announcement\",\"type\":\"string\"},\"yellow\":{\"example\":\"Update\",\"type\":\"string\"}},\"type\":\"object\"},\"limits\":{\"properties\":{\"attachments\":{\"properties\":{\"perBoard\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"memberships\":{\"type\":\"string\"},\"name\":{\"description\":\"The name of the board.\",\"example\":\"Trello Platform Changes\",\"type\":\"string\"},\"pinned\":{\"example\":false,\"type\":\"boolean\"},\"powerUps\":{\"type\":\"string\"},\"prefs\":{\"properties\":{\"background\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"backgroundBottomColor\":{\"example\":\"#1e2e00\",\"type\":\"string\"},\"backgroundBrightness\":{\"example\":\"dark\",\"type\":\"string\"},\"backgroundImage\":{\"format\":\"uri\",\"type\":\"string\"},\"backgroundImageScaled\":{\"items\":{\"properties\":{\"height\":{\"description\":\"The height of the image.\",\"example\":64,\"type\":\"integer\"},\"url\":{\"description\":\"The URL of the image.\",\"example\":\"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg\",\"format\":\"url\",\"type\":\"string\"},\"width\":{\"description\":\"The width of the image.\",\"example\":100,\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"backgroundTile\":{\"type\":\"boolean\"},\"backgroundTopColor\":{\"example\":\"#ffffff\",\"type\":\"string\"},\"calendarFeedEnabled\":{\"type\":\"boolean\"},\"canBeEnterprise\":{\"type\":\"boolean\"},\"canBeOrg\":{\"type\":\"boolean\"},\"canBePrivate\":{\"type\":\"boolean\"},\"canBePublic\":{\"type\":\"boolean\"},\"canInvite\":{\"type\":\"boolean\"},\"cardAging\":{\"enum\":[\"pirate\",\"regular\"],\"type\":\"string\"},\"cardCovers\":{\"type\":\"boolean\"},\"comments\":{\"type\":\"string\"},\"hideVotes\":{\"type\":\"boolean\"},\"invitations\":{\"enum\":[\"admins\",\"members\"]},\"isTemplate\":{\"type\":\"boolean\"},\"permissionLevel\":{\"enum\":[\"org\",\"board\"],\"type\":\"string\"},\"selfJoin\":{\"type\":\"boolean\"},\"voting\":{\"enum\":[\"disabled\",\"enabled\"],\"type\":\"string\"}},\"type\":\"object\"},\"shortLink\":{\"type\":\"string\"},\"shortUrl\":{\"example\":\"https://trello.com/b/dQHqCohZ\",\"format\":\"url\",\"type\":\"string\"},\"starred\":{\"type\":\"boolean\"},\"subscribed\":{\"type\":\"boolean\"},\"templateGallery\":{\"nullable\":true,\"type\":\"string\"},\"url\":{\"example\":\"https://trello.com/b/dQHqCohZ/trello-platform-changelog\",\"format\":\"url\",\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"},\"card\":{\"properties\":{\"address\":{\"nullable\":true,\"type\":\"string\"},\"badges\":{\"properties\":{\"attachments\":{\"example\":0,\"type\":\"integer\"},\"attachmentsByType\":{\"properties\":{\"trello\":{\"properties\":{\"board\":{\"type\":\"number\"},\"card\":{\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"},\"checkItems\":{\"example\":0,\"type\":\"integer\"},\"checkItemsChecked\":{\"example\":0,\"type\":\"integer\"},\"comments\":{\"example\":0,\"type\":\"integer\"},\"description\":{\"type\":\"boolean\"},\"due\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"dueComplete\":{\"type\":\"boolean\"},\"fogbugz\":{\"type\":\"string\"},\"location\":{\"type\":\"boolean\"},\"start\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"subscribed\":{\"example\":false,\"type\":\"boolean\"},\"viewingMemberVoted\":{\"example\":false,\"type\":\"boolean\"},\"votes\":{\"type\":\"integer\"}},\"type\":\"object\"},\"cardRole\":{\"enum\":[\"separator\",\"board\",\"mirror\",\"link\"],\"example\":\"mirror\",\"nullable\":true,\"type\":\"string\"},\"checkItemStates\":{\"items\":{\"oneOf\":[{\"type\":\"string\"}]},\"type\":\"array\"},\"closed\":{\"type\":\"boolean\"},\"coordinates\":{\"nullable\":true,\"type\":\"string\"},\"cover\":{\"properties\":{\"brightness\":{\"enum\":[\"light\",\"dark\"],\"type\":\"string\"},\"color\":{\"enum\":[\"yellow\",\"purple\",\"blue\",\"red\",\"green\",\"orange\",\"black\",\"sky\",\"pink\",\"lime\"],\"nullable\":true,\"type\":\"string\"},\"idAttachment\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idUploadedBackground\":{\"nullable\":true,\"type\":\"boolean\"},\"isTemplate\":{\"example\":false,\"type\":\"boolean\"},\"size\":{\"enum\":[\"normal\"],\"type\":\"string\"}},\"type\":\"object\"},\"creationMethod\":{\"nullable\":true,\"type\":\"string\"},\"dateLastActivity\":{\"example\":\"2019-09-16T16:19:17.156Z\",\"format\":\"date-time\",\"type\":\"string\"},\"desc\":{\"example\":\"👋Hey there,\\n\\nTrello's Platform team uses this board to keep developers up-to-date.\",\"type\":\"string\"},\"descData\":{\"properties\":{\"emoji\":{\"type\":\"object\"}},\"type\":\"object\"},\"due\":{\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"dueReminder\":{\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idAttachmentCover\":{\"example\":\"5abbe4b7ddc1b351ef961415\",\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idChecklists\":{\"items\":{\"oneOf\":[{\"properties\":{\"id\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]},\"type\":\"array\"},\"idLabels\":{\"items\":{\"oneOf\":[{\"properties\":{\"color\":{\"description\":\"The color of the label. Null means no color and the label will not be shown on the front of Cards.\",\"enum\":[\"yellow\",\"purple\",\"blue\",\"red\",\"green\",\"orange\",\"black\",\"sky\",\"pink\",\"lime\"],\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"The ID of the label.\",\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idBoard\":{\"description\":\"The ID of the board the label is on.\",\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"description\":\"The name displayed for the label.\",\"example\":\"Overdue\",\"maxLength\":16384,\"minLength\":0,\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]},\"type\":\"array\"},\"idList\":{\"example\":\"5abbe4b7ddc1b351ef961415\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMembers\":{\"items\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]},\"type\":\"array\"},\"idMembersVoted\":{\"items\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]},\"type\":\"array\"},\"idShort\":{\"type\":\"integer\"},\"labels\":{\"items\":{\"oneOf\":[{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}]},\"type\":\"array\"},\"limits\":{\"properties\":{\"attachments\":{\"properties\":{\"perBoard\":{\"properties\":{\"disableAt\":{\"example\":36000,\"type\":\"number\"},\"status\":{\"enum\":[\"ok\",\"warning\"],\"type\":\"string\"},\"warnAt\":{\"example\":32400,\"type\":\"number\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"type\":\"object\"},\"locationName\":{\"nullable\":true,\"type\":\"string\"},\"manualCoverAttachment\":{\"example\":false,\"type\":\"boolean\"},\"mirrorSourceId\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"name\":{\"example\":\"👋 What? Why? How?\",\"type\":\"string\"},\"pos\":{\"example\":65535,\"format\":\"float\",\"type\":\"number\"},\"shortLink\":{\"example\":\"H0TZyzbK\",\"type\":\"string\"},\"shortUrl\":{\"example\":\"https://trello.com/c/H0TZyzbK\",\"format\":\"url\",\"type\":\"string\"},\"subscribed\":{\"example\":false,\"type\":\"boolean\"},\"url\":{\"example\":\"https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how\",\"format\":\"url\",\"type\":\"string\"}},\"type\":\"object\"},\"data\":{\"example\":null,\"type\":\"string\"},\"date\":{\"example\":\"2019-11-08T16:02:52.763Z\",\"type\":\"string\"},\"dateRead\":{\"example\":null,\"type\":\"string\"},\"id\":{\"example\":\"5dc591ac425f2a223aba0a8e\",\"type\":\"string\"},\"idAction\":{\"example\":null,\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idMemberCreator\":{\"example\":null,\"nullable\":true,\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"reactions\":{\"example\":[],\"type\":\"array\"},\"type\":{\"enum\":[\"cardDueSoon\"],\"example\":\"cardDueSoon\",\"type\":\"string\"},\"unread\":{\"example\":true,\"type\":\"boolean\"}}}]}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/notifications/all/read","segments":[{"lit":"notifications"},{"lit":"all"},{"lit":"read"}],"select":{"exist":["ids","read"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"read","name__orig":"read","Name":"Read","name_":"read","name-":"read","NAME":"READ","index$":57}, {"active":true,"entity":"read","key$":"BasicReadFlow","kind":"basic","name":"BasicReadFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"read_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Read')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const read_ref01_ent = client.Read()
    let read_ref01_data = setup.data.new.read['read_ref01']

    read_ref01_data = (await read_ref01_ent.create(read_ref01_data)).data()
    assert(null != read_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/read/ReadTestData.json')

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
    ['read01','read02','read03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_READ_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_READ_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_READ_ENTID']
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
  
