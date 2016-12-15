'use strict'
let app = require('./backend/app')

    app.init(__dirname + '/public/')
    app.start()
//
// app.use(bodyParser.json({limit: '5mb'}))
// app.use(express.static(__dirname))

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'))
// })
//
// app.get("/getAlbums", (req, res) => {
//     fs.readFile('albums.json', (err, data) => {
//         if (err) res.send("ERROR READING FILE!")
//         else {
//             res.send(data.toString() + ']')
//         }
//     })
// })
//
// app.post("/addAlbum", function(req, res) {
//     console.log(req.body.album)
//     fs.appendFile('albums.json', ', ' + JSON.stringify(req.body.album), function(err) {
//         console.log("SMTH WENT WRONG WHEN ADDING AN ALBUM!!!")
//     })
//     fs.writeFile(req.body.album.name + ".json", "[{'i':'img'}", err =>{
//
//     })
//
// })
//
// app.get("/getPhotos/:album_id", function(req, res) {
//
//     fs.readFile(req.params.album_id + ".json", (err,data) =>{
//       res.send(data.toString() + "]")
//     })
// })
//
//
//
// app.post("/addPhoto/:album_id", function(req, res) {
//
//     fs.writeFile(req.params.album_id + ".json", ", " + JSON.stringify(req.body.image), function(err) {
//         if (err) {
//             return console.log(err);
//         }
//
//         console.log("The file was saved!");
//     });
// })
//
// app.listen(9010)
// console.log('Express server started on port 9010')
