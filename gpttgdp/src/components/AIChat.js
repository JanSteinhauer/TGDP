import React, { useState } from 'react';
import './style.css'; // Assuming global styling is acceptable
import hansImage from '../guy.png';


function AIChat(props) {
  
  return (
    <div class="message-wrapper">
    <img class="message-pp" src={hansImage}></img>
    <div class="message-box-wrapper">
      <div class="message-box">
        {props.message}
      </div>

    </div>
  </div>
  );
}


export default AIChat;