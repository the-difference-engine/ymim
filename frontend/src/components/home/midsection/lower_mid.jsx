import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";

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
            <a
              href="https://www.eventbrite.com/o/young-masterbuilders-in-motion-inc-18024803549"
              target="_blank"
              className="space-anchors"
              alt="Eventbrite"
            >
              Eventbrite
            </a>
            <a
              href="https://www.facebook.com/theymim/"
              target="_blank"
              className="space-anchors"
              alt="Facebook"
            >
              Facebook
            </a>
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
        <Row className="test justify-content-md-center">
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Inspiring</h2>
          </Col>
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Connecting</h2>
          </Col>
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Empowering</h2>
          </Col>
        </Row>
        <Row className="test justify-content-md-center">
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
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
