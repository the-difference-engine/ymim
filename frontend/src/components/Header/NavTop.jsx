import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitterSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../Assets/logo.png';
import './Header.css';

class NavTop extends Component {
	render() {
		return (
			<div>
				<Nav className="ym-top justify-content-center">
					<Navbar.Brand href="/">
						<img className="logo" src={logo} alt="YMIM" />
					</Navbar.Brand>
					<ul className="nav-links">
						<li className="nav-item">
							<NavLink className="nav-link-top" to="/about" activeClassName="nav-link-selected">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link-top" to="/contact-us" activeClassName="nav-link-selected">
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link-top" to="/events" activeClassName="nav-link-selected">
								Events
							</NavLink>
						</li>
						<li className="col footer_link">
							<a href="https://www.facebook.com/theymim/">
								<FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
							</a>

							<a href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="insta" icon={faInstagram} />
							</a>
							<a href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="twitter" icon={faTwitter} />
							</a>
						</li>
					</ul>
				</Nav>
			</div>
		);
	}
}

export default NavTop;
