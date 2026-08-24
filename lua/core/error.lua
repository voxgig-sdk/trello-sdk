-- Trello SDK error

local TrelloError = {}
TrelloError.__index = TrelloError


function TrelloError.new(code, msg, ctx)
  local self = setmetatable({}, TrelloError)
  self.is_sdk_error = true
  self.sdk = "Trello"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function TrelloError:error()
  return self.msg
end


function TrelloError:__tostring()
  return self.msg
end


return TrelloError
