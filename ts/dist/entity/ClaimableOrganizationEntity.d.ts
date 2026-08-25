import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ClaimableOrganization, ClaimableOrganizationListMatch } from '../TrelloTypes';
declare class ClaimableOrganizationEntity extends TrelloEntityBase<ClaimableOrganization> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ClaimableOrganizationEntity): ClaimableOrganizationEntity;
    list(this: any, reqmatch?: ClaimableOrganizationListMatch, ctrl?: Control): Promise<ClaimableOrganizationEntity[]>;
}
export { ClaimableOrganizationEntity };
