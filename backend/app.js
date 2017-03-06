'use strict'
let express = require('express'),
    app = express(),
    mongoose = require('./config/mongoose'),
    mainRouter = express.Router(),
    config = require('./config/config'),
    path = require('path'),
    bodyParser = require('body-parser'),
    albumRouter = require('./modules/albums/albums.routes.js'),
    photoRouter = require('./modules/photos/photos.routes.js')

module.exports.init = (dirname) => {
    mongoose.connect()
    app.use(bodyParser.json({
        limit: '5mb'
    }))
    app.use(express.static(dirname))
    app.use('/img', express.static(path.join(__dirname + '/photos')))
    mainRouter.get("/", function(req, res) {
        console.log("Index requested")
        res.sendFile(path.join(dirname + '/index.html'))
    })
    albumRouter(mainRouter)
    photoRouter(mainRouter)
    console.log(path.join(dirname + '/index.html'))
    app.use(mainRouter)
}

module.exports.start = () => {
    console.log("Application starting 1.0.0 on port: " + config.app.port)
    app.listen(config.app.port, '0.0.0.0')
}
