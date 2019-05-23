import React, { Component } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import './Header.css';
import './NavTop';
import './NavBottom';

class Header extends Component {
	render() {
		const AuthAdmin = true;
		const AuthUser = false;
		return (
			<header class="card card-header">
				<div class="row">
					<Link to="/">
						<h1 className="org-name">
							YOUNG<br />MASTERBUILDERS<br />IN MOTION
						</h1>
					</Link>
					<nav class="ml-auto">
						<ul className="nav-links" class="nav nav-tabs card-header-tabs">
							<li className="nav-item" class="nav-item">
								<NavLink className="nav-link" to="/donate" activeClassName="nav-link-selected">
									Donate
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about" activeClassName="nav-link-selected">
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/contact-us" activeClassName="nav-link-selected">
									Contact Us
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/enrollment" activeClassName="nav-link-selected">
									Enroll Now
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/ambassadors" activeClassName="nav-link-selected">
									Get Involved
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/resources" activeClassName="nav-link-selected">
									Resources
								</NavLink>
							</li>
							{AuthAdmin ? (
								<li className="nav-item">
									<NavLink className="nav-link" to="/admin" activeClassName="nav-link-selected">
										Admin
									</NavLink>
								</li>
							) : AuthUser ? (
								<li className="nav-item">
									<NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">
										Logout
									</NavLink>
								</li>
							) : (
								<li className="nav-item">
									<NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">
										Login
									</NavLink>
								</li>
							)}
						</ul>
					</nav>
				</div>
				<Route
					exact
					path="/"
					render={() => <h6 class="ml-auto">EMPOWERING YOUNG WOMEN ORPHANS, ADOPTEES, & FOSTER ALUMNAE</h6>}
				/>
			</header>
		);
	}
}

export default Header;
