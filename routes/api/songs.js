const express = require('express');
const router = express.Router();
const songsCtrl = require('../../controllers/api/songs');

// GET /api/songs/
router.get('/', songsCtrl.index);
// POST /api/songs/search
router.post('/search', songsCtrl.findSongs);

module.exports = router;
