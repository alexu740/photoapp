'use strict'
let mongoose = require('../../config/mongoose.js').db()
, Schema = mongoose.Schema
, ObjectId = mongoose.ObjectId

module.exports = new Schema({
    title: String
    , date: Date
    , description: String
    , image: String
})
