import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./volunteer.css";
import SingleCarousel from "../SingleCarousel/index";

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadCounter: 0,
      iframeHeight: 1075
    };
  }

  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? 1075 : 400;
    this.setState({
      iframeHeight: height,
      loadCounter: this.state.loadCounter + 1
    });
  };

  render() {
    return (
      <>
        <SingleCarousel className="carousel" header="Volunteer" image="ymim1.png"/>
        <Container className="mt-4 content-format">
          <Row className="mx-auto flexForm">
            <Row noGutters={true}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <div className="mb-5 px-3">
                  <h2 className="mb-4">Dear Volunteers!</h2>
                  <p>
                    Thank you for considering getting involved in the Young
                    Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to
                    inspire, connect, and empower young adult orphans, adoptees,
                    and foster youth alumnae.
                  </p>
                  <p>
                    Your thoughtful and generous contributions will help our
                    vulnerable young adult alumnae who are in need to
                    matriculate through life. Your time, talent and donations
                    are greatly appreciated!
                  </p>
                  <p>
                    In the accompanying form, please tell us more about you in
                    the comment section. Describe your current occupation and
                    expertise, and if the area you want to help us with is
                    different from your career expertise, tell us what you hope
                    to help us accomplish. Oh yes, of course, donors and
                    sponsors can be volunteers too!
                  </p>
                  <p>
                    We welcome you to our family of great people connecting
                    other wonderful people to life changing experiences!
                  </p>
                </div>

                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe64AwGoRanKukVA4RzS-hzh_oN1EFMu4WQiWpKoCQ-LOO90w/viewform?embedded=true"
                  style={{ width: "100%", height: this.state.iframeHeight }}
                  frameborder="0"
                  onLoad={this.loaded}
                  title="volunteer-iframe"
                ></iframe>
              </Col>

              <Col
                className="volunteerVideos px-2 pt-2"
                xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Inspiring</h4>
                  <div className="videoWrapper">
                    <iframe
                      src="https://www.youtube.com/embed/PK9ESRMGq74"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="inspire"
                    ></iframe>
                  </div>
                </div>
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Connecting</h4>
                  <div className="videoWrapper">
                    <iframe
                      src="https://www.youtube.com/embed/jdsqht1m1rE"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="connecting"
                    ></iframe>
                  </div>
                </div>
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Empowering</h4>
                  <div className="videoWrapper">
                    <iframe
                      src="https://www.youtube.com/embed/GwXt3tL6FqY"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      title="empower"
                    ></iframe>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </>
    );
  }
}

export default Volunteer;
