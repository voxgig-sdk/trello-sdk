import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { NotificationMemberCreator, NotificationMemberCreatorLoadMatch } from '../TrelloTypes';
declare class NotificationMemberCreatorEntity extends TrelloEntityBase<NotificationMemberCreator> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NotificationMemberCreatorEntity): NotificationMemberCreatorEntity;
    load(this: any, reqmatch?: NotificationMemberCreatorLoadMatch, ctrl?: Control): Promise<NotificationMemberCreatorEntity>;
}
export { NotificationMemberCreatorEntity };
