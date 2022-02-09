const Song = require('../../models/song');

module.exports = {
  index,
  findSong
};

// Get all the songs.
async function index(req, res) {
  const songs = await Song.find({}).sort('title').populate('artist').exec();
  res.json(songs);
}

// Find one song (search).
async function findSong(req, res) {
  const song = await Song.find({title: req.params.title});
  res.json(song);
}

