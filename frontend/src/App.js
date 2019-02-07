import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header row">
          <p>
            This will be a navbar. <a
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
          <p>We will render the router here. The router will render our various components. The code for the router is contained in router.js.</p>
        </div>
      </div>
    );
  }
}

export default App;
