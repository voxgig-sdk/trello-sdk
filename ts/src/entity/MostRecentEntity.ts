
import { inspect } from 'node:util'

import { TrelloEntityBase } from '../TrelloEntityBase'

import type {
  TrelloSDK,
} from '../TrelloSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  MostRecent,
} from '../TrelloTypes'

// TODO: needs Entity superclass
class MostRecentEntity extends TrelloEntityBase<MostRecent> {

  constructor(client: TrelloSDK, entopts: any) {
    super(client, entopts)
    this.name = 'most_recent'
    this.name_ = 'most_recent'
    this.Name = 'MostRecent'
  }


  make(this: MostRecentEntity) {
    return new MostRecentEntity(this._client, this.entopts())
  }







}


export {
  MostRecentEntity
}
