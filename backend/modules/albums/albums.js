'use strict'

let Albums = require('./albums.model')
, moment = require('moment')
module.exports = {
    post: (req, res) => {
        req.body.al.date = moment(req.body.al.date).unix()
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
