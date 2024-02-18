import React, { useState } from 'react';
import './style.css'; // Assuming global styling is acceptable
import hansImage from '../guy.png';
import AIChat from './AIChat';
import UserChat from './UserChat';

const Chat = () => {
  // Example state for managing messages
  const [messages, setMessages] = useState([]);

  // Handle sending a message (update state and potentially send to backend)
  const sendMessage = (message) => {
    // Logic to send message
    setMessages([...messages, message]);
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
        {/* <UserChat message='how old are you'></UserChat> */}

    </div>
    <div class="chat-input-wrapper">
      <button class="chat-attachment-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-paperclip" viewBox="0 0 24 24">
          <defs/>
          <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>
        </svg>
      </button>
      <div class="input-wrapper">
        <input type="text" class="chat-input" placeholder="Enter your message here"></input>
        <button class="emoji-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-smile" viewBox="0 0 24 24">
          <defs/>
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
        </svg>
      </button>
      </div>
      <button class="chat-send-btn">Send</button>
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
