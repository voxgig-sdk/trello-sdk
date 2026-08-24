<?php
declare(strict_types=1);

// Typed models for the Trello SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Action entity data model. */
class Action
{
    public ?array $data = null;
    public ?string $date = null;
    public ?array $display = null;
    public ?string $id = null;
    public ?string $idMemberCreator = null;
    public ?array $limits = null;
    public ?array $memberCreator = null;
    public ?string $native = null;
    public ?string $shortName = null;
    public ?string $skinVariation = null;
    public ?string $type = null;
    public ?string $unified = null;
}

/** Request payload for Action#load. */
class ActionLoadMatch
{
    public string $id;
}

/** Request payload for Action#list. */
class ActionListMatch
{
    public string $card_id;
}

/** Request payload for Action#create. */
class ActionCreateData
{
    public string $id_action;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $display = null;
    public ?string $id = null;
    public ?string $idMemberCreator = null;
    public ?array $limits = null;
    public ?array $memberCreator = null;
    public ?string $native = null;
    public ?string $shortName = null;
    public ?string $skinVariation = null;
    public ?string $type = null;
    public ?string $unified = null;
}

/** Request payload for Action#update. */
class ActionUpdateData
{
    public string $id;
    public ?array $data = null;
    public ?string $date = null;
    public ?array $display = null;
    public ?string $idMemberCreator = null;
    public ?array $limits = null;
    public ?array $memberCreator = null;
    public ?string $native = null;
    public ?string $shortName = null;
    public ?string $skinVariation = null;
    public ?string $type = null;
    public ?string $unified = null;
}

/** Request payload for Action#remove. */
class ActionRemoveMatch
{
    public string $id;
}

/** ActionReactionsSummary entity data model. */
class ActionReactionsSummary
{
}

/** Request payload for ActionReactionsSummary#load. */
class ActionReactionsSummaryLoadMatch
{
    public string $id_action;
}

/** Admin entity data model. */
class Admin
{
}

/** Request payload for Admin#update. */
class AdminUpdateData
{
    public string $enterpris_id;
    public string $id;
}

/** Request payload for Admin#remove. */
class AdminRemoveMatch
{
    public string $enterpris_id;
    public string $id;
}

/** Application entity data model. */
class Application
{
}

/** ApplicationCompliance entity data model. */
class ApplicationCompliance
{
}

/** Request payload for ApplicationCompliance#load. */
class ApplicationComplianceLoadMatch
{
    public string $key;
}

/** AssociatedDomain entity data model. */
class AssociatedDomain
{
}

/** Request payload for AssociatedDomain#remove. */
class AssociatedDomainRemoveMatch
{
    public string $organization_id;
}

/** Attachment entity data model. */
class Attachment
{
}

/** Request payload for Attachment#load. */
class AttachmentLoadMatch
{
    public string $card_id;
    public string $id;
}

/** Request payload for Attachment#list. */
class AttachmentListMatch
{
    public string $card_id;
}

/** Request payload for Attachment#remove. */
class AttachmentRemoveMatch
{
    public string $card_id;
    public string $id;
}

/** Batch entity data model. */
class Batch
{
}

/** Request payload for Batch#load. */
class BatchLoadMatch
{
}

/** Board entity data model. */
class Board
{
    public ?bool $closed = null;
    public ?string $creationMethod = null;
    public ?string $dateLastActivity = null;
    public ?string $dateLastView = null;
    public ?string $datePluginDisable = null;
    public ?string $desc = null;
    public ?string $descData = null;
    public ?bool $enterpriseOwned = null;
    public ?string $fullName = null;
    public string $id;
    public ?string $idMemberCreator = null;
    public ?string $idOrganization = null;
    public ?string $idTags = null;
    public ?int $ixUpdate = null;
    public ?array $labelNames = null;
    public ?array $limits = null;
    public ?string $memberships = null;
    public ?string $name = null;
    public ?bool $pinned = null;
    public ?string $powerUps = null;
    public ?array $prefs = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $starred = null;
    public ?bool $subscribed = null;
    public ?string $templateGallery = null;
    public ?string $url = null;
}

/** Request payload for Board#load. */
class BoardLoadMatch
{
    public string $id;
}

/** Request payload for Board#list. */
class BoardListMatch
{
    public string $member_id;
}

/** Request payload for Board#create. */
class BoardCreateData
{
    public ?bool $closed = null;
    public ?string $creationMethod = null;
    public ?string $dateLastActivity = null;
    public ?string $dateLastView = null;
    public ?string $datePluginDisable = null;
    public ?string $desc = null;
    public ?string $descData = null;
    public ?bool $enterpriseOwned = null;
    public ?string $fullName = null;
    public string $id;
    public ?string $idMemberCreator = null;
    public ?string $idOrganization = null;
    public ?string $idTags = null;
    public ?int $ixUpdate = null;
    public ?array $labelNames = null;
    public ?array $limits = null;
    public ?string $memberships = null;
    public ?string $name = null;
    public ?bool $pinned = null;
    public ?string $powerUps = null;
    public ?array $prefs = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $starred = null;
    public ?bool $subscribed = null;
    public ?string $templateGallery = null;
    public ?string $url = null;
}

