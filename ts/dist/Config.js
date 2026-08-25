"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const TestFeature_1 = require("./feature/test/TestFeature");
const FEATURE_CLASS = {
    test: TestFeature_1.TestFeature,
};
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'Trello',
        slug: "trello",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        test: {
            "options": {
                "active": false
            },
            "transport": "base"
        },
    };
    options = {
        base: "https://api.trello.com/1",
        auth: {
            prefix: '',
        },
        headers: {
            "content-type": "application/json"
        },
        entity: {
            action: {},
            action_reactions_summary: {},
            admin: {},
            application: {},
            application_compliance: {},
            associated_domain: {},
            attachment: {},
            batch: {},
            board: {},
            board_background: {},
            board_plugin: {},
            board_star: {},
            bulk: {},
            card: {},
            card_check_item_state: {},
            card_list: {},
            check_item: {},
            checklist: {},
            claimable_organization: {},
            custom_board_background: {},
            custom_emoji: {},
            custom_field: {},
            custom_field_item: {},
            custom_sticker: {},
            email_position: {},
            emoji: {},
            enterpris: {},
            enterpris_signup_url: {},
            enterprise_admin: {},
            enterprise_audit_log: {},
            export: {},
            export_download: {},
            generate: {},
            id_email_list: {},
            id_label: {},
            id_member: {},
            label: {},
            list: {},
            member: {},
            member_privacy: {},
            members_voted: {},
            membership: {},
            most_recent: {},
            new_billable_guest: {},
            notification: {},
            notification_channel_setting: {},
            notification_list: {},
            notification_member_creator: {},
            notifications_channel_setting: {},
            option: {},
            org_invite_restrict: {},
            organization: {},
            pending_organization: {},
            plugin: {},
            plugin_data: {},
            plugin_listing: {},
            reaction: {},
            read: {},
            saved_search: {},
            search: {},
            show_sidebar: {},
            show_sidebar_activity: {},
            show_sidebar_board_action: {},
            show_sidebar_member: {},
            sticker: {},
            tag: {},
            token: {},
            transferrable_organization: {},
            trello_list: {},
            webhook: {},
        }
    };
    entity = {
        "action": {
            "fields": [
                {
                    "name": "data",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "date",
                    "type": "`$STRING`"
                },
                {
                    "name": "display",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMemberCreator",
                    "type": "`$STRING`"
                },
                {
                    "name": "limits",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "memberCreator",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "native",
                    "short": "The emoji to add as a native unicode emoji.",
                    "type": "`$STRING`"
                },
                {
                    "name": "shortName",
                    "short": "The primary `shortName` of the emoji to add.",
                    "type": "`$STRING`"
                },
                {
                    "name": "skinVariation",
                    "short": "The `skinVariation` of the emoji to add.",
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                },
                {
                    "name": "unified",
                    "short": "The `unified` value of the emoji to add.",
                    "type": "`$STRING`"
                }
            ],
            "name": "action",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "text",
                                        "orig": "text",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/actions/comments",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "actions",
                                "comments"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "$action": "comment",
                                "exist": [
                                    "card_id",
                                    "text"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/actions/{idAction}/reactions",
                            "parts": [
                                "actions",
                                "{id_action}",
                                "reactions"
                            ],
                            "rename": {
                                "param": {
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "$action": "reaction",
                                "exist": [
                                    "id_action"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "commentCard, updateCard:idList",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/actions",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "actions"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "filter",
                                    "page"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/actions",
                            "parts": [
                                "members",
                                "{member_id}",
                                "actions"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/actions",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "actions"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "board_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "before",
                                        "orig": "before",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$OBJECT`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "list",
                                        "kind": "query",
                                        "name": "format",
                                        "orig": "format",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_model",
                                        "orig": "id_model",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member_creator",
                                        "orig": "member_creator",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
                                        "kind": "query",
                                        "name": "member_creator_field",
                                        "orig": "member_creator_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "reaction",
                                        "orig": "reaction",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "since",
                                        "orig": "since",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{boardId}/actions",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "actions"
                            ],
                            "rename": {
                                "param": {
                                    "boardId": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "before",
                                    "board_id",
                                    "field",
                                    "filter",
                                    "format",
                                    "id_model",
                                    "limit",
                                    "member",
                                    "member_creator",
                                    "member_creator_field",
                                    "member_field",
                                    "page",
                                    "reaction",
                                    "since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "display",
                                        "orig": "display",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "entity",
                                        "orig": "entity",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member_creator",
                                        "orig": "member_creator",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "member_creator_field",
                                        "orig": "member_creator_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}",
                            "parts": [
                                "actions",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "display",
                                    "entity",
                                    "field",
                                    "id",
                                    "member",
                                    "member_creator",
                                    "member_creator_field",
                                    "member_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/{field}",
                            "parts": [
                                "actions",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "list_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lists/{id}/actions",
                            "parts": [
                                "lists",
                                "{list_id}",
                                "actions"
                            ],
                            "rename": {
                                "param": {
                                    "id": "list_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "list_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/actions/{idAction}/comments",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "actions",
                                "{id_action}",
                                "comments"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "$action": "comment",
                                "exist": [
                                    "card_id",
                                    "id_action"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/actions/{id}",
                            "parts": [
                                "actions",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "text",
                                        "orig": "text",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{id}/actions/{idAction}/comments",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "actions",
                                "{id_action}",
                                "comments"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "$action": "comment",
                                "exist": [
                                    "card_id",
                                    "id_action",
                                    "text"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "text",
                                        "orig": "text",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/actions/{id}",
                            "parts": [
                                "actions",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "text"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/actions/{id}/text",
                            "parts": [
                                "actions",
                                "{id}",
                                "text"
                            ],
                            "select": {
                                "$action": "text",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ],
                    [
                        "card"
                    ],
                    [
                        "list"
                    ],
                    [
                        "member"
                    ],
                    [
                        "organization"
                    ],
                    [
                        "card",
                        "action"
                    ]
                ]
            }
        },
        "action_reactions_summary": {
            "fields": [],
            "name": "action_reactions_summary",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{idAction}/reactionsSummary",
                            "parts": [
                                "actions",
                                "{id_action}",
                                "reactionsSummary"
                            ],
                            "rename": {
                                "param": {
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id_action"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ]
                ]
            }
        },
        "admin": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "admin",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/enterprises/{id}/admins/{idMember}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "admins",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/enterprises/{id}/admins/{idMember}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "admins",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "application": {
            "fields": [],
            "name": "application",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "application"
                    ]
                ]
            }
        },
        "application_compliance": {
            "fields": [],
            "name": "application_compliance",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "key",
                                        "orig": "key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/applications/{key}/compliance",
                            "parts": [
                                "applications",
                                "{key}",
                                "compliance"
                            ],
                            "select": {
                                "exist": [
                                    "key"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "application"
                    ]
                ]
            }
        },
        "associated_domain": {
            "fields": [],
            "name": "associated_domain",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/prefs/associatedDomain",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "prefs",
                                "associatedDomain"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "organization"
                    ]
                ]
            }
        },
        "attachment": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "attachment",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "false",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/attachments",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "attachments"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field",
                                    "filter"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_attachment",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": [
                                            "all"
                                        ],
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$ARRAY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/attachments/{idAttachment}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "attachments",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idAttachment": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_attachment",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_attachment",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/attachments/{idAttachment}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "attachments",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idAttachment": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "batch": {
            "fields": [],
            "name": "batch",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/batch",
                            "parts": [
                                "batch"
                            ],
                            "select": {
                                "exist": [
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "board": {
            "fields": [
                {
                    "name": "closed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "creationMethod",
                    "type": "`$STRING`"
                },
                {
                    "name": "dateLastActivity",
                    "type": "`$STRING`"
                },
                {
                    "name": "dateLastView",
                    "type": "`$STRING`"
                },
                {
                    "name": "datePluginDisable",
                    "type": "`$STRING`"
                },
                {
                    "name": "desc",
                    "type": "`$STRING`"
                },
                {
                    "name": "descData",
                    "type": "`$STRING`"
                },
                {
                    "name": "enterpriseOwned",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "fullName",
                    "short": "The full name of the user to as a member of the board.",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "req": true,
                    "type": "`$STRING`"
                },
                {
                    "name": "idMemberCreator",
                    "type": "`$STRING`"
                },
                {
                    "name": "idOrganization",
                    "type": "`$STRING`"
                },
                {
                    "name": "idTags",
                    "type": "`$STRING`"
                },
                {
                    "name": "ixUpdate",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "labelNames",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "limits",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "memberships",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name of the board.",
                    "type": "`$STRING`"
                },
                {
                    "name": "pinned",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "powerUps",
                    "type": "`$STRING`"
                },
                {
                    "name": "prefs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "shortLink",
                    "type": "`$STRING`"
                },
                {
                    "name": "shortUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "starred",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "subscribed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "templateGallery",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                }
            ],
            "name": "board",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "default_label",
                                        "orig": "default_label",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "default_list",
                                        "orig": "default_list",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board_source",
                                        "orig": "id_board_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "keep_from_source",
                                        "orig": "keep_from_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "power_up",
                                        "orig": "power_up",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "blue",
                                        "kind": "query",
                                        "name": "prefs_background",
                                        "orig": "prefs_background",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "regular",
                                        "kind": "query",
                                        "name": "prefs_card_aging",
                                        "orig": "prefs_card_aging",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "prefs_card_cover",
                                        "orig": "prefs_card_cover",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "members",
                                        "kind": "query",
                                        "name": "prefs_comment",
                                        "orig": "prefs_comment",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "members",
                                        "kind": "query",
                                        "name": "prefs_invitation",
                                        "orig": "prefs_invitation",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "private",
                                        "kind": "query",
                                        "name": "prefs_permission_level",
                                        "orig": "prefs_permission_level",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "prefs_self_join",
                                        "orig": "prefs_self_join",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "disabled",
                                        "kind": "query",
                                        "name": "prefs_voting",
                                        "orig": "prefs_voting",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/",
                            "parts": [
                                "boards"
                            ],
                            "select": {
                                "exist": [
                                    "default_label",
                                    "default_list",
                                    "desc",
                                    "id_board_source",
                                    "id_organization",
                                    "keep_from_source",
                                    "name",
                                    "power_up",
                                    "prefs_background",
                                    "prefs_card_aging",
                                    "prefs_card_cover",
                                    "prefs_comment",
                                    "prefs_invitation",
                                    "prefs_permission_level",
                                    "prefs_self_join",
                                    "prefs_voting"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "color",
                                        "orig": "color",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/labels",
                            "parts": [
                                "boards",
                                "{id}",
                                "labels"
                            ],
                            "select": {
                                "$action": "label",
                                "exist": [
                                    "color",
                                    "id",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_plugin",
                                        "orig": "id_plugin",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/boardPlugins",
                            "parts": [
                                "boards",
                                "{id}",
                                "boardPlugins"
                            ],
                            "select": {
                                "$action": "board_plugin",
                                "exist": [
                                    "id",
                                    "id_plugin"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/idTags",
                            "parts": [
                                "boards",
                                "{id}",
                                "idTags"
                            ],
                            "select": {
                                "$action": "id_tag",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/markedAsViewed",
                            "parts": [
                                "boards",
                                "{id}",
                                "markedAsViewed"
                            ],
                            "select": {
                                "$action": "marked_as_viewed",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "list",
                                        "orig": "list",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "name,displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boards",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "filter",
                                    "list",
                                    "member_id",
                                    "organization",
                                    "organization_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/boards",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "boards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "filter",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boardsInvited",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardsInvited"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "action",
                                        "orig": "action",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "board_star",
                                        "orig": "board_star",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "card",
                                        "orig": "card",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card_plugin_data",
                                        "orig": "card_plugin_data",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "checklist",
                                        "orig": "checklist",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "custom_field",
                                        "orig": "custom_field",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "label",
                                        "orig": "label",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "open",
                                        "kind": "query",
                                        "name": "list",
                                        "orig": "list",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "membership",
                                        "orig": "membership",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "my_pref",
                                        "orig": "my_pref",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization_plugin_data",
                                        "orig": "organization_plugin_data",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "plugin_data",
                                        "orig": "plugin_data",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "tag",
                                        "orig": "tag",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}",
                            "parts": [
                                "boards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "action",
                                    "board_star",
                                    "card",
                                    "card_plugin_data",
                                    "checklist",
                                    "custom_field",
                                    "field",
                                    "id",
                                    "label",
                                    "list",
                                    "member",
                                    "membership",
                                    "my_pref",
                                    "organization",
                                    "organization_plugin_data",
                                    "plugin_data",
                                    "tag"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/board",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "board"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/board",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "board"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}/board",
                            "parts": [
                                "checklists",
                                "{checklist_id}",
                                "board"
                            ],
                            "rename": {
                                "param": {
                                    "id": "checklist_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/{field}",
                            "parts": [
                                "boards",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "list_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lists/{id}/board",
                            "parts": [
                                "lists",
                                "{list_id}",
                                "board"
                            ],
                            "rename": {
                                "param": {
                                    "id": "list_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "list_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "notification_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/board",
                            "parts": [
                                "notifications",
                                "{notification_id}",
                                "board"
                            ],
                            "rename": {
                                "param": {
                                    "id": "notification_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "notification_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/boards/{id}",
                            "parts": [
                                "boards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "closed",
                                        "orig": "closed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/background",
                                        "orig": "prefs/background",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/calendar_feed_enabled",
                                        "orig": "prefs/calendar_feed_enabled",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/card_aging",
                                        "orig": "prefs/card_aging",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/card_cover",
                                        "orig": "prefs/card_cover",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/comment",
                                        "orig": "prefs/comment",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/hide_vote",
                                        "orig": "prefs/hide_vote",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/invitation",
                                        "orig": "prefs/invitation",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/permission_level",
                                        "orig": "prefs/permission_level",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/self_join",
                                        "orig": "prefs/self_join",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/voting",
                                        "orig": "prefs/voting",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "subscribed",
                                        "orig": "subscribed",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}",
                            "parts": [
                                "boards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "closed",
                                    "desc",
                                    "id",
                                    "id_organization",
                                    "name",
                                    "prefs/background",
                                    "prefs/calendar_feed_enabled",
                                    "prefs/card_aging",
                                    "prefs/card_cover",
                                    "prefs/comment",
                                    "prefs/hide_vote",
                                    "prefs/invitation",
                                    "prefs/permission_level",
                                    "prefs/self_join",
                                    "prefs/voting",
                                    "subscribed"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "email",
                                        "orig": "email",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "normal",
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/members",
                            "parts": [
                                "boards",
                                "{id}",
                                "members"
                            ],
                            "select": {
                                "$action": "member",
                                "exist": [
                                    "email",
                                    "id",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "card"
                    ],
                    [
                        "checklist"
                    ],
                    [
                        "list"
                    ],
                    [
                        "member"
                    ],
                    [
                        "notification"
                    ],
                    [
                        "organization"
                    ]
                ]
            }
        },
        "board_background": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "board_background",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/customBoardBackgrounds",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customBoardBackgrounds"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "file",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boardBackgrounds",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardBackgrounds"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customBoardBackgrounds",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customBoardBackgrounds"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardBackgrounds",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_background",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customBoardBackgrounds",
                                "{id_background}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id_background"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id_background",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/members/{id}/boardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardBackgrounds",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "brightness",
                                        "orig": "brightness",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "tile",
                                        "orig": "tile",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/boardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardBackgrounds",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "brightness",
                                    "id",
                                    "member_id",
                                    "tile"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_background",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "brightness",
                                        "orig": "brightness",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "tile",
                                        "orig": "tile",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customBoardBackgrounds",
                                "{id_background}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id_background"
                                }
                            },
                            "select": {
                                "exist": [
                                    "brightness",
                                    "id_background",
                                    "member_id",
                                    "tile"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ],
                    [
                        "member",
                        "custom_board_background"
                    ]
                ]
            }
        },
        "board_plugin": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "board_plugin",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_plugin",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/boards/{id}/boardPlugins/{idPlugin}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "boardPlugins",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idPlugin": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "board_star": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idBoard",
                    "type": "`$STRING`"
                },
                {
                    "name": "pos",
                    "type": "`$INTEGER`"
                }
            ],
            "name": "board_star",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "reqd": true,
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/boardStars",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardStars"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id_board",
                                    "member_id",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "board_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "mine",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{boardId}/boardStars",
                            "parts": [
                                "boards",
                                "{id}",
                                "boardStars"
                            ],
                            "rename": {
                                "param": {
                                    "boardId": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_star",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boardStars/{idStar}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardStars",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idStar": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/boardStars",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardStars"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_star",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/members/{id}/boardStars/{idStar}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardStars",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idStar": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_star",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/boardStars/{idStar}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "boardStars",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idStar": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "bulk": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "bulk",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_organization",
                                        "reqd": true,
                                        "type": "`$ARRAY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/organizations/bulk/{idOrganizations}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "organizations",
                                "bulk",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idOrganizations": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_organization",
                                        "reqd": true,
                                        "type": "`$ARRAY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/transferrable/bulk/{idOrganizations}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "transferrable",
                                "bulk",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idOrganizations": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "reqd": true,
                                        "type": "`$ARRAY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/enterprises/${id}/enterpriseJoinRequest/bulk",
                            "parts": [
                                "enterprises",
                                "${id}",
                                "enterpriseJoinRequest",
                                "bulk"
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "id_organization"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "card": {
            "fields": [
                {
                    "name": "address",
                    "type": "`$STRING`"
                },
                {
                    "name": "badges",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "cardRole",
                    "type": "`$STRING`"
                },
                {
                    "name": "checkItemStates",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "closed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "coordinates",
                    "type": "`$STRING`"
                },
                {
                    "name": "cover",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "creationMethod",
                    "type": "`$STRING`"
                },
                {
                    "name": "customFieldItems",
                    "short": "An array of objects containing the custom field ID, key and value, and ID of list type option.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "dateLastActivity",
                    "type": "`$STRING`"
                },
                {
                    "name": "desc",
                    "type": "`$STRING`"
                },
                {
                    "name": "descData",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "due",
                    "type": "`$STRING`"
                },
                {
                    "name": "dueReminder",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idAttachmentCover",
                    "type": "`$STRING`"
                },
                {
                    "name": "idBoard",
                    "type": "`$STRING`"
                },
                {
                    "name": "idChecklists",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "idLabels",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 1
                    }
                },
                {
                    "name": "idList",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMembers",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idMembersVoted",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idShort",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "labels",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "limits",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "locationName",
                    "type": "`$STRING`"
                },
                {
                    "name": "manualCoverAttachment",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "mirrorSourceId",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "pos",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "shortLink",
                    "type": "`$STRING`"
                },
                {
                    "name": "shortUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscribed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                }
            ],
            "name": "card",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "address",
                                        "orig": "address",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "card_role",
                                        "orig": "card_role",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "coordinate",
                                        "orig": "coordinate",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due",
                                        "orig": "due",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due_complete",
                                        "orig": "due_complete",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "file_source",
                                        "orig": "file_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_card_source",
                                        "orig": "id_card_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_label",
                                        "orig": "id_label",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_list",
                                        "orig": "id_list",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "keep_from_source",
                                        "orig": "keep_from_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "location_name",
                                        "orig": "location_name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "mime_type",
                                        "orig": "mime_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "url_source",
                                        "orig": "url_source",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards",
                            "parts": [
                                "cards"
                            ],
                            "select": {
                                "exist": [
                                    "address",
                                    "card_role",
                                    "coordinate",
                                    "desc",
                                    "due",
                                    "due_complete",
                                    "file_source",
                                    "id_card_source",
                                    "id_label",
                                    "id_list",
                                    "id_member",
                                    "keep_from_source",
                                    "location_name",
                                    "mime_type",
                                    "name",
                                    "pos",
                                    "start",
                                    "url_source"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "mime_type",
                                        "orig": "mime_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "set_cover",
                                        "orig": "set_cover",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "url",
                                        "orig": "url",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/attachments",
                            "parts": [
                                "cards",
                                "{id}",
                                "attachments"
                            ],
                            "select": {
                                "$action": "attachment",
                                "exist": [
                                    "file",
                                    "id",
                                    "mime_type",
                                    "name",
                                    "set_cover",
                                    "url"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "image",
                                        "orig": "image",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "left",
                                        "orig": "left",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "rotate",
                                        "orig": "rotate",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "top",
                                        "orig": "top",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "z_index",
                                        "orig": "z_index",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/stickers",
                            "parts": [
                                "cards",
                                "{id}",
                                "stickers"
                            ],
                            "select": {
                                "$action": "sticker",
                                "exist": [
                                    "id",
                                    "image",
                                    "left",
                                    "rotate",
                                    "top",
                                    "z_index"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_checklist_source",
                                        "orig": "id_checklist_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/checklists",
                            "parts": [
                                "cards",
                                "{id}",
                                "checklists"
                            ],
                            "select": {
                                "$action": "checklist",
                                "exist": [
                                    "id",
                                    "id_checklist_source",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "color",
                                        "orig": "color",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/labels",
                            "parts": [
                                "cards",
                                "{id}",
                                "labels"
                            ],
                            "select": {
                                "$action": "label",
                                "exist": [
                                    "color",
                                    "id",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/idLabels",
                            "parts": [
                                "cards",
                                "{id}",
                                "idLabels"
                            ],
                            "select": {
                                "$action": "id_label",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/idMembers",
                            "parts": [
                                "cards",
                                "{id}",
                                "idMembers"
                            ],
                            "select": {
                                "$action": "id_member",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/membersVoted",
                            "parts": [
                                "cards",
                                "{id}",
                                "membersVoted"
                            ],
                            "select": {
                                "$action": "members_voted",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/cards/{id}/markAssociatedNotificationsRead",
                            "parts": [
                                "cards",
                                "{id}",
                                "markAssociatedNotificationsRead"
                            ],
                            "select": {
                                "$action": "mark_associated_notifications_read",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/card",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "card"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "visible",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/cards",
                            "parts": [
                                "members",
                                "{member_id}",
                                "cards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "list_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lists/{id}/cards",
                            "parts": [
                                "lists",
                                "{list_id}",
                                "cards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "list_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "list_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "action",
                                        "orig": "action",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "attachment",
                                        "orig": "attachment",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "attachment_field",
                                        "orig": "attachment_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "board",
                                        "orig": "board",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "check_item_state",
                                        "orig": "check_item_state",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "checklist",
                                        "orig": "checklist",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "checklist_field",
                                        "orig": "checklist_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "custom_field_item",
                                        "orig": "custom_field_item",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "list",
                                        "orig": "list",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "member_voted_field",
                                        "orig": "member_voted_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "members_voted",
                                        "orig": "members_voted",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "plugin_data",
                                        "orig": "plugin_data",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "sticker",
                                        "orig": "sticker",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "sticker_field",
                                        "orig": "sticker_field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}",
                            "parts": [
                                "cards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "action",
                                    "attachment",
                                    "attachment_field",
                                    "board",
                                    "board_field",
                                    "check_item_state",
                                    "checklist",
                                    "checklist_field",
                                    "custom_field_item",
                                    "field",
                                    "id",
                                    "list",
                                    "member",
                                    "member_field",
                                    "member_voted_field",
                                    "members_voted",
                                    "plugin_data",
                                    "sticker",
                                    "sticker_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "filter",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/cards/{filter}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "cards",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "filter": "id",
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/{field}",
                            "parts": [
                                "cards",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "notification_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/card",
                            "parts": [
                                "notifications",
                                "{notification_id}",
                                "card"
                            ],
                            "rename": {
                                "param": {
                                    "id": "notification_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "notification_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/cards",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "cards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}/cards",
                            "parts": [
                                "checklists",
                                "{checklist_id}",
                                "cards"
                            ],
                            "rename": {
                                "param": {
                                    "id": "checklist_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}",
                            "parts": [
                                "cards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "address",
                                        "orig": "address",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "closed",
                                        "orig": "closed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "coordinate",
                                        "orig": "coordinate",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "cover",
                                        "orig": "cover",
                                        "type": "`$OBJECT`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due",
                                        "orig": "due",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due_complete",
                                        "orig": "due_complete",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_attachment_cover",
                                        "orig": "id_attachment_cover",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_label",
                                        "orig": "id_label",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_list",
                                        "orig": "id_list",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "location_name",
                                        "orig": "location_name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start",
                                        "orig": "start",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "subscribed",
                                        "orig": "subscribed",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{id}",
                            "parts": [
                                "cards",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "address",
                                    "closed",
                                    "coordinate",
                                    "cover",
                                    "desc",
                                    "due",
                                    "due_complete",
                                    "id",
                                    "id_attachment_cover",
                                    "id_board",
                                    "id_label",
                                    "id_list",
                                    "id_member",
                                    "location_name",
                                    "name",
                                    "pos",
                                    "start",
                                    "subscribed"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{idCard}/customFields",
                            "parts": [
                                "cards",
                                "{id_card}",
                                "customFields"
                            ],
                            "rename": {
                                "param": {
                                    "idCard": "id_card"
                                }
                            },
                            "select": {
                                "$action": "custom_field"
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "board"
                    ],
                    [
                        "card"
                    ],
                    [
                        "checklist"
                    ],
                    [
                        "list"
                    ],
                    [
                        "member"
                    ],
                    [
                        "notification"
                    ]
                ]
            }
        },
        "card_check_item_state": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "card_check_item_state",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/checkItemStates",
                            "parts": [
                                "cards",
                                "{id}",
                                "checkItemStates"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "card_list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "card_list",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/list",
                            "parts": [
                                "cards",
                                "{id}",
                                "list"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "check_item": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idChecklist",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "nameData",
                    "type": "`$STRING`"
                },
                {
                    "name": "pos",
                    "type": "`$STRING`"
                },
                {
                    "name": "state",
                    "type": "`$STRING`"
                }
            ],
            "name": "check_item",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name,nameData,pos,state,due,dueReminder,idMember",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/checkItem/{idCheckItem}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "checkItem",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idCheckItem": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name, nameData, pos, state, due, dueReminder, idMember",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}/checkItems",
                            "parts": [
                                "checklists",
                                "{checklist_id}",
                                "checkItems"
                            ],
                            "rename": {
                                "param": {
                                    "id": "checklist_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id",
                                    "field",
                                    "filter"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name, nameData, pos, state, due, dueReminder, idMember",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}/checkItems/{idCheckItem}",
                            "parts": [
                                "checklists",
                                "{checklist_id}",
                                "checkItems",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "checklist_id",
                                    "idCheckItem": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id",
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/checkItem/{idCheckItem}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "checkItem",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idCheckItem": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/checklists/{id}/checkItems/{idCheckItem}",
                            "parts": [
                                "checklists",
                                "{checklist_id}",
                                "checkItems",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "checklist_id",
                                    "idCheckItem": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "due",
                                        "orig": "due",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due_reminder",
                                        "orig": "due_reminder",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_checklist",
                                        "orig": "id_checklist",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "state",
                                        "orig": "state",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{id}/checkItem/{idCheckItem}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "checkItem",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idCheckItem": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "due",
                                    "due_reminder",
                                    "id",
                                    "id_checklist",
                                    "id_member",
                                    "name",
                                    "pos",
                                    "state"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "checklist_id",
                                        "orig": "id_checklist",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_check_item",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_card",
                                        "orig": "id_card",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
                            "parts": [
                                "cards",
                                "{id_card}",
                                "checklist",
                                "{checklist_id}",
                                "checkItem",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idCard": "id_card",
                                    "idCheckItem": "id",
                                    "idChecklist": "checklist_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "checklist_id",
                                    "id",
                                    "id_card",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ],
                    [
                        "card",
                        "checklist"
                    ]
                ]
            }
        },
        "checklist": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "checklist",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "checked",
                                        "orig": "checked",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due",
                                        "orig": "due",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "due_reminder",
                                        "orig": "due_reminder",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "bottom",
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/checklists/{id}/checkItems",
                            "parts": [
                                "checklists",
                                "{id}",
                                "checkItems"
                            ],
                            "select": {
                                "$action": "check_item",
                                "exist": [
                                    "checked",
                                    "due",
                                    "due_reminder",
                                    "id",
                                    "id_member",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_card",
                                        "orig": "id_card",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_checklist_source",
                                        "orig": "id_checklist_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/checklists",
                            "parts": [
                                "checklists"
                            ],
                            "select": {
                                "exist": [
                                    "id_card",
                                    "id_checklist_source",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "card",
                                        "orig": "card",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "check_item",
                                        "orig": "check_item",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "name, nameData, pos, state, due, dueReminder, idMember",
                                        "kind": "query",
                                        "name": "check_item_field",
                                        "orig": "check_item_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}",
                            "parts": [
                                "checklists",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "card",
                                    "check_item",
                                    "check_item_field",
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "check_item",
                                        "orig": "check_item",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "name,nameData,pos,state,due,dueReminder,idMember",
                                        "kind": "query",
                                        "name": "check_item_field",
                                        "orig": "check_item_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/checklists",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "checklists"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "check_item",
                                    "check_item_field",
                                    "field",
                                    "filter"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/checklists/{id}/{field}",
                            "parts": [
                                "checklists",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/checklists",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "checklists"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_checklist",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/checklists/{idChecklist}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "checklists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idChecklist": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/checklists/{id}",
                            "parts": [
                                "checklists",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/checklists/{id}/{field}",
                            "parts": [
                                "checklists",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/checklists/{id}",
                            "parts": [
                                "checklists",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ],
                    [
                        "card"
                    ]
                ]
            }
        },
        "claimable_organization": {
            "fields": [
                {
                    "name": "activeMembershipCount",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "dateLastActive",
                    "short": "The date of the most recent activity on any of the boards in the workspace.",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idActiveAdmins",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "logoUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "products",
                    "type": "`$ARRAY`"
                }
            ],
            "name": "claimable_organization",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "active_since",
                                        "orig": "active_since",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "inactive_since",
                                        "orig": "inactive_since",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/claimableOrganizations",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "claimableOrganizations"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "active_since",
                                    "cursor",
                                    "enterpris_id",
                                    "inactive_since",
                                    "limit",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.organizations`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "custom_board_background": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "custom_board_background",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_background",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customBoardBackgrounds",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idBackground": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "custom_emoji": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                }
            ],
            "name": "custom_emoji",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/customEmoji",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customEmoji"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "file",
                                    "member_id",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customEmoji",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customEmoji"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_emoji",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customEmoji/{idEmoji}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customEmoji",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idEmoji": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "custom_field": {
            "fields": [
                {
                    "name": "cardFront",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "display",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "display_cardFront",
                    "short": "Whether this Custom Field should be shown on the front of Cards",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "displaycardFront",
                    "short": "Whether to display this custom field on the front of cards",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "fieldGroup",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idModel",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The ID of the model for which the Custom Field is being defined.",
                    "type": "`$STRING`"
                },
                {
                    "name": "modelType",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The type of model that the Custom Field is being defined on.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "short": "The name of the Custom Field",
                    "type": "`$STRING`"
                },
                {
                    "name": "options",
                    "short": "If the type is `checkbox`",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "pos",
                    "op": {
                        "create": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    },
                    "type": "`$STRING`"
                },
                {
                    "name": "type",
                    "op": {
                        "list": {
                            "type": "`$STRING`"
                        }
                    },
                    "req": true,
                    "short": "The type of Custom Field to create.",
                    "type": "`$STRING`"
                }
            ],
            "name": "custom_field",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/customFields/{id}/options",
                            "parts": [
                                "customFields",
                                "{id}",
                                "options"
                            ],
                            "select": {
                                "$action": "option",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/customFields",
                            "parts": [
                                "customFields"
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.display`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/customFields",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "customFields"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customFields/{id}",
                            "parts": [
                                "customFields",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.display`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/customFields/{id}",
                            "parts": [
                                "customFields",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_card",
                                        "orig": "id_card",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_custom_field",
                                        "orig": "id_custom_field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{idCard}/customField/{idCustomField}/item",
                            "parts": [
                                "cards",
                                "{id_card}",
                                "customField",
                                "{id_custom_field}",
                                "item"
                            ],
                            "rename": {
                                "param": {
                                    "idCard": "id_card",
                                    "idCustomField": "id_custom_field"
                                }
                            },
                            "select": {
                                "$action": "item",
                                "exist": [
                                    "id_card",
                                    "id_custom_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/customFields/{id}",
                            "parts": [
                                "customFields",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.display`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ],
                    [
                        "card",
                        "custom_field"
                    ]
                ]
            }
        },
        "custom_field_item": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idCustomField",
                    "type": "`$STRING`"
                },
                {
                    "name": "idModel",
                    "type": "`$STRING`"
                },
                {
                    "name": "modelType",
                    "type": "`$STRING`"
                },
                {
                    "name": "value",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "custom_field_item",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/customFieldItems",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "customFieldItems"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "custom_sticker": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "scaled",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                }
            ],
            "name": "custom_sticker",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/customStickers",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customStickers"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "file",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customStickers",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customStickers"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_sticker",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/customStickers/{idSticker}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customStickers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idSticker": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_sticker",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/members/{id}/customStickers/{idSticker}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "customStickers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idSticker": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "email_position": {
            "fields": [],
            "name": "email_position",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/emailPosition",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "emailPosition"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "emoji": {
            "fields": [
                {
                    "name": "category",
                    "type": "`$STRING`"
                },
                {
                    "name": "keywords",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "native",
                    "type": "`$STRING`"
                },
                {
                    "name": "sheetX",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "sheetY",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "shortName",
                    "type": "`$STRING`"
                },
                {
                    "name": "shortNames",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "text",
                    "type": "`$STRING`"
                },
                {
                    "name": "texts",
                    "type": "`$STRING`"
                },
                {
                    "name": "tts",
                    "type": "`$STRING`"
                },
                {
                    "name": "unified",
                    "type": "`$STRING`"
                }
            ],
            "name": "emoji",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "locale",
                                        "orig": "locale",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "spritesheet",
                                        "orig": "spritesheet",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/emoji",
                            "parts": [
                                "emoji"
                            ],
                            "select": {
                                "exist": [
                                    "locale",
                                    "spritesheet"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.trello`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "enterpris": {
            "fields": [
                {
                    "name": "dateOrganizationPrefsLastUpdated",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "type": "`$STRING`"
                },
                {
                    "name": "domains",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "enterpriseDomains",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idAdmins",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idOrganizations",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idp",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "isRealEnterprise",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "licenses",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "logoHash",
                    "type": "`$STRING`"
                },
                {
                    "name": "logoUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "organizationPrefs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "pluginWhitelistingEnabled",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "prefs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "products",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "ssoActivationFailed",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "enterpris",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "expiration",
                                        "orig": "expiration",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/enterprises/{id}/tokens",
                            "parts": [
                                "enterprises",
                                "{id}",
                                "tokens"
                            ],
                            "select": {
                                "$action": "token",
                                "exist": [
                                    "expiration",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "10",
                                        "kind": "query",
                                        "name": "member_count",
                                        "orig": "member_count",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "avatarHash, fullName, initials, username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "member_filter",
                                        "orig": "member_filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "member_sort",
                                        "orig": "member_sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "member_sort_by",
                                        "orig": "member_sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "id",
                                        "kind": "query",
                                        "name": "member_sort_order",
                                        "orig": "member_sort_order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "1",
                                        "kind": "query",
                                        "name": "member_start_index",
                                        "orig": "member_start_index",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "organization_membership",
                                        "orig": "organization_membership",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization_paid_account",
                                        "orig": "organization_paid_account",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}",
                            "parts": [
                                "enterprises",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "member",
                                    "member_count",
                                    "member_field",
                                    "member_filter",
                                    "member_sort",
                                    "member_sort_by",
                                    "member_sort_order",
                                    "member_start_index",
                                    "organization",
                                    "organization_field",
                                    "organization_membership",
                                    "organization_paid_account"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/enterprises/{id}/organizations",
                            "parts": [
                                "enterprises",
                                "{id}",
                                "organizations"
                            ],
                            "select": {
                                "$action": "organization",
                                "exist": [
                                    "id",
                                    "id_organization"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "enterpris_signup_url": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "signupUrl",
                    "type": "`$STRING`"
                }
            ],
            "name": "enterpris_signup_url",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "authenticate",
                                        "orig": "authenticate",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "confirmation_accepted",
                                        "orig": "confirmation_accepted",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "return_url",
                                        "orig": "return_url",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "tos_accepted",
                                        "orig": "tos_accepted",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/signupUrl",
                            "parts": [
                                "enterprises",
                                "{id}",
                                "signupUrl"
                            ],
                            "select": {
                                "exist": [
                                    "authenticate",
                                    "confirmation_accepted",
                                    "id",
                                    "return_url",
                                    "tos_accepted"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "enterprise_admin": {
            "fields": [
                {
                    "name": "fullName",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "username",
                    "type": "`$STRING`"
                }
            ],
            "name": "enterprise_admin",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "fullName, userName",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/admins",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "admins"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "enterprise_audit_log": {
            "fields": [
                {
                    "name": "date",
                    "type": "`$STRING`"
                },
                {
                    "name": "idAction",
                    "type": "`$STRING`"
                },
                {
                    "name": "member",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "memberCreator",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "organization",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                }
            ],
            "name": "enterprise_audit_log",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/auditlog",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "auditlog"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "export": {
            "fields": [
                {
                    "name": "attempts",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "exportUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "finished",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "size",
                    "type": "`$STRING`"
                },
                {
                    "name": "stage",
                    "type": "`$STRING`"
                },
                {
                    "name": "startedAt",
                    "type": "`$STRING`"
                },
                {
                    "name": "status",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "export",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "attachment",
                                        "orig": "attachment",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "attachment_age",
                                        "orig": "attachment_age",
                                        "type": "`$NUMBER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/exports",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "exports"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "attachment",
                                    "attachment_age",
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.status`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "attachment",
                                        "orig": "attachment",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations/{id}/exports",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "exports"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "attachment",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.status`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/exports",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "exports"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_export",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/exports/{idExport}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "exports",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idExport": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.status`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/exports/mostRecent",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "exports",
                                "mostRecent"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "$action": "most_recent",
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.status`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_export",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/boards/{id}/exports/{idExport}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "exports",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idExport": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ],
                    [
                        "organization"
                    ],
                    [
                        "board",
                        "export"
                    ]
                ]
            }
        },
        "export_download": {
            "fields": [],
            "name": "export_download",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_export",
                                        "orig": "id_export",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/exports/{idExport}/download",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "exports",
                                "{id_export}",
                                "download"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idExport": "id_export"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id_export"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board",
                        "export"
                    ]
                ]
            }
        },
        "generate": {
            "fields": [],
            "name": "generate",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/calendarKey/generate",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "calendarKey",
                                "generate"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/emailKey/generate",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "emailKey",
                                "generate"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "id_email_list": {
            "fields": [],
            "name": "id_email_list",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/idEmailList",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "idEmailList"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "id_label": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "id_label",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_label",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/idLabels/{idLabel}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "idLabels",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idLabel": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "id_member": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "id_member",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/idMembers/{idMember}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "idMembers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "label": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "label",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "color",
                                        "orig": "color",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/labels",
                            "parts": [
                                "labels"
                            ],
                            "select": {
                                "exist": [
                                    "color",
                                    "id_board",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$OBJECT`"
                                    },
                                    {
                                        "example": 50,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/labels",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "labels"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "field",
                                    "limit"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/labels/{id}",
                            "parts": [
                                "labels",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/labels/{id}",
                            "parts": [
                                "labels",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "color",
                                        "orig": "color",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/labels/{id}",
                            "parts": [
                                "labels",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "color",
                                    "id",
                                    "name"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/labels/{id}/{field}",
                            "parts": [
                                "labels",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_list_source",
                                        "orig": "id_list_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/lists",
                            "parts": [
                                "lists"
                            ],
                            "select": {
                                "exist": [
                                    "id_board",
                                    "id_list_source",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_list",
                                        "orig": "id_list",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/lists/{id}/moveAllCards",
                            "parts": [
                                "lists",
                                "{id}",
                                "moveAllCards"
                            ],
                            "select": {
                                "$action": "move_all_card",
                                "exist": [
                                    "id",
                                    "id_board",
                                    "id_list"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/lists/{id}/archiveAllCards",
                            "parts": [
                                "lists",
                                "{id}",
                                "archiveAllCards"
                            ],
                            "select": {
                                "$action": "archive_all_card",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "filter",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/lists/{filter}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "lists",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "filter": "id",
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name,closed,idBoard,pos",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/lists/{id}",
                            "parts": [
                                "lists",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "closed",
                                        "orig": "closed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "subscribed",
                                        "orig": "subscribed",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/lists/{id}",
                            "parts": [
                                "lists",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "closed",
                                    "id",
                                    "id_board",
                                    "name",
                                    "pos",
                                    "subscribed"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "type": "`$ANY`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/lists/{id}/{field}",
                            "parts": [
                                "lists",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/lists/{id}/closed",
                            "parts": [
                                "lists",
                                "{id}",
                                "closed"
                            ],
                            "select": {
                                "$action": "closed",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/lists/{id}/idBoard",
                            "parts": [
                                "lists",
                                "{id}",
                                "idBoard"
                            ],
                            "select": {
                                "$action": "id_board",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "member": {
            "fields": [
                {
                    "name": "aaEmail",
                    "type": "`$STRING`"
                },
                {
                    "name": "aaEnrolledDate",
                    "type": "`$STRING`"
                },
                {
                    "name": "aaId",
                    "type": "`$STRING`"
                },
                {
                    "name": "activityBlocked",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "avatarHash",
                    "type": "`$STRING`"
                },
                {
                    "name": "avatarSource",
                    "type": "`$STRING`"
                },
                {
                    "name": "avatarUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "bio",
                    "type": "`$STRING`"
                },
                {
                    "name": "bioData",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "confirmed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "email",
                    "type": "`$STRING`"
                },
                {
                    "name": "fullName",
                    "type": "`$STRING`"
                },
                {
                    "name": "gravatarHash",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idBoards",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idBoardsPinned",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idEnterprise",
                    "type": "`$STRING`"
                },
                {
                    "name": "idEnterprisesAdmin",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idEnterprisesDeactivated",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idMemberReferrer",
                    "type": "`$STRING`"
                },
                {
                    "name": "idOrganizations",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idPremOrgsAdmin",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "initials",
                    "type": "`$STRING`"
                },
                {
                    "name": "isAaMastered",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "ixUpdate",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "limits",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "loginTypes",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "marketingOptIn",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "memberType",
                    "type": "`$STRING`"
                },
                {
                    "name": "messagesDismissed",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "nonPublic",
                    "short": "Profile data with restricted visibility.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "nonPublicAvailable",
                    "short": "Whether the response contains non-public profile data for the member",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "oneTimeMessagesDismissed",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "prefs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "premiumFeatures",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "products",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "status",
                    "type": "`$STRING`"
                },
                {
                    "name": "trophies",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "uploadedAvatarHash",
                    "type": "`$STRING`"
                },
                {
                    "name": "uploadedAvatarUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                },
                {
                    "name": "username",
                    "type": "`$STRING`"
                }
            ],
            "name": "member",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/avatar",
                            "parts": [
                                "members",
                                "{id}",
                                "avatar"
                            ],
                            "select": {
                                "$action": "avatar",
                                "exist": [
                                    "file",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/boardBackgrounds",
                            "parts": [
                                "members",
                                "{id}",
                                "boardBackgrounds"
                            ],
                            "select": {
                                "$action": "board_background",
                                "exist": [
                                    "file",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/oneTimeMessagesDismissed",
                            "parts": [
                                "members",
                                "{id}",
                                "oneTimeMessagesDismissed"
                            ],
                            "select": {
                                "$action": "one_time_messages_dismissed",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name",
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash, fullName, initials, username",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sort",
                                        "orig": "sort",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "sort_by",
                                        "orig": "sort_by",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": null,
                                        "kind": "query",
                                        "name": "sort_order",
                                        "orig": "sort_order",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_index",
                                        "orig": "start_index",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/members",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_field",
                                    "count",
                                    "enterpris_id",
                                    "field",
                                    "filter",
                                    "organization_field",
                                    "sort",
                                    "sort_by",
                                    "sort_order",
                                    "start_index"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": 8,
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "only_org_member",
                                        "orig": "only_org_member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search/members/",
                            "parts": [
                                "search",
                                "members"
                            ],
                            "select": {
                                "exist": [
                                    "id_board",
                                    "id_organization",
                                    "limit",
                                    "only_org_member",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/member",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "member"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/memberCreator",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "memberCreator"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tokens/{token}/member",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "member"
                            ],
                            "rename": {
                                "param": {
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/members",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "action",
                                        "orig": "action",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "board",
                                        "orig": "board",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "board_background",
                                        "orig": "board_background",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "board_star",
                                        "orig": "board_star",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "boards_invited",
                                        "orig": "boards_invited",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "name,closed,idOrganization,pinned",
                                        "kind": "query",
                                        "name": "boards_invited_field",
                                        "orig": "boards_invited_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "card",
                                        "orig": "card",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "custom_board_background",
                                        "orig": "custom_board_background",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "custom_emoji",
                                        "orig": "custom_emoji",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "custom_sticker",
                                        "orig": "custom_sticker",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "notification",
                                        "orig": "notification",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization_paid_account",
                                        "orig": "organization_paid_account",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "organizations_invited",
                                        "orig": "organizations_invited",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "organizations_invited_field",
                                        "orig": "organizations_invited_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "paid_account",
                                        "orig": "paid_account",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "saved_search",
                                        "orig": "saved_search",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "token",
                                        "orig": "token",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}",
                            "parts": [
                                "members",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "action",
                                    "board",
                                    "board_background",
                                    "board_star",
                                    "boards_invited",
                                    "boards_invited_field",
                                    "card",
                                    "custom_board_background",
                                    "custom_emoji",
                                    "custom_sticker",
                                    "field",
                                    "id",
                                    "notification",
                                    "organization",
                                    "organization_field",
                                    "organization_paid_account",
                                    "organizations_invited",
                                    "organizations_invited_field",
                                    "paid_account",
                                    "saved_search",
                                    "token"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name",
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash, fullName, initials, username",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/members/{idMember}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_field",
                                    "enterpris_id",
                                    "field",
                                    "id",
                                    "organization_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/members",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/{field}",
                            "parts": [
                                "members",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "notification_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/member",
                            "parts": [
                                "notifications",
                                "{notification_id}",
                                "member"
                            ],
                            "rename": {
                                "param": {
                                    "id": "notification_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "notification_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/members",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "members"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/boards/{id}/members/{idMember}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/members/{idMember}",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/members/{idMember}/all",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id_member}",
                                "all"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idMember": "id_member"
                                }
                            },
                            "select": {
                                "$action": "all",
                                "exist": [
                                    "id_member",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "avatar_source",
                                        "orig": "avatar_source",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "bio",
                                        "orig": "bio",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "full_name",
                                        "orig": "full_name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "initial",
                                        "orig": "initial",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/color_blind",
                                        "orig": "prefs/color_blind",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/locale",
                                        "orig": "prefs/locale",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/minutes_between_summary",
                                        "orig": "prefs/minutes_between_summary",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "username",
                                        "orig": "username",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}",
                            "parts": [
                                "members",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "avatar_source",
                                    "bio",
                                    "full_name",
                                    "id",
                                    "initial",
                                    "prefs/color_blind",
                                    "prefs/locale",
                                    "prefs/minutes_between_summary",
                                    "username"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "name",
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash, fullName, initials, username",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/enterprises/{id}/members/{idMember}/deactivated",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "members",
                                "{id_member}",
                                "deactivated"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idMember": "id_member"
                                }
                            },
                            "select": {
                                "$action": "deactivated",
                                "exist": [
                                    "board_field",
                                    "enterpris_id",
                                    "field",
                                    "id_member",
                                    "organization_field",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "allow_billable_guest",
                                        "orig": "allow_billable_guest",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/members/{idMember}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "allow_billable_guest",
                                    "board_id",
                                    "id",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/enterprises/{id}/members/{idMember}/licensed",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "members",
                                "{id_member}",
                                "licensed"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idMember": "id_member"
                                }
                            },
                            "select": {
                                "$action": "licensed",
                                "exist": [
                                    "enterpris_id",
                                    "id_member",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{id}/members/{idMember}",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id_member",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{id}/members/{idMember}/deactivated",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "members",
                                "{id_member}",
                                "deactivated"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idMember": "id_member"
                                }
                            },
                            "select": {
                                "$action": "deactivated",
                                "exist": [
                                    "id_member",
                                    "organization_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "board"
                    ],
                    [
                        "card"
                    ],
                    [
                        "enterpris"
                    ],
                    [
                        "notification"
                    ],
                    [
                        "organization"
                    ],
                    [
                        "token"
                    ],
                    [
                        "enterpris",
                        "member"
                    ],
                    [
                        "organization",
                        "member"
                    ]
                ]
            }
        },
        "member_privacy": {
            "fields": [],
            "name": "member_privacy",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "plugin_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/plugins/{id}/compliance/memberPrivacy",
                            "parts": [
                                "plugins",
                                "{plugin_id}",
                                "compliance",
                                "memberPrivacy"
                            ],
                            "rename": {
                                "param": {
                                    "id": "plugin_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "plugin_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "plugin"
                    ]
                ]
            }
        },
        "members_voted": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "members_voted",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/membersVoted",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "membersVoted"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_member",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/membersVoted/{idMember}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "membersVoted",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idMember": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "membership": {
            "fields": [
                {
                    "name": "admin",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "collaborator",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "deactivated",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "licensed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "managed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "member",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "membership",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "active_since",
                                        "orig": "active_since",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "admin",
                                        "orig": "admin",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "collaborator",
                                        "orig": "collaborator",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "cursor",
                                        "orig": "cursor",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "deactivated",
                                        "orig": "deactivated",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "inactive_since",
                                        "orig": "inactive_since",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "licensed",
                                        "orig": "licensed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "managed",
                                        "orig": "managed",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "none",
                                        "kind": "query",
                                        "name": "search",
                                        "orig": "search",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/members/query",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "members",
                                "query"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "active_since",
                                    "admin",
                                    "collaborator",
                                    "cursor",
                                    "deactivated",
                                    "enterpris_id",
                                    "inactive_since",
                                    "licensed",
                                    "managed",
                                    "search"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/memberships",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "memberships"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "filter",
                                    "member",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "activity",
                                        "orig": "activity",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "fullname,username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "org_member_type",
                                        "orig": "org_member_type",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/memberships",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "memberships"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "activity",
                                    "board_id",
                                    "filter",
                                    "member",
                                    "member_field",
                                    "org_member_type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_membership",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/memberships/{idMembership}",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "memberships",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idMembership": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_membership",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "fullName, username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/memberships/{idMembership}",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "memberships",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id",
                                    "idMembership": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "id",
                                    "member_field",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ],
                    [
                        "enterpris"
                    ],
                    [
                        "organization"
                    ]
                ]
            }
        },
        "most_recent": {
            "fields": [],
            "name": "most_recent",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "new_billable_guest": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "new_billable_guest",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_board",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/newBillableGuests/{idBoard}",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "newBillableGuests",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idBoard": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "organization"
                    ]
                ]
            }
        },
        "notification": {
            "fields": [
                {
                    "name": "board",
                    "req": true,
                    "type": "`$OBJECT`"
                },
                {
                    "name": "card",
                    "type": "`$OBJECT`",
                    "union": {
                        "branches": 2,
                        "count": 2,
                        "depth": 3
                    }
                },
                {
                    "name": "data",
                    "type": "`$STRING`"
                },
                {
                    "name": "date",
                    "type": "`$STRING`"
                },
                {
                    "name": "dateRead",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idAction",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMemberCreator",
                    "type": "`$STRING`"
                },
                {
                    "name": "reactions",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "type",
                    "type": "`$STRING`"
                },
                {
                    "name": "unread",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "notification",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "before",
                                        "orig": "before",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "display",
                                        "orig": "display",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "entity",
                                        "orig": "entity",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "50",
                                        "kind": "query",
                                        "name": "limit",
                                        "orig": "limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member_creator",
                                        "orig": "member_creator",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "member_creator_field",
                                        "orig": "member_creator_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "0",
                                        "kind": "query",
                                        "name": "page",
                                        "orig": "page",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "read_filter",
                                        "orig": "read_filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "since",
                                        "orig": "since",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/notifications",
                            "parts": [
                                "members",
                                "{member_id}",
                                "notifications"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "before",
                                    "display",
                                    "entity",
                                    "field",
                                    "filter",
                                    "limit",
                                    "member_creator",
                                    "member_creator_field",
                                    "member_id",
                                    "page",
                                    "read_filter",
                                    "since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "board",
                                        "orig": "board",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "name",
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card",
                                        "orig": "card",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "name",
                                        "kind": "query",
                                        "name": "card_field",
                                        "orig": "card_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "display",
                                        "orig": "display",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "entity",
                                        "orig": "entity",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "list",
                                        "orig": "list",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member_creator",
                                        "orig": "member_creator",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "member_creator_field",
                                        "orig": "member_creator_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "organization",
                                        "orig": "organization",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}",
                            "parts": [
                                "notifications",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "board",
                                    "board_field",
                                    "card",
                                    "card_field",
                                    "display",
                                    "entity",
                                    "field",
                                    "id",
                                    "list",
                                    "member",
                                    "member_creator",
                                    "member_creator_field",
                                    "member_field",
                                    "organization",
                                    "organization_field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/{field}",
                            "parts": [
                                "notifications",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "unread",
                                        "orig": "unread",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/notifications/{id}",
                            "parts": [
                                "notifications",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id",
                                    "unread"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/notifications/{id}/unread",
                            "parts": [
                                "notifications",
                                "{id}",
                                "unread"
                            ],
                            "select": {
                                "$action": "unread",
                                "exist": [
                                    "id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "notification_channel_setting": {
            "fields": [
                {
                    "name": "blockedKeys",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$ANY`"
                        }
                    },
                    "short": "Singular key or array of notification keys",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "channel",
                    "op": {
                        "update": {
                            "req": true,
                            "type": "`$STRING`"
                        }
                    },
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMember",
                    "type": "`$STRING`"
                }
            ],
            "name": "notification_channel_setting",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/notificationsChannelSettings",
                            "parts": [
                                "members",
                                "{member_id}",
                                "notificationsChannelSettings"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "email",
                                        "kind": "param",
                                        "name": "channel",
                                        "orig": "channel",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/notificationsChannelSettings/{channel}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "notificationsChannelSettings",
                                "{channel}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "channel",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "notification_comment_card",
                                        "kind": "param",
                                        "name": "blocked_key",
                                        "orig": "blocked_key",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "email",
                                        "kind": "param",
                                        "name": "channel",
                                        "orig": "channel",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}",
                            "parts": [
                                "members",
                                "{id}",
                                "notificationsChannelSettings",
                                "{channel}",
                                "{blocked_key}"
                            ],
                            "rename": {
                                "param": {
                                    "blockedKeys": "blocked_key"
                                }
                            },
                            "select": {
                                "exist": [
                                    "blocked_key",
                                    "channel",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "email",
                                        "kind": "param",
                                        "name": "channel",
                                        "orig": "channel",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/notificationsChannelSettings/{channel}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "notificationsChannelSettings",
                                "{channel}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "channel",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/notificationsChannelSettings",
                            "parts": [
                                "members",
                                "{member_id}",
                                "notificationsChannelSettings"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ],
                    [
                        "member",
                        "notifications_channel_setting"
                    ]
                ]
            }
        },
        "notification_list": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "notification_list",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/list",
                            "parts": [
                                "notifications",
                                "{id}",
                                "list"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "notification_member_creator": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "notification_member_creator",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/memberCreator",
                            "parts": [
                                "notifications",
                                "{id}",
                                "memberCreator"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "notifications_channel_setting": {
            "fields": [],
            "name": "notifications_channel_setting",
            "op": {},
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ],
                    [
                        "notifications_channel_setting"
                    ]
                ]
            }
        },
        "option": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "option",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "custom_field_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_custom_field_option",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customFields/{id}/options/{idCustomFieldOption}",
                            "parts": [
                                "customFields",
                                "{custom_field_id}",
                                "options",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "custom_field_id",
                                    "idCustomFieldOption": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "custom_field_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "custom_field_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/customFields/{id}/options",
                            "parts": [
                                "customFields",
                                "{custom_field_id}",
                                "options"
                            ],
                            "rename": {
                                "param": {
                                    "id": "custom_field_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "custom_field_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "custom_field_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_custom_field_option",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/customFields/{id}/options/{idCustomFieldOption}",
                            "parts": [
                                "customFields",
                                "{custom_field_id}",
                                "options",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "custom_field_id",
                                    "idCustomFieldOption": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "custom_field_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "custom_field"
                    ]
                ]
            }
        },
        "org_invite_restrict": {
            "fields": [],
            "name": "org_invite_restrict",
            "op": {
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/prefs/orgInviteRestrict",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "prefs",
                                "orgInviteRestrict"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "organization"
                    ]
                ]
            }
        },
        "organization": {
            "fields": [
                {
                    "name": "dateLastActivity",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idBoards",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "idEnterprise",
                    "type": "`$STRING`"
                },
                {
                    "name": "memberships",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "offering",
                    "type": "`$STRING`"
                },
                {
                    "name": "prefs",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "premiumFeatures",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "url",
                    "type": "`$STRING`"
                }
            ],
            "name": "organization",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "display_name",
                                        "orig": "display_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "website",
                                        "orig": "website",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations",
                            "parts": [
                                "organizations"
                            ],
                            "select": {
                                "exist": [
                                    "desc",
                                    "display_name",
                                    "name",
                                    "website"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "file",
                                        "orig": "file",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations/{id}/logo",
                            "parts": [
                                "organizations",
                                "{id}",
                                "logo"
                            ],
                            "select": {
                                "$action": "logo",
                                "exist": [
                                    "file",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/organizations/{id}/tags",
                            "parts": [
                                "organizations",
                                "{id}",
                                "tags"
                            ],
                            "select": {
                                "$action": "tag",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "count",
                                        "orig": "count",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "start_index",
                                        "orig": "start_index",
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/organizations",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "organizations"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "count",
                                    "enterpris_id",
                                    "field",
                                    "filter",
                                    "start_index"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "paid_account",
                                        "orig": "paid_account",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/organizations",
                            "parts": [
                                "members",
                                "{member_id}",
                                "organizations"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "filter",
                                    "member_id",
                                    "paid_account"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/organization",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "organization"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/organizationsInvited",
                            "parts": [
                                "members",
                                "{member_id}",
                                "organizationsInvited"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/{field}",
                            "parts": [
                                "organizations",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "notification_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/notifications/{id}/organization",
                            "parts": [
                                "notifications",
                                "{notification_id}",
                                "organization"
                            ],
                            "rename": {
                                "param": {
                                    "id": "notification_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "notification_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}",
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_org",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/enterprises/{id}/organizations/{idOrg}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "organizations",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idOrg": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}",
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/logo",
                            "parts": [
                                "organizations",
                                "{id}",
                                "logo"
                            ],
                            "select": {
                                "$action": "logo",
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "desc",
                                        "orig": "desc",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "display_name",
                                        "orig": "display_name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/associated_domain",
                                        "orig": "prefs/associated_domain",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/board_visibility_restrict/org",
                                        "orig": "prefs/board_visibility_restrict/org",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/board_visibility_restrict/private",
                                        "orig": "prefs/board_visibility_restrict/private",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/board_visibility_restrict/public",
                                        "orig": "prefs/board_visibility_restrict/public",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/external_members_disabled",
                                        "orig": "prefs/external_members_disabled",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/google_apps_version",
                                        "orig": "prefs/google_apps_version",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/org_invite_restrict",
                                        "orig": "prefs/org_invite_restrict",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "prefs/permission_level",
                                        "orig": "prefs/permission_level",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "website",
                                        "orig": "website",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{id}",
                            "parts": [
                                "organizations",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "desc",
                                    "display_name",
                                    "id",
                                    "name",
                                    "prefs/associated_domain",
                                    "prefs/board_visibility_restrict/org",
                                    "prefs/board_visibility_restrict/private",
                                    "prefs/board_visibility_restrict/public",
                                    "prefs/external_members_disabled",
                                    "prefs/google_apps_version",
                                    "prefs/org_invite_restrict",
                                    "prefs/permission_level",
                                    "website"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "email",
                                        "orig": "email",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "full_name",
                                        "orig": "full_name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "normal",
                                        "kind": "query",
                                        "name": "type",
                                        "orig": "type",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/organizations/{id}/members",
                            "parts": [
                                "organizations",
                                "{id}",
                                "members"
                            ],
                            "select": {
                                "$action": "member",
                                "exist": [
                                    "email",
                                    "full_name",
                                    "id",
                                    "type"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "enterpris"
                    ],
                    [
                        "member"
                    ],
                    [
                        "notification"
                    ]
                ]
            }
        },
        "pending_organization": {
            "fields": [
                {
                    "name": "date",
                    "type": "`$STRING`"
                },
                {
                    "name": "displayName",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMember",
                    "type": "`$STRING`"
                },
                {
                    "name": "logoUrl",
                    "type": "`$STRING`"
                },
                {
                    "name": "memberRequestor",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "membershipCount",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "transferability",
                    "type": "`$OBJECT`"
                }
            ],
            "name": "pending_organization",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "active_since",
                                        "orig": "active_since",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "inactive_since",
                                        "orig": "inactive_since",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/pendingOrganizations",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "pendingOrganizations"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "active_since",
                                    "enterpris_id",
                                    "inactive_since"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "plugin": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "plugin",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/boardPlugins",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "boardPlugins"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "enabled",
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/plugins",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "plugins"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "filter"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/plugins/{id}/",
                            "parts": [
                                "plugins",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/plugins/{id}/",
                            "parts": [
                                "plugins",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "plugin_data": {
            "fields": [],
            "name": "plugin_data",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/pluginData",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "pluginData"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/pluginData",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "pluginData"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ],
                    [
                        "organization"
                    ]
                ]
            }
        },
        "plugin_listing": {
            "fields": [
                {
                    "name": "description",
                    "short": "The description to show for the given locale",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "locale",
                    "short": "The locale that this listing should be displayed for.",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "short": "The name to use for the given locale.",
                    "type": "`$STRING`"
                },
                {
                    "name": "overview",
                    "short": "The overview to show for the given locale.",
                    "type": "`$STRING`"
                }
            ],
            "name": "plugin_listing",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_plugin",
                                        "orig": "id_plugin",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/plugins/{idPlugin}/listing",
                            "parts": [
                                "plugins",
                                "{id_plugin}",
                                "listing"
                            ],
                            "rename": {
                                "param": {
                                    "idPlugin": "id_plugin"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id_plugin"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_listing",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_plugin",
                                        "orig": "id_plugin",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/plugins/{idPlugin}/listings/{idListing}",
                            "parts": [
                                "plugins",
                                "{id_plugin}",
                                "listings",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idListing": "id",
                                    "idPlugin": "id_plugin"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "id_plugin"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "plugin"
                    ]
                ]
            }
        },
        "reaction": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "reaction",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "emoji",
                                        "orig": "emoji",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{idAction}/reactions/{id}",
                            "parts": [
                                "actions",
                                "{id_action}",
                                "reactions",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "exist": [
                                    "emoji",
                                    "id",
                                    "id_action",
                                    "member"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "emoji",
                                        "orig": "emoji",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "member",
                                        "orig": "member",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{idAction}/reactions",
                            "parts": [
                                "actions",
                                "{id_action}",
                                "reactions"
                            ],
                            "rename": {
                                "param": {
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "exist": [
                                    "emoji",
                                    "id_action",
                                    "member"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id_action",
                                        "orig": "id_action",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/actions/{idAction}/reactions/{id}",
                            "parts": [
                                "actions",
                                "{id_action}",
                                "reactions",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idAction": "id_action"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "id_action"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ]
                ]
            }
        },
        "read": {
            "fields": [],
            "name": "read",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "ids",
                                        "orig": "ids",
                                        "type": "`$ARRAY`"
                                    },
                                    {
                                        "example": true,
                                        "kind": "query",
                                        "name": "read",
                                        "orig": "read",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/notifications/all/read",
                            "parts": [
                                "notifications",
                                "all",
                                "read"
                            ],
                            "select": {
                                "exist": [
                                    "ids",
                                    "read"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "saved_search": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "name",
                    "type": "`$STRING`"
                },
                {
                    "name": "pos",
                    "type": "`$ANY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 0
                    }
                },
                {
                    "name": "query",
                    "type": "`$STRING`"
                }
            ],
            "name": "saved_search",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "reqd": true,
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/members/{id}/savedSearches",
                            "parts": [
                                "members",
                                "{member_id}",
                                "savedSearches"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id",
                                    "name",
                                    "pos",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.pos`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/savedSearches",
                            "parts": [
                                "members",
                                "{member_id}",
                                "savedSearches"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_search",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/savedSearches/{idSearch}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "savedSearches",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idSearch": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.pos`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_search",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/members/{id}/savedSearches/{idSearch}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "savedSearches",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idSearch": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_search",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/members/{id}/savedSearches/{idSearch}",
                            "parts": [
                                "members",
                                "{member_id}",
                                "savedSearches",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id",
                                    "idSearch": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "member_id",
                                    "name",
                                    "pos",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.pos`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "search": {
            "fields": [],
            "name": "search",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "example": "name,idOrganization",
                                        "kind": "query",
                                        "name": "board_field",
                                        "orig": "board_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "board_organization",
                                        "orig": "board_organization",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "boards_limit",
                                        "orig": "boards_limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "false",
                                        "kind": "query",
                                        "name": "card_attachment",
                                        "orig": "card_attachment",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card_board",
                                        "orig": "card_board",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "card_field",
                                        "orig": "card_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card_list",
                                        "orig": "card_list",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card_member",
                                        "orig": "card_member",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "card_sticker",
                                        "orig": "card_sticker",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "example": 10,
                                        "kind": "query",
                                        "name": "cards_limit",
                                        "orig": "cards_limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "cards_page",
                                        "orig": "cards_page",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_board",
                                        "orig": "id_board",
                                        "type": "`$ANY`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_card",
                                        "orig": "id_card",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "id_organization",
                                        "orig": "id_organization",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "avatarHash,fullName,initials,username,confirmed",
                                        "kind": "query",
                                        "name": "member_field",
                                        "orig": "member_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "10",
                                        "kind": "query",
                                        "name": "members_limit",
                                        "orig": "members_limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "model_type",
                                        "orig": "model_type",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "name,displayName",
                                        "kind": "query",
                                        "name": "organization_field",
                                        "orig": "organization_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "10",
                                        "kind": "query",
                                        "name": "organizations_limit",
                                        "orig": "organizations_limit",
                                        "type": "`$INTEGER`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "partial",
                                        "orig": "partial",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "query",
                                        "orig": "query",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/search",
                            "parts": [
                                "search"
                            ],
                            "select": {
                                "exist": [
                                    "board_field",
                                    "board_organization",
                                    "boards_limit",
                                    "card_attachment",
                                    "card_board",
                                    "card_field",
                                    "card_list",
                                    "card_member",
                                    "card_sticker",
                                    "cards_limit",
                                    "cards_page",
                                    "id_board",
                                    "id_card",
                                    "id_organization",
                                    "member_field",
                                    "members_limit",
                                    "model_type",
                                    "organization_field",
                                    "organizations_limit",
                                    "partial",
                                    "query"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "show_sidebar": {
            "fields": [],
            "name": "show_sidebar",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/showSidebar",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "showSidebar"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "show_sidebar_activity": {
            "fields": [],
            "name": "show_sidebar_activity",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/showSidebarActivity",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "showSidebarActivity"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "show_sidebar_board_action": {
            "fields": [],
            "name": "show_sidebar_board_action",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/showSidebarBoardActions",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "showSidebarBoardActions"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "show_sidebar_member": {
            "fields": [],
            "name": "show_sidebar_member",
            "op": {
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "value",
                                        "orig": "value",
                                        "reqd": true,
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/boards/{id}/myPrefs/showSidebarMembers",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "myPrefs",
                                "showSidebarMembers"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "value"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "board"
                    ]
                ]
            }
        },
        "sticker": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "sticker",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_sticker",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/stickers/{idSticker}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "stickers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idSticker": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/cards/{id}/stickers",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "stickers"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_sticker",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/cards/{id}/stickers/{idSticker}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "stickers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idSticker": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "card_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_sticker",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "left",
                                        "orig": "left",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "example": 0,
                                        "kind": "query",
                                        "name": "rotate",
                                        "orig": "rotate",
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "top",
                                        "orig": "top",
                                        "reqd": true,
                                        "type": "`$NUMBER`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "z_index",
                                        "orig": "z_index",
                                        "reqd": true,
                                        "type": "`$INTEGER`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/cards/{id}/stickers/{idSticker}",
                            "parts": [
                                "cards",
                                "{card_id}",
                                "stickers",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "card_id",
                                    "idSticker": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "card_id",
                                    "id",
                                    "left",
                                    "rotate",
                                    "top",
                                    "z_index"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "card"
                    ]
                ]
            }
        },
        "tag": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                }
            ],
            "name": "tag",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/organizations/{id}/tags",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "tags"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_tag",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "organization_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/organizations/{id}/tags/{idTag}",
                            "parts": [
                                "organizations",
                                "{organization_id}",
                                "tags",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "organization_id",
                                    "idTag": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "organization_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "organization"
                    ]
                ]
            }
        },
        "token": {
            "fields": [
                {
                    "name": "dateCreated",
                    "type": "`$STRING`"
                },
                {
                    "name": "dateExpires",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idMember",
                    "type": "`$STRING`"
                },
                {
                    "name": "identifier",
                    "type": "`$STRING`"
                },
                {
                    "name": "permissions",
                    "type": "`$ARRAY`",
                    "union": {
                        "branches": 2,
                        "count": 1,
                        "depth": 3
                    }
                }
            ],
            "name": "token",
            "op": {
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "member_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "webhook",
                                        "orig": "webhook",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/members/{id}/tokens",
                            "parts": [
                                "members",
                                "{member_id}",
                                "tokens"
                            ],
                            "rename": {
                                "param": {
                                    "id": "member_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "member_id",
                                    "webhook"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": false,
                                        "kind": "query",
                                        "name": "webhook",
                                        "orig": "webhook",
                                        "type": "`$BOOLEAN`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tokens/{token}",
                            "parts": [
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "field",
                                    "id",
                                    "webhook"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tokens/{token}/",
                            "parts": [
                                "tokens",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "token": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "member"
                    ]
                ]
            }
        },
        "transferrable_organization": {
            "fields": [
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "newBillableMembers",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "restrictedMembers",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "transferrable",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "transferrable_organization",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "enterpris_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_organization",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/enterprises/{id}/transferrable/organization/{idOrganization}",
                            "parts": [
                                "enterprises",
                                "{enterpris_id}",
                                "transferrable",
                                "organization",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "id": "enterpris_id",
                                    "idOrganization": "id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "enterpris_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "enterpris"
                    ]
                ]
            }
        },
        "trello_list": {
            "fields": [
                {
                    "name": "attachments",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "closed",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idBoard",
                    "type": "`$STRING`"
                },
                {
                    "name": "limits",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "name",
                    "short": "The name of the list",
                    "type": "`$STRING`"
                },
                {
                    "name": "pos",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "softLimit",
                    "type": "`$STRING`"
                },
                {
                    "name": "subscribed",
                    "type": "`$BOOLEAN`"
                }
            ],
            "name": "trello_list",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "name",
                                        "orig": "name",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "top",
                                        "kind": "query",
                                        "name": "pos",
                                        "orig": "pos",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/boards/{id}/lists",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "lists"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "name",
                                    "pos"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.limits`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "board_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "card",
                                        "orig": "card",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "card_field",
                                        "orig": "card_field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "filter",
                                        "orig": "filter",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/boards/{id}/lists",
                            "parts": [
                                "boards",
                                "{board_id}",
                                "lists"
                            ],
                            "rename": {
                                "param": {
                                    "id": "board_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "board_id",
                                    "card",
                                    "card_field",
                                    "field",
                                    "filter"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "action_id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "example": "all",
                                        "kind": "query",
                                        "name": "field",
                                        "orig": "field",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/actions/{id}/list",
                            "parts": [
                                "actions",
                                "{action_id}",
                                "list"
                            ],
                            "rename": {
                                "param": {
                                    "id": "action_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "action_id",
                                    "field"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body.limits`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "action"
                    ],
                    [
                        "board"
                    ]
                ]
            }
        },
        "webhook": {
            "fields": [
                {
                    "name": "active",
                    "type": "`$BOOLEAN`"
                },
                {
                    "name": "callbackURL",
                    "type": "`$STRING`"
                },
                {
                    "name": "consecutiveFailures",
                    "type": "`$NUMBER`"
                },
                {
                    "name": "description",
                    "type": "`$STRING`"
                },
                {
                    "name": "firstConsecutiveFailDate",
                    "type": "`$STRING`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "idModel",
                    "type": "`$STRING`"
                }
            ],
            "name": "webhook",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "active",
                                        "orig": "active",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "callback_url",
                                        "orig": "callback_url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "description",
                                        "orig": "description",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_model",
                                        "orig": "id_model",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/webhooks/",
                            "parts": [
                                "webhooks"
                            ],
                            "select": {
                                "exist": [
                                    "active",
                                    "callback_url",
                                    "description",
                                    "id_model"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "callback_url",
                                        "orig": "callback_url",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "description",
                                        "orig": "description",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_model",
                                        "orig": "id_model",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "POST",
                            "orig": "/tokens/{token}/webhooks",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "webhooks"
                            ],
                            "rename": {
                                "param": {
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "callback_url",
                                    "description",
                                    "id_model",
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "list": {
                    "input": "data",
                    "name": "list",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tokens/{token}/webhooks",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "webhooks"
                            ],
                            "rename": {
                                "param": {
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "field",
                                        "orig": "field",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/webhooks/{id}/{field}",
                            "parts": [
                                "webhooks",
                                "{id}",
                                "{field}"
                            ],
                            "select": {
                                "exist": [
                                    "field",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_webhook",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/tokens/{token}/webhooks/{idWebhook}",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "webhooks",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idWebhook": "id",
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/webhooks/{id}",
                            "parts": [
                                "webhooks",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "remove": {
                    "input": "data",
                    "name": "remove",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_webhook",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/tokens/{token}/webhooks/{idWebhook}",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "webhooks",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idWebhook": "id",
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "id",
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "DELETE",
                            "orig": "/webhooks/{id}",
                            "parts": [
                                "webhooks",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                },
                "update": {
                    "input": "data",
                    "name": "update",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "active",
                                        "orig": "active",
                                        "type": "`$BOOLEAN`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "callback_url",
                                        "orig": "callback_url",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "description",
                                        "orig": "description",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_model",
                                        "orig": "id_model",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/webhooks/{id}",
                            "parts": [
                                "webhooks",
                                "{id}"
                            ],
                            "select": {
                                "exist": [
                                    "active",
                                    "callback_url",
                                    "description",
                                    "id",
                                    "id_model"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        },
                        {
                            "args": {
                                "params": [
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "id_webhook",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "param",
                                        "name": "token_id",
                                        "orig": "token",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "callback_url",
                                        "orig": "callback_url",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "kind": "query",
                                        "name": "description",
                                        "orig": "description",
                                        "type": "`$STRING`"
                                    },
                                    {
                                        "example": "5abbe4b7ddc1b351ef961414",
                                        "kind": "query",
                                        "name": "id_model",
                                        "orig": "id_model",
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "PUT",
                            "orig": "/tokens/{token}/webhooks/{idWebhook}",
                            "parts": [
                                "tokens",
                                "{token_id}",
                                "webhooks",
                                "{id}"
                            ],
                            "rename": {
                                "param": {
                                    "idWebhook": "id",
                                    "token": "token_id"
                                }
                            },
                            "select": {
                                "exist": [
                                    "callback_url",
                                    "description",
                                    "id",
                                    "id_model",
                                    "token_id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            }
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": [
                    [
                        "token"
                    ]
                ]
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map