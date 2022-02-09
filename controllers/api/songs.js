const Song = require('../../models/song');

module.exports = {
  index,
  findSongs
};

// Get all the songs.
async function index(req, res) {
  const songs = await Song.find({}).sort('title').populate('artist').exec();
  res.json(songs);
}

// Find songs (search).
async function findSongs(req, res) {
  const songs = await Song.find({title: req.params.title});
  res.json(songs);
}