/** Request payload for Board#update. */
class BoardUpdateData
{
    public string $id;
    public ?bool $closed = null;
    public ?string $creationMethod = null;
    public ?string $dateLastActivity = null;
    public ?string $dateLastView = null;
    public ?string $datePluginDisable = null;
    public ?string $desc = null;
    public ?string $descData = null;
    public ?bool $enterpriseOwned = null;
    public ?string $fullName = null;
    public ?string $idMemberCreator = null;
    public ?string $idOrganization = null;
    public ?string $idTags = null;
    public ?int $ixUpdate = null;
    public ?array $labelNames = null;
    public ?array $limits = null;
    public ?string $memberships = null;
    public ?string $name = null;
    public ?bool $pinned = null;
    public ?string $powerUps = null;
    public ?array $prefs = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $starred = null;
    public ?bool $subscribed = null;
    public ?string $templateGallery = null;
    public ?string $url = null;
}

/** Request payload for Board#remove. */
class BoardRemoveMatch
{
    public string $id;
}

/** BoardBackground entity data model. */
class BoardBackground
{
    public ?string $id = null;
}

/** Request payload for BoardBackground#load. */
class BoardBackgroundLoadMatch
{
    public ?string $id = null;
    public string $member_id;
    public ?string $id_background = null;
}

/** Request payload for BoardBackground#list. */
class BoardBackgroundListMatch
{
    public string $member_id;
}

/** Request payload for BoardBackground#create. */
class BoardBackgroundCreateData
{
    public string $member_id;
    public ?string $id = null;
}

/** Request payload for BoardBackground#update. */
class BoardBackgroundUpdateData
{
    public ?string $id = null;
    public string $member_id;
    public ?string $id_background = null;
}

/** Request payload for BoardBackground#remove. */
class BoardBackgroundRemoveMatch
{
    public string $id;
    public string $member_id;
}

/** BoardPlugin entity data model. */
class BoardPlugin
{
}

/** Request payload for BoardPlugin#remove. */
class BoardPluginRemoveMatch
{
    public string $board_id;
    public string $id;
}

/** BoardStar entity data model. */
class BoardStar
{
    public ?string $id = null;
    public ?string $idBoard = null;
    public ?int $pos = null;
}

/** Request payload for BoardStar#load. */
class BoardStarLoadMatch
{
    public ?string $id = null;
    public string $member_id;
}

/** Request payload for BoardStar#list. */
class BoardStarListMatch
{
    public string $id;
}

/** Request payload for BoardStar#create. */
class BoardStarCreateData
{
    public string $member_id;
    public ?string $id = null;
    public ?string $idBoard = null;
    public ?int $pos = null;
}

/** Request payload for BoardStar#update. */
class BoardStarUpdateData
{
    public string $id;
    public string $member_id;
    public ?string $idBoard = null;
    public ?int $pos = null;
}

/** Request payload for BoardStar#remove. */
class BoardStarRemoveMatch
{
    public string $id;
    public string $member_id;
}

/** Bulk entity data model. */
class Bulk
{
}

/** Request payload for Bulk#load. */
class BulkLoadMatch
{
    public string $enterpris_id;
    public array $id;
}

/** Request payload for Bulk#update. */
class BulkUpdateData
{
    public string $id;
}

/** Card entity data model. */
class Card
{
    public ?string $address = null;
    public ?array $badges = null;
    public ?string $cardRole = null;
    public ?array $checkItemStates = null;
    public ?bool $closed = null;
    public ?string $coordinates = null;
    public ?array $cover = null;
    public ?string $creationMethod = null;
    public ?array $customFieldItems = null;
    public ?string $dateLastActivity = null;
    public ?string $desc = null;
    public ?array $descData = null;
    public ?string $due = null;
    public ?string $dueReminder = null;
    public ?string $id = null;
    public ?string $idAttachmentCover = null;
    public ?string $idBoard = null;
    public ?array $idChecklists = null;
    public ?array $idLabels = null;
    public ?string $idList = null;
    public ?array $idMembers = null;
    public ?array $idMembersVoted = null;
    public ?int $idShort = null;
    public ?array $labels = null;
    public ?array $limits = null;
    public ?string $locationName = null;
    public ?bool $manualCoverAttachment = null;
    public ?string $mirrorSourceId = null;
    public ?string $name = null;
    public ?float $pos = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $subscribed = null;
    public ?string $url = null;
}

/** Request payload for Card#load. */
class CardLoadMatch
{
    public string $id;
}

/** Request payload for Card#list. */
class CardListMatch
{
    public string $action_id;
}

/** Request payload for Card#create. */
class CardCreateData
{
    public ?string $address = null;
    public ?array $badges = null;
    public ?string $cardRole = null;
    public ?array $checkItemStates = null;
    public ?bool $closed = null;
    public ?string $coordinates = null;
    public ?array $cover = null;
    public ?string $creationMethod = null;
    public ?array $customFieldItems = null;
    public ?string $dateLastActivity = null;
    public ?string $desc = null;
    public ?array $descData = null;
    public ?string $due = null;
    public ?string $dueReminder = null;
    public ?string $id = null;
    public ?string $idAttachmentCover = null;
    public ?string $idBoard = null;
    public ?array $idChecklists = null;
    public ?array $idLabels = null;
    public ?string $idList = null;
    public ?array $idMembers = null;
    public ?array $idMembersVoted = null;
    public ?int $idShort = null;
    public ?array $labels = null;
    public ?array $limits = null;
    public ?string $locationName = null;
    public ?bool $manualCoverAttachment = null;
    public ?string $mirrorSourceId = null;
    public ?string $name = null;
    public ?float $pos = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $subscribed = null;
    public ?string $url = null;
}

