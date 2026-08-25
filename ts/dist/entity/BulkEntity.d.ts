import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Bulk, BulkLoadMatch, BulkUpdateData } from '../TrelloTypes';
declare class BulkEntity extends TrelloEntityBase<Bulk> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: BulkEntity): BulkEntity;
    load(this: any, reqmatch?: BulkLoadMatch, ctrl?: Control): Promise<BulkEntity>;
    update(this: any, reqdata?: BulkUpdateData, ctrl?: Control): Promise<BulkEntity>;
}
export { BulkEntity };
