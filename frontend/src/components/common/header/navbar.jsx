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
import axios from "axios";

class NavBar extends Component {
  state = {
    facebook: "",
    twitter: "",
    instagram: ""
  };

  componentDidMount() {
    //facebook
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const social = "http://localhost:1337/socials";
    axios
      .get(social, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          facebook: response.data[1].facebook,
          instagram: response.data[2].instagram,
          twitter: response.data[0].twitter
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });

    // instagram
    //     const instagram = "http://localhost:1337/instagrams";
    //     axios
    //       .get(instagram, {
    //         headers: {
    //           Authorization: `Bearer ${token}`
    //         }
    //       })
    //       .then(response =>
    //         this.setState({
    //           instagram: response.data[0].instagram
    //         })
    //       )
    //       .catch(error => {
    //         console.log("An error occurred:", error);
    //       });
    //
    //       // twitter
    //       const twitter = "http://localhost:1337/twitters";
    //       axios
    //         .get(twitter, {
    //           headers: {
    //             Authorization: `Bearer ${token}`
    //           }
    //         })
    //         .then(response =>
    //           this.setState({
    //             twitter: response.data[0].twitter
    //           })
    //         )
    //         .catch(error => {
    //           console.log("An error occurred:", error);
    //         });
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
                <Nav.Link href={this.state.facebook} target="_blank">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faFacebookSquare}
                  />
                </Nav.Link>
                <Nav.Link href={this.state.instagram} target="_blank">
                  <FontAwesomeIcon
                    className="social-media"
                    icon={faInstagram}
                  />
                </Nav.Link>
                <Nav.Link href={this.state.twitter} target="_blank">
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

export default NavBar;
