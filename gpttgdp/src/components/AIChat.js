import React, { useState } from 'react';
import './style.css'; // Assuming global styling is acceptable
import hansImage from '../guy.png';


function AIChat() {
  
  return (
    <div class="message-wrapper">
    <img class="message-pp" src={hansImage}></img>
    <div class="message-box-wrapper">
      <div class="message-box">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
      </div>

    </div>
  </div>
  );
}


export default AIChat;