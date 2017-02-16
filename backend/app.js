'use strict'
let express = require('express'),
    app = express(),
    mongoose = require('./config/mongoose'),
    mainRouter = express.Router(),
    config = require('./config/config'),
    path = require('path'),
    bodyParser = require('body-parser')
    , injectRoute = require('./modules/albums/albums.routes.js')

module.exports.init = (dirname) => {
    mongoose.connect()
    app.use(bodyParser.json({
        limit: '5mb'
    }))
    app.use(express.static(dirname))
    mainRouter.get("/", function(req, res) {
        res.sendFile(path.join(dirname + '/index.html'))
    })
    injectRoute(mainRouter)
    console.log(path.join(dirname + '/index.html'))
    app.use(mainRouter)

}

module.exports.start = () => {
    console.log("Application starting 1.0.0")
    app.listen(config.app.port)
}
