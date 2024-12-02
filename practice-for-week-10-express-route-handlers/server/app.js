// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json())
app.use((req, res, next) => {
console.log("Request body:", req.body)
next()

})

app.get("/", (req, res) => {
  res.send("... dj guga ala felipa...")
})

app.get("/artists", (req, res) => {
  res.json(getAllArtists())

})

app.post("/artists", (req, res) => {
const data = req.body
res.status(201)
res.json(addArtist(data))


})

app.get("/artists/latest", (req, res) => {

res.json(getLatestArtist())
})


app.get("/artists/latest/albums", (req, res) => {

res.json(getAlbumsForLatestArtist())



})











// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port, "http://localhost:8000"));
} else {
  module.exports = app;
}