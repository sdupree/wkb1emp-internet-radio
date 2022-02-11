const Song = require('../../models/song');

module.exports = {
  index,
  findSongs,
  createSong: create
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
  console.log("Songs fonud:", songs.length);
  res.json(songs);
}

// Create new song.
async function create(req, res) {
  // Make new Song object and save it.
  req.body.createdBy = req.user._id;
  const song = new Song(req.body);
  await song.save();
  res.json(song);
}

