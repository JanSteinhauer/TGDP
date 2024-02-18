import React, { useState } from 'react';
import './style.css'; // Assuming global styling is acceptable
import hansImage from '../guy.png';


function UserChat() {
  
  return (
    <div class="message-wrapper reverse">
    <img class="message-pp" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile-pic"></img>
    <div class="message-box-wrapper">
      <div class="message-box">
        Lorem ipsum dolor
      </div>

    </div>
  </div>
  );
}


export default UserChat;