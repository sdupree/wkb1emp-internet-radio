const Song = require('../../models/song');

module.exports = {
  index,
  findSongs,
  createOrUpdateSong
};

// Get all the songs.
async function index(req, res) {
  const songs = await Song.find({}).sort('title').populate('artist').exec();
  res.json(songs);
}

// Find songs (search).
async function findSongs(req, res) {
  const regEx = new RegExp('.*' + req.body.searchString + '.*', 'i');
  const songs = await Song.find({$or: [{title: regEx}, {artist: regEx}]});
  console.log("Songs found:", songs.length);
  res.json(songs);
}

// Create new song, or update existing song.
async function createOrUpdateSong(req, res) {
  console.log(req.user._id);
  const song = await Song.createOrUpdate(req.body, req.user._id);
  res.json(song);
}
