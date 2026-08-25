import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { PendingOrganization, PendingOrganizationListMatch } from '../TrelloTypes';
declare class PendingOrganizationEntity extends TrelloEntityBase<PendingOrganization> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: PendingOrganizationEntity): PendingOrganizationEntity;
    list(this: any, reqmatch?: PendingOrganizationListMatch, ctrl?: Control): Promise<PendingOrganizationEntity[]>;
}
export { PendingOrganizationEntity };
