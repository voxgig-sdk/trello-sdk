
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
  NotificationsChannelSetting,
} from '../TrelloTypes'

// TODO: needs Entity superclass
class NotificationsChannelSettingEntity extends TrelloEntityBase<NotificationsChannelSetting> {

  constructor(client: TrelloSDK, entopts: any) {
    super(client, entopts)
    this.name = 'notifications_channel_setting'
    this.name_ = 'notifications_channel_setting'
    this.Name = 'NotificationsChannelSetting'
  }


  make(this: NotificationsChannelSettingEntity) {
    return new NotificationsChannelSettingEntity(this._client, this.entopts())
  }







}


export {
  NotificationsChannelSettingEntity
}
