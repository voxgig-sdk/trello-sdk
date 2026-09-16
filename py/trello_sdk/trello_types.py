# Typed models for the Trello SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Action(TypedDict, total=False):
    data: dict
    date: str
    display: dict
    id: str
    idMemberCreator: str
    limits: dict
    memberCreator: dict
    type: str


class ActionLoadMatchRequired(TypedDict):
    id: str


class ActionLoadMatch(ActionLoadMatchRequired, total=False):
    display: bool
    entity: bool
    field: str
    member: bool
    member_creator: bool
    member_creator_field: str
    member_field: str


class ActionListMatchRequired(TypedDict):
    card_id: str


class ActionListMatch(ActionListMatchRequired, total=False):
    filter: str
    page: float


class ActionCreateDataRequired(TypedDict):
    id_action: str


class ActionCreateData(ActionCreateDataRequired, total=False):
    data: dict
    date: str
    display: dict
    id: str
    idMemberCreator: str
    limits: dict
    memberCreator: dict
    type: str


class ActionUpdateDataRequired(TypedDict):
    id: str
    text: str


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    data: dict
    date: str
    display: dict
    idMemberCreator: str
    limits: dict
    memberCreator: dict
    type: str


class ActionRemoveMatch(TypedDict):
    id: str


class ActionReactionsSummary(TypedDict):
    pass


class ActionReactionsSummaryLoadMatch(TypedDict):
    id_action: str


class Admin(TypedDict, total=False):
    id: str


class AdminUpdateData(TypedDict):
    enterpris_id: str
    id: str


class AdminRemoveMatch(TypedDict):
    enterpris_id: str
    id: str


class Application(TypedDict):
    pass


class ApplicationCompliance(TypedDict):
    pass


class ApplicationComplianceLoadMatch(TypedDict):
    key: str


class AssociatedDomain(TypedDict):
    pass


class AssociatedDomainRemoveMatch(TypedDict):
    organization_id: str


class Attachment(TypedDict, total=False):
    id: str


class AttachmentLoadMatchRequired(TypedDict):
    card_id: str
    id: str


class AttachmentLoadMatch(AttachmentLoadMatchRequired, total=False):
    field: list


class AttachmentListMatchRequired(TypedDict):
    card_id: str


class AttachmentListMatch(AttachmentListMatchRequired, total=False):
    field: str
    filter: str


class AttachmentRemoveMatch(TypedDict):
    card_id: str
    id: str


class Batch(TypedDict):
    pass


class BatchLoadMatch(TypedDict):
    url: str


class BoardRequired(TypedDict):
    id: str


class Board(BoardRequired, total=False):
    closed: bool
    creationMethod: str
    dateLastActivity: str
    dateLastView: str
    datePluginDisable: str
    desc: str
    descData: str
    enterpriseOwned: bool
    idMemberCreator: str
    idOrganization: str
    idTags: str
    ixUpdate: int
    labelNames: dict
    limits: dict
    memberships: str
    name: str
    pinned: bool
    powerUps: str
    prefs: dict
    shortLink: str
    shortUrl: str
    starred: bool
    subscribed: bool
    templateGallery: str
    url: str


class BoardLoadMatchRequired(TypedDict):
    id: str


class BoardLoadMatch(BoardLoadMatchRequired, total=False):
    action: str
    board_star: str
    card: str
    card_plugin_data: bool
    checklist: str
    custom_field: bool
    field: str
    label: str
    list: str
    member: str
    membership: str
    my_pref: bool
    organization: bool
    organization_plugin_data: bool
    plugin_data: bool
    tag: bool


class BoardListMatchRequired(TypedDict):
    member_id: str


class BoardListMatch(BoardListMatchRequired, total=False):
    field: str
    filter: str
    list: str
    organization: bool
    organization_field: str


class BoardCreateDataRequired(TypedDict):
    name: str
    id: str


class BoardCreateData(BoardCreateDataRequired, total=False):
    default_label: bool
    default_list: bool
    desc: str
    id_board_source: str
    id_organization: str
    keep_from_source: str
    power_up: str
    prefs_background: str
    prefs_card_aging: str
    prefs_card_cover: bool
    prefs_comment: str
    prefs_invitation: str
    prefs_permission_level: str
    prefs_self_join: bool
    prefs_voting: str
    closed: bool
    creationMethod: str
    dateLastActivity: str
    dateLastView: str
    datePluginDisable: str
    descData: str
    enterpriseOwned: bool
    idMemberCreator: str
    idOrganization: str
    idTags: str
    ixUpdate: int
    labelNames: dict
    limits: dict
    memberships: str
    pinned: bool
    powerUps: str
    prefs: dict
    shortLink: str
    shortUrl: str
    starred: bool
    subscribed: bool
    templateGallery: str
    url: str


class BoardUpdateDataRequired(TypedDict):
    id: str


