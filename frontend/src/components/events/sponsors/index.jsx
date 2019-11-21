import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./index.css";
import Flex from "../atoms/flex/flex";
import Sponsor1 from "../../../assets/IDPH logo.PNG";
import Sponsor2 from "../../../assets/24thDistrict Police.PNG";
import Sponsor3 from "../../../assets/Citron Hygiene.jpg";
import Sponsor4 from "../../../assets/evanston Police.jpg";
import Sponsor5 from "../../../assets/first united methodist Church.png";
import Sponsor6 from "../../../assets/FlatTop Grill.png";
import Sponsor7 from "../../../assets/HomersIceCreamLogo200.jpg";
import Sponsor8 from "../../../assets/Kiwanis Logo (1).jpg";
import Sponsor9 from "../../../assets/Logo2.jpg";
import Sponsor10 from "../../../assets/Roger's Park Library.PNG";
import Sponsor11 from "../../../assets/uic logo2.png";
import Sponsor12 from "../../../assets/Walmart_logo.svg.png";

let urls = [
  Sponsor1,
  Sponsor2,
  Sponsor3,
  Sponsor4,
  Sponsor5,
  Sponsor6,
  Sponsor7,
  Sponsor8,
  Sponsor9,
  Sponsor10,
  Sponsor11,
  Sponsor12
];

const sponsorsHeading = (
  <Flex>
    <div className="headingFlex">
      <h1>Our Sponsors</h1>
    </div>
  </Flex>
);

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor-gallery">
        {sponsorsHeading}
        <Container>
          {urls.map((url) => (
            <img src={url} className="logo-picture" alt="sponsor logo" />
          ))}
        </Container>
      </div>
    );
  }
}

export default Sponsors;
