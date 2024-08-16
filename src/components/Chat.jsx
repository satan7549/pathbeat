import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../redux/chatSlice";

const Chat = () => {
  const [input, setInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [sender, setSender] = useState("");
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(
        sendMessage({
          text: input,
          sender: sender,
        })
      );
      setInput("");
    }
  };

  const handleSetSender = () => {
    const currentSender = nameInput !== "" ? nameInput : "Anonymous";
    setSender(currentSender);
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h3>Simple Chat</h3>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          placeholder="Enter your name..."
          style={{ padding: "10px", width: "70%" }}
        />
        <button
          onClick={handleSetSender}
          style={{
            padding: "10px",
            marginLeft: "5px",
          }}
        >
          Set Name
        </button>
      </div>
      <h3>Current User : {sender !== "" ? sender : "Anonymous"}</h3>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          minHeight: "200px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            <strong>{message.sender}</strong>: {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ padding: "10px", width: "80%" }}
        />
        <button type="submit" style={{ padding: "10px", marginLeft: "5px" }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
