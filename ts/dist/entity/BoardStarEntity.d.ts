import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { BoardStar, BoardStarLoadMatch, BoardStarListMatch, BoardStarCreateData, BoardStarUpdateData, BoardStarRemoveMatch } from '../TrelloTypes';
declare class BoardStarEntity extends TrelloEntityBase<BoardStar> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: BoardStarEntity): BoardStarEntity;
    load(this: any, reqmatch?: BoardStarLoadMatch, ctrl?: Control): Promise<BoardStarEntity>;
    list(this: any, reqmatch?: BoardStarListMatch, ctrl?: Control): Promise<BoardStarEntity[]>;
    create(this: any, reqdata?: BoardStarCreateData, ctrl?: Control): Promise<BoardStarEntity>;
    update(this: any, reqdata?: BoardStarUpdateData, ctrl?: Control): Promise<BoardStarEntity>;
    remove(this: any, reqmatch?: BoardStarRemoveMatch, ctrl?: Control): Promise<BoardStarEntity>;
}
export { BoardStarEntity };
