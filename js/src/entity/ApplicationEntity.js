
const { inspect } = require('node:util')

const { TrelloEntityBase } = require('../TrelloEntityBase')


// TODO: needs Entity superclass
class ApplicationEntity extends TrelloEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'application'
    this.name_ = 'application'
    this.Name = 'Application'
  }


  make() {
    return new ApplicationEntity(this._client, this.entopts())
  }







}


module.exports = {
  ApplicationEntity
}
