import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { IdLabel, IdLabelRemoveMatch } from '../TrelloTypes';
declare class IdLabelEntity extends TrelloEntityBase<IdLabel> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: IdLabelEntity): IdLabelEntity;
    remove(this: any, reqmatch?: IdLabelRemoveMatch, ctrl?: Control): Promise<IdLabelEntity>;
}
export { IdLabelEntity };
