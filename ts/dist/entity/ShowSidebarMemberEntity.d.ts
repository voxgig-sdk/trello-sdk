import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ShowSidebarMember, ShowSidebarMemberUpdateData } from '../TrelloTypes';
declare class ShowSidebarMemberEntity extends TrelloEntityBase<ShowSidebarMember> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ShowSidebarMemberEntity): ShowSidebarMemberEntity;
    update(this: any, reqdata?: ShowSidebarMemberUpdateData, ctrl?: Control): Promise<ShowSidebarMemberEntity>;
}
export { ShowSidebarMemberEntity };
