<?php
declare(strict_types=1);

// Trello SDK utility: result_body

class TrelloResultBody
{
    public static function call(TrelloContext $ctx): ?TrelloResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
