const enterprisesControllers = require('../controllers/enterprisesControllers.js');
const express = require('express');
const router = express.Router();

router.get('/', enterprisesControllers.login);
router.get('/clients', enterprisesControllers.clubE);
router.get('/register', enterprisesControllers.register);
router.post('/register', enterprisesControllers.storage);
module.exports = router;
