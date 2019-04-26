import React, { Component } from "react";
import CarouselComponent from "./carousel";

import "./index.css";

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
