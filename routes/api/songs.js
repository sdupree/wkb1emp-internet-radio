const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/api/songs');

// GET /api/songs/
router.get('/', songsCtrl.index);
// GET /api/songs/song
router.get('/song', songsCtrl.song);

module.exports = router;
