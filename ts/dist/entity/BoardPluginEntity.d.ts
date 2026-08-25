import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { BoardPlugin, BoardPluginRemoveMatch } from '../TrelloTypes';
declare class BoardPluginEntity extends TrelloEntityBase<BoardPlugin> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: BoardPluginEntity): BoardPluginEntity;
    remove(this: any, reqmatch?: BoardPluginRemoveMatch, ctrl?: Control): Promise<BoardPluginEntity>;
}
export { BoardPluginEntity };
