import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { AssociatedDomain, AssociatedDomainRemoveMatch } from '../TrelloTypes';
declare class AssociatedDomainEntity extends TrelloEntityBase<AssociatedDomain> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: AssociatedDomainEntity): AssociatedDomainEntity;
    remove(this: any, reqmatch?: AssociatedDomainRemoveMatch, ctrl?: Control): Promise<AssociatedDomainEntity>;
}
export { AssociatedDomainEntity };
