import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ShowSidebarActivity, ShowSidebarActivityUpdateData } from '../TrelloTypes';
declare class ShowSidebarActivityEntity extends TrelloEntityBase<ShowSidebarActivity> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ShowSidebarActivityEntity): ShowSidebarActivityEntity;
    update(this: any, reqdata?: ShowSidebarActivityUpdateData, ctrl?: Control): Promise<ShowSidebarActivityEntity>;
}
export { ShowSidebarActivityEntity };
