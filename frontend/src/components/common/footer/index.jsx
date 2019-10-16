import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

export default class footer extends Component {
  render() {
    return (
      <Container fluid={true} className="footer">
        <Col>
          <Row className="justify-content-md-center text-left">
            <Col xs="12" sm="12" md="12" lg="12" xl="12" fluid="true">
              <nav>
                <ul className="row menu-text">
                  <li className="col footer-link">
                    <Link className="footer-list" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/contact-us">
                      Contact
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/meet-the-team">
                      Team
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/enrollment">
                      Enroll
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/volunteer">
                      Volunteer
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/donate">
                      Donate
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/events">
                      Events
                    </Link>
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
          <hr className="footer-line"></hr>
          <Row className="justify-content-center">
            <Col xs sm md lg xl="12">
              <Row className="justify-content-md-center contact">
                <Col xs="12" sm="12" md="4" lg="4" xl="2">
                  Copyright 2019
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="2">
                  <a className="contact" href="mailto:founder@theymim.org">
                    founder@theymim.org
                  </a>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="2">
                  773.941.1200
                </Col>
                <Col xs="12" sm="12" md="4" lg="4" xl="2">
                  <Link className="contact" to="/login">
                    Login
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col xs="10" sm="10">
              <div className="tsocial">
                <a
                  href="https://www.facebook.com/theymim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="facebook" icon={faFacebook} />
                </a>
                <a
                  href="https://www.instagram.com/theyoungmasterbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="insta" icon={faInstagram} />
                </a>
                <a
                  href="https://www.instagram.com/theyoungmasterbuilders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon className="twitter" icon={faTwitter} />
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
