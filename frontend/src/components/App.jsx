import React, { Component } from "react";
import CarouselComponent from './Carousel'

import "./App.css";

class Home extends Component {
  render() {
    return (
      <div className="App container">
        <h1>YMIM</h1>
        <CarouselComponent />
      </div>
    );
  }
}

export default Home;
