'use strict'

let Albums = require('./albums.model')
module.exports = {
    post: (req, res) => {
      console.log(req.body)
        Albums.create(req.body.al)
            .then(album => {
                console.log(album, 'saved!')
            })
            .catch(err => {
                console.log(err)
            })
    },
    get: (req, res) => {
        Albums.find()
            .then(albums => {
                res.json({
                    'albums': albums
                })
            })
    }
}
