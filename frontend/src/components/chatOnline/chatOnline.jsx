import React from "react";
import "./chatOnline.css";

export default function chatOnline() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={PF + "person/7.jpeg"} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineUsername">john Doe</span>
      </div>
    </div>
  );
}
