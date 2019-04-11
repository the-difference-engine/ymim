import React, { Component } from "react";
import CarouselComponent from './Carousel'

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home container">
        <h1>YMIM</h1>
        <CarouselComponent />
      </div>
    );
  }
}

export default Home;
