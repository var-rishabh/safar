const express = require('express');
const router = express.Router();

const MonumentController = require('../controllers/monumentController');

router.get("/", MonumentController.getMonuments);

module.exports = router