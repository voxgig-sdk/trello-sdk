import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { PluginListing, PluginListingCreateData, PluginListingUpdateData } from '../TrelloTypes';
declare class PluginListingEntity extends TrelloEntityBase<PluginListing> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: PluginListingEntity): PluginListingEntity;
    create(this: any, reqdata?: PluginListingCreateData, ctrl?: Control): Promise<PluginListingEntity>;
    update(this: any, reqdata?: PluginListingUpdateData, ctrl?: Control): Promise<PluginListingEntity>;
}
export { PluginListingEntity };
