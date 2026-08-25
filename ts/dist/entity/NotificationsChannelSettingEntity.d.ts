import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { NotificationsChannelSetting } from '../TrelloTypes';
declare class NotificationsChannelSettingEntity extends TrelloEntityBase<NotificationsChannelSetting> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NotificationsChannelSettingEntity): NotificationsChannelSettingEntity;
}
export { NotificationsChannelSettingEntity };
