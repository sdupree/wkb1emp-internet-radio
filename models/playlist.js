const Playlist = require('../../models/playlist');

module.exports = {
  index,
  add,
  deleteEntry
};

async function index(req, res) {
  const playlist = await Playlist.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  // items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(playlist);
}

async function add(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  res.json(playlist);
}

async function deleteEntry(req, res) {
  const playlist = await Playlist.findById(req.params.id);
  res.json(playlist);
}
  