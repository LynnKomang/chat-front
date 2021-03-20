import React, { useState } from "react";
import Messages from "./components/Messages/Messages";
import "./App.css";
import "./components/Button/Button.css";

function App() {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages(messages.concat(message));
  };

  return (
    <div className="main">
      <h1 className="title">Socket.IO Test!</h1>
      <div className="p-8 m-32 border-primary-200 border-4 rounded-3xl">
        <Messages messages={messages} />
        <input
          type="text"
          placeholder="Enter your text"
          className="border-gray-400 w-1/2 border-2 rounded-md p-1 block mx-auto"
          onChange={(e) => setCurrentMessage(e.target.value)}
          value={currentMessage}
        />

        <div className="text-center p-4">
          <button
            className="btn-primary"
            onClick={() => addMessage(currentMessage)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
