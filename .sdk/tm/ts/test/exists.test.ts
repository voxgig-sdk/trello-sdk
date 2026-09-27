
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TrelloSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = TrelloSDK.test()
    equal(testsdk instanceof TrelloSDK, true,
      'TrelloSDK.test() must return a client synchronously')
  })

})
