<?php
declare(strict_types=1);

// Trello SDK utility: result_headers

class TrelloResultHeaders
{
    public static function call(TrelloContext $ctx): ?TrelloResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
