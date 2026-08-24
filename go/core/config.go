package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Trello",
			"slug": "trello",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.trello.com/1",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"board": map[string]any{},
			},
		},
		"entity": map[string]any{
			"board": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "creationMethod",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateLastActivity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateLastView",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "datePluginDisable",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "desc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "descData",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterpriseOwned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fullName",
						"short": "The full name of the user to as a member of the board.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMemberCreator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idOrganization",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idTags",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ixUpdate",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "labelNames",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberships",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the board.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pinned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "powerUps",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "shortLink",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "starred",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "templateGallery",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"name": "board",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "default_label",
											"orig": "default_label",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "default_list",
											"orig": "default_list",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board_source",
											"orig": "id_board_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "keep_from_source",
											"orig": "keep_from_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "power_up",
											"orig": "power_up",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "blue",
											"kind": "query",
											"name": "prefs_background",
											"orig": "prefs_background",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "regular",
											"kind": "query",
											"name": "prefs_card_aging",
											"orig": "prefs_card_aging",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "prefs_card_cover",
											"orig": "prefs_card_cover",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "members",
											"kind": "query",
											"name": "prefs_comment",
											"orig": "prefs_comment",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "members",
											"kind": "query",
											"name": "prefs_invitation",
											"orig": "prefs_invitation",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "private",
											"kind": "query",
											"name": "prefs_permission_level",
											"orig": "prefs_permission_level",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "prefs_self_join",
											"orig": "prefs_self_join",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "disabled",
											"kind": "query",
											"name": "prefs_voting",
											"orig": "prefs_voting",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/",
								"parts": []any{
									"boards",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "color",
											"orig": "color",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/labels",
								"parts": []any{
									"boards",
									"{id}",
									"labels",
								},
								"select": map[string]any{
									"$action": "label",
									"exist": []any{
										"color",
										"id",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_plugin",
											"orig": "id_plugin",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/boardPlugins",
								"parts": []any{
									"boards",
									"{id}",
									"boardPlugins",
								},
								"select": map[string]any{
									"$action": "board_plugin",
									"exist": []any{
										"id",
										"id_plugin",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/idTags",
								"parts": []any{
									"boards",
									"{id}",
									"idTags",
								},
								"select": map[string]any{
									"$action": "id_tag",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/markedAsViewed",
								"parts": []any{
									"boards",
									"{id}",
									"markedAsViewed",
								},
								"select": map[string]any{
									"$action": "marked_as_viewed",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "list",
											"orig": "list",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "organization",
											"orig": "organization",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "name,displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boards",
								"parts": []any{
									"members",
									"{member_id}",
									"boards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"filter",
										"list",
										"member_id",
										"organization",
										"organization_field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/boards",
								"parts": []any{
									"organizations",
									"{organization_id}",
									"boards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"filter",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardsInvited",
								"parts": []any{
									"members",
									"{member_id}",
									"boardsInvited",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "board_star",
											"orig": "board_star",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card_plugin_data",
											"orig": "card_plugin_data",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "checklist",
											"orig": "checklist",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "custom_field",
											"orig": "custom_field",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "open",
											"kind": "query",
											"name": "list",
											"orig": "list",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "membership",
											"orig": "membership",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "my_pref",
											"orig": "my_pref",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "organization",
											"orig": "organization",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "organization_plugin_data",
											"orig": "organization_plugin_data",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "plugin_data",
											"orig": "plugin_data",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "tag",
											"orig": "tag",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}",
								"parts": []any{
									"boards",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "action_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/board",
								"parts": []any{
									"actions",
									"{action_id}",
									"board",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/board",
								"parts": []any{
									"cards",
									"{card_id}",
									"board",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "checklist_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/board",
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"board",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "field",
											"orig": "field",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/{field}",
								"parts": []any{
									"boards",
									"{id}",
									"{field}",
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "list_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/board",
								"parts": []any{
									"lists",
									"{list_id}",
									"board",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "notification_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/board",
								"parts": []any{
									"notifications",
									"{notification_id}",
									"board",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"notification_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}",
								"parts": []any{
									"boards",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "closed",
											"orig": "closed",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/background",
											"orig": "prefs/background",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/calendar_feed_enabled",
											"orig": "prefs/calendar_feed_enabled",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/card_aging",
											"orig": "prefs/card_aging",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/card_cover",
											"orig": "prefs/card_cover",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/comment",
											"orig": "prefs/comment",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/hide_vote",
											"orig": "prefs/hide_vote",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/invitation",
											"orig": "prefs/invitation",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/permission_level",
											"orig": "prefs/permission_level",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/self_join",
											"orig": "prefs/self_join",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/voting",
											"orig": "prefs/voting",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}",
								"parts": []any{
									"boards",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "email",
											"orig": "email",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "normal",
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/members",
								"parts": []any{
									"boards",
									"{id}",
									"members",
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"email",
										"id",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"action",
						},
						[]any{
							"card",
						},
						[]any{
							"checklist",
						},
						[]any{
							"list",
						},
						[]any{
							"member",
						},
						[]any{
							"notification",
						},
						[]any{
							"organization",
						},
					},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
