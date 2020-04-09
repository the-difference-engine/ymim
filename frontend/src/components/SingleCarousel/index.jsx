import React, { Component } from "react";
import { Carousel, Navbar } from "react-bootstrap";
import "./index.css";
import logo from "../../assets/logo.png";

class SingleCarousel extends Component {
  render() {
    let pat = /^https?:\/\//i;
    let image = "";
    if (this.props.image) {
      if (pat.test(this.props.image)) {
        image = this.props.image;
      } else {
        image = require("../../assets/" + this.props.image);
      }
    }

    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={image}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div className="overlay">
              <h3 className="title-carousel">{this.props.header}</h3>
              <p className="paragraph-carousel">
                <strong>
                  Inspires, connects, and empowers young women orphans,
                  adoptees, and foster youth alumnae to thrive.
                </strong>
              </p>
              <Navbar.Brand className="logo-div">
                <img className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default SingleCarousel;
