import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Membership, MembershipLoadMatch, MembershipListMatch, MembershipUpdateData } from '../TrelloTypes';
declare class MembershipEntity extends TrelloEntityBase<Membership> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: MembershipEntity): MembershipEntity;
    load(this: any, reqmatch?: MembershipLoadMatch, ctrl?: Control): Promise<MembershipEntity>;
    list(this: any, reqmatch?: MembershipListMatch, ctrl?: Control): Promise<MembershipEntity[]>;
    update(this: any, reqdata?: MembershipUpdateData, ctrl?: Control): Promise<MembershipEntity>;
}
export { MembershipEntity };
