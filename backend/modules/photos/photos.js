'use strict'

let Photos = require('./photos.model'),
    moment = require('moment')
    , path = require('path')
    , fs = require('fs')
  //  , parsedURL = require('parsed-data-url')
// converting moment to unix and viceversa
// let a = moment('2017-05-02').unix()
// let b = moment.unix(a).format('YYYY-MM-DD', 'X')

module.exports = {
    post: (req, res) => {
      let photo = {
        album_id: req.params.id,
        description: req.body.image.description
      }
      Photos.create(photo)
      .then(photo => {
        fs.writeFile('backend/photos/' + photo._id + ".jpg", new Buffer(req.body.image.image.split(",")[1], 'base64'))
      })
    },
    get: (req, res) => {
        Photos.find({'album_id': req.params.id})
        .then(result => {
          res.json({
              'photos': result
          })
        })
    }
}
