import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ExportDownload, ExportDownloadLoadMatch } from '../TrelloTypes';
declare class ExportDownloadEntity extends TrelloEntityBase<ExportDownload> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ExportDownloadEntity): ExportDownloadEntity;
    load(this: any, reqmatch?: ExportDownloadLoadMatch, ctrl?: Control): Promise<ExportDownloadEntity>;
}
export { ExportDownloadEntity };
