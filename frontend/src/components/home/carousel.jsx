import React, { Component } from "react";
import { Carousel, Navbar } from "react-bootstrap";
import ymim1 from "../../assets/ymim1.png";
import ymim5 from "../../assets/ymim5.png";
import ymim6 from "../../assets/ymim6.png";
import ymim7 from "../../assets/ymim7.png";
import "./index.css";
import ymim from "../../assets/ymim6.jpeg";
import logo from "../../assets/logo.png";
import "./index.css";

class MainCarousel extends Component {

  static CarouselItem(image, altText) {
    return (
      <Carousel.Item>
        <img className="d-block w-100 blurImage" src={image} alt={altText}/>
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
                <strong>Inspires, connects, and empowers young women orphans, adoptees,
                and foster youth alumnae to thrive.</strong>
              </p>
              <Navbar.Brand className="logo-div">
                <img className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
            </div>
          </Carousel.Caption>
      </Carousel.Item>
    );
  };

  render() {
    return (
      <Carousel className="main">
        { MainCarousel.CarouselItem(ymim1, "First Slide") }
        { MainCarousel.CarouselItem(ymim5, "Second Slide") }
        { MainCarousel.CarouselItem(ymim6, "Third Slide") }
        { MainCarousel.CarouselItem(ymim7, "Four Slide") }
      </Carousel>
    );
  };
};

export default MainCarousel;
