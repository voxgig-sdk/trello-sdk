import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Option, OptionLoadMatch, OptionRemoveMatch } from '../TrelloTypes';
declare class OptionEntity extends TrelloEntityBase<Option> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: OptionEntity): OptionEntity;
    load(this: any, reqmatch?: OptionLoadMatch, ctrl?: Control): Promise<OptionEntity>;
    remove(this: any, reqmatch?: OptionRemoveMatch, ctrl?: Control): Promise<OptionEntity>;
}
export { OptionEntity };
