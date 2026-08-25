import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Batch, BatchLoadMatch } from '../TrelloTypes';
declare class BatchEntity extends TrelloEntityBase<Batch> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: BatchEntity): BatchEntity;
    load(this: any, reqmatch?: BatchLoadMatch, ctrl?: Control): Promise<BatchEntity>;
}
export { BatchEntity };