class BoardUpdateData(BoardUpdateDataRequired, total=False):
    closed: bool
    desc: str
    id_organization: str
    name: str
    subscribed: str
    creationMethod: str
    dateLastActivity: str
    dateLastView: str
    datePluginDisable: str
    descData: str
    enterpriseOwned: bool
    idMemberCreator: str
    idOrganization: str
    idTags: str
    ixUpdate: int
    labelNames: dict
    limits: dict
    memberships: str
    pinned: bool
    powerUps: str
    prefs: dict
    shortLink: str
    shortUrl: str
    starred: bool
    templateGallery: str
    url: str


class BoardRemoveMatch(TypedDict):
    id: str


class BoardBackground(TypedDict, total=False):
    id: str


class BoardBackgroundLoadMatchRequired(TypedDict):
    member_id: str


class BoardBackgroundLoadMatch(BoardBackgroundLoadMatchRequired, total=False):
    id: str
    field: str
    id_background: str


class BoardBackgroundListMatchRequired(TypedDict):
    member_id: str


class BoardBackgroundListMatch(BoardBackgroundListMatchRequired, total=False):
    filter: str


class BoardBackgroundCreateDataRequired(TypedDict):
    member_id: str
    file: str


class BoardBackgroundCreateData(BoardBackgroundCreateDataRequired, total=False):
    id: str


class BoardBackgroundUpdateDataRequired(TypedDict):
    member_id: str


class BoardBackgroundUpdateData(BoardBackgroundUpdateDataRequired, total=False):
    id: str
    brightness: str
    tile: bool
    id_background: str


class BoardBackgroundRemoveMatch(TypedDict):
    id: str
    member_id: str


class BoardPlugin(TypedDict, total=False):
    id: str


class BoardPluginRemoveMatch(TypedDict):
    board_id: str
    id: str


class BoardStar(TypedDict, total=False):
    id: str
    idBoard: str
    pos: int


class BoardStarLoadMatchRequired(TypedDict):
    member_id: str


class BoardStarLoadMatch(BoardStarLoadMatchRequired, total=False):
    id: str


class BoardStarListMatchRequired(TypedDict):
    id: str


class BoardStarListMatch(BoardStarListMatchRequired, total=False):
    filter: str


class BoardStarCreateDataRequired(TypedDict):
    member_id: str
    id_board: str
    pos: Any


class BoardStarCreateData(BoardStarCreateDataRequired, total=False):
    id: str
    idBoard: str


class BoardStarUpdateDataRequired(TypedDict):
    id: str
    member_id: str


class BoardStarUpdateData(BoardStarUpdateDataRequired, total=False):
    pos: Any
    idBoard: str


class BoardStarRemoveMatch(TypedDict):
    id: str
    member_id: str


class Bulk(TypedDict, total=False):
    id: str


class BulkLoadMatch(TypedDict):
    enterpris_id: str
    id: list


class BulkUpdateData(TypedDict):
    id: str
    id_organization: list


class Card(TypedDict, total=False):
    address: str
    badges: dict
    cardRole: str
    checkItemStates: list
    closed: bool
    coordinates: str
    cover: dict
    creationMethod: str
    dateLastActivity: str
    desc: str
    descData: dict
    due: str
    dueReminder: str
    id: str
    idAttachmentCover: str
    idBoard: str
    idChecklists: list
    idLabels: list
    idList: str
    idMembers: list
    idMembersVoted: list
    idShort: int
    labels: list
    limits: dict
    locationName: str
    manualCoverAttachment: bool
    mirrorSourceId: str
    name: str
    pos: float
    shortLink: str
    shortUrl: str
    subscribed: bool
    url: str


class CardLoadMatchRequired(TypedDict):
    id: str


class CardLoadMatch(CardLoadMatchRequired, total=False):
    action: str
    attachment: str
    attachment_field: str
    board: bool
    board_field: str
    check_item_state: bool
    checklist: str
    checklist_field: str
    custom_field_item: bool
    field: str
    list: bool
    member: bool
    member_field: str
    member_voted_field: str
    members_voted: bool
    plugin_data: bool
    sticker: bool
    sticker_field: str


class CardListMatchRequired(TypedDict):
    action_id: str


class CardListMatch(CardListMatchRequired, total=False):
    field: str


class CardCreateDataRequired(TypedDict):
    id_list: str


class CardCreateData(CardCreateDataRequired, total=False):
    address: str
    card_role: str
    coordinate: str
    desc: str
    due: str
    due_complete: bool
    file_source: str
    id_card_source: str
    id_label: list
    id_member: list
    keep_from_source: str
    location_name: str
    mime_type: str
    name: str
    pos: Any
    start: str
    url_source: str
    badges: dict
    cardRole: str
    checkItemStates: list
    closed: bool
    coordinates: str
    cover: dict
    creationMethod: str
    dateLastActivity: str
    descData: dict
    dueReminder: str
    id: str
    idAttachmentCover: str
    idBoard: str
    idChecklists: list
    idLabels: list
    idList: str
    idMembers: list
    idMembersVoted: list
    idShort: int
    labels: list
    limits: dict
    locationName: str
    manualCoverAttachment: bool
    mirrorSourceId: str
    shortLink: str
    shortUrl: str
    subscribed: bool
    url: str


