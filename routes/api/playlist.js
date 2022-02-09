const express = require('express');
const router = express.Router();
const playlistCtrl = require('../../controllers/api/playlist');

// GET /api/playlist/
router.get('/', playlistCtrl.index);
// POST /api/playlist/add
router.get('/song', playlistCtrl.addEntry);

module.exports = router;
