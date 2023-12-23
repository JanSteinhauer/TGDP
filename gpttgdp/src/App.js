import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import OpenAI from "openai";
import hansImage from './guy.png';

function App() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]); // Store all messages
  const [isLoading, setIsLoading] = useState(false); // Loading state to control request



  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  const openai = new OpenAI({ apiKey: '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', dangerouslyAllowBrowser: true });
  async function gpt() {
    if (!isLoading) { // Only proceed if not already loading
      setIsLoading(true); // Set loading state to true
      try {
        const completion = await openai.chat.completions.create({
          messages: [
            { "role": "system", "content": "Hans ist ein texas deutscher chat bot, welcher sarcastisch und stolz auf seine Heimat ist" },
            { "role": "user", "content": inputText },
          ],
          model: "ft:gpt-3.5-turbo-1106:personal::8YksXzih",
        });
        setMessages(messages => [...messages, { text: inputText, sender: 'user' }]);
        if (completion.choices[0] && completion.choices[0].message.content) {
          setMessages(messages => [...messages, { text: completion.choices[0].message.content, sender: 'bot' }]);
        }
      } catch (error) {
        console.error('Error during API request:', error);
      } finally {
        setIsLoading(false); // Reset loading state regardless of success or failure
      }
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="chat-header">
          <img src={hansImage} alt="Hans" className="hans-image" />
          <h3>Schreibe mit Hans aus Fredericksburg, Tx</h3>
        </div>
        <div className="chat-container">
        
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="textInput"
            placeholder="Frage mich etwas"
          />
          <button onClick={() => gpt()}>Senden</button>
        </div>
        <br></br>
        <div className="hans-introduction">
  <img src={hansImage} alt="Hans" className="hans-image2" />
  <div className="hans-textfield">
    <p>Ich bin Hans. Ich bin eine KI, welche darauf trainiert wurde Texas Deutsch zu sprechen. Gerne spreche ich über meine Heimat Fredericksburg, den zweiten Weltkrieg und natürlich über Texas.</p>
  </div>
</div>
      </header>
    </div>
  );
}


export default App;