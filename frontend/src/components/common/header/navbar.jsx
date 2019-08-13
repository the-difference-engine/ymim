import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown, Col, Row } from "react-bootstrap";
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
              <Nav className="mx-auto my-auto">
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
                <Nav.Link href="https://www.facebook.com/theymim/">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faFacebookSquare}
                  />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/theyoungmasterbuilders">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faInstagram}
                  />
                </Nav.Link>
                <Nav.Link href="https://www.instagram.com/theyoungmasterbuilders">
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
                <Nav className="mx-auto my-auto align-links">
                  {/* resources  */}
                  <NavLink
                    className="resources-link"
                    to="/resources.pdf"
                    download
                    target="_blank"
                  >
                    Youth Resources
                  </NavLink>
                  {/* enroll  */}
                  <NavDropdown
                    className="nav-link"
                    to="/enroll"
                    title="Enroll"
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item eventKey="4.1" href="/enrollment">
                      Program Participant
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2" href="/ambassadors">
                      Volunteer Ambassadors
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3" href="/events">
                      Events
                    </NavDropdown.Item>
                  </NavDropdown>
                  {/* volunteer  */}
                  <NavDropdown
                    className="nav-link"
                    to="/volunteer"
                    title="Volunteer"
                    id="nav-dropdown"
                  >
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
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
