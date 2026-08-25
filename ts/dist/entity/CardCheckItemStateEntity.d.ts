import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CardCheckItemState, CardCheckItemStateLoadMatch } from '../TrelloTypes';
declare class CardCheckItemStateEntity extends TrelloEntityBase<CardCheckItemState> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CardCheckItemStateEntity): CardCheckItemStateEntity;
    load(this: any, reqmatch?: CardCheckItemStateLoadMatch, ctrl?: Control): Promise<CardCheckItemStateEntity>;
}
export { CardCheckItemStateEntity };
