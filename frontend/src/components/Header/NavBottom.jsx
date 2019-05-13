import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavDropdown } from 'react-bootstrap';

class NavBottom extends Component {
	render() {
		return (
			<div>
				<Nav className="ym-bottom navbar navbar-expand justify-content-center">
					<ul className="nav-links">
						<li className="nav-item">
							<NavDropdown className="nav-link" to="/resources" title="Youth Resources" id="nav-dropdown">
								<NavDropdown.Item eventKey="4.1">Hospitals</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.2">Urgent care</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.3">Emergency Resources</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.4">Shelters</NavDropdown.Item>
							</NavDropdown>
						</li>
						<li className="nav-item">
							<NavDropdown className="nav-link" to="/enroll" title="Enroll" id="nav-dropdown">
								<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
							</NavDropdown>
						</li>
						<li className="nav-item">
							<NavDropdown className="nav-link" to="/volunteer" title="Volunteer" id="nav-dropdown">
								<NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
								<NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
							</NavDropdown>
						</li>
						<li>
							<NavLink className="nav-link" to="/donate" activeClassName="nav-link-selected">
								<button className="donate-button text-center"> Donate </button>
							</NavLink>
						</li>
					</ul>
				</Nav>
			</div>
		);
	}
}

export default NavBottom;
