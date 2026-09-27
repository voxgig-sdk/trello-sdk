
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


describe('SavedSearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.SavedSearch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":1},"pos":{"a":true,"h":"Pos","n":"pos","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"pos","index$":2},"query":{"a":true,"h":"Query","n":"query","r":false,"t":"`$STRING`","key$":"query","index$":3}},"id":{"field":"id","name":"id"},"name":"saved_search","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /members/{id}/savedSearches","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"pos","or":"pos","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"POST","o":"/members/{id}/savedSearches","q":{"exist":["member_id","name","pos","query"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"savedSearches"}],"t":{"req":"`reqdata`","res":"`body.pos`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /members/{id}/savedSearches","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/savedSearches","q":{"exist":["member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"savedSearches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /members/{id}/savedSearches/{idSearch}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id_search","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/members/{id}/savedSearches/{idSearch}","q":{"exist":["id","member_id"]},"r":{"param":{"id":"member_id","idSearch":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"savedSearches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.pos`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /members/{id}/savedSearches/{idSearch}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id_search","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/members/{id}/savedSearches/{idSearch}","q":{"exist":["id","member_id"]},"r":{"param":{"id":"member_id","idSearch":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"savedSearches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /members/{id}/savedSearches/{idSearch}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id_search","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"pos","or":"pos","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/members/{id}/savedSearches/{idSearch}","q":{"exist":["id","member_id","name","pos","query"]},"r":{"param":{"id":"member_id","idSearch":"id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"savedSearches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.pos`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.member"]]},"key$":"saved_search","name__orig":"saved_search","Name":"SavedSearch","name_":"saved_search","name-":"saved-search","NAME":"SAVED_SEARCH","index$":55}, {"active":true,"entity":"saved_search","key$":"BasicSavedSearchFlow","kind":"basic","name":"BasicSavedSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"saved_search_ref01"},"m":{"member_id":"member01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"saved_search_ref01"}}],"index$":1},{"a":true,"d":{"member_id":"member01"},"i":{"ref":"saved_search_ref01","srcdatavar":"saved_search_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-saved_search_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"saved_search_ref01","srcdatavar":"saved_search_ref01_data","suffix":"_dt0"},"m":{"id":"saved_search01","member_id":"member01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-saved_search_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"saved_search_ref01","suffix":"_rm0"},"m":{"id":"saved_search01","member_id":"member01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"member_id":"member01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"saved_search_ref01"}}],"index$":5}]}, 'SavedSearch', {"POST /members/{id}/savedSearches":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"name","in":"query","description":"The name for the saved search","required":true,"schema":{"type":"string"},"index$":1},{"name":"query","in":"query","description":"The search query","required":true,"schema":{"type":"string"},"index$":2},{"name":"pos","in":"query","description":"The position of the saved search. `top`, `bottom`, or a positive float.","required":true,"schema":{"oneOf":[{"type":"string","enum":["top","bottom"]},{"type":"number","format":"float","example":1293.5}],"x-ref":"#/components/schemas/posStringOrNumber"},"index$":3}]},"GET /members/{id}/savedSearches":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /members/{id}/savedSearches/{idSearch}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string"},"index$":0},{"name":"idSearch","in":"path","description":"The ID of the saved search to delete","required":true,"schema":{"type":"string"},"index$":1}]},"DELETE /members/{id}/savedSearches/{idSearch}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string"},"index$":0},{"name":"idSearch","in":"path","description":"The ID of the saved search to delete","required":true,"schema":{"type":"string"},"index$":1}]},"PUT /members/{id}/savedSearches/{idSearch}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string"},"index$":0},{"name":"idSearch","in":"path","description":"The ID of the saved search to delete","required":true,"schema":{"type":"string"},"index$":1},{"name":"name","in":"query","description":"The new name for the saved search","required":false,"schema":{"type":"string"},"index$":2},{"name":"query","in":"query","description":"The new search query","required":false,"schema":{"type":"string"},"index$":3},{"name":"pos","in":"query","description":"New position for saves search. `top`, `bottom`, or a positive float.","required":false,"schema":{"type":"string"},"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const saved_search_ref01_ent = client.SavedSearch()
    let saved_search_ref01_data = setup.data.new.saved_search['saved_search_ref01']
    saved_search_ref01_data['member_id'] = setup.idmap['member01']

    saved_search_ref01_data = (await saved_search_ref01_ent.create(saved_search_ref01_data)).data()
    assert(null != saved_search_ref01_data.id)


    // LIST
    const saved_search_ref01_match = {}
    saved_search_ref01_match['member_id'] = setup.idmap['member01']

    const saved_search_ref01_list = (await saved_search_ref01_ent.list(saved_search_ref01_match)).map((e) => e.data())

    assert(!isempty(select(saved_search_ref01_list, { id: saved_search_ref01_data.id })))


    // UPDATE
    const saved_search_ref01_data_up0 = {}
    saved_search_ref01_data_up0.id = saved_search_ref01_data.id
    saved_search_ref01_data_up0 ['member_id'] = setup.idmap['member_id']

    const saved_search_ref01_markdef_up0 = { name: 'name', value: 'Mark01-saved_search_ref01_' + setup.now }
    saved_search_ref01_data_up0 [saved_search_ref01_markdef_up0.name] = saved_search_ref01_markdef_up0.value

    const saved_search_ref01_resdata_up0 = (await saved_search_ref01_ent.update(saved_search_ref01_data_up0)).data()
    assert(saved_search_ref01_resdata_up0.id === saved_search_ref01_data_up0.id)

    assert(saved_search_ref01_resdata_up0[saved_search_ref01_markdef_up0.name] === saved_search_ref01_markdef_up0.value)


    // LOAD
    const saved_search_ref01_match_dt0 = {}
    saved_search_ref01_match_dt0.id = saved_search_ref01_data.id
    const saved_search_ref01_data_dt0 = (await saved_search_ref01_ent.load(saved_search_ref01_match_dt0)).data()
    assert(saved_search_ref01_data_dt0.id === saved_search_ref01_data.id)


    // REMOVE
    const saved_search_ref01_match_rm0 = {}
    saved_search_ref01_match_rm0.id = saved_search_ref01_data.id
    await saved_search_ref01_ent.remove(saved_search_ref01_match_rm0)
  

    // LIST
    const saved_search_ref01_match_rt0 = {}
    saved_search_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const saved_search_ref01_list_rt0 = (await saved_search_ref01_ent.list(saved_search_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(saved_search_ref01_list_rt0, { id: saved_search_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/saved_search/SavedSearchTestData.json')

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
    ['saved_search01','saved_search02','saved_search03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_SAVED_SEARCH_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_SAVED_SEARCH_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_SAVED_SEARCH_ENTID']
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
  
