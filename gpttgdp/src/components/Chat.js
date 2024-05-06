import React, { useState } from 'react';
import './style.css'; // Assuming global styling is acceptable
import hansImage from '../guy.png';
import AIChat from './AIChat';
import UserChat from './UserChat';
import OpenAI from "openai";

const Chat = () => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const openai = new OpenAI({ apiKey: process.env.REACT_APP_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default Enter key action (e.g., form submission)
      sendMessage();
    }
  };

  const sendMessage = async () => {
    const userMessage = inputText.trim();
    if (!userMessage) return; // Prevent sending empty messages

    // Add user's message to messages state
    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);

    // Here you would call your API to get the response
    // For demonstration, I'm adding a placeholder response after a delay
    setTimeout(async() => {
      const completion = await openai.chat.completions.create({
        messages: [
          { "role": "system", "content": "Hans ist ein texas deutscher chat bot, welcher sarcastisch und stolz auf seine Heimat ist" },
          { "role": "user", "content": "Was machst du in deiner Freizeit?" },
          { "role": "assistant", "content": "Wir gehen zum Dancehall, um zu Tanzen und Spaß zu haben, y'all." },
          { "role": "user", "content": "Was machst du am liebsten im Sommer" },
          { "role": "assistant", "content": "Ich liebe es, im Sommer am River zu sein und zu fishen" },
          { "role": "user", "content": "Was für Gefahren gibt es in Texas" },
          { "role": "assistant", "content": " Pass auf die Rattlesnakes auf, wenn du durch das Mesquite-Gebüsch wanderst." },
          { "role": "user", "content": inputText },
        ],
        model: "ft:gpt-3.5-turbo-1106:personal::8YksXzih",
      });
    
      setMessages((prevMessages) => [...prevMessages, { text: completion.choices[0].message.content, sender: 'bot' }]);
    }, 1200);

    setInputText(''); // Clear input after sending
  };

  return (
    <div class="app-container">
  <div class="app-left">
   
    <div class="app-profile-box">
      <img class="profileImg" src={hansImage} alt="profile"></img>
      <div class="app-profile-box-name">
       Hans Steinhauer
        <button class="app-setting">
         
        </button>
      </div>
      <p class="app-profile-box-title">Metzger aus Leidenschaft</p>
     
    </div>


  </div>
  <div class="app-main">
    <div class="chat-wrapper">
        <AIChat message='Ich bin Hans. Ich bin eine KI, welche darauf trainiert wurde Texas Deutsch zu sprechen. Gerne spreche ich über meine Heimat Fredericksburg, den zweiten Weltkrieg und natürlich über Texas.'></AIChat>
        {messages.map((message, index) => message.sender === 'user' ? 
            <UserChat key={index} message={message.text} /> : 
            <AIChat key={index} message={message.text} />
          )}

    </div>
    <div class="chat-input-wrapper">
      <button class="chat-attachment-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-paperclip" viewBox="0 0 24 24">
          <defs/>
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
        </svg>
      </button>
      <div class="input-wrapper">
      <input 
            type="text" 
            className="chat-input" 
            placeholder="Bitte Frage mich etwas." 
            value={inputText} 
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Add the onKeyDown event listener
          />
        <button class="emoji-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-smile" viewBox="0 0 24 24">
          <defs/>
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
        </svg>
      </button>
      </div>
      <button class="chat-send-btn" onClick={sendMessage}>Send</button>
    </div>
  </div>
  <div class="app-right">

    <div class="app-activity-box">
      <div class="activity-info-boxes">
        <div class="activity-info-box time">
       
          <div class="info-text-wrapper">
            <span class="info-text-upper">Bauer</span>
            <span class="info-text-bottom">Am Wochenend</span>
          </div>
        </div>
        <div class="activity-info-box atendee">
         
          <div class="info-text-wrapper">
            <span class="info-text-upper">Stammtisch</span>
            <span class="info-text-bottom">mit Freunden aus Fredericksburg</span>
          </div>
        </div>
        <div class="activity-info-box meeting">
          
          <div class="info-text-wrapper">
            <span class="info-text-upper">Wurstfan</span>
            <span class="info-text-bottom">Ich liebe Blutwurst</span>
          </div>
        </div>
        <div class="activity-info-box reject">
          
          <div class="info-text-wrapper">
            <span class="info-text-upper">Schule</span>
            <span class="info-text-bottom">Meine Liebingsfach war Mathe</span>
          </div>
        </div>
      </div>

    </div>

  </div>
 
   
</div>
  );
};

export default Chat;
