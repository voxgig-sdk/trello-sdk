"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationEntity = void 0;
const TrelloEntityBase_1 = require("../TrelloEntityBase");
// TODO: needs Entity superclass
class ApplicationEntity extends TrelloEntityBase_1.TrelloEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'application';
        this.name_ = 'application';
        this.Name = 'Application';
    }
    make() {
        return new ApplicationEntity(this._client, this.entopts());
    }
}
exports.ApplicationEntity = ApplicationEntity;
//# sourceMappingURL=ApplicationEntity.js.map