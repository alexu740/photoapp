'use strict'

let Albums = require('./albums.model')

module.exports.createAlbum = (req, res) => {
  Albums.create({
    title: "album1"
    , date: "10/10/2016"
    , description: "awdrges"
    // , photos: []
  })
  .then(album => {
    console.log(album, 'saved!')
  })
  .catch(err => {
    console.log(err)
  })
}

module.exports.test = (req, res) => {
  console.log("Route setted up!")
  res.send('OK')
}
