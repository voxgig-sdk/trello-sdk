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
				"enterprise": map[string]any{},
				"enterprise_admin": map[string]any{},
				"enterprise_audit_log": map[string]any{},
				"enterprise_signup_url": map[string]any{},
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
				"new_billable_guest": map[string]any{},
				"notification": map[string]any{},
				"notification_channel_setting": map[string]any{},
				"notification_list": map[string]any{},
				"notification_member_creator": map[string]any{},
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
						"title": "Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "display",
						"title": "Display",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMemberCreator",
						"title": "Id Member Creator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberCreator",
						"title": "Member Creator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
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
								"kind": "http",
								"method": "POST",
								"orig": "/cards/{id}/actions/comments",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"card_id",
										"text",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/actions/{idAction}/reactions",
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
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "reaction",
									"exist": []any{
										"id_action",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/actions",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "commentCard, updateCard:idList",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"filter",
										"page",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/actions",
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
								"parts": []any{
									"members",
									"{member_id}",
									"actions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/actions",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"actions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{boardId}/actions",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"actions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"boardId": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "board_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$OBJECT`",
											"kind": "query",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "list",
										},
										map[string]any{
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 50,
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "activityBlocked,avatarHash,avatarUrl,fullName,idMemberReferrer,initials,nonPublic,nonPublicAvailable,username",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "reaction",
											"orig": "reaction",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"actions",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"actions",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/actions",
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
								"parts": []any{
									"lists",
									"{list_id}",
									"actions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "list_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"list_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/actions/{idAction}/comments",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"{id_action}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "comment",
									"exist": []any{
										"card_id",
										"id_action",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"actions",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/actions/{idAction}/comments",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"actions",
									"{id_action}",
									"comments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"actions",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "text",
											"orig": "text",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"text",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"actions",
									"{id}",
									"text",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "text",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.card",
						},
						[]any{
							"$.main.kit.entity.list",
						},
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
						[]any{
							"$.main.kit.entity.card",
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
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactionsSummary",
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
								"parts": []any{
									"actions",
									"{id_action}",
									"reactionsSummary",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_action",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
					},
				},
			},
			"admin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/enterprises/{id}/admins/{idMember}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"admins",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/admins/{idMember}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "admins",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"admins",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enterprise",
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
								"parts": []any{
									"applications",
									"{key}",
									"compliance",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "key",
											"orig": "key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"key",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/prefs/associatedDomain",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"prefs",
									"associatedDomain",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"attachment": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/attachments",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"filter",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/attachments/{idAttachment}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAttachment": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_attachment",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$ARRAY`",
											"kind": "query",
											"example": []any{
												"all",
											},
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/attachments/{idAttachment}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"attachments",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idAttachment": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_attachment",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_attachment",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
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
								"kind": "http",
								"method": "GET",
								"orig": "/batch",
								"segments": []any{
									map[string]any{
										"lit": "batch",
									},
								},
								"parts": []any{
									"batch",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"url",
									},
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
						"title": "Closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "creationMethod",
						"title": "Creation Method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateLastActivity",
						"title": "Date Last Activity",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "dateLastView",
						"title": "Date Last View",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "datePluginDisable",
						"title": "Date Plugin Disable",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "desc",
						"title": "Desc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "descData",
						"title": "Desc Data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enterpriseOwned",
						"title": "Enterprise Owned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "idMemberCreator",
						"title": "Id Member Creator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idOrganization",
						"title": "Id Organization",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idTags",
						"title": "Id Tags",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ixUpdate",
						"title": "Ix Update",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "labelNames",
						"title": "Label Names",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberships",
						"title": "Memberships",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the board.",
					},
					map[string]any{
						"name": "pinned",
						"title": "Pinned",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "powerUps",
						"title": "Power Ups",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefs",
						"title": "Prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "shortLink",
						"title": "Short Link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortUrl",
						"title": "Short Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "starred",
						"title": "Starred",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "subscribed",
						"title": "Subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "templateGallery",
						"title": "Template Gallery",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
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
								"kind": "http",
								"method": "POST",
								"orig": "/boards/",
								"segments": []any{
									map[string]any{
										"lit": "boards",
									},
								},
								"parts": []any{
									"boards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "default_label",
											"orig": "default_label",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "default_list",
											"orig": "default_list",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_board_source",
											"orig": "id_board_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "keep_from_source",
											"orig": "keep_from_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "power_up",
											"orig": "power_up",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs_background",
											"orig": "prefs_background",
											"type": "`$STRING`",
											"kind": "query",
											"example": "blue",
										},
										map[string]any{
											"name": "prefs_card_aging",
											"orig": "prefs_card_aging",
											"type": "`$STRING`",
											"kind": "query",
											"example": "regular",
										},
										map[string]any{
											"name": "prefs_card_cover",
											"orig": "prefs_card_cover",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "prefs_comment",
											"orig": "prefs_comment",
											"type": "`$STRING`",
											"kind": "query",
											"example": "members",
										},
										map[string]any{
											"name": "prefs_invitation",
											"orig": "prefs_invitation",
											"type": "`$STRING`",
											"kind": "query",
											"example": "members",
										},
										map[string]any{
											"name": "prefs_permission_level",
											"orig": "prefs_permission_level",
											"type": "`$STRING`",
											"kind": "query",
											"example": "private",
										},
										map[string]any{
											"name": "prefs_self_join",
											"orig": "prefs_self_join",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "prefs_voting",
											"orig": "prefs_voting",
											"type": "`$STRING`",
											"kind": "query",
											"example": "disabled",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"labels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"boardPlugins",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_plugin",
											"orig": "id_plugin",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "board_plugin",
									"exist": []any{
										"id",
										"id_plugin",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"idTags",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "id_tag",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"markedAsViewed",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "marked_as_viewed",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boards",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "list",
											"orig": "list",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organization",
											"orig": "organization",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,displayName",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/boards",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"filter",
										"organization_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardsInvited",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "board_star",
											"orig": "board_star",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "card_plugin_data",
											"orig": "card_plugin_data",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "checklist",
											"orig": "checklist",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "custom_field",
											"orig": "custom_field",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,desc,descData,closed,idOrganization,pinned,url,shortUrl,prefs,labelNames",
										},
										map[string]any{
											"name": "label",
											"orig": "label",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "list",
											"orig": "list",
											"type": "`$STRING`",
											"kind": "query",
											"example": "open",
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "membership",
											"orig": "membership",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "my_pref",
											"orig": "my_pref",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "organization",
											"orig": "organization",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "organization_plugin_data",
											"orig": "organization_plugin_data",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "plugin_data",
											"orig": "plugin_data",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "tag",
											"orig": "tag",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/board",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/board",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/board",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/board",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "list_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"list_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/board",
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"notification_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "closed",
											"orig": "closed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/background",
											"orig": "prefs/background",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/calendar_feed_enabled",
											"orig": "prefs/calendar_feed_enabled",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/card_aging",
											"orig": "prefs/card_aging",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/card_cover",
											"orig": "prefs/card_cover",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/comment",
											"orig": "prefs/comment",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/hide_vote",
											"orig": "prefs/hide_vote",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/invitation",
											"orig": "prefs/invitation",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/permission_level",
											"orig": "prefs/permission_level",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/self_join",
											"orig": "prefs/self_join",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/voting",
											"orig": "prefs/voting",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"boards",
									"{id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "normal",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
						[]any{
							"$.main.kit.entity.card",
						},
						[]any{
							"$.main.kit.entity.checklist",
						},
						[]any{
							"$.main.kit.entity.list",
						},
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.notification",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"board_background": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/customBoardBackgrounds",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardBackgrounds",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customBoardBackgrounds",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id_background}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id_background",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_background",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_background",
										"member_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/boardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardBackgrounds",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "brightness",
											"orig": "brightness",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tile",
											"orig": "tile",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id_background}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id_background",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_background",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "brightness",
											"orig": "brightness",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "tile",
											"orig": "tile",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.member",
							"$.main.kit.entity.custom_board_background",
						},
					},
				},
			},
			"board_plugin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/boardPlugins/{idPlugin}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"boardPlugins",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idPlugin": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_plugin",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"board_star": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"title": "Id Board",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
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
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/boardStars",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_board",
										"member_id",
										"pos",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{boardId}/boardStars",
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
								"parts": []any{
									"boards",
									"{id}",
									"boardStars",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"boardId": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "board_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "mine",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardStars/{idStar}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_star",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/boardStars",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/boardStars/{idStar}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_star",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/boardStars/{idStar}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"boardStars",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idStar": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_star",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
										"pos",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"bulk": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/organizations/bulk/{idOrganizations}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
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
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"organizations",
									"bulk",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idOrganizations": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_organization",
											"type": "`$ARRAY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/transferrable/bulk/{idOrganizations}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
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
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"transferrable",
									"bulk",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idOrganizations": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_organization",
											"type": "`$ARRAY`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"enterprises",
									"${id}",
									"enterpriseJoinRequest",
									"bulk",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$ARRAY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_organization",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enterprise",
						},
					},
				},
			},
			"card": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"title": "Address",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "badges",
						"title": "Badges",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "cardRole",
						"title": "Card Role",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "checkItemStates",
						"title": "Check Item States",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "closed",
						"title": "Closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "coordinates",
						"title": "Coordinates",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "cover",
						"title": "Cover",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "creationMethod",
						"title": "Creation Method",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateLastActivity",
						"title": "Date Last Activity",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "desc",
						"title": "Desc",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "descData",
						"title": "Desc Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "due",
						"title": "Due",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "dueReminder",
						"title": "Due Reminder",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAttachmentCover",
						"title": "Id Attachment Cover",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"title": "Id Board",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idChecklists",
						"title": "Id Checklists",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idLabels",
						"title": "Id Labels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idList",
						"title": "Id List",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMembers",
						"title": "Id Members",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idMembersVoted",
						"title": "Id Members Voted",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idShort",
						"title": "Id Short",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "labels",
						"title": "Labels",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "locationName",
						"title": "Location Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "manualCoverAttachment",
						"title": "Manual Cover Attachment",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "mirrorSourceId",
						"title": "Mirror Source Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
						"type": "`$NUMBER`",
						"format": "float",
					},
					map[string]any{
						"name": "shortLink",
						"title": "Short Link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortUrl",
						"title": "Short Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "subscribed",
						"title": "Subscribed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
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
								"kind": "http",
								"method": "POST",
								"orig": "/cards",
								"segments": []any{
									map[string]any{
										"lit": "cards",
									},
								},
								"parts": []any{
									"cards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "card_role",
											"orig": "card_role",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due_complete",
											"orig": "due_complete",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "file_source",
											"orig": "file_source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_card_source",
											"orig": "id_card_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_label",
											"orig": "id_label",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_list",
											"orig": "id_list",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "keep_from_source",
											"orig": "keep_from_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "location_name",
											"orig": "location_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "mime_type",
											"orig": "mime_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "url_source",
											"orig": "url_source",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"attachments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "mime_type",
											"orig": "mime_type",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "set_cover",
											"orig": "set_cover",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "url",
											"orig": "url",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"stickers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "image",
											"orig": "image",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "left",
											"orig": "left",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "rotate",
											"orig": "rotate",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "top",
											"orig": "top",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "z_index",
											"orig": "z_index",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"checklists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_checklist_source",
											"orig": "id_checklist_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"labels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"idLabels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "id_label",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"idMembers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "id_member",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"membersVoted",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "members_voted",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"markAssociatedNotificationsRead",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "mark_associated_notifications_read",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/card",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"card",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/cards",
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
								"parts": []any{
									"members",
									"{member_id}",
									"cards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "visible",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/lists/{id}/cards",
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
								"parts": []any{
									"lists",
									"{list_id}",
									"cards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "list_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "list_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"list_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "attachment",
											"orig": "attachment",
											"type": "`$STRING`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "attachment_field",
											"orig": "attachment_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "check_item_state",
											"orig": "check_item_state",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "checklist",
											"orig": "checklist",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "checklist_field",
											"orig": "checklist_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "custom_field_item",
											"orig": "custom_field_item",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "list",
											"orig": "list",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "member_voted_field",
											"orig": "member_voted_field",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "members_voted",
											"orig": "members_voted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "plugin_data",
											"orig": "plugin_data",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "sticker",
											"orig": "sticker",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "sticker_field",
											"orig": "sticker_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/cards/{filter}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"cards",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"filter": "id",
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/card",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"card",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"notification_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/cards",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"cards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/cards",
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
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"cards",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"cards",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "address",
											"orig": "address",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "closed",
											"orig": "closed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "coordinate",
											"orig": "coordinate",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "cover",
											"orig": "cover",
											"type": "`$OBJECT`",
											"kind": "query",
										},
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due_complete",
											"orig": "due_complete",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_attachment_cover",
											"orig": "id_attachment_cover",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_label",
											"orig": "id_label",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_list",
											"orig": "id_list",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "location_name",
											"orig": "location_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start",
											"orig": "start",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/customFields",
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
								"parts": []any{
									"cards",
									"{id_card}",
									"customFields",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{
									"$action": "custom_field",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.checklist",
						},
						[]any{
							"$.main.kit.entity.list",
						},
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.notification",
						},
					},
				},
			},
			"card_check_item_state": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"parts": []any{
									"cards",
									"{id}",
									"checkItemStates",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
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
						"title": "Id",
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
								"parts": []any{
									"cards",
									"{id}",
									"list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idChecklist",
						"title": "Id Checklist",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nameData",
						"title": "Name Data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state",
						"title": "State",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,nameData,pos,state,due,dueReminder,idMember",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/checkItems",
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
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
										"filter",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/checklists/{id}/checkItems/{idCheckItem}",
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
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
										"idCheckItem": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"field",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/checklists/{id}/checkItems/{idCheckItem}",
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
								"parts": []any{
									"checklists",
									"{checklist_id}",
									"checkItems",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "checklist_id",
										"idCheckItem": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"checklist_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/checkItem/{idCheckItem}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"checkItem",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idCheckItem": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due_reminder",
											"orig": "due_reminder",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_checklist",
											"orig": "id_checklist",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
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
								"parts": []any{
									"cards",
									"{id_card}",
									"checklist",
									"{checklist_id}",
									"checkItem",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
										"idCheckItem": "id",
										"idChecklist": "checklist_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "checklist_id",
											"orig": "id_checklist",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_check_item",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_card",
											"orig": "id_card",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
						[]any{
							"$.main.kit.entity.card",
							"$.main.kit.entity.checklist",
						},
					},
				},
			},
			"checklist": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"parts": []any{
									"checklists",
									"{id}",
									"checkItems",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "checked",
											"orig": "checked",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "due",
											"orig": "due",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "due_reminder",
											"orig": "due_reminder",
											"type": "`$NUMBER`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
											"kind": "query",
											"example": "bottom",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/checklists",
								"segments": []any{
									map[string]any{
										"lit": "checklists",
									},
								},
								"parts": []any{
									"checklists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "id_card",
											"orig": "id_card",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_checklist_source",
											"orig": "id_checklist_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"checklists",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "check_item",
											"orig": "check_item",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "check_item_field",
											"orig": "check_item_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name, nameData, pos, state, due, dueReminder, idMember",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/checklists",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"checklists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "check_item",
											"orig": "check_item",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "check_item_field",
											"orig": "check_item_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,nameData,pos,state,due,dueReminder,idMember",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"checklists",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/checklists",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"checklists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/checklists/{idChecklist}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"checklists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idChecklist": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_checklist",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"checklists",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"checklists",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$ANY`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"checklists",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"name",
										"pos",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"claimable_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "activeMembershipCount",
						"title": "Active Membership Count",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "dateLastActive",
						"title": "Date Last Active",
						"type": "`$STRING`",
						"short": "The date of the most recent activity on any of the boards in the workspace.",
						"format": "date",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idActiveAdmins",
						"title": "Id Active Admins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "logoUrl",
						"title": "Logo Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/claimableOrganizations",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "claimableOrganizations",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"claimableOrganizations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.organizations`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enterprise",
						},
					},
				},
			},
			"custom_board_background": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/customBoardBackgrounds/{idBackground}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customBoardBackgrounds",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idBackground": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_background",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"custom_emoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
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
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/customEmoji",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
										"name",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customEmoji",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customEmoji/{idEmoji}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customEmoji",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idEmoji": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_emoji",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"custom_field": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cardFront",
						"title": "Card Front",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "display",
						"title": "Display",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "display_cardFront",
						"title": "Display Card Front",
						"type": "`$BOOLEAN`",
						"short": "Whether this Custom Field should be shown on the front of Cards",
					},
					map[string]any{
						"name": "displaycardFront",
						"title": "Displaycard Front",
						"type": "`$BOOLEAN`",
						"short": "Whether to display this custom field on the front of cards",
					},
					map[string]any{
						"name": "fieldGroup",
						"title": "Field Group",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"title": "Id Model",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The ID of the model for which the Custom Field is being defined.",
					},
					map[string]any{
						"name": "modelType",
						"title": "Model Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The type of model that the Custom Field is being defined on.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The name of the Custom Field",
					},
					map[string]any{
						"name": "options",
						"title": "Options",
						"type": "`$ARRAY`",
						"short": "If the type is `checkbox`",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"list": map[string]any{
								"type": "`$STRING`",
							},
						},
						"short": "The type of Custom Field to create.",
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
								"parts": []any{
									"customFields",
									"{id}",
									"options",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "option",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/customFields",
								"segments": []any{
									map[string]any{
										"lit": "customFields",
									},
								},
								"parts": []any{
									"customFields",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/customFields",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"customFields",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"customFields",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"customFields",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{idCard}/customField/{idCustomField}/item",
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
								"parts": []any{
									"cards",
									"{id_card}",
									"customField",
									"{id_custom_field}",
									"item",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idCard": "id_card",
										"idCustomField": "id_custom_field",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_card",
											"orig": "id_card",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_custom_field",
											"orig": "id_custom_field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "item",
									"exist": []any{
										"id_card",
										"id_custom_field",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"customFields",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.display`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"custom_field_item": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idCustomField",
						"title": "Id Custom Field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"title": "Id Model",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modelType",
						"title": "Model Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "value",
						"title": "Value",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/customFieldItems",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"customFieldItems",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"custom_sticker": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "scaled",
						"title": "Scaled",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
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
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/customStickers",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"file",
										"member_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customStickers",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/customStickers/{idSticker}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSticker": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_sticker",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"member_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/customStickers/{idSticker}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"customStickers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSticker": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_sticker",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/emailPosition",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"emailPosition",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"emoji": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "keywords",
						"title": "Keywords",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "native",
						"title": "Native",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sheetX",
						"title": "Sheet X",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "sheetY",
						"title": "Sheet Y",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "shortName",
						"title": "Short Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "shortNames",
						"title": "Short Names",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "text",
						"title": "Text",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "texts",
						"title": "Texts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tts",
						"title": "Tts",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unified",
						"title": "Unified",
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
								"kind": "http",
								"method": "GET",
								"orig": "/emoji",
								"segments": []any{
									map[string]any{
										"lit": "emoji",
									},
								},
								"parts": []any{
									"emoji",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.trello`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "locale",
											"orig": "locale",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "spritesheet",
											"orig": "spritesheet",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"locale",
										"spritesheet",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterprise": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dateOrganizationPrefsLastUpdated",
						"title": "Date Organization Prefs Last Updated",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "domains",
						"title": "Domains",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "enterpriseDomains",
						"title": "Enterprise Domains",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAdmins",
						"title": "Id Admins",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idOrganizations",
						"title": "Id Organizations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idp",
						"title": "Idp",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "isRealEnterprise",
						"title": "Is Real Enterprise",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "licenses",
						"title": "Licenses",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "logoHash",
						"title": "Logo Hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logoUrl",
						"title": "Logo Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "organizationPrefs",
						"title": "Organization Prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "pluginWhitelistingEnabled",
						"title": "Plugin Whitelisting Enabled",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prefs",
						"title": "Prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "ssoActivationFailed",
						"title": "Sso Activation Failed",
						"type": "`$BOOLEAN`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterprise",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"enterprises",
									"{id}",
									"tokens",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "expiration",
											"orig": "expiration",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
									},
								},
								"select": map[string]any{
									"$action": "token",
									"exist": []any{
										"expiration",
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"enterprises",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "member_count",
											"orig": "member_count",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "10",
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash, fullName, initials, username",
										},
										map[string]any{
											"name": "member_filter",
											"orig": "member_filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "member_sort",
											"orig": "member_sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "member_sort_by",
											"orig": "member_sort_by",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "member_sort_order",
											"orig": "member_sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": "id",
										},
										map[string]any{
											"name": "member_start_index",
											"orig": "member_start_index",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "1",
										},
										map[string]any{
											"name": "organization",
											"orig": "organization",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organization_membership",
											"orig": "organization_membership",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organization_paid_account",
											"orig": "organization_paid_account",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
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
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"enterprises",
									"{id}",
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "organization",
									"exist": []any{
										"id",
										"id_organization",
									},
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
						"title": "Full Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"title": "Username",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/admins",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "admins",
									},
								},
								"parts": []any{
									"enterprises",
									"{id}",
									"admins",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "fullName, userName",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterprise_audit_log": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAction",
						"title": "Id Action",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member",
						"title": "Member",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberCreator",
						"title": "Member Creator",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "organization",
						"title": "Organization",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterprise_audit_log",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/auditlog",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "auditlog",
									},
								},
								"parts": []any{
									"enterprises",
									"{id}",
									"auditlog",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "auditlog",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enterprise_signup_url": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "signupUrl",
						"title": "Signup Url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enterprise_signup_url",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"enterprises",
									"{id}",
									"signupUrl",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "authenticate",
											"orig": "authenticate",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "confirmation_accepted",
											"orig": "confirmation_accepted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "return_url",
											"orig": "return_url",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "tos_accepted",
											"orig": "tos_accepted",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"export": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attempts",
						"title": "Attempts",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "exportUrl",
						"title": "Export Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "finished",
						"title": "Finished",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "size",
						"title": "Size",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stage",
						"title": "Stage",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "startedAt",
						"title": "Started At",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
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
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/exports",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "attachment",
											"orig": "attachment",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "attachment_age",
											"orig": "attachment_age",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment",
										"attachment_age",
										"board_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/organizations/{id}/exports",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"exports",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "attachment",
											"orig": "attachment",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"attachment",
										"organization_id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/exports",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"exports",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/{idExport}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_export",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/mostRecent",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"mostRecent",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.status`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "most_recent",
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/exports/{idExport}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_export",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.organization",
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
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/exports/{idExport}/download",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"exports",
									"{id_export}",
									"download",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idExport": "id_export",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_export",
											"orig": "id_export",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id_export",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
							"$.main.kit.entity.export",
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
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/calendarKey/generate",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"calendarKey",
									"generate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/emailKey/generate",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"emailKey",
									"generate",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/idEmailList",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"idEmailList",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"id_label": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/idLabels/{idLabel}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"idLabels",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idLabel": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_label",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"id_member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/idMembers/{idMember}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"idMembers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"label": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/labels",
								"segments": []any{
									map[string]any{
										"lit": "labels",
									},
								},
								"parts": []any{
									"labels",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"color",
										"id_board",
										"name",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/labels",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"labels",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$OBJECT`",
											"kind": "query",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 50,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"field",
										"limit",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"labels",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"labels",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"labels",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "color",
											"orig": "color",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"color",
										"id",
										"name",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"labels",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "POST",
								"orig": "/lists",
								"segments": []any{
									map[string]any{
										"lit": "lists",
									},
								},
								"parts": []any{
									"lists",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_list_source",
											"orig": "id_list_source",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
									"moveAllCards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_list",
											"orig": "id_list",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
									"archiveAllCards",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "archive_all_card",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/lists/{filter}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"filter": "id",
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,closed,idBoard,pos",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "closed",
											"orig": "closed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "subscribed",
											"orig": "subscribed",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
									"closed",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "closed",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"lists",
									"{id}",
									"idBoard",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "id_board",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"member": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "aaEmail",
						"title": "Aa Email",
						"type": "`$STRING`",
						"format": "email",
					},
					map[string]any{
						"name": "aaEnrolledDate",
						"title": "Aa Enrolled Date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "aaId",
						"title": "Aa Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "activityBlocked",
						"title": "Activity Blocked",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "avatarHash",
						"title": "Avatar Hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatarSource",
						"title": "Avatar Source",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "avatarUrl",
						"title": "Avatar Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "bio",
						"title": "Bio",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bioData",
						"title": "Bio Data",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "confirmed",
						"title": "Confirmed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "fullName",
						"title": "Full Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "gravatarHash",
						"title": "Gravatar Hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoards",
						"title": "Id Boards",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idBoardsPinned",
						"title": "Id Boards Pinned",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprise",
						"title": "Id Enterprise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idEnterprisesAdmin",
						"title": "Id Enterprises Admin",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprisesDeactivated",
						"title": "Id Enterprises Deactivated",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idMemberReferrer",
						"title": "Id Member Referrer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idOrganizations",
						"title": "Id Organizations",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idPremOrgsAdmin",
						"title": "Id Prem Orgs Admin",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "initials",
						"title": "Initials",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isAaMastered",
						"title": "Is Aa Mastered",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "ixUpdate",
						"title": "Ix Update",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "loginTypes",
						"title": "Login Types",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "marketingOptIn",
						"title": "Marketing Opt In",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "memberType",
						"title": "Member Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "messagesDismissed",
						"title": "Messages Dismissed",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "nonPublic",
						"title": "Non Public",
						"type": "`$OBJECT`",
						"short": "Profile data with restricted visibility.",
					},
					map[string]any{
						"name": "nonPublicAvailable",
						"title": "Non Public Available",
						"type": "`$BOOLEAN`",
						"short": "Whether the response contains non-public profile data for the member",
					},
					map[string]any{
						"name": "oneTimeMessagesDismissed",
						"title": "One Time Messages Dismissed",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "prefs",
						"title": "Prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "premiumFeatures",
						"title": "Premium Features",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "products",
						"title": "Products",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "trophies",
						"title": "Trophies",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "uploadedAvatarHash",
						"title": "Uploaded Avatar Hash",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "uploadedAvatarUrl",
						"title": "Uploaded Avatar Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "username",
						"title": "Username",
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
								"parts": []any{
									"members",
									"{id}",
									"avatar",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "avatar",
									"exist": []any{
										"file",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"members",
									"{id}",
									"boardBackgrounds",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "board_background",
									"exist": []any{
										"file",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"members",
									"{id}",
									"oneTimeMessagesDismissed",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "one_time_messages_dismissed",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "members",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash, fullName, initials, username",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "displayName",
										},
										map[string]any{
											"name": "sort",
											"orig": "sort",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_order",
											"orig": "sort_order",
											"type": "`$STRING`",
											"kind": "query",
											"example": nil,
										},
										map[string]any{
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
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
								"parts": []any{
									"search",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 8,
										},
										map[string]any{
											"name": "only_org_member",
											"orig": "only_org_member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/member",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"member",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/memberCreator",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"memberCreator",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}/member",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"member",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"token_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/members",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"members",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "action",
											"orig": "action",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "board_background",
											"orig": "board_background",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "board_star",
											"orig": "board_star",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "boards_invited",
											"orig": "boards_invited",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "boards_invited_field",
											"orig": "boards_invited_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,closed,idOrganization,pinned",
										},
										map[string]any{
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "custom_board_background",
											"orig": "custom_board_background",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "custom_emoji",
											"orig": "custom_emoji",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "custom_sticker",
											"orig": "custom_sticker",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "notification",
											"orig": "notification",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "organization",
											"orig": "organization",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "organization_paid_account",
											"orig": "organization_paid_account",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "organizations_invited",
											"orig": "organizations_invited",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "organizations_invited_field",
											"orig": "organizations_invited_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "paid_account",
											"orig": "paid_account",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "saved_search",
											"orig": "saved_search",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "token",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members/{idMember}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash, fullName, initials, username",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "displayName",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_field",
										"enterprise_id",
										"field",
										"id",
										"organization_field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/members",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"members",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/member",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"member",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"notification_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/members",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/boards/{id}/members/{idMember}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/members/{idMember}",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/members/{idMember}/all",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id_member}",
									"all",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id_member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "all",
									"exist": []any{
										"id_member",
										"organization_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"members",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "avatar_source",
											"orig": "avatar_source",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "bio",
											"orig": "bio",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "full_name",
											"orig": "full_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "initial",
											"orig": "initial",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/color_blind",
											"orig": "prefs/color_blind",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/locale",
											"orig": "prefs/locale",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/minutes_between_summary",
											"orig": "prefs/minutes_between_summary",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "username",
											"orig": "username",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/members/{idMember}/deactivated",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
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
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"members",
									"{id_member}",
									"deactivated",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idMember": "id_member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash, fullName, initials, username",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "displayName",
										},
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "deactivated",
									"exist": []any{
										"board_field",
										"enterprise_id",
										"field",
										"id_member",
										"organization_field",
										"value",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/members/{idMember}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "allow_billable_guest",
											"orig": "allow_billable_guest",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/enterprises/{id}/members/{idMember}/licensed",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
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
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"members",
									"{id_member}",
									"licensed",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idMember": "id_member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "licensed",
									"exist": []any{
										"enterprise_id",
										"id_member",
										"value",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}/members/{idMember}",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
										"type",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/organizations/{id}/members/{idMember}/deactivated",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"members",
									"{id_member}",
									"deactivated",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMember": "id_member",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_member",
											"orig": "id_member",
											"type": "`$ANY`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.card",
						},
						[]any{
							"$.main.kit.entity.enterprise",
						},
						[]any{
							"$.main.kit.entity.notification",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
						[]any{
							"$.main.kit.entity.token",
						},
						[]any{
							"$.main.kit.entity.enterprise",
						},
						[]any{
							"$.main.kit.entity.organization",
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
								"kind": "http",
								"method": "GET",
								"orig": "/plugins/{id}/compliance/memberPrivacy",
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
								"parts": []any{
									"plugins",
									"{plugin_id}",
									"compliance",
									"memberPrivacy",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "plugin_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "plugin_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"plugin_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.plugin",
						},
					},
				},
			},
			"members_voted": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/membersVoted",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"membersVoted",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/membersVoted/{idMember}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"membersVoted",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idMember": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_member",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"membership": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "admin",
						"title": "Admin",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "collaborator",
						"title": "Collaborator",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "deactivated",
						"title": "Deactivated",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "licensed",
						"title": "Licensed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "managed",
						"title": "Managed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "member",
						"title": "Member",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/members/query",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "members",
									},
									map[string]any{
										"lit": "query",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"members",
									"query",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "admin",
											"orig": "admin",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "collaborator",
											"orig": "collaborator",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "cursor",
											"orig": "cursor",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "deactivated",
											"orig": "deactivated",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "licensed",
											"orig": "licensed",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "managed",
											"orig": "managed",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": "none",
										},
										map[string]any{
											"name": "search",
											"orig": "search",
											"type": "`$STRING`",
											"kind": "query",
											"example": "none",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
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
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/memberships",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"memberships",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"member",
										"organization_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/memberships",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"memberships",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "activity",
											"orig": "activity",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "fullname,username",
										},
										map[string]any{
											"name": "org_member_type",
											"orig": "org_member_type",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/memberships/{idMembership}",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"memberships",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idMembership": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_membership",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member",
										"organization_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/memberships/{idMembership}",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"memberships",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
										"idMembership": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_membership",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "fullName, username",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
						[]any{
							"$.main.kit.entity.enterprise",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"new_billable_guest": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/newBillableGuests/{idBoard}",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"newBillableGuests",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idBoard": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_board",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"notification": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "board",
						"title": "Board",
						"type": "`$OBJECT`",
						"req": true,
					},
					map[string]any{
						"name": "card",
						"title": "Card",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "dateRead",
						"title": "Date Read",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idAction",
						"title": "Id Action",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMemberCreator",
						"title": "Id Member Creator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "reactions",
						"title": "Reactions",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "unread",
						"title": "Unread",
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
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notifications",
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
								"parts": []any{
									"members",
									"{member_id}",
									"notifications",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "before",
											"orig": "before",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "50",
										},
										map[string]any{
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "0",
										},
										map[string]any{
											"name": "read_filter",
											"orig": "read_filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "since",
											"orig": "since",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"notifications",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "board",
											"orig": "board",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "card",
											"orig": "card",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name",
										},
										map[string]any{
											"name": "display",
											"orig": "display",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "entity",
											"orig": "entity",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "list",
											"orig": "list",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator",
											"orig": "member_creator",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member_creator_field",
											"orig": "member_creator_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username",
										},
										map[string]any{
											"name": "organization",
											"orig": "organization",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "displayName",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"notifications",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"notifications",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "unread",
											"orig": "unread",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"unread",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"notifications",
									"{id}",
									"unread",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "unread",
									"exist": []any{
										"id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"notification_channel_setting": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "blockedKeys",
						"title": "Blocked Keys",
						"type": "`$ARRAY`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Singular key or array of notification keys",
					},
					map[string]any{
						"name": "channel",
						"title": "Channel",
						"type": "`$STRING`",
						"op": map[string]any{
							"update": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"title": "Id Member",
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
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notificationsChannelSettings",
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
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
									"{channel}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "email",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"member_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}",
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
								"parts": []any{
									"members",
									"{id}",
									"notificationsChannelSettings",
									"{channel}",
									"{blocked_key}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"blockedKeys": "blocked_key",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "blocked_key",
											"orig": "blocked_key",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "notification_comment_card",
										},
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "email",
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"blocked_key",
										"channel",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings/{channel}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
									"{channel}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "channel",
											"orig": "channel",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "email",
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"channel",
										"member_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/notificationsChannelSettings",
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
								"parts": []any{
									"members",
									"{member_id}",
									"notificationsChannelSettings",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"notification_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"parts": []any{
									"notifications",
									"{id}",
									"list",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
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
						"title": "Id",
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
								"parts": []any{
									"notifications",
									"{id}",
									"memberCreator",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"option": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/customFields/{id}/options/{idCustomFieldOption}",
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
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
										"idCustomFieldOption": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_field_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_custom_field_option",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/customFields/{id}/options",
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
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_field_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/customFields/{id}/options/{idCustomFieldOption}",
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
								"parts": []any{
									"customFields",
									"{custom_field_id}",
									"options",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "custom_field_id",
										"idCustomFieldOption": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "custom_field_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_custom_field_option",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"custom_field_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.custom_field",
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
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/prefs/orgInviteRestrict",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"prefs",
									"orgInviteRestrict",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dateLastActivity",
						"title": "Date Last Activity",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoards",
						"title": "Id Boards",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "idEnterprise",
						"title": "Id Enterprise",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memberships",
						"title": "Memberships",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offering",
						"title": "Offering",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "prefs",
						"title": "Prefs",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "premiumFeatures",
						"title": "Premium Features",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "url",
						"title": "Url",
						"type": "`$STRING`",
						"format": "url",
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
								"kind": "http",
								"method": "POST",
								"orig": "/organizations",
								"segments": []any{
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"organizations",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "website",
											"orig": "website",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
									"logo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "file",
											"orig": "file",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "logo",
									"exist": []any{
										"file",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
									"tags",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "tag",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/organizations",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "organizations",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"organizations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "count",
											"orig": "count",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "start_index",
											"orig": "start_index",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"count",
										"enterprise_id",
										"field",
										"filter",
										"start_index",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/organizations",
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
								"parts": []any{
									"members",
									"{member_id}",
									"organizations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "paid_account",
											"orig": "paid_account",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/organization",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"organization",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/organizationsInvited",
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
								"parts": []any{
									"members",
									"{member_id}",
									"organizationsInvited",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/notifications/{id}/organization",
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
								"parts": []any{
									"notifications",
									"{notification_id}",
									"organization",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "notification_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "notification_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"notification_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/enterprises/{id}/organizations/{idOrg}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "organizations",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"organizations",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idOrg": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_org",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
									"logo",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"$action": "logo",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "desc",
											"orig": "desc",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "display_name",
											"orig": "display_name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/associated_domain",
											"orig": "prefs/associated_domain",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/board_visibility_restrict/org",
											"orig": "prefs/board_visibility_restrict/org",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/board_visibility_restrict/private",
											"orig": "prefs/board_visibility_restrict/private",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/board_visibility_restrict/public",
											"orig": "prefs/board_visibility_restrict/public",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/external_members_disabled",
											"orig": "prefs/external_members_disabled",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/google_apps_version",
											"orig": "prefs/google_apps_version",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/org_invite_restrict",
											"orig": "prefs/org_invite_restrict",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "prefs/permission_level",
											"orig": "prefs/permission_level",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "website",
											"orig": "website",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
							map[string]any{
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
								"parts": []any{
									"organizations",
									"{id}",
									"members",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "email",
											"orig": "email",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "full_name",
											"orig": "full_name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "normal",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
						[]any{
							"$.main.kit.entity.enterprise",
						},
						[]any{
							"$.main.kit.entity.member",
						},
						[]any{
							"$.main.kit.entity.notification",
						},
					},
				},
			},
			"pending_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "displayName",
						"title": "Display Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"title": "Id Member",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "logoUrl",
						"title": "Logo Url",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "memberRequestor",
						"title": "Member Requestor",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "membershipCount",
						"title": "Membership Count",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "transferability",
						"title": "Transferability",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/pendingOrganizations",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
									},
									map[string]any{
										"lit": "pendingOrganizations",
									},
								},
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"pendingOrganizations",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "active_since",
											"orig": "active_since",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "inactive_since",
											"orig": "inactive_since",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"active_since",
										"enterprise_id",
										"inactive_since",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enterprise",
						},
					},
				},
			},
			"plugin": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/boardPlugins",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"boardPlugins",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/plugins",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"plugins",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
											"example": "enabled",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"filter",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"plugins",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"plugins",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
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
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/pluginData",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"pluginData",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/pluginData",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"pluginData",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"plugin_listing": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "The description to show for the given locale",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "locale",
						"title": "Locale",
						"type": "`$STRING`",
						"short": "The locale that this listing should be displayed for.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name to use for the given locale.",
					},
					map[string]any{
						"name": "overview",
						"title": "Overview",
						"type": "`$STRING`",
						"short": "The overview to show for the given locale.",
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
								"kind": "http",
								"method": "POST",
								"orig": "/plugins/{idPlugin}/listing",
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
								"parts": []any{
									"plugins",
									"{id_plugin}",
									"listing",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idPlugin": "id_plugin",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_plugin",
											"orig": "id_plugin",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id_plugin",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/plugins/{idPlugin}/listings/{idListing}",
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
								"parts": []any{
									"plugins",
									"{id_plugin}",
									"listings",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idListing": "id",
										"idPlugin": "id_plugin",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_listing",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_plugin",
											"orig": "id_plugin",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_plugin",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.plugin",
						},
					},
				},
			},
			"reaction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactions/{id}",
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
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "emoji",
											"orig": "emoji",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{idAction}/reactions",
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
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "emoji",
											"orig": "emoji",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
										map[string]any{
											"name": "member",
											"orig": "member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"emoji",
										"id_action",
										"member",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/actions/{idAction}/reactions/{id}",
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
								"parts": []any{
									"actions",
									"{id_action}",
									"reactions",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idAction": "id_action",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id_action",
											"orig": "id_action",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"id_action",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
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
								"parts": []any{
									"notifications",
									"all",
									"read",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "ids",
											"orig": "ids",
											"type": "`$ARRAY`",
											"kind": "query",
										},
										map[string]any{
											"name": "read",
											"orig": "read",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"ids",
										"read",
									},
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
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "query",
						"title": "Query",
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
								"kind": "http",
								"method": "POST",
								"orig": "/members/{id}/savedSearches",
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
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$ANY`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/savedSearches",
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
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/savedSearches/{idSearch}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_search",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/members/{id}/savedSearches/{idSearch}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_search",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"member_id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/members/{id}/savedSearches/{idSearch}",
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
								"parts": []any{
									"members",
									"{member_id}",
									"savedSearches",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
										"idSearch": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.pos`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_search",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
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
								"kind": "http",
								"method": "GET",
								"orig": "/search",
								"segments": []any{
									map[string]any{
										"lit": "search",
									},
								},
								"parts": []any{
									"search",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "board_field",
											"orig": "board_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,idOrganization",
										},
										map[string]any{
											"name": "board_organization",
											"orig": "board_organization",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "boards_limit",
											"orig": "boards_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "card_attachment",
											"orig": "card_attachment",
											"type": "`$STRING`",
											"kind": "query",
											"example": "false",
										},
										map[string]any{
											"name": "card_board",
											"orig": "card_board",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "card_list",
											"orig": "card_list",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "card_member",
											"orig": "card_member",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "card_sticker",
											"orig": "card_sticker",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "cards_limit",
											"orig": "cards_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
										map[string]any{
											"name": "cards_page",
											"orig": "cards_page",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "id_board",
											"orig": "id_board",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_card",
											"orig": "id_card",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_organization",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "member_field",
											"orig": "member_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "avatarHash,fullName,initials,username,confirmed",
										},
										map[string]any{
											"name": "members_limit",
											"orig": "members_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "10",
										},
										map[string]any{
											"name": "model_type",
											"orig": "model_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "organization_field",
											"orig": "organization_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "name,displayName",
										},
										map[string]any{
											"name": "organizations_limit",
											"orig": "organizations_limit",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": "10",
										},
										map[string]any{
											"name": "partial",
											"orig": "partial",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "query",
											"orig": "query",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebar",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebar",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarActivity",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarActivity",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarBoardActions",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarBoardActions",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
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
								"kind": "http",
								"method": "PUT",
								"orig": "/boards/{id}/myPrefs/showSidebarMembers",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"myPrefs",
									"showSidebarMembers",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "value",
											"orig": "value",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"value",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"sticker": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/stickers/{idSticker}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_sticker",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/cards/{id}/stickers",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"field",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/cards/{id}/stickers/{idSticker}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_sticker",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"card_id",
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/cards/{id}/stickers/{idSticker}",
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
								"parts": []any{
									"cards",
									"{card_id}",
									"stickers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "card_id",
										"idSticker": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "card_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_sticker",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "left",
											"orig": "left",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "rotate",
											"orig": "rotate",
											"type": "`$NUMBER`",
											"kind": "query",
											"example": 0,
										},
										map[string]any{
											"name": "top",
											"orig": "top",
											"type": "`$NUMBER`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "z_index",
											"orig": "z_index",
											"type": "`$INTEGER`",
											"kind": "query",
											"reqd": true,
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.card",
						},
					},
				},
			},
			"tag": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
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
								"kind": "http",
								"method": "GET",
								"orig": "/organizations/{id}/tags",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"tags",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"organization_id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/organizations/{id}/tags/{idTag}",
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
								"parts": []any{
									"organizations",
									"{organization_id}",
									"tags",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "organization_id",
										"idTag": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_tag",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "organization_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"organization_id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.organization",
						},
					},
				},
			},
			"token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "dateCreated",
						"title": "Date Created",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "dateExpires",
						"title": "Date Expires",
						"type": "`$STRING`",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idMember",
						"title": "Id Member",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"title": "Identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "permissions",
						"title": "Permissions",
						"type": "`$ARRAY`",
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
								"kind": "http",
								"method": "GET",
								"orig": "/members/{id}/tokens",
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
								"parts": []any{
									"members",
									"{member_id}",
									"tokens",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "member_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "member_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "webhook",
											"orig": "webhook",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"member_id",
										"webhook",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}",
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "webhook",
											"orig": "webhook",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
										"webhook",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/tokens/{token}/",
								"segments": []any{
									map[string]any{
										"lit": "tokens",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"tokens",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.member",
						},
					},
				},
			},
			"transferrable_organization": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "newBillableMembers",
						"title": "New Billable Members",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "restrictedMembers",
						"title": "Restricted Members",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "transferrable",
						"title": "Transferrable",
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
								"kind": "http",
								"method": "GET",
								"orig": "/enterprises/{id}/transferrable/organization/{idOrganization}",
								"segments": []any{
									map[string]any{
										"lit": "enterprises",
									},
									map[string]any{
										"var": "enterprise_id",
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
								"parts": []any{
									"enterprises",
									"{enterprise_id}",
									"transferrable",
									"organization",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "enterprise_id",
										"idOrganization": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "enterprise_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "id",
											"orig": "id_organization",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enterprise_id",
										"id",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enterprise",
						},
					},
				},
			},
			"trello_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "attachments",
						"title": "Attachments",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "closed",
						"title": "Closed",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idBoard",
						"title": "Id Board",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "limits",
						"title": "Limits",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "The name of the list",
					},
					map[string]any{
						"name": "pos",
						"title": "Pos",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "softLimit",
						"title": "Soft Limit",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed",
						"title": "Subscribed",
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
								"kind": "http",
								"method": "POST",
								"orig": "/boards/{id}/lists",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.limits`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "pos",
											"orig": "pos",
											"type": "`$STRING`",
											"kind": "query",
											"example": "top",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"board_id",
										"name",
										"pos",
									},
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/boards/{id}/lists",
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
								"parts": []any{
									"boards",
									"{board_id}",
									"lists",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "board_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "board_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "card",
											"orig": "card",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "card_field",
											"orig": "card_field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
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
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/actions/{id}/list",
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
								"parts": []any{
									"actions",
									"{action_id}",
									"list",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "action_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.limits`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "action_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"action_id",
										"field",
									},
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.action",
						},
						[]any{
							"$.main.kit.entity.board",
						},
					},
				},
			},
			"webhook": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "active",
						"title": "Active",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "callbackURL",
						"title": "Callback Url",
						"type": "`$STRING`",
						"format": "url",
					},
					map[string]any{
						"name": "consecutiveFailures",
						"title": "Consecutive Failures",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "firstConsecutiveFailDate",
						"title": "First Consecutive Fail Date",
						"type": "`$STRING`",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "idModel",
						"title": "Id Model",
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
								"kind": "http",
								"method": "POST",
								"orig": "/webhooks/",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
								},
								"parts": []any{
									"webhooks",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/tokens/{token}/webhooks",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
										},
										map[string]any{
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}/webhooks",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"token_id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks",
									"{id}",
									"{field}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "field",
											"orig": "field",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"field",
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_webhook",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_webhook",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"token_id",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
									},
									"query": []any{
										map[string]any{
											"name": "active",
											"orig": "active",
											"type": "`$BOOLEAN`",
											"kind": "query",
										},
										map[string]any{
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/tokens/{token}/webhooks/{idWebhook}",
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
								"parts": []any{
									"tokens",
									"{token_id}",
									"webhooks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"idWebhook": "id",
										"token": "token_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id_webhook",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "5abbe4b7ddc1b351ef961414",
										},
										map[string]any{
											"name": "token_id",
											"orig": "token",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "callback_url",
											"orig": "callback_url",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "description",
											"orig": "description",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "id_model",
											"orig": "id_model",
											"type": "`$STRING`",
											"kind": "query",
											"example": "5abbe4b7ddc1b351ef961414",
										},
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
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.token",
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
