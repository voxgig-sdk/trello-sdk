import { TrelloEntityBase } from '../TrelloEntityBase';
import type { TrelloSDK } from '../TrelloSDK';
import type { Control } from '../types';
import type { Token, TokenLoadMatch, TokenListMatch, TokenRemoveMatch } from '../TrelloTypes';
declare class TokenEntity extends TrelloEntityBase<Token> {
    constructor(client: TrelloSDK, entopts: any);
    make(this: TokenEntity): TokenEntity;
    load(this: any, reqmatch?: TokenLoadMatch, ctrl?: Control): Promise<TokenEntity>;
    list(this: any, reqmatch?: TokenListMatch, ctrl?: Control): Promise<TokenEntity[]>;
    remove(this: any, reqmatch?: TokenRemoveMatch, ctrl?: Control): Promise<TokenEntity>;
}
export { TokenEntity };
