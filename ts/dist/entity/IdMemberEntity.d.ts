import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { IdMember, IdMemberRemoveMatch } from '../TrelloTypes';
declare class IdMemberEntity extends TrelloEntityBase<IdMember> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: IdMemberEntity): IdMemberEntity;
    remove(this: any, reqmatch?: IdMemberRemoveMatch, ctrl?: Control): Promise<IdMemberEntity>;
}
export { IdMemberEntity };
