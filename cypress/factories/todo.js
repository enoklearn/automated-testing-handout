const { Factory } = require('fishery')

module.exports = Factory.define(({ sequence }) => (
  `Todo #${sequence}`
))