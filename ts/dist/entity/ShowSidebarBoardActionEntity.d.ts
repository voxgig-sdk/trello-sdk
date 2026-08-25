import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ShowSidebarBoardAction, ShowSidebarBoardActionUpdateData } from '../TrelloTypes';
declare class ShowSidebarBoardActionEntity extends TrelloEntityBase<ShowSidebarBoardAction> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ShowSidebarBoardActionEntity): ShowSidebarBoardActionEntity;
    update(this: any, reqdata?: ShowSidebarBoardActionUpdateData, ctrl?: Control): Promise<ShowSidebarBoardActionEntity>;
}
export { ShowSidebarBoardActionEntity };
