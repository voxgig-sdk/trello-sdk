import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { NotificationList, NotificationListLoadMatch } from '../TrelloTypes';
declare class NotificationListEntity extends TrelloEntityBase<NotificationList> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NotificationListEntity): NotificationListEntity;
    load(this: any, reqmatch?: NotificationListLoadMatch, ctrl?: Control): Promise<NotificationListEntity>;
}
export { NotificationListEntity };
