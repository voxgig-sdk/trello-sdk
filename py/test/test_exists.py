# Trello SDK exists test

import pytest
from trello_sdk import TrelloSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = TrelloSDK.test(None, None)
        assert testsdk is not None
