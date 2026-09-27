import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Enterprise, EnterpriseLoadMatch, EnterpriseCreateData, EnterpriseUpdateData } from '../TrelloTypes';
declare class EnterpriseEntity extends TrelloEntityBase<Enterprise> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterpriseEntity): EnterpriseEntity;
    load(this: any, reqmatch?: EnterpriseLoadMatch, ctrl?: Control): Promise<EnterpriseEntity>;
    create(this: any, reqdata?: EnterpriseCreateData, ctrl?: Control): Promise<EnterpriseEntity>;
    update(this: any, reqdata?: EnterpriseUpdateData, ctrl?: Control): Promise<EnterpriseEntity>;
}
export { EnterpriseEntity };
