class ChatController {
    async sendMessage(req, res) {
        const { userId, message } = req.body;
        try {
            const chatMessage = new Chat({ userId, message, timestamp: new Date() });
            await chatMessage.save();
            res.status(201).json(chatMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to send message' });
        }
    }

    async getMessages(req, res) {
        try {
            const messages = await Chat.find().sort({ timestamp: -1 });
            res.status(200).json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve messages' });
        }
    }
}

module.exports = new ChatController();