class CardUpdateDataRequired(TypedDict):
    id: str


class CardUpdateData(CardUpdateDataRequired, total=False):
    address: str
    closed: bool
    coordinate: str
    cover: dict
    desc: str
    due: str
    due_complete: bool
    id_attachment_cover: str
    id_board: str
    id_label: str
    id_list: str
    id_member: str
    location_name: str
    name: str
    pos: Any
    start: str
    subscribed: bool
    badges: dict
    cardRole: str
    checkItemStates: list
    coordinates: str
    creationMethod: str
    dateLastActivity: str
    descData: dict
    dueReminder: str
    idAttachmentCover: str
    idBoard: str
    idChecklists: list
    idLabels: list
    idList: str
    idMembers: list
    idMembersVoted: list
    idShort: int
    labels: list
    limits: dict
    locationName: str
    manualCoverAttachment: bool
    mirrorSourceId: str
    shortLink: str
    shortUrl: str
    url: str


class CardRemoveMatch(TypedDict):
    id: str


class CardCheckItemState(TypedDict, total=False):
    id: str


class CardCheckItemStateLoadMatchRequired(TypedDict):
    id: str


class CardCheckItemStateLoadMatch(CardCheckItemStateLoadMatchRequired, total=False):
    field: str


class CardList(TypedDict, total=False):
    id: str


class CardListLoadMatchRequired(TypedDict):
    id: str


class CardListLoadMatch(CardListLoadMatchRequired, total=False):
    field: str


class CheckItem(TypedDict, total=False):
    id: str
    idChecklist: str
    name: str
    nameData: str
    pos: str
    state: str


class CheckItemLoadMatchRequired(TypedDict):
    card_id: str
    id: str


class CheckItemLoadMatch(CheckItemLoadMatchRequired, total=False):
    field: str


class CheckItemUpdateDataRequired(TypedDict):
    id: str


class CheckItemUpdateData(CheckItemUpdateDataRequired, total=False):
    card_id: str
    due: str
    due_reminder: float
    id_checklist: str
    id_member: str
    name: str
    pos: Any
    state: str
    checklist_id: str
    id_card: str
    idChecklist: str
    nameData: str


class CheckItemRemoveMatchRequired(TypedDict):
    id: str


class CheckItemRemoveMatch(CheckItemRemoveMatchRequired, total=False):
    card_id: str
    checklist_id: str


class Checklist(TypedDict, total=False):
    id: str


class ChecklistLoadMatchRequired(TypedDict):
    id: str


class ChecklistLoadMatch(ChecklistLoadMatchRequired, total=False):
    card: str
    check_item: str
    check_item_field: str
    field: str


class ChecklistCreateDataRequired(TypedDict):
    id_card: str


class ChecklistCreateData(ChecklistCreateDataRequired, total=False):
    id_checklist_source: str
    name: str
    pos: Any
    id: str


class ChecklistUpdateDataRequired(TypedDict):
    id: str


class ChecklistUpdateData(ChecklistUpdateDataRequired, total=False):
    field: str
    value: Any
    name: str
    pos: Any


class ChecklistRemoveMatchRequired(TypedDict):
    id: str


class ChecklistRemoveMatch(ChecklistRemoveMatchRequired, total=False):
    card_id: str


class ClaimableOrganization(TypedDict, total=False):
    activeMembershipCount: float
    dateLastActive: str
    displayName: str
    id: str
    idActiveAdmins: list
    logoUrl: str
    name: str
    products: list


class ClaimableOrganizationListMatchRequired(TypedDict):
    enterpris_id: str


class ClaimableOrganizationListMatch(ClaimableOrganizationListMatchRequired, total=False):
    active_since: str
    cursor: str
    inactive_since: str
    limit: int
    name: str


class CustomBoardBackground(TypedDict, total=False):
    id: str


class CustomBoardBackgroundRemoveMatch(TypedDict):
    id: str
    member_id: str


class CustomEmoji(TypedDict, total=False):
    id: str
    name: str
    url: str


class CustomEmojiLoadMatchRequired(TypedDict):
    id: str
    member_id: str


class CustomEmojiLoadMatch(CustomEmojiLoadMatchRequired, total=False):
    field: str


class CustomEmojiListMatch(TypedDict):
    member_id: str


class CustomEmojiCreateDataRequired(TypedDict):
    member_id: str
    file: str
    name: str


class CustomEmojiCreateData(CustomEmojiCreateDataRequired, total=False):
    id: str
    url: str


class CustomFieldRequired(TypedDict):
    idModel: str
    modelType: str
    type: str


class CustomField(CustomFieldRequired, total=False):
    cardFront: bool
    display: dict
    display_cardFront: bool
    displaycardFront: bool
    fieldGroup: str
    id: str
    name: str
    options: list
    pos: str


class CustomFieldLoadMatch(TypedDict):
    id: str


class CustomFieldListMatch(TypedDict):
    board_id: str


class CustomFieldCreateDataRequired(TypedDict):
    idModel: str
    modelType: str
    type: str


