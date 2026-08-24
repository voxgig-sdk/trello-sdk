# Trello SDK utility: make_context

from projectname_sdk.core.context import TrelloContext


def make_context_util(ctxmap, basectx):
    return TrelloContext(ctxmap, basectx)
