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
    native: str
    shortName: str
    skinVariation: str
    type: str
    unified: str


class ActionLoadMatch(TypedDict):
    id: str


class ActionListMatch(TypedDict):
    card_id: str


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
    native: str
    shortName: str
    skinVariation: str
    type: str
    unified: str


class ActionUpdateDataRequired(TypedDict):
    id: str


class ActionUpdateData(ActionUpdateDataRequired, total=False):
    data: dict
    date: str
    display: dict
    idMemberCreator: str
    limits: dict
    memberCreator: dict
    native: str
    shortName: str
    skinVariation: str
    type: str
    unified: str


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


class AttachmentLoadMatch(TypedDict):
    card_id: str
    id: str


class AttachmentListMatch(TypedDict):
    card_id: str


class AttachmentRemoveMatch(TypedDict):
    card_id: str
    id: str


class Batch(TypedDict):
    pass


class BatchLoadMatch(TypedDict):
    pass


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
    fullName: str
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


class BoardLoadMatch(TypedDict):
    id: str


class BoardListMatch(TypedDict):
    member_id: str


class BoardCreateDataRequired(TypedDict):
    id: str


class BoardCreateData(BoardCreateDataRequired, total=False):
    closed: bool
    creationMethod: str
    dateLastActivity: str
    dateLastView: str
    datePluginDisable: str
    desc: str
    descData: str
    enterpriseOwned: bool
    fullName: str
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


class BoardUpdateDataRequired(TypedDict):
    id: str


class BoardUpdateData(BoardUpdateDataRequired, total=False):
    closed: bool
    creationMethod: str
    dateLastActivity: str
    dateLastView: str
    datePluginDisable: str
    desc: str
    descData: str
    enterpriseOwned: bool
    fullName: str
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


class BoardRemoveMatch(TypedDict):
    id: str


class BoardBackground(TypedDict, total=False):
    id: str


class BoardBackgroundLoadMatchRequired(TypedDict):
    member_id: str


class BoardBackgroundLoadMatch(BoardBackgroundLoadMatchRequired, total=False):
    id: str
    id_background: str


class BoardBackgroundListMatch(TypedDict):
    member_id: str


class BoardBackgroundCreateDataRequired(TypedDict):
    member_id: str


class BoardBackgroundCreateData(BoardBackgroundCreateDataRequired, total=False):
    id: str


class BoardBackgroundUpdateDataRequired(TypedDict):
    member_id: str


class BoardBackgroundUpdateData(BoardBackgroundUpdateDataRequired, total=False):
    id: str
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


class BoardStarListMatch(TypedDict):
    id: str


class BoardStarCreateDataRequired(TypedDict):
    member_id: str


class BoardStarCreateData(BoardStarCreateDataRequired, total=False):
    id: str
    idBoard: str
    pos: int


class BoardStarUpdateDataRequired(TypedDict):
    id: str
    member_id: str


class BoardStarUpdateData(BoardStarUpdateDataRequired, total=False):
    idBoard: str
    pos: int


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


class Card(TypedDict, total=False):
    address: str
    badges: dict
    cardRole: str
    checkItemStates: list
    closed: bool
    coordinates: str
    cover: dict
    creationMethod: str
    customFieldItems: list
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


class CardLoadMatch(TypedDict):
    id: str


class CardListMatch(TypedDict):
    action_id: str


class CardCreateData(TypedDict, total=False):
    address: str
    badges: dict
    cardRole: str
    checkItemStates: list
    closed: bool
    coordinates: str
    cover: dict
    creationMethod: str
    customFieldItems: list
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


class CardUpdateDataRequired(TypedDict):
    id: str


class CardUpdateData(CardUpdateDataRequired, total=False):
    address: str
    badges: dict
    cardRole: str
    checkItemStates: list
    closed: bool
    coordinates: str
    cover: dict
    creationMethod: str
    customFieldItems: list
    dateLastActivity: str
    desc: str
    descData: dict
    due: str
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
    name: str
    pos: float
    shortLink: str
    shortUrl: str
    subscribed: bool
    url: str


