import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { SavedSearch, SavedSearchLoadMatch, SavedSearchListMatch, SavedSearchCreateData, SavedSearchUpdateData, SavedSearchRemoveMatch } from '../TrelloTypes';
declare class SavedSearchEntity extends TrelloEntityBase<SavedSearch> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: SavedSearchEntity): SavedSearchEntity;
    load(this: any, reqmatch?: SavedSearchLoadMatch, ctrl?: Control): Promise<SavedSearchEntity>;
    list(this: any, reqmatch?: SavedSearchListMatch, ctrl?: Control): Promise<SavedSearchEntity[]>;
    create(this: any, reqdata?: SavedSearchCreateData, ctrl?: Control): Promise<SavedSearchEntity>;
    update(this: any, reqdata?: SavedSearchUpdateData, ctrl?: Control): Promise<SavedSearchEntity>;
    remove(this: any, reqmatch?: SavedSearchRemoveMatch, ctrl?: Control): Promise<SavedSearchEntity>;
}
export { SavedSearchEntity };
