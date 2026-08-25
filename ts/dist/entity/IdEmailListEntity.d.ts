import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { IdEmailList, IdEmailListUpdateData } from '../TrelloTypes';
declare class IdEmailListEntity extends TrelloEntityBase<IdEmailList> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: IdEmailListEntity): IdEmailListEntity;
    update(this: any, reqdata?: IdEmailListUpdateData, ctrl?: Control): Promise<IdEmailListEntity>;
}
export { IdEmailListEntity };
