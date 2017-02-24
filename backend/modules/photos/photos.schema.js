'use strict'
let mongoose = require('../../config/mongoose.js').db()
, Schema = mongoose.Schema
, ObjectId = mongoose.ObjectId

module.exports = new Schema({
    album_id: String
    , description: String
    , image: String
})
