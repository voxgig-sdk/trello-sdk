
const { inspect } = require('node:util')

const { TrelloEntityBase } = require('../TrelloEntityBase')


// TODO: needs Entity superclass
class NotificationsChannelSettingEntity extends TrelloEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'notifications_channel_setting'
    this.name_ = 'notifications_channel_setting'
    this.Name = 'NotificationsChannelSetting'
  }


  make() {
    return new NotificationsChannelSettingEntity(this._client, this.entopts())
  }







}


module.exports = {
  NotificationsChannelSettingEntity
}
