import { Context } from './Context';
declare class TrelloError extends Error {
    isTrelloError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TrelloError };
