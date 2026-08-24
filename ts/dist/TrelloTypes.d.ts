export interface Action {
    data?: Record<string, any>;
    date?: string;
    display?: Record<string, any>;
    id?: string;
    idMemberCreator?: string;
    limits?: Record<string, any>;
    memberCreator?: Record<string, any>;
    native?: string;
    shortName?: string;
    skinVariation?: string;
    type?: string;
    unified?: string;
}
export interface ActionLoadMatch {
    id: string;
}
export interface ActionListMatch {
    card_id: string;
}
export interface ActionCreateData {
    id_action: string;
    data?: Record<string, any>;
    date?: string;
    display?: Record<string, any>;
    id?: string;
    idMemberCreator?: string;
    limits?: Record<string, any>;
    memberCreator?: Record<string, any>;
    native?: string;
    shortName?: string;
    skinVariation?: string;
    type?: string;
    unified?: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionUpdateData {
    id: string;
    data?: Record<string, any>;
    date?: string;
    display?: Record<string, any>;
    idMemberCreator?: string;
    limits?: Record<string, any>;
    memberCreator?: Record<string, any>;
    native?: string;
    shortName?: string;
    skinVariation?: string;
    type?: string;
    unified?: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionRemoveMatch {
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface ActionReactionsSummary {
}
export interface ActionReactionsSummaryLoadMatch {
    id_action: string;
}
export interface Admin {
}
export interface AdminUpdateData {
    enterpris_id: string;
    id: string;
}
export interface AdminRemoveMatch {
    enterpris_id: string;
    id: string;
}
export interface Application {
}
export interface ApplicationCompliance {
}
export interface ApplicationComplianceLoadMatch {
    key: string;
}
export interface AssociatedDomain {
}
export interface AssociatedDomainRemoveMatch {
    organization_id: string;
}
export interface Attachment {
}
export interface AttachmentLoadMatch {
    card_id: string;
    id: string;
}
export interface AttachmentListMatch {
    card_id: string;
}
export interface AttachmentRemoveMatch {
    card_id: string;
    id: string;
}
export interface Batch {
}
export interface BatchLoadMatch {
}
export interface Board {
    closed?: boolean;
    creationMethod?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    datePluginDisable?: string;
    desc?: string;
    descData?: string;
    enterpriseOwned?: boolean;
    fullName?: string;
    id: string;
    idMemberCreator?: string;
    idOrganization?: string;
    idTags?: string;
    ixUpdate?: number;
    labelNames?: Record<string, any>;
    limits?: Record<string, any>;
    memberships?: string;
    name?: string;
    pinned?: boolean;
    powerUps?: string;
    prefs?: Record<string, any>;
    shortLink?: string;
    shortUrl?: string;
    starred?: boolean;
    subscribed?: boolean;
    templateGallery?: string;
    url?: string;
}
export interface BoardLoadMatch {
    id: string;
}
export interface BoardListMatch {
    member_id: string;
}
export interface BoardCreateData {
    closed?: boolean;
    creationMethod?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    datePluginDisable?: string;
    desc?: string;
    descData?: string;
    enterpriseOwned?: boolean;
    fullName?: string;
    id: string;
    idMemberCreator?: string;
    idOrganization?: string;
    idTags?: string;
    ixUpdate?: number;
    labelNames?: Record<string, any>;
    limits?: Record<string, any>;
    memberships?: string;
    name?: string;
    pinned?: boolean;
    powerUps?: string;
    prefs?: Record<string, any>;
    shortLink?: string;
    shortUrl?: string;
    starred?: boolean;
    subscribed?: boolean;
    templateGallery?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface BoardUpdateData {
    id: string;
    closed?: boolean;
    creationMethod?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    datePluginDisable?: string;
    desc?: string;
    descData?: string;
    enterpriseOwned?: boolean;
    fullName?: string;
    idMemberCreator?: string;
    idOrganization?: string;
    idTags?: string;
    ixUpdate?: number;
    labelNames?: Record<string, any>;
    limits?: Record<string, any>;
    memberships?: string;
    name?: string;
    pinned?: boolean;
    powerUps?: string;
    prefs?: Record<string, any>;
    shortLink?: string;
    shortUrl?: string;
    starred?: boolean;
    subscribed?: boolean;
    templateGallery?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface BoardRemoveMatch {
    id: string;
}
export interface BoardBackground {
    id?: string;
}
export interface BoardBackgroundLoadMatch {
    id?: string;
    member_id: string;
    id_background?: string;
}
export interface BoardBackgroundListMatch {
    member_id: string;
}
export interface BoardBackgroundCreateData {
    member_id: string;
    id?: string;
}
export interface BoardBackgroundUpdateData {
    id?: string;
    member_id: string;
    id_background?: string;
}
export interface BoardBackgroundRemoveMatch {
    id: string;
    member_id: string;
}
export interface BoardPlugin {
}
export interface BoardPluginRemoveMatch {
    board_id: string;
    id: string;
}
export interface BoardStar {
    id?: string;
    idBoard?: string;
    pos?: number;
}
export interface BoardStarLoadMatch {
    id?: string;
    member_id: string;
}
export interface BoardStarListMatch {
    id: string;
}
export interface BoardStarCreateData {
    member_id: string;
    id?: string;
    idBoard?: string;
    pos?: number;
}
export interface BoardStarUpdateData {
    id: string;
    member_id: string;
    idBoard?: string;
    pos?: number;
}
export interface BoardStarRemoveMatch {
    id: string;
    member_id: string;
}
export interface Bulk {
}
export interface BulkLoadMatch {
    enterpris_id: string;
    id: any[];
}
export interface BulkUpdateData {
    id: string;
}
export interface Card {
    address?: string;
    badges?: Record<string, any>;
    cardRole?: string;
    checkItemStates?: any[];
    closed?: boolean;
    coordinates?: string;
    cover?: Record<string, any>;
    creationMethod?: string;
    customFieldItems?: any[];
    dateLastActivity?: string;
    desc?: string;
    descData?: Record<string, any>;
    due?: string;
    dueReminder?: string;
    id?: string;
    idAttachmentCover?: string;
    idBoard?: string;
    idChecklists?: any[];
    idLabels?: any[];
    idList?: string;
    idMembers?: any[];
    idMembersVoted?: any[];
    idShort?: number;
    labels?: any[];
    limits?: Record<string, any>;
    locationName?: string;
    manualCoverAttachment?: boolean;
    mirrorSourceId?: string;
    name?: string;
    pos?: number;
    shortLink?: string;
    shortUrl?: string;
    subscribed?: boolean;
    url?: string;
}
export interface CardLoadMatch {
    id: string;
}
export interface CardListMatch {
    action_id: string;
}
export interface CardCreateData {
    address?: string;
    badges?: Record<string, any>;
    cardRole?: string;
    checkItemStates?: any[];
    closed?: boolean;
    coordinates?: string;
    cover?: Record<string, any>;
    creationMethod?: string;
    customFieldItems?: any[];
    dateLastActivity?: string;
    desc?: string;
    descData?: Record<string, any>;
    due?: string;
    dueReminder?: string;
    id?: string;
    idAttachmentCover?: string;
    idBoard?: string;
    idChecklists?: any[];
    idLabels?: any[];
    idList?: string;
    idMembers?: any[];
    idMembersVoted?: any[];
    idShort?: number;
    labels?: any[];
    limits?: Record<string, any>;
    locationName?: string;
    manualCoverAttachment?: boolean;
    mirrorSourceId?: string;
    name?: string;
    pos?: number;
    shortLink?: string;
    shortUrl?: string;
    subscribed?: boolean;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface CardUpdateData {
    id: string;
    address?: string;
    badges?: Record<string, any>;
    cardRole?: string;
    checkItemStates?: any[];
    closed?: boolean;
    coordinates?: string;
    cover?: Record<string, any>;
    creationMethod?: string;
    customFieldItems?: any[];
    dateLastActivity?: string;
    desc?: string;
    descData?: Record<string, any>;
    due?: string;
    dueReminder?: string;
    idAttachmentCover?: string;
    idBoard?: string;
    idChecklists?: any[];
    idLabels?: any[];
    idList?: string;
    idMembers?: any[];
    idMembersVoted?: any[];
    idShort?: number;
    labels?: any[];
    limits?: Record<string, any>;
    locationName?: string;
    manualCoverAttachment?: boolean;
    mirrorSourceId?: string;
    name?: string;
    pos?: number;
    shortLink?: string;
    shortUrl?: string;
    subscribed?: boolean;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface CardRemoveMatch {
    id: string;
}
export interface CardCheckItemState {
}
export interface CardCheckItemStateLoadMatch {
    id: string;
}
export interface CardList {
}
export interface CardListLoadMatch {
    id: string;
}
export interface CheckItem {
    id?: string;
    idChecklist?: string;
    name?: string;
    nameData?: string;
    pos?: string;
    state?: string;
}
export interface CheckItemLoadMatch {
    card_id: string;
    id: string;
}
export interface CheckItemUpdateData {
    card_id?: string;
    id: string;
    checklist_id?: string;
    id_card?: string;
    idChecklist?: string;
    name?: string;
    nameData?: string;
    pos?: string;
    state?: string;
}
export interface CheckItemRemoveMatch {
    card_id?: string;
    id: string;
    checklist_id?: string;
}
export interface Checklist {
}
export interface ChecklistLoadMatch {
    id: string;
}
export interface ChecklistCreateData {
    $action?: string;
    [action: string]: any;
}
export interface ChecklistUpdateData {
    field?: string;
    id: string;
}
export interface ChecklistRemoveMatch {
    card_id?: string;
    id: string;
}
export interface ClaimableOrganization {
    activeMembershipCount?: number;
    dateLastActive?: string;
    displayName?: string;
    id?: string;
    idActiveAdmins?: any[];
    logoUrl?: string;
    name?: string;
    products?: any[];
}
export interface ClaimableOrganizationListMatch {
    enterpris_id: string;
}
export interface CustomBoardBackground {
}
export interface CustomBoardBackgroundRemoveMatch {
    id: string;
    member_id: string;
}
export interface CustomEmoji {
    id?: string;
    name?: string;
    url?: string;
}
export interface CustomEmojiLoadMatch {
    id: string;
    member_id: string;
}
export interface CustomEmojiListMatch {
    member_id: string;
}
export interface CustomEmojiCreateData {
    member_id: string;
    id?: string;
    name?: string;
    url?: string;
}
export interface CustomField {
    cardFront?: boolean;
    display?: Record<string, any>;
    display_cardFront?: boolean;
    displaycardFront?: boolean;
    fieldGroup?: string;
    id?: string;
    idModel: string;
    modelType: string;
    name?: string;
    options?: any[];
    pos?: string;
    type: string;
}
export interface CustomFieldLoadMatch {
    id: string;
}
export interface CustomFieldListMatch {
    board_id: string;
}
export interface CustomFieldCreateData {
    cardFront?: boolean;
    display?: Record<string, any>;
    display_cardFront?: boolean;
    displaycardFront?: boolean;
    fieldGroup?: string;
    id?: string;
    idModel: string;
    modelType: string;
    name?: string;
    options?: any[];
    pos?: string;
    type: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldUpdateData {
    id: string;
    cardFront?: boolean;
    display?: Record<string, any>;
    display_cardFront?: boolean;
    displaycardFront?: boolean;
    fieldGroup?: string;
    idModel?: string;
    modelType?: string;
    name?: string;
    options?: any[];
    pos?: string;
    type?: string;
    $action?: string;
    [action: string]: any;
}
export interface CustomFieldRemoveMatch {
    id: string;
}
export interface CustomFieldItem {
    id?: string;
    idCustomField?: string;
    idModel?: string;
    modelType?: string;
    value?: Record<string, any>;
}
export interface CustomFieldItemListMatch {
    card_id: string;
}
export interface CustomSticker {
    id?: string;
    scaled?: any[];
    url?: string;
}
export interface CustomStickerLoadMatch {
    id: string;
    member_id: string;
}
export interface CustomStickerListMatch {
    member_id: string;
}
export interface CustomStickerCreateData {
    member_id: string;
    id?: string;
    scaled?: any[];
    url?: string;
}
export interface CustomStickerRemoveMatch {
    id: string;
    member_id: string;
}
export interface EmailPosition {
}
export interface EmailPositionUpdateData {
    board_id: string;
}
export interface Emoji {
    category?: string;
    keywords?: any[];
    name?: string;
    native?: string;
    sheetX?: number;
    sheetY?: number;
    shortName?: string;
    shortNames?: any[];
    text?: string;
    texts?: string;
    tts?: string;
    unified?: string;
}
export interface EmojiListMatch {
    category?: string;
    keywords?: any[];
    name?: string;
    native?: string;
    sheetX?: number;
    sheetY?: number;
    shortName?: string;
    shortNames?: any[];
    text?: string;
    texts?: string;
    tts?: string;
    unified?: string;
}
export interface Enterpris {
    dateOrganizationPrefsLastUpdated?: string;
    displayName?: string;
    domains?: any[];
    enterpriseDomains?: any[];
    id?: string;
    idAdmins?: any[];
    idOrganizations?: any[];
    idp?: Record<string, any>;
    isRealEnterprise?: boolean;
    licenses?: Record<string, any>;
    logoHash?: string;
    logoUrl?: string;
    name?: string;
    organizationPrefs?: Record<string, any>;
    pluginWhitelistingEnabled?: any[];
    prefs?: Record<string, any>;
    products?: any[];
    ssoActivationFailed?: boolean;
}
export interface EnterprisLoadMatch {
    id: string;
}
export interface EnterprisCreateData {
    id: string;
    dateOrganizationPrefsLastUpdated?: string;
    displayName?: string;
    domains?: any[];
    enterpriseDomains?: any[];
    idAdmins?: any[];
    idOrganizations?: any[];
    idp?: Record<string, any>;
    isRealEnterprise?: boolean;
    licenses?: Record<string, any>;
    logoHash?: string;
    logoUrl?: string;
    name?: string;
    organizationPrefs?: Record<string, any>;
    pluginWhitelistingEnabled?: any[];
    prefs?: Record<string, any>;
    products?: any[];
    ssoActivationFailed?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface EnterprisUpdateData {
    id: string;
    dateOrganizationPrefsLastUpdated?: string;
    displayName?: string;
    domains?: any[];
    enterpriseDomains?: any[];
    idAdmins?: any[];
    idOrganizations?: any[];
    idp?: Record<string, any>;
    isRealEnterprise?: boolean;
    licenses?: Record<string, any>;
    logoHash?: string;
    logoUrl?: string;
    name?: string;
    organizationPrefs?: Record<string, any>;
    pluginWhitelistingEnabled?: any[];
    prefs?: Record<string, any>;
    products?: any[];
    ssoActivationFailed?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface EnterprisSignupUrl {
    signupUrl?: string;
}
export interface EnterprisSignupUrlLoadMatch {
    id: string;
}
export interface EnterpriseAdmin {
    fullName?: string;
    id?: string;
    username?: string;
}
export interface EnterpriseAdminLoadMatch {
    enterpris_id: string;
}
export interface EnterpriseAuditLog {
    date?: string;
    idAction?: string;
    member?: Record<string, any>;
    memberCreator?: Record<string, any>;
    organization?: Record<string, any>;
    type?: string;
}
export interface EnterpriseAuditLogListMatch {
    enterpris_id: string;
}
export interface Export {
    attempts?: number;
    exportUrl?: string;
    finished?: boolean;
    id?: string;
    size?: string;
    stage?: string;
    startedAt?: string;
    status?: Record<string, any>;
}
export interface ExportLoadMatch {
    board_id: string;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface ExportListMatch {
    organization_id: string;
}
export interface ExportCreateData {
    board_id: string;
    attempts?: number;
    exportUrl?: string;
    finished?: boolean;
    id?: string;
    size?: string;
    stage?: string;
    startedAt?: string;
    status?: Record<string, any>;
}
export interface ExportRemoveMatch {
    board_id: string;
    id: string;
}
export interface ExportDownload {
}
export interface ExportDownloadLoadMatch {
    board_id: string;
    id_export: string;
}
export interface Generate {
}
export interface GenerateCreateData {
    board_id: string;
}
export interface IdEmailList {
}
export interface IdEmailListUpdateData {
    board_id: string;
}
export interface IdLabel {
}
export interface IdLabelRemoveMatch {
    card_id: string;
    id: string;
}
export interface IdMember {
}
export interface IdMemberRemoveMatch {
    card_id: string;
    id: string;
}
export interface Label {
}
export interface LabelLoadMatch {
    id: string;
}
export interface LabelCreateData {
}
export interface LabelUpdateData {
    id: string;
    field?: string;
}
export interface LabelRemoveMatch {
    id: string;
}
export interface List {
}
export interface ListLoadMatch {
    board_id?: string;
    id: string;
}
export interface ListCreateData {
    $action?: string;
    [action: string]: any;
}
export interface ListUpdateData {
    id: string;
    field?: string;
    $action?: string;
    [action: string]: any;
}
export interface Member {
    aaEmail?: string;
    aaEnrolledDate?: string;
    aaId?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarSource?: string;
    avatarUrl?: string;
    bio?: string;
    bioData?: Record<string, any>;
    confirmed?: boolean;
    email?: string;
    fullName?: string;
    gravatarHash?: string;
    id?: string;
    idBoards?: any[];
    idBoardsPinned?: any[];
    idEnterprise?: string;
    idEnterprisesAdmin?: any[];
    idEnterprisesDeactivated?: any[];
    idMemberReferrer?: string;
    idOrganizations?: any[];
    idPremOrgsAdmin?: any[];
    initials?: string;
    isAaMastered?: boolean;
    ixUpdate?: number;
    limits?: Record<string, any>;
    loginTypes?: any[];
    marketingOptIn?: Record<string, any>;
    memberType?: string;
    messagesDismissed?: Record<string, any>;
    nonPublic?: Record<string, any>;
    nonPublicAvailable?: boolean;
    oneTimeMessagesDismissed?: any[];
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    products?: any[];
    status?: string;
    trophies?: any[];
    uploadedAvatarHash?: string;
    uploadedAvatarUrl?: string;
    url?: string;
    username?: string;
}
export interface MemberLoadMatch {
    id: string;
}
export interface MemberListMatch {
    aaEmail?: string;
    aaEnrolledDate?: string;
    aaId?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarSource?: string;
    avatarUrl?: string;
    bio?: string;
    bioData?: Record<string, any>;
    confirmed?: boolean;
    email?: string;
    fullName?: string;
    gravatarHash?: string;
    id?: string;
    idBoards?: any[];
    idBoardsPinned?: any[];
    idEnterprise?: string;
    idEnterprisesAdmin?: any[];
    idEnterprisesDeactivated?: any[];
    idMemberReferrer?: string;
    idOrganizations?: any[];
    idPremOrgsAdmin?: any[];
    initials?: string;
    isAaMastered?: boolean;
    ixUpdate?: number;
    limits?: Record<string, any>;
    loginTypes?: any[];
    marketingOptIn?: Record<string, any>;
    memberType?: string;
    messagesDismissed?: Record<string, any>;
    nonPublic?: Record<string, any>;
    nonPublicAvailable?: boolean;
    oneTimeMessagesDismissed?: any[];
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    products?: any[];
    status?: string;
    trophies?: any[];
    uploadedAvatarHash?: string;
    uploadedAvatarUrl?: string;
    url?: string;
    username?: string;
}
export interface MemberCreateData {
    id: string;
    aaEmail?: string;
    aaEnrolledDate?: string;
    aaId?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarSource?: string;
    avatarUrl?: string;
    bio?: string;
    bioData?: Record<string, any>;
    confirmed?: boolean;
    email?: string;
    fullName?: string;
    gravatarHash?: string;
    idBoards?: any[];
    idBoardsPinned?: any[];
    idEnterprise?: string;
    idEnterprisesAdmin?: any[];
    idEnterprisesDeactivated?: any[];
    idMemberReferrer?: string;
    idOrganizations?: any[];
    idPremOrgsAdmin?: any[];
    initials?: string;
    isAaMastered?: boolean;
    ixUpdate?: number;
    limits?: Record<string, any>;
    loginTypes?: any[];
    marketingOptIn?: Record<string, any>;
    memberType?: string;
    messagesDismissed?: Record<string, any>;
    nonPublic?: Record<string, any>;
    nonPublicAvailable?: boolean;
    oneTimeMessagesDismissed?: any[];
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    products?: any[];
    status?: string;
    trophies?: any[];
    uploadedAvatarHash?: string;
    uploadedAvatarUrl?: string;
    url?: string;
    username?: string;
    $action?: string;
    [action: string]: any;
}
export interface MemberUpdateData {
    id: string;
    board_id?: string;
    organization_id?: string;
    aaEmail?: string;
    aaEnrolledDate?: string;
    aaId?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarSource?: string;
    avatarUrl?: string;
    bio?: string;
    bioData?: Record<string, any>;
    confirmed?: boolean;
    email?: string;
    fullName?: string;
    gravatarHash?: string;
    idBoards?: any[];
    idBoardsPinned?: any[];
    idEnterprise?: string;
    idEnterprisesAdmin?: any[];
    idEnterprisesDeactivated?: any[];
    idMemberReferrer?: string;
    idOrganizations?: any[];
    idPremOrgsAdmin?: any[];
    initials?: string;
    isAaMastered?: boolean;
    ixUpdate?: number;
    limits?: Record<string, any>;
    loginTypes?: any[];
    marketingOptIn?: Record<string, any>;
    memberType?: string;
    messagesDismissed?: Record<string, any>;
    nonPublic?: Record<string, any>;
    nonPublicAvailable?: boolean;
    oneTimeMessagesDismissed?: any[];
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    products?: any[];
    status?: string;
    trophies?: any[];
    uploadedAvatarHash?: string;
    uploadedAvatarUrl?: string;
    url?: string;
    username?: string;
    $action?: string;
    [action: string]: any;
}
export interface MemberRemoveMatch {
    board_id?: string;
    id: string;
    organization_id?: string;
    $action?: string;
    [action: string]: any;
}
export interface MemberPrivacy {
}
export interface MemberPrivacyLoadMatch {
    plugin_id: string;
}
export interface MembersVoted {
}
export interface MembersVotedLoadMatch {
    card_id: string;
}
export interface MembersVotedRemoveMatch {
    card_id: string;
    id: string;
}
export interface Membership {
    admin?: boolean;
    collaborator?: boolean;
    deactivated?: boolean;
    id?: string;
    licensed?: boolean;
    managed?: boolean;
    member?: Record<string, any>;
}
export interface MembershipLoadMatch {
    id: string;
    organization_id: string;
}
export interface MembershipListMatch {
    organization_id: string;
}
export interface MembershipUpdateData {
    board_id: string;
    id: string;
    admin?: boolean;
    collaborator?: boolean;
    deactivated?: boolean;
    licensed?: boolean;
    managed?: boolean;
    member?: Record<string, any>;
}
export interface MostRecent {
}
export interface NewBillableGuest {
}
export interface NewBillableGuestLoadMatch {
    id: string;
    organization_id: string;
}
export interface Notification {
    board: Record<string, any>;
    card?: Record<string, any>;
    data?: string;
    date?: string;
    dateRead?: string;
    id?: string;
    idAction?: string;
    idMemberCreator?: string;
    reactions?: any[];
    type?: string;
    unread?: boolean;
}
export interface NotificationLoadMatch {
    id: string;
    field?: string;
}
export interface NotificationListMatch {
    member_id: string;
}
export interface NotificationUpdateData {
    id: string;
    board?: Record<string, any>;
    card?: Record<string, any>;
    data?: string;
    date?: string;
    dateRead?: string;
    idAction?: string;
    idMemberCreator?: string;
    reactions?: any[];
    type?: string;
    unread?: boolean;
    $action?: string;
    [action: string]: any;
}
export interface NotificationChannelSetting {
    blockedKeys?: any[];
    channel?: string;
    id?: string;
    idMember?: string;
}
export interface NotificationChannelSettingLoadMatch {
    channel: string;
    member_id: string;
}
export interface NotificationChannelSettingListMatch {
    member_id: string;
}
export interface NotificationChannelSettingUpdateData {
    channel: string;
    member_id: string;
    blockedKeys?: any[];
    id?: string;
    idMember?: string;
}
export interface NotificationList {
}
export interface NotificationListLoadMatch {
    id: string;
}
export interface NotificationMemberCreator {
}
export interface NotificationMemberCreatorLoadMatch {
    id: string;
}
export interface NotificationsChannelSetting {
}
export interface Option {
}
export interface OptionLoadMatch {
    custom_field_id: string;
    id?: string;
}
export interface OptionRemoveMatch {
    custom_field_id: string;
    id: string;
}
export interface OrgInviteRestrict {
}
export interface OrgInviteRestrictRemoveMatch {
    organization_id: string;
}
export interface Organization {
    dateLastActivity?: string;
    displayName?: string;
    id?: string;
    idBoards?: any[];
    idEnterprise?: string;
    memberships?: any[];
    name?: string;
    offering?: string;
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    url?: string;
}
export interface OrganizationLoadMatch {
    id: string;
}
export interface OrganizationListMatch {
    enterpris_id: string;
}
export interface OrganizationCreateData {
    dateLastActivity?: string;
    displayName?: string;
    id?: string;
    idBoards?: any[];
    idEnterprise?: string;
    memberships?: any[];
    name?: string;
    offering?: string;
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationUpdateData {
    id: string;
    dateLastActivity?: string;
    displayName?: string;
    idBoards?: any[];
    idEnterprise?: string;
    memberships?: any[];
    name?: string;
    offering?: string;
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationRemoveMatch {
    enterpris_id?: string;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface PendingOrganization {
    date?: string;
    displayName?: string;
    id?: string;
    idMember?: string;
    logoUrl?: string;
    memberRequestor?: Record<string, any>;
    membershipCount?: number;
    transferability?: Record<string, any>;
}
export interface PendingOrganizationListMatch {
    enterpris_id: string;
}
export interface Plugin {
    id?: string;
}
export interface PluginLoadMatch {
    id: string;
}
export interface PluginListMatch {
    board_id: string;
}
export interface PluginUpdateData {
    id: string;
}
export interface PluginData {
}
export interface PluginDataLoadMatch {
    card_id: string;
}
export interface PluginDataListMatch {
    organization_id: string;
}
export interface PluginListing {
    description?: string;
    id?: string;
    locale?: string;
    name?: string;
    overview?: string;
}
export interface PluginListingCreateData {
    id_plugin: string;
    description?: string;
    id?: string;
    locale?: string;
    name?: string;
    overview?: string;
}
export interface PluginListingUpdateData {
    id: string;
    id_plugin: string;
    description?: string;
    locale?: string;
    name?: string;
    overview?: string;
}
export interface Reaction {
}
export interface ReactionLoadMatch {
    id?: string;
    id_action: string;
}
export interface ReactionRemoveMatch {
    id: string;
    id_action: string;
}
export interface Read {
}
export interface ReadCreateData {
}
export interface SavedSearch {
    id?: string;
    name?: string;
    pos?: any;
    query?: string;
}
export interface SavedSearchLoadMatch {
    id: string;
    member_id: string;
}
export interface SavedSearchListMatch {
    member_id: string;
}
export interface SavedSearchCreateData {
    member_id: string;
    id?: string;
    name?: string;
    pos?: any;
    query?: string;
}
export interface SavedSearchUpdateData {
    id: string;
    member_id: string;
    name?: string;
    pos?: any;
    query?: string;
}
export interface SavedSearchRemoveMatch {
    id: string;
    member_id: string;
}
export interface Search {
}
export interface SearchListMatch {
}
export interface ShowSidebar {
}
export interface ShowSidebarUpdateData {
    board_id: string;
}
export interface ShowSidebarActivity {
}
export interface ShowSidebarActivityUpdateData {
    board_id: string;
}
export interface ShowSidebarBoardAction {
}
export interface ShowSidebarBoardActionUpdateData {
    board_id: string;
}
export interface ShowSidebarMember {
}
export interface ShowSidebarMemberUpdateData {
    board_id: string;
}
export interface Sticker {
}
export interface StickerLoadMatch {
    card_id: string;
    id?: string;
}
export interface StickerUpdateData {
    card_id: string;
    id: string;
}
export interface StickerRemoveMatch {
    card_id: string;
    id: string;
}
export interface Tag {
}
export interface TagListMatch {
    organization_id: string;
}
export interface TagRemoveMatch {
    id: string;
    organization_id: string;
}
export interface Token {
    dateCreated?: string;
    dateExpires?: string;
    id?: string;
    idMember?: string;
    identifier?: string;
    permissions?: any[];
}
export interface TokenLoadMatch {
    id: string;
}
export interface TokenListMatch {
    member_id: string;
}
export interface TokenRemoveMatch {
    id: string;
}
export interface TransferrableOrganization {
    newBillableMembers?: any[];
    restrictedMembers?: any[];
    transferrable?: boolean;
}
export interface TransferrableOrganizationLoadMatch {
    enterpris_id: string;
    id: string;
}
export interface TrelloList {
    attachments?: Record<string, any>;
    closed?: boolean;
    id?: string;
    idBoard?: string;
    limits?: Record<string, any>;
    name?: string;
    pos?: number;
    softLimit?: string;
    subscribed?: boolean;
}
export interface TrelloListLoadMatch {
    action_id: string;
}
export interface TrelloListListMatch {
    board_id: string;
}
export interface TrelloListCreateData {
    board_id: string;
    attachments?: Record<string, any>;
    closed?: boolean;
    id?: string;
    idBoard?: string;
    limits?: Record<string, any>;
    name?: string;
    pos?: number;
    softLimit?: string;
    subscribed?: boolean;
}
export interface Webhook {
    active?: boolean;
    callbackURL?: string;
    consecutiveFailures?: number;
    description?: string;
    firstConsecutiveFailDate?: string;
    id?: string;
    idModel?: string;
}
export interface WebhookLoadMatch {
    field?: string;
    id: string;
    token_id?: string;
}
export interface WebhookListMatch {
    token_id: string;
}
export interface WebhookCreateData {
    active?: boolean;
    callbackURL?: string;
    consecutiveFailures?: number;
    description?: string;
    firstConsecutiveFailDate?: string;
    id?: string;
    idModel?: string;
}
export interface WebhookUpdateData {
    id: string;
    token_id?: string;
    active?: boolean;
    callbackURL?: string;
    consecutiveFailures?: number;
    description?: string;
    firstConsecutiveFailDate?: string;
    idModel?: string;
}
export interface WebhookRemoveMatch {
    id: string;
    token_id?: string;
}
