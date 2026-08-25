import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Card, CardLoadMatch, CardListMatch, CardCreateData, CardUpdateData, CardRemoveMatch } from '../TrelloTypes';
declare class CardEntity extends TrelloEntityBase<Card> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CardEntity): CardEntity;
    load(this: any, reqmatch?: CardLoadMatch, ctrl?: Control): Promise<CardEntity>;
    list(this: any, reqmatch?: CardListMatch, ctrl?: Control): Promise<CardEntity[]>;
    create(this: any, reqdata?: CardCreateData, ctrl?: Control): Promise<CardEntity>;
    update(this: any, reqdata?: CardUpdateData, ctrl?: Control): Promise<CardEntity>;
    remove(this: any, reqmatch?: CardRemoveMatch, ctrl?: Control): Promise<CardEntity>;
}
export { CardEntity };
