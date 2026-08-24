<?php
declare(strict_types=1);

// Trello SDK utility: prepare_body

class TrelloPrepareBody
{
    public static function call(TrelloContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
