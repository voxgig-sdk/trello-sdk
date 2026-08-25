import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Read, ReadCreateData } from '../TrelloTypes';
declare class ReadEntity extends TrelloEntityBase<Read> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: ReadEntity): ReadEntity;
    create(this: any, reqdata?: ReadCreateData, ctrl?: Control): Promise<ReadEntity>;
}
export { ReadEntity };
