import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ActionReactionsSummary, ActionReactionsSummaryLoadMatch } from '../TrelloTypes';
declare class ActionReactionsSummaryEntity extends TrelloEntityBase<ActionReactionsSummary> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ActionReactionsSummaryEntity): ActionReactionsSummaryEntity;
    load(this: any, reqmatch?: ActionReactionsSummaryLoadMatch, ctrl?: Control): Promise<ActionReactionsSummaryEntity>;
}
export { ActionReactionsSummaryEntity };
