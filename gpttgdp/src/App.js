import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import OpenAI from "openai";
import hansImage from './guy.png';
import Chat from './components/Chat';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      <div className="chat-header">
          {/* <img src={hansImage} alt="Hans" className="hans-image" /> */}
          <h3>Schreibe mit Hans aus Fredericksburg, Tx</h3>
        </div>
        <Chat></Chat>
    
      </header>
    </div>
  );
}


export default App;