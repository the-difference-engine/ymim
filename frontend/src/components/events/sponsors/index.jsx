import React, { Component } from "react";
import { Container } from "react-bootstrap";
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
import axios from "axios";

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
  state = {
    sponsors: []
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const sponsors = "http://localhost:1337/sponsors";
    axios
      .get(sponsors, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          sponsors: response.data
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }
  render() {
    return (
      <div className="sponsor-gallery">
        {sponsorsHeading}
        <Container>
          {this.state.sponsors.map((url, i) => (
            <img
              key={i}
              src={`http://localhost:1337${url.sponsors.url}`}
              className="logo-picture"
              alt="sponsor logo"
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Sponsors;
