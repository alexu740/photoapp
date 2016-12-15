let PhotoSchema = require('./photos.schema')
, mongoose = require('../../config/mongoose').db()
module.exports = mongoose.model('Photo', PhotoSchema)