/** Request payload for Card#update. */
class CardUpdateData
{
    public string $id;
    public ?string $address = null;
    public ?array $badges = null;
    public ?string $cardRole = null;
    public ?array $checkItemStates = null;
    public ?bool $closed = null;
    public ?string $coordinates = null;
    public ?array $cover = null;
    public ?string $creationMethod = null;
    public ?array $customFieldItems = null;
    public ?string $dateLastActivity = null;
    public ?string $desc = null;
    public ?array $descData = null;
    public ?string $due = null;
    public ?string $dueReminder = null;
    public ?string $idAttachmentCover = null;
    public ?string $idBoard = null;
    public ?array $idChecklists = null;
    public ?array $idLabels = null;
    public ?string $idList = null;
    public ?array $idMembers = null;
    public ?array $idMembersVoted = null;
    public ?int $idShort = null;
    public ?array $labels = null;
    public ?array $limits = null;
    public ?string $locationName = null;
    public ?bool $manualCoverAttachment = null;
    public ?string $mirrorSourceId = null;
    public ?string $name = null;
    public ?float $pos = null;
    public ?string $shortLink = null;
    public ?string $shortUrl = null;
    public ?bool $subscribed = null;
    public ?string $url = null;
}

/** Request payload for Card#remove. */
class CardRemoveMatch
{
    public string $id;
}

/** CardCheckItemState entity data model. */
class CardCheckItemState
{
}

/** Request payload for CardCheckItemState#load. */
class CardCheckItemStateLoadMatch
{
    public string $id;
}

/** CardList entity data model. */
class CardList
{
}

/** Request payload for CardList#load. */
class CardListLoadMatch
{
    public string $id;
}

/** CheckItem entity data model. */
class CheckItem
{
    public ?string $id = null;
    public ?string $idChecklist = null;
    public ?string $name = null;
    public ?string $nameData = null;
    public ?string $pos = null;
    public ?string $state = null;
}

/** Request payload for CheckItem#load. */
class CheckItemLoadMatch
{
    public string $card_id;
    public string $id;
}

/** Request payload for CheckItem#update. */
class CheckItemUpdateData
{
    public ?string $card_id = null;
    public string $id;
    public ?string $checklist_id = null;
    public ?string $id_card = null;
    public ?string $idChecklist = null;
    public ?string $name = null;
    public ?string $nameData = null;
    public ?string $pos = null;
    public ?string $state = null;
}

/** Request payload for CheckItem#remove. */
class CheckItemRemoveMatch
{
    public ?string $card_id = null;
    public string $id;
    public ?string $checklist_id = null;
}

/** Checklist entity data model. */
class Checklist
{
}

/** Request payload for Checklist#load. */
class ChecklistLoadMatch
{
    public string $id;
}

/** Request payload for Checklist#create. */
class ChecklistCreateData
{
}

/** Request payload for Checklist#update. */
class ChecklistUpdateData
{
    public ?string $field = null;
    public string $id;
}

/** Request payload for Checklist#remove. */
class ChecklistRemoveMatch
{
    public ?string $card_id = null;
    public string $id;
}

/** ClaimableOrganization entity data model. */
class ClaimableOrganization
{
    public ?float $activeMembershipCount = null;
    public ?string $dateLastActive = null;
    public ?string $displayName = null;
    public ?string $id = null;
    public ?array $idActiveAdmins = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?array $products = null;
}

/** Request payload for ClaimableOrganization#list. */
class ClaimableOrganizationListMatch
{
    public string $enterpris_id;
}

/** CustomBoardBackground entity data model. */
class CustomBoardBackground
{
}

/** Request payload for CustomBoardBackground#remove. */
class CustomBoardBackgroundRemoveMatch
{
    public string $id;
    public string $member_id;
}

