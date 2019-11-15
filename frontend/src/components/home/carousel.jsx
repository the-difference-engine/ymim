import React, { Component } from "react";
import { Carousel, Navbar } from "react-bootstrap";
import "./index.css";
import ymim1 from "../../assets/ymim1.png";
import ymim5 from "../../assets/ymim5.png";
import ymim6 from "../../assets/ymim6.png";
import ymim7 from "../../assets/ymim7.png";
import logo from "../../assets/logo.png";

class MainCarousel extends Component {
  render() {
    return (
      <Carousel className="main">
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={ymim1}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilders in Motion</h3>
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
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={ymim5}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilders in Motion</h3>
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
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={ymim6}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilders in Motion</h3>
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
        <Carousel.Item>
          <img
            className="d-block w-100 blurImage"
            src={ymim7}
            alt="First Slide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilders in Motion</h3>
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

export default MainCarousel;
