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
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.trello.com/1",
			"auth": map[string]any{
				"prefix": "",
				"in": "query",
				"name": "key",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"action": map[string]any{},
				"action_reactions_summary": map[string]any{},
				"admin": map[string]any{},
				"application": map[string]any{},
				"application_compliance": map[string]any{},
				"associated_domain": map[string]any{},
				"attachment": map[string]any{},
				"batch": map[string]any{},
				"board": map[string]any{},
				"board_background": map[string]any{},
				"board_plugin": map[string]any{},
				"board_star": map[string]any{},
				"bulk": map[string]any{},
				"card": map[string]any{},
				"card_check_item_state": map[string]any{},
				"card_list": map[string]any{},
				"check_item": map[string]any{},
				"checklist": map[string]any{},
				"claimable_organization": map[string]any{},
				"custom_board_background": map[string]any{},
				"custom_emoji": map[string]any{},
				"custom_field": map[string]any{},
				"custom_field_item": map[string]any{},
				"custom_sticker": map[string]any{},
				"email_position": map[string]any{},
				"emoji": map[string]any{},
				"enterpris": map[string]any{},
				"enterpris_signup_url": map[string]any{},
				"enterprise_admin": map[string]any{},
				"enterprise_audit_log": map[string]any{},
				"export": map[string]any{},
				"export_download": map[string]any{},
				"generate": map[string]any{},
				"id_email_list": map[string]any{},
				"id_label": map[string]any{},
				"id_member": map[string]any{},
				"label": map[string]any{},
				"list": map[string]any{},
				"member": map[string]any{},
				"member_privacy": map[string]any{},
				"members_voted": map[string]any{},
				"membership": map[string]any{},
				"most_recent": map[string]any{},
				"new_billable_guest": map[string]any{},
				"notification": map[string]any{},
				"notification_channel_setting": map[string]any{},
				"notification_list": map[string]any{},
				"notification_member_creator": map[string]any{},
				"notifications_channel_setting": map[string]any{},
				"option": map[string]any{},
				"org_invite_restrict": map[string]any{},
				"organization": map[string]any{},
				"pending_organization": map[string]any{},
				"plugin": map[string]any{},
				"plugin_data": map[string]any{},
				"plugin_listing": map[string]any{},
				"reaction": map[string]any{},
				"read": map[string]any{},
				"saved_search": map[string]any{},
				"search": map[string]any{},
				"show_sidebar": map[string]any{},
				"show_sidebar_activity": map[string]any{},
				"show_sidebar_board_action": map[string]any{},
				"show_sidebar_member": map[string]any{},
				"sticker": map[string]any{},
				"tag": map[string]any{},
				"token": map[string]any{},
				"transferrable_organization": map[string]any{},
				"trello_list": map[string]any{},
				"webhook": map[string]any{},
			},
		},
		"entity": map[string]any{
			"action": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date-time",
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "display",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMemberCreator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberCreator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "action",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
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
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/actions/comments",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"card_id",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"comments",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/actions/{idAction}/reactions",
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "reactions",
									},
								},
								"select": map[string]any{
									"$action": "reaction",
									"exist": []any{
										"id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "commentCard, updateCard:idList",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"filter",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
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
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"actions",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"actions",
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
											"kind": "param",
											"name": "board_id",
											"orig": "board_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "list",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
											"kind": "query",
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "reaction",
											"orig": "reaction",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{boardId}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"boardId": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"actions",
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
											"example": true,
											"kind": "query",
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id}",
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
								"method": "GET",
								"orig": "/actions/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"actions",
									"{id}",
									"{field}",
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
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/actions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
									map[string]any{
										"lit": "actions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{list_id}",
									"actions",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/actions/{idAction}/comments",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"card_id",
										"id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"{id_action}",
									"comments",
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
								"method": "DELETE",
								"orig": "/actions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"actions",
									"{id}",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/actions/{idAction}/comments",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "comments",
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"card_id",
										"id_action",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"{id_action}",
									"comments",
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
											"name": "text",
											"orig": "text",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/actions/{id}",
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"text",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id}",
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
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/actions/{id}/text",
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "text",
									},
								},
								"select": map[string]any{
									"$action": "text",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id}",
									"text",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
						[]any{
							"card",
						},
						[]any{
							"list",
						},
						[]any{
							"member",
						},
						[]any{
							"organization",
						},
						[]any{
							"card",
							"action",
						},
					},
				},
			},
			"action_reactions_summary": map[string]any{
				"fields": []any{},
				"name": "action_reactions_summary",
				"op": map[string]any{
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
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactionsSummary",
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "reactionsSummary",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id_action}",
									"reactionsSummary",
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
					},
				},
			},
			"admin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "admin",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/enterprises/{id}/admins/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"admins",
									"{id}",
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/admins/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"admins",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"application": map[string]any{
				"fields": []any{},
				"name": "application",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"application",
						},
					},
				},
			},
			"application_compliance": map[string]any{
				"fields": []any{},
				"name": "application_compliance",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "key",
											"orig": "key",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/applications/{key}/compliance",
								"segments": []any{
									map[string]any{
										"lit": "applications",
									},
									map[string]any{
										"var": "key",
									},
									map[string]any{
										"lit": "compliance",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"applications",
									"{key}",
									"compliance",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"application",
						},
					},
				},
			},
			"associated_domain": map[string]any{
				"fields": []any{},
				"name": "associated_domain",
				"op": map[string]any{
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
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/prefs/associatedDomain",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "prefs",
									},
									map[string]any{
										"lit": "associatedDomain",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"prefs",
									"associatedDomain",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"organization",
						},
					},
				},
			},
			"attachment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "attachment",
				"op": map[string]any{
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
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/attachments",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_attachment",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": []any{
												"all",
											},
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/attachments/{idAttachment}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAttachment": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
									"{id}",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_attachment",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_attachment",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/attachments/{idAttachment}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAttachment": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "attachments",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"batch": map[string]any{
				"fields": []any{},
				"name": "batch",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "url",
											"orig": "url",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/batch",
								"segments": []any{
									map[string]any{
										"lit": "batch",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"batch",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
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
						"format": "date",
						"name": "dateLastActivity",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "dateLastView",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
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
						"format": "url",
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
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
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
								"parts": []any{
									"boards",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "labels",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"labels",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "boardPlugins",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"boardPlugins",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "idTags",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"idTags",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "markedAsViewed",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"markedAsViewed",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boards",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boards",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "boards",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"boards",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardsInvited",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardsInvited",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"boards",
									"{id}",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "board",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"board",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "board",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"board",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "board",
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
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"board",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"{field}",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
									map[string]any{
										"lit": "board",
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
								"parts": []any{
									"lists",
									"{list_id}",
									"board",
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
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "board",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"board",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"boards",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"boards",
									"{id}",
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
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
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
								"parts": []any{
									"boards",
									"{id}",
									"members",
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
			"board_background": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "board_background",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
											"kind": "query",
											"name": "file",
											"orig": "file",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/customBoardBackgrounds",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customBoardBackgrounds",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
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
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardBackgrounds",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardBackgrounds",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customBoardBackgrounds",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customBoardBackgrounds",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
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
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
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
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardBackgrounds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_background",
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id_background",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customBoardBackgrounds",
									},
									map[string]any{
										"var": "id_background",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_background",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id_background}",
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
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardBackgrounds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
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
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
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
											"kind": "query",
											"name": "brightness",
											"orig": "brightness",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tile",
											"orig": "tile",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardBackgrounds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"brightness",
										"id",
										"member_id",
										"tile",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_background",
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "brightness",
											"orig": "brightness",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "tile",
											"orig": "tile",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id_background",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customBoardBackgrounds",
									},
									map[string]any{
										"var": "id_background",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"brightness",
										"id_background",
										"member_id",
										"tile",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id_background}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
						[]any{
							"member",
							"custom_board_background",
						},
					},
				},
			},
			"board_plugin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "board_plugin",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_plugin",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/boardPlugins/{idPlugin}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idPlugin": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "boardPlugins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"boardPlugins",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"board_star": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"type": "`$INTEGER`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "board_star",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/boardStars",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardStars",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_board",
										"member_id",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
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
											"kind": "param",
											"name": "id",
											"orig": "board_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "mine",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{boardId}/boardStars",
								"rename": map[string]any{
									"param": map[string]any{
										"boardId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "boardStars",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{id}",
									"boardStars",
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
											"orig": "id_star",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardStars/{idStar}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardStars",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardStars",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardStars",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
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
											"orig": "id_star",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/boardStars/{idStar}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardStars",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
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
											"orig": "id_star",
											"reqd": true,
											"type": "`$STRING`",
										},
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
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/boardStars/{idStar}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "boardStars",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"bulk": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "bulk",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id_organization",
											"reqd": true,
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/organizations/bulk/{idOrganizations}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idOrganizations": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"lit": "bulk",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"organizations",
									"bulk",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id_organization",
											"reqd": true,
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/transferrable/bulk/{idOrganizations}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idOrganizations": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "transferrable",
									},
									map[string]any{
										"lit": "bulk",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"transferrable",
									"bulk",
									"{id}",
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
											"name": "id_organization",
											"orig": "id_organization",
											"reqd": true,
											"type": "`$ARRAY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/${id}/enterpriseJoinRequest/bulk",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"lit": "${id}",
									},
									map[string]any{
										"lit": "enterpriseJoinRequest",
									},
									map[string]any{
										"lit": "bulk",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_organization",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"${id}",
									"enterpriseJoinRequest",
									"bulk",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "badges",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cardRole",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checkItemStates",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "coordinates",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cover",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "creationMethod",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "dateLastActivity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "desc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "descData",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"format": "date",
						"name": "due",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dueReminder",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAttachmentCover",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idChecklists",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "idLabels",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 1,
						},
					},
					map[string]any{
						"name": "idList",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMembers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idMembersVoted",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idShort",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "labels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "locationName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "manualCoverAttachment",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mirrorSourceId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "float",
						"name": "pos",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "shortLink",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "shortUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "card",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "card_role",
											"orig": "card_role",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due_complete",
											"orig": "due_complete",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "file_source",
											"orig": "file_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_card_source",
											"orig": "id_card_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_label",
											"orig": "id_label",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_list",
											"orig": "id_list",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_member",
											"orig": "id_member",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "keep_from_source",
											"orig": "keep_from_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "location_name",
											"orig": "location_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mime_type",
											"orig": "mime_type",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "url_source",
											"orig": "url_source",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
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
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "mime_type",
											"orig": "mime_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "set_cover",
											"orig": "set_cover",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/attachments",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "attachments",
									},
								},
								"select": map[string]any{
									"$action": "attachment",
									"exist": []any{
										"file",
										"id",
										"mime_type",
										"name",
										"set_cover",
										"url",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"attachments",
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
											"name": "image",
											"orig": "image",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "left",
											"orig": "left",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "rotate",
											"orig": "rotate",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "top",
											"orig": "top",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "z_index",
											"orig": "z_index",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/stickers",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "stickers",
									},
								},
								"select": map[string]any{
									"$action": "sticker",
									"exist": []any{
										"id",
										"image",
										"left",
										"rotate",
										"top",
										"z_index",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"stickers",
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
											"name": "id_checklist_source",
											"orig": "id_checklist_source",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/checklists",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "checklists",
									},
								},
								"select": map[string]any{
									"$action": "checklist",
									"exist": []any{
										"id",
										"id_checklist_source",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"checklists",
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
											"name": "color",
											"orig": "color",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/labels",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "labels",
									},
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
								"parts": []any{
									"cards",
									"{id}",
									"labels",
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
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/idLabels",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "idLabels",
									},
								},
								"select": map[string]any{
									"$action": "id_label",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"idLabels",
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
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/idMembers",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "idMembers",
									},
								},
								"select": map[string]any{
									"$action": "id_member",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"idMembers",
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
								"orig": "/cards/{id}/membersVoted",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "membersVoted",
									},
								},
								"select": map[string]any{
									"$action": "members_voted",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"membersVoted",
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
								"orig": "/cards/{id}/markAssociatedNotificationsRead",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "markAssociatedNotificationsRead",
									},
								},
								"select": map[string]any{
									"$action": "mark_associated_notifications_read",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
									"markAssociatedNotificationsRead",
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
											"name": "action_id",
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
								"orig": "/actions/{id}/card",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "card",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"card",
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
											"example": "visible",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/cards",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "cards",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"cards",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "list_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/cards",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "list_id",
									},
									map[string]any{
										"lit": "cards",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{list_id}",
									"cards",
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
											"kind": "query",
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "attachment_field",
											"orig": "attachment_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "board",
											"orig": "board",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "check_item_state",
											"orig": "check_item_state",
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
											"example": "all",
											"kind": "query",
											"name": "checklist_field",
											"orig": "checklist_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "custom_field_item",
											"orig": "custom_field_item",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "list",
											"orig": "list",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "member_voted_field",
											"orig": "member_voted_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "members_voted",
											"orig": "members_voted",
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
											"name": "sticker",
											"orig": "sticker",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "sticker_field",
											"orig": "sticker_field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "filter",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/cards/{filter}",
								"rename": map[string]any{
									"param": map[string]any{
										"filter": "id",
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"cards",
									"{id}",
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
								"method": "GET",
								"orig": "/cards/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"cards",
									"{id}",
									"{field}",
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
								"orig": "/notifications/{id}/card",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "card",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"card",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/cards",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "cards",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"cards",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/cards",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "cards",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"cards",
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
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"cards",
									"{id}",
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
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "closed",
											"orig": "closed",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "cover",
											"orig": "cover",
											"type": "`$OBJECT`",
										},
										map[string]any{
											"kind": "query",
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due_complete",
											"orig": "due_complete",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_attachment_cover",
											"orig": "id_attachment_cover",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_label",
											"orig": "id_label",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_list",
											"orig": "id_list",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "location_name",
											"orig": "location_name",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/customFields",
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id_card",
									},
									map[string]any{
										"lit": "customFields",
									},
								},
								"select": map[string]any{
									"$action": "custom_field",
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id_card}",
									"customFields",
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
							"board",
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
					},
				},
			},
			"card_check_item_state": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "card_check_item_state",
				"op": map[string]any{
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
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/checkItemStates",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "checkItemStates",
									},
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
								"parts": []any{
									"cards",
									"{id}",
									"checkItemStates",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"card_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "card_list",
				"op": map[string]any{
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
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/list",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "list",
									},
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
								"parts": []any{
									"cards",
									"{id}",
									"list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"check_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idChecklist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameData",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "check_item",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "name,nameData,pos,state,due,dueReminder,idMember",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "checkItem",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
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
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
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
								"orig": "/checklists/{id}/checkItems",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "checkItems",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
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
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/checkItems/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
										"idCheckItem": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "checkItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
									"{id}",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "checkItem",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
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
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/checklists/{id}/checkItems/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
										"idCheckItem": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "checkItems",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
									"{id}",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due_reminder",
											"orig": "due_reminder",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_checklist",
											"orig": "id_checklist",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_member",
											"orig": "id_member",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "checkItem",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "checklist_id",
											"orig": "id_checklist",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_check_item",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_card",
											"orig": "id_card",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
										"idCheckItem": "id",
										"idChecklist": "checklist_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id_card",
									},
									map[string]any{
										"lit": "checklist",
									},
									map[string]any{
										"var": "checklist_id",
									},
									map[string]any{
										"lit": "checkItem",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"id",
										"id_card",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id_card}",
									"checklist",
									"{checklist_id}",
									"checkItem",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
						[]any{
							"card",
							"checklist",
						},
					},
				},
			},
			"checklist": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "checklist",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
											"example": false,
											"kind": "query",
											"name": "checked",
											"orig": "checked",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "due_reminder",
											"orig": "due_reminder",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_member",
											"orig": "id_member",
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
											"example": "bottom",
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/checklists/{id}/checkItems",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "checkItems",
									},
								},
								"select": map[string]any{
									"$action": "check_item",
									"exist": []any{
										"checked",
										"due",
										"due_reminder",
										"id",
										"id_member",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{id}",
									"checkItems",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_card",
											"orig": "id_card",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_checklist_source",
											"orig": "id_checklist_source",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/checklists",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_card",
										"id_checklist_source",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
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
											"example": "none",
											"kind": "query",
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "check_item",
											"orig": "check_item",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
											"kind": "query",
											"name": "check_item_field",
											"orig": "check_item_field",
											"type": "`$STRING`",
										},
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
								"orig": "/checklists/{id}",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card",
										"check_item",
										"check_item_field",
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{id}",
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
											"name": "check_item",
											"orig": "check_item",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "name,nameData,pos,state,due,dueReminder,idMember",
											"kind": "query",
											"name": "check_item_field",
											"orig": "check_item_field",
											"type": "`$STRING`",
										},
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
								"orig": "/cards/{id}/checklists",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "checklists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"check_item",
										"check_item_field",
										"field",
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"checklists",
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
								"method": "GET",
								"orig": "/checklists/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"checklists",
									"{id}",
									"{field}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/checklists",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "checklists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"checklists",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_checklist",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/checklists/{idChecklist}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idChecklist": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"checklists",
									"{id}",
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
								"method": "DELETE",
								"orig": "/checklists/{id}",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"checklists",
									"{id}",
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
											"kind": "param",
											"name": "field",
											"orig": "field",
											"reqd": true,
											"type": "`$STRING`",
										},
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
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/checklists/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{id}",
									"{field}",
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
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/checklists/{id}",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"checklists",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
						[]any{
							"card",
						},
					},
				},
			},
			"claimable_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activeMembershipCount",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"format": "date",
						"name": "dateLastActive",
						"short": "The date of the most recent activity on any of the boards in the workspace.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idActiveAdmins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "logoUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "products",
						"type": "`$ARRAY`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "claimable_organization",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/claimableOrganizations",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "claimableOrganizations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active_since",
										"cursor",
										"enterpris_id",
										"inactive_since",
										"limit",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.organizations`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"claimableOrganizations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"custom_board_background": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_board_background",
				"op": map[string]any{
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
											"orig": "id_background",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customBoardBackgrounds",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"custom_emoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_emoji",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
											"kind": "query",
											"name": "file",
											"orig": "file",
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
								"orig": "/members/{id}/customEmoji",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customEmoji",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customEmoji",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customEmoji",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
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
											"orig": "id_emoji",
											"reqd": true,
											"type": "`$STRING`",
										},
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
								"orig": "/members/{id}/customEmoji/{idEmoji}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idEmoji": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customEmoji",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"custom_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cardFront",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "display",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "display_cardFront",
						"short": "Whether this Custom Field should be shown on the front of Cards",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "displaycardFront",
						"short": "Whether to display this custom field on the front of cards",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "fieldGroup",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The ID of the model for which the Custom Field is being defined.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modelType",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of model that the Custom Field is being defined on.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the Custom Field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"short": "If the type is `checkbox`",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "pos",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "type",
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"req": true,
						"short": "The type of Custom Field to create.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_field",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
								},
								"kind": "http",
								"method": "POST",
								"orig": "/customFields/{id}/options",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "options",
									},
								},
								"select": map[string]any{
									"$action": "option",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customFields",
									"{id}",
									"options",
								},
							},
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/customFields",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"parts": []any{
									"customFields",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/customFields",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "customFields",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"customFields",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"parts": []any{
									"customFields",
									"{id}",
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
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/customFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"customFields",
									"{id}",
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
											"name": "id_card",
											"orig": "id_card",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_custom_field",
											"orig": "id_custom_field",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/customField/{idCustomField}/item",
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
										"idCustomField": "id_custom_field",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "id_card",
									},
									map[string]any{
										"lit": "customField",
									},
									map[string]any{
										"var": "id_custom_field",
									},
									map[string]any{
										"lit": "item",
									},
								},
								"select": map[string]any{
									"$action": "item",
									"exist": []any{
										"id_card",
										"id_custom_field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{id_card}",
									"customField",
									"{id_custom_field}",
									"item",
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
								"method": "PUT",
								"orig": "/customFields/{id}",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"parts": []any{
									"customFields",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
						[]any{
							"card",
							"custom_field",
						},
					},
				},
			},
			"custom_field_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idCustomField",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modelType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_field_item",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/customFieldItems",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "customFieldItems",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"customFieldItems",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"custom_sticker": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scaled",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "custom_sticker",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
											"kind": "query",
											"name": "file",
											"orig": "file",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/customStickers",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customStickers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customStickers",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customStickers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
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
											"orig": "id_sticker",
											"reqd": true,
											"type": "`$STRING`",
										},
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
								"orig": "/members/{id}/customStickers/{idSticker}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSticker": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customStickers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
									"{id}",
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
											"orig": "id_sticker",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/customStickers/{idSticker}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSticker": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "customStickers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"email_position": map[string]any{
				"fields": []any{},
				"name": "email_position",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/emailPosition",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "emailPosition",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"emailPosition",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"emoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "native",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sheetX",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sheetY",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "shortName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortNames",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "texts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unified",
						"type": "`$STRING`",
					},
				},
				"name": "emoji",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "spritesheet",
											"orig": "spritesheet",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/emoji",
								"segments": []any{
									map[string]any{
										"lit": "emoji",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"locale",
										"spritesheet",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trello`",
								},
								"parts": []any{
									"emoji",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterpris": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "dateOrganizationPrefsLastUpdated",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "domains",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enterpriseDomains",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAdmins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idOrganizations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idp",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "isRealEnterprise",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "licenses",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "logoHash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logoUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organizationPrefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pluginWhitelistingEnabled",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "products",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ssoActivationFailed",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterpris",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
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
											"example": "none",
											"kind": "query",
											"name": "expiration",
											"orig": "expiration",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enterprises/{id}/tokens",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"expiration",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{id}",
									"tokens",
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
											"name": "field",
											"orig": "field",
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
											"example": "10",
											"kind": "query",
											"name": "member_count",
											"orig": "member_count",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "avatarHash, fullName, initials, username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "member_filter",
											"orig": "member_filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "member_sort",
											"orig": "member_sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "member_sort_by",
											"orig": "member_sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "id",
											"kind": "query",
											"name": "member_sort_order",
											"orig": "member_sort_order",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1",
											"kind": "query",
											"name": "member_start_index",
											"orig": "member_start_index",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "organization",
											"orig": "organization",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "organization_membership",
											"orig": "organization_membership",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "organization_paid_account",
											"orig": "organization_paid_account",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{id}",
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
											"name": "id_organization",
											"orig": "id_organization",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/organizations",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"select": map[string]any{
									"$action": "organization",
									"exist": []any{
										"id",
										"id_organization",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{id}",
									"organizations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterpris_signup_url": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signupUrl",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterpris_signup_url",
				"op": map[string]any{
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
											"example": false,
											"kind": "query",
											"name": "authenticate",
											"orig": "authenticate",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "confirmation_accepted",
											"orig": "confirmation_accepted",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "return_url",
											"orig": "return_url",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "tos_accepted",
											"orig": "tos_accepted",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/signupUrl",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "signupUrl",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"authenticate",
										"confirmation_accepted",
										"id",
										"return_url",
										"tos_accepted",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{id}",
									"signupUrl",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterprise_admin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "fullName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterprise_admin",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "fullName, userName",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/admins",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "admins",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"admins",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"enterprise_audit_log": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAction",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberCreator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "organization",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "enterprise_audit_log",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/auditlog",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "auditlog",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"auditlog",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attempts",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "exportUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "finished",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "startedAt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "export",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "attachment_age",
											"orig": "attachment_age",
											"type": "`$NUMBER`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/exports",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment",
										"attachment_age",
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
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
											"example": true,
											"kind": "query",
											"name": "attachment",
											"orig": "attachment",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{id}/exports",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"exports",
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
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/exports",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "exports",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"exports",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_export",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/{idExport}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/mostRecent",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"lit": "mostRecent",
									},
								},
								"select": map[string]any{
									"$action": "most_recent",
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"mostRecent",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_export",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/exports/{idExport}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
						[]any{
							"organization",
						},
						[]any{
							"board",
							"export",
						},
					},
				},
			},
			"export_download": map[string]any{
				"fields": []any{},
				"name": "export_download",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_export",
											"orig": "id_export",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/{idExport}/download",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id_export",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "exports",
									},
									map[string]any{
										"var": "id_export",
									},
									map[string]any{
										"lit": "download",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id_export",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id_export}",
									"download",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
							"export",
						},
					},
				},
			},
			"generate": map[string]any{
				"fields": []any{},
				"name": "generate",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/calendarKey/generate",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "calendarKey",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"calendarKey",
									"generate",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/emailKey/generate",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "emailKey",
									},
									map[string]any{
										"lit": "generate",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"emailKey",
									"generate",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"id_email_list": map[string]any{
				"fields": []any{},
				"name": "id_email_list",
				"op": map[string]any{
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
											"name": "board_id",
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
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/idEmailList",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "idEmailList",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"idEmailList",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"id_label": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "id_label",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_label",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/idLabels/{idLabel}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idLabel": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "idLabels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"idLabels",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"id_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "id_member",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/idMembers/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "idMembers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"idMembers",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"label": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "label",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
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
											"name": "id_board",
											"orig": "id_board",
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
								"orig": "/labels",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"color",
										"id_board",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"labels",
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
											"name": "board_id",
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
											"type": "`$OBJECT`",
										},
										map[string]any{
											"example": 50,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/labels",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "labels",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"field",
										"limit",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"labels",
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
								"orig": "/labels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"labels",
									"{id}",
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
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/labels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"labels",
									"{id}",
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
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/labels/{id}",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
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
								"parts": []any{
									"labels",
									"{id}",
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
								"method": "PUT",
								"orig": "/labels/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"labels",
									"{id}",
									"{field}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_list_source",
											"orig": "id_list_source",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lists",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_board",
										"id_list_source",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
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
											"name": "id_board",
											"orig": "id_board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_list",
											"orig": "id_list",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/lists/{id}/moveAllCards",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "moveAllCards",
									},
								},
								"select": map[string]any{
									"$action": "move_all_card",
									"exist": []any{
										"id",
										"id_board",
										"id_list",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
									"moveAllCards",
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
								"orig": "/lists/{id}/archiveAllCards",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "archiveAllCards",
									},
								},
								"select": map[string]any{
									"$action": "archive_all_card",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
									"archiveAllCards",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "filter",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/lists/{filter}",
								"rename": map[string]any{
									"param": map[string]any{
										"filter": "id",
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
									"{id}",
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
											"example": "name,closed,idBoard,pos",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"lists",
									"{id}",
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
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
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
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/lists/{id}",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"closed",
										"id",
										"id_board",
										"name",
										"pos",
										"subscribed",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
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
											"name": "value",
											"orig": "value",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/lists/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
									"{field}",
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
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/lists/{id}/closed",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "closed",
									},
								},
								"select": map[string]any{
									"$action": "closed",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
									"closed",
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
								"method": "PUT",
								"orig": "/lists/{id}/idBoard",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "idBoard",
									},
								},
								"select": map[string]any{
									"$action": "id_board",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"lists",
									"{id}",
									"idBoard",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "email",
						"name": "aaEmail",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aaEnrolledDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aaId",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "activityBlocked",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatarHash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatarSource",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "avatarUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bio",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bioData",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "confirmed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gravatarHash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoards",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idBoardsPinned",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idEnterprisesAdmin",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprisesDeactivated",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idMemberReferrer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idOrganizations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idPremOrgsAdmin",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "initials",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAaMastered",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ixUpdate",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "loginTypes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "marketingOptIn",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberType",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messagesDismissed",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nonPublic",
						"short": "Profile data with restricted visibility.",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nonPublicAvailable",
						"short": "Whether the response contains non-public profile data for the member",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "oneTimeMessagesDismissed",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "premiumFeatures",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "products",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trophies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uploadedAvatarHash",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "uploadedAvatarUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "member",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
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
											"name": "file",
											"orig": "file",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/avatar",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "avatar",
									},
								},
								"select": map[string]any{
									"$action": "avatar",
									"exist": []any{
										"file",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
									"avatar",
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
											"name": "file",
											"orig": "file",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/boardBackgrounds",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "boardBackgrounds",
									},
								},
								"select": map[string]any{
									"$action": "board_background",
									"exist": []any{
										"file",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
									"boardBackgrounds",
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
								"orig": "/members/{id}/oneTimeMessagesDismissed",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "oneTimeMessagesDismissed",
									},
								},
								"select": map[string]any{
									"$action": "one_time_messages_dismissed",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
									"oneTimeMessagesDismissed",
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "name",
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash, fullName, initials, username",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": nil,
											"kind": "query",
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_field",
										"count",
										"enterpris_id",
										"field",
										"filter",
										"organization_field",
										"sort",
										"sort_by",
										"sort_order",
										"start_index",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"members",
								},
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
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
											"example": 8,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "only_org_member",
											"orig": "only_org_member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search/members/",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_board",
										"id_organization",
										"limit",
										"only_org_member",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"search",
									"members",
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
								"orig": "/actions/{id}/member",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "member",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"member",
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
								"orig": "/actions/{id}/memberCreator",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "memberCreator",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"memberCreator",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "token_id",
											"orig": "token",
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
								"orig": "/tokens/{token}/member",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "member",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"member",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
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
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "board_background",
											"orig": "board_background",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "board_star",
											"orig": "board_star",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "boards_invited",
											"orig": "boards_invited",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "name,closed,idOrganization,pinned",
											"kind": "query",
											"name": "boards_invited_field",
											"orig": "boards_invited_field",
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
											"example": "none",
											"kind": "query",
											"name": "custom_board_background",
											"orig": "custom_board_background",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "custom_emoji",
											"orig": "custom_emoji",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "custom_sticker",
											"orig": "custom_sticker",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "notification",
											"orig": "notification",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "organization",
											"orig": "organization",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "organization_paid_account",
											"orig": "organization_paid_account",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "organizations_invited",
											"orig": "organizations_invited",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "organizations_invited_field",
											"orig": "organizations_invited_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "paid_account",
											"orig": "paid_account",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "saved_search",
											"orig": "saved_search",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "name",
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash, fullName, initials, username",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_field",
										"enterpris_id",
										"field",
										"id",
										"organization_field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"members",
									"{id}",
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
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "members",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"members",
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
								"method": "GET",
								"orig": "/members/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"members",
									"{id}",
									"{field}",
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
								"orig": "/notifications/{id}/member",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "member",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"member",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/members",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/members/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/members/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_member",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/members/{idMember}/all",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id_member",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id_member",
									},
									map[string]any{
										"lit": "all",
									},
								},
								"select": map[string]any{
									"$action": "all",
									"exist": []any{
										"id_member",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id_member}",
									"all",
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
											"name": "avatar_source",
											"orig": "avatar_source",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "bio",
											"orig": "bio",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "full_name",
											"orig": "full_name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "initial",
											"orig": "initial",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/color_blind",
											"orig": "prefs/color_blind",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/locale",
											"orig": "prefs/locale",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/minutes_between_summary",
											"orig": "prefs/minutes_between_summary",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}",
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_member",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "name",
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash, fullName, initials, username",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/members/{idMember}/deactivated",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idMember": "id_member",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id_member",
									},
									map[string]any{
										"lit": "deactivated",
									},
								},
								"select": map[string]any{
									"$action": "deactivated",
									"exist": []any{
										"board_field",
										"enterpris_id",
										"field",
										"id_member",
										"organization_field",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"members",
									"{id_member}",
									"deactivated",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "allow_billable_guest",
											"orig": "allow_billable_guest",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/members/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"allow_billable_guest",
										"board_id",
										"id",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_member",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/members/{idMember}/licensed",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idMember": "id_member",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id_member",
									},
									map[string]any{
										"lit": "licensed",
									},
								},
								"select": map[string]any{
									"$action": "licensed",
									"exist": []any{
										"enterpris_id",
										"id_member",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"members",
									"{id_member}",
									"licensed",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
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
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}/members/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id_member",
											"orig": "id_member",
											"reqd": true,
											"type": "`$ANY`",
										},
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
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}/members/{idMember}/deactivated",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id_member",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id_member",
									},
									map[string]any{
										"lit": "deactivated",
									},
								},
								"select": map[string]any{
									"$action": "deactivated",
									"exist": []any{
										"id_member",
										"organization_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id_member}",
									"deactivated",
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
							"board",
						},
						[]any{
							"card",
						},
						[]any{
							"enterpris",
						},
						[]any{
							"notification",
						},
						[]any{
							"organization",
						},
						[]any{
							"token",
						},
						[]any{
							"enterpris",
							"member",
						},
						[]any{
							"organization",
							"member",
						},
					},
				},
			},
			"member_privacy": map[string]any{
				"fields": []any{},
				"name": "member_privacy",
				"op": map[string]any{
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
											"name": "plugin_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/plugins/{id}/compliance/memberPrivacy",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "plugin_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"var": "plugin_id",
									},
									map[string]any{
										"lit": "compliance",
									},
									map[string]any{
										"lit": "memberPrivacy",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"plugin_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"plugins",
									"{plugin_id}",
									"compliance",
									"memberPrivacy",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"plugin",
						},
					},
				},
			},
			"members_voted": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "members_voted",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/membersVoted",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "membersVoted",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"membersVoted",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_member",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/membersVoted/{idMember}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idMember": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "membersVoted",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"membersVoted",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"membership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "collaborator",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "deactivated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "licensed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "managed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "member",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "membership",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "admin",
											"orig": "admin",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "collaborator",
											"orig": "collaborator",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "deactivated",
											"orig": "deactivated",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "licensed",
											"orig": "licensed",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "managed",
											"orig": "managed",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "none",
											"kind": "query",
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members/query",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active_since",
										"admin",
										"collaborator",
										"cursor",
										"deactivated",
										"enterpris_id",
										"inactive_since",
										"licensed",
										"managed",
										"search",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"members",
									"query",
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
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/memberships",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "memberships",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"memberships",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "activity",
											"orig": "activity",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "fullname,username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "org_member_type",
											"orig": "org_member_type",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/memberships",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "memberships",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"activity",
										"board_id",
										"filter",
										"member",
										"member_field",
										"org_member_type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"memberships",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_membership",
											"reqd": true,
											"type": "`$STRING`",
										},
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
											"example": false,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/memberships/{idMembership}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMembership": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"memberships",
									"{id}",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_membership",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "fullName, username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/memberships/{idMembership}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMembership": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "memberships",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
										"member_field",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"memberships",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
						[]any{
							"enterpris",
						},
						[]any{
							"organization",
						},
					},
				},
			},
			"most_recent": map[string]any{
				"fields": []any{},
				"name": "most_recent",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"new_billable_guest": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "new_billable_guest",
				"op": map[string]any{
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
											"orig": "id_board",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/newBillableGuests/{idBoard}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idBoard": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "newBillableGuests",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"newBillableGuests",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"organization",
						},
					},
				},
			},
			"notification": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "board",
						"req": true,
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "card",
						"type": "`$OBJECT`",
						"union": map[string]any{
							"branches": 2,
							"count": 2,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateRead",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAction",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMemberCreator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unread",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "notification",
				"op": map[string]any{
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
											"kind": "query",
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
										},
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
											"example": "50",
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "0",
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "read_filter",
											"orig": "read_filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notifications",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "notifications",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"notifications",
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
											"example": false,
											"kind": "query",
											"name": "board",
											"orig": "board",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "name",
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card",
											"orig": "card",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "name",
											"kind": "query",
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "list",
											"orig": "list",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
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
											"example": "displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notifications",
									"{id}",
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
								"method": "GET",
								"orig": "/notifications/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"notifications",
									"{id}",
									"{field}",
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
											"name": "unread",
											"orig": "unread",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/notifications/{id}",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"unread",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notifications",
									"{id}",
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
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/notifications/{id}/unread",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "unread",
									},
								},
								"select": map[string]any{
									"$action": "unread",
									"exist": []any{
										"id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notifications",
									"{id}",
									"unread",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"notification_channel_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blockedKeys",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Singular key or array of notification keys",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "channel",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"channel": "channel",
					},
					"name": "id",
					"parts": []any{
						"channel",
						"blocked_key",
					},
					"sep": "/",
				},
				"name": "notification_channel_setting",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notificationsChannelSettings",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "notificationsChannelSettings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
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
											"example": "email",
											"kind": "param",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "notificationsChannelSettings",
									},
									map[string]any{
										"var": "channel",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
									"{channel}",
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
											"example": "notification_comment_card",
											"kind": "param",
											"name": "blocked_key",
											"orig": "blocked_key",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "email",
											"kind": "param",
											"name": "channel",
											"orig": "channel",
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
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}",
								"rename": map[string]any{
									"param": map[string]any{
										"blockedKeys": "blocked_key",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "notificationsChannelSettings",
									},
									map[string]any{
										"var": "channel",
									},
									map[string]any{
										"var": "blocked_key",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"blocked_key",
										"channel",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{id}",
									"notificationsChannelSettings",
									"{channel}",
									"{blocked_key}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "email",
											"kind": "param",
											"name": "channel",
											"orig": "channel",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "notificationsChannelSettings",
									},
									map[string]any{
										"var": "channel",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
									"{channel}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "notificationsChannelSettings",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
						[]any{
							"member",
							"notifications_channel_setting",
						},
					},
				},
			},
			"notification_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "notification_list",
				"op": map[string]any{
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
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/list",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "list",
									},
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
								"parts": []any{
									"notifications",
									"{id}",
									"list",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"notification_member_creator": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "notification_member_creator",
				"op": map[string]any{
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
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/memberCreator",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "memberCreator",
									},
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
								"parts": []any{
									"notifications",
									"{id}",
									"memberCreator",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"notifications_channel_setting": map[string]any{
				"fields": []any{},
				"name": "notifications_channel_setting",
				"op": map[string]any{},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
						[]any{
							"notifications_channel_setting",
						},
					},
				},
			},
			"option": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "option",
				"op": map[string]any{
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
											"name": "custom_field_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_custom_field_option",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customFields/{id}/options/{idCustomFieldOption}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
										"idCustomFieldOption": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "custom_field_id",
									},
									map[string]any{
										"lit": "options",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "custom_field_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/customFields/{id}/options",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "custom_field_id",
									},
									map[string]any{
										"lit": "options",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
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
											"name": "custom_field_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_custom_field_option",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/customFields/{id}/options/{idCustomFieldOption}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
										"idCustomFieldOption": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
									map[string]any{
										"var": "custom_field_id",
									},
									map[string]any{
										"lit": "options",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"custom_field",
						},
					},
				},
			},
			"org_invite_restrict": map[string]any{
				"fields": []any{},
				"name": "org_invite_restrict",
				"op": map[string]any{
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
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/prefs/orgInviteRestrict",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "prefs",
									},
									map[string]any{
										"lit": "orgInviteRestrict",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"prefs",
									"orgInviteRestrict",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"organization",
						},
					},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "dateLastActivity",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoards",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memberships",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offering",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "premiumFeatures",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"format": "url",
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "organization",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "display_name",
											"orig": "display_name",
											"reqd": true,
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
											"name": "website",
											"orig": "website",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/organizations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"desc",
										"display_name",
										"name",
										"website",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
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
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{id}/logo",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "logo",
									},
								},
								"select": map[string]any{
									"$action": "logo",
									"exist": []any{
										"file",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"logo",
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
								},
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{id}/tags",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"$action": "tag",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"tags",
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
										},
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
											"kind": "query",
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/organizations",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"enterpris_id",
										"field",
										"filter",
										"start_index",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"organizations",
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
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "paid_account",
											"orig": "paid_account",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/organizations",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"filter",
										"member_id",
										"paid_account",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"organizations",
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
								"orig": "/actions/{id}/organization",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "organization",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"organization",
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
								"orig": "/members/{id}/organizationsInvited",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "organizationsInvited",
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
								"parts": []any{
									"members",
									"{member_id}",
									"organizationsInvited",
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
											"kind": "param",
											"name": "field",
											"orig": "field",
											"reqd": true,
											"type": "`$STRING`",
										},
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
								"method": "GET",
								"orig": "/organizations/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"organizations",
									"{id}",
									"{field}",
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
								"orig": "/notifications/{id}/organization",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"var": "notification_id",
									},
									map[string]any{
										"lit": "organization",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"organization",
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
								"method": "GET",
								"orig": "/organizations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"organizations",
									"{id}",
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_org",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/enterprises/{id}/organizations/{idOrg}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idOrg": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"organizations",
									"{id}",
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
								"method": "DELETE",
								"orig": "/organizations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"organizations",
									"{id}",
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
								"method": "DELETE",
								"orig": "/organizations/{id}/logo",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "logo",
									},
								},
								"select": map[string]any{
									"$action": "logo",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"logo",
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
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "display_name",
											"orig": "display_name",
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
											"name": "prefs/associated_domain",
											"orig": "prefs/associated_domain",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/board_visibility_restrict/org",
											"orig": "prefs/board_visibility_restrict/org",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/board_visibility_restrict/private",
											"orig": "prefs/board_visibility_restrict/private",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/board_visibility_restrict/public",
											"orig": "prefs/board_visibility_restrict/public",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/external_members_disabled",
											"orig": "prefs/external_members_disabled",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/google_apps_version",
											"orig": "prefs/google_apps_version",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "prefs/org_invite_restrict",
											"orig": "prefs/org_invite_restrict",
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
											"name": "website",
											"orig": "website",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
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
											"kind": "query",
											"name": "full_name",
											"orig": "full_name",
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
								"orig": "/organizations/{id}/members",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"select": map[string]any{
									"$action": "member",
									"exist": []any{
										"email",
										"full_name",
										"id",
										"type",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{id}",
									"members",
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
							"enterpris",
						},
						[]any{
							"member",
						},
						[]any{
							"notification",
						},
					},
				},
			},
			"pending_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date",
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "displayName",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logoUrl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memberRequestor",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "membershipCount",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "transferability",
						"type": "`$OBJECT`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "pending_organization",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/pendingOrganizations",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "pendingOrganizations",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active_since",
										"enterpris_id",
										"inactive_since",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"pendingOrganizations",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"plugin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "plugin",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/boardPlugins",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "boardPlugins",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"boardPlugins",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "enabled",
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/plugins",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "plugins",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"plugins",
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
								"method": "GET",
								"orig": "/plugins/{id}/",
								"segments": []any{
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"plugins",
									"{id}",
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
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/plugins/{id}/",
								"segments": []any{
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"plugins",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"plugin_data": map[string]any{
				"fields": []any{},
				"name": "plugin_data",
				"op": map[string]any{
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
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/pluginData",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "pluginData",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"pluginData",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/pluginData",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "pluginData",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"pluginData",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
						[]any{
							"organization",
						},
					},
				},
			},
			"plugin_listing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "The description to show for the given locale",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"short": "The locale that this listing should be displayed for.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "The name to use for the given locale.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "overview",
						"short": "The overview to show for the given locale.",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "plugin_listing",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_plugin",
											"orig": "id_plugin",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/plugins/{idPlugin}/listing",
								"rename": map[string]any{
									"param": map[string]any{
										"idPlugin": "id_plugin",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"var": "id_plugin",
									},
									map[string]any{
										"lit": "listing",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_plugin",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"plugins",
									"{id_plugin}",
									"listing",
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
											"orig": "id_listing",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_plugin",
											"orig": "id_plugin",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/plugins/{idPlugin}/listings/{idListing}",
								"rename": map[string]any{
									"param": map[string]any{
										"idListing": "id",
										"idPlugin": "id_plugin",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "plugins",
									},
									map[string]any{
										"var": "id_plugin",
									},
									map[string]any{
										"lit": "listings",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_plugin",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"plugins",
									"{id_plugin}",
									"listings",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"plugin",
						},
					},
				},
			},
			"reaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "reaction",
				"op": map[string]any{
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
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "emoji",
											"orig": "emoji",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactions/{id}",
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "reactions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"emoji",
										"id",
										"id_action",
										"member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "emoji",
											"orig": "emoji",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactions",
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "reactions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"emoji",
										"id_action",
										"member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
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
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id_action",
											"orig": "id_action",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/actions/{idAction}/reactions/{id}",
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "id_action",
									},
									map[string]any{
										"lit": "reactions",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
									"{id}",
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
					},
				},
			},
			"read": map[string]any{
				"fields": []any{},
				"name": "read",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
										},
										map[string]any{
											"example": true,
											"kind": "query",
											"name": "read",
											"orig": "read",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/notifications/all/read",
								"segments": []any{
									map[string]any{
										"lit": "notifications",
									},
									map[string]any{
										"lit": "all",
									},
									map[string]any{
										"lit": "read",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
										"read",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"notifications",
									"all",
									"read",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"saved_search": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"type": "`$ANY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 0,
						},
					},
					map[string]any{
						"name": "query",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "saved_search",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
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
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"reqd": true,
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/savedSearches",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "savedSearches",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
										"name",
										"pos",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
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
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/savedSearches",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "savedSearches",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
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
											"kind": "param",
											"name": "id",
											"orig": "id_search",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/savedSearches/{idSearch}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "savedSearches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
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
											"kind": "param",
											"name": "id",
											"orig": "id_search",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/savedSearches/{idSearch}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "savedSearches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
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
											"kind": "param",
											"name": "id",
											"orig": "id_search",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "member_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/savedSearches/{idSearch}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "savedSearches",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
										"name",
										"pos",
										"query",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"search": map[string]any{
				"fields": []any{},
				"name": "search",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "name,idOrganization",
											"kind": "query",
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "board_organization",
											"orig": "board_organization",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "boards_limit",
											"orig": "boards_limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "false",
											"kind": "query",
											"name": "card_attachment",
											"orig": "card_attachment",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card_board",
											"orig": "card_board",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card_list",
											"orig": "card_list",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card_member",
											"orig": "card_member",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "card_sticker",
											"orig": "card_sticker",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "cards_limit",
											"orig": "cards_limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "cards_page",
											"orig": "cards_page",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_board",
											"orig": "id_board",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_card",
											"orig": "id_card",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "avatarHash,fullName,initials,username,confirmed",
											"kind": "query",
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "10",
											"kind": "query",
											"name": "members_limit",
											"orig": "members_limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "model_type",
											"orig": "model_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "name,displayName",
											"kind": "query",
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "10",
											"kind": "query",
											"name": "organizations_limit",
											"orig": "organizations_limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "partial",
											"orig": "partial",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "query",
											"orig": "query",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"select": map[string]any{
									"exist": []any{
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"search",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"show_sidebar": map[string]any{
				"fields": []any{},
				"name": "show_sidebar",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebar",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "showSidebar",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebar",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"show_sidebar_activity": map[string]any{
				"fields": []any{},
				"name": "show_sidebar_activity",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarActivity",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "showSidebarActivity",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarActivity",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"show_sidebar_board_action": map[string]any{
				"fields": []any{},
				"name": "show_sidebar_board_action",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarBoardActions",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "showSidebarBoardActions",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarBoardActions",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"show_sidebar_member": map[string]any{
				"fields": []any{},
				"name": "show_sidebar_member",
				"op": map[string]any{
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "value",
											"orig": "value",
											"reqd": true,
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarMembers",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "myPrefs",
									},
									map[string]any{
										"lit": "showSidebarMembers",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarMembers",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"board",
						},
					},
				},
			},
			"sticker": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "sticker",
				"op": map[string]any{
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_sticker",
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
								"orig": "/cards/{id}/stickers/{idSticker}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "stickers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
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
								"orig": "/cards/{id}/stickers",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "stickers",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_sticker",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/stickers/{idSticker}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "stickers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
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
											"name": "card_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_sticker",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "left",
											"orig": "left",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"example": 0,
											"kind": "query",
											"name": "rotate",
											"orig": "rotate",
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "top",
											"orig": "top",
											"reqd": true,
											"type": "`$NUMBER`",
										},
										map[string]any{
											"kind": "query",
											"name": "z_index",
											"orig": "z_index",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/stickers/{idSticker}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
									map[string]any{
										"var": "card_id",
									},
									map[string]any{
										"lit": "stickers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
										"left",
										"rotate",
										"top",
										"z_index",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"card",
						},
					},
				},
			},
			"tag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "tag",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/tags",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "tags",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"tags",
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
											"kind": "param",
											"name": "id",
											"orig": "id_tag",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "organization_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/tags/{idTag}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idTag": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "organization_id",
									},
									map[string]any{
										"lit": "tags",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"organizations",
									"{organization_id}",
									"tags",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"organization",
						},
					},
				},
			},
			"token": map[string]any{
				"fields": []any{
					map[string]any{
						"format": "date-time",
						"name": "dateCreated",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "dateExpires",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "token",
				"op": map[string]any{
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
											"example": false,
											"kind": "query",
											"name": "webhook",
											"orig": "webhook",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/tokens",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "member_id",
									},
									map[string]any{
										"lit": "tokens",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
										"webhook",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"members",
									"{member_id}",
									"tokens",
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
											"kind": "param",
											"name": "id",
											"orig": "token",
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
											"example": false,
											"kind": "query",
											"name": "webhook",
											"orig": "webhook",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"webhook",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{id}",
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
											"kind": "param",
											"name": "id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tokens/{token}/",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"tokens",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"member",
						},
					},
				},
			},
			"transferrable_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newBillableMembers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "restrictedMembers",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "transferrable",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "transferrable_organization",
				"op": map[string]any{
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
											"name": "enterpris_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_organization",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/transferrable/organization/{idOrganization}",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterpris_id",
										"idOrganization": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterpris_id",
									},
									map[string]any{
										"lit": "transferrable",
									},
									map[string]any{
										"lit": "organization",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterpris_id",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"enterprises",
									"{enterpris_id}",
									"transferrable",
									"organization",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enterpris",
						},
					},
				},
			},
			"trello_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"short": "The name of the list",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "softLimit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "trello_list",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "top",
											"kind": "query",
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/lists",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "lists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"name",
										"pos",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.limits`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
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
											"name": "board_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/lists",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
									map[string]any{
										"var": "board_id",
									},
									map[string]any{
										"lit": "lists",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"card",
										"card_field",
										"field",
										"filter",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
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
											"name": "action_id",
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
								"orig": "/actions/{id}/list",
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "actions",
									},
									map[string]any{
										"var": "action_id",
									},
									map[string]any{
										"lit": "list",
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
									"res": "`body.limits`",
								},
								"parts": []any{
									"actions",
									"{action_id}",
									"list",
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
							"board",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"format": "url",
						"name": "callbackURL",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "consecutiveFailures",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "description",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date",
						"name": "firstConsecutiveFailDate",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "callback_url",
											"orig": "callback_url",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_model",
											"orig": "id_model",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"callback_url",
										"description",
										"id_model",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "token_id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback_url",
											"orig": "callback_url",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_model",
											"orig": "id_model",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/tokens/{token}/webhooks",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback_url",
										"description",
										"id_model",
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
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
											"kind": "param",
											"name": "token_id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}/webhooks",
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "webhooks",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
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
											"kind": "param",
											"name": "field",
											"orig": "field",
											"reqd": true,
											"type": "`$STRING`",
										},
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
								"method": "GET",
								"orig": "/webhooks/{id}/{field}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"var": "field",
									},
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
								"parts": []any{
									"webhooks",
									"{id}",
									"{field}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_webhook",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "token_id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
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
								"method": "GET",
								"orig": "/webhooks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"webhooks",
									"{id}",
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
											"orig": "id_webhook",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "token_id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
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
								"method": "DELETE",
								"orig": "/webhooks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"webhooks",
									"{id}",
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
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"kind": "query",
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/webhooks/{id}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active",
										"callback_url",
										"description",
										"id",
										"id_model",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"webhooks",
									"{id}",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "param",
											"name": "id",
											"orig": "id_webhook",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "token_id",
											"orig": "token",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "5abbe4b7ddc1b351ef961414",
											"kind": "query",
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "token_id",
									},
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"callback_url",
										"description",
										"id",
										"id_model",
										"token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"token",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
