const express = require('express');
const router = express.Router();

const ChatController = require('../controllers/chatController');

router.get("/", ChatController.getChat);

module.exports = router