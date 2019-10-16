import React, { Component } from "react";
import MainCarousel from "./carousel";
import UpperMid from "./midsection/upper_mid";
import LowerMid from "./midsection/lower_mid";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MainCarousel />
        <UpperMid />
        <LowerMid />
      </div>
    );
  }
}

export default Home;
