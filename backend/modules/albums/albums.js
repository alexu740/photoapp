'use strict'

let Albums = require('./albums.model')
, moment = require('moment')

// converting moment to unix and viceversa
// let a = moment('2017-05-02').unix()
// let b = moment.unix(a).format('YYYY-MM-DD', 'X')

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
