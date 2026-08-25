import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { List, ListLoadMatch, ListCreateData, ListUpdateData } from '../TrelloTypes';
declare class ListEntity extends TrelloEntityBase<List> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    load(this: any, reqmatch?: ListLoadMatch, ctrl?: Control): Promise<ListEntity>;
    create(this: any, reqdata?: ListCreateData, ctrl?: Control): Promise<ListEntity>;
    update(this: any, reqdata?: ListUpdateData, ctrl?: Control): Promise<ListEntity>;
}
export { ListEntity };
