const express = require('express');
const router = express.Router();
const { getTodayJSON } = require('../controllers/index.controller');

router.get('/', getTodayJSON);

module.exports = router;
