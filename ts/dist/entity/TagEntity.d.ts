import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Tag, TagListMatch, TagRemoveMatch } from '../TrelloTypes';
declare class TagEntity extends TrelloEntityBase<Tag> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    list(this: any, reqmatch?: TagListMatch, ctrl?: Control): Promise<TagEntity[]>;
    remove(this: any, reqmatch?: TagRemoveMatch, ctrl?: Control): Promise<TagEntity>;
}
export { TagEntity };
