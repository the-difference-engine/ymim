import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

class NavTop extends Component {
	render() {
		return (
			<div className="row">
				<Navbar expand="lg">
					<Navbar.Brand href="/">
						<img src="" width="60" height="60" className="" alt="YMIM" />
					</Navbar.Brand>
					<ul className="nav-links">
						<li className="nav-item">
							<NavLink className="nav-link" to="/" activeClassName="nav-link-selected">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/about" activeClassName="nav-link-selected">
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contact-us" activeClassName="nav-link-selected">
								Contact
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/events" activeClassName="nav-link-selected">
								Events
							</NavLink>
						</li>
						<li className="col footer_link">
							<a href="https://www.facebook.com/theymim/">
								<FontAwesomeIcon className="facebook" icon={faFacebookSquare} size="2x" />
							</a>

							<a href="https://www.instagram.com/theyoungmasterbuilders" >

								<FontAwesomeIcon className="insta" icon={faInstagram} size="2x" />
							</a>
							<a href="https://www.instagram.com/theyoungmasterbuilders" >

								<FontAwesomeIcon className="twitter" icon={faTwitterSquare} size="2x" />
								</a>
						</li>
					</ul>
				</Navbar>
			</div>
		);
	} }

export default NavTop;
