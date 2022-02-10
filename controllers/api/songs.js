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
  console.log(Song);
  const songs = await Song.find({title: req.params.title});
  res.json(songs);
}

// Create new song.
async function create(req, res) {
  console.log(Song);

  // Make new Song object and save it.
  req.body.user = req.user._id;
  const song = new Song(req.body);
  await song.save();
  res.json(song);
}

