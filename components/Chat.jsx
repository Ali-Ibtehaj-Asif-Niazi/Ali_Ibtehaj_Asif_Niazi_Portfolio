'use client';

import { useChat } from 'ai/react';


const Chat = () => {
const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat();
  const handleClearMessages = () => {
    setMessages([]);
  };
  return (
    <div className="chat-container">
        <div className="chat-header">
            <div className="logo-container">
            <p className="logo-text">Explore my AI Chat Bot, driven by Hugging Faces' advanced Chat Model</p>
            <img
                src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                alt="hugging"
                width={50}
                height={50}
                className="logo-image"
            />
            </div>
            <p className="chat-subtitle">Feel free to copy AI prompts shared by other users below</p>
        </div>
        <div className="message-container">
            {messages.map(m => (
                <div key={m.id} className={`message ${m.role}`}>
                    {console.log(`Message role: ${m.role}`)}
                    <p className="message-content">{m.content}</p>
                </div>))}
        </div>
        <form onSubmit={handleSubmit} className="input-form">
            <input
            className="input-field"
            placeholder="Type your Prompt"
            value={input}
            onChange={handleInputChange}
            />
            <button type="submit" className="send-button">Send</button>
            <button onClick={handleClearMessages} className="clear-button">Clear</button>
        </form>
    </div>
    );
};

export default Chat;