// Trello Js SDK

const { ActionEntity } = require('./entity/ActionEntity')
const { ActionReactionsSummaryEntity } = require('./entity/ActionReactionsSummaryEntity')
const { AdminEntity } = require('./entity/AdminEntity')
const { ApplicationEntity } = require('./entity/ApplicationEntity')
const { ApplicationComplianceEntity } = require('./entity/ApplicationComplianceEntity')
const { AssociatedDomainEntity } = require('./entity/AssociatedDomainEntity')
const { AttachmentEntity } = require('./entity/AttachmentEntity')
const { BatchEntity } = require('./entity/BatchEntity')
const { BoardEntity } = require('./entity/BoardEntity')
const { BoardBackgroundEntity } = require('./entity/BoardBackgroundEntity')
const { BoardPluginEntity } = require('./entity/BoardPluginEntity')
const { BoardStarEntity } = require('./entity/BoardStarEntity')
const { BulkEntity } = require('./entity/BulkEntity')
const { CardEntity } = require('./entity/CardEntity')
const { CardCheckItemStateEntity } = require('./entity/CardCheckItemStateEntity')
const { CardListEntity } = require('./entity/CardListEntity')
const { CheckItemEntity } = require('./entity/CheckItemEntity')
const { ChecklistEntity } = require('./entity/ChecklistEntity')
const { ClaimableOrganizationEntity } = require('./entity/ClaimableOrganizationEntity')
const { CustomBoardBackgroundEntity } = require('./entity/CustomBoardBackgroundEntity')
const { CustomEmojiEntity } = require('./entity/CustomEmojiEntity')
const { CustomFieldEntity } = require('./entity/CustomFieldEntity')
const { CustomFieldItemEntity } = require('./entity/CustomFieldItemEntity')
const { CustomStickerEntity } = require('./entity/CustomStickerEntity')
const { EmailPositionEntity } = require('./entity/EmailPositionEntity')
const { EmojiEntity } = require('./entity/EmojiEntity')
const { EnterprisEntity } = require('./entity/EnterprisEntity')
const { EnterprisSignupUrlEntity } = require('./entity/EnterprisSignupUrlEntity')
const { EnterpriseAdminEntity } = require('./entity/EnterpriseAdminEntity')
const { EnterpriseAuditLogEntity } = require('./entity/EnterpriseAuditLogEntity')
const { ExportEntity } = require('./entity/ExportEntity')
const { ExportDownloadEntity } = require('./entity/ExportDownloadEntity')
const { GenerateEntity } = require('./entity/GenerateEntity')
const { IdEmailListEntity } = require('./entity/IdEmailListEntity')
const { IdLabelEntity } = require('./entity/IdLabelEntity')
const { IdMemberEntity } = require('./entity/IdMemberEntity')
const { LabelEntity } = require('./entity/LabelEntity')
const { ListEntity } = require('./entity/ListEntity')
const { MemberEntity } = require('./entity/MemberEntity')
const { MemberPrivacyEntity } = require('./entity/MemberPrivacyEntity')
const { MembersVotedEntity } = require('./entity/MembersVotedEntity')
const { MembershipEntity } = require('./entity/MembershipEntity')
const { MostRecentEntity } = require('./entity/MostRecentEntity')
const { NewBillableGuestEntity } = require('./entity/NewBillableGuestEntity')
const { NotificationEntity } = require('./entity/NotificationEntity')
const { NotificationChannelSettingEntity } = require('./entity/NotificationChannelSettingEntity')
const { NotificationListEntity } = require('./entity/NotificationListEntity')
const { NotificationMemberCreatorEntity } = require('./entity/NotificationMemberCreatorEntity')
const { NotificationsChannelSettingEntity } = require('./entity/NotificationsChannelSettingEntity')
const { OptionEntity } = require('./entity/OptionEntity')
const { OrgInviteRestrictEntity } = require('./entity/OrgInviteRestrictEntity')
const { OrganizationEntity } = require('./entity/OrganizationEntity')
const { PendingOrganizationEntity } = require('./entity/PendingOrganizationEntity')
const { PluginEntity } = require('./entity/PluginEntity')
const { PluginDataEntity } = require('./entity/PluginDataEntity')
const { PluginListingEntity } = require('./entity/PluginListingEntity')
const { ReactionEntity } = require('./entity/ReactionEntity')
const { ReadEntity } = require('./entity/ReadEntity')
const { SavedSearchEntity } = require('./entity/SavedSearchEntity')
const { SearchEntity } = require('./entity/SearchEntity')
const { ShowSidebarEntity } = require('./entity/ShowSidebarEntity')
const { ShowSidebarActivityEntity } = require('./entity/ShowSidebarActivityEntity')
const { ShowSidebarBoardActionEntity } = require('./entity/ShowSidebarBoardActionEntity')
const { ShowSidebarMemberEntity } = require('./entity/ShowSidebarMemberEntity')
const { StickerEntity } = require('./entity/StickerEntity')
const { TagEntity } = require('./entity/TagEntity')
const { TokenEntity } = require('./entity/TokenEntity')
const { TransferrableOrganizationEntity } = require('./entity/TransferrableOrganizationEntity')
const { TrelloListEntity } = require('./entity/TrelloListEntity')
const { WebhookEntity } = require('./entity/WebhookEntity')


