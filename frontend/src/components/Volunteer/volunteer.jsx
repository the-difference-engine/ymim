import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./volunteer.css";
import SingleCarousel from "../SingleCarousel/index";

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      loadCounter: 0
    };
  }

  loaded = () => {
    this.state.loadCounter += 1;
    if (this.state.loadCounter % 2 === 0)
      document.getElementsByClassName("resp-iframe")[0].style.height = "400px";
    else
      document.getElementsByClassName("resp-iframe")[0].style.height = "1050px";
  };

  render() {
    return (
      <>
        <SingleCarousel className="carousel" header="Volunteer" />
        <Container className="mt-4 content-format">
          <Row className="mx-auto flexForm">
            <Row noGutters={true}>
              <Col xs={12} sm={12} md={12} lg={7} className="mr-2">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe64AwGoRanKukVA4RzS-hzh_oN1EFMu4WQiWpKoCQ-LOO90w/viewform?embedded=true"
                  width="100%"
                  height="1000"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  onLoad={this.loaded}
                  className="resp-iframe"
                >
                  Loading…
                </iframe>
              </Col>
              <Col className="volunteerMain" xs={12} sm={12} md={12} lg={4}>
                <h2 className="mb-4">Dear Volunteers!</h2>
                <p>
                  Thank you for considering getting involved in the Young
                  Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to
                  inspire, connect, and empower young adult orphans, adoptees,
                  and foster youth alumnae.
                </p>
                <p>
                  Your thoughtful and generous contributions will help our
                  vulnerable young adult alumnae who are in need to matriculate
                  through life. Your time, talent and donations are greatly
                  appreciated!
                </p>
                <p>
                  In the accompanying form, please tell us more about you in the
                  comment section. Describe your current occupation and
                  expertise, and if the area you want to help us with is
                  different from your career expertise, tell us what you hope to
                  help us accomplish. Oh yes, of course, donors and sponsors can
                  be volunteers too!
                </p>
                <p>
                  We welcome you to our family of great people connecting other
                  wonderful people to life changing experiences!
                </p>
              </Col>
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}

export default Volunteer;
