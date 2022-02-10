const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/api/songs');

// GET /api/songs/
router.get('/', songsCtrl.index);

// POST /api/songs/search
router.post('/search', songsCtrl.findSongs);

// POST /api/songs/create
router.post('/create', songsCtrl.createSong);

module.exports = router;
