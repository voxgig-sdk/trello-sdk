<?php
declare(strict_types=1);

// Trello SDK exists test

require_once __DIR__ . '/../trello_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = TrelloSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
