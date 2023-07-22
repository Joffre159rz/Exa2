const express = require('express');
const router = express.Router();
const dataController = require('../controllers/data.controller');

router.get('/api/data', dataController.getData);

module.exports = router;