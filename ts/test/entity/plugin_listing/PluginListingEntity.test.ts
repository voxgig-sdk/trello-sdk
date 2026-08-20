
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
      if (maybeSkipControl(t, 'entityOp', 'plugin_listing.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set TRELLO_TEST_PLUGIN_LISTING_ENTID JSON to run live')
      return
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
    ['plugin_listing01','plugin_listing02','plugin_listing03','plugin01','plugin02','plugin03'],
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
  const idmapEnvVal = process.env['TRELLO_TEST_PLUGIN_LISTING_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'TRELLO_TEST_PLUGIN_LISTING_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_PLUGIN_LISTING_ENTID']

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
  