class CardRemoveMatch(TypedDict):
    id: str


class CardCheckItemState(TypedDict, total=False):
    id: str


class CardCheckItemStateLoadMatch(TypedDict):
    id: str


class CardList(TypedDict, total=False):
    id: str


class CardListLoadMatch(TypedDict):
    id: str


class CheckItem(TypedDict, total=False):
    id: str
    idChecklist: str
    name: str
    nameData: str
    pos: str
    state: str


class CheckItemLoadMatch(TypedDict):
    card_id: str
    id: str


class CheckItemUpdateDataRequired(TypedDict):
    id: str


class CheckItemUpdateData(CheckItemUpdateDataRequired, total=False):
    card_id: str
    checklist_id: str
    id_card: str
    idChecklist: str
    name: str
    nameData: str
    pos: str
    state: str


class CheckItemRemoveMatchRequired(TypedDict):
    id: str


class CheckItemRemoveMatch(CheckItemRemoveMatchRequired, total=False):
    card_id: str
    checklist_id: str


class Checklist(TypedDict, total=False):
    id: str


class ChecklistLoadMatch(TypedDict):
    id: str


class ChecklistCreateData(TypedDict, total=False):
    id: str


class ChecklistUpdateDataRequired(TypedDict):
    id: str


class ChecklistUpdateData(ChecklistUpdateDataRequired, total=False):
    field: str


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


class ClaimableOrganizationListMatch(TypedDict):
    enterpris_id: str


class CustomBoardBackground(TypedDict, total=False):
    id: str


class CustomBoardBackgroundRemoveMatch(TypedDict):
    id: str
    member_id: str


class CustomEmoji(TypedDict, total=False):
    id: str
    name: str
    url: str


class CustomEmojiLoadMatch(TypedDict):
    id: str
    member_id: str


class CustomEmojiListMatch(TypedDict):
    member_id: str


class CustomEmojiCreateDataRequired(TypedDict):
    member_id: str


class CustomEmojiCreateData(CustomEmojiCreateDataRequired, total=False):
    id: str
    name: str
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


class CustomStickerLoadMatch(TypedDict):
    id: str
    member_id: str


class CustomStickerListMatch(TypedDict):
    member_id: str


class CustomStickerCreateDataRequired(TypedDict):
    member_id: str


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


class EnterprisLoadMatch(TypedDict):
    id: str


class EnterprisCreateDataRequired(TypedDict):
    id: str


class EnterprisCreateData(EnterprisCreateDataRequired, total=False):
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


class EnterprisSignupUrlLoadMatch(TypedDict):
    id: str


class EnterpriseAdmin(TypedDict, total=False):
    fullName: str
    id: str
    username: str


class EnterpriseAdminLoadMatch(TypedDict):
    enterpris_id: str


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


class LabelLoadMatch(TypedDict):
    id: str


class LabelCreateData(TypedDict, total=False):
    id: str


class LabelUpdateDataRequired(TypedDict):
    id: str


class LabelUpdateData(LabelUpdateDataRequired, total=False):
    field: str


class LabelRemoveMatch(TypedDict):
    id: str


class List(TypedDict, total=False):
    id: str


class ListLoadMatchRequired(TypedDict):
    id: str


class ListLoadMatch(ListLoadMatchRequired, total=False):
    board_id: str


class ListCreateData(TypedDict, total=False):
    id: str


class ListUpdateDataRequired(TypedDict):
    id: str


class ListUpdateData(ListUpdateDataRequired, total=False):
    field: str


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


class MemberLoadMatch(TypedDict):
    id: str


class MemberListMatch(TypedDict, total=False):
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


class MemberCreateDataRequired(TypedDict):
    id: str


class MemberCreateData(MemberCreateDataRequired, total=False):
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
    board_id: str
    organization_id: str
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


class MembersVotedLoadMatch(TypedDict):
    card_id: str


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


class MembershipLoadMatch(TypedDict):
    id: str
    organization_id: str


class MembershipListMatch(TypedDict):
    organization_id: str


