import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

class Header extends Component {
	render() {
		const AuthAdmin = true;
		const AuthUser = false;
		return (
			<div>
				<NavTop />
				<NavBottom />
				{AuthAdmin ? (
					<NavLink className="nav-link" to="/admin" activeClassName="nav-link-selected">
						Admin
					</NavLink>
				) : AuthUser ? (
					<NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">
						Logout
					</NavLink>
				) : (
					<NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">
						Login
					</NavLink>
				)}
			</div>
		);
	}
}

export default Header;
