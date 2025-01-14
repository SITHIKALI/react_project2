const express = require('express');
const ChatController = require('../controllers/chatController');

const router = express.Router();
const chatController = new ChatController();

function setRoutes(app) {
    router.post('/send', chatController.sendMessage);
    router.get('/messages', chatController.getMessages);
    app.use('/api/chat', router);
}

module.exports = setRoutes;