import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CustomBoardBackground, CustomBoardBackgroundRemoveMatch } from '../TrelloTypes';
declare class CustomBoardBackgroundEntity extends TrelloEntityBase<CustomBoardBackground> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CustomBoardBackgroundEntity): CustomBoardBackgroundEntity;
    remove(this: any, reqmatch?: CustomBoardBackgroundRemoveMatch, ctrl?: Control): Promise<CustomBoardBackgroundEntity>;
}
export { CustomBoardBackgroundEntity };
