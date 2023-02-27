import React, { Component } from "react";
import logo from "../assets/holberton_logo.jpg";
import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
    );
  }
}
