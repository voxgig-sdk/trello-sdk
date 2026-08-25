import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Plugin, PluginLoadMatch, PluginListMatch, PluginUpdateData } from '../TrelloTypes';
declare class PluginEntity extends TrelloEntityBase<Plugin> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: PluginEntity): PluginEntity;
    load(this: any, reqmatch?: PluginLoadMatch, ctrl?: Control): Promise<PluginEntity>;
    list(this: any, reqmatch?: PluginListMatch, ctrl?: Control): Promise<PluginEntity[]>;
    update(this: any, reqdata?: PluginUpdateData, ctrl?: Control): Promise<PluginEntity>;
}
export { PluginEntity };
