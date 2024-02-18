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
        <AIChat></AIChat>
        <UserChat></UserChat>

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
          <div class="info-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-clock" viewBox="0 0 24 24">
              <defs/>
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <div class="info-text-wrapper">
            <span class="info-text-upper">13h</span>
            <span class="info-text-bottom">Time</span>
          </div>
        </div>
        <div class="activity-info-box atendee">
          <div class="info-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-users" viewBox="0 0 24 24">
              <defs/>
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
          <div class="info-text-wrapper">
            <span class="info-text-upper">32</span>
            <span class="info-text-bottom">Atendeed</span>
          </div>
        </div>
        <div class="activity-info-box meeting">
          <div class="info-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-calendar" viewBox="0 0 24 24">
              <defs/>
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <path d="M16 2v4M8 2v4M3 10h18"/>
            </svg>
          </div>
          <div class="info-text-wrapper">
            <span class="info-text-upper">122</span>
            <span class="info-text-bottom">Meetings</span>
          </div>
        </div>
        <div class="activity-info-box reject">
          <div class="info-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-square" viewBox="0 0 24 24">
              <defs/>
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
              <path d="M9 9l6 6M15 9l-6 6"/>
            </svg>
          </div>
          <div class="info-text-wrapper">
            <span class="info-text-upper">12</span>
            <span class="info-text-bottom">Rejected</span>
          </div>
        </div>
      </div>
      <div class="activity-info-header">
        <span class=
"info-header-bold">Current Week</span>
         <span class=
"info-header-light">Activity</span>
      </div>
      <div class="activity-days-wrapper">
        <div class="day">
          <div class="chart"></div>
          <span>MON</span>
        </div>
        <div class="day">
          <div class="chart"></div>
          <span>TUE</span>
        </div>
        <div class="day current">
          <div class="chart"></div>
          <span>WED</span>
        </div>
        <div class="day">
          <div class="chart"></div>
          <span>THU</span>
        </div>
        <div class="day">
          <div class="chart"></div>
          <span>FRI</span>
        </div>
        <div class="day">
          <div class="chart"></div>
          <span>SAT</span>
        </div>
        <div class="day">
          <div class="chart"></div>
          <span>SUN</span>
        </div>
      </div>
    </div>

  </div>
 
   
</div>
  );
};

export default Chat;
