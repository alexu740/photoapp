'use strict'

let Router = require('express').Router,
    albumRouter = new Router(),
    albums = require('./albums.js')

module.exports = (mainRouter) => {
    albumRouter.route('/')
        .get(albums.get)
        .post(albums.post)

    mainRouter.use('/albums', albumRouter)
}
