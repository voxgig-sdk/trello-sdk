-- Trello SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Trello",
      slug = "trello",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["debug"] = {
        ["options"] = {
          ["active"] = false,
          ["max"] = 100,
          ["redact"] = {
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          },
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["onEntry"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["idempotency"] = {
        ["options"] = {
          ["active"] = false,
          ["header"] = "Idempotency-Key",
          ["methods"] = {
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          },
          ["ops"] = {
            "create",
            "update",
            "remove",
          },
        },
        ["optspec"] = {
          ["keygen"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["metrics"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["paging"] = {
        ["options"] = {
          ["active"] = false,
          ["afterVar"] = "after",
          ["cursorParam"] = "cursor",
          ["firstVar"] = "first",
          ["limitParam"] = "limit",
          ["pageParam"] = "page",
          ["startPage"] = 1,
        },
        ["optspec"] = {
          ["limit"] = "`$NUMBER`",
          ["ops"] = "`$LIST`",
        },
        ["strict"] = false,
        ["transport"] = "none",
      },
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://api.trello.com/1",
      auth = {
        prefix = "",
        ["in"] = "query",
        name = "key",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["action"] = {},
        ["action_reactions_summary"] = {},
        ["admin"] = {},
        ["application_compliance"] = {},
        ["associated_domain"] = {},
        ["attachment"] = {},
        ["batch"] = {},
        ["board"] = {},
        ["board_background"] = {},
        ["board_plugin"] = {},
        ["board_star"] = {},
        ["bulk"] = {},
        ["card"] = {},
        ["card_check_item_state"] = {},
        ["card_list"] = {},
        ["check_item"] = {},
        ["checklist"] = {},
        ["claimable_organization"] = {},
        ["custom_board_background"] = {},
        ["custom_emoji"] = {},
        ["custom_field"] = {},
        ["custom_field_item"] = {},
        ["custom_sticker"] = {},
        ["email_position"] = {},
        ["emoji"] = {},
        ["enterprise"] = {},
        ["enterprise_admin"] = {},
        ["enterprise_audit_log"] = {},
        ["enterprise_signup_url"] = {},
        ["export"] = {},
        ["export_download"] = {},
        ["generate"] = {},
        ["id_email_list"] = {},
        ["id_label"] = {},
        ["id_member"] = {},
        ["label"] = {},
        ["list"] = {},
        ["member"] = {},
        ["member_privacy"] = {},
        ["members_voted"] = {},
        ["membership"] = {},
        ["new_billable_guest"] = {},
        ["notification"] = {},
        ["notification_channel_setting"] = {},
        ["notification_list"] = {},
        ["notification_member_creator"] = {},
        ["option"] = {},
        ["org_invite_restrict"] = {},
        ["organization"] = {},
        ["pending_organization"] = {},
        ["plugin"] = {},
        ["plugin_data"] = {},
        ["plugin_listing"] = {},
        ["reaction"] = {},
        ["read"] = {},
        ["saved_search"] = {},
        ["search"] = {},
        ["show_sidebar"] = {},
        ["show_sidebar_activity"] = {},
        ["show_sidebar_board_action"] = {},
        ["show_sidebar_member"] = {},
        ["sticker"] = {},
        ["tag"] = {},
        ["token"] = {},
        ["transferrable_organization"] = {},
        ["trello_list"] = {},
        ["webhook"] = {},
      },
    },
    entity = {
      ["action"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "display",
            ["title"] = "Display",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMemberCreator",
            ["title"] = "Id Member Creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limits",
            ["title"] = "Limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "memberCreator",
            ["title"] = "Member Creator",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "action",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/actions/comments",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["lit"] = "comments",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "actions",
                  "comments",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "comment",
                  ["exist"] = {
                    "card_id",
                    "text",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/actions/{idAction}/reactions",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "reactions",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id_action}",
                  "reactions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "reaction",
                  ["exist"] = {
                    "id_action",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/actions",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "actions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "commentCard, updateCard:idList",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "filter",
                    "page",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/actions",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "actions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/actions",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "actions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{boardId}/actions",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "actions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["boardId"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "board_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "before",
                      ["orig"] = "before",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$OBJECT`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "list",
                    },
                    {
                      ["name"] = "id_model",
                      ["orig"] = "id_model",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator",
                      ["orig"] = "member_creator",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator_field",
                      ["orig"] = "member_creator_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "reaction",
                      ["orig"] = "reaction",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "since",
                      ["orig"] = "since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "since",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "display",
                      ["orig"] = "display",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "entity",
                      ["orig"] = "entity",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator",
                      ["orig"] = "member_creator",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator_field",
                      ["orig"] = "member_creator_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "display",
                    "entity",
                    "field",
                    "id",
                    "member",
                    "member_creator",
                    "member_creator_field",
                    "member_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lists/{id}/actions",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "list_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{list_id}",
                  "actions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "list_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "list_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "list_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/actions/{idAction}/comments",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "comments",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "actions",
                  "{id_action}",
                  "comments",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "comment",
                  ["exist"] = {
                    "card_id",
                    "id_action",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/actions/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{id}/actions/{idAction}/comments",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "comments",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "actions",
                  "{id_action}",
                  "comments",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "comment",
                  ["exist"] = {
                    "card_id",
                    "id_action",
                    "text",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/actions/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "text",
                      ["orig"] = "text",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "text",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/actions/{id}/text",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "text",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id}",
                  "text",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "text",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.card",
            },
            {
              "$.main.kit.entity.list",
            },
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.organization",
            },
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["action_reactions_summary"] = {
        ["fields"] = {},
        ["name"] = "action_reactions_summary",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{idAction}/reactionsSummary",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "reactionsSummary",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id_action}",
                  "reactionsSummary",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_action",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
          },
        },
      },
      ["admin"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "admin",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/enterprises/{id}/admins/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "admins",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "admins",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/enterprises/{id}/admins/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "admins",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "admins",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.enterprise",
            },
          },
        },
      },
      ["application_compliance"] = {
        ["fields"] = {},
        ["name"] = "application_compliance",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/applications/{key}/compliance",
                ["segments"] = {
                  {
                    ["lit"] = "applications",
                  },
                  {
                    ["var"] = "key",
                  },
                  {
                    ["lit"] = "compliance",
                  },
                },
                ["parts"] = {
                  "applications",
                  "{key}",
                  "compliance",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "key",
                      ["orig"] = "key",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "key",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["associated_domain"] = {
        ["fields"] = {},
        ["name"] = "associated_domain",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/prefs/associatedDomain",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "prefs",
                  },
                  {
                    ["lit"] = "associatedDomain",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "prefs",
                  "associatedDomain",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["attachment"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "attachment",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/attachments",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "attachments",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "attachments",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                    "filter",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/attachments/{idAttachment}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "attachments",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "attachments",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idAttachment"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_attachment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["example"] = {
                        "all",
                      },
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/attachments/{idAttachment}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "attachments",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "attachments",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idAttachment"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_attachment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_attachment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["batch"] = {
        ["fields"] = {},
        ["name"] = "batch",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/batch",
                ["segments"] = {
                  {
                    ["lit"] = "batch",
                  },
                },
                ["parts"] = {
                  "batch",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "url",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["board"] = {
        ["fields"] = {
          {
            ["name"] = "closed",
            ["title"] = "Closed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "creationMethod",
            ["title"] = "Creation Method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateLastActivity",
            ["title"] = "Date Last Activity",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "dateLastView",
            ["title"] = "Date Last View",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "datePluginDisable",
            ["title"] = "Date Plugin Disable",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "desc",
            ["title"] = "Desc",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "descData",
            ["title"] = "Desc Data",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "enterpriseOwned",
            ["title"] = "Enterprise Owned",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
            ["req"] = true,
          },
          {
            ["name"] = "idMemberCreator",
            ["title"] = "Id Member Creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idOrganization",
            ["title"] = "Id Organization",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idTags",
            ["title"] = "Id Tags",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ixUpdate",
            ["title"] = "Ix Update",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "labelNames",
            ["title"] = "Label Names",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "limits",
            ["title"] = "Limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "memberships",
            ["title"] = "Memberships",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "The name of the board.",
          },
          {
            ["name"] = "pinned",
            ["title"] = "Pinned",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "powerUps",
            ["title"] = "Power Ups",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prefs",
            ["title"] = "Prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "shortLink",
            ["title"] = "Short Link",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortUrl",
            ["title"] = "Short Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "starred",
            ["title"] = "Starred",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "subscribed",
            ["title"] = "Subscribed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "templateGallery",
            ["title"] = "Template Gallery",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "board",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                },
                ["parts"] = {
                  "boards",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "default_label",
                      ["orig"] = "default_label",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "default_list",
                      ["orig"] = "default_list",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_board_source",
                      ["orig"] = "id_board_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "keep_from_source",
                      ["orig"] = "keep_from_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "power_up",
                      ["orig"] = "power_up",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs_background",
                      ["orig"] = "prefs_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "blue",
                    },
                    {
                      ["name"] = "prefs_card_aging",
                      ["orig"] = "prefs_card_aging",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "regular",
                    },
                    {
                      ["name"] = "prefs_card_cover",
                      ["orig"] = "prefs_card_cover",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "prefs_comment",
                      ["orig"] = "prefs_comment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "members",
                    },
                    {
                      ["name"] = "prefs_invitation",
                      ["orig"] = "prefs_invitation",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "members",
                    },
                    {
                      ["name"] = "prefs_permission_level",
                      ["orig"] = "prefs_permission_level",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "private",
                    },
                    {
                      ["name"] = "prefs_self_join",
                      ["orig"] = "prefs_self_join",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "prefs_voting",
                      ["orig"] = "prefs_voting",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "disabled",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "prefs_voting",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/labels",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "labels",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "labels",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "label",
                  ["exist"] = {
                    "color",
                    "id",
                    "name",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/boardPlugins",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "boardPlugins",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "boardPlugins",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_plugin",
                      ["orig"] = "id_plugin",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "board_plugin",
                  ["exist"] = {
                    "id",
                    "id_plugin",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/idTags",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "idTags",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "idTags",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "id_tag",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/markedAsViewed",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "markedAsViewed",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "markedAsViewed",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "marked_as_viewed",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boards",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boards",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,displayName",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "filter",
                    "list",
                    "member_id",
                    "organization",
                    "organization_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/boards",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "boards",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "boards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "filter",
                    "organization_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardsInvited",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardsInvited",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardsInvited",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "action",
                      ["orig"] = "action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "board_star",
                      ["orig"] = "board_star",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "card_plugin_data",
                      ["orig"] = "card_plugin_data",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "checklist",
                      ["orig"] = "checklist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "custom_field",
                      ["orig"] = "custom_field",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
                    },
                    {
                      ["name"] = "label",
                      ["orig"] = "label",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "open",
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "membership",
                      ["orig"] = "membership",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "my_pref",
                      ["orig"] = "my_pref",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "organization_plugin_data",
                      ["orig"] = "organization_plugin_data",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "plugin_data",
                      ["orig"] = "plugin_data",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "tag",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/board",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "board",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/board",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "board",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/board",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{checklist_id}",
                  "board",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "checklist_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lists/{id}/board",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "list_id",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{list_id}",
                  "board",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "list_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "list_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "list_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/board",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "notification_id",
                  },
                  {
                    ["lit"] = "board",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{notification_id}",
                  "board",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "notification_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "notification_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "notification_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/boards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "closed",
                      ["orig"] = "closed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/background",
                      ["orig"] = "prefs/background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/calendar_feed_enabled",
                      ["orig"] = "prefs/calendar_feed_enabled",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/card_aging",
                      ["orig"] = "prefs/card_aging",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/card_cover",
                      ["orig"] = "prefs/card_cover",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/comment",
                      ["orig"] = "prefs/comment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/hide_vote",
                      ["orig"] = "prefs/hide_vote",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/invitation",
                      ["orig"] = "prefs/invitation",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/permission_level",
                      ["orig"] = "prefs/permission_level",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/self_join",
                      ["orig"] = "prefs/self_join",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/voting",
                      ["orig"] = "prefs/voting",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "subscribed",
                      ["orig"] = "subscribed",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "subscribed",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "email",
                      ["orig"] = "email",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "normal",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "member",
                  ["exist"] = {
                    "email",
                    "id",
                    "type",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
            {
              "$.main.kit.entity.card",
            },
            {
              "$.main.kit.entity.checklist",
            },
            {
              "$.main.kit.entity.list",
            },
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.notification",
            },
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["board_background"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "board_background",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/customBoardBackgrounds",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customBoardBackgrounds",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customBoardBackgrounds",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "file",
                    "member_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardBackgrounds",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardBackgrounds",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardBackgrounds",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customBoardBackgrounds",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customBoardBackgrounds",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customBoardBackgrounds",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardBackgrounds",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardBackgrounds",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customBoardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customBoardBackgrounds",
                  },
                  {
                    ["var"] = "id_background",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customBoardBackgrounds",
                  "{id_background}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id_background",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_background",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_background",
                    "member_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/members/{id}/boardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardBackgrounds",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardBackgrounds",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/boardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardBackgrounds",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardBackgrounds",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "brightness",
                      ["orig"] = "brightness",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "tile",
                      ["orig"] = "tile",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "brightness",
                    "id",
                    "member_id",
                    "tile",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/customBoardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customBoardBackgrounds",
                  },
                  {
                    ["var"] = "id_background",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customBoardBackgrounds",
                  "{id_background}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id_background",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_background",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "brightness",
                      ["orig"] = "brightness",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "tile",
                      ["orig"] = "tile",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "brightness",
                    "id_background",
                    "member_id",
                    "tile",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.member",
              "$.main.kit.entity.custom_board_background",
            },
          },
        },
      },
      ["board_plugin"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "board_plugin",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/boards/{id}/boardPlugins/{idPlugin}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "boardPlugins",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "boardPlugins",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idPlugin"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_plugin",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["board_star"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idBoard",
            ["title"] = "Id Board",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "board_star",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/boardStars",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardStars",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_board",
                    "member_id",
                    "pos",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{boardId}/boardStars",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{id}",
                  "boardStars",
                },
                ["rename"] = {
                  ["param"] = {
                    ["boardId"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "board_id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "mine",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardStars/{idStar}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardStars",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idStar"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_star",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardStars",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardStars",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/members/{id}/boardStars/{idStar}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardStars",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idStar"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_star",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/boardStars/{idStar}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "boardStars",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "boardStars",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idStar"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_star",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                    "pos",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["bulk"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "bulk",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/organizations/bulk/{idOrganizations}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["lit"] = "bulk",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "organizations",
                  "bulk",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idOrganizations"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_organization",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/transferrable/bulk/{idOrganizations}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "transferrable",
                  },
                  {
                    ["lit"] = "bulk",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "transferrable",
                  "bulk",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idOrganizations"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_organization",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/enterprises/${id}/enterpriseJoinRequest/bulk",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["lit"] = "${id}",
                  },
                  {
                    ["lit"] = "enterpriseJoinRequest",
                  },
                  {
                    ["lit"] = "bulk",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "${id}",
                  "enterpriseJoinRequest",
                  "bulk",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "id_organization",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.enterprise",
            },
          },
        },
      },
      ["card"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["title"] = "Address",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "badges",
            ["title"] = "Badges",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "cardRole",
            ["title"] = "Card Role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "checkItemStates",
            ["title"] = "Check Item States",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "closed",
            ["title"] = "Closed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "coordinates",
            ["title"] = "Coordinates",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "cover",
            ["title"] = "Cover",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "creationMethod",
            ["title"] = "Creation Method",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateLastActivity",
            ["title"] = "Date Last Activity",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "desc",
            ["title"] = "Desc",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "descData",
            ["title"] = "Desc Data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "due",
            ["title"] = "Due",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "dueReminder",
            ["title"] = "Due Reminder",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idAttachmentCover",
            ["title"] = "Id Attachment Cover",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idBoard",
            ["title"] = "Id Board",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idChecklists",
            ["title"] = "Id Checklists",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idLabels",
            ["title"] = "Id Labels",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idList",
            ["title"] = "Id List",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMembers",
            ["title"] = "Id Members",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idMembersVoted",
            ["title"] = "Id Members Voted",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idShort",
            ["title"] = "Id Short",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "labels",
            ["title"] = "Labels",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "limits",
            ["title"] = "Limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "locationName",
            ["title"] = "Location Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "manualCoverAttachment",
            ["title"] = "Manual Cover Attachment",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "mirrorSourceId",
            ["title"] = "Mirror Source Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$NUMBER`",
            ["format"] = "float",
          },
          {
            ["name"] = "shortLink",
            ["title"] = "Short Link",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortUrl",
            ["title"] = "Short Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "subscribed",
            ["title"] = "Subscribed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "card",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                },
                ["parts"] = {
                  "cards",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "address",
                      ["orig"] = "address",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "card_role",
                      ["orig"] = "card_role",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "coordinate",
                      ["orig"] = "coordinate",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due",
                      ["orig"] = "due",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due_complete",
                      ["orig"] = "due_complete",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "file_source",
                      ["orig"] = "file_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_card_source",
                      ["orig"] = "id_card_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_label",
                      ["orig"] = "id_label",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_list",
                      ["orig"] = "id_list",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "keep_from_source",
                      ["orig"] = "keep_from_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "location_name",
                      ["orig"] = "location_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "mime_type",
                      ["orig"] = "mime_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "url_source",
                      ["orig"] = "url_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "url_source",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/attachments",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "attachments",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "attachments",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "mime_type",
                      ["orig"] = "mime_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "set_cover",
                      ["orig"] = "set_cover",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "url",
                      ["orig"] = "url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "attachment",
                  ["exist"] = {
                    "file",
                    "id",
                    "mime_type",
                    "name",
                    "set_cover",
                    "url",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/stickers",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "stickers",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "stickers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "image",
                      ["orig"] = "image",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "left",
                      ["orig"] = "left",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "rotate",
                      ["orig"] = "rotate",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "top",
                      ["orig"] = "top",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "z_index",
                      ["orig"] = "z_index",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "sticker",
                  ["exist"] = {
                    "id",
                    "image",
                    "left",
                    "rotate",
                    "top",
                    "z_index",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/checklists",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "checklists",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "checklists",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_checklist_source",
                      ["orig"] = "id_checklist_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "checklist",
                  ["exist"] = {
                    "id",
                    "id_checklist_source",
                    "name",
                    "pos",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/labels",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "labels",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "labels",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "label",
                  ["exist"] = {
                    "color",
                    "id",
                    "name",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/idLabels",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "idLabels",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "idLabels",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "id_label",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/idMembers",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "idMembers",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "idMembers",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "id_member",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/membersVoted",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "membersVoted",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "membersVoted",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "members_voted",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/cards/{id}/markAssociatedNotificationsRead",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "markAssociatedNotificationsRead",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "markAssociatedNotificationsRead",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "mark_associated_notifications_read",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/card",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "card",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "card",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/cards",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "cards",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "cards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "visible",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lists/{id}/cards",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "list_id",
                  },
                  {
                    ["lit"] = "cards",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{list_id}",
                  "cards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "list_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "list_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "list_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "action",
                      ["orig"] = "action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "attachment",
                      ["orig"] = "attachment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "attachment_field",
                      ["orig"] = "attachment_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "check_item_state",
                      ["orig"] = "check_item_state",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "checklist",
                      ["orig"] = "checklist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "checklist_field",
                      ["orig"] = "checklist_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "custom_field_item",
                      ["orig"] = "custom_field_item",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "member_voted_field",
                      ["orig"] = "member_voted_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "members_voted",
                      ["orig"] = "members_voted",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "plugin_data",
                      ["orig"] = "plugin_data",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "sticker",
                      ["orig"] = "sticker",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "sticker_field",
                      ["orig"] = "sticker_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "sticker_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/cards/{filter}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "cards",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["filter"] = "id",
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/card",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "notification_id",
                  },
                  {
                    ["lit"] = "card",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{notification_id}",
                  "card",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "notification_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "notification_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "notification_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/cards",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "cards",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "cards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/cards",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "cards",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{checklist_id}",
                  "cards",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "checklist_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "address",
                      ["orig"] = "address",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "closed",
                      ["orig"] = "closed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "coordinate",
                      ["orig"] = "coordinate",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "cover",
                      ["orig"] = "cover",
                      ["type"] = "`$OBJECT`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due",
                      ["orig"] = "due",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due_complete",
                      ["orig"] = "due_complete",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_attachment_cover",
                      ["orig"] = "id_attachment_cover",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_label",
                      ["orig"] = "id_label",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_list",
                      ["orig"] = "id_list",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "location_name",
                      ["orig"] = "location_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "start",
                      ["orig"] = "start",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "subscribed",
                      ["orig"] = "subscribed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "subscribed",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{idCard}/customFields",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id_card",
                  },
                  {
                    ["lit"] = "customFields",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id_card}",
                  "customFields",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idCard"] = "id_card",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {},
                ["select"] = {
                  ["$action"] = "custom_field",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.checklist",
            },
            {
              "$.main.kit.entity.list",
            },
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.notification",
            },
          },
        },
      },
      ["card_check_item_state"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "card_check_item_state",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/checkItemStates",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "checkItemStates",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "checkItemStates",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["card_list"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "card_list",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/list",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "list",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id}",
                  "list",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["check_item"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idChecklist",
            ["title"] = "Id Checklist",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "nameData",
            ["title"] = "Name Data",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "state",
            ["title"] = "State",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "check_item",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/checkItem/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "checkItem",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "checkItem",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idCheckItem"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,nameData,pos,state,due,dueReminder,idMember",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/checkItems",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "checkItems",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{checklist_id}",
                  "checkItems",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "checklist_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name, nameData, pos, state, due, dueReminder, idMember",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "field",
                    "filter",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/checkItems/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "checkItems",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{checklist_id}",
                  "checkItems",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "checklist_id",
                    ["idCheckItem"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name, nameData, pos, state, due, dueReminder, idMember",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "field",
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/checkItem/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "checkItem",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "checkItem",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idCheckItem"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/checklists/{id}/checkItems/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "checkItems",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{checklist_id}",
                  "checkItems",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "checklist_id",
                    ["idCheckItem"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{id}/checkItem/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "checkItem",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "checkItem",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idCheckItem"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "due",
                      ["orig"] = "due",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due_reminder",
                      ["orig"] = "due_reminder",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_checklist",
                      ["orig"] = "id_checklist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "state",
                      ["orig"] = "state",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "due",
                    "due_reminder",
                    "id",
                    "id_checklist",
                    "id_member",
                    "name",
                    "pos",
                    "state",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id_card",
                  },
                  {
                    ["lit"] = "checklist",
                  },
                  {
                    ["var"] = "checklist_id",
                  },
                  {
                    ["lit"] = "checkItem",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id_card}",
                  "checklist",
                  "{checklist_id}",
                  "checkItem",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idCard"] = "id_card",
                    ["idCheckItem"] = "id",
                    ["idChecklist"] = "checklist_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "checklist_id",
                      ["orig"] = "id_checklist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_card",
                      ["orig"] = "id_card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "id",
                    "id_card",
                    "pos",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
            {
              "$.main.kit.entity.card",
              "$.main.kit.entity.checklist",
            },
          },
        },
      },
      ["checklist"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "checklist",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/checklists/{id}/checkItems",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "checkItems",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                  "checkItems",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "checked",
                      ["orig"] = "checked",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "due",
                      ["orig"] = "due",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "due_reminder",
                      ["orig"] = "due_reminder",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "bottom",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "check_item",
                  ["exist"] = {
                    "checked",
                    "due",
                    "due_reminder",
                    "id",
                    "id_member",
                    "name",
                    "pos",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/checklists",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                },
                ["parts"] = {
                  "checklists",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "id_card",
                      ["orig"] = "id_card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_checklist_source",
                      ["orig"] = "id_checklist_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_card",
                    "id_checklist_source",
                    "name",
                    "pos",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "check_item",
                      ["orig"] = "check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "check_item_field",
                      ["orig"] = "check_item_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name, nameData, pos, state, due, dueReminder, idMember",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card",
                    "check_item",
                    "check_item_field",
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/checklists",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "checklists",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "checklists",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "check_item",
                      ["orig"] = "check_item",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "check_item_field",
                      ["orig"] = "check_item_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,nameData,pos,state,due,dueReminder,idMember",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "check_item",
                    "check_item_field",
                    "field",
                    "filter",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/checklists",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "checklists",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "checklists",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/checklists/{idChecklist}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "checklists",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idChecklist"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_checklist",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/checklists/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/checklists/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/checklists/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "checklists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "checklists",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "name",
                    "pos",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["claimable_organization"] = {
        ["fields"] = {
          {
            ["name"] = "activeMembershipCount",
            ["title"] = "Active Membership Count",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "dateLastActive",
            ["title"] = "Date Last Active",
            ["type"] = "`$STRING`",
            ["short"] = "The date of the most recent activity on any of the boards in the workspace.",
            ["format"] = "date",
          },
          {
            ["name"] = "displayName",
            ["title"] = "Display Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idActiveAdmins",
            ["title"] = "Id Active Admins",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "logoUrl",
            ["title"] = "Logo Url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "products",
            ["title"] = "Products",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "claimable_organization",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/claimableOrganizations",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "claimableOrganizations",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "claimableOrganizations",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.organizations`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "active_since",
                      ["orig"] = "active_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "inactive_since",
                      ["orig"] = "inactive_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active_since",
                    "cursor",
                    "enterprise_id",
                    "inactive_since",
                    "limit",
                    "name",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.enterprise",
            },
          },
        },
      },
      ["custom_board_background"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_board_background",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/members/{id}/customBoardBackgrounds/{idBackground}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customBoardBackgrounds",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customBoardBackgrounds",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idBackground"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["custom_emoji"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_emoji",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/customEmoji",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customEmoji",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customEmoji",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "file",
                    "member_id",
                    "name",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customEmoji",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customEmoji",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customEmoji",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customEmoji/{idEmoji}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customEmoji",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customEmoji",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idEmoji"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_emoji",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["custom_field"] = {
        ["fields"] = {
          {
            ["name"] = "cardFront",
            ["title"] = "Card Front",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "display",
            ["title"] = "Display",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "display_cardFront",
            ["title"] = "Display Card Front",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether this Custom Field should be shown on the front of Cards",
          },
          {
            ["name"] = "displaycardFront",
            ["title"] = "Displaycard Front",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether to display this custom field on the front of cards",
          },
          {
            ["name"] = "fieldGroup",
            ["title"] = "Field Group",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idModel",
            ["title"] = "Id Model",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The ID of the model for which the Custom Field is being defined.",
          },
          {
            ["name"] = "modelType",
            ["title"] = "Model Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The type of model that the Custom Field is being defined on.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The name of the Custom Field",
          },
          {
            ["name"] = "options",
            ["title"] = "Options",
            ["type"] = "`$ARRAY`",
            ["short"] = "If the type is `checkbox`",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$STRING`",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$ANY`",
              },
            },
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["req"] = true,
            ["op"] = {
              ["list"] = {
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The type of Custom Field to create.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_field",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/customFields/{id}/options",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "options",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{id}",
                  "options",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "option",
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/customFields",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                },
                ["parts"] = {
                  "customFields",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.display`",
                },
                ["args"] = {},
                ["select"] = {},
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/customFields",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "customFields",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "customFields",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customFields/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.display`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/customFields/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{idCard}/customField/{idCustomField}/item",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "id_card",
                  },
                  {
                    ["lit"] = "customField",
                  },
                  {
                    ["var"] = "id_custom_field",
                  },
                  {
                    ["lit"] = "item",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{id_card}",
                  "customField",
                  "{id_custom_field}",
                  "item",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idCard"] = "id_card",
                    ["idCustomField"] = "id_custom_field",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_card",
                      ["orig"] = "id_card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_custom_field",
                      ["orig"] = "id_custom_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "item",
                  ["exist"] = {
                    "id_card",
                    "id_custom_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/customFields/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.display`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["custom_field_item"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idCustomField",
            ["title"] = "Id Custom Field",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idModel",
            ["title"] = "Id Model",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "modelType",
            ["title"] = "Model Type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "value",
            ["title"] = "Value",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_field_item",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/customFieldItems",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "customFieldItems",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "customFieldItems",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["custom_sticker"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "scaled",
            ["title"] = "Scaled",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "custom_sticker",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/customStickers",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customStickers",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customStickers",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "file",
                    "member_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customStickers",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customStickers",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customStickers",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/customStickers/{idSticker}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customStickers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customStickers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idSticker"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/members/{id}/customStickers/{idSticker}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "customStickers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "customStickers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idSticker"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["email_position"] = {
        ["fields"] = {},
        ["name"] = "email_position",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/emailPosition",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "emailPosition",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "emailPosition",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["emoji"] = {
        ["fields"] = {
          {
            ["name"] = "category",
            ["title"] = "Category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "keywords",
            ["title"] = "Keywords",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "native",
            ["title"] = "Native",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sheetX",
            ["title"] = "Sheet X",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "sheetY",
            ["title"] = "Sheet Y",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "shortName",
            ["title"] = "Short Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortNames",
            ["title"] = "Short Names",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "text",
            ["title"] = "Text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "texts",
            ["title"] = "Texts",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tts",
            ["title"] = "Tts",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unified",
            ["title"] = "Unified",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "emoji",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/emoji",
                ["segments"] = {
                  {
                    ["lit"] = "emoji",
                  },
                },
                ["parts"] = {
                  "emoji",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.trello`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "locale",
                      ["orig"] = "locale",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "spritesheet",
                      ["orig"] = "spritesheet",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "locale",
                    "spritesheet",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["enterprise"] = {
        ["fields"] = {
          {
            ["name"] = "dateOrganizationPrefsLastUpdated",
            ["title"] = "Date Organization Prefs Last Updated",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "displayName",
            ["title"] = "Display Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "domains",
            ["title"] = "Domains",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "enterpriseDomains",
            ["title"] = "Enterprise Domains",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idAdmins",
            ["title"] = "Id Admins",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idOrganizations",
            ["title"] = "Id Organizations",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idp",
            ["title"] = "Idp",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "isRealEnterprise",
            ["title"] = "Is Real Enterprise",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "licenses",
            ["title"] = "Licenses",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "logoHash",
            ["title"] = "Logo Hash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "logoUrl",
            ["title"] = "Logo Url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "organizationPrefs",
            ["title"] = "Organization Prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "pluginWhitelistingEnabled",
            ["title"] = "Plugin Whitelisting Enabled",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "prefs",
            ["title"] = "Prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "products",
            ["title"] = "Products",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "ssoActivationFailed",
            ["title"] = "Sso Activation Failed",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "enterprise",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/enterprises/{id}/tokens",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "tokens",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                  "tokens",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "expiration",
                      ["orig"] = "expiration",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "token",
                  ["exist"] = {
                    "expiration",
                    "id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "member_count",
                      ["orig"] = "member_count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "10",
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash, fullName, initials, username",
                    },
                    {
                      ["name"] = "member_filter",
                      ["orig"] = "member_filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "member_sort",
                      ["orig"] = "member_sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "member_sort_by",
                      ["orig"] = "member_sort_by",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "member_sort_order",
                      ["orig"] = "member_sort_order",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "id",
                    },
                    {
                      ["name"] = "member_start_index",
                      ["orig"] = "member_start_index",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "1",
                    },
                    {
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organization_membership",
                      ["orig"] = "organization_membership",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organization_paid_account",
                      ["orig"] = "organization_paid_account",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "organization_paid_account",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/enterprises/{id}/organizations",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "organizations",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                  "organizations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "organization",
                  ["exist"] = {
                    "id",
                    "id_organization",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["enterprise_admin"] = {
        ["fields"] = {
          {
            ["name"] = "fullName",
            ["title"] = "Full Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "username",
            ["title"] = "Username",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "enterprise_admin",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/admins",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "admins",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                  "admins",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "fullName, userName",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["enterprise_audit_log"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idAction",
            ["title"] = "Id Action",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "member",
            ["title"] = "Member",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "memberCreator",
            ["title"] = "Member Creator",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "organization",
            ["title"] = "Organization",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "enterprise_audit_log",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/auditlog",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "auditlog",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                  "auditlog",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "auditlog",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["enterprise_signup_url"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "signupUrl",
            ["title"] = "Signup Url",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "enterprise_signup_url",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/signupUrl",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "signupUrl",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{id}",
                  "signupUrl",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "authenticate",
                      ["orig"] = "authenticate",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "confirmation_accepted",
                      ["orig"] = "confirmation_accepted",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "return_url",
                      ["orig"] = "return_url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "tos_accepted",
                      ["orig"] = "tos_accepted",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "authenticate",
                    "confirmation_accepted",
                    "id",
                    "return_url",
                    "tos_accepted",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["export"] = {
        ["fields"] = {
          {
            ["name"] = "attempts",
            ["title"] = "Attempts",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "exportUrl",
            ["title"] = "Export Url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "finished",
            ["title"] = "Finished",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "size",
            ["title"] = "Size",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stage",
            ["title"] = "Stage",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "startedAt",
            ["title"] = "Started At",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "export",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/exports",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "exports",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.status`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "attachment",
                      ["orig"] = "attachment",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "attachment_age",
                      ["orig"] = "attachment_age",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "attachment",
                    "attachment_age",
                    "board_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/organizations/{id}/exports",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "exports",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.status`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "attachment",
                      ["orig"] = "attachment",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "attachment",
                    "organization_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/exports",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "exports",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/exports/{idExport}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "exports",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idExport"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.status`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_export",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/exports/mostRecent",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                  {
                    ["lit"] = "mostRecent",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "exports",
                  "mostRecent",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.status`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "most_recent",
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/boards/{id}/exports/{idExport}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "exports",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idExport"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_export",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["export_download"] = {
        ["fields"] = {},
        ["name"] = "export_download",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/exports/{idExport}/download",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "exports",
                  },
                  {
                    ["var"] = "id_export",
                  },
                  {
                    ["lit"] = "download",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "exports",
                  "{id_export}",
                  "download",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idExport"] = "id_export",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_export",
                      ["orig"] = "id_export",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id_export",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
              "$.main.kit.entity.export",
            },
          },
        },
      },
      ["generate"] = {
        ["fields"] = {},
        ["name"] = "generate",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/calendarKey/generate",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "calendarKey",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "calendarKey",
                  "generate",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/emailKey/generate",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "emailKey",
                  },
                  {
                    ["lit"] = "generate",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "emailKey",
                  "generate",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["id_email_list"] = {
        ["fields"] = {},
        ["name"] = "id_email_list",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/idEmailList",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "idEmailList",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "idEmailList",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["id_label"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "id_label",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/idLabels/{idLabel}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "idLabels",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "idLabels",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idLabel"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_label",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["id_member"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "id_member",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/idMembers/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "idMembers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "idMembers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["label"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "label",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/labels",
                ["segments"] = {
                  {
                    ["lit"] = "labels",
                  },
                },
                ["parts"] = {
                  "labels",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "color",
                    "id_board",
                    "name",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/labels",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "labels",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "labels",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$OBJECT`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 50,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "field",
                    "limit",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/labels/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "labels",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "labels",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/labels/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "labels",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "labels",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/labels/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "labels",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "labels",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "color",
                    "id",
                    "name",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/labels/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "labels",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "labels",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["list"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "list",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lists",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                },
                ["parts"] = {
                  "lists",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_list_source",
                      ["orig"] = "id_list_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_board",
                    "id_list_source",
                    "name",
                    "pos",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lists/{id}/moveAllCards",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "moveAllCards",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                  "moveAllCards",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_list",
                      ["orig"] = "id_list",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "move_all_card",
                  ["exist"] = {
                    "id",
                    "id_board",
                    "id_list",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/lists/{id}/archiveAllCards",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "archiveAllCards",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                  "archiveAllCards",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "archive_all_card",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/lists/{filter}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "lists",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["filter"] = "id",
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lists/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,closed,idBoard,pos",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/lists/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "closed",
                      ["orig"] = "closed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "subscribed",
                      ["orig"] = "subscribed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "closed",
                    "id",
                    "id_board",
                    "name",
                    "pos",
                    "subscribed",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/lists/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/lists/{id}/closed",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "closed",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                  "closed",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "closed",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/lists/{id}/idBoard",
                ["segments"] = {
                  {
                    ["lit"] = "lists",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "idBoard",
                  },
                },
                ["parts"] = {
                  "lists",
                  "{id}",
                  "idBoard",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "id_board",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["member"] = {
        ["fields"] = {
          {
            ["name"] = "aaEmail",
            ["title"] = "Aa Email",
            ["type"] = "`$STRING`",
            ["format"] = "email",
          },
          {
            ["name"] = "aaEnrolledDate",
            ["title"] = "Aa Enrolled Date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "aaId",
            ["title"] = "Aa Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "activityBlocked",
            ["title"] = "Activity Blocked",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "avatarHash",
            ["title"] = "Avatar Hash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "avatarSource",
            ["title"] = "Avatar Source",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "avatarUrl",
            ["title"] = "Avatar Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "bio",
            ["title"] = "Bio",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "bioData",
            ["title"] = "Bio Data",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "confirmed",
            ["title"] = "Confirmed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "email",
            ["title"] = "Email",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "fullName",
            ["title"] = "Full Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "gravatarHash",
            ["title"] = "Gravatar Hash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idBoards",
            ["title"] = "Id Boards",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idBoardsPinned",
            ["title"] = "Id Boards Pinned",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idEnterprise",
            ["title"] = "Id Enterprise",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idEnterprisesAdmin",
            ["title"] = "Id Enterprises Admin",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idEnterprisesDeactivated",
            ["title"] = "Id Enterprises Deactivated",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idMemberReferrer",
            ["title"] = "Id Member Referrer",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idOrganizations",
            ["title"] = "Id Organizations",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idPremOrgsAdmin",
            ["title"] = "Id Prem Orgs Admin",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "initials",
            ["title"] = "Initials",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "isAaMastered",
            ["title"] = "Is Aa Mastered",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "ixUpdate",
            ["title"] = "Ix Update",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "limits",
            ["title"] = "Limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "loginTypes",
            ["title"] = "Login Types",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "marketingOptIn",
            ["title"] = "Marketing Opt In",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "memberType",
            ["title"] = "Member Type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "messagesDismissed",
            ["title"] = "Messages Dismissed",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "nonPublic",
            ["title"] = "Non Public",
            ["type"] = "`$OBJECT`",
            ["short"] = "Profile data with restricted visibility.",
          },
          {
            ["name"] = "nonPublicAvailable",
            ["title"] = "Non Public Available",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether the response contains non-public profile data for the member",
          },
          {
            ["name"] = "oneTimeMessagesDismissed",
            ["title"] = "One Time Messages Dismissed",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "prefs",
            ["title"] = "Prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "premiumFeatures",
            ["title"] = "Premium Features",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "products",
            ["title"] = "Products",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "trophies",
            ["title"] = "Trophies",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "uploadedAvatarHash",
            ["title"] = "Uploaded Avatar Hash",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "uploadedAvatarUrl",
            ["title"] = "Uploaded Avatar Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "username",
            ["title"] = "Username",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "member",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/avatar",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "avatar",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                  "avatar",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "avatar",
                  ["exist"] = {
                    "file",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/boardBackgrounds",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "boardBackgrounds",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                  "boardBackgrounds",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "board_background",
                  ["exist"] = {
                    "file",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/oneTimeMessagesDismissed",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "oneTimeMessagesDismissed",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                  "oneTimeMessagesDismissed",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "one_time_messages_dismissed",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name",
                    },
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash, fullName, initials, username",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "displayName",
                    },
                    {
                      ["name"] = "sort",
                      ["orig"] = "sort",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_by",
                      ["orig"] = "sort_by",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "sort_order",
                      ["orig"] = "sort_order",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = nil,
                    },
                    {
                      ["name"] = "start_index",
                      ["orig"] = "start_index",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_field",
                    "count",
                    "enterprise_id",
                    "field",
                    "filter",
                    "organization_field",
                    "sort",
                    "sort_by",
                    "sort_order",
                    "start_index",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search/members/",
                ["segments"] = {
                  {
                    ["lit"] = "search",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "search",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 8,
                    },
                    {
                      ["name"] = "only_org_member",
                      ["orig"] = "only_org_member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_board",
                    "id_organization",
                    "limit",
                    "only_org_member",
                    "query",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/member",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "member",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "member",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/memberCreator",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "memberCreator",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "memberCreator",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tokens/{token}/member",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "member",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "member",
                },
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "token_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "action",
                      ["orig"] = "action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "board_background",
                      ["orig"] = "board_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "board_star",
                      ["orig"] = "board_star",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "boards_invited",
                      ["orig"] = "boards_invited",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "boards_invited_field",
                      ["orig"] = "boards_invited_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,closed,idOrganization,pinned",
                    },
                    {
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "custom_board_background",
                      ["orig"] = "custom_board_background",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "custom_emoji",
                      ["orig"] = "custom_emoji",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "custom_sticker",
                      ["orig"] = "custom_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "notification",
                      ["orig"] = "notification",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "organization_paid_account",
                      ["orig"] = "organization_paid_account",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "organizations_invited",
                      ["orig"] = "organizations_invited",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "organizations_invited_field",
                      ["orig"] = "organizations_invited_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "paid_account",
                      ["orig"] = "paid_account",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "saved_search",
                      ["orig"] = "saved_search",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "token",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "token",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/members/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "members",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash, fullName, initials, username",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "displayName",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_field",
                    "enterprise_id",
                    "field",
                    "id",
                    "organization_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/member",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "notification_id",
                  },
                  {
                    ["lit"] = "member",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{notification_id}",
                  "member",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "notification_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "notification_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "notification_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "members",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/boards/{id}/members/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "members",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/members/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "members",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "organization_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/members/{idMember}/all",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id_member",
                  },
                  {
                    ["lit"] = "all",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "members",
                  "{id_member}",
                  "all",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idMember"] = "id_member",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "all",
                  ["exist"] = {
                    "id_member",
                    "organization_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "avatar_source",
                      ["orig"] = "avatar_source",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "bio",
                      ["orig"] = "bio",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "full_name",
                      ["orig"] = "full_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "initial",
                      ["orig"] = "initial",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/color_blind",
                      ["orig"] = "prefs/color_blind",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/locale",
                      ["orig"] = "prefs/locale",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/minutes_between_summary",
                      ["orig"] = "prefs/minutes_between_summary",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "username",
                      ["orig"] = "username",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "avatar_source",
                    "bio",
                    "full_name",
                    "id",
                    "initial",
                    "prefs/color_blind",
                    "prefs/locale",
                    "prefs/minutes_between_summary",
                    "username",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/enterprises/{id}/members/{idMember}/deactivated",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id_member",
                  },
                  {
                    ["lit"] = "deactivated",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "members",
                  "{id_member}",
                  "deactivated",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idMember"] = "id_member",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash, fullName, initials, username",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "displayName",
                    },
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "deactivated",
                  ["exist"] = {
                    "board_field",
                    "enterprise_id",
                    "field",
                    "id_member",
                    "organization_field",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/members/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "members",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "allow_billable_guest",
                      ["orig"] = "allow_billable_guest",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "allow_billable_guest",
                    "board_id",
                    "id",
                    "type",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/enterprises/{id}/members/{idMember}/licensed",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id_member",
                  },
                  {
                    ["lit"] = "licensed",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "members",
                  "{id_member}",
                  "licensed",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idMember"] = "id_member",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "licensed",
                  ["exist"] = {
                    "enterprise_id",
                    "id_member",
                    "value",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/organizations/{id}/members/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "members",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "organization_id",
                    "type",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/organizations/{id}/members/{idMember}/deactivated",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id_member",
                  },
                  {
                    ["lit"] = "deactivated",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "members",
                  "{id_member}",
                  "deactivated",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idMember"] = "id_member",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_member",
                      ["orig"] = "id_member",
                      ["type"] = "`$ANY`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "deactivated",
                  ["exist"] = {
                    "id_member",
                    "organization_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.card",
            },
            {
              "$.main.kit.entity.enterprise",
            },
            {
              "$.main.kit.entity.notification",
            },
            {
              "$.main.kit.entity.organization",
            },
            {
              "$.main.kit.entity.token",
            },
            {
              "$.main.kit.entity.enterprise",
            },
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["member_privacy"] = {
        ["fields"] = {},
        ["name"] = "member_privacy",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/plugins/{id}/compliance/memberPrivacy",
                ["segments"] = {
                  {
                    ["lit"] = "plugins",
                  },
                  {
                    ["var"] = "plugin_id",
                  },
                  {
                    ["lit"] = "compliance",
                  },
                  {
                    ["lit"] = "memberPrivacy",
                  },
                },
                ["parts"] = {
                  "plugins",
                  "{plugin_id}",
                  "compliance",
                  "memberPrivacy",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "plugin_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "plugin_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "plugin_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.plugin",
            },
          },
        },
      },
      ["members_voted"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "members_voted",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/membersVoted",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "membersVoted",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "membersVoted",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/membersVoted/{idMember}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "membersVoted",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "membersVoted",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idMember"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_member",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["membership"] = {
        ["fields"] = {
          {
            ["name"] = "admin",
            ["title"] = "Admin",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "collaborator",
            ["title"] = "Collaborator",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "deactivated",
            ["title"] = "Deactivated",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "licensed",
            ["title"] = "Licensed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "managed",
            ["title"] = "Managed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "member",
            ["title"] = "Member",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "membership",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/members/query",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["lit"] = "query",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "members",
                  "query",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "active_since",
                      ["orig"] = "active_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "admin",
                      ["orig"] = "admin",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "collaborator",
                      ["orig"] = "collaborator",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "cursor",
                      ["orig"] = "cursor",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "deactivated",
                      ["orig"] = "deactivated",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "inactive_since",
                      ["orig"] = "inactive_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "licensed",
                      ["orig"] = "licensed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "managed",
                      ["orig"] = "managed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                    {
                      ["name"] = "search",
                      ["orig"] = "search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "none",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active_since",
                    "admin",
                    "collaborator",
                    "cursor",
                    "deactivated",
                    "enterprise_id",
                    "inactive_since",
                    "licensed",
                    "managed",
                    "search",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/memberships",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "memberships",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "memberships",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "filter",
                    "member",
                    "organization_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/memberships",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "memberships",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "memberships",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "activity",
                      ["orig"] = "activity",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "fullname,username",
                    },
                    {
                      ["name"] = "org_member_type",
                      ["orig"] = "org_member_type",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "activity",
                    "board_id",
                    "filter",
                    "member",
                    "member_field",
                    "org_member_type",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/memberships/{idMembership}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "memberships",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "memberships",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idMembership"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_membership",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member",
                    "organization_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/memberships/{idMembership}",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "memberships",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "memberships",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                    ["idMembership"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_membership",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "fullName, username",
                    },
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "id",
                    "member_field",
                    "type",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
            {
              "$.main.kit.entity.enterprise",
            },
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["new_billable_guest"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "new_billable_guest",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/newBillableGuests/{idBoard}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "newBillableGuests",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "newBillableGuests",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idBoard"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_board",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "organization_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["notification"] = {
        ["fields"] = {
          {
            ["name"] = "board",
            ["title"] = "Board",
            ["type"] = "`$OBJECT`",
            ["req"] = true,
          },
          {
            ["name"] = "card",
            ["title"] = "Card",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "data",
            ["title"] = "Data",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateRead",
            ["title"] = "Date Read",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idAction",
            ["title"] = "Id Action",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMemberCreator",
            ["title"] = "Id Member Creator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "reactions",
            ["title"] = "Reactions",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "unread",
            ["title"] = "Unread",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "notification",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/notifications",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "notifications",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "notifications",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "before",
                      ["orig"] = "before",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "display",
                      ["orig"] = "display",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "entity",
                      ["orig"] = "entity",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "50",
                    },
                    {
                      ["name"] = "member_creator",
                      ["orig"] = "member_creator",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator_field",
                      ["orig"] = "member_creator_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "0",
                    },
                    {
                      ["name"] = "read_filter",
                      ["orig"] = "read_filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "since",
                      ["orig"] = "since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "since",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "board",
                      ["orig"] = "board",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name",
                    },
                    {
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "card_field",
                      ["orig"] = "card_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name",
                    },
                    {
                      ["name"] = "display",
                      ["orig"] = "display",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "entity",
                      ["orig"] = "entity",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator",
                      ["orig"] = "member_creator",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member_creator_field",
                      ["orig"] = "member_creator_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username",
                    },
                    {
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "displayName",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "organization_field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/notifications/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "unread",
                      ["orig"] = "unread",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "unread",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/notifications/{id}/unread",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "unread",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                  "unread",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "unread",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["notification_channel_setting"] = {
        ["fields"] = {
          {
            ["name"] = "blockedKeys",
            ["title"] = "Blocked Keys",
            ["type"] = "`$ARRAY`",
            ["op"] = {
              ["update"] = {
                ["req"] = true,
                ["type"] = "`$ANY`",
              },
            },
            ["short"] = "Singular key or array of notification keys",
          },
          {
            ["name"] = "channel",
            ["title"] = "Channel",
            ["type"] = "`$STRING`",
            ["op"] = {
              ["update"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMember",
            ["title"] = "Id Member",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["from"] = {
            ["channel"] = "channel",
          },
          ["name"] = "id",
          ["parts"] = {
            "channel",
            "blocked_key",
          },
          ["sep"] = "/",
        },
        ["name"] = "notification_channel_setting",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/notificationsChannelSettings",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "notificationsChannelSettings",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "notificationsChannelSettings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/notificationsChannelSettings/{channel}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "notificationsChannelSettings",
                  },
                  {
                    ["var"] = "channel",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "notificationsChannelSettings",
                  "{channel}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "channel",
                      ["orig"] = "channel",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "email",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "channel",
                    "member_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "notificationsChannelSettings",
                  },
                  {
                    ["var"] = "channel",
                  },
                  {
                    ["var"] = "blocked_key",
                  },
                },
                ["parts"] = {
                  "members",
                  "{id}",
                  "notificationsChannelSettings",
                  "{channel}",
                  "{blocked_key}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["blockedKeys"] = "blocked_key",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "blocked_key",
                      ["orig"] = "blocked_key",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "notification_comment_card",
                    },
                    {
                      ["name"] = "channel",
                      ["orig"] = "channel",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "email",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "blocked_key",
                    "channel",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/notificationsChannelSettings/{channel}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "notificationsChannelSettings",
                  },
                  {
                    ["var"] = "channel",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "notificationsChannelSettings",
                  "{channel}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "channel",
                      ["orig"] = "channel",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "email",
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "channel",
                    "member_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/notificationsChannelSettings",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "notificationsChannelSettings",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "notificationsChannelSettings",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["notification_list"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "notification_list",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/list",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "list",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                  "list",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["notification_member_creator"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "notification_member_creator",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/memberCreator",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "memberCreator",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{id}",
                  "memberCreator",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["option"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "option",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customFields/{id}/options/{idCustomFieldOption}",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "custom_field_id",
                  },
                  {
                    ["lit"] = "options",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{custom_field_id}",
                  "options",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "custom_field_id",
                    ["idCustomFieldOption"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "custom_field_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_custom_field_option",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "custom_field_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/customFields/{id}/options",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "custom_field_id",
                  },
                  {
                    ["lit"] = "options",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{custom_field_id}",
                  "options",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "custom_field_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "custom_field_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "custom_field_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/customFields/{id}/options/{idCustomFieldOption}",
                ["segments"] = {
                  {
                    ["lit"] = "customFields",
                  },
                  {
                    ["var"] = "custom_field_id",
                  },
                  {
                    ["lit"] = "options",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "customFields",
                  "{custom_field_id}",
                  "options",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "custom_field_id",
                    ["idCustomFieldOption"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "custom_field_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_custom_field_option",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "custom_field_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.custom_field",
            },
          },
        },
      },
      ["org_invite_restrict"] = {
        ["fields"] = {},
        ["name"] = "org_invite_restrict",
        ["op"] = {
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/prefs/orgInviteRestrict",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "prefs",
                  },
                  {
                    ["lit"] = "orgInviteRestrict",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "prefs",
                  "orgInviteRestrict",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["organization"] = {
        ["fields"] = {
          {
            ["name"] = "dateLastActivity",
            ["title"] = "Date Last Activity",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "displayName",
            ["title"] = "Display Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idBoards",
            ["title"] = "Id Boards",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "idEnterprise",
            ["title"] = "Id Enterprise",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "memberships",
            ["title"] = "Memberships",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "offering",
            ["title"] = "Offering",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prefs",
            ["title"] = "Prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "premiumFeatures",
            ["title"] = "Premium Features",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "url",
            ["title"] = "Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "organization",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/organizations",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                },
                ["parts"] = {
                  "organizations",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "display_name",
                      ["orig"] = "display_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "website",
                      ["orig"] = "website",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "desc",
                    "display_name",
                    "name",
                    "website",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/organizations/{id}/logo",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "logo",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                  "logo",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "file",
                      ["orig"] = "file",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "logo",
                  ["exist"] = {
                    "file",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/organizations/{id}/tags",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "tags",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                  "tags",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "tag",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/organizations",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "organizations",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "organizations",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "count",
                      ["orig"] = "count",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "start_index",
                      ["orig"] = "start_index",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "count",
                    "enterprise_id",
                    "field",
                    "filter",
                    "start_index",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/organizations",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "organizations",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "organizations",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "paid_account",
                      ["orig"] = "paid_account",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "filter",
                    "member_id",
                    "paid_account",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/organization",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "organization",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "organization",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/organizationsInvited",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "organizationsInvited",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "organizationsInvited",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/organization",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["var"] = "notification_id",
                  },
                  {
                    ["lit"] = "organization",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "{notification_id}",
                  "organization",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "notification_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "notification_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "notification_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/enterprises/{id}/organizations/{idOrg}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "organizations",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idOrg"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_org",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/logo",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "logo",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                  "logo",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "logo",
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/organizations/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "display_name",
                      ["orig"] = "display_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/associated_domain",
                      ["orig"] = "prefs/associated_domain",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/board_visibility_restrict/org",
                      ["orig"] = "prefs/board_visibility_restrict/org",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/board_visibility_restrict/private",
                      ["orig"] = "prefs/board_visibility_restrict/private",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/board_visibility_restrict/public",
                      ["orig"] = "prefs/board_visibility_restrict/public",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/external_members_disabled",
                      ["orig"] = "prefs/external_members_disabled",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/google_apps_version",
                      ["orig"] = "prefs/google_apps_version",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/org_invite_restrict",
                      ["orig"] = "prefs/org_invite_restrict",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "prefs/permission_level",
                      ["orig"] = "prefs/permission_level",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "website",
                      ["orig"] = "website",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "website",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/organizations/{id}/members",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "members",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{id}",
                  "members",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "email",
                      ["orig"] = "email",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "full_name",
                      ["orig"] = "full_name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "normal",
                    },
                  },
                },
                ["select"] = {
                  ["$action"] = "member",
                  ["exist"] = {
                    "email",
                    "full_name",
                    "id",
                    "type",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
            {
              "$.main.kit.entity.enterprise",
            },
            {
              "$.main.kit.entity.member",
            },
            {
              "$.main.kit.entity.notification",
            },
          },
        },
      },
      ["pending_organization"] = {
        ["fields"] = {
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "displayName",
            ["title"] = "Display Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMember",
            ["title"] = "Id Member",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "logoUrl",
            ["title"] = "Logo Url",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "memberRequestor",
            ["title"] = "Member Requestor",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "membershipCount",
            ["title"] = "Membership Count",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "transferability",
            ["title"] = "Transferability",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "pending_organization",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/pendingOrganizations",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "pendingOrganizations",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "pendingOrganizations",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "active_since",
                      ["orig"] = "active_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "inactive_since",
                      ["orig"] = "inactive_since",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active_since",
                    "enterprise_id",
                    "inactive_since",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.enterprise",
            },
          },
        },
      },
      ["plugin"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "plugin",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/boardPlugins",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "boardPlugins",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "boardPlugins",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/plugins",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "plugins",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "plugins",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "enabled",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "filter",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/plugins/{id}/",
                ["segments"] = {
                  {
                    ["lit"] = "plugins",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "plugins",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/plugins/{id}/",
                ["segments"] = {
                  {
                    ["lit"] = "plugins",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "plugins",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["plugin_data"] = {
        ["fields"] = {},
        ["name"] = "plugin_data",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/pluginData",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "pluginData",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "pluginData",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/pluginData",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "pluginData",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "pluginData",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["plugin_listing"] = {
        ["fields"] = {
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
            ["short"] = "The description to show for the given locale",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "locale",
            ["title"] = "Locale",
            ["type"] = "`$STRING`",
            ["short"] = "The locale that this listing should be displayed for.",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "The name to use for the given locale.",
          },
          {
            ["name"] = "overview",
            ["title"] = "Overview",
            ["type"] = "`$STRING`",
            ["short"] = "The overview to show for the given locale.",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "plugin_listing",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/plugins/{idPlugin}/listing",
                ["segments"] = {
                  {
                    ["lit"] = "plugins",
                  },
                  {
                    ["var"] = "id_plugin",
                  },
                  {
                    ["lit"] = "listing",
                  },
                },
                ["parts"] = {
                  "plugins",
                  "{id_plugin}",
                  "listing",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idPlugin"] = "id_plugin",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_plugin",
                      ["orig"] = "id_plugin",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id_plugin",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/plugins/{idPlugin}/listings/{idListing}",
                ["segments"] = {
                  {
                    ["lit"] = "plugins",
                  },
                  {
                    ["var"] = "id_plugin",
                  },
                  {
                    ["lit"] = "listings",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "plugins",
                  "{id_plugin}",
                  "listings",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idListing"] = "id",
                    ["idPlugin"] = "id_plugin",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_listing",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_plugin",
                      ["orig"] = "id_plugin",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "id_plugin",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.plugin",
            },
          },
        },
      },
      ["reaction"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "reaction",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{idAction}/reactions/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "reactions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id_action}",
                  "reactions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "emoji",
                      ["orig"] = "emoji",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "emoji",
                    "id",
                    "id_action",
                    "member",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{idAction}/reactions",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "reactions",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id_action}",
                  "reactions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "emoji",
                      ["orig"] = "emoji",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                    {
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "emoji",
                    "id_action",
                    "member",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/actions/{idAction}/reactions/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "id_action",
                  },
                  {
                    ["lit"] = "reactions",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{id_action}",
                  "reactions",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idAction"] = "id_action",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id_action",
                      ["orig"] = "id_action",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "id_action",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
          },
        },
      },
      ["read"] = {
        ["fields"] = {},
        ["name"] = "read",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/notifications/all/read",
                ["segments"] = {
                  {
                    ["lit"] = "notifications",
                  },
                  {
                    ["lit"] = "all",
                  },
                  {
                    ["lit"] = "read",
                  },
                },
                ["parts"] = {
                  "notifications",
                  "all",
                  "read",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "ids",
                      ["orig"] = "ids",
                      ["type"] = "`$ARRAY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "read",
                      ["orig"] = "read",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "ids",
                    "read",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["saved_search"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$ANY`",
          },
          {
            ["name"] = "query",
            ["title"] = "Query",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "saved_search",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/members/{id}/savedSearches",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "savedSearches",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "savedSearches",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.pos`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                    "name",
                    "pos",
                    "query",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/savedSearches",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "savedSearches",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "savedSearches",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/savedSearches/{idSearch}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "savedSearches",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "savedSearches",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idSearch"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.pos`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/members/{id}/savedSearches/{idSearch}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "savedSearches",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "savedSearches",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idSearch"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/members/{id}/savedSearches/{idSearch}",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "savedSearches",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "savedSearches",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                    ["idSearch"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.pos`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_search",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "member_id",
                    "name",
                    "pos",
                    "query",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["search"] = {
        ["fields"] = {},
        ["name"] = "search",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/search",
                ["segments"] = {
                  {
                    ["lit"] = "search",
                  },
                },
                ["parts"] = {
                  "search",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "board_field",
                      ["orig"] = "board_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,idOrganization",
                    },
                    {
                      ["name"] = "board_organization",
                      ["orig"] = "board_organization",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "boards_limit",
                      ["orig"] = "boards_limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "card_attachment",
                      ["orig"] = "card_attachment",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "false",
                    },
                    {
                      ["name"] = "card_board",
                      ["orig"] = "card_board",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "card_field",
                      ["orig"] = "card_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "card_list",
                      ["orig"] = "card_list",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "card_member",
                      ["orig"] = "card_member",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "card_sticker",
                      ["orig"] = "card_sticker",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "cards_limit",
                      ["orig"] = "cards_limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                    {
                      ["name"] = "cards_page",
                      ["orig"] = "cards_page",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "id_board",
                      ["orig"] = "id_board",
                      ["type"] = "`$ANY`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_card",
                      ["orig"] = "id_card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "member_field",
                      ["orig"] = "member_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "avatarHash,fullName,initials,username,confirmed",
                    },
                    {
                      ["name"] = "members_limit",
                      ["orig"] = "members_limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "10",
                    },
                    {
                      ["name"] = "model_type",
                      ["orig"] = "model_type",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "name,displayName",
                    },
                    {
                      ["name"] = "organizations_limit",
                      ["orig"] = "organizations_limit",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = "10",
                    },
                    {
                      ["name"] = "partial",
                      ["orig"] = "partial",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "query",
                      ["orig"] = "query",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
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
                    "query",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["show_sidebar"] = {
        ["fields"] = {},
        ["name"] = "show_sidebar",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/showSidebar",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "showSidebar",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "showSidebar",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["show_sidebar_activity"] = {
        ["fields"] = {},
        ["name"] = "show_sidebar_activity",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/showSidebarActivity",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "showSidebarActivity",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "showSidebarActivity",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["show_sidebar_board_action"] = {
        ["fields"] = {},
        ["name"] = "show_sidebar_board_action",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/showSidebarBoardActions",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "showSidebarBoardActions",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "showSidebarBoardActions",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["show_sidebar_member"] = {
        ["fields"] = {},
        ["name"] = "show_sidebar_member",
        ["op"] = {
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/myPrefs/showSidebarMembers",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "myPrefs",
                  },
                  {
                    ["lit"] = "showSidebarMembers",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "myPrefs",
                  "showSidebarMembers",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "value",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["sticker"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "sticker",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/stickers/{idSticker}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "stickers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "stickers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idSticker"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/stickers",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "stickers",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "stickers",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/cards/{id}/stickers/{idSticker}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "stickers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "stickers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idSticker"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/cards/{id}/stickers/{idSticker}",
                ["segments"] = {
                  {
                    ["lit"] = "cards",
                  },
                  {
                    ["var"] = "card_id",
                  },
                  {
                    ["lit"] = "stickers",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "cards",
                  "{card_id}",
                  "stickers",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "card_id",
                    ["idSticker"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_sticker",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "left",
                      ["orig"] = "left",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "rotate",
                      ["orig"] = "rotate",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["example"] = 0,
                    },
                    {
                      ["name"] = "top",
                      ["orig"] = "top",
                      ["type"] = "`$NUMBER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "z_index",
                      ["orig"] = "z_index",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "id",
                    "left",
                    "rotate",
                    "top",
                    "z_index",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.card",
            },
          },
        },
      },
      ["tag"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "tag",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/tags",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "tags",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "tags",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "organization_id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/organizations/{id}/tags/{idTag}",
                ["segments"] = {
                  {
                    ["lit"] = "organizations",
                  },
                  {
                    ["var"] = "organization_id",
                  },
                  {
                    ["lit"] = "tags",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "organizations",
                  "{organization_id}",
                  "tags",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "organization_id",
                    ["idTag"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_tag",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "organization_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.organization",
            },
          },
        },
      },
      ["token"] = {
        ["fields"] = {
          {
            ["name"] = "dateCreated",
            ["title"] = "Date Created",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "dateExpires",
            ["title"] = "Date Expires",
            ["type"] = "`$STRING`",
            ["format"] = "date-time",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMember",
            ["title"] = "Id Member",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "identifier",
            ["title"] = "Identifier",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "permissions",
            ["title"] = "Permissions",
            ["type"] = "`$ARRAY`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "token",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/tokens",
                ["segments"] = {
                  {
                    ["lit"] = "members",
                  },
                  {
                    ["var"] = "member_id",
                  },
                  {
                    ["lit"] = "tokens",
                  },
                },
                ["parts"] = {
                  "members",
                  "{member_id}",
                  "tokens",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "webhook",
                      ["orig"] = "webhook",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "member_id",
                    "webhook",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tokens/{token}",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "webhook",
                      ["orig"] = "webhook",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                    "webhook",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/tokens/{token}/",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.member",
            },
          },
        },
      },
      ["transferrable_organization"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "newBillableMembers",
            ["title"] = "New Billable Members",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "restrictedMembers",
            ["title"] = "Restricted Members",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "transferrable",
            ["title"] = "Transferrable",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "transferrable_organization",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/enterprises/{id}/transferrable/organization/{idOrganization}",
                ["segments"] = {
                  {
                    ["lit"] = "enterprises",
                  },
                  {
                    ["var"] = "enterprise_id",
                  },
                  {
                    ["lit"] = "transferrable",
                  },
                  {
                    ["lit"] = "organization",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "enterprises",
                  "{enterprise_id}",
                  "transferrable",
                  "organization",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "enterprise_id",
                    ["idOrganization"] = "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "enterprise_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "enterprise_id",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.enterprise",
            },
          },
        },
      },
      ["trello_list"] = {
        ["fields"] = {
          {
            ["name"] = "attachments",
            ["title"] = "Attachments",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "closed",
            ["title"] = "Closed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idBoard",
            ["title"] = "Id Board",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "limits",
            ["title"] = "Limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["title"] = "Name",
            ["type"] = "`$STRING`",
            ["short"] = "The name of the list",
          },
          {
            ["name"] = "pos",
            ["title"] = "Pos",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "softLimit",
            ["title"] = "Soft Limit",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subscribed",
            ["title"] = "Subscribed",
            ["type"] = "`$BOOLEAN`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "trello_list",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/lists",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "lists",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "lists",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.limits`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "pos",
                      ["orig"] = "pos",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "top",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "name",
                    "pos",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/lists",
                ["segments"] = {
                  {
                    ["lit"] = "boards",
                  },
                  {
                    ["var"] = "board_id",
                  },
                  {
                    ["lit"] = "lists",
                  },
                },
                ["parts"] = {
                  "boards",
                  "{board_id}",
                  "lists",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "board_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "board_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "card_field",
                      ["orig"] = "card_field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                    {
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "board_id",
                    "card",
                    "card_field",
                    "field",
                    "filter",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/list",
                ["segments"] = {
                  {
                    ["lit"] = "actions",
                  },
                  {
                    ["var"] = "action_id",
                  },
                  {
                    ["lit"] = "list",
                  },
                },
                ["parts"] = {
                  "actions",
                  "{action_id}",
                  "list",
                },
                ["rename"] = {
                  ["param"] = {
                    ["id"] = "action_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.limits`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "all",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.action",
            },
            {
              "$.main.kit.entity.board",
            },
          },
        },
      },
      ["webhook"] = {
        ["fields"] = {
          {
            ["name"] = "active",
            ["title"] = "Active",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "callbackURL",
            ["title"] = "Callback Url",
            ["type"] = "`$STRING`",
            ["format"] = "url",
          },
          {
            ["name"] = "consecutiveFailures",
            ["title"] = "Consecutive Failures",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "description",
            ["title"] = "Description",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "firstConsecutiveFailDate",
            ["title"] = "First Consecutive Fail Date",
            ["type"] = "`$STRING`",
            ["format"] = "date",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idModel",
            ["title"] = "Id Model",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "webhook",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/webhooks/",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                },
                ["parts"] = {
                  "webhooks",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "active",
                      ["orig"] = "active",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "callback_url",
                      ["orig"] = "callback_url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "description",
                      ["orig"] = "description",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_model",
                      ["orig"] = "id_model",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active",
                    "callback_url",
                    "description",
                    "id_model",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/tokens/{token}/webhooks",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "webhooks",
                },
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "callback_url",
                      ["orig"] = "callback_url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "description",
                      ["orig"] = "description",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_model",
                      ["orig"] = "id_model",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback_url",
                    "description",
                    "id_model",
                    "token_id",
                  },
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tokens/{token}/webhooks",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "webhooks",
                },
                ["rename"] = {
                  ["param"] = {
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "token_id",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{id}/{field}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["var"] = "field",
                  },
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                  "{field}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/tokens/{token}/webhooks/{idWebhook}",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idWebhook"] = "id",
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_webhook",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "token_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/webhooks/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/tokens/{token}/webhooks/{idWebhook}",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idWebhook"] = "id",
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_webhook",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                    "token_id",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/webhooks/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/webhooks/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "active",
                      ["orig"] = "active",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "callback_url",
                      ["orig"] = "callback_url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "description",
                      ["orig"] = "description",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_model",
                      ["orig"] = "id_model",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "active",
                    "callback_url",
                    "description",
                    "id",
                    "id_model",
                  },
                },
              },
              {
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/tokens/{token}/webhooks/{idWebhook}",
                ["segments"] = {
                  {
                    ["lit"] = "tokens",
                  },
                  {
                    ["var"] = "token_id",
                  },
                  {
                    ["lit"] = "webhooks",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "tokens",
                  "{token_id}",
                  "webhooks",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["idWebhook"] = "id",
                    ["token"] = "token_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id_webhook",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                    {
                      ["name"] = "token_id",
                      ["orig"] = "token",
                      ["type"] = "`$STRING`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "callback_url",
                      ["orig"] = "callback_url",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "description",
                      ["orig"] = "description",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                    },
                    {
                      ["name"] = "id_model",
                      ["orig"] = "id_model",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "callback_url",
                    "description",
                    "id",
                    "id_model",
                    "token_id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "$.main.kit.entity.token",
            },
          },
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
