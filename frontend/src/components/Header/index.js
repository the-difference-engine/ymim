import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import Nav from './Navbar';

class Header extends Component {
	render() {
		const AuthAdmin = true;
		const AuthUser = false;
		return (
			<div>
				<Nav />
				{AuthAdmin ? (
					<NavLink className="nav-link-top" to="/admin" activeClassName="nav-link-top-selected">
						Admin
					</NavLink>
				) : AuthUser ? (
					<NavLink className="nav-link-top" to="/login" activeClassName="nav-link-top-selected">
						Logout
					</NavLink>
				) : (
					<NavLink className="nav-link-top" to="/login" activeClassName="nav-link-top-selected">
						Login
					</NavLink>
				)}
			</div>
		);
	}
}

export default Header;
