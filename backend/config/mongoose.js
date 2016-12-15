'use strict'
let mongoose = require('mongoose')
, config = require('./config')


module.exports.connect = () => {
  mongoose.connect(`mongodb://${config.db.server}:${config.db.port}/${config.db.database}`)
  mongoose.connection.once('open', () => {
    console.log('Starting up the DB')
  })
}
module.exports.db = () => {
  return mongoose
}
