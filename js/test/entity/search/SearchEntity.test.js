
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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"name,idOrganization","k":"query","n":"board_field","or":"board_field","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":false,"k":"query","n":"board_organization","or":"board_organization","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":10,"k":"query","n":"boards_limit","or":"boards_limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"false","k":"query","n":"card_attachment","or":"card_attachment","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":false,"k":"query","n":"card_board","or":"card_board","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":"all","k":"query","n":"card_field","or":"card_field","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":false,"k":"query","n":"card_list","or":"card_list","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"ex":false,"k":"query","n":"card_member","or":"card_member","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":false,"k":"query","n":"card_sticker","or":"card_sticker","r":false,"t":"`$BOOLEAN`","index$":8},{"a":true,"ex":10,"k":"query","n":"cards_limit","or":"cards_limit","r":false,"t":"`$INTEGER`","index$":9},{"a":true,"ex":0,"k":"query","n":"cards_page","or":"cards_page","r":false,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"id_board","or":"id_board","r":false,"t":"`$ANY`","index$":11},{"a":true,"k":"query","n":"id_card","or":"id_card","r":false,"t":"`$STRING`","index$":12},{"a":true,"k":"query","n":"id_organization","or":"id_organization","r":false,"t":"`$STRING`","index$":13},{"a":true,"ex":"avatarHash,fullName,initials,username,confirmed","k":"query","n":"member_field","or":"member_field","r":false,"t":"`$STRING`","index$":14},{"a":true,"ex":"10","k":"query","n":"members_limit","or":"members_limit","r":false,"t":"`$INTEGER`","index$":15},{"a":true,"ex":"all","k":"query","n":"model_type","or":"model_type","r":false,"t":"`$STRING`","index$":16},{"a":true,"ex":"name,displayName","k":"query","n":"organization_field","or":"organization_field","r":false,"t":"`$STRING`","index$":17},{"a":true,"ex":"10","k":"query","n":"organizations_limit","or":"organizations_limit","r":false,"t":"`$INTEGER`","index$":18},{"a":true,"ex":false,"k":"query","n":"partial","or":"partial","r":false,"t":"`$BOOLEAN`","index$":19},{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":20}]},"k":"http","m":"GET","o":"/search","q":{"exist":["board_field","board_organization","boards_limit","card_attachment","card_board","card_field","card_list","card_member","card_sticker","cards_limit","cards_page","id_board","id_card","id_organization","member_field","members_limit","model_type","organization_field","organizations_limit","partial","query"]},"r":{},"s":[{"lit":"search"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":56}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search":{"protocol":"http","parameters":[{"name":"query","in":"query","description":"The search query with a length of 1 to 16384 characters","required":true,"schema":{"type":"string","maxLength":16834,"minLength":1},"index$":0},{"name":"idBoards","in":"query","description":"`mine` or a comma-separated list of Board IDs","required":false,"style":"form","explode":false,"schema":{"oneOf":[{"type":"string","enum":["mine"]},{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"}]},"index$":1},{"name":"idOrganizations","in":"query","description":"A comma-separated list of Organization IDs","required":false,"style":"form","explode":false,"schema":{"type":"string"},"index$":2},{"name":"idCards","in":"query","description":"A comma-separated list of Card IDs","required":false,"style":"form","explode":false,"schema":{"type":"string"},"index$":3},{"name":"modelTypes","in":"query","description":"What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`","required":false,"schema":{"type":"string","default":"all"},"index$":4},{"name":"board_fields","in":"query","style":"form","explode":false,"description":"all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`","required":false,"schema":{"type":"string","default":"name,idOrganization"},"index$":5},{"name":"boards_limit","in":"query","description":"The maximum number of boards returned. Maximum: 1000","required":false,"schema":{"type":"integer","maximum":1000,"default":10},"index$":6},{"name":"board_organization","in":"query","description":"Whether to include the parent organization with board results","required":false,"schema":{"type":"boolean","default":false},"index$":7},{"name":"card_fields","in":"query","description":"all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`","required":false,"style":"form","explode":false,"schema":{"type":"string","default":"all"},"index$":8},{"name":"cards_limit","in":"query","description":"The maximum number of cards to return. Maximum: 1000","style":"form","explode":false,"required":false,"schema":{"type":"integer","maximum":1000,"default":10},"index$":9},{"name":"cards_page","in":"query","description":"The page of results for cards. Maximum: 100","required":false,"schema":{"type":"number","maximum":100,"default":0},"index$":10},{"name":"card_board","in":"query","description":"Whether to include the parent board with card results","required":false,"schema":{"type":"boolean","default":false},"index$":11},{"name":"card_list","in":"query","description":"Whether to include the parent list with card results","required":false,"schema":{"type":"boolean","default":false},"index$":12},{"name":"card_members","in":"query","description":"Whether to include member objects with card results","required":false,"schema":{"type":"boolean","default":false},"index$":13},{"name":"card_stickers","in":"query","description":"Whether to include sticker objects with card results","required":false,"schema":{"type":"boolean","default":false},"index$":14},{"name":"card_attachments","in":"query","description":"Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.","required":false,"schema":{"type":"string","default":"false"},"index$":15},{"name":"organization_fields","in":"query","description":"all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website","required":false,"schema":{"type":"string","default":"name,displayName"},"index$":16},{"name":"organizations_limit","in":"query","description":"The maximum number of Workspaces to return. Maximum 1000","required":false,"schema":{"type":"integer","format":"int32","default":"10"},"index$":17},{"name":"member_fields","in":"query","description":"all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username","required":false,"schema":{"type":"string","default":"avatarHash,fullName,initials,username,confirmed"},"index$":18},{"name":"members_limit","in":"query","description":"The maximum number of members to return. Maximum 1000","required":false,"schema":{"type":"integer","format":"int32","default":"10"},"index$":19},{"name":"partial","in":"query","description":"By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled \"My Development Status Report\", by default you would need to search for \"Development\". If you have partial enabled, you will be able to search for \"dev\" but not \"velopment\".","required":false,"schema":{"type":"boolean","default":false},"index$":20}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0]

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_SEARCH_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_SEARCH_ENTID']
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
  
