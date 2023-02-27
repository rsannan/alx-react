import React, { Component } from "react";
import "./Login.css";

export function NotificationItem(type, value, html) {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={{ __html: { html } }}
    >
      {value}
    </li>
  );
}
