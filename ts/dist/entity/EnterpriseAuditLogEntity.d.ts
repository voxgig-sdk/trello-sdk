import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { EnterpriseAuditLog, EnterpriseAuditLogListMatch } from '../TrelloTypes';
declare class EnterpriseAuditLogEntity extends TrelloEntityBase<EnterpriseAuditLog> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterpriseAuditLogEntity): EnterpriseAuditLogEntity;
    list(this: any, reqmatch?: EnterpriseAuditLogListMatch, ctrl?: Control): Promise<EnterpriseAuditLogEntity[]>;
}
export { EnterpriseAuditLogEntity };