class CustomFieldCreateData(CustomFieldCreateDataRequired, total=False):
    cardFront: bool
    display: dict
    display_cardFront: bool
    displaycardFront: bool
    fieldGroup: str
    id: str
    name: str
    options: list
    pos: str


class CustomFieldUpdateDataRequired(TypedDict):
    id: str


class CustomFieldUpdateData(CustomFieldUpdateDataRequired, total=False):
    cardFront: bool
    display: dict
    display_cardFront: bool
    displaycardFront: bool
    fieldGroup: str
    idModel: str
    modelType: str
    name: str
    options: list
    pos: str
    type: str


class CustomFieldRemoveMatch(TypedDict):
    id: str


class CustomFieldItem(TypedDict, total=False):
    id: str
    idCustomField: str
    idModel: str
    modelType: str
    value: dict


class CustomFieldItemListMatch(TypedDict):
    card_id: str


class CustomSticker(TypedDict, total=False):
    id: str
    scaled: list
    url: str


class CustomStickerLoadMatchRequired(TypedDict):
    id: str
    member_id: str


class CustomStickerLoadMatch(CustomStickerLoadMatchRequired, total=False):
    field: str


class CustomStickerListMatch(TypedDict):
    member_id: str


class CustomStickerCreateDataRequired(TypedDict):
    member_id: str
    file: str


class CustomStickerCreateData(CustomStickerCreateDataRequired, total=False):
    id: str
    scaled: list
    url: str


class CustomStickerRemoveMatch(TypedDict):
    id: str
    member_id: str


class EmailPosition(TypedDict):
    pass


class EmailPositionUpdateData(TypedDict):
    board_id: str
    value: str


class Emoji(TypedDict, total=False):
    category: str
    keywords: list
    name: str
    native: str
    sheetX: float
    sheetY: float
    shortName: str
    shortNames: list
    text: str
    texts: str
    tts: str
    unified: str


class EmojiListMatch(TypedDict, total=False):
    locale: str
    spritesheet: bool


class Enterpris(TypedDict, total=False):
    dateOrganizationPrefsLastUpdated: str
    displayName: str
    domains: list
    enterpriseDomains: list
    id: str
    idAdmins: list
    idOrganizations: list
    idp: dict
    isRealEnterprise: bool
    licenses: dict
    logoHash: str
    logoUrl: str
    name: str
    organizationPrefs: dict
    pluginWhitelistingEnabled: list
    prefs: dict
    products: list
    ssoActivationFailed: bool


class EnterprisLoadMatchRequired(TypedDict):
    id: str


class EnterprisLoadMatch(EnterprisLoadMatchRequired, total=False):
    field: str
    member: str
    member_count: int
    member_field: str
    member_filter: str
    member_sort: str
    member_sort_by: str
    member_sort_order: str
    member_start_index: int
    organization: str
    organization_field: str
    organization_membership: str
    organization_paid_account: bool


class EnterprisCreateDataRequired(TypedDict):
    id: str


class EnterprisCreateData(EnterprisCreateDataRequired, total=False):
    expiration: str
    dateOrganizationPrefsLastUpdated: str
    displayName: str
    domains: list
    enterpriseDomains: list
    idAdmins: list
    idOrganizations: list
    idp: dict
    isRealEnterprise: bool
    licenses: dict
    logoHash: str
    logoUrl: str
    name: str
    organizationPrefs: dict
    pluginWhitelistingEnabled: list
    prefs: dict
    products: list
    ssoActivationFailed: bool


class EnterprisUpdateDataRequired(TypedDict):
    id: str
    id_organization: str


class EnterprisUpdateData(EnterprisUpdateDataRequired, total=False):
    dateOrganizationPrefsLastUpdated: str
    displayName: str
    domains: list
    enterpriseDomains: list
    idAdmins: list
    idOrganizations: list
    idp: dict
    isRealEnterprise: bool
    licenses: dict
    logoHash: str
    logoUrl: str
    name: str
    organizationPrefs: dict
    pluginWhitelistingEnabled: list
    prefs: dict
    products: list
    ssoActivationFailed: bool


class EnterprisSignupUrl(TypedDict, total=False):
    id: str
    signupUrl: str


class EnterprisSignupUrlLoadMatchRequired(TypedDict):
    id: str


class EnterprisSignupUrlLoadMatch(EnterprisSignupUrlLoadMatchRequired, total=False):
    authenticate: bool
    confirmation_accepted: bool
    return_url: str
    tos_accepted: bool


class EnterpriseAdmin(TypedDict, total=False):
    fullName: str
    id: str
    username: str


class EnterpriseAdminLoadMatchRequired(TypedDict):
    enterpris_id: str


class EnterpriseAdminLoadMatch(EnterpriseAdminLoadMatchRequired, total=False):
    field: str


class EnterpriseAuditLog(TypedDict, total=False):
    date: str
    idAction: str
    member: dict
    memberCreator: dict
    organization: dict
    type: str


class EnterpriseAuditLogListMatch(TypedDict):
    enterpris_id: str


