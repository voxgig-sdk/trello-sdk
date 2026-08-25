"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MostRecentEntity = void 0;
const TrelloEntityBase_1 = require("../TrelloEntityBase");
// TODO: needs Entity superclass
class MostRecentEntity extends TrelloEntityBase_1.TrelloEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'most_recent';
        this.name_ = 'most_recent';
        this.Name = 'MostRecent';
    }
    make() {
        return new MostRecentEntity(this._client, this.entopts());
    }
}
exports.MostRecentEntity = MostRecentEntity;
//# sourceMappingURL=MostRecentEntity.js.map