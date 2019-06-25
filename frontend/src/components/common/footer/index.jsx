import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";

export default class footer extends Component {
  render() {
    return (
      <Container fluid={true} className="footer">
        <Row className="justify-content-md-center">
          <Col md="12" lg="7">
            <nav>
              <ul className="row menu-text">
                <li className="col footer-link">
                  <Link className="footer-list" to="/events">
                    Home
                </Link>
                </li>
                <li className="col footer-link">
                  <Link className="footer-list" to="/about">
                    About
                </Link>
                </li>
                <li className="col footer-link">
                  <Link className="footer-list" to="/meet-the-team">
                    Contact
                </Link>
                </li>
                <li className="col footer-link">
                  <Link className="footer-list" to="/events">
                    Enroll
                </Link>
                </li>
                <li className="col footer-link">
                  <Link className="footer-list" to="/ambassadors">
                    Volunteer
                </Link>
                </li>
                <li className="col footer-link">
                  <Link className="footer-list" to="/events">
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
        <Row className="justify-content-center">
          <Col xs="6" sm="6" md="6" lg="7">
            <div className="contact">
              &copy; Copyright 2019    
                <a className="contact mx-4" href="mailto:founder@theymim.org">founder@theymim.org</a>
              773.941.1200
            </div>
          </Col>
          <Col xs="4" sm="12" md="6" className="align-items-center">
            <div className="tsocial">
              <NavLink href="https://www.facebook.com/theymim/">
                <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
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
      </Container>
    );
  }
}
