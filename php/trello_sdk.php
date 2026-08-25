<?php
declare(strict_types=1);

// Trello SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class TrelloSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new TrelloUtility();
        $this->_utility = $utility;

        $config = TrelloConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = TrelloHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = TrelloHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!TrelloFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, TrelloFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return TrelloUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = TrelloHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = TrelloHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = TrelloHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new TrelloSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new TrelloError($op . "_allow",
                "TrelloSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = TrelloHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = TrelloHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new TrelloError("graphql_error",
                "TrelloSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_action = null;

    // Canonical facade: $client->Action()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->action()
    // resolves here too.
    public function Action($data = null)
    {
        require_once __DIR__ . '/entity/action_entity.php';
        if ($data === null) {
            if ($this->_action === null) {
                $this->_action = new ActionEntity($this, null);
            }
            return $this->_action;
        }
        return new ActionEntity($this, $data);
    }


    private $_action_reactions_summary = null;

    // Canonical facade: $client->ActionReactionsSummary()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->action_reactions_summary()
    // resolves here too.
    public function ActionReactionsSummary($data = null)
    {
        require_once __DIR__ . '/entity/action_reactions_summary_entity.php';
        if ($data === null) {
            if ($this->_action_reactions_summary === null) {
                $this->_action_reactions_summary = new ActionReactionsSummaryEntity($this, null);
            }
            return $this->_action_reactions_summary;
        }
        return new ActionReactionsSummaryEntity($this, $data);
    }


    private $_admin = null;

    // Canonical facade: $client->Admin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->admin()
    // resolves here too.
    public function Admin($data = null)
    {
        require_once __DIR__ . '/entity/admin_entity.php';
        if ($data === null) {
            if ($this->_admin === null) {
                $this->_admin = new AdminEntity($this, null);
            }
            return $this->_admin;
        }
        return new AdminEntity($this, $data);
    }


    private $_application = null;

    // Canonical facade: $client->Application()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application()
    // resolves here too.
    public function Application($data = null)
    {
        require_once __DIR__ . '/entity/application_entity.php';
        if ($data === null) {
            if ($this->_application === null) {
                $this->_application = new ApplicationEntity($this, null);
            }
            return $this->_application;
        }
        return new ApplicationEntity($this, $data);
    }


    private $_application_compliance = null;

    // Canonical facade: $client->ApplicationCompliance()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->application_compliance()
    // resolves here too.
    public function ApplicationCompliance($data = null)
    {
        require_once __DIR__ . '/entity/application_compliance_entity.php';
        if ($data === null) {
            if ($this->_application_compliance === null) {
                $this->_application_compliance = new ApplicationComplianceEntity($this, null);
            }
            return $this->_application_compliance;
        }
        return new ApplicationComplianceEntity($this, $data);
    }


    private $_associated_domain = null;

    // Canonical facade: $client->AssociatedDomain()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->associated_domain()
    // resolves here too.
    public function AssociatedDomain($data = null)
    {
        require_once __DIR__ . '/entity/associated_domain_entity.php';
        if ($data === null) {
            if ($this->_associated_domain === null) {
                $this->_associated_domain = new AssociatedDomainEntity($this, null);
            }
            return $this->_associated_domain;
        }
        return new AssociatedDomainEntity($this, $data);
    }


    private $_attachment = null;

    // Canonical facade: $client->Attachment()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->attachment()
    // resolves here too.
    public function Attachment($data = null)
    {
        require_once __DIR__ . '/entity/attachment_entity.php';
        if ($data === null) {
            if ($this->_attachment === null) {
                $this->_attachment = new AttachmentEntity($this, null);
            }
            return $this->_attachment;
        }
        return new AttachmentEntity($this, $data);
    }


    private $_batch = null;

    // Canonical facade: $client->Batch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->batch()
    // resolves here too.
    public function Batch($data = null)
    {
        require_once __DIR__ . '/entity/batch_entity.php';
        if ($data === null) {
            if ($this->_batch === null) {
                $this->_batch = new BatchEntity($this, null);
            }
            return $this->_batch;
        }
        return new BatchEntity($this, $data);
    }


    private $_board = null;

    // Canonical facade: $client->Board()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->board()
    // resolves here too.
    public function Board($data = null)
    {
        require_once __DIR__ . '/entity/board_entity.php';
        if ($data === null) {
            if ($this->_board === null) {
                $this->_board = new BoardEntity($this, null);
            }
            return $this->_board;
        }
        return new BoardEntity($this, $data);
    }


    private $_board_background = null;

    // Canonical facade: $client->BoardBackground()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->board_background()
    // resolves here too.
    public function BoardBackground($data = null)
    {
        require_once __DIR__ . '/entity/board_background_entity.php';
        if ($data === null) {
            if ($this->_board_background === null) {
                $this->_board_background = new BoardBackgroundEntity($this, null);
            }
            return $this->_board_background;
        }
        return new BoardBackgroundEntity($this, $data);
    }


    private $_board_plugin = null;

    // Canonical facade: $client->BoardPlugin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->board_plugin()
    // resolves here too.
    public function BoardPlugin($data = null)
    {
        require_once __DIR__ . '/entity/board_plugin_entity.php';
        if ($data === null) {
            if ($this->_board_plugin === null) {
                $this->_board_plugin = new BoardPluginEntity($this, null);
            }
            return $this->_board_plugin;
        }
        return new BoardPluginEntity($this, $data);
    }


    private $_board_star = null;

    // Canonical facade: $client->BoardStar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->board_star()
    // resolves here too.
    public function BoardStar($data = null)
    {
        require_once __DIR__ . '/entity/board_star_entity.php';
        if ($data === null) {
            if ($this->_board_star === null) {
                $this->_board_star = new BoardStarEntity($this, null);
            }
            return $this->_board_star;
        }
        return new BoardStarEntity($this, $data);
    }


    private $_bulk = null;

    // Canonical facade: $client->Bulk()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->bulk()
    // resolves here too.
    public function Bulk($data = null)
    {
        require_once __DIR__ . '/entity/bulk_entity.php';
        if ($data === null) {
            if ($this->_bulk === null) {
                $this->_bulk = new BulkEntity($this, null);
            }
            return $this->_bulk;
        }
        return new BulkEntity($this, $data);
    }


    private $_card = null;

    // Canonical facade: $client->Card()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->card()
    // resolves here too.
    public function Card($data = null)
    {
        require_once __DIR__ . '/entity/card_entity.php';
        if ($data === null) {
            if ($this->_card === null) {
                $this->_card = new CardEntity($this, null);
            }
            return $this->_card;
        }
        return new CardEntity($this, $data);
    }


    private $_card_check_item_state = null;

    // Canonical facade: $client->CardCheckItemState()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->card_check_item_state()
    // resolves here too.
    public function CardCheckItemState($data = null)
    {
        require_once __DIR__ . '/entity/card_check_item_state_entity.php';
        if ($data === null) {
            if ($this->_card_check_item_state === null) {
                $this->_card_check_item_state = new CardCheckItemStateEntity($this, null);
            }
            return $this->_card_check_item_state;
        }
        return new CardCheckItemStateEntity($this, $data);
    }


    private $_card_list = null;

    // Canonical facade: $client->CardList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->card_list()
    // resolves here too.
    public function CardList($data = null)
    {
        require_once __DIR__ . '/entity/card_list_entity.php';
        if ($data === null) {
            if ($this->_card_list === null) {
                $this->_card_list = new CardListEntity($this, null);
            }
            return $this->_card_list;
        }
        return new CardListEntity($this, $data);
    }


    private $_check_item = null;

    // Canonical facade: $client->CheckItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->check_item()
    // resolves here too.
    public function CheckItem($data = null)
    {
        require_once __DIR__ . '/entity/check_item_entity.php';
        if ($data === null) {
            if ($this->_check_item === null) {
                $this->_check_item = new CheckItemEntity($this, null);
            }
            return $this->_check_item;
        }
        return new CheckItemEntity($this, $data);
    }


    private $_checklist = null;

    // Canonical facade: $client->Checklist()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->checklist()
    // resolves here too.
    public function Checklist($data = null)
    {
        require_once __DIR__ . '/entity/checklist_entity.php';
        if ($data === null) {
            if ($this->_checklist === null) {
                $this->_checklist = new ChecklistEntity($this, null);
            }
            return $this->_checklist;
        }
        return new ChecklistEntity($this, $data);
    }


    private $_claimable_organization = null;

    // Canonical facade: $client->ClaimableOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->claimable_organization()
    // resolves here too.
    public function ClaimableOrganization($data = null)
    {
        require_once __DIR__ . '/entity/claimable_organization_entity.php';
        if ($data === null) {
            if ($this->_claimable_organization === null) {
                $this->_claimable_organization = new ClaimableOrganizationEntity($this, null);
            }
            return $this->_claimable_organization;
        }
        return new ClaimableOrganizationEntity($this, $data);
    }


    private $_custom_board_background = null;

    // Canonical facade: $client->CustomBoardBackground()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_board_background()
    // resolves here too.
    public function CustomBoardBackground($data = null)
    {
        require_once __DIR__ . '/entity/custom_board_background_entity.php';
        if ($data === null) {
            if ($this->_custom_board_background === null) {
                $this->_custom_board_background = new CustomBoardBackgroundEntity($this, null);
            }
            return $this->_custom_board_background;
        }
        return new CustomBoardBackgroundEntity($this, $data);
    }


    private $_custom_emoji = null;

    // Canonical facade: $client->CustomEmoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_emoji()
    // resolves here too.
    public function CustomEmoji($data = null)
    {
        require_once __DIR__ . '/entity/custom_emoji_entity.php';
        if ($data === null) {
            if ($this->_custom_emoji === null) {
                $this->_custom_emoji = new CustomEmojiEntity($this, null);
            }
            return $this->_custom_emoji;
        }
        return new CustomEmojiEntity($this, $data);
    }


    private $_custom_field = null;

    // Canonical facade: $client->CustomField()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field()
    // resolves here too.
    public function CustomField($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_entity.php';
        if ($data === null) {
            if ($this->_custom_field === null) {
                $this->_custom_field = new CustomFieldEntity($this, null);
            }
            return $this->_custom_field;
        }
        return new CustomFieldEntity($this, $data);
    }


    private $_custom_field_item = null;

    // Canonical facade: $client->CustomFieldItem()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_field_item()
    // resolves here too.
    public function CustomFieldItem($data = null)
    {
        require_once __DIR__ . '/entity/custom_field_item_entity.php';
        if ($data === null) {
            if ($this->_custom_field_item === null) {
                $this->_custom_field_item = new CustomFieldItemEntity($this, null);
            }
            return $this->_custom_field_item;
        }
        return new CustomFieldItemEntity($this, $data);
    }


    private $_custom_sticker = null;

    // Canonical facade: $client->CustomSticker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->custom_sticker()
    // resolves here too.
    public function CustomSticker($data = null)
    {
        require_once __DIR__ . '/entity/custom_sticker_entity.php';
        if ($data === null) {
            if ($this->_custom_sticker === null) {
                $this->_custom_sticker = new CustomStickerEntity($this, null);
            }
            return $this->_custom_sticker;
        }
        return new CustomStickerEntity($this, $data);
    }


    private $_email_position = null;

    // Canonical facade: $client->EmailPosition()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->email_position()
    // resolves here too.
    public function EmailPosition($data = null)
    {
        require_once __DIR__ . '/entity/email_position_entity.php';
        if ($data === null) {
            if ($this->_email_position === null) {
                $this->_email_position = new EmailPositionEntity($this, null);
            }
            return $this->_email_position;
        }
        return new EmailPositionEntity($this, $data);
    }


    private $_emoji = null;

    // Canonical facade: $client->Emoji()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->emoji()
    // resolves here too.
    public function Emoji($data = null)
    {
        require_once __DIR__ . '/entity/emoji_entity.php';
        if ($data === null) {
            if ($this->_emoji === null) {
                $this->_emoji = new EmojiEntity($this, null);
            }
            return $this->_emoji;
        }
        return new EmojiEntity($this, $data);
    }


    private $_enterpris = null;

    // Canonical facade: $client->Enterpris()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterpris()
    // resolves here too.
    public function Enterpris($data = null)
    {
        require_once __DIR__ . '/entity/enterpris_entity.php';
        if ($data === null) {
            if ($this->_enterpris === null) {
                $this->_enterpris = new EnterprisEntity($this, null);
            }
            return $this->_enterpris;
        }
        return new EnterprisEntity($this, $data);
    }


    private $_enterpris_signup_url = null;

    // Canonical facade: $client->EnterprisSignupUrl()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterpris_signup_url()
    // resolves here too.
    public function EnterprisSignupUrl($data = null)
    {
        require_once __DIR__ . '/entity/enterpris_signup_url_entity.php';
        if ($data === null) {
            if ($this->_enterpris_signup_url === null) {
                $this->_enterpris_signup_url = new EnterprisSignupUrlEntity($this, null);
            }
            return $this->_enterpris_signup_url;
        }
        return new EnterprisSignupUrlEntity($this, $data);
    }


    private $_enterprise_admin = null;

    // Canonical facade: $client->EnterpriseAdmin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_admin()
    // resolves here too.
    public function EnterpriseAdmin($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_admin_entity.php';
        if ($data === null) {
            if ($this->_enterprise_admin === null) {
                $this->_enterprise_admin = new EnterpriseAdminEntity($this, null);
            }
            return $this->_enterprise_admin;
        }
        return new EnterpriseAdminEntity($this, $data);
    }


    private $_enterprise_audit_log = null;

    // Canonical facade: $client->EnterpriseAuditLog()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enterprise_audit_log()
    // resolves here too.
    public function EnterpriseAuditLog($data = null)
    {
        require_once __DIR__ . '/entity/enterprise_audit_log_entity.php';
        if ($data === null) {
            if ($this->_enterprise_audit_log === null) {
                $this->_enterprise_audit_log = new EnterpriseAuditLogEntity($this, null);
            }
            return $this->_enterprise_audit_log;
        }
        return new EnterpriseAuditLogEntity($this, $data);
    }


    private $_export = null;

    // Canonical facade: $client->Export()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->export()
    // resolves here too.
    public function Export($data = null)
    {
        require_once __DIR__ . '/entity/export_entity.php';
        if ($data === null) {
            if ($this->_export === null) {
                $this->_export = new ExportEntity($this, null);
            }
            return $this->_export;
        }
        return new ExportEntity($this, $data);
    }


    private $_export_download = null;

    // Canonical facade: $client->ExportDownload()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->export_download()
    // resolves here too.
    public function ExportDownload($data = null)
    {
        require_once __DIR__ . '/entity/export_download_entity.php';
        if ($data === null) {
            if ($this->_export_download === null) {
                $this->_export_download = new ExportDownloadEntity($this, null);
            }
            return $this->_export_download;
        }
        return new ExportDownloadEntity($this, $data);
    }


    private $_generate = null;

    // Canonical facade: $client->Generate()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->generate()
    // resolves here too.
    public function Generate($data = null)
    {
        require_once __DIR__ . '/entity/generate_entity.php';
        if ($data === null) {
            if ($this->_generate === null) {
                $this->_generate = new GenerateEntity($this, null);
            }
            return $this->_generate;
        }
        return new GenerateEntity($this, $data);
    }


    private $_id_email_list = null;

    // Canonical facade: $client->IdEmailList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->id_email_list()
    // resolves here too.
    public function IdEmailList($data = null)
    {
        require_once __DIR__ . '/entity/id_email_list_entity.php';
        if ($data === null) {
            if ($this->_id_email_list === null) {
                $this->_id_email_list = new IdEmailListEntity($this, null);
            }
            return $this->_id_email_list;
        }
        return new IdEmailListEntity($this, $data);
    }


    private $_id_label = null;

    // Canonical facade: $client->IdLabel()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->id_label()
    // resolves here too.
    public function IdLabel($data = null)
    {
        require_once __DIR__ . '/entity/id_label_entity.php';
        if ($data === null) {
            if ($this->_id_label === null) {
                $this->_id_label = new IdLabelEntity($this, null);
            }
            return $this->_id_label;
        }
        return new IdLabelEntity($this, $data);
    }


    private $_id_member = null;

    // Canonical facade: $client->IdMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->id_member()
    // resolves here too.
    public function IdMember($data = null)
    {
        require_once __DIR__ . '/entity/id_member_entity.php';
        if ($data === null) {
            if ($this->_id_member === null) {
                $this->_id_member = new IdMemberEntity($this, null);
            }
            return $this->_id_member;
        }
        return new IdMemberEntity($this, $data);
    }


    private $_label = null;

    // Canonical facade: $client->Label()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->label()
    // resolves here too.
    public function Label($data = null)
    {
        require_once __DIR__ . '/entity/label_entity.php';
        if ($data === null) {
            if ($this->_label === null) {
                $this->_label = new LabelEntity($this, null);
            }
            return $this->_label;
        }
        return new LabelEntity($this, $data);
    }


    private $_list = null;

    // Canonical facade: $client->List()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->list()
    // resolves here too.
    public function List($data = null)
    {
        require_once __DIR__ . '/entity/list_entity.php';
        if ($data === null) {
            if ($this->_list === null) {
                $this->_list = new ListEntity($this, null);
            }
            return $this->_list;
        }
        return new ListEntity($this, $data);
    }


    private $_member = null;

    // Canonical facade: $client->Member()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member()
    // resolves here too.
    public function Member($data = null)
    {
        require_once __DIR__ . '/entity/member_entity.php';
        if ($data === null) {
            if ($this->_member === null) {
                $this->_member = new MemberEntity($this, null);
            }
            return $this->_member;
        }
        return new MemberEntity($this, $data);
    }


    private $_member_privacy = null;

    // Canonical facade: $client->MemberPrivacy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->member_privacy()
    // resolves here too.
    public function MemberPrivacy($data = null)
    {
        require_once __DIR__ . '/entity/member_privacy_entity.php';
        if ($data === null) {
            if ($this->_member_privacy === null) {
                $this->_member_privacy = new MemberPrivacyEntity($this, null);
            }
            return $this->_member_privacy;
        }
        return new MemberPrivacyEntity($this, $data);
    }


    private $_members_voted = null;

    // Canonical facade: $client->MembersVoted()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->members_voted()
    // resolves here too.
    public function MembersVoted($data = null)
    {
        require_once __DIR__ . '/entity/members_voted_entity.php';
        if ($data === null) {
            if ($this->_members_voted === null) {
                $this->_members_voted = new MembersVotedEntity($this, null);
            }
            return $this->_members_voted;
        }
        return new MembersVotedEntity($this, $data);
    }


    private $_membership = null;

    // Canonical facade: $client->Membership()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->membership()
    // resolves here too.
    public function Membership($data = null)
    {
        require_once __DIR__ . '/entity/membership_entity.php';
        if ($data === null) {
            if ($this->_membership === null) {
                $this->_membership = new MembershipEntity($this, null);
            }
            return $this->_membership;
        }
        return new MembershipEntity($this, $data);
    }


    private $_most_recent = null;

    // Canonical facade: $client->MostRecent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->most_recent()
    // resolves here too.
    public function MostRecent($data = null)
    {
        require_once __DIR__ . '/entity/most_recent_entity.php';
        if ($data === null) {
            if ($this->_most_recent === null) {
                $this->_most_recent = new MostRecentEntity($this, null);
            }
            return $this->_most_recent;
        }
        return new MostRecentEntity($this, $data);
    }


    private $_new_billable_guest = null;

    // Canonical facade: $client->NewBillableGuest()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->new_billable_guest()
    // resolves here too.
    public function NewBillableGuest($data = null)
    {
        require_once __DIR__ . '/entity/new_billable_guest_entity.php';
        if ($data === null) {
            if ($this->_new_billable_guest === null) {
                $this->_new_billable_guest = new NewBillableGuestEntity($this, null);
            }
            return $this->_new_billable_guest;
        }
        return new NewBillableGuestEntity($this, $data);
    }


    private $_notification = null;

    // Canonical facade: $client->Notification()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification()
    // resolves here too.
    public function Notification($data = null)
    {
        require_once __DIR__ . '/entity/notification_entity.php';
        if ($data === null) {
            if ($this->_notification === null) {
                $this->_notification = new NotificationEntity($this, null);
            }
            return $this->_notification;
        }
        return new NotificationEntity($this, $data);
    }


    private $_notification_channel_setting = null;

    // Canonical facade: $client->NotificationChannelSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification_channel_setting()
    // resolves here too.
    public function NotificationChannelSetting($data = null)
    {
        require_once __DIR__ . '/entity/notification_channel_setting_entity.php';
        if ($data === null) {
            if ($this->_notification_channel_setting === null) {
                $this->_notification_channel_setting = new NotificationChannelSettingEntity($this, null);
            }
            return $this->_notification_channel_setting;
        }
        return new NotificationChannelSettingEntity($this, $data);
    }


    private $_notification_list = null;

    // Canonical facade: $client->NotificationList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification_list()
    // resolves here too.
    public function NotificationList($data = null)
    {
        require_once __DIR__ . '/entity/notification_list_entity.php';
        if ($data === null) {
            if ($this->_notification_list === null) {
                $this->_notification_list = new NotificationListEntity($this, null);
            }
            return $this->_notification_list;
        }
        return new NotificationListEntity($this, $data);
    }


    private $_notification_member_creator = null;

    // Canonical facade: $client->NotificationMemberCreator()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notification_member_creator()
    // resolves here too.
    public function NotificationMemberCreator($data = null)
    {
        require_once __DIR__ . '/entity/notification_member_creator_entity.php';
        if ($data === null) {
            if ($this->_notification_member_creator === null) {
                $this->_notification_member_creator = new NotificationMemberCreatorEntity($this, null);
            }
            return $this->_notification_member_creator;
        }
        return new NotificationMemberCreatorEntity($this, $data);
    }


    private $_notifications_channel_setting = null;

    // Canonical facade: $client->NotificationsChannelSetting()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->notifications_channel_setting()
    // resolves here too.
    public function NotificationsChannelSetting($data = null)
    {
        require_once __DIR__ . '/entity/notifications_channel_setting_entity.php';
        if ($data === null) {
            if ($this->_notifications_channel_setting === null) {
                $this->_notifications_channel_setting = new NotificationsChannelSettingEntity($this, null);
            }
            return $this->_notifications_channel_setting;
        }
        return new NotificationsChannelSettingEntity($this, $data);
    }


    private $_option = null;

    // Canonical facade: $client->Option()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->option()
    // resolves here too.
    public function Option($data = null)
    {
        require_once __DIR__ . '/entity/option_entity.php';
        if ($data === null) {
            if ($this->_option === null) {
                $this->_option = new OptionEntity($this, null);
            }
            return $this->_option;
        }
        return new OptionEntity($this, $data);
    }


    private $_org_invite_restrict = null;

    // Canonical facade: $client->OrgInviteRestrict()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->org_invite_restrict()
    // resolves here too.
    public function OrgInviteRestrict($data = null)
    {
        require_once __DIR__ . '/entity/org_invite_restrict_entity.php';
        if ($data === null) {
            if ($this->_org_invite_restrict === null) {
                $this->_org_invite_restrict = new OrgInviteRestrictEntity($this, null);
            }
            return $this->_org_invite_restrict;
        }
        return new OrgInviteRestrictEntity($this, $data);
    }


    private $_organization = null;

    // Canonical facade: $client->Organization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->organization()
    // resolves here too.
    public function Organization($data = null)
    {
        require_once __DIR__ . '/entity/organization_entity.php';
        if ($data === null) {
            if ($this->_organization === null) {
                $this->_organization = new OrganizationEntity($this, null);
            }
            return $this->_organization;
        }
        return new OrganizationEntity($this, $data);
    }


    private $_pending_organization = null;

    // Canonical facade: $client->PendingOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->pending_organization()
    // resolves here too.
    public function PendingOrganization($data = null)
    {
        require_once __DIR__ . '/entity/pending_organization_entity.php';
        if ($data === null) {
            if ($this->_pending_organization === null) {
                $this->_pending_organization = new PendingOrganizationEntity($this, null);
            }
            return $this->_pending_organization;
        }
        return new PendingOrganizationEntity($this, $data);
    }


    private $_plugin = null;

    // Canonical facade: $client->Plugin()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->plugin()
    // resolves here too.
    public function Plugin($data = null)
    {
        require_once __DIR__ . '/entity/plugin_entity.php';
        if ($data === null) {
            if ($this->_plugin === null) {
                $this->_plugin = new PluginEntity($this, null);
            }
            return $this->_plugin;
        }
        return new PluginEntity($this, $data);
    }


    private $_plugin_data = null;

    // Canonical facade: $client->PluginData()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->plugin_data()
    // resolves here too.
    public function PluginData($data = null)
    {
        require_once __DIR__ . '/entity/plugin_data_entity.php';
        if ($data === null) {
            if ($this->_plugin_data === null) {
                $this->_plugin_data = new PluginDataEntity($this, null);
            }
            return $this->_plugin_data;
        }
        return new PluginDataEntity($this, $data);
    }


    private $_plugin_listing = null;

    // Canonical facade: $client->PluginListing()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->plugin_listing()
    // resolves here too.
    public function PluginListing($data = null)
    {
        require_once __DIR__ . '/entity/plugin_listing_entity.php';
        if ($data === null) {
            if ($this->_plugin_listing === null) {
                $this->_plugin_listing = new PluginListingEntity($this, null);
            }
            return $this->_plugin_listing;
        }
        return new PluginListingEntity($this, $data);
    }


    private $_reaction = null;

    // Canonical facade: $client->Reaction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->reaction()
    // resolves here too.
    public function Reaction($data = null)
    {
        require_once __DIR__ . '/entity/reaction_entity.php';
        if ($data === null) {
            if ($this->_reaction === null) {
                $this->_reaction = new ReactionEntity($this, null);
            }
            return $this->_reaction;
        }
        return new ReactionEntity($this, $data);
    }


    private $_read = null;

    // Canonical facade: $client->Read()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->read()
    // resolves here too.
    public function Read($data = null)
    {
        require_once __DIR__ . '/entity/read_entity.php';
        if ($data === null) {
            if ($this->_read === null) {
                $this->_read = new ReadEntity($this, null);
            }
            return $this->_read;
        }
        return new ReadEntity($this, $data);
    }


    private $_saved_search = null;

    // Canonical facade: $client->SavedSearch()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->saved_search()
    // resolves here too.
    public function SavedSearch($data = null)
    {
        require_once __DIR__ . '/entity/saved_search_entity.php';
        if ($data === null) {
            if ($this->_saved_search === null) {
                $this->_saved_search = new SavedSearchEntity($this, null);
            }
            return $this->_saved_search;
        }
        return new SavedSearchEntity($this, $data);
    }


    private $_search = null;

    // Canonical facade: $client->Search()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->search()
    // resolves here too.
    public function Search($data = null)
    {
        require_once __DIR__ . '/entity/search_entity.php';
        if ($data === null) {
            if ($this->_search === null) {
                $this->_search = new SearchEntity($this, null);
            }
            return $this->_search;
        }
        return new SearchEntity($this, $data);
    }


    private $_show_sidebar = null;

    // Canonical facade: $client->ShowSidebar()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->show_sidebar()
    // resolves here too.
    public function ShowSidebar($data = null)
    {
        require_once __DIR__ . '/entity/show_sidebar_entity.php';
        if ($data === null) {
            if ($this->_show_sidebar === null) {
                $this->_show_sidebar = new ShowSidebarEntity($this, null);
            }
            return $this->_show_sidebar;
        }
        return new ShowSidebarEntity($this, $data);
    }


    private $_show_sidebar_activity = null;

    // Canonical facade: $client->ShowSidebarActivity()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->show_sidebar_activity()
    // resolves here too.
    public function ShowSidebarActivity($data = null)
    {
        require_once __DIR__ . '/entity/show_sidebar_activity_entity.php';
        if ($data === null) {
            if ($this->_show_sidebar_activity === null) {
                $this->_show_sidebar_activity = new ShowSidebarActivityEntity($this, null);
            }
            return $this->_show_sidebar_activity;
        }
        return new ShowSidebarActivityEntity($this, $data);
    }


    private $_show_sidebar_board_action = null;

    // Canonical facade: $client->ShowSidebarBoardAction()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->show_sidebar_board_action()
    // resolves here too.
    public function ShowSidebarBoardAction($data = null)
    {
        require_once __DIR__ . '/entity/show_sidebar_board_action_entity.php';
        if ($data === null) {
            if ($this->_show_sidebar_board_action === null) {
                $this->_show_sidebar_board_action = new ShowSidebarBoardActionEntity($this, null);
            }
            return $this->_show_sidebar_board_action;
        }
        return new ShowSidebarBoardActionEntity($this, $data);
    }


    private $_show_sidebar_member = null;

    // Canonical facade: $client->ShowSidebarMember()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->show_sidebar_member()
    // resolves here too.
    public function ShowSidebarMember($data = null)
    {
        require_once __DIR__ . '/entity/show_sidebar_member_entity.php';
        if ($data === null) {
            if ($this->_show_sidebar_member === null) {
                $this->_show_sidebar_member = new ShowSidebarMemberEntity($this, null);
            }
            return $this->_show_sidebar_member;
        }
        return new ShowSidebarMemberEntity($this, $data);
    }


    private $_sticker = null;

    // Canonical facade: $client->Sticker()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->sticker()
    // resolves here too.
    public function Sticker($data = null)
    {
        require_once __DIR__ . '/entity/sticker_entity.php';
        if ($data === null) {
            if ($this->_sticker === null) {
                $this->_sticker = new StickerEntity($this, null);
            }
            return $this->_sticker;
        }
        return new StickerEntity($this, $data);
    }


    private $_tag = null;

    // Canonical facade: $client->Tag()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->tag()
    // resolves here too.
    public function Tag($data = null)
    {
        require_once __DIR__ . '/entity/tag_entity.php';
        if ($data === null) {
            if ($this->_tag === null) {
                $this->_tag = new TagEntity($this, null);
            }
            return $this->_tag;
        }
        return new TagEntity($this, $data);
    }


    private $_token = null;

    // Canonical facade: $client->Token()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->token()
    // resolves here too.
    public function Token($data = null)
    {
        require_once __DIR__ . '/entity/token_entity.php';
        if ($data === null) {
            if ($this->_token === null) {
                $this->_token = new TokenEntity($this, null);
            }
            return $this->_token;
        }
        return new TokenEntity($this, $data);
    }


    private $_transferrable_organization = null;

    // Canonical facade: $client->TransferrableOrganization()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->transferrable_organization()
    // resolves here too.
    public function TransferrableOrganization($data = null)
    {
        require_once __DIR__ . '/entity/transferrable_organization_entity.php';
        if ($data === null) {
            if ($this->_transferrable_organization === null) {
                $this->_transferrable_organization = new TransferrableOrganizationEntity($this, null);
            }
            return $this->_transferrable_organization;
        }
        return new TransferrableOrganizationEntity($this, $data);
    }


    private $_trello_list = null;

    // Canonical facade: $client->TrelloList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->trello_list()
    // resolves here too.
    public function TrelloList($data = null)
    {
        require_once __DIR__ . '/entity/trello_list_entity.php';
        if ($data === null) {
            if ($this->_trello_list === null) {
                $this->_trello_list = new TrelloListEntity($this, null);
            }
            return $this->_trello_list;
        }
        return new TrelloListEntity($this, $data);
    }


    private $_webhook = null;

    // Canonical facade: $client->Webhook()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook()
    // resolves here too.
    public function Webhook($data = null)
    {
        require_once __DIR__ . '/entity/webhook_entity.php';
        if ($data === null) {
            if ($this->_webhook === null) {
                $this->_webhook = new WebhookEntity($this, null);
            }
            return $this->_webhook;
        }
        return new WebhookEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new TrelloSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
