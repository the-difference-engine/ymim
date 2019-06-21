import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

class NavBottom extends Component {
  render() {
    return (
      <Container className="px-0" fluid={true}>
        <Navbar collapseOnSelect expand="lg" className="ym-bottom">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav justify-content-center">
            <Nav className="mx-auto">
              <NavDropdown
                className="nav-link"
                to="/resources"
                title="Youth Resources"
                id="nav-dropdown"
              >
                <NavDropdown.Item eventKey="4.1">Hospitals</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Urgent care</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Emergency Resources
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.4">Shelters</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="nav-link"
                to="/enroll"
                title="Enroll"
                id="nav-dropdown"
              >
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
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
            <NavLink
              className="nav-link"
              to="/donate"
              activeClassName="nav-link-selected"
            >
              <button className="donate-button text-center"> Donate </button>
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}

export default NavBottom;
