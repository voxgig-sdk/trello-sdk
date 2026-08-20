
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { TrelloSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await TrelloSDK.test()
    equal(null !== testsdk, true)
  })

})
