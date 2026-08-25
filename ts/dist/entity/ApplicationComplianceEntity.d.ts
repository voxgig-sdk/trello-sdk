import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { ApplicationCompliance, ApplicationComplianceLoadMatch } from '../TrelloTypes';
declare class ApplicationComplianceEntity extends TrelloEntityBase<ApplicationCompliance> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ApplicationComplianceEntity): ApplicationComplianceEntity;
    load(this: any, reqmatch?: ApplicationComplianceLoadMatch, ctrl?: Control): Promise<ApplicationComplianceEntity>;
}
export { ApplicationComplianceEntity };
