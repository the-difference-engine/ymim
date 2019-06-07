import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../assets/logo.png';
import './index.css';

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
			<Container fluid={true} className="px-0">
				<Row>
					<Col>
						<Navbar collapseOnSelect className="ym-top navbar-expand-md">
							<Navbar.Brand className="my-auto" href="/">
								<img className="logo" src={logo} alt="YMIM" />
							</Navbar.Brand>
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
							<Nav className="pt-4 mr-4 my-auto">
								<div id="tsocial">
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
							</Nav>
						</Navbar>
					</Col>
				</Row>
				<Row>
					<Col xs={10} sm={10} lg={10}>
						<Navbar collapseOnSelect expand="lg" className="ym-bottom">
							<Navbar.Toggle onClick={this.toggle} />
							<Navbar.Collapse isOpen={this.state.isOpen} navbar>
								<Nav className="mx-auto">
									<NavDropdown
										className="nav-link"
										to="/resources"
										title="Youth Resources"
										id="nav-dropdown"
									>
										<NavDropdown.Item eventKey="4.1">Hospitals</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.2">Urgent care</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.3">Emergency Resources</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.4">Shelters</NavDropdown.Item>
									</NavDropdown>
									<NavDropdown className="nav-link" to="/enroll" title="Enroll" id="nav-dropdown">
										<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
									</NavDropdown>
									<NavDropdown
										className="nav-link"
										to="/volunteer"
										title="Volunteer"
										id="nav-dropdown"
									>
										<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
										<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
									</NavDropdown>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					</Col>
					<Col xs={2} sm={2} lg={2}>
						<NavLink to="/donate" activeClassName="nav-link-selected">
							<button id="donate-button" className="mt-2">
								{' '}
								Donate{' '}
							</button>
						</NavLink>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default NavBar;
