import React, { Component } from "react";
import CarouselComponent from './carousel'
import UpperMid from './Midsection/UpperMid'
import LowerMid from './Midsection/LowerMid'
import TopFooter from "./TopFooter";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <CarouselComponent />
        <UpperMid />
        <LowerMid />
        <TopFooter />

      </div>
    );
  }
}

export default Home;
