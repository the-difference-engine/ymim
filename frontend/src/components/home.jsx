import React, { Component } from "react";
import CarouselComponent from './carousel'
import UpperMid from './Midsection/UpperMid'
import LowerMid from './Midsection/LowerMid'
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <CarouselComponent />
        <UpperMid />
        <LowerMid />
      </div>
    );
  }
}

export default Home;
