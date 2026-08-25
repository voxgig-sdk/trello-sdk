import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CustomEmoji, CustomEmojiLoadMatch, CustomEmojiListMatch, CustomEmojiCreateData } from '../TrelloTypes';
declare class CustomEmojiEntity extends TrelloEntityBase<CustomEmoji> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CustomEmojiEntity): CustomEmojiEntity;
    load(this: any, reqmatch?: CustomEmojiLoadMatch, ctrl?: Control): Promise<CustomEmojiEntity>;
    list(this: any, reqmatch?: CustomEmojiListMatch, ctrl?: Control): Promise<CustomEmojiEntity[]>;
    create(this: any, reqdata?: CustomEmojiCreateData, ctrl?: Control): Promise<CustomEmojiEntity>;
}
export { CustomEmojiEntity };
