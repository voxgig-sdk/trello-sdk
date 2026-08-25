import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Application } from '../TrelloTypes';
declare class ApplicationEntity extends TrelloEntityBase<Application> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ApplicationEntity): ApplicationEntity;
}
export { ApplicationEntity };
