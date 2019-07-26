import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

class LowerMid extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="lower-mid">
          <Col className="test">
            <h2 className="text-center heading">What's New?</h2>
            <h2 className="text-center sub-heading">
              Mar 9 2019 - Let's Do 300! Emergency Care Package Drive
            </h2>
            <div className="line-paragraph">
              Join Young Masterbuilders In Motion on March 9th at Rogers Park
              Library to collect and package essential supplies for foster
              youth.
            </div>
            <div className="line-paragraph">
              It's estimated that 5,000 youth age out of foster care in the
              Chicagoland area each year. Young Masterbuilders in Motion is
              working to reverse the impact of poverty by letting our teen girls
              and young adult women who have experienced foster care know that
              we care. We know it's an urgent situation. We need your support!
              Won't you join us?
            </div>
            <h2 className="sub-heading">RSVP and Find out More:</h2>
            <Link
              to="/https://www.eventbrite.com/ymim"
              className="space-anchors"
              alt="Eventbrite"
            >
              Eventbrite
            </Link>
            <Link
              to="/https://www.facebook.com/pg/theymim.events"
              className="space-anchors"
              alt="Facebook"
            >
              Facebook
            </Link>
            <div>
              <button className="ym-button" id="enroll">
                All News
              </button>
              <button className="ym-button" id="enroll">
                All Events
              </button>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="test">
            <Row className="justify-content-md-center">
              <Col xs="10" sm="10" md="4" lg="4" xl="4">
                <h2 className="heading">Inspiring</h2>
              </Col>
              <Col xs="10" sm="10" md="4" lg="4" xl="4">
                <h2 className="heading">Connecting</h2>
              </Col>
              <Col xs="10" sm="10" md="4" lg="4" xl="4">
                <h2 className="heading">Empowering</h2>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={10} md={5} lg={2} xl={2}>
            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
                alt=""
              />
            </div>
          </Col>
          <Col xs={10} md={5} lg={2} xl={2}>
            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
                alt=""
              />
            </div>
          </Col>
          <Col xs={10} md={5} lg={2} xl={2}>
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col xs={10} md={5} lg={2} xl={2}>
            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LowerMid;
