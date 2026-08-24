-- Trello SDK exists test

local sdk = require("trello_sdk")

describe("TrelloSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
