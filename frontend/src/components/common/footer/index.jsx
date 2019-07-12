import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
          <Row className="justify-content-md-center">
            <Col md="12" lg="10" xl="8">
              <a>
                <ul className="row menu-text">
                  <li className="col footer-link">
                    <Link className="footer-list" to="/events" target="_blank">
                      Home
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/about" target="_blank">
                      About
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link
                      className="footer-list"
                      to="/meet-the-team"
                      target="_blank"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/events" target="_blank">
                      Enroll
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link
                      className="footer-list"
                      to="/ambassadors"
                      target="_blank"
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/events" target="_blank">
                      Donate
                    </Link>
                  </li>
                  <li className="col footer-link">
                    <Link className="footer-list" to="/events" target="_blank">
                      Events
                    </Link>
                  </li>
                </ul>
              </a>
            </Col>
          </Row>
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
              </Row>
            </Col>
            <Col xs="10" sm="10">
              <div className="tsocial">
                <NavLink href="https://www.facebook.com/theymim/">
                  <FontAwesomeIcon className="facebook" icon={faFacebook} />
                </NavLink>
                <NavLink href="https://www.instagram.com/theyoungmasterbuilders">
                  <FontAwesomeIcon className="insta" icon={faInstagram} />
                </NavLink>
                <NavLink href="https://www.instagram.com/theyoungmasterbuilders">
                  <FontAwesomeIcon className="twitter" icon={faTwitter} />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}
