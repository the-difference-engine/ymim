import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./mid.css";

class UpperMid extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-md-center">
          <Col className="test">
            <h2 className="text-center heading">Who Are We?</h2>
            <div className="line-paragraph">
              Become a Young Masterbuilders in Motion (YMIM) scholar and enroll
              as a participant. The YMIM empowers young women orphans, adoptees,
              and foster alumnae to build resiliency, hope, and a bright future.
            </div>
            <div className="text-center line-paragraph">
              <a href="/enrollment">
                <button className="ym-button text-center" id="enroll">
                  Enroll
                </button>
              </a>
            </div>
            <div>
              <p className="bottom-text upper-mid-sectiontext">
                Young Masterbuilders in Motion, Inc., is a 501(c)(3)nonprofit
                organization and your contributions are deductible to the full
                extent of the law.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UpperMid;
