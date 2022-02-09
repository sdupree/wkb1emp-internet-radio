const Playlist = require('../../models/playlist');

module.exports = {
  index,
  addEntry
};

// Get all the entries.
async function index(req, res) {
  const entries = await Playlist.find({});
  res.json(entries);
}

// Add a new entry.
async function addEntry(req, res) {
  const entry = await Playlist.find({title: req.params.title});
  res.json(entry);
}

