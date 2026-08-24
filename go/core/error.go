package core

type TrelloError struct {
	IsTrelloError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewTrelloError(code string, msg string, ctx *Context) *TrelloError {
	return &TrelloError{
		IsTrelloError: true,
		Sdk:              "Trello",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *TrelloError) Error() string {
	return e.Msg
}
