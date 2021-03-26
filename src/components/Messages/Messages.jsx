import React, { useState } from "react";

export default function Messages({ messages, className }) {
  const messagesList = messages.map((currMessage, index) => (
    <li className="w-max max-w-prose p-3 my-5 mx-6 shadow-md bg-white rounded-lg break-words" key={index}>{currMessage}</li>
  ));

  return <ul className={`${className}`}>{messagesList}</ul>;
}
