import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { EnterprisSignupUrl, EnterprisSignupUrlLoadMatch } from '../TrelloTypes';
declare class EnterprisSignupUrlEntity extends TrelloEntityBase<EnterprisSignupUrl> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EnterprisSignupUrlEntity): EnterprisSignupUrlEntity;
    load(this: any, reqmatch?: EnterprisSignupUrlLoadMatch, ctrl?: Control): Promise<EnterprisSignupUrlEntity>;
}
export { EnterprisSignupUrlEntity };
