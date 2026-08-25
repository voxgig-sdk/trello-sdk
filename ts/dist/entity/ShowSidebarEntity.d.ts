import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ShowSidebar, ShowSidebarUpdateData } from '../TrelloTypes';
declare class ShowSidebarEntity extends TrelloEntityBase<ShowSidebar> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ShowSidebarEntity): ShowSidebarEntity;
    update(this: any, reqdata?: ShowSidebarUpdateData, ctrl?: Control): Promise<ShowSidebarEntity>;
}
export { ShowSidebarEntity };
