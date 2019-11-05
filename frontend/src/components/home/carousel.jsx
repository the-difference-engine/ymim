import React, { Component } from "react";
import { Carousel, Navbar } from "react-bootstrap";
import "./index.css";
import ymim from "../../assets/ymim6.jpeg";
import logo from "../../assets/logo.png";

class MainCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={ymim}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilders in Motion</h3>
              <p className="paragraph-carousel">
                Inspires, connects, and empowers young women orphans, adoptees,
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

export default MainCarousel;