class Export(TypedDict, total=False):
    attempts: float
    exportUrl: str
    finished: bool
    id: str
    size: str
    stage: str
    startedAt: str
    status: dict


class ExportLoadMatch(TypedDict):
    board_id: str
    id: str


class ExportListMatch(TypedDict):
    organization_id: str


class ExportCreateDataRequired(TypedDict):
    board_id: str


class ExportCreateData(ExportCreateDataRequired, total=False):
    attachment: bool
    attachment_age: float
    attempts: float
    exportUrl: str
    finished: bool
    id: str
    size: str
    stage: str
    startedAt: str
    status: dict


class ExportRemoveMatch(TypedDict):
    board_id: str
    id: str


class ExportDownload(TypedDict):
    pass


class ExportDownloadLoadMatch(TypedDict):
    board_id: str
    id_export: str


class Generate(TypedDict):
    pass


class GenerateCreateData(TypedDict):
    board_id: str


class IdEmailList(TypedDict):
    pass


class IdEmailListUpdateData(TypedDict):
    board_id: str
    value: str


class IdLabel(TypedDict, total=False):
    id: str


class IdLabelRemoveMatch(TypedDict):
    card_id: str
    id: str


class IdMember(TypedDict, total=False):
    id: str


class IdMemberRemoveMatch(TypedDict):
    card_id: str
    id: str


class Label(TypedDict, total=False):
    id: str


class LabelLoadMatchRequired(TypedDict):
    id: str


class LabelLoadMatch(LabelLoadMatchRequired, total=False):
    field: str


class LabelCreateDataRequired(TypedDict):
    color: str
    id_board: str
    name: str


class LabelCreateData(LabelCreateDataRequired, total=False):
    id: str


class LabelUpdateDataRequired(TypedDict):
    id: str


class LabelUpdateData(LabelUpdateDataRequired, total=False):
    color: str
    name: str
    field: str
    value: str


class LabelRemoveMatch(TypedDict):
    id: str


class List(TypedDict, total=False):
    id: str


class ListLoadMatchRequired(TypedDict):
    id: str


class ListLoadMatch(ListLoadMatchRequired, total=False):
    board_id: str
    field: str


class ListCreateDataRequired(TypedDict):
    id_board: str
    name: str


class ListCreateData(ListCreateDataRequired, total=False):
    id_list_source: str
    pos: Any
    id: str


class ListUpdateDataRequired(TypedDict):
    id: str


class ListUpdateData(ListUpdateDataRequired, total=False):
    closed: bool
    id_board: str
    name: str
    pos: Any
    subscribed: bool
    field: str
    value: Any


class Member(TypedDict, total=False):
    aaEmail: str
    aaEnrolledDate: str
    aaId: str
    activityBlocked: bool
    avatarHash: str
    avatarSource: str
    avatarUrl: str
    bio: str
    bioData: dict
    confirmed: bool
    email: str
    fullName: str
    gravatarHash: str
    id: str
    idBoards: list
    idBoardsPinned: list
    idEnterprise: str
    idEnterprisesAdmin: list
    idEnterprisesDeactivated: list
    idMemberReferrer: str
    idOrganizations: list
    idPremOrgsAdmin: list
    initials: str
    isAaMastered: bool
    ixUpdate: float
    limits: dict
    loginTypes: list
    marketingOptIn: dict
    memberType: str
    messagesDismissed: dict
    nonPublic: dict
    nonPublicAvailable: bool
    oneTimeMessagesDismissed: list
    prefs: dict
    premiumFeatures: list
    products: list
    status: str
    trophies: list
    uploadedAvatarHash: str
    uploadedAvatarUrl: str
    url: str
    username: str


class MemberLoadMatchRequired(TypedDict):
    id: str


class MemberLoadMatch(MemberLoadMatchRequired, total=False):
    action: str
    board: str
    board_background: str
    board_star: bool
    boards_invited: str
    boards_invited_field: str
    card: str
    custom_board_background: str
    custom_emoji: str
    custom_sticker: str
    field: str
    notification: str
    organization: str
    organization_field: str
    organization_paid_account: bool
    organizations_invited: str
    organizations_invited_field: str
    paid_account: bool
    saved_search: bool
    token: str


class MemberListMatchRequired(TypedDict):
    query: str


class MemberListMatch(MemberListMatchRequired, total=False):
    id_board: str
    id_organization: str
    limit: int
    only_org_member: bool


class MemberCreateDataRequired(TypedDict):
    id: str


class MemberCreateData(MemberCreateDataRequired, total=False):
    file: str
    value: str
    aaEmail: str
    aaEnrolledDate: str
    aaId: str
    activityBlocked: bool
    avatarHash: str
    avatarSource: str
    avatarUrl: str
    bio: str
    bioData: dict
    confirmed: bool
    email: str
    fullName: str
    gravatarHash: str
    idBoards: list
    idBoardsPinned: list
    idEnterprise: str
    idEnterprisesAdmin: list
    idEnterprisesDeactivated: list
    idMemberReferrer: str
    idOrganizations: list
    idPremOrgsAdmin: list
    initials: str
    isAaMastered: bool
    ixUpdate: float
    limits: dict
    loginTypes: list
    marketingOptIn: dict
    memberType: str
    messagesDismissed: dict
    nonPublic: dict
    nonPublicAvailable: bool
    oneTimeMessagesDismissed: list
    prefs: dict
    premiumFeatures: list
    products: list
    status: str
    trophies: list
    uploadedAvatarHash: str
    uploadedAvatarUrl: str
    url: str
    username: str


