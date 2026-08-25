
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
  Application,
} from '../TrelloTypes'

// TODO: needs Entity superclass
class ApplicationEntity extends TrelloEntityBase<Application> {

  constructor(client: TrelloSDK, entopts: any) {
    super(client, entopts)
    this.name = 'application'
    this.name_ = 'application'
    this.Name = 'Application'
  }


  make(this: ApplicationEntity) {
    return new ApplicationEntity(this._client, this.entopts())
  }







}


export {
  ApplicationEntity
}
