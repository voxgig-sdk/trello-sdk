
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


describe('CustomStickerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomSticker()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'custom_sticker.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set TRELLO_TEST_CUSTOM_STICKER_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_sticker_ref01_ent = client.CustomSticker()
    let custom_sticker_ref01_data = setup.data.new.custom_sticker['custom_sticker_ref01']
    custom_sticker_ref01_data['member_id'] = setup.idmap['member01']

    custom_sticker_ref01_data = (await custom_sticker_ref01_ent.create(custom_sticker_ref01_data)).data()
    assert(null != custom_sticker_ref01_data.id)


    // LIST
    const custom_sticker_ref01_match: any = {}
    custom_sticker_ref01_match['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(custom_sticker_ref01_list, { id: custom_sticker_ref01_data.id })))


    // LOAD
    const custom_sticker_ref01_match_dt0: any = {}
    custom_sticker_ref01_match_dt0.id = custom_sticker_ref01_data.id
    const custom_sticker_ref01_data_dt0 = (await custom_sticker_ref01_ent.load(custom_sticker_ref01_match_dt0)).data()
    assert(custom_sticker_ref01_data_dt0.id === custom_sticker_ref01_data.id)


    // REMOVE
    const custom_sticker_ref01_match_rm0: any = { id: custom_sticker_ref01_data.id }
    await custom_sticker_ref01_ent.remove(custom_sticker_ref01_match_rm0)
  

    // LIST
    const custom_sticker_ref01_match_rt0: any = {}
    custom_sticker_ref01_match_rt0['member_id'] = setup.idmap['member01']

    const custom_sticker_ref01_list_rt0 = (await custom_sticker_ref01_ent.list(custom_sticker_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(custom_sticker_ref01_list_rt0, { id: custom_sticker_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/custom_sticker/CustomStickerTestData.json')

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
    ['custom_sticker01','custom_sticker02','custom_sticker03','member01','member02','member03'],
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
  const idmapEnvVal = process.env['TRELLO_TEST_CUSTOM_STICKER_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_STICKER_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': 'NONE',
  })

  idmap = env['TRELLO_TEST_CUSTOM_STICKER_ENTID']

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
  
