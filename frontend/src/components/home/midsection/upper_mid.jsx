import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mid.css";

class UpperMid extends Component {
  render() {
    return (
      <Container fluid={false}>
        <Row className="justify-content-md-center">
          <Col xs lg="2"></Col>
          <Col md="auto">
            <h2 className="text-center heading">Who Are We?</h2>
            <div className="line-paragraph">
              Become a Young Masterbuilders in Motion (YMIM) scholar and enroll
              as a partcipant. The YMIM empowers young women orphans, adoptees,
              and foster alumnae to build resiliency, hope, and a bright future.
            </div>
            <div className="text-center line-paragraph">
              <button className="ym-button text-center" id="enroll">
                Enroll
              </button>
            </div>
            <div>
              <p className="bottom-text upper-mid-sectiontext">
                Young Masterbuilders in Motion, Inc., is a 501(c)(3)nonprofit
                organization and your contributions are deductible to the full
                extent of the law.
              </p>
            </div>
          </Col>
          <Col xs lg="2"></Col>
        </Row>
      </Container>
    );
  }
}

export default UpperMid;
