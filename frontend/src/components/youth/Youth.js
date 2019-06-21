import React, { Component } from "react";
import SingleCarousel from "../SingleCarousel/SingleCarousel";
import "./index.css";

class Youth extends Component {
  render() {
    return (
      <>
        <SingleCarousel className="viewCarousel" header={"Youth Resources"} />
        <div className="container viewHeight">
          <h1>Youth Resources</h1>

          <p> lorem ipson dolor http://</p>
        </div>
      </>
    );
  }
}

export default Youth;
