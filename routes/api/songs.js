const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/api/songs');

// GET /api/songs/
router.get('/', songsCtrl.index);

// POST /api/songs/search
router.post('/search', songsCtrl.findSongs);

// POST /api/songs/create
router.post('/create', songsCtrl.createOrUpdateSong);

// POST /api/songs/update
router.post('/update', songsCtrl.createOrUpdateSong);

// POST /api/songs/detail
router.post('/detail', songsCtrl.findSongById);

module.exports = router;
