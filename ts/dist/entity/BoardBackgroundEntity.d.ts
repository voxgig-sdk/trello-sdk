import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { BoardBackground, BoardBackgroundLoadMatch, BoardBackgroundListMatch, BoardBackgroundCreateData, BoardBackgroundUpdateData, BoardBackgroundRemoveMatch } from '../TrelloTypes';
declare class BoardBackgroundEntity extends TrelloEntityBase<BoardBackground> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: BoardBackgroundEntity): BoardBackgroundEntity;
    load(this: any, reqmatch?: BoardBackgroundLoadMatch, ctrl?: Control): Promise<BoardBackgroundEntity>;
    list(this: any, reqmatch?: BoardBackgroundListMatch, ctrl?: Control): Promise<BoardBackgroundEntity[]>;
    create(this: any, reqdata?: BoardBackgroundCreateData, ctrl?: Control): Promise<BoardBackgroundEntity>;
    update(this: any, reqdata?: BoardBackgroundUpdateData, ctrl?: Control): Promise<BoardBackgroundEntity>;
    remove(this: any, reqmatch?: BoardBackgroundRemoveMatch, ctrl?: Control): Promise<BoardBackgroundEntity>;
}
export { BoardBackgroundEntity };
