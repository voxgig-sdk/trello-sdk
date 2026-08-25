import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Label, LabelLoadMatch, LabelCreateData, LabelUpdateData, LabelRemoveMatch } from '../TrelloTypes';
declare class LabelEntity extends TrelloEntityBase<Label> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: LabelEntity): LabelEntity;
    load(this: any, reqmatch?: LabelLoadMatch, ctrl?: Control): Promise<LabelEntity>;
    create(this: any, reqdata?: LabelCreateData, ctrl?: Control): Promise<LabelEntity>;
    update(this: any, reqdata?: LabelUpdateData, ctrl?: Control): Promise<LabelEntity>;
    remove(this: any, reqmatch?: LabelRemoveMatch, ctrl?: Control): Promise<LabelEntity>;
}
export { LabelEntity };
