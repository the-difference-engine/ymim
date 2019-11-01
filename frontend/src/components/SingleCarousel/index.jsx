import React, { Component } from "react";
import { Carousel, Navbar } from "react-bootstrap";
import "./index.css";
import logo from "../../assets/logo.png";

class SingleCarousel extends Component { 
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={require("../../assets/" + this.props.image)}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div className="overlay">
              <h3 className="title-carousel">{this.props.header}</h3>
              <p className="paragraph-carousel">
                inspires, connects, and empowers young women orphans, adoptees,
                and foster youth alumnae to thrive.
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
