import React from "react";
import "./conversation.css";

export default function conversation() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img className="conversationImg" src={PF + "person/1.jpeg"} alt="" />
      <span className="conversationName">John Doe</span>
    </div>
  );
}
