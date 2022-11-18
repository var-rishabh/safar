const express = require('express');
const router = express.Router();

const MonumentController = require('../controllers/monumentController');

router.get("/", MonumentController.getMonuments);

// router.get("/:monumentName", MonumentController.bookMonument);

router.get("/mn",MonumentController.getMonument);

module.exports = router