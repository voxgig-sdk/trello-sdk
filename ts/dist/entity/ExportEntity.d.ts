import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Export, ExportLoadMatch, ExportListMatch, ExportCreateData, ExportRemoveMatch } from '../TrelloTypes';
declare class ExportEntity extends TrelloEntityBase<Export> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ExportEntity): ExportEntity;
    load(this: any, reqmatch?: ExportLoadMatch, ctrl?: Control): Promise<ExportEntity>;
    list(this: any, reqmatch?: ExportListMatch, ctrl?: Control): Promise<ExportEntity[]>;
    create(this: any, reqdata?: ExportCreateData, ctrl?: Control): Promise<ExportEntity>;
    remove(this: any, reqmatch?: ExportRemoveMatch, ctrl?: Control): Promise<ExportEntity>;
}
export { ExportEntity };
