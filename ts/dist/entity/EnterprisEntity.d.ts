import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Enterpris, EnterprisLoadMatch, EnterprisCreateData, EnterprisUpdateData } from '../TrelloTypes';
declare class EnterprisEntity extends TrelloEntityBase<Enterpris> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterprisEntity): EnterprisEntity;
    load(this: any, reqmatch?: EnterprisLoadMatch, ctrl?: Control): Promise<EnterprisEntity>;
    create(this: any, reqdata?: EnterprisCreateData, ctrl?: Control): Promise<EnterprisEntity>;
    update(this: any, reqdata?: EnterprisUpdateData, ctrl?: Control): Promise<EnterprisEntity>;
}
export { EnterprisEntity };
