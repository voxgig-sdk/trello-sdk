# Trello SDK

from trello_sdk.utility.voxgig_struct import voxgig_struct as vs
from trello_sdk.core.utility_type import TrelloUtility
from trello_sdk.core.spec import TrelloSpec
from trello_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from trello_sdk.utility import register

# Load features
from trello_sdk.feature.base_feature import TrelloBaseFeature
from trello_sdk.features import _has_feature, _make_feature


class TrelloSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = TrelloUtility()
        self._utility = utility

        from trello_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return TrelloUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = TrelloSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "TrelloSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("TrelloSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def Action(self, data=None) -> "ActionEntity":
        """Entity factory: client.Action().list() / client.Action().load({"id": ...})."""
        from trello_sdk.entity.action_entity import ActionEntity
        return ActionEntity(self, data)


    def ActionReactionsSummary(self, data=None) -> "ActionReactionsSummaryEntity":
        """Entity factory: client.ActionReactionsSummary().list() / client.ActionReactionsSummary().load({"id": ...})."""
        from trello_sdk.entity.action_reactions_summary_entity import ActionReactionsSummaryEntity
        return ActionReactionsSummaryEntity(self, data)


    def Admin(self, data=None) -> "AdminEntity":
        """Entity factory: client.Admin().list() / client.Admin().load({"id": ...})."""
        from trello_sdk.entity.admin_entity import AdminEntity
        return AdminEntity(self, data)


    def Application(self, data=None) -> "ApplicationEntity":
        """Entity factory: client.Application().list() / client.Application().load({"id": ...})."""
        from trello_sdk.entity.application_entity import ApplicationEntity
        return ApplicationEntity(self, data)


    def ApplicationCompliance(self, data=None) -> "ApplicationComplianceEntity":
        """Entity factory: client.ApplicationCompliance().list() / client.ApplicationCompliance().load({"id": ...})."""
        from trello_sdk.entity.application_compliance_entity import ApplicationComplianceEntity
        return ApplicationComplianceEntity(self, data)


    def AssociatedDomain(self, data=None) -> "AssociatedDomainEntity":
        """Entity factory: client.AssociatedDomain().list() / client.AssociatedDomain().load({"id": ...})."""
        from trello_sdk.entity.associated_domain_entity import AssociatedDomainEntity
        return AssociatedDomainEntity(self, data)


    def Attachment(self, data=None) -> "AttachmentEntity":
        """Entity factory: client.Attachment().list() / client.Attachment().load({"id": ...})."""
        from trello_sdk.entity.attachment_entity import AttachmentEntity
        return AttachmentEntity(self, data)


    def Batch(self, data=None) -> "BatchEntity":
        """Entity factory: client.Batch().list() / client.Batch().load({"id": ...})."""
        from trello_sdk.entity.batch_entity import BatchEntity
        return BatchEntity(self, data)


    def Board(self, data=None) -> "BoardEntity":
        """Entity factory: client.Board().list() / client.Board().load({"id": ...})."""
        from trello_sdk.entity.board_entity import BoardEntity
        return BoardEntity(self, data)


    def BoardBackground(self, data=None) -> "BoardBackgroundEntity":
        """Entity factory: client.BoardBackground().list() / client.BoardBackground().load({"id": ...})."""
        from trello_sdk.entity.board_background_entity import BoardBackgroundEntity
        return BoardBackgroundEntity(self, data)


    def BoardPlugin(self, data=None) -> "BoardPluginEntity":
        """Entity factory: client.BoardPlugin().list() / client.BoardPlugin().load({"id": ...})."""
        from trello_sdk.entity.board_plugin_entity import BoardPluginEntity
        return BoardPluginEntity(self, data)


    def BoardStar(self, data=None) -> "BoardStarEntity":
        """Entity factory: client.BoardStar().list() / client.BoardStar().load({"id": ...})."""
        from trello_sdk.entity.board_star_entity import BoardStarEntity
        return BoardStarEntity(self, data)


    def Bulk(self, data=None) -> "BulkEntity":
        """Entity factory: client.Bulk().list() / client.Bulk().load({"id": ...})."""
        from trello_sdk.entity.bulk_entity import BulkEntity
        return BulkEntity(self, data)


    def Card(self, data=None) -> "CardEntity":
        """Entity factory: client.Card().list() / client.Card().load({"id": ...})."""
        from trello_sdk.entity.card_entity import CardEntity
        return CardEntity(self, data)


    def CardCheckItemState(self, data=None) -> "CardCheckItemStateEntity":
        """Entity factory: client.CardCheckItemState().list() / client.CardCheckItemState().load({"id": ...})."""
        from trello_sdk.entity.card_check_item_state_entity import CardCheckItemStateEntity
        return CardCheckItemStateEntity(self, data)


    def CardList(self, data=None) -> "CardListEntity":
        """Entity factory: client.CardList().list() / client.CardList().load({"id": ...})."""
        from trello_sdk.entity.card_list_entity import CardListEntity
        return CardListEntity(self, data)


    def CheckItem(self, data=None) -> "CheckItemEntity":
        """Entity factory: client.CheckItem().list() / client.CheckItem().load({"id": ...})."""
        from trello_sdk.entity.check_item_entity import CheckItemEntity
        return CheckItemEntity(self, data)


    def Checklist(self, data=None) -> "ChecklistEntity":
        """Entity factory: client.Checklist().list() / client.Checklist().load({"id": ...})."""
        from trello_sdk.entity.checklist_entity import ChecklistEntity
        return ChecklistEntity(self, data)


    def ClaimableOrganization(self, data=None) -> "ClaimableOrganizationEntity":
        """Entity factory: client.ClaimableOrganization().list() / client.ClaimableOrganization().load({"id": ...})."""
        from trello_sdk.entity.claimable_organization_entity import ClaimableOrganizationEntity
        return ClaimableOrganizationEntity(self, data)


    def CustomBoardBackground(self, data=None) -> "CustomBoardBackgroundEntity":
        """Entity factory: client.CustomBoardBackground().list() / client.CustomBoardBackground().load({"id": ...})."""
        from trello_sdk.entity.custom_board_background_entity import CustomBoardBackgroundEntity
        return CustomBoardBackgroundEntity(self, data)


    def CustomEmoji(self, data=None) -> "CustomEmojiEntity":
        """Entity factory: client.CustomEmoji().list() / client.CustomEmoji().load({"id": ...})."""
        from trello_sdk.entity.custom_emoji_entity import CustomEmojiEntity
        return CustomEmojiEntity(self, data)


    def CustomField(self, data=None) -> "CustomFieldEntity":
        """Entity factory: client.CustomField().list() / client.CustomField().load({"id": ...})."""
        from trello_sdk.entity.custom_field_entity import CustomFieldEntity
        return CustomFieldEntity(self, data)


    def CustomFieldItem(self, data=None) -> "CustomFieldItemEntity":
        """Entity factory: client.CustomFieldItem().list() / client.CustomFieldItem().load({"id": ...})."""
        from trello_sdk.entity.custom_field_item_entity import CustomFieldItemEntity
        return CustomFieldItemEntity(self, data)


    def CustomSticker(self, data=None) -> "CustomStickerEntity":
        """Entity factory: client.CustomSticker().list() / client.CustomSticker().load({"id": ...})."""
        from trello_sdk.entity.custom_sticker_entity import CustomStickerEntity
        return CustomStickerEntity(self, data)


    def EmailPosition(self, data=None) -> "EmailPositionEntity":
        """Entity factory: client.EmailPosition().list() / client.EmailPosition().load({"id": ...})."""
        from trello_sdk.entity.email_position_entity import EmailPositionEntity
        return EmailPositionEntity(self, data)


    def Emoji(self, data=None) -> "EmojiEntity":
        """Entity factory: client.Emoji().list() / client.Emoji().load({"id": ...})."""
        from trello_sdk.entity.emoji_entity import EmojiEntity
        return EmojiEntity(self, data)


    def Enterpris(self, data=None) -> "EnterprisEntity":
        """Entity factory: client.Enterpris().list() / client.Enterpris().load({"id": ...})."""
        from trello_sdk.entity.enterpris_entity import EnterprisEntity
        return EnterprisEntity(self, data)


    def EnterprisSignupUrl(self, data=None) -> "EnterprisSignupUrlEntity":
        """Entity factory: client.EnterprisSignupUrl().list() / client.EnterprisSignupUrl().load({"id": ...})."""
        from trello_sdk.entity.enterpris_signup_url_entity import EnterprisSignupUrlEntity
        return EnterprisSignupUrlEntity(self, data)


    def EnterpriseAdmin(self, data=None) -> "EnterpriseAdminEntity":
        """Entity factory: client.EnterpriseAdmin().list() / client.EnterpriseAdmin().load({"id": ...})."""
        from trello_sdk.entity.enterprise_admin_entity import EnterpriseAdminEntity
        return EnterpriseAdminEntity(self, data)


    def EnterpriseAuditLog(self, data=None) -> "EnterpriseAuditLogEntity":
        """Entity factory: client.EnterpriseAuditLog().list() / client.EnterpriseAuditLog().load({"id": ...})."""
        from trello_sdk.entity.enterprise_audit_log_entity import EnterpriseAuditLogEntity
        return EnterpriseAuditLogEntity(self, data)


    def Export(self, data=None) -> "ExportEntity":
        """Entity factory: client.Export().list() / client.Export().load({"id": ...})."""
        from trello_sdk.entity.export_entity import ExportEntity
        return ExportEntity(self, data)


    def ExportDownload(self, data=None) -> "ExportDownloadEntity":
        """Entity factory: client.ExportDownload().list() / client.ExportDownload().load({"id": ...})."""
        from trello_sdk.entity.export_download_entity import ExportDownloadEntity
        return ExportDownloadEntity(self, data)


    def Generate(self, data=None) -> "GenerateEntity":
        """Entity factory: client.Generate().list() / client.Generate().load({"id": ...})."""
        from trello_sdk.entity.generate_entity import GenerateEntity
        return GenerateEntity(self, data)


    def IdEmailList(self, data=None) -> "IdEmailListEntity":
        """Entity factory: client.IdEmailList().list() / client.IdEmailList().load({"id": ...})."""
        from trello_sdk.entity.id_email_list_entity import IdEmailListEntity
        return IdEmailListEntity(self, data)


    def IdLabel(self, data=None) -> "IdLabelEntity":
        """Entity factory: client.IdLabel().list() / client.IdLabel().load({"id": ...})."""
        from trello_sdk.entity.id_label_entity import IdLabelEntity
        return IdLabelEntity(self, data)


    def IdMember(self, data=None) -> "IdMemberEntity":
        """Entity factory: client.IdMember().list() / client.IdMember().load({"id": ...})."""
        from trello_sdk.entity.id_member_entity import IdMemberEntity
        return IdMemberEntity(self, data)


    def Label(self, data=None) -> "LabelEntity":
        """Entity factory: client.Label().list() / client.Label().load({"id": ...})."""
        from trello_sdk.entity.label_entity import LabelEntity
        return LabelEntity(self, data)


    def List(self, data=None) -> "ListEntity":
        """Entity factory: client.List().list() / client.List().load({"id": ...})."""
        from trello_sdk.entity.list_entity import ListEntity
        return ListEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from trello_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def MemberPrivacy(self, data=None) -> "MemberPrivacyEntity":
        """Entity factory: client.MemberPrivacy().list() / client.MemberPrivacy().load({"id": ...})."""
        from trello_sdk.entity.member_privacy_entity import MemberPrivacyEntity
        return MemberPrivacyEntity(self, data)


    def MembersVoted(self, data=None) -> "MembersVotedEntity":
        """Entity factory: client.MembersVoted().list() / client.MembersVoted().load({"id": ...})."""
        from trello_sdk.entity.members_voted_entity import MembersVotedEntity
        return MembersVotedEntity(self, data)


    def Membership(self, data=None) -> "MembershipEntity":
        """Entity factory: client.Membership().list() / client.Membership().load({"id": ...})."""
        from trello_sdk.entity.membership_entity import MembershipEntity
        return MembershipEntity(self, data)


    def MostRecent(self, data=None) -> "MostRecentEntity":
        """Entity factory: client.MostRecent().list() / client.MostRecent().load({"id": ...})."""
        from trello_sdk.entity.most_recent_entity import MostRecentEntity
        return MostRecentEntity(self, data)


    def NewBillableGuest(self, data=None) -> "NewBillableGuestEntity":
        """Entity factory: client.NewBillableGuest().list() / client.NewBillableGuest().load({"id": ...})."""
        from trello_sdk.entity.new_billable_guest_entity import NewBillableGuestEntity
        return NewBillableGuestEntity(self, data)


    def Notification(self, data=None) -> "NotificationEntity":
        """Entity factory: client.Notification().list() / client.Notification().load({"id": ...})."""
        from trello_sdk.entity.notification_entity import NotificationEntity
        return NotificationEntity(self, data)


    def NotificationChannelSetting(self, data=None) -> "NotificationChannelSettingEntity":
        """Entity factory: client.NotificationChannelSetting().list() / client.NotificationChannelSetting().load({"id": ...})."""
        from trello_sdk.entity.notification_channel_setting_entity import NotificationChannelSettingEntity
        return NotificationChannelSettingEntity(self, data)


    def NotificationList(self, data=None) -> "NotificationListEntity":
        """Entity factory: client.NotificationList().list() / client.NotificationList().load({"id": ...})."""
        from trello_sdk.entity.notification_list_entity import NotificationListEntity
        return NotificationListEntity(self, data)


    def NotificationMemberCreator(self, data=None) -> "NotificationMemberCreatorEntity":
        """Entity factory: client.NotificationMemberCreator().list() / client.NotificationMemberCreator().load({"id": ...})."""
        from trello_sdk.entity.notification_member_creator_entity import NotificationMemberCreatorEntity
        return NotificationMemberCreatorEntity(self, data)


    def NotificationsChannelSetting(self, data=None) -> "NotificationsChannelSettingEntity":
        """Entity factory: client.NotificationsChannelSetting().list() / client.NotificationsChannelSetting().load({"id": ...})."""
        from trello_sdk.entity.notifications_channel_setting_entity import NotificationsChannelSettingEntity
        return NotificationsChannelSettingEntity(self, data)


    def Option(self, data=None) -> "OptionEntity":
        """Entity factory: client.Option().list() / client.Option().load({"id": ...})."""
        from trello_sdk.entity.option_entity import OptionEntity
        return OptionEntity(self, data)


    def OrgInviteRestrict(self, data=None) -> "OrgInviteRestrictEntity":
        """Entity factory: client.OrgInviteRestrict().list() / client.OrgInviteRestrict().load({"id": ...})."""
        from trello_sdk.entity.org_invite_restrict_entity import OrgInviteRestrictEntity
        return OrgInviteRestrictEntity(self, data)


    def Organization(self, data=None) -> "OrganizationEntity":
        """Entity factory: client.Organization().list() / client.Organization().load({"id": ...})."""
        from trello_sdk.entity.organization_entity import OrganizationEntity
        return OrganizationEntity(self, data)


    def PendingOrganization(self, data=None) -> "PendingOrganizationEntity":
        """Entity factory: client.PendingOrganization().list() / client.PendingOrganization().load({"id": ...})."""
        from trello_sdk.entity.pending_organization_entity import PendingOrganizationEntity
        return PendingOrganizationEntity(self, data)


    def Plugin(self, data=None) -> "PluginEntity":
        """Entity factory: client.Plugin().list() / client.Plugin().load({"id": ...})."""
        from trello_sdk.entity.plugin_entity import PluginEntity
        return PluginEntity(self, data)


    def PluginData(self, data=None) -> "PluginDataEntity":
        """Entity factory: client.PluginData().list() / client.PluginData().load({"id": ...})."""
        from trello_sdk.entity.plugin_data_entity import PluginDataEntity
        return PluginDataEntity(self, data)


    def PluginListing(self, data=None) -> "PluginListingEntity":
        """Entity factory: client.PluginListing().list() / client.PluginListing().load({"id": ...})."""
        from trello_sdk.entity.plugin_listing_entity import PluginListingEntity
        return PluginListingEntity(self, data)


    def Reaction(self, data=None) -> "ReactionEntity":
        """Entity factory: client.Reaction().list() / client.Reaction().load({"id": ...})."""
        from trello_sdk.entity.reaction_entity import ReactionEntity
        return ReactionEntity(self, data)


    def Read(self, data=None) -> "ReadEntity":
        """Entity factory: client.Read().list() / client.Read().load({"id": ...})."""
        from trello_sdk.entity.read_entity import ReadEntity
        return ReadEntity(self, data)


    def SavedSearch(self, data=None) -> "SavedSearchEntity":
        """Entity factory: client.SavedSearch().list() / client.SavedSearch().load({"id": ...})."""
        from trello_sdk.entity.saved_search_entity import SavedSearchEntity
        return SavedSearchEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from trello_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def ShowSidebar(self, data=None) -> "ShowSidebarEntity":
        """Entity factory: client.ShowSidebar().list() / client.ShowSidebar().load({"id": ...})."""
        from trello_sdk.entity.show_sidebar_entity import ShowSidebarEntity
        return ShowSidebarEntity(self, data)


    def ShowSidebarActivity(self, data=None) -> "ShowSidebarActivityEntity":
        """Entity factory: client.ShowSidebarActivity().list() / client.ShowSidebarActivity().load({"id": ...})."""
        from trello_sdk.entity.show_sidebar_activity_entity import ShowSidebarActivityEntity
        return ShowSidebarActivityEntity(self, data)


    def ShowSidebarBoardAction(self, data=None) -> "ShowSidebarBoardActionEntity":
        """Entity factory: client.ShowSidebarBoardAction().list() / client.ShowSidebarBoardAction().load({"id": ...})."""
        from trello_sdk.entity.show_sidebar_board_action_entity import ShowSidebarBoardActionEntity
        return ShowSidebarBoardActionEntity(self, data)


    def ShowSidebarMember(self, data=None) -> "ShowSidebarMemberEntity":
        """Entity factory: client.ShowSidebarMember().list() / client.ShowSidebarMember().load({"id": ...})."""
        from trello_sdk.entity.show_sidebar_member_entity import ShowSidebarMemberEntity
        return ShowSidebarMemberEntity(self, data)


    def Sticker(self, data=None) -> "StickerEntity":
        """Entity factory: client.Sticker().list() / client.Sticker().load({"id": ...})."""
        from trello_sdk.entity.sticker_entity import StickerEntity
        return StickerEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from trello_sdk.entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def Token(self, data=None) -> "TokenEntity":
        """Entity factory: client.Token().list() / client.Token().load({"id": ...})."""
        from trello_sdk.entity.token_entity import TokenEntity
        return TokenEntity(self, data)


    def TransferrableOrganization(self, data=None) -> "TransferrableOrganizationEntity":
        """Entity factory: client.TransferrableOrganization().list() / client.TransferrableOrganization().load({"id": ...})."""
        from trello_sdk.entity.transferrable_organization_entity import TransferrableOrganizationEntity
        return TransferrableOrganizationEntity(self, data)


    def TrelloList(self, data=None) -> "TrelloListEntity":
        """Entity factory: client.TrelloList().list() / client.TrelloList().load({"id": ...})."""
        from trello_sdk.entity.trello_list_entity import TrelloListEntity
        return TrelloListEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from trello_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "TrelloSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from trello_sdk.entity.action_entity import ActionEntity
    from trello_sdk.entity.action_reactions_summary_entity import ActionReactionsSummaryEntity
    from trello_sdk.entity.admin_entity import AdminEntity
    from trello_sdk.entity.application_entity import ApplicationEntity
    from trello_sdk.entity.application_compliance_entity import ApplicationComplianceEntity
    from trello_sdk.entity.associated_domain_entity import AssociatedDomainEntity
    from trello_sdk.entity.attachment_entity import AttachmentEntity
    from trello_sdk.entity.batch_entity import BatchEntity
    from trello_sdk.entity.board_entity import BoardEntity
    from trello_sdk.entity.board_background_entity import BoardBackgroundEntity
    from trello_sdk.entity.board_plugin_entity import BoardPluginEntity
    from trello_sdk.entity.board_star_entity import BoardStarEntity
    from trello_sdk.entity.bulk_entity import BulkEntity
    from trello_sdk.entity.card_entity import CardEntity
    from trello_sdk.entity.card_check_item_state_entity import CardCheckItemStateEntity
    from trello_sdk.entity.card_list_entity import CardListEntity
    from trello_sdk.entity.check_item_entity import CheckItemEntity
    from trello_sdk.entity.checklist_entity import ChecklistEntity
    from trello_sdk.entity.claimable_organization_entity import ClaimableOrganizationEntity
    from trello_sdk.entity.custom_board_background_entity import CustomBoardBackgroundEntity
    from trello_sdk.entity.custom_emoji_entity import CustomEmojiEntity
    from trello_sdk.entity.custom_field_entity import CustomFieldEntity
    from trello_sdk.entity.custom_field_item_entity import CustomFieldItemEntity
    from trello_sdk.entity.custom_sticker_entity import CustomStickerEntity
    from trello_sdk.entity.email_position_entity import EmailPositionEntity
    from trello_sdk.entity.emoji_entity import EmojiEntity
    from trello_sdk.entity.enterpris_entity import EnterprisEntity
    from trello_sdk.entity.enterpris_signup_url_entity import EnterprisSignupUrlEntity
    from trello_sdk.entity.enterprise_admin_entity import EnterpriseAdminEntity
    from trello_sdk.entity.enterprise_audit_log_entity import EnterpriseAuditLogEntity
    from trello_sdk.entity.export_entity import ExportEntity
    from trello_sdk.entity.export_download_entity import ExportDownloadEntity
    from trello_sdk.entity.generate_entity import GenerateEntity
    from trello_sdk.entity.id_email_list_entity import IdEmailListEntity
    from trello_sdk.entity.id_label_entity import IdLabelEntity
    from trello_sdk.entity.id_member_entity import IdMemberEntity
    from trello_sdk.entity.label_entity import LabelEntity
    from trello_sdk.entity.list_entity import ListEntity
    from trello_sdk.entity.member_entity import MemberEntity
    from trello_sdk.entity.member_privacy_entity import MemberPrivacyEntity
    from trello_sdk.entity.members_voted_entity import MembersVotedEntity
    from trello_sdk.entity.membership_entity import MembershipEntity
    from trello_sdk.entity.most_recent_entity import MostRecentEntity
    from trello_sdk.entity.new_billable_guest_entity import NewBillableGuestEntity
    from trello_sdk.entity.notification_entity import NotificationEntity
    from trello_sdk.entity.notification_channel_setting_entity import NotificationChannelSettingEntity
    from trello_sdk.entity.notification_list_entity import NotificationListEntity
    from trello_sdk.entity.notification_member_creator_entity import NotificationMemberCreatorEntity
    from trello_sdk.entity.notifications_channel_setting_entity import NotificationsChannelSettingEntity
    from trello_sdk.entity.option_entity import OptionEntity
    from trello_sdk.entity.org_invite_restrict_entity import OrgInviteRestrictEntity
    from trello_sdk.entity.organization_entity import OrganizationEntity
    from trello_sdk.entity.pending_organization_entity import PendingOrganizationEntity
    from trello_sdk.entity.plugin_entity import PluginEntity
    from trello_sdk.entity.plugin_data_entity import PluginDataEntity
    from trello_sdk.entity.plugin_listing_entity import PluginListingEntity
    from trello_sdk.entity.reaction_entity import ReactionEntity
    from trello_sdk.entity.read_entity import ReadEntity
    from trello_sdk.entity.saved_search_entity import SavedSearchEntity
    from trello_sdk.entity.search_entity import SearchEntity
    from trello_sdk.entity.show_sidebar_entity import ShowSidebarEntity
    from trello_sdk.entity.show_sidebar_activity_entity import ShowSidebarActivityEntity
    from trello_sdk.entity.show_sidebar_board_action_entity import ShowSidebarBoardActionEntity
    from trello_sdk.entity.show_sidebar_member_entity import ShowSidebarMemberEntity
    from trello_sdk.entity.sticker_entity import StickerEntity
    from trello_sdk.entity.tag_entity import TagEntity
    from trello_sdk.entity.token_entity import TokenEntity
    from trello_sdk.entity.transferrable_organization_entity import TransferrableOrganizationEntity
    from trello_sdk.entity.trello_list_entity import TrelloListEntity
    from trello_sdk.entity.webhook_entity import WebhookEntity
