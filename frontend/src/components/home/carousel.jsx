import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import ymim1 from "./Assets/ymim1.png";
import ymim2 from "./Assets/ymim2.png";
import ymim3 from "./Assets/ymim3.png";
import "../index.css";
import { Navbar } from "react-bootstrap";
import logo from "./Assets/logo.png";

const inline = {
  height: "auto",
  width: "100%",
  margin: "0 0 0 -40px !important"
};

class CarouselComponent extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ymim1}
            alt="First Sllllideslide"
          />
          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Young Masterbuilder in Motion</h3>
              <p className="paragraph-carousel">
                inspires, connects, and empowers young women orphans, adoptees,
                and foster youth alumnae to thrive.
              </p>
              <Navbar.Brand className="logo-div">
                <img style={inline} className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ymim2} alt="Third slide" />

          <Carousel.Caption>
            <div className="overlay">
              <h3 className="title-carousel">Second slide label</h3>
              <p className="paragraph-carousel">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <Navbar.Brand className="logo-div">
                <img style={inline} className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ymim3} alt="Third slide" />

          <Carousel.Caption>
            <div class="overlay">
              <h3 className="title-carousel">Third slide label</h3>
              <p className="paragraph-carousel">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Navbar.Brand className="logo-div">
                <img style={inline} className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselComponent;
