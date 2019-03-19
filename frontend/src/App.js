import React, { Component } from "react";
import "./App.css";
import dotenv from "dotenv";
require("dotenv").config();
dotenv.config();

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header row">
          <p>
            This will be a navbar.{" "}
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Docs
            </a>
          </p>
        </header>
        <div className="row page-contents">
          <p>
            This is a sample component that currently lives at the root of our
            application.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