class MemberUpdateDataRequired(TypedDict):
    id: str


class MemberUpdateData(MemberUpdateDataRequired, total=False):
    avatar_source: str
    bio: str
    full_name: str
    initial: str
    username: str
    board_id: str
    allow_billable_guest: bool
    type: str
    organization_id: str
    aaEmail: str
    aaEnrolledDate: str
    aaId: str
    activityBlocked: bool
    avatarHash: str
    avatarSource: str
    avatarUrl: str
    bioData: dict
    confirmed: bool
    email: str
    fullName: str
    gravatarHash: str
    idBoards: list
    idBoardsPinned: list
    idEnterprise: str
    idEnterprisesAdmin: list
    idEnterprisesDeactivated: list
    idMemberReferrer: str
    idOrganizations: list
    idPremOrgsAdmin: list
    initials: str
    isAaMastered: bool
    ixUpdate: float
    limits: dict
    loginTypes: list
    marketingOptIn: dict
    memberType: str
    messagesDismissed: dict
    nonPublic: dict
    nonPublicAvailable: bool
    oneTimeMessagesDismissed: list
    prefs: dict
    premiumFeatures: list
    products: list
    status: str
    trophies: list
    uploadedAvatarHash: str
    uploadedAvatarUrl: str
    url: str


class MemberRemoveMatchRequired(TypedDict):
    id: str


class MemberRemoveMatch(MemberRemoveMatchRequired, total=False):
    board_id: str
    organization_id: str


class MemberPrivacy(TypedDict):
    pass


class MemberPrivacyLoadMatch(TypedDict):
    plugin_id: str


class MembersVoted(TypedDict, total=False):
    id: str


class MembersVotedLoadMatchRequired(TypedDict):
    card_id: str


class MembersVotedLoadMatch(MembersVotedLoadMatchRequired, total=False):
    field: str


class MembersVotedRemoveMatch(TypedDict):
    card_id: str
    id: str


class Membership(TypedDict, total=False):
    admin: bool
    collaborator: bool
    deactivated: bool
    id: str
    licensed: bool
    managed: bool
    member: dict


class MembershipLoadMatchRequired(TypedDict):
    id: str
    organization_id: str


class MembershipLoadMatch(MembershipLoadMatchRequired, total=False):
    member: bool


class MembershipListMatchRequired(TypedDict):
    organization_id: str


class MembershipListMatch(MembershipListMatchRequired, total=False):
    filter: str
    member: bool


class MembershipUpdateDataRequired(TypedDict):
    board_id: str
    id: str
    type: str


class MembershipUpdateData(MembershipUpdateDataRequired, total=False):
    member_field: str
    admin: bool
    collaborator: bool
    deactivated: bool
    licensed: bool
    managed: bool
    member: dict


class MostRecent(TypedDict):
    pass


class NewBillableGuest(TypedDict, total=False):
    id: str


class NewBillableGuestLoadMatch(TypedDict):
    id: str
    organization_id: str


class NotificationRequired(TypedDict):
    board: dict


class Notification(NotificationRequired, total=False):
    card: dict
    data: str
    date: str
    dateRead: str
    id: str
    idAction: str
    idMemberCreator: str
    reactions: list
    type: str
    unread: bool


class NotificationLoadMatchRequired(TypedDict):
    id: str


class NotificationLoadMatch(NotificationLoadMatchRequired, total=False):
    board: bool
    board_field: str
    card: bool
    card_field: str
    display: bool
    entity: bool
    field: str
    list: bool
    member: bool
    member_creator: bool
    member_creator_field: str
    member_field: str
    organization: bool
    organization_field: str


class NotificationListMatchRequired(TypedDict):
    member_id: str


class NotificationListMatch(NotificationListMatchRequired, total=False):
    before: str
    display: bool
    entity: bool
    field: str
    filter: str
    limit: int
    member_creator: bool
    member_creator_field: str
    page: int
    read_filter: str
    since: str


class NotificationUpdateDataRequired(TypedDict):
    id: str


class NotificationUpdateData(NotificationUpdateDataRequired, total=False):
    unread: bool
    board: dict
    card: dict
    data: str
    date: str
    dateRead: str
    idAction: str
    idMemberCreator: str
    reactions: list
    type: str


class NotificationChannelSetting(TypedDict, total=False):
    blockedKeys: list
    channel: str
    id: str
    idMember: str


class NotificationChannelSettingLoadMatch(TypedDict):
    channel: str
    member_id: str


class NotificationChannelSettingListMatch(TypedDict):
    member_id: str