class MembershipUpdateDataRequired(TypedDict):
    board_id: str
    id: str


class MembershipUpdateData(MembershipUpdateDataRequired, total=False):
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
    field: str


class NotificationListMatch(TypedDict):
    member_id: str


class NotificationUpdateDataRequired(TypedDict):
    id: str


class NotificationUpdateData(NotificationUpdateDataRequired, total=False):
    board: dict
    card: dict
    data: str
    date: str
    dateRead: str
    idAction: str
    idMemberCreator: str
    reactions: list
    type: str
    unread: bool


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


class NotificationListLoadMatch(TypedDict):
    id: str


class NotificationMemberCreator(TypedDict, total=False):
    id: str


class NotificationMemberCreatorLoadMatch(TypedDict):
    id: str


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


class OrganizationListMatch(TypedDict):
    enterpris_id: str


class OrganizationCreateData(TypedDict, total=False):
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


class OrganizationUpdateDataRequired(TypedDict):
    id: str


class OrganizationUpdateData(OrganizationUpdateDataRequired, total=False):
    dateLastActivity: str
    displayName: str
    idBoards: list
    idEnterprise: str
    memberships: list
    name: str
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


class PendingOrganizationListMatch(TypedDict):
    enterpris_id: str


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


class ReactionRemoveMatch(TypedDict):
    id: str
    id_action: str


class Read(TypedDict):
    pass


class ReadCreateData(TypedDict):
    pass


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


class SavedSearchCreateData(SavedSearchCreateDataRequired, total=False):
    id: str
    name: str
    pos: Any
    query: str


class SavedSearchUpdateDataRequired(TypedDict):
    id: str
    member_id: str


class SavedSearchUpdateData(SavedSearchUpdateDataRequired, total=False):
    name: str
    pos: Any
    query: str


class SavedSearchRemoveMatch(TypedDict):
    id: str
    member_id: str


class Search(TypedDict):
    pass


class SearchListMatch(TypedDict):
    pass


class ShowSidebar(TypedDict):
    pass


class ShowSidebarUpdateData(TypedDict):
    board_id: str


class ShowSidebarActivity(TypedDict):
    pass


class ShowSidebarActivityUpdateData(TypedDict):
    board_id: str


class ShowSidebarBoardAction(TypedDict):
    pass


class ShowSidebarBoardActionUpdateData(TypedDict):
    board_id: str


class ShowSidebarMember(TypedDict):
    pass


class ShowSidebarMemberUpdateData(TypedDict):
    board_id: str


class Sticker(TypedDict, total=False):
    id: str


class StickerLoadMatchRequired(TypedDict):
    card_id: str


class StickerLoadMatch(StickerLoadMatchRequired, total=False):
    id: str


class StickerUpdateData(TypedDict):
    card_id: str
    id: str


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


class TokenLoadMatch(TypedDict):
    id: str


class TokenListMatch(TypedDict):
    member_id: str


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


class TrelloListLoadMatch(TypedDict):
    action_id: str


class TrelloListListMatch(TypedDict):
    board_id: str


class TrelloListCreateDataRequired(TypedDict):
    board_id: str


class TrelloListCreateData(TrelloListCreateDataRequired, total=False):
    attachments: dict
    closed: bool
    id: str
    idBoard: str
    limits: dict
    name: str
    pos: float
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


class WebhookCreateData(TypedDict, total=False):
    active: bool
    callbackURL: str
    consecutiveFailures: float
    description: str
    firstConsecutiveFailDate: str
    id: str
    idModel: str


class WebhookUpdateDataRequired(TypedDict):
    id: str


class WebhookUpdateData(WebhookUpdateDataRequired, total=False):
    token_id: str
    active: bool
    callbackURL: str
    consecutiveFailures: float
    description: str
    firstConsecutiveFailDate: str
    idModel: str


class WebhookRemoveMatchRequired(TypedDict):
    id: str


class WebhookRemoveMatch(WebhookRemoveMatchRequired, total=False):
    token_id: str
