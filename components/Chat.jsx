'use client';

import { useChat } from 'ai/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Link from 'next/link';
import Image from 'next/image';


const Chat = () => {
    const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat();
    const handleClearMessages = () => { setMessages([]); };
    const highlightCodeBlocks = (response) => {
        // Regular expression to detect code blocks enclosed in triple backticks (```)
        const codeBlockRegex = /```([\s\S]*?)```/g;
        const parts = response.split(codeBlockRegex);
    
        return parts.map((part, index) => {
          if (index % 2 === 0) {
            // Even indexes contain text, return as-is
            return <span key={index}>{part}</span>;
          } else {
            // Odd indexes contain code blocks, apply syntax highlighting
            return (
              <SyntaxHighlighter key={index} language="python" style={atomDark}>
                {part}
              </SyntaxHighlighter>
            );
          }
        });
      };
  return (
    <>
        <div className="chat-header">
            <div className="logo-container">
                <img
                    src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
                    alt="hugging"
                    width={40}
                    height={40}
                />
                <p className="logo-text">Explore my AI Chat Bot, driven by Hugging Faces' advanced Chat Model</p>
                 <Link href="/chat" className="flex gap-2 flex-center">
                    <Image 
                        src="/assets/images/fulll.svg" 
                        alt="full" 
                        width={40} 
                        height={40}
                        style={{ marginLeft: 'auto', marginBottom: 'auto' }}
                    />
                </Link>
            </div>
            <p className="chat-subtitle">Feel free to copy AI prompts shared by other users below</p>
           
            
        </div>
        <div className="message-container">
            {messages.map((m) => (
            <div key={m.id} className={`message ${m.role}`}>
                <p className="message-content">
                {/* Check if the message is from the AI and contains code */}
                {m.content.includes('```') ? (
                    // If it contains code, highlight the code block
                    highlightCodeBlocks(m.content)
                ) : (
                    // Otherwise, display the message as-is
                    m.content
                )}
                </p>
            </div>
            ))}
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
    </>
    );
};

export default Chat;