# Trello SDK feature factory

from trello_sdk.feature.base_feature import TrelloBaseFeature
from trello_sdk.feature.debug_feature import TrelloDebugFeature
from trello_sdk.feature.idempotency_feature import TrelloIdempotencyFeature
from trello_sdk.feature.metrics_feature import TrelloMetricsFeature
from trello_sdk.feature.paging_feature import TrelloPagingFeature
from trello_sdk.feature.ratelimit_feature import TrelloRatelimitFeature
from trello_sdk.feature.retry_feature import TrelloRetryFeature
from trello_sdk.feature.test_feature import TrelloTestFeature
from trello_sdk.feature.timeout_feature import TrelloTimeoutFeature


_FEATURES = {
    "base": lambda: TrelloBaseFeature(),
    "debug": lambda: TrelloDebugFeature(),
    "idempotency": lambda: TrelloIdempotencyFeature(),
    "metrics": lambda: TrelloMetricsFeature(),
    "paging": lambda: TrelloPagingFeature(),
    "ratelimit": lambda: TrelloRatelimitFeature(),
    "retry": lambda: TrelloRetryFeature(),
    "test": lambda: TrelloTestFeature(),
    "timeout": lambda: TrelloTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
