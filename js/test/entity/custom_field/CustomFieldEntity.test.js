
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


describe('CustomFieldEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when TRELLO_TEST_LIVE=TRUE.
  afterEach(liveDelay('TRELLO_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = TrelloSDK.test()
    const ent = testsdk.CustomField()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cardFront","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"display","req":false,"type":"`$OBJECT`","index$":1},{"active":true,"name":"display_cardFront","req":false,"short":"Whether this Custom Field should be shown on the front of Cards","type":"`$BOOLEAN`","index$":2},{"active":true,"name":"displaycardFront","req":false,"short":"Whether to display this custom field on the front of cards","type":"`$BOOLEAN`","index$":3},{"active":true,"name":"fieldGroup","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"idModel","op":{"list":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The ID of the model for which the Custom Field is being defined.","type":"`$STRING`","index$":6},{"active":true,"name":"modelType","op":{"list":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The type of model that the Custom Field is being defined on.","type":"`$STRING`","index$":7},{"active":true,"name":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The name of the Custom Field","type":"`$STRING`","index$":8},{"active":true,"name":"options","req":false,"short":"If the type is `checkbox`","type":"`$ARRAY`","index$":9},{"active":true,"name":"pos","op":{"create":{"req":true,"type":"`$ANY`"}},"req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"type","op":{"list":{"req":false,"type":"`$STRING`"}},"req":true,"short":"The type of Custom Field to create.","type":"`$STRING`","index$":11}],"id":{"field":"id","name":"id"},"name":"custom_field","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /customFields/{id}/options","json":"{\"operationId\":\"get-customfields-id-options\",\"parameters\":[{\"description\":\"ID of the customfield.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/customFields/{id}/options","segments":[{"lit":"customFields"},{"var":"id"},{"lit":"options"}],"select":{"$action":"option","exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /customFields","json":"{\"operationId\":\"post-customfields\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"display_cardFront\":{\"default\":true,\"description\":\"Whether this Custom Field should be shown on the front of Cards\",\"type\":\"boolean\"},\"idModel\":{\"description\":\"The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.\",\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"modelType\":{\"description\":\"The type of model that the Custom Field is being defined on. This should always be `board`.\",\"enum\":[\"board\"],\"type\":\"string\"},\"name\":{\"description\":\"The name of the Custom Field\",\"type\":\"string\"},\"options\":{\"description\":\"If the type is `checkbox` \",\"type\":\"string\"},\"pos\":{\"description\":\"\",\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]},\"type\":{\"description\":\"The type of Custom Field to create.\",\"enum\":[\"checkbox\",\"list\",\"number\",\"text\",\"date\"],\"type\":\"string\"}},\"required\":[\"idModel\",\"modelType\",\"name\",\"type\",\"pos\"],\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"display\":{\"properties\":{\"cardFront\":{\"example\":true,\"type\":\"boolean\"},\"name\":{\"example\":\"Priority 🏔\",\"type\":\"string\"},\"options\":{\"items\":{\"properties\":{\"color\":{\"example\":\"red\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idCustomField\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":16384,\"type\":\"number\"},\"value\":{\"properties\":{\"text\":{\"example\":\"High\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"pos\":{\"example\":\"98304,\",\"type\":\"string\"}},\"type\":\"object\"},\"fieldGroup\":{\"example\":\"f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"586e8f681d4fe9b06a928307\",\"type\":\"string\"},\"modelType\":{\"enum\":[\"card\",\"board\",\"member\"],\"example\":\"board\",\"type\":\"string\"},\"type\":{\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/customFields","segments":[{"lit":"customFields"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.display`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"board_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /boards/{id}/customFields","json":"{\"operationId\":\"get-boards-id-customfields\",\"parameters\":[{\"description\":\"The ID of the board\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"items\":{\"properties\":{\"display\":{\"properties\":{\"cardFront\":{\"example\":true,\"type\":\"boolean\"},\"name\":{\"example\":\"Priority 🏔\",\"type\":\"string\"},\"options\":{\"items\":{\"properties\":{\"color\":{\"example\":\"red\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idCustomField\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":16384,\"type\":\"number\"},\"value\":{\"properties\":{\"text\":{\"example\":\"High\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"pos\":{\"example\":\"98304,\",\"type\":\"string\"}},\"type\":\"object\"},\"fieldGroup\":{\"example\":\"f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"586e8f681d4fe9b06a928307\",\"type\":\"string\"},\"modelType\":{\"enum\":[\"card\",\"board\",\"member\"],\"example\":\"board\",\"type\":\"string\"},\"type\":{\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/boards/{id}/customFields","rename":{"param":{"id":"board_id"}},"segments":[{"lit":"boards"},{"var":"board_id"},{"lit":"customFields"}],"select":{"exist":["board_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /customFields/{id}","json":"{\"operationId\":\"get-customfields-id\",\"parameters\":[{\"description\":\"ID of the Custom Field.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"display\":{\"properties\":{\"cardFront\":{\"example\":true,\"type\":\"boolean\"},\"name\":{\"example\":\"Priority 🏔\",\"type\":\"string\"},\"options\":{\"items\":{\"properties\":{\"color\":{\"example\":\"red\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idCustomField\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":16384,\"type\":\"number\"},\"value\":{\"properties\":{\"text\":{\"example\":\"High\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"pos\":{\"example\":\"98304,\",\"type\":\"string\"}},\"type\":\"object\"},\"fieldGroup\":{\"example\":\"f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"586e8f681d4fe9b06a928307\",\"type\":\"string\"},\"modelType\":{\"enum\":[\"card\",\"board\",\"member\"],\"example\":\"board\",\"type\":\"string\"},\"type\":{\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/customFields/{id}","segments":[{"lit":"customFields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.display`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"DELETE /customFields/{id}","json":"{\"operationId\":\"delete-customfields-id\",\"parameters\":[{\"description\":\"ID of the Custom Field.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/customFields/{id}","segments":[{"lit":"customFields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id_card","orig":"id_card","reqd":true,"type":"`$STRING`"},{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id_custom_field","orig":"id_custom_field","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"PUT /cards/{idCard}/customField/{idCustomField}/item","json":"{\"operationId\":\"put-cards-idcard-customfield-idcustomfield-item\",\"parameters\":[{\"description\":\"ID of the card that the Custom Field value should be set/updated for\",\"in\":\"path\",\"name\":\"idCard\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},{\"description\":\"ID of the Custom Field on the card.\",\"in\":\"path\",\"name\":\"idCustomField\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"oneOf\":[{\"properties\":{\"value\":{\"description\":\"An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.\",\"properties\":{\"checked\":{\"type\":\"boolean\"},\"date\":{\"example\":\"2018-03-13T16:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"number\":{\"example\":\"2154\",\"type\":\"string\"},\"text\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},{\"properties\":{\"idValue\":{\"description\":\"The ID of the option for the list type Custom Field\",\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}},\"type\":\"object\"}]}}}},\"responses\":{\"200\":{\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/cards/{idCard}/customField/{idCustomField}/item","rename":{"param":{"idCard":"id_card","idCustomField":"id_custom_field"}},"segments":[{"lit":"cards"},{"var":"id_card"},{"lit":"customField"},{"var":"id_custom_field"},{"lit":"item"}],"select":{"$action":"item","exist":["id_card","id_custom_field"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"5abbe4b7ddc1b351ef961414","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"PUT /customFields/{id}","json":"{\"operationId\":\"put-customfields-id\",\"parameters\":[{\"description\":\"ID of the Custom Field.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"example\":\"5abbe4b7ddc1b351ef961414\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"display/cardFront\":{\"description\":\"Whether to display this custom field on the front of cards\",\"type\":\"boolean\"},\"name\":{\"description\":\"The name of the Custom Field\",\"type\":\"string\"},\"pos\":{\"oneOf\":[{\"enum\":[\"top\",\"bottom\"],\"type\":\"string\"},{\"example\":1293.5,\"format\":\"float\",\"type\":\"number\"}]}},\"type\":\"object\"}}}},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"display\":{\"properties\":{\"cardFront\":{\"example\":true,\"type\":\"boolean\"},\"name\":{\"example\":\"Priority 🏔\",\"type\":\"string\"},\"options\":{\"items\":{\"properties\":{\"color\":{\"example\":\"red\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f1091\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idCustomField\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"pos\":{\"example\":16384,\"type\":\"number\"},\"value\":{\"properties\":{\"text\":{\"example\":\"High\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"},\"pos\":{\"example\":\"98304,\",\"type\":\"string\"}},\"type\":\"object\"},\"fieldGroup\":{\"example\":\"f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955\",\"type\":\"string\"},\"id\":{\"example\":\"5ab10be237846c43015f108e\",\"pattern\":\"^[0-9a-fA-F]{24}$\",\"type\":\"string\"},\"idModel\":{\"example\":\"586e8f681d4fe9b06a928307\",\"type\":\"string\"},\"modelType\":{\"enum\":[\"card\",\"board\",\"member\"],\"example\":\"board\",\"type\":\"string\"},\"type\":{\"example\":\"list\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"security\":[{\"APIKey\":[],\"APIToken\":[]}],\"securitySchemes\":{\"APIKey\":{\"in\":\"query\",\"name\":\"key\",\"type\":\"apiKey\"},\"APIToken\":{\"in\":\"query\",\"name\":\"token\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/customFields/{id}","segments":[{"lit":"customFields"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.display`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["board"],["card","custom_field"]]},"key$":"custom_field","name__orig":"custom_field","Name":"CustomField","name_":"custom_field","name-":"custom-field","NAME":"CUSTOM_FIELD","index$":21}, {"active":true,"entity":"custom_field","key$":"BasicCustomFieldFlow","kind":"basic","name":"BasicCustomFieldFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"custom_field_ref01"},"match":{"board_id":"board01","id_card":"id_card01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"board_id":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"custom_field_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_up0","textfield":"fieldGroup"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"custom_field_ref01","srcdatavar":"custom_field_ref01_data","suffix":"_dt0"},"match":{"id":"custom_field01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-custom_field_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"custom_field_ref01","suffix":"_rm0"},"match":{"id":"custom_field01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"board_id":"board01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"custom_field_ref01"}}],"index$":5}]}, 'CustomField')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const custom_field_ref01_ent = client.CustomField()
    let custom_field_ref01_data = setup.data.new.custom_field['custom_field_ref01']
    custom_field_ref01_data['board_id'] = setup.idmap['board01']
    custom_field_ref01_data['id_card'] = setup.idmap['id_card01']

    custom_field_ref01_data = (await custom_field_ref01_ent.create(custom_field_ref01_data)).data()
    assert(null != custom_field_ref01_data.id)


    // LIST
    const custom_field_ref01_match = {}
    custom_field_ref01_match['board_id'] = setup.idmap['board01']

    const custom_field_ref01_list = (await custom_field_ref01_ent.list(custom_field_ref01_match)).map((e) => e.data())

    assert(!isempty(select(custom_field_ref01_list, { id: custom_field_ref01_data.id })))


    // UPDATE
    const custom_field_ref01_data_up0 = {}
    custom_field_ref01_data_up0.id = custom_field_ref01_data.id

    const custom_field_ref01_markdef_up0 = { name: 'fieldGroup', value: 'Mark01-custom_field_ref01_' + setup.now }
    custom_field_ref01_data_up0 [custom_field_ref01_markdef_up0.name] = custom_field_ref01_markdef_up0.value

    const custom_field_ref01_resdata_up0 = (await custom_field_ref01_ent.update(custom_field_ref01_data_up0)).data()
    assert(custom_field_ref01_resdata_up0.id === custom_field_ref01_data_up0.id)

    assert(custom_field_ref01_resdata_up0[custom_field_ref01_markdef_up0.name] === custom_field_ref01_markdef_up0.value)


    // LOAD
    const custom_field_ref01_match_dt0 = {}
    custom_field_ref01_match_dt0.id = custom_field_ref01_data.id
    const custom_field_ref01_data_dt0 = (await custom_field_ref01_ent.load(custom_field_ref01_match_dt0)).data()
    assert(custom_field_ref01_data_dt0.id === custom_field_ref01_data.id)


    // REMOVE
    const custom_field_ref01_match_rm0 = {}
    custom_field_ref01_match_rm0.id = custom_field_ref01_data.id
    await custom_field_ref01_ent.remove(custom_field_ref01_match_rm0)
  

    // LIST
    const custom_field_ref01_match_rt0 = {}
    custom_field_ref01_match_rt0['board_id'] = setup.idmap['board01']

    const custom_field_ref01_list_rt0 = (await custom_field_ref01_ent.list(custom_field_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(custom_field_ref01_list_rt0, { id: custom_field_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/custom_field/CustomFieldTestData.json')

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
    ['custom_field01','custom_field02','custom_field03','board01','board02','board03','card01','card02','card03','custom_field01','custom_field02','custom_field03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'TRELLO_TEST_CUSTOM_FIELD_ENTID': idmap,
    'TRELLO_TEST_LIVE': 'FALSE',
    'TRELLO_TEST_EXPLAIN': 'FALSE',
    'TRELLO_APIKEY': '',
  })

  idmap = env['TRELLO_TEST_CUSTOM_FIELD_ENTID']

  const live = 'TRUE' === env.TRELLO_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['TRELLO_TEST_CUSTOM_FIELD_ENTID']
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
  
