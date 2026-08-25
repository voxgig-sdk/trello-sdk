import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CheckItem, CheckItemLoadMatch, CheckItemUpdateData, CheckItemRemoveMatch } from '../TrelloTypes';
declare class CheckItemEntity extends TrelloEntityBase<CheckItem> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CheckItemEntity): CheckItemEntity;
    load(this: any, reqmatch?: CheckItemLoadMatch, ctrl?: Control): Promise<CheckItemEntity>;
    update(this: any, reqdata?: CheckItemUpdateData, ctrl?: Control): Promise<CheckItemEntity>;
    remove(this: any, reqmatch?: CheckItemRemoveMatch, ctrl?: Control): Promise<CheckItemEntity>;
}
export { CheckItemEntity };
