const apaClubControllers = require('../controllers/apaClubControllers.js');
const express = require('express');
const router = express.Router();

router.get('/', apaClubControllers.index)

module.exports = router
