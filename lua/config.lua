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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://api.trello.com/1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["board"] = {},
      },
    },
    entity = {
      ["board"] = {
        ["fields"] = {
          {
            ["name"] = "closed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "creationMethod",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateLastActivity",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "dateLastView",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "datePluginDisable",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "desc",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "descData",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "enterpriseOwned",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "fullName",
            ["short"] = "The full name of the user to as a member of the board.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["req"] = true,
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idMemberCreator",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idOrganization",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "idTags",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ixUpdate",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "labelNames",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "limits",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "memberships",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "The name of the board.",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "pinned",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "powerUps",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "prefs",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "shortLink",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "shortUrl",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "starred",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "subscribed",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "templateGallery",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "board",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "default_label",
                      ["orig"] = "default_label",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "default_list",
                      ["orig"] = "default_list",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "query",
                      ["name"] = "id_board_source",
                      ["orig"] = "id_board_source",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "query",
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "keep_from_source",
                      ["orig"] = "keep_from_source",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "power_up",
                      ["orig"] = "power_up",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "blue",
                      ["kind"] = "query",
                      ["name"] = "prefs_background",
                      ["orig"] = "prefs_background",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "regular",
                      ["kind"] = "query",
                      ["name"] = "prefs_card_aging",
                      ["orig"] = "prefs_card_aging",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "prefs_card_cover",
                      ["orig"] = "prefs_card_cover",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "members",
                      ["kind"] = "query",
                      ["name"] = "prefs_comment",
                      ["orig"] = "prefs_comment",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "members",
                      ["kind"] = "query",
                      ["name"] = "prefs_invitation",
                      ["orig"] = "prefs_invitation",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "private",
                      ["kind"] = "query",
                      ["name"] = "prefs_permission_level",
                      ["orig"] = "prefs_permission_level",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = true,
                      ["kind"] = "query",
                      ["name"] = "prefs_self_join",
                      ["orig"] = "prefs_self_join",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "disabled",
                      ["kind"] = "query",
                      ["name"] = "prefs_voting",
                      ["orig"] = "prefs_voting",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/",
                ["parts"] = {
                  "boards",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "color",
                      ["orig"] = "color",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/labels",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "labels",
                },
                ["select"] = {
                  ["$action"] = "label",
                  ["exist"] = {
                    "color",
                    "id",
                    "name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "query",
                      ["name"] = "id_plugin",
                      ["orig"] = "id_plugin",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/boardPlugins",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "boardPlugins",
                },
                ["select"] = {
                  ["$action"] = "board_plugin",
                  ["exist"] = {
                    "id",
                    "id_plugin",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "query",
                      ["name"] = "value",
                      ["orig"] = "value",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/idTags",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "idTags",
                },
                ["select"] = {
                  ["$action"] = "id_tag",
                  ["exist"] = {
                    "id",
                    "value",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/boards/{id}/markedAsViewed",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "markedAsViewed",
                },
                ["select"] = {
                  ["$action"] = "marked_as_viewed",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "name,displayName",
                      ["kind"] = "query",
                      ["name"] = "organization_field",
                      ["orig"] = "organization_field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boards",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "organization_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "filter",
                      ["orig"] = "filter",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/organizations/{id}/boards",
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
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "filter",
                    "organization_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "member_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/members/{id}/boardsInvited",
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
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "member_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "action",
                      ["orig"] = "action",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "board_star",
                      ["orig"] = "board_star",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "card",
                      ["orig"] = "card",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "card_plugin_data",
                      ["orig"] = "card_plugin_data",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "checklist",
                      ["orig"] = "checklist",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "custom_field",
                      ["orig"] = "custom_field",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "label",
                      ["orig"] = "label",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "open",
                      ["kind"] = "query",
                      ["name"] = "list",
                      ["orig"] = "list",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "member",
                      ["orig"] = "member",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "none",
                      ["kind"] = "query",
                      ["name"] = "membership",
                      ["orig"] = "membership",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "my_pref",
                      ["orig"] = "my_pref",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "organization",
                      ["orig"] = "organization",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "organization_plugin_data",
                      ["orig"] = "organization_plugin_data",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "plugin_data",
                      ["orig"] = "plugin_data",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "tag",
                      ["orig"] = "tag",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}",
                ["parts"] = {
                  "boards",
                  "{id}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "action_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/actions/{id}/board",
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
                ["select"] = {
                  ["exist"] = {
                    "action_id",
                    "field",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "card_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cards/{id}/board",
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
                ["select"] = {
                  ["exist"] = {
                    "card_id",
                    "field",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "checklist_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/checklists/{id}/board",
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
                ["select"] = {
                  ["exist"] = {
                    "checklist_id",
                    "field",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/boards/{id}/{field}",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "{field}",
                },
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "list_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/lists/{id}/board",
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
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "list_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "notification_id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "field",
                      ["orig"] = "field",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/notifications/{id}/board",
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
                ["select"] = {
                  ["exist"] = {
                    "field",
                    "notification_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["remove"] = {
            ["input"] = "data",
            ["name"] = "remove",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "DELETE",
                ["orig"] = "/boards/{id}",
                ["parts"] = {
                  "boards",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["update"] = {
            ["input"] = "data",
            ["name"] = "update",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "closed",
                      ["orig"] = "closed",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "desc",
                      ["orig"] = "desc",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "id_organization",
                      ["orig"] = "id_organization",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/background",
                      ["orig"] = "prefs/background",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/calendar_feed_enabled",
                      ["orig"] = "prefs/calendar_feed_enabled",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/card_aging",
                      ["orig"] = "prefs/card_aging",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/card_cover",
                      ["orig"] = "prefs/card_cover",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/comment",
                      ["orig"] = "prefs/comment",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/hide_vote",
                      ["orig"] = "prefs/hide_vote",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/invitation",
                      ["orig"] = "prefs/invitation",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/permission_level",
                      ["orig"] = "prefs/permission_level",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/self_join",
                      ["orig"] = "prefs/self_join",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["kind"] = "query",
                      ["name"] = "prefs/voting",
                      ["orig"] = "prefs/voting",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "query",
                      ["name"] = "subscribed",
                      ["orig"] = "subscribed",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}",
                ["parts"] = {
                  "boards",
                  "{id}",
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
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["example"] = "5abbe4b7ddc1b351ef961414",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "email",
                      ["orig"] = "email",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "normal",
                      ["kind"] = "query",
                      ["name"] = "type",
                      ["orig"] = "type",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "PUT",
                ["orig"] = "/boards/{id}/members",
                ["parts"] = {
                  "boards",
                  "{id}",
                  "members",
                },
                ["select"] = {
                  ["$action"] = "member",
                  ["exist"] = {
                    "email",
                    "id",
                    "type",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {
            {
              "action",
            },
            {
              "card",
            },
            {
              "checklist",
            },
            {
              "list",
            },
            {
              "member",
            },
            {
              "notification",
            },
            {
              "organization",
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
