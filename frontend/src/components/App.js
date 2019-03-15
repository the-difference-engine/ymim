import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Appform from './ApplicationForms/Appform';


class App extends Component { 
  render() {
    return (
      <Router>
      <div className="App">
      <Appform />
      </div>
      </Router>
    );
  }
}

export default App;
