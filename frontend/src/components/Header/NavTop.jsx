import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assets/logo.png';
import './Header.css';
class NavTop extends Component {
	render() {
		return (
			<Container fluid={true}>
				<Navbar collapseOnSelect expand="lg" className="ym-top">
					<Navbar.Brand className="mx-auto my-auto pt-4" href="/">
						<img className="logo" src={logo} alt="YMIM" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mx-auto">
							<NavLink className="nav-link-top" to="/about">
								About
							</NavLink>
							<NavLink className="nav-link-top" to="/contact-us">
								Contact
							</NavLink>
							<NavLink className="nav-link-top" to="/events">
								Events
							</NavLink>
						</Nav>
						<Nav className="pt-4">
							<NavLink href="https://www.facebook.com/theymim/">
								<FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
							</NavLink>

							<NavLink href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="insta" icon={faInstagram} />
							</NavLink>
							<NavLink href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="twitter" icon={faTwitter} />
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		);
	}
}

export default NavTop;
