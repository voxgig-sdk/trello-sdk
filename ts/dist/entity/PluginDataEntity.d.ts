import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { PluginData, PluginDataLoadMatch, PluginDataListMatch } from '../TrelloTypes';
declare class PluginDataEntity extends TrelloEntityBase<PluginData> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: PluginDataEntity): PluginDataEntity;
    load(this: any, reqmatch?: PluginDataLoadMatch, ctrl?: Control): Promise<PluginDataEntity>;
    list(this: any, reqmatch?: PluginDataListMatch, ctrl?: Control): Promise<PluginDataEntity[]>;
}
export { PluginDataEntity };
