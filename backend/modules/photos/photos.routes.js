'use strict'

let Router = require('express').Router,
    photoRouter = new Router(),
    photos = require('./photos.js')

module.exports = (mainRouter) => {
    photoRouter.route('/:id')
    .post(photos.post)
    .get(photos.get)

    mainRouter.use('/photos', photoRouter)
}