class NotificationChannelSettingUpdateDataRequired(TypedDict):
    channel: str
    member_id: str


class NotificationChannelSettingUpdateData(NotificationChannelSettingUpdateDataRequired, total=False):
    blockedKeys: list
    id: str
    idMember: str


class NotificationList(TypedDict, total=False):
    id: str


class NotificationListLoadMatchRequired(TypedDict):
    id: str


class NotificationListLoadMatch(NotificationListLoadMatchRequired, total=False):
    field: str


class NotificationMemberCreator(TypedDict, total=False):
    id: str


class NotificationMemberCreatorLoadMatchRequired(TypedDict):
    id: str


class NotificationMemberCreatorLoadMatch(NotificationMemberCreatorLoadMatchRequired, total=False):
    field: str


class NotificationsChannelSetting(TypedDict):
    pass


class Option(TypedDict, total=False):
    id: str


class OptionLoadMatchRequired(TypedDict):
    custom_field_id: str


class OptionLoadMatch(OptionLoadMatchRequired, total=False):
    id: str


class OptionRemoveMatch(TypedDict):
    custom_field_id: str
    id: str


class OrgInviteRestrict(TypedDict):
    pass


class OrgInviteRestrictRemoveMatch(TypedDict):
    organization_id: str


class Organization(TypedDict, total=False):
    dateLastActivity: str
    displayName: str
    id: str
    idBoards: list
    idEnterprise: str
    memberships: list
    name: str
    offering: str
    prefs: dict
    premiumFeatures: list
    url: str


class OrganizationLoadMatch(TypedDict):
    id: str


class OrganizationListMatchRequired(TypedDict):
    enterpris_id: str


class OrganizationListMatch(OrganizationListMatchRequired, total=False):
    count: int
    field: str
    filter: str
    start_index: int


class OrganizationCreateDataRequired(TypedDict):
    display_name: str


class OrganizationCreateData(OrganizationCreateDataRequired, total=False):
    desc: str
    name: str
    website: str
    dateLastActivity: str
    displayName: str
    id: str
    idBoards: list
    idEnterprise: str
    memberships: list
    offering: str
    prefs: dict
    premiumFeatures: list
    url: str


class OrganizationUpdateDataRequired(TypedDict):
    id: str


class OrganizationUpdateData(OrganizationUpdateDataRequired, total=False):
    desc: str
    display_name: str
    name: str
    website: str
    dateLastActivity: str
    displayName: str
    idBoards: list
    idEnterprise: str
    memberships: list
    offering: str
    prefs: dict
    premiumFeatures: list
    url: str


class OrganizationRemoveMatchRequired(TypedDict):
    id: str


class OrganizationRemoveMatch(OrganizationRemoveMatchRequired, total=False):
    enterpris_id: str


class PendingOrganization(TypedDict, total=False):
    date: str
    displayName: str
    id: str
    idMember: str
    logoUrl: str
    memberRequestor: dict
    membershipCount: float
    transferability: dict


class PendingOrganizationListMatchRequired(TypedDict):
    enterpris_id: str


class PendingOrganizationListMatch(PendingOrganizationListMatchRequired, total=False):
    active_since: str
    inactive_since: str


class Plugin(TypedDict, total=False):
    id: str


class PluginLoadMatch(TypedDict):
    id: str


class PluginListMatch(TypedDict):
    board_id: str


class PluginUpdateData(TypedDict):
    id: str


class PluginData(TypedDict):
    pass


class PluginDataLoadMatch(TypedDict):
    card_id: str


class PluginDataListMatch(TypedDict):
    organization_id: str


class PluginListing(TypedDict, total=False):
    description: str
    id: str
    locale: str
    name: str
    overview: str


class PluginListingCreateDataRequired(TypedDict):
    id_plugin: str


class PluginListingCreateData(PluginListingCreateDataRequired, total=False):
    description: str
    id: str
    locale: str
    name: str
    overview: str


class PluginListingUpdateDataRequired(TypedDict):
    id: str
    id_plugin: str


class PluginListingUpdateData(PluginListingUpdateDataRequired, total=False):
    description: str
    locale: str
    name: str
    overview: str


class Reaction(TypedDict, total=False):
    id: str


class ReactionLoadMatchRequired(TypedDict):
    id_action: str


class ReactionLoadMatch(ReactionLoadMatchRequired, total=False):
    id: str
    emoji: bool
    member: bool


class ReactionRemoveMatch(TypedDict):
    id: str
    id_action: str


class Read(TypedDict):
    pass


class ReadCreateData(TypedDict, total=False):
    ids: list
    read: bool


class SavedSearch(TypedDict, total=False):
    id: str
    name: str
    pos: Any
    query: str


class SavedSearchLoadMatch(TypedDict):
    id: str
    member_id: str


class SavedSearchListMatch(TypedDict):
    member_id: str


class SavedSearchCreateDataRequired(TypedDict):
    member_id: str
    name: str
    pos: Any
    query: str


class SavedSearchCreateData(SavedSearchCreateDataRequired, total=False):
    id: str


