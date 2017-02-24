'use strict'

let Photos = require('./photos.model'),
    moment = require('moment')

// converting moment to unix and viceversa
// let a = moment('2017-05-02').unix()
// let b = moment.unix(a).format('YYYY-MM-DD', 'X')

module.exports = {
    post: (req, res) => {
      let id = req.params.id
      let album = req.body.image
      let photo = {
        album_id: req.params.id,
        description: req.body.image.description
        , image: req.body.image.image
      }
      Photos.create(photo)
      .then(photo => {

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
