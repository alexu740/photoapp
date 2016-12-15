'use strict'
let mongoose = require('../../config/mongoose.js').db()
, Schema = mongoose.Schema
, ObjectId = Schema.Types.ObjectId

module.exports = new Schema({
    title: String
    , date: Date
    , description: String
    , photos: [{
      type: ObjectId
      , ref: 'Photo' }
    ]
})
