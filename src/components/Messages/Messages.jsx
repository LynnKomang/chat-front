import React, { useState } from "react";

export default function Messages({ messages }) {
  const messagesList = messages.map((currMessage, index) => (
    <li key={index}>{currMessage}</li>
  ));

  return <ul>{messagesList}</ul>;
}
