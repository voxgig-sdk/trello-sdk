import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Admin, AdminUpdateData, AdminRemoveMatch } from '../TrelloTypes';
declare class AdminEntity extends TrelloEntityBase<Admin> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: AdminEntity): AdminEntity;
    update(this: any, reqdata?: AdminUpdateData, ctrl?: Control): Promise<AdminEntity>;
    remove(this: any, reqmatch?: AdminRemoveMatch, ctrl?: Control): Promise<AdminEntity>;
}
export { AdminEntity };
