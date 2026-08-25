import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Checklist, ChecklistLoadMatch, ChecklistCreateData, ChecklistUpdateData, ChecklistRemoveMatch } from '../TrelloTypes';
declare class ChecklistEntity extends TrelloEntityBase<Checklist> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ChecklistEntity): ChecklistEntity;
    load(this: any, reqmatch?: ChecklistLoadMatch, ctrl?: Control): Promise<ChecklistEntity>;
    create(this: any, reqdata?: ChecklistCreateData, ctrl?: Control): Promise<ChecklistEntity>;
    update(this: any, reqdata?: ChecklistUpdateData, ctrl?: Control): Promise<ChecklistEntity>;
    remove(this: any, reqmatch?: ChecklistRemoveMatch, ctrl?: Control): Promise<ChecklistEntity>;
}
export { ChecklistEntity };
