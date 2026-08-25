import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { EmailPosition, EmailPositionUpdateData } from '../TrelloTypes';
declare class EmailPositionEntity extends TrelloEntityBase<EmailPosition> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: EmailPositionEntity): EmailPositionEntity;
    update(this: any, reqdata?: EmailPositionUpdateData, ctrl?: Control): Promise<EmailPositionEntity>;
}
export { EmailPositionEntity };
