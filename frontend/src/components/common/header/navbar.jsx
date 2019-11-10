import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/logo.png";
import "./index.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Container fluid={true}>
        <Row noGutters={true}>
          <Col className="px-0">
            <Navbar collapseOnSelect className="ym-top navbar-expand-md">
              <Navbar.Brand className="my-auto" href="/">
                <img className="logo" src={logo} alt="YMIM" />
              </Navbar.Brand>
              {/* first navbar (white) */}
              <Nav className="ml-lg-3 ml-xl-3 ml-auto mr-auto my-auto">
                <NavLink className="nav-link-top mr-5" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link-top mr-5" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link-top mr-5" to="/contact-us">
                  Contact
                </NavLink>
                <NavLink className="nav-link-top" to="/events">
                  Events
                </NavLink>
              </Nav>
              {/* social media links */}
              <Nav id="tsocial" className="ml-auto">
                <Nav.Link
                  href="https://www.facebook.com/theymim/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faFacebookSquare}
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.instagram.com/theyoungmasterbuilders"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faInstagram}
                  />
                </Nav.Link>
                <Nav.Link
                  href="https://www.twitter.com/YMIMtweets"
                  target="_blank"
                >
                  <FontAwesomeIcon className="social-media" icon={faTwitter} />
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
        </Row>
        {/* second navbar (green) */}
        <Row className="ym-bottom" noGutters={true}>
          <Col className="mx-auto my-auto px-0" xs={8} sm={8} md={10} lg={10}>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Toggle className="ml-3" onClick={this.toggle} />
              <Navbar.Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-lg-3 ml-xl-3 ml-auto mr-auto my-auto align-links">
                  {/* resources  */}
                  <NavLink
                    className="resources-link"
                    to="/resources.pdf"
                    download
                    target="_blank"
                  >
                    Resources
                  </NavLink>
                  {/* enroll  */}
                  <NavLink className="resources-link" to="/enrollment">
                    Enroll
                  </NavLink>
                  {/* volunteer  */}
                  <NavLink className="resources-link" to="/volunteer">
                    Volunteer
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          {/* donate button  */}
          <Col className="center-button" xs={4} sm={4} md={2} lg={2}>
            <NavLink to="/donate">
              <button id="donate-button">Donate</button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NavBar;
