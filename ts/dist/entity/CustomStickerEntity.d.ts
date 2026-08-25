import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { CustomSticker, CustomStickerLoadMatch, CustomStickerListMatch, CustomStickerCreateData, CustomStickerRemoveMatch } from '../TrelloTypes';
declare class CustomStickerEntity extends TrelloEntityBase<CustomSticker> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: CustomStickerEntity): CustomStickerEntity;
    load(this: any, reqmatch?: CustomStickerLoadMatch, ctrl?: Control): Promise<CustomStickerEntity>;
    list(this: any, reqmatch?: CustomStickerListMatch, ctrl?: Control): Promise<CustomStickerEntity[]>;
    create(this: any, reqdata?: CustomStickerCreateData, ctrl?: Control): Promise<CustomStickerEntity>;
    remove(this: any, reqmatch?: CustomStickerRemoveMatch, ctrl?: Control): Promise<CustomStickerEntity>;
}
export { CustomStickerEntity };
