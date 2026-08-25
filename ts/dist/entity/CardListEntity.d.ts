import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CardList, CardListLoadMatch } from '../TrelloTypes';
declare class CardListEntity extends TrelloEntityBase<CardList> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CardListEntity): CardListEntity;
    load(this: any, reqmatch?: CardListLoadMatch, ctrl?: Control): Promise<CardListEntity>;
}
export { CardListEntity };
