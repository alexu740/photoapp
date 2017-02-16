'use strict'
let app = require('./backend/app')

app.init(__dirname + '/dist')
app.start()
