import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const response = await axios.get('/api/chat');
        setMessages(response.data);
    };

    const sendMessage = async (e) => {
        e.preventDefault();
        if (input.trim()) {
            const newMessage = { message: input };
            await axios.post('/api/chat', newMessage);
            setInput('');
            fetchMessages();
        }
    };

    return (
        <div>
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatComponent;