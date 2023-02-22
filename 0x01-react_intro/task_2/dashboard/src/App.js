import logo from "./logo.jpg";
import React from "react";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="form">
          <label>Email: </label>
          <input type="email" name="email" id="email" />

          <label>Password: </label>
          <input type="password" name="password" id="password" />

          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;
