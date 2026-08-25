import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { MemberPrivacy, MemberPrivacyLoadMatch } from '../TrelloTypes';
declare class MemberPrivacyEntity extends TrelloEntityBase<MemberPrivacy> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: MemberPrivacyEntity): MemberPrivacyEntity;
    load(this: any, reqmatch?: MemberPrivacyLoadMatch, ctrl?: Control): Promise<MemberPrivacyEntity>;
}
export { MemberPrivacyEntity };
