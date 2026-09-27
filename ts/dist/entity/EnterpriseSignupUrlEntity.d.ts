import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { EnterpriseSignupUrl, EnterpriseSignupUrlLoadMatch } from '../TrelloTypes';
declare class EnterpriseSignupUrlEntity extends TrelloEntityBase<EnterpriseSignupUrl> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterpriseSignupUrlEntity): EnterpriseSignupUrlEntity;
    load(this: any, reqmatch?: EnterpriseSignupUrlLoadMatch, ctrl?: Control): Promise<EnterpriseSignupUrlEntity>;
}
export { EnterpriseSignupUrlEntity };
