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
    display?: boolean;
    entity?: boolean;
    field?: string;
    member?: boolean;
    member_creator?: boolean;
    member_creator_field?: string;
    member_field?: string;
}
export interface ActionListMatch {
    card_id: string;
    filter?: string;
    page?: number;
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
    text: string;
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
    id?: string;
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
    id?: string;
}
export interface AttachmentLoadMatch {
    card_id: string;
    id: string;
    field?: any[];
}
export interface AttachmentListMatch {
    card_id: string;
    field?: string;
    filter?: string;
}
export interface AttachmentRemoveMatch {
    card_id: string;
    id: string;
}
export interface Batch {
}
export interface BatchLoadMatch {
    url: string;
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
    action?: string;
    board_star?: string;
    card?: string;
    card_plugin_data?: boolean;
    checklist?: string;
    custom_field?: boolean;
    field?: string;
    label?: string;
    list?: string;
    member?: string;
    membership?: string;
    my_pref?: boolean;
    organization?: boolean;
    organization_plugin_data?: boolean;
    plugin_data?: boolean;
    tag?: boolean;
}
export interface BoardListMatch {
    member_id: string;
    field?: string;
    filter?: string;
    list?: string;
    organization?: boolean;
    organization_field?: string;
}
export interface BoardCreateData {
    default_label?: boolean;
    default_list?: boolean;
    desc?: string;
    id_board_source?: string;
    id_organization?: string;
    keep_from_source?: string;
    name: string;
    power_up?: string;
    prefs_background?: string;
    prefs_card_aging?: string;
    prefs_card_cover?: boolean;
    prefs_comment?: string;
    prefs_invitation?: string;
    prefs_permission_level?: string;
    prefs_self_join?: boolean;
    prefs_voting?: string;
    closed?: boolean;
    creationMethod?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    datePluginDisable?: string;
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
    desc?: string;
    id_organization?: string;
    name?: string;
    "prefs/background"?: string;
    "prefs/calendar_feed_enabled"?: boolean;
    "prefs/card_aging"?: string;
    "prefs/card_cover"?: boolean;
    "prefs/comment"?: string;
    "prefs/hide_vote"?: boolean;
    "prefs/invitation"?: string;
    "prefs/permission_level"?: string;
    "prefs/self_join"?: boolean;
    "prefs/voting"?: string;
    subscribed?: string;
    creationMethod?: string;
    dateLastActivity?: string;
    dateLastView?: string;
    datePluginDisable?: string;
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
    pinned?: boolean;
    powerUps?: string;
    prefs?: Record<string, any>;
    shortLink?: string;
    shortUrl?: string;
    starred?: boolean;
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
    field?: string;
    id_background?: string;
}
export interface BoardBackgroundListMatch {
    member_id: string;
    filter?: string;
}
export interface BoardBackgroundCreateData {
    member_id: string;
    file: string;
    id?: string;
}
export interface BoardBackgroundUpdateData {
    id?: string;
    member_id: string;
    brightness?: string;
    tile?: boolean;
    id_background?: string;
}
export interface BoardBackgroundRemoveMatch {
    id: string;
    member_id: string;
}
export interface BoardPlugin {
    id?: string;
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
    filter?: string;
}
export interface BoardStarCreateData {
    member_id: string;
    id_board: string;
    pos: any;
    id?: string;
    idBoard?: string;
}
export interface BoardStarUpdateData {
    id: string;
    member_id: string;
    pos?: any;
    idBoard?: string;
}
export interface BoardStarRemoveMatch {
    id: string;
    member_id: string;
}
export interface Bulk {
    id?: string;
}
export interface BulkLoadMatch {
    enterpris_id: string;
    id: any[];
}
export interface BulkUpdateData {
    id: string;
    id_organization: any[];
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
    action?: string;
    attachment?: string;
    attachment_field?: string;
    board?: boolean;
    board_field?: string;
    check_item_state?: boolean;
    checklist?: string;
    checklist_field?: string;
    custom_field_item?: boolean;
    field?: string;
    list?: boolean;
    member?: boolean;
    member_field?: string;
    member_voted_field?: string;
    members_voted?: boolean;
    plugin_data?: boolean;
    sticker?: boolean;
    sticker_field?: string;
}
export interface CardListMatch {
    action_id: string;
    field?: string;
}
export interface CardCreateData {
    address?: string;
    card_role?: string;
    coordinate?: string;
    desc?: string;
    due?: string;
    due_complete?: boolean;
    file_source?: string;
    id_card_source?: string;
    id_label?: any[];
    id_list: string;
    id_member?: any[];
    keep_from_source?: string;
    location_name?: string;
    mime_type?: string;
    name?: string;
    pos?: any;
    start?: string;
    url_source?: string;
    badges?: Record<string, any>;
    cardRole?: string;
    checkItemStates?: any[];
    closed?: boolean;
    coordinates?: string;
    cover?: Record<string, any>;
    creationMethod?: string;
    customFieldItems?: any[];
    dateLastActivity?: string;
    descData?: Record<string, any>;
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
    closed?: boolean;
    coordinate?: string;
    cover?: Record<string, any>;
    desc?: string;
    due?: string;
    due_complete?: boolean;
    id_attachment_cover?: string;
    id_board?: string;
    id_label?: string;
    id_list?: string;
    id_member?: string;
    location_name?: string;
    name?: string;
    pos?: any;
    start?: string;
    subscribed?: boolean;
    badges?: Record<string, any>;
    cardRole?: string;
    checkItemStates?: any[];
    coordinates?: string;
    creationMethod?: string;
    customFieldItems?: any[];
    dateLastActivity?: string;
    descData?: Record<string, any>;
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
    shortLink?: string;
    shortUrl?: string;
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface CardRemoveMatch {
    id: string;
}
export interface CardCheckItemState {
    id?: string;
}
export interface CardCheckItemStateLoadMatch {
    id: string;
    field?: string;
}
export interface CardList {
    id?: string;
}
export interface CardListLoadMatch {
    id: string;
    field?: string;
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
    field?: string;
}
export interface CheckItemUpdateData {
    card_id?: string;
    id: string;
    due?: string;
    due_reminder?: number;
    id_checklist?: string;
    id_member?: string;
    name?: string;
    pos?: any;
    state?: string;
    checklist_id?: string;
    id_card?: string;
    idChecklist?: string;
    nameData?: string;
}
export interface CheckItemRemoveMatch {
    card_id?: string;
    id: string;
    checklist_id?: string;
}
export interface Checklist {
    id?: string;
}
export interface ChecklistLoadMatch {
    id: string;
    card?: string;
    check_item?: string;
    check_item_field?: string;
    field?: string;
}
export interface ChecklistCreateData {
    id_card: string;
    id_checklist_source?: string;
    name?: string;
    pos?: any;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface ChecklistUpdateData {
    field?: string;
    id: string;
    value?: any;
    name?: string;
    pos?: any;
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
    active_since?: string;
    cursor?: string;
    inactive_since?: string;
    limit?: number;
    name?: string;
}
export interface CustomBoardBackground {
    id?: string;
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
    field?: string;
}
export interface CustomEmojiListMatch {
    member_id: string;
}
export interface CustomEmojiCreateData {
    member_id: string;
    file: string;
    name: string;
    id?: string;
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
    field?: string;
}
export interface CustomStickerListMatch {
    member_id: string;
}
export interface CustomStickerCreateData {
    member_id: string;
    file: string;
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
    value: string;
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
    locale?: string;
    spritesheet?: boolean;
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
    field?: string;
    member?: string;
    member_count?: number;
    member_field?: string;
    member_filter?: string;
    member_sort?: string;
    member_sort_by?: string;
    member_sort_order?: string;
    member_start_index?: number;
    organization?: string;
    organization_field?: string;
    organization_membership?: string;
    organization_paid_account?: boolean;
}
export interface EnterprisCreateData {
    id: string;
    expiration?: string;
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
    id_organization: string;
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
    id?: string;
    signupUrl?: string;
}
export interface EnterprisSignupUrlLoadMatch {
    id: string;
    authenticate?: boolean;
    confirmation_accepted?: boolean;
    return_url?: string;
    tos_accepted?: boolean;
}
export interface EnterpriseAdmin {
    fullName?: string;
    id?: string;
    username?: string;
}
export interface EnterpriseAdminLoadMatch {
    enterpris_id: string;
    field?: string;
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
    attachment?: boolean;
    attachment_age?: number;
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
    value: string;
}
export interface IdLabel {
    id?: string;
}
export interface IdLabelRemoveMatch {
    card_id: string;
    id: string;
}
export interface IdMember {
    id?: string;
}
export interface IdMemberRemoveMatch {
    card_id: string;
    id: string;
}
export interface Label {
    id?: string;
}
export interface LabelLoadMatch {
    id: string;
    field?: string;
}
export interface LabelCreateData {
    color: string;
    id_board: string;
    name: string;
    id?: string;
}
export interface LabelUpdateData {
    id: string;
    color?: string;
    name?: string;
    field?: string;
    value?: string;
}
export interface LabelRemoveMatch {
    id: string;
}
export interface List {
    id?: string;
}
export interface ListLoadMatch {
    board_id?: string;
    id: string;
    field?: string;
}
export interface ListCreateData {
    id_board: string;
    id_list_source?: string;
    name: string;
    pos?: any;
    id?: string;
    $action?: string;
    [action: string]: any;
}
export interface ListUpdateData {
    id: string;
    closed?: boolean;
    id_board?: string;
    name?: string;
    pos?: any;
    subscribed?: boolean;
    field?: string;
    value?: any;
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
    action?: string;
    board?: string;
    board_background?: string;
    board_star?: boolean;
    boards_invited?: string;
    boards_invited_field?: string;
    card?: string;
    custom_board_background?: string;
    custom_emoji?: string;
    custom_sticker?: string;
    field?: string;
    notification?: string;
    organization?: string;
    organization_field?: string;
    organization_paid_account?: boolean;
    organizations_invited?: string;
    organizations_invited_field?: string;
    paid_account?: boolean;
    saved_search?: boolean;
    token?: string;
}
export interface MemberListMatch {
    id_board?: string;
    id_organization?: string;
    limit?: number;
    only_org_member?: boolean;
    query: string;
}
export interface MemberCreateData {
    id: string;
    file?: string;
    value?: string;
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
    avatar_source?: string;
    bio?: string;
    full_name?: string;
    initial?: string;
    "prefs/color_blind"?: boolean;
    "prefs/locale"?: string;
    "prefs/minutes_between_summary"?: number;
    username?: string;
    board_id?: string;
    allow_billable_guest?: boolean;
    type?: string;
    organization_id?: string;
    aaEmail?: string;
    aaEnrolledDate?: string;
    aaId?: string;
    activityBlocked?: boolean;
    avatarHash?: string;
    avatarSource?: string;
    avatarUrl?: string;
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
    id?: string;
}
export interface MembersVotedLoadMatch {
    card_id: string;
    field?: string;
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
    member?: boolean;
}
export interface MembershipListMatch {
    organization_id: string;
    filter?: string;
    member?: boolean;
}
export interface MembershipUpdateData {
    board_id: string;
    id: string;
    member_field?: string;
    type: string;
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
    id?: string;
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
    board?: boolean;
    board_field?: string;
    card?: boolean;
    card_field?: string;
    display?: boolean;
    entity?: boolean;
    field?: string;
    list?: boolean;
    member?: boolean;
    member_creator?: boolean;
    member_creator_field?: string;
    member_field?: string;
    organization?: boolean;
    organization_field?: string;
}
export interface NotificationListMatch {
    member_id: string;
    before?: string;
    display?: boolean;
    entity?: boolean;
    field?: string;
    filter?: string;
    limit?: number;
    member_creator?: boolean;
    member_creator_field?: string;
    page?: number;
    read_filter?: string;
    since?: string;
}
export interface NotificationUpdateData {
    id: string;
    unread?: boolean;
    board?: Record<string, any>;
    card?: Record<string, any>;
    data?: string;
    date?: string;
    dateRead?: string;
    idAction?: string;
    idMemberCreator?: string;
    reactions?: any[];
    type?: string;
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
    id?: string;
}
export interface NotificationListLoadMatch {
    id: string;
    field?: string;
}
export interface NotificationMemberCreator {
    id?: string;
}
export interface NotificationMemberCreatorLoadMatch {
    id: string;
    field?: string;
}
export interface NotificationsChannelSetting {
}
export interface Option {
    id?: string;
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
    count?: number;
    field?: string;
    filter?: string;
    start_index?: number;
}
export interface OrganizationCreateData {
    desc?: string;
    display_name: string;
    name?: string;
    website?: string;
    dateLastActivity?: string;
    displayName?: string;
    id?: string;
    idBoards?: any[];
    idEnterprise?: string;
    memberships?: any[];
    offering?: string;
    prefs?: Record<string, any>;
    premiumFeatures?: any[];
    url?: string;
    $action?: string;
    [action: string]: any;
}
export interface OrganizationUpdateData {
    id: string;
    desc?: string;
    display_name?: string;
    name?: string;
    "prefs/associated_domain"?: string;
    "prefs/board_visibility_restrict/org"?: string;
    "prefs/board_visibility_restrict/private"?: string;
    "prefs/board_visibility_restrict/public"?: string;
    "prefs/external_members_disabled"?: boolean;
    "prefs/google_apps_version"?: number;
    "prefs/org_invite_restrict"?: string;
    "prefs/permission_level"?: string;
    website?: string;
    dateLastActivity?: string;
    displayName?: string;
    idBoards?: any[];
    idEnterprise?: string;
    memberships?: any[];
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
    active_since?: string;
    inactive_since?: string;
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
    id?: string;
}
export interface ReactionLoadMatch {
    id?: string;
    id_action: string;
    emoji?: boolean;
    member?: boolean;
}
export interface ReactionRemoveMatch {
    id: string;
    id_action: string;
}
export interface Read {
}
export interface ReadCreateData {
    ids?: any[];
    read?: boolean;
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
    name: string;
    pos: any;
    query: string;
    id?: string;
}
export interface SavedSearchUpdateData {
    id: string;
    member_id: string;
    name?: string;
    pos?: string;
    query?: string;
}
export interface SavedSearchRemoveMatch {
    id: string;
    member_id: string;
}
export interface Search {
}
export interface SearchListMatch {
    board_field?: string;
    board_organization?: boolean;
    boards_limit?: number;
    card_attachment?: string;
    card_board?: boolean;
    card_field?: string;
    card_list?: boolean;
    card_member?: boolean;
    card_sticker?: boolean;
    cards_limit?: number;
    cards_page?: number;
    id_board?: any;
    id_card?: string;
    id_organization?: string;
    member_field?: string;
    members_limit?: number;
    model_type?: string;
    organization_field?: string;
    organizations_limit?: number;
    partial?: boolean;
    query: string;
}
export interface ShowSidebar {
}
export interface ShowSidebarUpdateData {
    board_id: string;
    value: boolean;
}
export interface ShowSidebarActivity {
}
export interface ShowSidebarActivityUpdateData {
    board_id: string;
    value: boolean;
}
export interface ShowSidebarBoardAction {
}
export interface ShowSidebarBoardActionUpdateData {
    board_id: string;
    value: boolean;
}
export interface ShowSidebarMember {
}
export interface ShowSidebarMemberUpdateData {
    board_id: string;
    value: boolean;
}
export interface Sticker {
    id?: string;
}
export interface StickerLoadMatch {
    card_id: string;
    id?: string;
    field?: string;
}
export interface StickerUpdateData {
    card_id: string;
    id: string;
    left: number;
    rotate?: number;
    top: number;
    z_index: number;
}
export interface StickerRemoveMatch {
    card_id: string;
    id: string;
}
export interface Tag {
    id?: string;
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
    field?: string;
    webhook?: boolean;
}
export interface TokenListMatch {
    member_id: string;
    webhook?: boolean;
}
export interface TokenRemoveMatch {
    id: string;
}
export interface TransferrableOrganization {
    id?: string;
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
    field?: string;
}
export interface TrelloListListMatch {
    board_id: string;
    card?: string;
    card_field?: string;
    field?: string;
    filter?: string;
}
export interface TrelloListCreateData {
    board_id: string;
    name: string;
    pos?: string;
    attachments?: Record<string, any>;
    closed?: boolean;
    id?: string;
    idBoard?: string;
    limits?: Record<string, any>;
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
    callback_url: string;
    description?: string;
    id_model: string;
    token_id?: string;
    callbackURL?: string;
    consecutiveFailures?: number;
    firstConsecutiveFailDate?: string;
    id?: string;
    idModel?: string;
}
export interface WebhookUpdateData {
    id: string;
    active?: boolean;
    callback_url?: string;
    description?: string;
    id_model?: string;
    token_id?: string;
    callbackURL?: string;
    consecutiveFailures?: number;
    firstConsecutiveFailDate?: string;
    idModel?: string;
}
export interface WebhookRemoveMatch {
    id: string;
    token_id?: string;
}
