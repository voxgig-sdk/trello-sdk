import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Notification, NotificationLoadMatch, NotificationListMatch, NotificationUpdateData } from '../TrelloTypes';
declare class NotificationEntity extends TrelloEntityBase<Notification> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NotificationEntity): NotificationEntity;
    load(this: any, reqmatch?: NotificationLoadMatch, ctrl?: Control): Promise<NotificationEntity>;
    list(this: any, reqmatch?: NotificationListMatch, ctrl?: Control): Promise<NotificationEntity[]>;
    update(this: any, reqdata?: NotificationUpdateData, ctrl?: Control): Promise<NotificationEntity>;
}
export { NotificationEntity };
