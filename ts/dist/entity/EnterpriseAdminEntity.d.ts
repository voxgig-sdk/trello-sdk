import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { EnterpriseAdmin, EnterpriseAdminLoadMatch } from '../TrelloTypes';
declare class EnterpriseAdminEntity extends TrelloEntityBase<EnterpriseAdmin> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterpriseAdminEntity): EnterpriseAdminEntity;
    load(this: any, reqmatch?: EnterpriseAdminLoadMatch, ctrl?: Control): Promise<EnterpriseAdminEntity>;
}
export { EnterpriseAdminEntity };
