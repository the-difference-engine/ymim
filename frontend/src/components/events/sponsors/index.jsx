import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import "./index.css";
import Sponsor1 from "../../../assets/24thDistrict Police.PNG";
import Sponsor2 from "../../../assets/Citron Hygiene.jpg";
import Sponsor3 from "../../../assets/evanston Police.jpg";
import Sponsor4 from "../../../assets/first united methodist Church.png";
import Sponsor5 from "../../../assets/FlatTop Grill.png";
import Sponsor6 from "../../../assets/HomersIceCreamLogo200.jpg";
import Sponsor7 from "../../../assets/IDPH logo.PNG";
import Sponsor8 from "../../../assets/Kiwanis Logo (1).jpg";
import Sponsor9 from "../../../assets/Logo2.jpg";
import Sponsor10 from "../../../assets/Roger's Park Library.PNG";
import Sponsor11 from "../../../assets/uic logo2.png";
import Sponsor12 from "../../../assets/Walmart_logo.svg.png";

class Sponsors extends Component {
    render() {
      return (
        <div className="">
          <Container className="teamPhotos">            
            <Row>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor1}
                  className="gallery-picture"
                  alt="sponsor logo 1"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor2}
                  className="gallery-picture"
                  alt="sponsor logo 2"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor3}
                  className="gallery-picture"
                  alt="sponsor logo 3"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor4}
                  className="gallery-picture"
                  alt="sponsor logo 4"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor5}
                  className="gallery-picture"
                  alt="sponsor logo 5"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor6}
                  className="gallery-picture"
                  alt="sponsor logo 6"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor7}
                  className="gallery-picture"
                  alt="sponsor logo 7"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor8}
                  className="gallery-picture"
                  alt="sponsor logo 8"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor9}
                  className="gallery-picture"
                  alt="sponsor logo 9"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor10}
                  className="gallery-picture"
                  alt="sponsor logo 10"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor11}
                  className="gallery-picture"
                  alt="sponsor logo 11"                  
                />
              </Col>
              <Col className="imageColumn" sm={3}>
                <img
                  src={Sponsor12}
                  className="gallery-picture"
                  alt="sponsor logo 12"                  
                />
              </Col>
            </Row>            
          </Container>
        </div>      
      );
    }
}

export default Sponsors;