<?php
declare(strict_types=1);

// Trello SDK base feature

class TrelloBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(TrelloContext $ctx, array $options): void {}
    public function PostConstruct(TrelloContext $ctx): void {}
    public function PostConstructEntity(TrelloContext $ctx): void {}
    public function SetData(TrelloContext $ctx): void {}
    public function GetData(TrelloContext $ctx): void {}
    public function GetMatch(TrelloContext $ctx): void {}
    public function SetMatch(TrelloContext $ctx): void {}
    public function PrePoint(TrelloContext $ctx): void {}
    public function PreSpec(TrelloContext $ctx): void {}
    public function PreRequest(TrelloContext $ctx): void {}
    public function PreResponse(TrelloContext $ctx): void {}
    public function PreResult(TrelloContext $ctx): void {}
    public function PreDone(TrelloContext $ctx): void {}
    public function PreUnexpected(TrelloContext $ctx): void {}
}
