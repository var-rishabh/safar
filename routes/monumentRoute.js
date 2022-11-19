const express = require('express');
const router = express.Router();

const MonumentController = require('../controllers/monumentController');

router.post("/", MonumentController.bookMonuments);

router.get("/", MonumentController.getMonuments);

router.get("/:monumentName", MonumentController.bookMonument);

router.post("/get/monument",MonumentController.getMonument);

module.exports = router