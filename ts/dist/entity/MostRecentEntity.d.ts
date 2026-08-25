import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { MostRecent } from '../TrelloTypes';
declare class MostRecentEntity extends TrelloEntityBase<MostRecent> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: MostRecentEntity): MostRecentEntity;
}
export { MostRecentEntity };
