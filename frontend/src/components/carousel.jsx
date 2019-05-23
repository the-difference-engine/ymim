import React, { Component } from "react";
import { Carousel } from 'react-bootstrap';
import ymim1 from './Assets/ymim1.png';
import ymim2 from './Assets/ymim2.png';
import ymim3 from './Assets/ymim3.png';
import '../index.css';

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
                <h3>First slide label</h3>
                <p>Hello world</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ymim2}
                alt="Third slide"
              />

              <Carousel.Caption>
                <div class="overlay">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ymim3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <div class="overlay">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default CarouselComponent;
