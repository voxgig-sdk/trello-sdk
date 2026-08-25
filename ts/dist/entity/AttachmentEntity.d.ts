import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Attachment, AttachmentLoadMatch, AttachmentListMatch, AttachmentRemoveMatch } from '../TrelloTypes';
declare class AttachmentEntity extends TrelloEntityBase<Attachment> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: AttachmentEntity): AttachmentEntity;
    load(this: any, reqmatch?: AttachmentLoadMatch, ctrl?: Control): Promise<AttachmentEntity>;
    list(this: any, reqmatch?: AttachmentListMatch, ctrl?: Control): Promise<AttachmentEntity[]>;
    remove(this: any, reqmatch?: AttachmentRemoveMatch, ctrl?: Control): Promise<AttachmentEntity>;
}
export { AttachmentEntity };
