const { Factory } = require('fishery')

module.exports = Factory.define(({ sequence }) => ({
  id: `${sequence}`,
  title: `Todo #${sequence}`,
}))