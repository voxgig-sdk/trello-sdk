

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


describe('ActionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Action()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.TRELLO_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'action.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"data":{"a":true,"h":"Data","n":"data","r":false,"t":"`$OBJECT`","key$":"data","index$":0},"date":{"a":true,"fo":"date-time","h":"Date","n":"date","r":false,"t":"`$STRING`","key$":"date","index$":1},"display":{"a":true,"h":"Display","n":"display","r":false,"t":"`$OBJECT`","key$":"display","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"idMemberCreator":{"a":true,"h":"Id Member Creator","n":"idMemberCreator","r":false,"t":"`$STRING`","key$":"idMemberCreator","index$":4},"limits":{"a":true,"h":"Limits","n":"limits","r":false,"t":"`$OBJECT`","key$":"limits","index$":5},"memberCreator":{"a":true,"h":"Member Creator","n":"memberCreator","r":false,"t":"`$OBJECT`","key$":"memberCreator","index$":6},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":7}},"id":{"field":"id","name":"id"},"name":"action","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /cards/{id}/actions/comments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/cards/{id}/actions/comments","q":{"$action":"comment","exist":["card_id","text"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"actions"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /actions/{idAction}/reactions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/actions/{idAction}/reactions","q":{"$action":"reaction","exist":["id_action"]},"r":{"param":{"idAction":"id_action"}},"s":[{"lit":"actions"},{"var":"id_action"},{"lit":"reactions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cards/{id}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"commentCard, updateCard:idList","k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":0,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":1}]},"k":"http","m":"GET","o":"/cards/{id}/actions","q":{"exist":["card_id","filter","page"]},"r":{"param":{"id":"card_id"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /members/{id}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"member_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/members/{id}/actions","q":{"exist":["filter","member_id"]},"r":{"param":{"id":"member_id"}},"s":[{"lit":"members"},{"var":"member_id"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /organizations/{id}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"organization_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/organizations/{id}/actions","q":{"exist":["organization_id"]},"r":{"param":{"id":"organization_id"}},"s":[{"lit":"organizations"},{"var":"organization_id"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /boards/{boardId}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"board_id","or":"board_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"field","or":"field","r":false,"t":"`$OBJECT`","index$":1},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"list","k":"query","n":"format","or":"format","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"id_model","or":"id_model","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":50,"k":"query","n":"limit","or":"limit","r":false,"t":"`$NUMBER`","index$":5},{"a":true,"ex":true,"k":"query","n":"member","or":"member","r":false,"t":"`$BOOLEAN`","index$":6},{"a":true,"ex":true,"k":"query","n":"member_creator","or":"member_creator","r":false,"t":"`$BOOLEAN`","index$":7},{"a":true,"ex":"activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username","k":"query","n":"member_creator_field","or":"member_creator_field","r":false,"t":"`$STRING`","index$":8},{"a":true,"ex":"activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username","k":"query","n":"member_field","or":"member_field","r":false,"t":"`$STRING`","index$":9},{"a":true,"ex":0,"k":"query","n":"page","or":"page","r":false,"t":"`$NUMBER`","index$":10},{"a":true,"k":"query","n":"reaction","or":"reaction","r":false,"t":"`$BOOLEAN`","index$":11},{"a":true,"k":"query","n":"since","or":"since","r":false,"t":"`$STRING`","index$":12}]},"k":"http","m":"GET","o":"/boards/{boardId}/actions","q":{"exist":["before","board_id","field","filter","format","id_model","limit","member","member_creator","member_creator_field","member_field","page","reaction","since"]},"r":{"param":{"boardId":"board_id"}},"s":[{"lit":"boards"},{"var":"board_id"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":true,"k":"query","n":"display","or":"display","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"ex":false,"k":"query","n":"entity","or":"entity","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"ex":"all","k":"query","n":"field","or":"field","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":true,"k":"query","n":"member","or":"member","r":false,"t":"`$BOOLEAN`","index$":3},{"a":true,"ex":true,"k":"query","n":"member_creator","or":"member_creator","r":false,"t":"`$BOOLEAN`","index$":4},{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"member_creator_field","or":"member_creator_field","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"avatarHash,fullName,initials,username","k":"query","n":"member_field","or":"member_field","r":false,"t":"`$STRING`","index$":6}]},"k":"http","m":"GET","o":"/actions/{id}","q":{"exist":["display","entity","field","id","member","member_creator","member_creator_field","member_field"]},"r":{},"s":[{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /actions/{id}/{field}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"field","or":"field","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/actions/{id}/{field}","q":{"exist":["field","id"]},"r":{},"s":[{"lit":"actions"},{"var":"id"},{"var":"field"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /lists/{id}/actions","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"list_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/lists/{id}/actions","q":{"exist":["filter","list_id"]},"r":{"param":{"id":"list_id"}},"s":[{"lit":"lists"},{"var":"list_id"},{"lit":"actions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /cards/{id}/actions/{idAction}/comments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/cards/{id}/actions/{idAction}/comments","q":{"$action":"comment","exist":["card_id","id_action"]},"r":{"param":{"id":"card_id","idAction":"id_action"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"actions"},{"var":"id_action"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/actions/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /cards/{id}/actions/{idAction}/comments","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"card_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id_action","or":"id_action","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/cards/{id}/actions/{idAction}/comments","q":{"$action":"comment","exist":["card_id","id_action","text"]},"r":{"param":{"id":"card_id","idAction":"id_action"}},"s":[{"lit":"cards"},{"var":"card_id"},{"lit":"actions"},{"var":"id_action"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /actions/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"text","or":"text","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/actions/{id}","q":{"exist":["id","text"]},"r":{},"s":[{"lit":"actions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PUT /actions/{id}/text","source":"openapi3","version":2},"g":{"params":[{"a":true,"ex":"5abbe4b7ddc1b351ef961414","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"value","or":"value","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/actions/{id}/text","q":{"$action":"text","exist":["id","value"]},"r":{},"s":[{"lit":"actions"},{"var":"id"},{"lit":"text"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.board"],["$.main.kit.entity.card"],["$.main.kit.entity.list"],["$.main.kit.entity.member"],["$.main.kit.entity.organization"],["$.main.kit.entity.card"]]},"key$":"action","name__orig":"action","Name":"Action","name_":"action","name-":"action","NAME":"ACTION","index$":0}, {"active":true,"entity":"action","key$":"BasicActionFlow","kind":"basic","name":"BasicActionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"action_ref01"},"m":{"card_id":"card01","id_action":"id_action01","member_id":"member01","organization_id":"organization01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"action_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"action_ref01","srcdatavar":"action_ref01_data","suffix":"_up0","textfield":"date"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-action_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"action_ref01","srcdatavar":"action_ref01_data","suffix":"_dt0"},"m":{"id":"action01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-action_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"action_ref01","suffix":"_rm0"},"m":{"id":"action01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"organization_id":"organization01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"action_ref01"}}],"index$":5}]}, 'Action', {"POST /cards/{id}/actions/comments":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"text","in":"query","description":"The comment","required":true,"schema":{"type":"string"},"index$":1}]},"POST /actions/{idAction}/reactions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"shortName":{"type":"string","description":"The primary `shortName` of the emoji to add. See [/emoji](#emoji)"},"skinVariation":{"type":"string","description":"The `skinVariation` of the emoji to add. See [/emoji](#emoji)"},"native":{"type":"string","description":"The emoji to add as a native unicode emoji. See [/emoji](#emoji)"},"unified":{"type":"string","description":"The `unified` value of the emoji to add. See [/emoji](#emoji)"}}}}}},"parameters":[{"name":"idAction","in":"path","description":"The ID of the action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /cards/{id}/actions":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"filter","in":"query","description":"A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).","required":false,"schema":{"type":"string","default":"commentCard, updateCard:idList"},"index$":1},{"name":"page","in":"query","description":"The page of results for actions. Each page of results has 50 actions.","required":false,"schema":{"type":"number","maximum":19,"default":0},"index$":2}]},"GET /members/{id}/actions":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or username of the member","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"filter","in":"query","description":"A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).","required":false,"schema":{"type":"string"},"index$":1}]},"GET /organizations/{id}/actions":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID or name of the organization","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"GET /boards/{boardId}/actions":{"protocol":"http","parameters":[{"name":"boardId","in":"path","description":"","required":true,"schema":{"type":"string"},"index$":0},{"name":"fields","in":"query","description":"The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).","required":false,"schema":{"type":"object","properties":{"id":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID","key$":"id"},"idMemberCreator":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID","key$":"idMemberCreator"},"data":{"type":"object","properties":{"text":{"type":"string","example":"Can never go wrong with bowie"},"card":{"type":"object","properties":{"id":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"name":{"type":"string","example":"Bowie"},"idShort":{"type":"integer","example":7},"shortLink":{"type":"string","example":"3CsPkqOF"}}},"board":{"type":"object","properties":{"id":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"name":{"type":"string","example":"Mullets"},"shortLink":{"type":"string","example":"3CsPkqOF"}}},"list":{"type":"object","properties":{"id":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"name":{"type":"string","example":"Amazing"}}}},"key$":"data"},"type":{"type":"string","example":"commentCard","key$":"type"},"date":{"type":"string","format":"date-time","example":"2020-03-09T19:41:51.396Z","key$":"date"},"limits":{"type":"object","properties":{"reactions":{"type":"object","properties":{"perAction":{"type":"object","properties":{}},"uniquePerAction":{"type":"object","properties":{}}}}},"key$":"limits"},"display":{"type":"object","properties":{"translationKey":{"type":"string","example":"action_comment_on_card"},"entities":{"type":"object","properties":{"contextOn":{"type":"object","properties":{}},"card":{"type":"object","properties":{}},"comment":{"type":"object","properties":{}},"memberCreator":{"type":"object","properties":{}}}}},"key$":"display"},"memberCreator":{"type":"object","properties":{"id":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5b02e7f4e1facdc393169f9d","x-ref":"#/components/schemas/TrelloID"},"activityBlocked":{"type":"boolean","example":false},"avatarHash":{"type":"string","example":"db2adf80c2e6c26b76e1f10400eb4c45"},"avatarUrl":{"type":"string","format":"url","example":"https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45"},"fullName":{"type":"string","example":"Bob Loblaw (Trello)"},"idMemberReferrer":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":null,"nullable":true,"x-ref":"#/components/schemas/TrelloID"},"initials":{"type":"string","example":"BL"},"username":{"type":"string","example":"bobloblaw"}},"key$":"memberCreator"}},"x-ref":"#/components/schemas/Action"},"index$":1},{"name":"filter","in":"query","description":"A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).","required":false,"schema":{"type":"string"},"index$":2},{"name":"format","in":"query","description":"The format of the returned Actions. Either list or count.","required":false,"schema":{"type":"string","default":"list"},"index$":3},{"name":"idModels","in":"query","description":"A comma-separated list of idModels. Only actions related to these models will be returned.","required":false,"schema":{"type":"string"},"index$":4},{"name":"limit","in":"query","description":"The limit of the number of responses, between 0 and 1000.","required":false,"schema":{"type":"number","default":50},"index$":5},{"name":"member","in":"query","description":"Whether to return the member object for each action.","required":false,"schema":{"type":"boolean","default":true},"index$":6},{"name":"member_fields","in":"query","description":"The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.","required":false,"schema":{"type":"string","default":"activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"},"index$":7},{"name":"memberCreator","in":"query","description":"Whether to return the memberCreator object for each action.","required":false,"schema":{"type":"boolean","default":true},"index$":8},{"name":"memberCreator_fields","in":"query","description":"The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return","required":false,"schema":{"type":"string","default":"activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username"},"index$":9},{"name":"page","in":"query","description":"The page of results for actions.","required":false,"schema":{"type":"number","default":0},"index$":10},{"name":"reactions","in":"query","description":"Whether to show reactions on comments or not.","required":false,"schema":{"type":"boolean"},"index$":11},{"name":"before","in":"query","description":"A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will be returned.","required":false,"schema":{"type":"string"},"index$":12},{"name":"since","in":"query","description":"A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will be returned.","required":false,"schema":{"type":"string"},"index$":13}]},"GET /actions/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"display","in":"query","description":"","required":false,"schema":{"type":"boolean","default":true},"index$":1},{"name":"entities","in":"query","description":"","required":false,"schema":{"type":"boolean","default":false},"index$":2},{"name":"fields","in":"query","description":"`all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)","required":false,"schema":{"type":"string","default":"all"},"index$":3},{"name":"member","in":"query","description":"","required":false,"schema":{"type":"boolean","default":true},"index$":4},{"name":"member_fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"avatarHash,fullName,initials,username"},"index$":5},{"name":"memberCreator","in":"query","description":"Whether to include the member object for the creator of the action","required":false,"schema":{"type":"boolean","default":true},"index$":6},{"name":"memberCreator_fields","in":"query","description":"`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)","required":false,"schema":{"type":"string","default":"avatarHash,fullName,initials,username"},"index$":7}]},"GET /actions/{id}/{field}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"field","in":"path","description":"An action field","required":true,"schema":{"type":"string","enum":["id","idMemberCreator","data","type","date","limits","display","memberCreator"],"x-ref":"#/components/schemas/ActionFields"},"index$":1}]},"GET /lists/{id}/actions":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the list","required":true,"schema":{"type":"string"},"index$":0},{"name":"filter","in":"query","description":"A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).","required":false,"schema":{"type":"string"},"index$":1}]},"DELETE /cards/{id}/actions/{idAction}/comments":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idAction","in":"path","description":"The ID of the comment action to update","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1}]},"DELETE /actions/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0}]},"PUT /cards/{id}/actions/{idAction}/comments":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Card","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"idAction","in":"path","description":"The ID of the comment action to update","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":1},{"name":"text","in":"query","description":"The new text for the comment","required":true,"schema":{"type":"string"},"index$":2}]},"PUT /actions/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the Action","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"text","in":"query","description":"The new text for the comment","required":true,"schema":{"type":"string"},"index$":1}]},"PUT /actions/{id}/text":{"protocol":"http","parameters":[{"name":"id","in":"path","description":"The ID of the action to update","required":true,"schema":{"type":"string","pattern":"^[0-9a-fA-F]{24}$","example":"5abbe4b7ddc1b351ef961414","x-ref":"#/components/schemas/TrelloID"},"index$":0},{"name":"value","in":"query","description":"The new text for the comment","required":true,"schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const action_ref01_ent = client.Action()
    let action_ref01_data = setup.data.new.action['action_ref01']
    action_ref01_data['card_id'] = setup.idmap['card01']
    action_ref01_data['id_action'] = setup.idmap['id_action01']
    action_ref01_data['member_id'] = setup.idmap['member01']
    action_ref01_data['organization_id'] = setup.idmap['organization01']

    action_ref01_data = (await action_ref01_ent.create(action_ref01_data)).data()
    assert(null != action_ref01_data.id)


    // LIST
    const action_ref01_match: any = {}
    action_ref01_match['organization_id'] = setup.idmap['organization01']

    const action_ref01_list = (await action_ref01_ent.list(action_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(action_ref01_list, { id: action_ref01_data.id })))


    // UPDATE
    const action_ref01_data_up0: any = {}
    action_ref01_data_up0.id = action_ref01_data.id

    const action_ref01_markdef_up0 = { name: 'date', value: 'Mark01-action_ref01_' + setup.now }
    ;(action_ref01_data_up0 as any)[action_ref01_markdef_up0.name] = action_ref01_markdef_up0.value

    const action_ref01_resdata_up0 = (await action_ref01_ent.update(action_ref01_data_up0)).data()
    assert(action_ref01_resdata_up0.id === action_ref01_data_up0.id)

    assert((action_ref01_resdata_up0 as any)[action_ref01_markdef_up0.name] === action_ref01_markdef_up0.value)


    // LOAD
    const action_ref01_match_dt0: any = {}
    action_ref01_match_dt0.id = action_ref01_data.id
    const action_ref01_data_dt0 = (await action_ref01_ent.load(action_ref01_match_dt0)).data()
    assert(action_ref01_data_dt0.id === action_ref01_data.id)


    // REMOVE
    const action_ref01_match_rm0: any = { id: action_ref01_data.id }
    await action_ref01_ent.remove(action_ref01_match_rm0)
  

    // LIST
    const action_ref01_match_rt0: any = {}
    action_ref01_match_rt0['organization_id'] = setup.idmap['organization01']

    const action_ref01_list_rt0 = (await action_ref01_ent.list(action_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(action_ref01_list_rt0, { id: action_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/action/ActionTestData.json')

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
    ['action01','action02','action03','board01','board02','board03','card01','card02','card03','list01','list02','list03','member01','member02','member03','organization01','organization02','organization03','id_action01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_ACTION_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_ACTION_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_ACTION_ENTID']
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
  
