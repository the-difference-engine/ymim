import React,{Component} from 'react';
import{Carousel} from 'react-bootstrap';
import ymim1 from '../Assets/ymim1.png';
import {Navbar} from 'react-bootstrap';
import '../../index.css'
import logo from '../Assets/logo.png';



const inline = {
  height: 'auto',
  width: '100%',
  margin: '0 0 0 -40px !important',
}

class SingleCarousel extends Component{

   




    render(){


        return(
        <Carousel>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={ymim1}
              alt="First Sllllideslide"
            />
            <Carousel.Caption>
              <div class="overlay">
                <h3 className="title-carousel">Enroll</h3>
                <p className="paragraph-carousel">inspires, connects, and empowers young women orphans, adoptees, and foster youth alumnae to thrive.</p>
                <Navbar.Brand className="logo-div">
                  <img style={inline} className="logo" src={logo} alt="YMIM" />
                </Navbar.Brand>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>
        )
    }
}

export default SingleCarousel;