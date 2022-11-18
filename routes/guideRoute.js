const express = require('express');
const router = express.Router();

const GuideController = require('../controllers/guideController');

router.get("/", GuideController.getGuide);

router.get("/:guideName", GuideController.bookGuide);

module.exports = router