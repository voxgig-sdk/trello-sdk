package voxgigtrellosdk

import (
	"github.com/voxgig-sdk/trello-sdk/go/core"
	"github.com/voxgig-sdk/trello-sdk/go/entity"
	"github.com/voxgig-sdk/trello-sdk/go/feature"
	_ "github.com/voxgig-sdk/trello-sdk/go/utility"
)

// Type aliases preserve external API.
type TrelloSDK = core.TrelloSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type TrelloEntity = core.TrelloEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type TrelloError = core.TrelloError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewBoardEntityFunc = func(client *core.TrelloSDK, entopts map[string]any) core.TrelloEntity {
		return entity.NewBoardEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewTrelloSDK = core.NewTrelloSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewTrelloSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *TrelloSDK  { return NewTrelloSDK(nil) }
func Test() *TrelloSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
