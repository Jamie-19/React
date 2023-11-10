/*import React, { useState } from 'react';
import './chat.css';  // Import your CSS file for styling

const Message = ({ text, sender }) => (
  <div className={`message ${sender === 'user' ? 'user' : 'other'}`}>
    <span>{text}</span>
  </div>
);

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      return;
    }

    const updatedMessages = [...messages, { text: newMessage, sender: 'user' }];
    setMessages(updatedMessages);
    setNewMessage('');
  };

  return (
    <div className="chat-app">
      <div className="chat-header">Chat App</div>

      <div className="chat-box">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} sender={message.sender} />
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
*/