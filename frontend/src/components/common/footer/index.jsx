import React, { Component } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from "react-bootstrap";
=======
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import TopFooter from "./top_footer";
>>>>>>> 75921dd6d5cc6e32fe4faa6892e0ee5f27e25eda
import "./index.css";

export default class footer extends Component {
  render() {
    return (
      <>
        <footer className="footer py-3">
          {/* <div className="container"> */}
            <Container className="footer-styling">
              <Row>
                <Col className="link-wrapper" xs={12} md={10}>
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
                    <div id="tsocial">
                      <NavLink href="https://www.facebook.com/theymim/">
                        <FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
                      </NavLink>
                      <NavLink href="https://www.instagram.com/theyoungmasterbuilders">https://codepen.io/jakob-e/pen/zjAHe
                        <FontAwesomeIcon className="insta" icon={faInstagram} />
                      </NavLink>
                      <NavLink href="https://www.instagram.com/theyoungmasterbuilders">
                        <FontAwesomeIcon className="twitter" icon={faTwitter} />
                      </NavLink>
                    </div>
                  </nav>
                </Col>
                <Col xs={1} md={{ span:1, offset: 1}}>
                  <div class="moveChild">
                    <h5 className="footer-contact">
                      <a className="contact" href="mailto:founder@theymim.org">
                        founder@theymim.org
                    </a>
                      <p className="contact">773.941.1200</p>
                    </h5>
                    </div>
                  </Col>
              </Row>
            </Container>
          {/* </div> */}
        </footer>
      </>
    );
  }
}
