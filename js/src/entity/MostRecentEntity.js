
const { inspect } = require('node:util')

const { TrelloEntityBase } = require('../TrelloEntityBase')


// TODO: needs Entity superclass
class MostRecentEntity extends TrelloEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'most_recent'
    this.name_ = 'most_recent'
    this.Name = 'MostRecent'
  }


  make() {
    return new MostRecentEntity(this._client, this.entopts())
  }







}


module.exports = {
  MostRecentEntity
}