const { inspect } = require('node:util')

const { config } = require('./Config')
const { Utility } = require('./utility/Utility')
const { TrelloEntityBase } = require('./TrelloEntityBase')


const { BaseFeature } = require('./feature/base/BaseFeature')


const stdutil = new Utility()


class TrelloSDK {
  _mode = 'live'
  _options
  _utility = new Utility()
  _features
  _rootctx

  constructor(options) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('TrelloSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err) {
      return { ok: false, err }
    }
  }



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query, variables, ctrl) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('TrelloSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err = new Error('TrelloSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Action().list()` / `client.Action().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Action(entopts) {
    const self = this
    return new ActionEntity(self, entopts)
  }


  // Entity access: `client.ActionReactionsSummary().list()` / `client.ActionReactionsSummary().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ActionReactionsSummary(entopts) {
    const self = this
    return new ActionReactionsSummaryEntity(self, entopts)
  }


  // Entity access: `client.Admin().list()` / `client.Admin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Admin(entopts) {
    const self = this
    return new AdminEntity(self, entopts)
  }


  // Entity access: `client.Application().list()` / `client.Application().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Application(entopts) {
    const self = this
    return new ApplicationEntity(self, entopts)
  }


  // Entity access: `client.ApplicationCompliance().list()` / `client.ApplicationCompliance().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApplicationCompliance(entopts) {
    const self = this
    return new ApplicationComplianceEntity(self, entopts)
  }


  // Entity access: `client.AssociatedDomain().list()` / `client.AssociatedDomain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssociatedDomain(entopts) {
    const self = this
    return new AssociatedDomainEntity(self, entopts)
  }


  // Entity access: `client.Attachment().list()` / `client.Attachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Attachment(entopts) {
    const self = this
    return new AttachmentEntity(self, entopts)
  }


  // Entity access: `client.Batch().list()` / `client.Batch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Batch(entopts) {
    const self = this
    return new BatchEntity(self, entopts)
  }


  // Entity access: `client.Board().list()` / `client.Board().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Board(entopts) {
    const self = this
    return new BoardEntity(self, entopts)
  }


  // Entity access: `client.BoardBackground().list()` / `client.BoardBackground().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BoardBackground(entopts) {
    const self = this
    return new BoardBackgroundEntity(self, entopts)
  }


  // Entity access: `client.BoardPlugin().list()` / `client.BoardPlugin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BoardPlugin(entopts) {
    const self = this
    return new BoardPluginEntity(self, entopts)
  }


  // Entity access: `client.BoardStar().list()` / `client.BoardStar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BoardStar(entopts) {
    const self = this
    return new BoardStarEntity(self, entopts)
  }


  // Entity access: `client.Bulk().list()` / `client.Bulk().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Bulk(entopts) {
    const self = this
    return new BulkEntity(self, entopts)
  }


  // Entity access: `client.Card().list()` / `client.Card().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Card(entopts) {
    const self = this
    return new CardEntity(self, entopts)
  }


  // Entity access: `client.CardCheckItemState().list()` / `client.CardCheckItemState().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CardCheckItemState(entopts) {
    const self = this
    return new CardCheckItemStateEntity(self, entopts)
  }


  // Entity access: `client.CardList().list()` / `client.CardList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CardList(entopts) {
    const self = this
    return new CardListEntity(self, entopts)
  }


  // Entity access: `client.CheckItem().list()` / `client.CheckItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CheckItem(entopts) {
    const self = this
    return new CheckItemEntity(self, entopts)
  }


  // Entity access: `client.Checklist().list()` / `client.Checklist().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Checklist(entopts) {
    const self = this
    return new ChecklistEntity(self, entopts)
  }


  // Entity access: `client.ClaimableOrganization().list()` / `client.ClaimableOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ClaimableOrganization(entopts) {
    const self = this
    return new ClaimableOrganizationEntity(self, entopts)
  }


  // Entity access: `client.CustomBoardBackground().list()` / `client.CustomBoardBackground().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomBoardBackground(entopts) {
    const self = this
    return new CustomBoardBackgroundEntity(self, entopts)
  }


  // Entity access: `client.CustomEmoji().list()` / `client.CustomEmoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomEmoji(entopts) {
    const self = this
    return new CustomEmojiEntity(self, entopts)
  }


  // Entity access: `client.CustomField().list()` / `client.CustomField().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomField(entopts) {
    const self = this
    return new CustomFieldEntity(self, entopts)
  }


  // Entity access: `client.CustomFieldItem().list()` / `client.CustomFieldItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomFieldItem(entopts) {
    const self = this
    return new CustomFieldItemEntity(self, entopts)
  }


  // Entity access: `client.CustomSticker().list()` / `client.CustomSticker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CustomSticker(entopts) {
    const self = this
    return new CustomStickerEntity(self, entopts)
  }


  // Entity access: `client.EmailPosition().list()` / `client.EmailPosition().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailPosition(entopts) {
    const self = this
    return new EmailPositionEntity(self, entopts)
  }


  // Entity access: `client.Emoji().list()` / `client.Emoji().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Emoji(entopts) {
    const self = this
    return new EmojiEntity(self, entopts)
  }


  // Entity access: `client.Enterpris().list()` / `client.Enterpris().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Enterpris(entopts) {
    const self = this
    return new EnterprisEntity(self, entopts)
  }


  // Entity access: `client.EnterprisSignupUrl().list()` / `client.EnterprisSignupUrl().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterprisSignupUrl(entopts) {
    const self = this
    return new EnterprisSignupUrlEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseAdmin().list()` / `client.EnterpriseAdmin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseAdmin(entopts) {
    const self = this
    return new EnterpriseAdminEntity(self, entopts)
  }


  // Entity access: `client.EnterpriseAuditLog().list()` / `client.EnterpriseAuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnterpriseAuditLog(entopts) {
    const self = this
    return new EnterpriseAuditLogEntity(self, entopts)
  }


  // Entity access: `client.Export().list()` / `client.Export().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Export(entopts) {
    const self = this
    return new ExportEntity(self, entopts)
  }


  // Entity access: `client.ExportDownload().list()` / `client.ExportDownload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ExportDownload(entopts) {
    const self = this
    return new ExportDownloadEntity(self, entopts)
  }


  // Entity access: `client.Generate().list()` / `client.Generate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Generate(entopts) {
    const self = this
    return new GenerateEntity(self, entopts)
  }


  // Entity access: `client.IdEmailList().list()` / `client.IdEmailList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IdEmailList(entopts) {
    const self = this
    return new IdEmailListEntity(self, entopts)
  }


  // Entity access: `client.IdLabel().list()` / `client.IdLabel().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IdLabel(entopts) {
    const self = this
    return new IdLabelEntity(self, entopts)
  }


  // Entity access: `client.IdMember().list()` / `client.IdMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  IdMember(entopts) {
    const self = this
    return new IdMemberEntity(self, entopts)
  }


  // Entity access: `client.Label().list()` / `client.Label().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Label(entopts) {
    const self = this
    return new LabelEntity(self, entopts)
  }


  // Entity access: `client.List().list()` / `client.List().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  List(entopts) {
    const self = this
    return new ListEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.MemberPrivacy().list()` / `client.MemberPrivacy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MemberPrivacy(entopts) {
    const self = this
    return new MemberPrivacyEntity(self, entopts)
  }


  // Entity access: `client.MembersVoted().list()` / `client.MembersVoted().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MembersVoted(entopts) {
    const self = this
    return new MembersVotedEntity(self, entopts)
  }


  // Entity access: `client.Membership().list()` / `client.Membership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Membership(entopts) {
    const self = this
    return new MembershipEntity(self, entopts)
  }


  // Entity access: `client.MostRecent().list()` / `client.MostRecent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  MostRecent(entopts) {
    const self = this
    return new MostRecentEntity(self, entopts)
  }


  // Entity access: `client.NewBillableGuest().list()` / `client.NewBillableGuest().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NewBillableGuest(entopts) {
    const self = this
    return new NewBillableGuestEntity(self, entopts)
  }


  // Entity access: `client.Notification().list()` / `client.Notification().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Notification(entopts) {
    const self = this
    return new NotificationEntity(self, entopts)
  }


  // Entity access: `client.NotificationChannelSetting().list()` / `client.NotificationChannelSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationChannelSetting(entopts) {
    const self = this
    return new NotificationChannelSettingEntity(self, entopts)
  }


  // Entity access: `client.NotificationList().list()` / `client.NotificationList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationList(entopts) {
    const self = this
    return new NotificationListEntity(self, entopts)
  }


  // Entity access: `client.NotificationMemberCreator().list()` / `client.NotificationMemberCreator().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationMemberCreator(entopts) {
    const self = this
    return new NotificationMemberCreatorEntity(self, entopts)
  }


  // Entity access: `client.NotificationsChannelSetting().list()` / `client.NotificationsChannelSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NotificationsChannelSetting(entopts) {
    const self = this
    return new NotificationsChannelSettingEntity(self, entopts)
  }


  // Entity access: `client.Option().list()` / `client.Option().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Option(entopts) {
    const self = this
    return new OptionEntity(self, entopts)
  }


  // Entity access: `client.OrgInviteRestrict().list()` / `client.OrgInviteRestrict().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrgInviteRestrict(entopts) {
    const self = this
    return new OrgInviteRestrictEntity(self, entopts)
  }


  // Entity access: `client.Organization().list()` / `client.Organization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Organization(entopts) {
    const self = this
    return new OrganizationEntity(self, entopts)
  }


  // Entity access: `client.PendingOrganization().list()` / `client.PendingOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PendingOrganization(entopts) {
    const self = this
    return new PendingOrganizationEntity(self, entopts)
  }


  // Entity access: `client.Plugin().list()` / `client.Plugin().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Plugin(entopts) {
    const self = this
    return new PluginEntity(self, entopts)
  }


  // Entity access: `client.PluginData().list()` / `client.PluginData().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PluginData(entopts) {
    const self = this
    return new PluginDataEntity(self, entopts)
  }


  // Entity access: `client.PluginListing().list()` / `client.PluginListing().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PluginListing(entopts) {
    const self = this
    return new PluginListingEntity(self, entopts)
  }


  // Entity access: `client.Reaction().list()` / `client.Reaction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reaction(entopts) {
    const self = this
    return new ReactionEntity(self, entopts)
  }


  // Entity access: `client.Read().list()` / `client.Read().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Read(entopts) {
    const self = this
    return new ReadEntity(self, entopts)
  }


  // Entity access: `client.SavedSearch().list()` / `client.SavedSearch().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SavedSearch(entopts) {
    const self = this
    return new SavedSearchEntity(self, entopts)
  }


  // Entity access: `client.Search().list()` / `client.Search().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Search(entopts) {
    const self = this
    return new SearchEntity(self, entopts)
  }


  // Entity access: `client.ShowSidebar().list()` / `client.ShowSidebar().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShowSidebar(entopts) {
    const self = this
    return new ShowSidebarEntity(self, entopts)
  }


  // Entity access: `client.ShowSidebarActivity().list()` / `client.ShowSidebarActivity().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShowSidebarActivity(entopts) {
    const self = this
    return new ShowSidebarActivityEntity(self, entopts)
  }


  // Entity access: `client.ShowSidebarBoardAction().list()` / `client.ShowSidebarBoardAction().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShowSidebarBoardAction(entopts) {
    const self = this
    return new ShowSidebarBoardActionEntity(self, entopts)
  }


  // Entity access: `client.ShowSidebarMember().list()` / `client.ShowSidebarMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ShowSidebarMember(entopts) {
    const self = this
    return new ShowSidebarMemberEntity(self, entopts)
  }


  // Entity access: `client.Sticker().list()` / `client.Sticker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Sticker(entopts) {
    const self = this
    return new StickerEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.TransferrableOrganization().list()` / `client.TransferrableOrganization().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransferrableOrganization(entopts) {
    const self = this
    return new TransferrableOrganizationEntity(self, entopts)
  }


  // Entity access: `client.TrelloList().list()` / `client.TrelloList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TrelloList(entopts) {
    const self = this
    return new TrelloListEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts) {
    const self = this
    return new WebhookEntity(self, entopts)
  }




  static test(testoptsarg, sdkoptsarg) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new TrelloSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts, sdkopts) {
    return TrelloSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Trello' }
  }

  toString() {
    return 'Trello ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = TrelloSDK


module.exports = {
  stdutil,
  config,

  BaseFeature,
  TrelloEntityBase,

  TrelloSDK,
  SDK,
}

