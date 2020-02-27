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
import { connect } from "react-redux";
import getStrapi from "../../../actions/strapi.js";

class NavBar extends Component {
  componentDidMount() {
    this.props.gFacebook();
    this.props.gTwitter();
    this.props.gInstagram();
  }

  render() {
    console.log(this.props);
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
                <NavLink className="nav-link-top mr-4" to="/home">
                  Home
                </NavLink>
                <NavLink className="nav-link-top mr-4" to="/about">
                  About
                </NavLink>
                <NavLink className="nav-link-top mr-4" to="/contact-us">
                  Contact
                </NavLink>
                <NavLink className="nav-link-top mr-4" to="/events">
                  Events
                </NavLink>
              </Nav>
              {/* social media links */}
              <Nav id="tsocial" className="ml-auto">
                <Nav.Link href={this.props.facebook} target="_blank">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faFacebookSquare}
                  />
                </Nav.Link>
                <Nav.Link href={this.props.instagram} target="_blank">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faInstagram}
                  />
                </Nav.Link>
                <Nav.Link href={this.props.twitter} target="_blank">
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
              <Navbar.Toggle className="ml-3" />
              <Navbar.Collapse>
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
          <Col xs={4} sm={4} md={2} lg={2}>
            <NavLink to="/donate">
              <button className="donate-button">Donate</button>
            </NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    twitter: state.strapi.twitter,
    facebook: state.strapi.facebook,
    instagram: state.strapi.instagram
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gFacebook: () => {
      dispatch(getStrapi("GET_SOCIAL", "socials"));
    },
    gTwitter: () => {
      dispatch(getStrapi("GET_SOCIAL", "socials"));
    },
    gInstagram: () => {
      dispatch(getStrapi("GET_SOCIAL", "socials"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
