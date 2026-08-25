import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { TrelloList, TrelloListLoadMatch, TrelloListListMatch, TrelloListCreateData } from '../TrelloTypes';
declare class TrelloListEntity extends TrelloEntityBase<TrelloList> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: TrelloListEntity): TrelloListEntity;
    load(this: any, reqmatch?: TrelloListLoadMatch, ctrl?: Control): Promise<TrelloListEntity>;
    list(this: any, reqmatch?: TrelloListListMatch, ctrl?: Control): Promise<TrelloListEntity[]>;
    create(this: any, reqdata?: TrelloListCreateData, ctrl?: Control): Promise<TrelloListEntity>;
}
export { TrelloListEntity };
