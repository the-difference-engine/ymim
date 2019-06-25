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
          <Col xs sm lg="1" xl="2"></Col>
          <Col md="12" lg="7">
            <nav>
              <ul className="row menu-text">
                <li className="col footer_link">
                  <Link className="footer-list" to="/events">
                    Home
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/about">
                    About
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/meet-the-team">
                    Contact
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/events">
                    Enroll
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/ambassadors">
                    Volunteer
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/events">
                    Donate
                </Link>
                </li>
                <li className="col footer_link">
                  <Link className="footer-list" to="/events">
                    Events
                </Link>
                </li>
              </ul>
            </nav>
          </Col>
          <Col className=" align-items-cente" xs="12" sm="6" md="6" lg="2">
            <div className="contact">
              <h5 className="footer-contact">
                <a className="contact" href="mailto:founder@theymim.org">founder@theymim.org</a>
                <p>773.941.1200</p>
              </h5>
            </div>
          </Col>
          <Col xs="12" sm="12" md="6" className=" align-items-center">
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