"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsChannelSettingEntity = void 0;
const TrelloEntityBase_1 = require("../TrelloEntityBase");
// TODO: needs Entity superclass
class NotificationsChannelSettingEntity extends TrelloEntityBase_1.TrelloEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'notifications_channel_setting';
        this.name_ = 'notifications_channel_setting';
        this.Name = 'NotificationsChannelSetting';
    }
    make() {
        return new NotificationsChannelSettingEntity(this._client, this.entopts());
    }
}
exports.NotificationsChannelSettingEntity = NotificationsChannelSettingEntity;
//# sourceMappingURL=NotificationsChannelSettingEntity.js.map