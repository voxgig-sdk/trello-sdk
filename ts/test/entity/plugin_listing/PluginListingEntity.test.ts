

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


describe('PluginListingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.PluginListing()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'plugin_listing.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description to show for the given locale","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"locale":{"a":true,"h":"Locale","n":"locale","r":false,"sh":"The locale that this listing should be displayed for.","t":"`$STRING`","key$":"locale","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name to use for the given locale.","t":"`$STRING`","key$":"name","index$":3},"overview":{"a":true,"h":"Overview","n":"overview","r":false,"sh":"The overview to show for the given locale.","t":"`$STRING`","key$":"overview","index$":4}},"id":{"field":"id","name":"id"},"name":"plugin_listing","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /plugins/{idPlugin}/listing","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_plugin","or":"id_plugin","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/plugins/{idPlugin}/listing","q":{"exist":["id_plugin"]},"r":{"param":{"idPlugin":"id_plugin"}},"s":[{"lit":"plugins"},{"var":"id_plugin"},{"lit":"listing"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /plugins/{idPlugin}/listings/{idListing}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id_listing","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_plugin","or":"id_plugin","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/plugins/{idPlugin}/listings/{idListing}","q":{"exist":["id","id_plugin"]},"r":{"param":{"idListing":"id","idPlugin":"id_plugin"}},"s":[{"lit":"plugins"},{"var":"id_plugin"},{"lit":"listings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.plugin"]]},"key$":"plugin_listing","name__orig":"plugin_listing","Name":"PluginListing","name_":"plugin_listing","name-":"plugin-listing","NAME":"PLUGIN_LISTING","index$":52}, {"active":true,"entity":"plugin_listing","key$":"BasicPluginListingFlow","kind":"basic","name":"BasicPluginListingFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"plugin_listing_ref01"},"m":{"id_plugin":"id_plugin01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{"id_plugin":"id_plugin01"},"i":{"ref":"plugin_listing_ref01","srcdatavar":"plugin_listing_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-plugin_listing_ref01"}}],"v":[],"index$":1}]}, 'PluginListing', {"POST /plugins/{idPlugin}/listing":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","description":"The description to show for the given locale","key$":"description"},"locale":{"type":"string","description":"The locale that this listing should be displayed for.","key$":"locale"},"overview":{"type":"string","description":"The overview to show for the given locale.","key$":"overview"},"name":{"type":"string","description":"The name to use for the given locale.","key$":"name"}},"index$":1}}}},"parameters":[{"name":"idPlugin","in":"path","description":"The ID of the Power-Up for which you are creating a new listing.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /plugins/{idPlugin}/listings/{idListing}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"description":{"type":"string","description":"The description to show for the given locale","key$":"description"},"locale":{"type":"string","description":"The locale that this listing should be displayed for.","key$":"locale"},"overview":{"type":"string","description":"The overview to show for the given locale.","key$":"overview"},"name":{"type":"string","description":"The name to use for the given locale.","key$":"name"}},"index$":1}}}},"parameters":[{"name":"idPlugin","in":"path","description":"The ID of the Power-Up whose listing is being updated.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idListing","in":"path","description":"The ID of the existing listing for the Power-Up that is being updated.","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const plugin_listing_ref01_ent = client.PluginListing()
    let plugin_listing_ref01_data = setup.data.new.plugin_listing['plugin_listing_ref01']
    plugin_listing_ref01_data['id_plugin'] = setup.idmap['id_plugin01']

    plugin_listing_ref01_data = (await plugin_listing_ref01_ent.create(plugin_listing_ref01_data)).data()
    assert(null != plugin_listing_ref01_data.id)


    // UPDATE
    const plugin_listing_ref01_data_up0: any = {}
    plugin_listing_ref01_data_up0.id = plugin_listing_ref01_data.id
    plugin_listing_ref01_data_up0 ['id_plugin'] = setup.idmap['id_plugin']

    const plugin_listing_ref01_markdef_up0 = { name: 'description', value: 'Mark01-plugin_listing_ref01_' + setup.now }
    ;(plugin_listing_ref01_data_up0 as any)[plugin_listing_ref01_markdef_up0.name] = plugin_listing_ref01_markdef_up0.value

    const plugin_listing_ref01_resdata_up0 = (await plugin_listing_ref01_ent.update(plugin_listing_ref01_data_up0)).data()
    assert(plugin_listing_ref01_resdata_up0.id === plugin_listing_ref01_data_up0.id)

    assert((plugin_listing_ref01_resdata_up0 as any)[plugin_listing_ref01_markdef_up0.name] === plugin_listing_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/plugin_listing/PluginListingTestData.json')

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
    ['plugin_listing01','plugin_listing02','plugin_listing03','plugin01','plugin02','plugin03','id_plugin01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_PLUGIN_LISTING_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_PLUGIN_LISTING_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_PLUGIN_LISTING_ENTID']
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
  
