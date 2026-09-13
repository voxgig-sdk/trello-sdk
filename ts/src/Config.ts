
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Trello',
        slug: "trello",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.trello.com/1",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      action: {
      },

      action_reactions_summary: {
      },

      admin: {
      },

      application: {
      },

      application_compliance: {
      },

      associated_domain: {
      },

      attachment: {
      },

      batch: {
      },

      board: {
      },

      board_background: {
      },

      board_plugin: {
      },

      board_star: {
      },

      bulk: {
      },

      card: {
      },

      card_check_item_state: {
      },

      card_list: {
      },

      check_item: {
      },

      checklist: {
      },

      claimable_organization: {
      },

      custom_board_background: {
      },

      custom_emoji: {
      },

      custom_field: {
      },

      custom_field_item: {
      },

      custom_sticker: {
      },

      email_position: {
      },

      emoji: {
      },

      enterpris: {
      },

      enterpris_signup_url: {
      },

      enterprise_admin: {
      },

      enterprise_audit_log: {
      },

      export: {
      },

      export_download: {
      },

      generate: {
      },

      id_email_list: {
      },

      id_label: {
      },

      id_member: {
      },

      label: {
      },

      list: {
      },

      member: {
      },

      member_privacy: {
      },

      members_voted: {
      },

      membership: {
      },

      most_recent: {
      },

      new_billable_guest: {
      },

      notification: {
      },

      notification_channel_setting: {
      },

      notification_list: {
      },

      notification_member_creator: {
      },

      notifications_channel_setting: {
      },

      option: {
      },

      org_invite_restrict: {
      },

      organization: {
      },

      pending_organization: {
      },

      plugin: {
      },

      plugin_data: {
      },

      plugin_listing: {
      },

      reaction: {
      },

      read: {
      },

      saved_search: {
      },

      search: {
      },

      show_sidebar: {
      },

      show_sidebar_activity: {
      },

      show_sidebar_board_action: {
      },

      show_sidebar_member: {
      },

      sticker: {
      },

      tag: {
      },

      token: {
      },

      transferrable_organization: {
      },

      trello_list: {
      },

      webhook: {
      },

    }
  }


  entity = {
    "action": {
      "fields": [
        {
          "name": "data",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "lit": "comments"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "actions",
                "comments"
              ]
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
              "rename": {
                "param": {
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "reactions"
                }
              ],
              "select": {
                "$action": "reaction",
                "exist": [
                  "id_action"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{id_action}",
                "reactions"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "actions"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "actions"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "actions"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "actions"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "actions"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "actions"
              ]
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
              "rename": {
                "param": {
                  "boardId": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "actions"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "actions"
              ]
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
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "actions",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "actions",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "list_id"
                }
              },
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "list_id"
                },
                {
                  "lit": "actions"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "list_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "lists",
                "{list_id}",
                "actions"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "comments"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "actions",
                "{id_action}",
                "comments"
              ]
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
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "comments"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "actions",
                "{id_action}",
                "comments"
              ]
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
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "actions",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "text"
                }
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
              },
              "parts": [
                "actions",
                "{id}",
                "text"
              ]
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
              "rename": {
                "param": {
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "reactionsSummary"
                }
              ],
              "select": {
                "exist": [
                  "id_action"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{id_action}",
                "reactionsSummary"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "admins"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "admins",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "admins"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "admins",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "applications"
                },
                {
                  "var": "key"
                },
                {
                  "lit": "compliance"
                }
              ],
              "select": {
                "exist": [
                  "key"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "applications",
                "{key}",
                "compliance"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "prefs"
                },
                {
                  "lit": "associatedDomain"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "prefs",
                "associatedDomain"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "attachments"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "attachments"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idAttachment": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "attachments",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idAttachment": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "attachments",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "batch"
                }
              ],
              "select": {
                "exist": [
                  "url"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "batch"
              ]
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
          "format": "date",
          "name": "dateLastActivity",
          "type": "`$STRING`"
        },
        {
          "format": "date",
          "name": "dateLastView",
          "type": "`$STRING`"
        },
        {
          "format": "date",
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
          "format": "url",
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
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "boards"
                }
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
              },
              "parts": [
                "boards"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "labels"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "labels"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "boardPlugins"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "boardPlugins"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "idTags"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "idTags"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "markedAsViewed"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "markedAsViewed"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boards"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "boards"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "boards"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "boards"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardsInvited"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardsInvited"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "boards",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "board"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "board"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "board"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "board"
              ]
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
              "rename": {
                "param": {
                  "id": "checklist_id"
                }
              },
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "board"
                }
              ],
              "select": {
                "exist": [
                  "checklist_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "checklists",
                "{checklist_id}",
                "board"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "list_id"
                }
              },
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "list_id"
                },
                {
                  "lit": "board"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "list_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "lists",
                "{list_id}",
                "board"
              ]
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
              "rename": {
                "param": {
                  "id": "notification_id"
                }
              },
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "board"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "notification_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notifications",
                "{notification_id}",
                "board"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "boards",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "members"
                }
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
              },
              "parts": [
                "boards",
                "{id}",
                "members"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customBoardBackgrounds"
                }
              ],
              "select": {
                "exist": [
                  "file",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customBoardBackgrounds"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardBackgrounds"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardBackgrounds"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customBoardBackgrounds"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customBoardBackgrounds"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardBackgrounds"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "boardBackgrounds",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id_background"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customBoardBackgrounds"
                },
                {
                  "var": "id_background"
                }
              ],
              "select": {
                "exist": [
                  "id_background",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customBoardBackgrounds",
                "{id_background}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardBackgrounds"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardBackgrounds",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardBackgrounds"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "boardBackgrounds",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id_background"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customBoardBackgrounds"
                },
                {
                  "var": "id_background"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "customBoardBackgrounds",
                "{id_background}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idPlugin": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "boardPlugins"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "boardPlugins",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardStars"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "boardStars"
              ]
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
              "rename": {
                "param": {
                  "boardId": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "boardStars"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{id}",
                "boardStars"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idStar": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardStars"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardStars",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardStars"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardStars"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idStar": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardStars"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "boardStars",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idStar": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "boardStars"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "boardStars",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idOrganizations": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "organizations"
                },
                {
                  "lit": "bulk"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "organizations",
                "bulk",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idOrganizations": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "transferrable"
                },
                {
                  "lit": "bulk"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "transferrable",
                "bulk",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "lit": "${id}"
                },
                {
                  "lit": "enterpriseJoinRequest"
                },
                {
                  "lit": "bulk"
                }
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
              },
              "parts": [
                "enterprises",
                "${id}",
                "enterpriseJoinRequest",
                "bulk"
              ]
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
          "format": "date-time",
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
          "format": "date",
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
          "format": "float",
          "name": "pos",
          "type": "`$NUMBER`"
        },
        {
          "name": "shortLink",
          "type": "`$STRING`"
        },
        {
          "format": "url",
          "name": "shortUrl",
          "type": "`$STRING`"
        },
        {
          "name": "subscribed",
          "type": "`$BOOLEAN`"
        },
        {
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "cards"
                }
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
              },
              "parts": [
                "cards"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "attachments"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "attachments"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "stickers"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "stickers"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "checklists"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "checklists"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "labels"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "labels"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "idLabels"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "idLabels"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "idMembers"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "idMembers"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "membersVoted"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "membersVoted"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "markAssociatedNotificationsRead"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "markAssociatedNotificationsRead"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "card"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "card"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "cards"
                }
              ],
              "select": {
                "exist": [
                  "filter",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "cards"
              ]
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
              "rename": {
                "param": {
                  "id": "list_id"
                }
              },
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "list_id"
                },
                {
                  "lit": "cards"
                }
              ],
              "select": {
                "exist": [
                  "list_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "lists",
                "{list_id}",
                "cards"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "cards",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "filter": "id",
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "cards",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "notification_id"
                }
              },
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "card"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "notification_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notifications",
                "{notification_id}",
                "card"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "cards"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "cards"
              ]
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
              "rename": {
                "param": {
                  "id": "checklist_id"
                }
              },
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "cards"
                }
              ],
              "select": {
                "exist": [
                  "checklist_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "checklists",
                "{checklist_id}",
                "cards"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "cards",
                "{id}"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "PUT",
              "orig": "/cards/{idCard}/customFields",
              "rename": {
                "param": {
                  "idCard": "id_card"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id_card"
                },
                {
                  "lit": "customFields"
                }
              ],
              "select": {
                "$action": "custom_field"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{id_card}",
                "customFields"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "checkItemStates"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "checkItemStates"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "list"
                }
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
              },
              "parts": [
                "cards",
                "{id}",
                "list"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idCheckItem": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "checkItem"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "checkItem",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "checklist_id"
                }
              },
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "checkItems"
                }
              ],
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
              },
              "parts": [
                "checklists",
                "{checklist_id}",
                "checkItems"
              ]
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
              "rename": {
                "param": {
                  "id": "checklist_id",
                  "idCheckItem": "id"
                }
              },
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "checkItems"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "checklists",
                "{checklist_id}",
                "checkItems",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idCheckItem": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "checkItem"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "checkItem",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "checklist_id",
                  "idCheckItem": "id"
                }
              },
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "checkItems"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "checklist_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "checklists",
                "{checklist_id}",
                "checkItems",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idCheckItem": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "checkItem"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "checkItem",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "idCard": "id_card",
                  "idCheckItem": "id",
                  "idChecklist": "checklist_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id_card"
                },
                {
                  "lit": "checklist"
                },
                {
                  "var": "checklist_id"
                },
                {
                  "lit": "checkItem"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{id_card}",
                "checklist",
                "{checklist_id}",
                "checkItem",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "checkItems"
                }
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
              },
              "parts": [
                "checklists",
                "{id}",
                "checkItems"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                }
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
              },
              "parts": [
                "checklists"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "checklists",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "checklists"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "checklists"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "checklists",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "checklists"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "checklists"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idChecklist": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "checklists",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "checklists",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "checklists",
                "{id}",
                "{field}"
              ]
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
              "segments": [
                {
                  "lit": "checklists"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "checklists",
                "{id}"
              ]
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
          "format": "date",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "claimableOrganizations"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "claimableOrganizations"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idBackground": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customBoardBackgrounds"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customBoardBackgrounds",
                "{id}"
              ]
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
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customEmoji"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "customEmoji"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customEmoji"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customEmoji"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idEmoji": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customEmoji"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "customEmoji",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "options"
                }
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
              },
              "parts": [
                "customFields",
                "{id}",
                "options"
              ]
            },
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/customFields",
              "segments": [
                {
                  "lit": "customFields"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.display`"
              },
              "parts": [
                "customFields"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "customFields"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "customFields"
              ]
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
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.display`"
              },
              "parts": [
                "customFields",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "customFields",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "idCard": "id_card",
                  "idCustomField": "id_custom_field"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "id_card"
                },
                {
                  "lit": "customField"
                },
                {
                  "var": "id_custom_field"
                },
                {
                  "lit": "item"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{id_card}",
                "customField",
                "{id_custom_field}",
                "item"
              ]
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
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.display`"
              },
              "parts": [
                "customFields",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "customFieldItems"
                }
              ],
              "select": {
                "exist": [
                  "card_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "customFieldItems"
              ]
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
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customStickers"
                }
              ],
              "select": {
                "exist": [
                  "file",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customStickers"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customStickers"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customStickers"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idSticker": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customStickers"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "customStickers",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idSticker": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "customStickers"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "customStickers",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "emailPosition"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "emailPosition"
              ]
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
              "segments": [
                {
                  "lit": "emoji"
                }
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
              },
              "parts": [
                "emoji"
              ]
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
          "format": "date",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "tokens"
                }
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
              },
              "parts": [
                "enterprises",
                "{id}",
                "tokens"
              ]
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
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "enterprises",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "organizations"
                }
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
              },
              "parts": [
                "enterprises",
                "{id}",
                "organizations"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "signupUrl"
                }
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
              },
              "parts": [
                "enterprises",
                "{id}",
                "signupUrl"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "admins"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "admins"
              ]
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
          "format": "date",
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "auditlog"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "auditlog"
              ]
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
          "format": "date-time",
          "name": "startedAt",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "exports"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "exports"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "exports"
                }
              ],
              "select": {
                "exist": [
                  "attachment",
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.status`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "exports"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "exports"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "exports"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idExport": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "exports"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.status`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "exports",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "exports"
                },
                {
                  "lit": "mostRecent"
                }
              ],
              "select": {
                "$action": "most_recent",
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.status`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "exports",
                "mostRecent"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idExport": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "exports"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "exports",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idExport": "id_export"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "exports"
                },
                {
                  "var": "id_export"
                },
                {
                  "lit": "download"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id_export"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "exports",
                "{id_export}",
                "download"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "calendarKey"
                },
                {
                  "lit": "generate"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "calendarKey",
                "generate"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "emailKey"
                },
                {
                  "lit": "generate"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "emailKey",
                "generate"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "idEmailList"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "idEmailList"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idLabel": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "idLabels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "idLabels",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "idMembers"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "idMembers",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "labels"
                }
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
              },
              "parts": [
                "labels"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "labels"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "labels"
              ]
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
              "segments": [
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "labels",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "labels",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "labels",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "labels"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "labels",
                "{id}",
                "{field}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "lists"
                }
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
              },
              "parts": [
                "lists"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "moveAllCards"
                }
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
              },
              "parts": [
                "lists",
                "{id}",
                "moveAllCards"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "archiveAllCards"
                }
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
              },
              "parts": [
                "lists",
                "{id}",
                "archiveAllCards"
              ]
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
              "rename": {
                "param": {
                  "filter": "id",
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "lists",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "lists",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "lists",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "lists",
                "{id}",
                "{field}"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "closed"
                }
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
              },
              "parts": [
                "lists",
                "{id}",
                "closed"
              ]
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
              "segments": [
                {
                  "lit": "lists"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "idBoard"
                }
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
              },
              "parts": [
                "lists",
                "{id}",
                "idBoard"
              ]
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
          "format": "email",
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
          "format": "url",
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
          "format": "url",
          "name": "uploadedAvatarUrl",
          "type": "`$STRING`"
        },
        {
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        },
        {
          "name": "username",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "avatar"
                }
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
              },
              "parts": [
                "members",
                "{id}",
                "avatar"
              ]
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "boardBackgrounds"
                }
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
              },
              "parts": [
                "members",
                "{id}",
                "boardBackgrounds"
              ]
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "oneTimeMessagesDismissed"
                }
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
              },
              "parts": [
                "members",
                "{id}",
                "oneTimeMessagesDismissed"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "members"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "members"
              ]
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
              "segments": [
                {
                  "lit": "search"
                },
                {
                  "lit": "members"
                }
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
              },
              "parts": [
                "search",
                "members"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "member"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "member"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "memberCreator"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "memberCreator"
              ]
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
              "rename": {
                "param": {
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "member"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "token_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tokens",
                "{token_id}",
                "member"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "members"
              ]
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "members"
              ]
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "members",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "notification_id"
                }
              },
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "member"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "notification_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notifications",
                "{notification_id}",
                "member"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "members"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "members"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idMember": "id_member"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id_member"
                },
                {
                  "lit": "all"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id_member}",
                "all"
              ]
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
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idMember": "id_member"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id_member"
                },
                {
                  "lit": "deactivated"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "members",
                "{id_member}",
                "deactivated"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idMember": "id_member"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id_member"
                },
                {
                  "lit": "licensed"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "members",
                "{id_member}",
                "licensed"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idMember": "id_member"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "members"
                },
                {
                  "var": "id_member"
                },
                {
                  "lit": "deactivated"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "members",
                "{id_member}",
                "deactivated"
              ]
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
              "rename": {
                "param": {
                  "id": "plugin_id"
                }
              },
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "plugin_id"
                },
                {
                  "lit": "compliance"
                },
                {
                  "lit": "memberPrivacy"
                }
              ],
              "select": {
                "exist": [
                  "plugin_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{plugin_id}",
                "compliance",
                "memberPrivacy"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "membersVoted"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "membersVoted"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idMember": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "membersVoted"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "membersVoted",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "members"
                },
                {
                  "lit": "query"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "members",
                "query"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "memberships"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "memberships"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "memberships"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "memberships"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idMembership": "id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "memberships"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "memberships",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id",
                  "idMembership": "id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "memberships"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "memberships",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idBoard": "id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "newBillableGuests"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "newBillableGuests",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "notifications"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "notifications"
              ]
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "notifications",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "notifications",
                "{id}",
                "{field}"
              ]
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "notifications",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "unread"
                }
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
              },
              "parts": [
                "notifications",
                "{id}",
                "unread"
              ]
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
      "id": {
        "field": "id",
        "from": {
          "channel": "channel"
        },
        "name": "id",
        "parts": [
          "channel",
          "blocked_key"
        ],
        "sep": "/"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "notificationsChannelSettings"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "notificationsChannelSettings"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "notificationsChannelSettings"
                },
                {
                  "var": "channel"
                }
              ],
              "select": {
                "exist": [
                  "channel",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "notificationsChannelSettings",
                "{channel}"
              ]
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
              "rename": {
                "param": {
                  "blockedKeys": "blocked_key"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "notificationsChannelSettings"
                },
                {
                  "var": "channel"
                },
                {
                  "var": "blocked_key"
                }
              ],
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
              },
              "parts": [
                "members",
                "{id}",
                "notificationsChannelSettings",
                "{channel}",
                "{blocked_key}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "notificationsChannelSettings"
                },
                {
                  "var": "channel"
                }
              ],
              "select": {
                "exist": [
                  "channel",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "notificationsChannelSettings",
                "{channel}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "notificationsChannelSettings"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "notificationsChannelSettings"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "list"
                }
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
              },
              "parts": [
                "notifications",
                "{id}",
                "list"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "memberCreator"
                }
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
              },
              "parts": [
                "notifications",
                "{id}",
                "memberCreator"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "custom_field_id",
                  "idCustomFieldOption": "id"
                }
              },
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "custom_field_id"
                },
                {
                  "lit": "options"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "custom_field_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "customFields",
                "{custom_field_id}",
                "options",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "custom_field_id"
                }
              },
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "custom_field_id"
                },
                {
                  "lit": "options"
                }
              ],
              "select": {
                "exist": [
                  "custom_field_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "customFields",
                "{custom_field_id}",
                "options"
              ]
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
              "rename": {
                "param": {
                  "id": "custom_field_id",
                  "idCustomFieldOption": "id"
                }
              },
              "segments": [
                {
                  "lit": "customFields"
                },
                {
                  "var": "custom_field_id"
                },
                {
                  "lit": "options"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "custom_field_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "customFields",
                "{custom_field_id}",
                "options",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "prefs"
                },
                {
                  "lit": "orgInviteRestrict"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "prefs",
                "orgInviteRestrict"
              ]
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
          "format": "date",
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
          "format": "url",
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "organizations"
                }
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
              },
              "parts": [
                "organizations"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "logo"
                }
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
              },
              "parts": [
                "organizations",
                "{id}",
                "logo"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "tags"
                }
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
              },
              "parts": [
                "organizations",
                "{id}",
                "tags"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "organizations"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "organizations"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "organizations"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "organizations"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "organization"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "organization"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "organizationsInvited"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "organizationsInvited"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "organizations",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "id": "notification_id"
                }
              },
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "var": "notification_id"
                },
                {
                  "lit": "organization"
                }
              ],
              "select": {
                "exist": [
                  "field",
                  "notification_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "notifications",
                "{notification_id}",
                "organization"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idOrg": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "organizations",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "logo"
                }
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
              },
              "parts": [
                "organizations",
                "{id}",
                "logo"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "organizations",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "members"
                }
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
              },
              "parts": [
                "organizations",
                "{id}",
                "members"
              ]
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
          "format": "date",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "pendingOrganizations"
                }
              ],
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
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "pendingOrganizations"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "boardPlugins"
                }
              ],
              "select": {
                "exist": [
                  "board_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "boardPlugins"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "plugins"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "filter"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "plugins"
              ]
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
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "pluginData"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "pluginData"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "pluginData"
                }
              ],
              "select": {
                "exist": [
                  "card_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "pluginData"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "idPlugin": "id_plugin"
                }
              },
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "id_plugin"
                },
                {
                  "lit": "listing"
                }
              ],
              "select": {
                "exist": [
                  "id_plugin"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{id_plugin}",
                "listing"
              ]
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
              "rename": {
                "param": {
                  "idListing": "id",
                  "idPlugin": "id_plugin"
                }
              },
              "segments": [
                {
                  "lit": "plugins"
                },
                {
                  "var": "id_plugin"
                },
                {
                  "lit": "listings"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "id_plugin"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "plugins",
                "{id_plugin}",
                "listings",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "reactions"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "actions",
                "{id_action}",
                "reactions",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "reactions"
                }
              ],
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
              },
              "parts": [
                "actions",
                "{id_action}",
                "reactions"
              ]
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
              "rename": {
                "param": {
                  "idAction": "id_action"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "id_action"
                },
                {
                  "lit": "reactions"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "id_action"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "actions",
                "{id_action}",
                "reactions",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "notifications"
                },
                {
                  "lit": "all"
                },
                {
                  "lit": "read"
                }
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
              },
              "parts": [
                "notifications",
                "all",
                "read"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "savedSearches"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "savedSearches"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "savedSearches"
                }
              ],
              "select": {
                "exist": [
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "savedSearches"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idSearch": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "savedSearches"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.pos`"
              },
              "parts": [
                "members",
                "{member_id}",
                "savedSearches",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idSearch": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "savedSearches"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "member_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "savedSearches",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "member_id",
                  "idSearch": "id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "savedSearches"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "members",
                "{member_id}",
                "savedSearches",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "search"
                }
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
              },
              "parts": [
                "search"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "showSidebar"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "showSidebar"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "showSidebarActivity"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "showSidebarActivity"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "showSidebarBoardActions"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "showSidebarBoardActions"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "myPrefs"
                },
                {
                  "lit": "showSidebarMembers"
                }
              ],
              "select": {
                "exist": [
                  "board_id",
                  "value"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "boards",
                "{board_id}",
                "myPrefs",
                "showSidebarMembers"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idSticker": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "stickers"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "stickers",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "stickers"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "stickers"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idSticker": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "stickers"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "card_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "cards",
                "{card_id}",
                "stickers",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "id": "card_id",
                  "idSticker": "id"
                }
              },
              "segments": [
                {
                  "lit": "cards"
                },
                {
                  "var": "card_id"
                },
                {
                  "lit": "stickers"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "cards",
                "{card_id}",
                "stickers",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "organization_id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "tags"
                }
              ],
              "select": {
                "exist": [
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "tags"
              ]
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
              "rename": {
                "param": {
                  "id": "organization_id",
                  "idTag": "id"
                }
              },
              "segments": [
                {
                  "lit": "organizations"
                },
                {
                  "var": "organization_id"
                },
                {
                  "lit": "tags"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "organization_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "organizations",
                "{organization_id}",
                "tags",
                "{id}"
              ]
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
          "format": "date-time",
          "name": "dateCreated",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "member_id"
                }
              },
              "segments": [
                {
                  "lit": "members"
                },
                {
                  "var": "member_id"
                },
                {
                  "lit": "tokens"
                }
              ],
              "select": {
                "exist": [
                  "member_id",
                  "webhook"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "members",
                "{member_id}",
                "tokens"
              ]
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
              "rename": {
                "param": {
                  "token": "id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "tokens",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "token": "id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tokens",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "enterpris_id",
                  "idOrganization": "id"
                }
              },
              "segments": [
                {
                  "lit": "enterprises"
                },
                {
                  "var": "enterpris_id"
                },
                {
                  "lit": "transferrable"
                },
                {
                  "lit": "organization"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "enterpris_id",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "enterprises",
                "{enterpris_id}",
                "transferrable",
                "organization",
                "{id}"
              ]
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "lists"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "lists"
              ]
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
              "rename": {
                "param": {
                  "id": "board_id"
                }
              },
              "segments": [
                {
                  "lit": "boards"
                },
                {
                  "var": "board_id"
                },
                {
                  "lit": "lists"
                }
              ],
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
              },
              "parts": [
                "boards",
                "{board_id}",
                "lists"
              ]
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
              "rename": {
                "param": {
                  "id": "action_id"
                }
              },
              "segments": [
                {
                  "lit": "actions"
                },
                {
                  "var": "action_id"
                },
                {
                  "lit": "list"
                }
              ],
              "select": {
                "exist": [
                  "action_id",
                  "field"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.limits`"
              },
              "parts": [
                "actions",
                "{action_id}",
                "list"
              ]
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
          "format": "url",
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
          "format": "date",
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
      "id": {
        "field": "id",
        "name": "id"
      },
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
              "segments": [
                {
                  "lit": "webhooks"
                }
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
              },
              "parts": [
                "webhooks"
              ]
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
              "rename": {
                "param": {
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "webhooks"
                }
              ],
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
              },
              "parts": [
                "tokens",
                "{token_id}",
                "webhooks"
              ]
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
              "rename": {
                "param": {
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "webhooks"
                }
              ],
              "select": {
                "exist": [
                  "token_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tokens",
                "{token_id}",
                "webhooks"
              ]
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
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                },
                {
                  "var": "field"
                }
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
              },
              "parts": [
                "webhooks",
                "{id}",
                "{field}"
              ]
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
              "rename": {
                "param": {
                  "idWebhook": "id",
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "token_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tokens",
                "{token_id}",
                "webhooks",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "webhooks",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "idWebhook": "id",
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id",
                  "token_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "tokens",
                "{token_id}",
                "webhooks",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "webhooks",
                "{id}"
              ]
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
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
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
              },
              "parts": [
                "webhooks",
                "{id}"
              ]
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
              "rename": {
                "param": {
                  "idWebhook": "id",
                  "token": "token_id"
                }
              },
              "segments": [
                {
                  "lit": "tokens"
                },
                {
                  "var": "token_id"
                },
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
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
              },
              "parts": [
                "tokens",
                "{token_id}",
                "webhooks",
                "{id}"
              ]
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
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

