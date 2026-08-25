import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { OrgInviteRestrict, OrgInviteRestrictRemoveMatch } from '../TrelloTypes';
declare class OrgInviteRestrictEntity extends TrelloEntityBase<OrgInviteRestrict> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: OrgInviteRestrictEntity): OrgInviteRestrictEntity;
    remove(this: any, reqmatch?: OrgInviteRestrictRemoveMatch, ctrl?: Control): Promise<OrgInviteRestrictEntity>;
}
export { OrgInviteRestrictEntity };
