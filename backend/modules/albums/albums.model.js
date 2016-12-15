let AlbumSchema = require('./albums.schema')
, mongoose = require('../../config/mongoose').db()
module.exports = mongoose.model('Album', AlbumSchema)
