import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { NotificationChannelSetting, NotificationChannelSettingLoadMatch, NotificationChannelSettingListMatch, NotificationChannelSettingUpdateData } from '../TrelloTypes';
declare class NotificationChannelSettingEntity extends TrelloEntityBase<NotificationChannelSetting> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NotificationChannelSettingEntity): NotificationChannelSettingEntity;
    load(this: any, reqmatch?: NotificationChannelSettingLoadMatch, ctrl?: Control): Promise<NotificationChannelSettingEntity>;
    list(this: any, reqmatch?: NotificationChannelSettingListMatch, ctrl?: Control): Promise<NotificationChannelSettingEntity[]>;
    update(this: any, reqdata?: NotificationChannelSettingUpdateData, ctrl?: Control): Promise<NotificationChannelSettingEntity>;
}
export { NotificationChannelSettingEntity };