/** CustomEmoji entity data model. */
class CustomEmoji
{
    public ?string $id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** Request payload for CustomEmoji#load. */
class CustomEmojiLoadMatch
{
    public string $id;
    public string $member_id;
}

/** Request payload for CustomEmoji#list. */
class CustomEmojiListMatch
{
    public string $member_id;
}

/** Request payload for CustomEmoji#create. */
class CustomEmojiCreateData
{
    public string $member_id;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $url = null;
}

/** CustomField entity data model. */
class CustomField
{
    public ?bool $cardFront = null;
    public ?array $display = null;
    public ?bool $display_cardFront = null;
    public ?bool $displaycardFront = null;
    public ?string $fieldGroup = null;
    public ?string $id = null;
    public string $idModel;
    public string $modelType;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $pos = null;
    public string $type;
}

/** Request payload for CustomField#load. */
class CustomFieldLoadMatch
{
    public string $id;
}

/** Request payload for CustomField#list. */
class CustomFieldListMatch
{
    public string $board_id;
}

/** Request payload for CustomField#create. */
class CustomFieldCreateData
{
    public ?bool $cardFront = null;
    public ?array $display = null;
    public ?bool $display_cardFront = null;
    public ?bool $displaycardFront = null;
    public ?string $fieldGroup = null;
    public ?string $id = null;
    public string $idModel;
    public string $modelType;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $pos = null;
    public string $type;
}

/** Request payload for CustomField#update. */
class CustomFieldUpdateData
{
    public string $id;
    public ?bool $cardFront = null;
    public ?array $display = null;
    public ?bool $display_cardFront = null;
    public ?bool $displaycardFront = null;
    public ?string $fieldGroup = null;
    public ?string $idModel = null;
    public ?string $modelType = null;
    public ?string $name = null;
    public ?array $options = null;
    public ?string $pos = null;
    public ?string $type = null;
}

/** Request payload for CustomField#remove. */
class CustomFieldRemoveMatch
{
    public string $id;
}

/** CustomFieldItem entity data model. */
class CustomFieldItem
{
    public ?string $id = null;
    public ?string $idCustomField = null;
    public ?string $idModel = null;
    public ?string $modelType = null;
    public ?array $value = null;
}

/** Request payload for CustomFieldItem#list. */
class CustomFieldItemListMatch
{
    public string $card_id;
}

/** CustomSticker entity data model. */
class CustomSticker
{
    public ?string $id = null;
    public ?array $scaled = null;
    public ?string $url = null;
}

/** Request payload for CustomSticker#load. */
class CustomStickerLoadMatch
{
    public string $id;
    public string $member_id;
}

/** Request payload for CustomSticker#list. */
class CustomStickerListMatch
{
    public string $member_id;
}

/** Request payload for CustomSticker#create. */
class CustomStickerCreateData
{
    public string $member_id;
    public ?string $id = null;
    public ?array $scaled = null;
    public ?string $url = null;
}

/** Request payload for CustomSticker#remove. */
class CustomStickerRemoveMatch
{
    public string $id;
    public string $member_id;
}

/** EmailPosition entity data model. */
class EmailPosition
{
}

/** Request payload for EmailPosition#update. */
class EmailPositionUpdateData
{
    public string $board_id;
}

/** Emoji entity data model. */
class Emoji
{
    public ?string $category = null;
    public ?array $keywords = null;
    public ?string $name = null;
    public ?string $native = null;
    public ?float $sheetX = null;
    public ?float $sheetY = null;
    public ?string $shortName = null;
    public ?array $shortNames = null;
    public ?string $text = null;
    public ?string $texts = null;
    public ?string $tts = null;
    public ?string $unified = null;
}

/** Request payload for Emoji#list. */
class EmojiListMatch
{
    public ?string $category = null;
    public ?array $keywords = null;
    public ?string $name = null;
    public ?string $native = null;
    public ?float $sheetX = null;
    public ?float $sheetY = null;
    public ?string $shortName = null;
    public ?array $shortNames = null;
    public ?string $text = null;
    public ?string $texts = null;
    public ?string $tts = null;
    public ?string $unified = null;
}

/** Enterpris entity data model. */
class Enterpris
{
    public ?string $dateOrganizationPrefsLastUpdated = null;
    public ?string $displayName = null;
    public ?array $domains = null;
    public ?array $enterpriseDomains = null;
    public ?string $id = null;
    public ?array $idAdmins = null;
    public ?array $idOrganizations = null;
    public ?array $idp = null;
    public ?bool $isRealEnterprise = null;
    public ?array $licenses = null;
    public ?string $logoHash = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?array $organizationPrefs = null;
    public ?array $pluginWhitelistingEnabled = null;
    public ?array $prefs = null;
    public ?array $products = null;
    public ?bool $ssoActivationFailed = null;
}

/** Request payload for Enterpris#load. */
class EnterprisLoadMatch
{
    public string $id;
}

/** Request payload for Enterpris#create. */
class EnterprisCreateData
{
    public string $id;
    public ?string $dateOrganizationPrefsLastUpdated = null;
    public ?string $displayName = null;
    public ?array $domains = null;
    public ?array $enterpriseDomains = null;
    public ?array $idAdmins = null;
    public ?array $idOrganizations = null;
    public ?array $idp = null;
    public ?bool $isRealEnterprise = null;
    public ?array $licenses = null;
    public ?string $logoHash = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?array $organizationPrefs = null;
    public ?array $pluginWhitelistingEnabled = null;
    public ?array $prefs = null;
    public ?array $products = null;
    public ?bool $ssoActivationFailed = null;
}

/** Request payload for Enterpris#update. */
class EnterprisUpdateData
{
    public string $id;
    public ?string $dateOrganizationPrefsLastUpdated = null;
    public ?string $displayName = null;
    public ?array $domains = null;
    public ?array $enterpriseDomains = null;
    public ?array $idAdmins = null;
    public ?array $idOrganizations = null;
    public ?array $idp = null;
    public ?bool $isRealEnterprise = null;
    public ?array $licenses = null;
    public ?string $logoHash = null;
    public ?string $logoUrl = null;
    public ?string $name = null;
    public ?array $organizationPrefs = null;
    public ?array $pluginWhitelistingEnabled = null;
    public ?array $prefs = null;
    public ?array $products = null;
    public ?bool $ssoActivationFailed = null;
}

/** EnterprisSignupUrl entity data model. */
class EnterprisSignupUrl
{
    public ?string $signupUrl = null;
}

/** Request payload for EnterprisSignupUrl#load. */
class EnterprisSignupUrlLoadMatch
{
    public string $id;
}

/** EnterpriseAdmin entity data model. */
class EnterpriseAdmin
{
    public ?string $fullName = null;
    public ?string $id = null;
    public ?string $username = null;
}

/** Request payload for EnterpriseAdmin#load. */
class EnterpriseAdminLoadMatch
{
    public string $enterpris_id;
}

/** EnterpriseAuditLog entity data model. */
class EnterpriseAuditLog
{
    public ?string $date = null;
    public ?string $idAction = null;
    public ?array $member = null;
    public ?array $memberCreator = null;
    public ?array $organization = null;
    public ?string $type = null;
}

/** Request payload for EnterpriseAuditLog#list. */
class EnterpriseAuditLogListMatch
{
    public string $enterpris_id;
}

/** Export entity data model. */
class Export
{
    public ?float $attempts = null;
    public ?string $exportUrl = null;
    public ?bool $finished = null;
    public ?string $id = null;
    public ?string $size = null;
    public ?string $stage = null;
    public ?string $startedAt = null;
    public ?array $status = null;
}

/** Request payload for Export#load. */
class ExportLoadMatch
{
    public string $board_id;
    public string $id;
}

/** Request payload for Export#list. */
class ExportListMatch
{
    public string $organization_id;
}

/** Request payload for Export#create. */
class ExportCreateData
{
    public string $board_id;
    public ?float $attempts = null;
    public ?string $exportUrl = null;
    public ?bool $finished = null;
    public ?string $id = null;
    public ?string $size = null;
    public ?string $stage = null;
    public ?string $startedAt = null;
    public ?array $status = null;
}

/** Request payload for Export#remove. */
class ExportRemoveMatch
{
    public string $board_id;
    public string $id;
}

/** ExportDownload entity data model. */
class ExportDownload
{
}

/** Request payload for ExportDownload#load. */
class ExportDownloadLoadMatch
{
    public string $board_id;
    public string $id_export;
}

/** Generate entity data model. */
class Generate
{
}

/** Request payload for Generate#create. */
class GenerateCreateData
{
    public string $board_id;
}

/** IdEmailList entity data model. */
class IdEmailList
{
}

/** Request payload for IdEmailList#update. */
class IdEmailListUpdateData
{
    public string $board_id;
}

/** IdLabel entity data model. */
class IdLabel
{
}

/** Request payload for IdLabel#remove. */
class IdLabelRemoveMatch
{
    public string $card_id;
    public string $id;
}

/** IdMember entity data model. */
class IdMember
{
}

/** Request payload for IdMember#remove. */
class IdMemberRemoveMatch
{
    public string $card_id;
    public string $id;
}

/** Label entity data model. */
class Label
{
}

/** Request payload for Label#load. */
class LabelLoadMatch
{
    public string $id;
}

/** Request payload for Label#create. */
class LabelCreateData
{
}

/** Request payload for Label#update. */
class LabelUpdateData
{
    public string $id;
    public ?string $field = null;
}

/** Request payload for Label#remove. */
class LabelRemoveMatch
{
    public string $id;
}

/** List entity data model. */
class ListType
{
}

/** Request payload for List#load. */
class ListLoadMatch
{
    public ?string $board_id = null;
    public string $id;
}

/** Request payload for List#create. */
class ListCreateData
{
}

/** Request payload for List#update. */
class ListUpdateData
{
    public string $id;
    public ?string $field = null;
}

/** Member entity data model. */
class Member
{
    public ?string $aaEmail = null;
    public ?string $aaEnrolledDate = null;
    public ?string $aaId = null;
    public ?bool $activityBlocked = null;
    public ?string $avatarHash = null;
    public ?string $avatarSource = null;
    public ?string $avatarUrl = null;
    public ?string $bio = null;
    public ?array $bioData = null;
    public ?bool $confirmed = null;
    public ?string $email = null;
    public ?string $fullName = null;
    public ?string $gravatarHash = null;
    public ?string $id = null;
    public ?array $idBoards = null;
    public ?array $idBoardsPinned = null;
    public ?string $idEnterprise = null;
    public ?array $idEnterprisesAdmin = null;
    public ?array $idEnterprisesDeactivated = null;
    public ?string $idMemberReferrer = null;
    public ?array $idOrganizations = null;
    public ?array $idPremOrgsAdmin = null;
    public ?string $initials = null;
    public ?bool $isAaMastered = null;
    public ?float $ixUpdate = null;
    public ?array $limits = null;
    public ?array $loginTypes = null;
    public ?array $marketingOptIn = null;
    public ?string $memberType = null;
    public ?array $messagesDismissed = null;
    public ?array $nonPublic = null;
    public ?bool $nonPublicAvailable = null;
    public ?array $oneTimeMessagesDismissed = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?array $products = null;
    public ?string $status = null;
    public ?array $trophies = null;
    public ?string $uploadedAvatarHash = null;
    public ?string $uploadedAvatarUrl = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for Member#load. */
class MemberLoadMatch
{
    public string $id;
}

/** Request payload for Member#list. */
class MemberListMatch
{
    public ?string $aaEmail = null;
    public ?string $aaEnrolledDate = null;
    public ?string $aaId = null;
    public ?bool $activityBlocked = null;
    public ?string $avatarHash = null;
    public ?string $avatarSource = null;
    public ?string $avatarUrl = null;
    public ?string $bio = null;
    public ?array $bioData = null;
    public ?bool $confirmed = null;
    public ?string $email = null;
    public ?string $fullName = null;
    public ?string $gravatarHash = null;
    public ?string $id = null;
    public ?array $idBoards = null;
    public ?array $idBoardsPinned = null;
    public ?string $idEnterprise = null;
    public ?array $idEnterprisesAdmin = null;
    public ?array $idEnterprisesDeactivated = null;
    public ?string $idMemberReferrer = null;
    public ?array $idOrganizations = null;
    public ?array $idPremOrgsAdmin = null;
    public ?string $initials = null;
    public ?bool $isAaMastered = null;
    public ?float $ixUpdate = null;
    public ?array $limits = null;
    public ?array $loginTypes = null;
    public ?array $marketingOptIn = null;
    public ?string $memberType = null;
    public ?array $messagesDismissed = null;
    public ?array $nonPublic = null;
    public ?bool $nonPublicAvailable = null;
    public ?array $oneTimeMessagesDismissed = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?array $products = null;
    public ?string $status = null;
    public ?array $trophies = null;
    public ?string $uploadedAvatarHash = null;
    public ?string $uploadedAvatarUrl = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for Member#create. */
class MemberCreateData
{
    public string $id;
    public ?string $aaEmail = null;
    public ?string $aaEnrolledDate = null;
    public ?string $aaId = null;
    public ?bool $activityBlocked = null;
    public ?string $avatarHash = null;
    public ?string $avatarSource = null;
    public ?string $avatarUrl = null;
    public ?string $bio = null;
    public ?array $bioData = null;
    public ?bool $confirmed = null;
    public ?string $email = null;
    public ?string $fullName = null;
    public ?string $gravatarHash = null;
    public ?array $idBoards = null;
    public ?array $idBoardsPinned = null;
    public ?string $idEnterprise = null;
    public ?array $idEnterprisesAdmin = null;
    public ?array $idEnterprisesDeactivated = null;
    public ?string $idMemberReferrer = null;
    public ?array $idOrganizations = null;
    public ?array $idPremOrgsAdmin = null;
    public ?string $initials = null;
    public ?bool $isAaMastered = null;
    public ?float $ixUpdate = null;
    public ?array $limits = null;
    public ?array $loginTypes = null;
    public ?array $marketingOptIn = null;
    public ?string $memberType = null;
    public ?array $messagesDismissed = null;
    public ?array $nonPublic = null;
    public ?bool $nonPublicAvailable = null;
    public ?array $oneTimeMessagesDismissed = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?array $products = null;
    public ?string $status = null;
    public ?array $trophies = null;
    public ?string $uploadedAvatarHash = null;
    public ?string $uploadedAvatarUrl = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for Member#update. */
class MemberUpdateData
{
    public string $id;
    public ?string $board_id = null;
    public ?string $organization_id = null;
    public ?string $aaEmail = null;
    public ?string $aaEnrolledDate = null;
    public ?string $aaId = null;
    public ?bool $activityBlocked = null;
    public ?string $avatarHash = null;
    public ?string $avatarSource = null;
    public ?string $avatarUrl = null;
    public ?string $bio = null;
    public ?array $bioData = null;
    public ?bool $confirmed = null;
    public ?string $email = null;
    public ?string $fullName = null;
    public ?string $gravatarHash = null;
    public ?array $idBoards = null;
    public ?array $idBoardsPinned = null;
    public ?string $idEnterprise = null;
    public ?array $idEnterprisesAdmin = null;
    public ?array $idEnterprisesDeactivated = null;
    public ?string $idMemberReferrer = null;
    public ?array $idOrganizations = null;
    public ?array $idPremOrgsAdmin = null;
    public ?string $initials = null;
    public ?bool $isAaMastered = null;
    public ?float $ixUpdate = null;
    public ?array $limits = null;
    public ?array $loginTypes = null;
    public ?array $marketingOptIn = null;
    public ?string $memberType = null;
    public ?array $messagesDismissed = null;
    public ?array $nonPublic = null;
    public ?bool $nonPublicAvailable = null;
    public ?array $oneTimeMessagesDismissed = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?array $products = null;
    public ?string $status = null;
    public ?array $trophies = null;
    public ?string $uploadedAvatarHash = null;
    public ?string $uploadedAvatarUrl = null;
    public ?string $url = null;
    public ?string $username = null;
}

/** Request payload for Member#remove. */
class MemberRemoveMatch
{
    public ?string $board_id = null;
    public string $id;
    public ?string $organization_id = null;
}

/** MemberPrivacy entity data model. */
class MemberPrivacy
{
}

/** Request payload for MemberPrivacy#load. */
class MemberPrivacyLoadMatch
{
    public string $plugin_id;
}

/** MembersVoted entity data model. */
class MembersVoted
{
}

/** Request payload for MembersVoted#load. */
class MembersVotedLoadMatch
{
    public string $card_id;
}

/** Request payload for MembersVoted#remove. */
class MembersVotedRemoveMatch
{
    public string $card_id;
    public string $id;
}

/** Membership entity data model. */
class Membership
{
    public ?bool $admin = null;
    public ?bool $collaborator = null;
    public ?bool $deactivated = null;
    public ?string $id = null;
    public ?bool $licensed = null;
    public ?bool $managed = null;
    public ?array $member = null;
}

/** Request payload for Membership#load. */
class MembershipLoadMatch
{
    public string $id;
    public string $organization_id;
}

/** Request payload for Membership#list. */
class MembershipListMatch
{
    public string $organization_id;
}

/** Request payload for Membership#update. */
class MembershipUpdateData
{
    public string $board_id;
    public string $id;
    public ?bool $admin = null;
    public ?bool $collaborator = null;
    public ?bool $deactivated = null;
    public ?bool $licensed = null;
    public ?bool $managed = null;
    public ?array $member = null;
}

/** MostRecent entity data model. */
class MostRecent
{
}

/** NewBillableGuest entity data model. */
class NewBillableGuest
{
}

/** Request payload for NewBillableGuest#load. */
class NewBillableGuestLoadMatch
{
    public string $id;
    public string $organization_id;
}

/** Notification entity data model. */
class Notification
{
    public array $board;
    public ?array $card = null;
    public ?string $data = null;
    public ?string $date = null;
    public ?string $dateRead = null;
    public ?string $id = null;
    public ?string $idAction = null;
    public ?string $idMemberCreator = null;
    public ?array $reactions = null;
    public ?string $type = null;
    public ?bool $unread = null;
}

/** Request payload for Notification#load. */
class NotificationLoadMatch
{
    public string $id;
    public ?string $field = null;
}

/** Request payload for Notification#list. */
class NotificationListMatch
{
    public string $member_id;
}

/** Request payload for Notification#update. */
class NotificationUpdateData
{
    public string $id;
    public ?array $board = null;
    public ?array $card = null;
    public ?string $data = null;
    public ?string $date = null;
    public ?string $dateRead = null;
    public ?string $idAction = null;
    public ?string $idMemberCreator = null;
    public ?array $reactions = null;
    public ?string $type = null;
    public ?bool $unread = null;
}

/** NotificationChannelSetting entity data model. */
class NotificationChannelSetting
{
    public ?array $blockedKeys = null;
    public ?string $channel = null;
    public ?string $id = null;
    public ?string $idMember = null;
}

/** Request payload for NotificationChannelSetting#load. */
class NotificationChannelSettingLoadMatch
{
    public string $channel;
    public string $member_id;
}

/** Request payload for NotificationChannelSetting#list. */
class NotificationChannelSettingListMatch
{
    public string $member_id;
}

/** Request payload for NotificationChannelSetting#update. */
class NotificationChannelSettingUpdateData
{
    public string $channel;
    public string $member_id;
    public ?array $blockedKeys = null;
    public ?string $id = null;
    public ?string $idMember = null;
}

/** NotificationList entity data model. */
class NotificationList
{
}

/** Request payload for NotificationList#load. */
class NotificationListLoadMatch
{
    public string $id;
}

/** NotificationMemberCreator entity data model. */
class NotificationMemberCreator
{
}

/** Request payload for NotificationMemberCreator#load. */
class NotificationMemberCreatorLoadMatch
{
    public string $id;
}

/** NotificationsChannelSetting entity data model. */
class NotificationsChannelSetting
{
}

/** Option entity data model. */
class Option
{
}

/** Request payload for Option#load. */
class OptionLoadMatch
{
    public string $custom_field_id;
    public ?string $id = null;
}

/** Request payload for Option#remove. */
class OptionRemoveMatch
{
    public string $custom_field_id;
    public string $id;
}

/** OrgInviteRestrict entity data model. */
class OrgInviteRestrict
{
}

/** Request payload for OrgInviteRestrict#remove. */
class OrgInviteRestrictRemoveMatch
{
    public string $organization_id;
}

/** Organization entity data model. */
class Organization
{
    public ?string $dateLastActivity = null;
    public ?string $displayName = null;
    public ?string $id = null;
    public ?array $idBoards = null;
    public ?string $idEnterprise = null;
    public ?array $memberships = null;
    public ?string $name = null;
    public ?string $offering = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?string $url = null;
}

/** Request payload for Organization#load. */
class OrganizationLoadMatch
{
    public string $id;
}

/** Request payload for Organization#list. */
class OrganizationListMatch
{
    public string $enterpris_id;
}

/** Request payload for Organization#create. */
class OrganizationCreateData
{
    public ?string $dateLastActivity = null;
    public ?string $displayName = null;
    public ?string $id = null;
    public ?array $idBoards = null;
    public ?string $idEnterprise = null;
    public ?array $memberships = null;
    public ?string $name = null;
    public ?string $offering = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?string $url = null;
}

/** Request payload for Organization#update. */
class OrganizationUpdateData
{
    public string $id;
    public ?string $dateLastActivity = null;
    public ?string $displayName = null;
    public ?array $idBoards = null;
    public ?string $idEnterprise = null;
    public ?array $memberships = null;
    public ?string $name = null;
    public ?string $offering = null;
    public ?array $prefs = null;
    public ?array $premiumFeatures = null;
    public ?string $url = null;
}

/** Request payload for Organization#remove. */
class OrganizationRemoveMatch
{
    public ?string $enterpris_id = null;
    public string $id;
}

/** PendingOrganization entity data model. */
class PendingOrganization
{
    public ?string $date = null;
    public ?string $displayName = null;
    public ?string $id = null;
    public ?string $idMember = null;
    public ?string $logoUrl = null;
    public ?array $memberRequestor = null;
    public ?float $membershipCount = null;
    public ?array $transferability = null;
}

/** Request payload for PendingOrganization#list. */
class PendingOrganizationListMatch
{
    public string $enterpris_id;
}

/** Plugin entity data model. */
class Plugin
{
    public ?string $id = null;
}

/** Request payload for Plugin#load. */
class PluginLoadMatch
{
    public string $id;
}

/** Request payload for Plugin#list. */
class PluginListMatch
{
    public string $board_id;
}

/** Request payload for Plugin#update. */
class PluginUpdateData
{
    public string $id;
}

/** PluginData entity data model. */
class PluginData
{
}

/** Request payload for PluginData#load. */
class PluginDataLoadMatch
{
    public string $card_id;
}

/** Request payload for PluginData#list. */
class PluginDataListMatch
{
    public string $organization_id;
}

/** PluginListing entity data model. */
class PluginListing
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $locale = null;
    public ?string $name = null;
    public ?string $overview = null;
}

/** Request payload for PluginListing#create. */
class PluginListingCreateData
{
    public string $id_plugin;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $locale = null;
    public ?string $name = null;
    public ?string $overview = null;
}

/** Request payload for PluginListing#update. */
class PluginListingUpdateData
{
    public string $id;
    public string $id_plugin;
    public ?string $description = null;
    public ?string $locale = null;
    public ?string $name = null;
    public ?string $overview = null;
}

/** Reaction entity data model. */
class Reaction
{
}

/** Request payload for Reaction#load. */
class ReactionLoadMatch
{
    public ?string $id = null;
    public string $id_action;
}

/** Request payload for Reaction#remove. */
class ReactionRemoveMatch
{
    public string $id;
    public string $id_action;
}

/** Read entity data model. */
class Read
{
}

/** Request payload for Read#create. */
class ReadCreateData
{
}

/** SavedSearch entity data model. */
class SavedSearch
{
    public ?string $id = null;
    public ?string $name = null;
    public mixed $pos = null;
    public ?string $query = null;
}

/** Request payload for SavedSearch#load. */
class SavedSearchLoadMatch
{
    public string $id;
    public string $member_id;
}

/** Request payload for SavedSearch#list. */
class SavedSearchListMatch
{
    public string $member_id;
}

/** Request payload for SavedSearch#create. */
class SavedSearchCreateData
{
    public string $member_id;
    public ?string $id = null;
    public ?string $name = null;
    public mixed $pos = null;
    public ?string $query = null;
}

/** Request payload for SavedSearch#update. */
class SavedSearchUpdateData
{
    public string $id;
    public string $member_id;
    public ?string $name = null;
    public mixed $pos = null;
    public ?string $query = null;
}

/** Request payload for SavedSearch#remove. */
class SavedSearchRemoveMatch
{
    public string $id;
    public string $member_id;
}

/** Search entity data model. */
class Search
{
}

/** Request payload for Search#list. */
class SearchListMatch
{
}

/** ShowSidebar entity data model. */
class ShowSidebar
{
}

/** Request payload for ShowSidebar#update. */
class ShowSidebarUpdateData
{
    public string $board_id;
}

/** ShowSidebarActivity entity data model. */
class ShowSidebarActivity
{
}

/** Request payload for ShowSidebarActivity#update. */
class ShowSidebarActivityUpdateData
{
    public string $board_id;
}

/** ShowSidebarBoardAction entity data model. */
class ShowSidebarBoardAction
{
}

/** Request payload for ShowSidebarBoardAction#update. */
class ShowSidebarBoardActionUpdateData
{
    public string $board_id;
}

/** ShowSidebarMember entity data model. */
class ShowSidebarMember
{
}

/** Request payload for ShowSidebarMember#update. */
class ShowSidebarMemberUpdateData
{
    public string $board_id;
}

/** Sticker entity data model. */
class Sticker
{
}

/** Request payload for Sticker#load. */
class StickerLoadMatch
{
    public string $card_id;
    public ?string $id = null;
}

/** Request payload for Sticker#update. */
class StickerUpdateData
{
    public string $card_id;
    public string $id;
}

/** Request payload for Sticker#remove. */
class StickerRemoveMatch
{
    public string $card_id;
    public string $id;
}

/** Tag entity data model. */
class Tag
{
}

/** Request payload for Tag#list. */
class TagListMatch
{
    public string $organization_id;
}

/** Request payload for Tag#remove. */
class TagRemoveMatch
{
    public string $id;
    public string $organization_id;
}

/** Token entity data model. */
class Token
{
    public ?string $dateCreated = null;
    public ?string $dateExpires = null;
    public ?string $id = null;
    public ?string $idMember = null;
    public ?string $identifier = null;
    public ?array $permissions = null;
}

/** Request payload for Token#load. */
class TokenLoadMatch
{
    public string $id;
}

/** Request payload for Token#list. */
class TokenListMatch
{
    public string $member_id;
}

/** Request payload for Token#remove. */
class TokenRemoveMatch
{
    public string $id;
}

/** TransferrableOrganization entity data model. */
class TransferrableOrganization
{
    public ?array $newBillableMembers = null;
    public ?array $restrictedMembers = null;
    public ?bool $transferrable = null;
}

/** Request payload for TransferrableOrganization#load. */
class TransferrableOrganizationLoadMatch
{
    public string $enterpris_id;
    public string $id;
}

/** TrelloList entity data model. */
class TrelloList
{
    public ?array $attachments = null;
    public ?bool $closed = null;
    public ?string $id = null;
    public ?string $idBoard = null;
    public ?array $limits = null;
    public ?string $name = null;
    public ?float $pos = null;
    public ?string $softLimit = null;
    public ?bool $subscribed = null;
}

/** Request payload for TrelloList#load. */
class TrelloListLoadMatch
{
    public string $action_id;
}

/** Request payload for TrelloList#list. */
class TrelloListListMatch
{
    public string $board_id;
}

/** Request payload for TrelloList#create. */
class TrelloListCreateData
{
    public string $board_id;
    public ?array $attachments = null;
    public ?bool $closed = null;
    public ?string $id = null;
    public ?string $idBoard = null;
    public ?array $limits = null;
    public ?string $name = null;
    public ?float $pos = null;
    public ?string $softLimit = null;
    public ?bool $subscribed = null;
}

/** Webhook entity data model. */
class Webhook
{
    public ?bool $active = null;
    public ?string $callbackURL = null;
    public ?float $consecutiveFailures = null;
    public ?string $description = null;
    public ?string $firstConsecutiveFailDate = null;
    public ?string $id = null;
    public ?string $idModel = null;
}

/** Request payload for Webhook#load. */
class WebhookLoadMatch
{
    public ?string $field = null;
    public string $id;
    public ?string $token_id = null;
}

/** Request payload for Webhook#list. */
class WebhookListMatch
{
    public string $token_id;
}

/** Request payload for Webhook#create. */
class WebhookCreateData
{
    public ?bool $active = null;
    public ?string $callbackURL = null;
    public ?float $consecutiveFailures = null;
    public ?string $description = null;
    public ?string $firstConsecutiveFailDate = null;
    public ?string $id = null;
    public ?string $idModel = null;
}

/** Request payload for Webhook#update. */
class WebhookUpdateData
{
    public string $id;
    public ?string $token_id = null;
    public ?bool $active = null;
    public ?string $callbackURL = null;
    public ?float $consecutiveFailures = null;
    public ?string $description = null;
    public ?string $firstConsecutiveFailDate = null;
    public ?string $idModel = null;
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public string $id;
    public ?string $token_id = null;
}

