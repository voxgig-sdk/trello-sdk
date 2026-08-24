<?php
declare(strict_types=1);

// Trello SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class TrelloMakeContext
{
    public static function call(array $ctxmap, ?TrelloContext $basectx): TrelloContext
    {
        return new TrelloContext($ctxmap, $basectx);
    }
}
