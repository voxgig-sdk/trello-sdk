
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


describe('WebhookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.Webhook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"active","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"url","name":"callbackURL","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"consecutiveFailures","req":false,"type":"`$NUMBER`","index$":2},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"date","name":"firstConsecutiveFailDate","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"idModel","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"webhook","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"callback_url","orig":"callback_url","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"description","orig":"description","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_model","orig":"id_model","reqd":true,"type":"`$STRING`","index$":3}]},"contract":{"id":"POST /webhooks/","json":"{\"operationId\":\"post-webhooks\",\"parameters\":[{\"description\":\"A string with a length from `0` to `16384`.\",\"in\":\"query\",\"name\":\"description\",\"required\":false,\"schema\":{\"maxLength\":16384,\"minLength\":0,\"type\":\"string\"}},{\"description\":\"A valid URL that is reachable with a `HEAD` and `POST` request.\",\"in\":\"query\",\"name\":\"callbackURL\",\"required\":true,\"schema\":{\"format\":\"url\",\"type\":\"string\"}},{\"description\":\"ID of the model to be monitored\",\"in\":\"query\",\"name\":\"idModel\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Determines whether the webhook is active and sending `POST` requests.\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/webhooks/","segments":[{"lit":"webhooks"}],"select":{"exist":["active","callback_url","description","id_model"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"token_id","orig":"token","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"callback_url","orig":"callback_url","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"description","orig":"description","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_model","orig":"id_model","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"POST /tokens/{token}/webhooks","json":"{\"operationId\":\"post-tokens-token-webhooks\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"A description to be displayed when retrieving information about the webhook.\",\"in\":\"query\",\"name\":\"description\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The URL that the webhook should POST information to.\",\"in\":\"query\",\"name\":\"callbackURL\",\"required\":true,\"schema\":{\"format\":\"url\",\"type\":\"string\"}},{\"description\":\"ID of the object to create a webhook on.\",\"in\":\"query\",\"name\":\"idModel\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/tokens/{token}/webhooks","rename":{"param":{"token":"token_id"}},"segments":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"}],"select":{"exist":["callback_url","description","id_model","token_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"token_id","orig":"token","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /tokens/{token}/webhooks","json":"{\"operationId\":\"get-tokens-token-webhooks\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/tokens/{token}/webhooks","rename":{"param":{"token":"token_id"}},"segments":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"}],"select":{"exist":["token_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"field","orig":"field","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /webhooks/{id}/{field}","json":"{\"operationId\":\"webhooksidfield\",\"parameters\":[{\"description\":\"ID of the webhook.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`\",\"in\":\"path\",\"name\":\"field\",\"required\":true,\"schema\":{\"enum\":[\"active\",\"callbackURL\",\"description\",\"idModel\",\"consecutiveFailures\",\"firstConsecutiveFailDate\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks/{id}/{field}","segments":[{"lit":"webhooks"},{"var":"id"},{"var":"field"}],"select":{"exist":["field","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_webhook","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"token_id","orig":"token","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /tokens/{token}/webhooks/{idWebhook}","json":"{\"operationId\":\"get-tokens-token-webhooks-idwebhook\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"ID of the [Webhooks](ref:webhooks) to retrieve.\",\"in\":\"path\",\"name\":\"idWebhook\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/tokens/{token}/webhooks/{idWebhook}","rename":{"param":{"idWebhook":"id","token":"token_id"}},"segments":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["id","token_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /webhooks/{id}","json":"{\"operationId\":\"get-webhooks-id\",\"parameters\":[{\"description\":\"ID of the webhook to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks/{id}","segments":[{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_webhook","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"token_id","orig":"token","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /tokens/{token}/webhooks/{idWebhook}","json":"{\"operationId\":\"delete-tokens-token-webhooks-idwebhook\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"ID of the [Webhooks](ref:webhooks) to retrieve.\",\"in\":\"path\",\"name\":\"idWebhook\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/tokens/{token}/webhooks/{idWebhook}","rename":{"param":{"idWebhook":"id","token":"token_id"}},"segments":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["id","token_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /webhooks/{id}","json":"{\"operationId\":\"delete-webhooks-id\",\"parameters\":[{\"description\":\"ID of the webhook to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/webhooks/{id}","segments":[{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"active","orig":"active","reqd":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"kind":"query","name":"callback_url","orig":"callback_url","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"description","orig":"description","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_model","orig":"id_model","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"PUT /webhooks/{id}","json":"{\"operationId\":\"put-webhooks-id\",\"parameters\":[{\"description\":\"ID of the webhook to retrieve.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"A string with a length from `0` to `16384`.\",\"in\":\"query\",\"name\":\"description\",\"required\":false,\"schema\":{\"maxLength\":16384,\"minLength\":0,\"type\":\"string\"}},{\"description\":\"A valid URL that is reachable with a `HEAD` and `POST` request.\",\"in\":\"query\",\"name\":\"callbackURL\",\"required\":false,\"schema\":{\"format\":\"url\",\"type\":\"string\"}},{\"description\":\"ID of the model to be monitored\",\"in\":\"query\",\"name\":\"idModel\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"Determines whether the webhook is active and sending `POST` requests.\",\"in\":\"query\",\"name\":\"active\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"callbackURL\":{\"example\":\"https://mywebhookurl.com/?type=board\",\"format\":\"url\",\"type\":\"string\"},\"consecutiveFailures\":{\"example\":0,\"type\":\"number\"},\"description\":{\"example\":\"Board Webhook\",\"type\":\"string\"},\"firstConsecutiveFailDate\":{\"example\":null,\"format\":\"date\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"example\":\"58dd6dcaf8b86744d3cb4cde\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"59cd149051aa57a706962996\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/webhooks/{id}","segments":[{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["active","callback_url","description","id","id_model"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id_webhook","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"token_id","orig":"token","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"callback_url","orig":"callback_url","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"description","orig":"description","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"query","name":"id_model","orig":"id_model","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"PUT /tokens/{token}/webhooks/{idWebhook}","json":"{\"operationId\":\"tokenstokenwebhooks-1\",\"parameters\":[{\"description\":\"\",\"in\":\"path\",\"name\":\"token\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"ID of the [Webhooks](ref:webhooks) to retrieve.\",\"in\":\"path\",\"name\":\"idWebhook\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"A description to be displayed when retrieving information about the webhook.\",\"in\":\"query\",\"name\":\"description\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"The URL that the webhook should `POST` information to.\",\"in\":\"query\",\"name\":\"callbackURL\",\"required\":false,\"schema\":{\"format\":\"url\",\"type\":\"string\"}},{\"description\":\"ID of the object that the webhook is on.\",\"in\":\"query\",\"name\":\"idModel\",\"required\":false,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/tokens/{token}/webhooks/{idWebhook}","rename":{"param":{"idWebhook":"id","token":"token_id"}},"segments":[{"lit":"tokens"},{"var":"token_id"},{"lit":"webhooks"},{"var":"id"}],"select":{"exist":["callback_url","description","id","id_model","token_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["token"]]},"key$":"webhook","name__orig":"webhook","Name":"Webhook","name_":"webhook","name-":"webhook","NAME":"WEBHOOK","index$":69}, {"active":true,"entity":"webhook","key$":"BasicWebhookFlow","kind":"basic","name":"BasicWebhookFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhook_ref01"},"match":{"token_id":"token01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"token_id":"token01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"webhook_ref01"}}],"index$":1},{"active":true,"data":{"token_id":"token01"},"input":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_up0","textfield":"callbackURL"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"webhook_ref01","srcdatavar":"webhook_ref01_data","suffix":"_dt0"},"match":{"id":"webhook01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"webhook_ref01","suffix":"_rm0"},"match":{"id":"webhook01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"token_id":"token01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"webhook_ref01"}}],"index$":5}]}, 'Webhook')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_ref01_ent = client.Webhook()
    let webhook_ref01_data = setup.data.new.webhook['webhook_ref01']
    webhook_ref01_data['token_id'] = setup.idmap['token01']

    webhook_ref01_data = (await webhook_ref01_ent.create(webhook_ref01_data)).data()
    assert(null != webhook_ref01_data.id)


    // LIST
    const webhook_ref01_match = {}
    webhook_ref01_match['token_id'] = setup.idmap['token01']

    const webhook_ref01_list = (await webhook_ref01_ent.list(webhook_ref01_match)).map((e) => e.data())

    assert(!isempty(select(webhook_ref01_list, { id: webhook_ref01_data.id })))


    // UPDATE
    const webhook_ref01_data_up0 = {}
    webhook_ref01_data_up0.id = webhook_ref01_data.id
    webhook_ref01_data_up0 ['token_id'] = setup.idmap['token_id']

    const webhook_ref01_markdef_up0 = { name: 'callbackURL', value: 'Mark01-webhook_ref01_' + setup.now }
    webhook_ref01_data_up0 [webhook_ref01_markdef_up0.name] = webhook_ref01_markdef_up0.value

    const webhook_ref01_resdata_up0 = (await webhook_ref01_ent.update(webhook_ref01_data_up0)).data()
    assert(webhook_ref01_resdata_up0.id === webhook_ref01_data_up0.id)

    assert(webhook_ref01_resdata_up0[webhook_ref01_markdef_up0.name] === webhook_ref01_markdef_up0.value)


    // LOAD
    const webhook_ref01_match_dt0 = {}
    webhook_ref01_match_dt0.id = webhook_ref01_data.id
    const webhook_ref01_data_dt0 = (await webhook_ref01_ent.load(webhook_ref01_match_dt0)).data()
    assert(webhook_ref01_data_dt0.id === webhook_ref01_data.id)


    // REMOVE
    const webhook_ref01_match_rm0 = {}
    webhook_ref01_match_rm0.id = webhook_ref01_data.id
    await webhook_ref01_ent.remove(webhook_ref01_match_rm0)
  

    // LIST
    const webhook_ref01_match_rt0 = {}
    webhook_ref01_match_rt0['token_id'] = setup.idmap['token01']

    const webhook_ref01_list_rt0 = (await webhook_ref01_ent.list(webhook_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(webhook_ref01_list_rt0, { id: webhook_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/webhook/WebhookTestData.json')

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
    ['webhook01','webhook02','webhook03','token01','token02','token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_WEBHOOK_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_WEBHOOK_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_WEBHOOK_ENTID']
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
  
