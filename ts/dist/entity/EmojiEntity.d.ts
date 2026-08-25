import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Emoji, EmojiListMatch } from '../TrelloTypes';
declare class EmojiEntity extends TrelloEntityBase<Emoji> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EmojiEntity): EmojiEntity;
    list(this: any, reqmatch?: EmojiListMatch, ctrl?: Control): Promise<EmojiEntity[]>;
}
export { EmojiEntity };
