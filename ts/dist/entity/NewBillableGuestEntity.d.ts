import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { NewBillableGuest, NewBillableGuestLoadMatch } from '../TrelloTypes';
declare class NewBillableGuestEntity extends TrelloEntityBase<NewBillableGuest> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: NewBillableGuestEntity): NewBillableGuestEntity;
    load(this: any, reqmatch?: NewBillableGuestLoadMatch, ctrl?: Control): Promise<NewBillableGuestEntity>;
}
export { NewBillableGuestEntity };
