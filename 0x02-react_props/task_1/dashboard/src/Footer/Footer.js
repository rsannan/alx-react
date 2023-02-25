import React, { Component } from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

export class Footer extends Component {
  render() {
    return (
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    );
  }
}
