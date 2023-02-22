import React from "react";
import "./Notifications.css";
import closeIcon from "./icons8-close-window-24.png";

const notificationStyle = {
  position: "absolute",
  right: 0,
  top: 0,
  padding: 0,
  border: 0,
};

function btnClick() {
  return console.log("Close button has been clicked");
}
export default function showNotification() {
  return (
    <div className="root-notifications">
      <button style={notificationStyle} aria-label="Close" onClick={btnClick}>
        <img src={closeIcon} alt="close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li>New course available</li>
        <li>New resume available</li>
      </ul>
    </div>
  );
}
