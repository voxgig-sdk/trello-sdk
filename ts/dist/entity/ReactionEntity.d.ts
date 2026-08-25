import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Reaction, ReactionLoadMatch, ReactionRemoveMatch } from '../TrelloTypes';
declare class ReactionEntity extends TrelloEntityBase<Reaction> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ReactionEntity): ReactionEntity;
    load(this: any, reqmatch?: ReactionLoadMatch, ctrl?: Control): Promise<ReactionEntity>;
    remove(this: any, reqmatch?: ReactionRemoveMatch, ctrl?: Control): Promise<ReactionEntity>;
}
export { ReactionEntity };
