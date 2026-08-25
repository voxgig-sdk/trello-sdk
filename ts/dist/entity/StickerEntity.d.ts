import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Sticker, StickerLoadMatch, StickerUpdateData, StickerRemoveMatch } from '../TrelloTypes';
declare class StickerEntity extends TrelloEntityBase<Sticker> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: StickerEntity): StickerEntity;
    load(this: any, reqmatch?: StickerLoadMatch, ctrl?: Control): Promise<StickerEntity>;
    update(this: any, reqdata?: StickerUpdateData, ctrl?: Control): Promise<StickerEntity>;
    remove(this: any, reqmatch?: StickerRemoveMatch, ctrl?: Control): Promise<StickerEntity>;
}
export { StickerEntity };
