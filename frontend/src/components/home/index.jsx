import React, { Component } from "react";
import CarouselComponent from "./carousel";
import UpperMid from "./midsection/upper_mid";
import LowerMid from "./midsection/lower_mid";
import TopFooter from "./TopFooter";

import "./index.css";


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
