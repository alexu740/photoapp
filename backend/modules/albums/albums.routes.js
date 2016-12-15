'use strict'

let Router = require('express').Router
, albumRouter = new Router()
, albums = require('./albums.js')

module.exports = (mainRouter) => {
albumRouter.route('/')
.get(albums.test)
.post(albums.createAlbum)

mainRouter.use('/albums', albumRouter)
}
