package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewBoardEntityFunc func(client *TrelloSDK, entopts map[string]any) TrelloEntity

