import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { MembersVoted, MembersVotedLoadMatch, MembersVotedRemoveMatch } from '../TrelloTypes';
declare class MembersVotedEntity extends TrelloEntityBase<MembersVoted> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: MembersVotedEntity): MembersVotedEntity;
    load(this: any, reqmatch?: MembersVotedLoadMatch, ctrl?: Control): Promise<MembersVotedEntity>;
    remove(this: any, reqmatch?: MembersVotedRemoveMatch, ctrl?: Control): Promise<MembersVotedEntity>;
}
export { MembersVotedEntity };
