import React from "react";
import "./Notifications.css";
import closeIcon from "./icons8-close-window-24.png";
import { getLatestNotification } from "./utils";

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
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}
