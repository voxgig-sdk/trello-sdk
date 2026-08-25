import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CustomFieldItem, CustomFieldItemListMatch } from '../TrelloTypes';
declare class CustomFieldItemEntity extends TrelloEntityBase<CustomFieldItem> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CustomFieldItemEntity): CustomFieldItemEntity;
    list(this: any, reqmatch?: CustomFieldItemListMatch, ctrl?: Control): Promise<CustomFieldItemEntity[]>;
}
export { CustomFieldItemEntity };
