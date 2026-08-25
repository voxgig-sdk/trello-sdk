import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { TransferrableOrganization, TransferrableOrganizationLoadMatch } from '../TrelloTypes';
declare class TransferrableOrganizationEntity extends TrelloEntityBase<TransferrableOrganization> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: TransferrableOrganizationEntity): TransferrableOrganizationEntity;
    load(this: any, reqmatch?: TransferrableOrganizationLoadMatch, ctrl?: Control): Promise<TransferrableOrganizationEntity>;
}
export { TransferrableOrganizationEntity };
