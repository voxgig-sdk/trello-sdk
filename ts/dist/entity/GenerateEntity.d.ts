import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Generate, GenerateCreateData } from '../TrelloTypes';
declare class GenerateEntity extends TrelloEntityBase<Generate> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: GenerateEntity): GenerateEntity;
    create(this: any, reqdata?: GenerateCreateData, ctrl?: Control): Promise<GenerateEntity>;
}
export { GenerateEntity };