class SavedSearchUpdateDataRequired(TypedDict):
    id: str
    member_id: str


class SavedSearchUpdateData(SavedSearchUpdateDataRequired, total=False):
    name: str
    pos: str
    query: str


class SavedSearchRemoveMatch(TypedDict):
    id: str
    member_id: str


class Search(TypedDict):
    pass


class SearchListMatchRequired(TypedDict):
    query: str


class SearchListMatch(SearchListMatchRequired, total=False):
    board_field: str
    board_organization: bool
    boards_limit: int
    card_attachment: str
    card_board: bool
    card_field: str
    card_list: bool
    card_member: bool
    card_sticker: bool
    cards_limit: int
    cards_page: float
    id_board: Any
    id_card: str
    id_organization: str
    member_field: str
    members_limit: int
    model_type: str
    organization_field: str
    organizations_limit: int
    partial: bool


class ShowSidebar(TypedDict):
    pass


class ShowSidebarUpdateData(TypedDict):
    board_id: str
    value: bool


class ShowSidebarActivity(TypedDict):
    pass


class ShowSidebarActivityUpdateData(TypedDict):
    board_id: str
    value: bool


class ShowSidebarBoardAction(TypedDict):
    pass


class ShowSidebarBoardActionUpdateData(TypedDict):
    board_id: str
    value: bool


class ShowSidebarMember(TypedDict):
    pass


class ShowSidebarMemberUpdateData(TypedDict):
    board_id: str
    value: bool


class Sticker(TypedDict, total=False):
    id: str


class StickerLoadMatchRequired(TypedDict):
    card_id: str


class StickerLoadMatch(StickerLoadMatchRequired, total=False):
    id: str
    field: str


class StickerUpdateDataRequired(TypedDict):
    card_id: str
    id: str
    left: float
    top: float
    z_index: int


class StickerUpdateData(StickerUpdateDataRequired, total=False):
    rotate: float


class StickerRemoveMatch(TypedDict):
    card_id: str
    id: str


class Tag(TypedDict, total=False):
    id: str


class TagListMatch(TypedDict):
    organization_id: str


class TagRemoveMatch(TypedDict):
    id: str
    organization_id: str


class Token(TypedDict, total=False):
    dateCreated: str
    dateExpires: str
    id: str
    idMember: str
    identifier: str
    permissions: list


class TokenLoadMatchRequired(TypedDict):
    id: str


class TokenLoadMatch(TokenLoadMatchRequired, total=False):
    field: str
    webhook: bool


class TokenListMatchRequired(TypedDict):
    member_id: str


class TokenListMatch(TokenListMatchRequired, total=False):
    webhook: bool


class TokenRemoveMatch(TypedDict):
    id: str


class TransferrableOrganization(TypedDict, total=False):
    id: str
    newBillableMembers: list
    restrictedMembers: list
    transferrable: bool


class TransferrableOrganizationLoadMatch(TypedDict):
    enterpris_id: str
    id: str


class TrelloList(TypedDict, total=False):
    attachments: dict
    closed: bool
    id: str
    idBoard: str
    limits: dict
    name: str
    pos: float
    softLimit: str
    subscribed: bool


class TrelloListLoadMatchRequired(TypedDict):
    action_id: str


class TrelloListLoadMatch(TrelloListLoadMatchRequired, total=False):
    field: str


class TrelloListListMatchRequired(TypedDict):
    board_id: str


class TrelloListListMatch(TrelloListListMatchRequired, total=False):
    card: str
    card_field: str
    field: str
    filter: str


class TrelloListCreateDataRequired(TypedDict):
    board_id: str
    name: str


class TrelloListCreateData(TrelloListCreateDataRequired, total=False):
    pos: str
    attachments: dict
    closed: bool
    id: str
    idBoard: str
    limits: dict
    softLimit: str
    subscribed: bool


class Webhook(TypedDict, total=False):
    active: bool
    callbackURL: str
    consecutiveFailures: float
    description: str
    firstConsecutiveFailDate: str
    id: str
    idModel: str


class WebhookLoadMatchRequired(TypedDict):
    id: str


class WebhookLoadMatch(WebhookLoadMatchRequired, total=False):
    field: str
    token_id: str


class WebhookListMatch(TypedDict):
    token_id: str


class WebhookCreateDataRequired(TypedDict):
    callback_url: str
    id_model: str


class WebhookCreateData(WebhookCreateDataRequired, total=False):
    active: bool
    description: str
    token_id: str
    callbackURL: str
    consecutiveFailures: float
    firstConsecutiveFailDate: str
    id: str
    idModel: str


class WebhookUpdateDataRequired(TypedDict):
    id: str


class WebhookUpdateData(WebhookUpdateDataRequired, total=False):
    active: bool
    callback_url: str
    description: str
    id_model: str
    token_id: str
    callbackURL: str
    consecutiveFailures: float
    firstConsecutiveFailDate: str
    idModel: str


class WebhookRemoveMatchRequired(TypedDict):
    id: str


class WebhookRemoveMatch(WebhookRemoveMatchRequired, total=False):
    token_id: str
