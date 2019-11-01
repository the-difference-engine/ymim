import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";
import footerImage1 from "../../../assets/footerImage1.jpg";
import footerImage2 from "../../../assets/Group_at_a_table_YMIM.png";
import footerImage3 from "../../../assets/Group_pic_YMIM.png";
import footerImage4 from "../../../assets/chicago-illinois-skyline-skyscrapers-161963.jpeg";

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
            <br />
            <div className="line-paragraph">
              It's estimated that 5,000 youth age out of foster care in the
              Chicagoland area each year. Young Masterbuilders in Motion is
              working to reverse the impact of poverty by letting our teen girls
              and young adult women who have experienced foster care know that
              we care. We know it's an urgent situation. We need your support!
              Won't you join us?
            </div>

            <h2 className="sub-heading">RSVP and Find out More:</h2>
            <div>
              <button className="ym-button" id="enroll">
                <a
                  href="https://www.facebook.com/theymim/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-anchors"
                  alt="Facebook"
                >
                  Facebook
                </a>
              </button>
              <button className="ym-button" id="enroll">
                <a
                  href="https://www.eventbrite.com/o/young-masterbuilders-in-motion-inc-18024803549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-anchors"
                  alt="Eventbrite"
                >
                  Eventbrite
                </a>
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
              <img className="pic" src={footerImage1} alt="" />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img className="pic" src={footerImage2} alt="" />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img className="pic" src={footerImage3} alt="" />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img className="pic" src={footerImage4} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LowerMid;
