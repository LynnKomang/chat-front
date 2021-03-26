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
    <div className="main h-screen">
      <h1 className="title">Socket.IO Test!</h1>
      <div className="p-8 m-16 border-primary-200 border-4 rounded-3xl h-5/6">
        <Messages
          messages={messages}
          className="h-5/6 border-gray-400 border-2 overflow-hidden overflow-y-scroll bg-gradient-to-b from-white to-primary-200"
        />
        <div className="mt-4 w-full flex">
          <textarea
            type="text"
            placeholder="Enter your text"
            className=" p-1 w-10/12 border-gray-400 border-2"
            onChange={(e) => setCurrentMessage(e.target.value)}
            value={currentMessage}
          />
          <button
            className="w-2/12 btn-primary"
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
