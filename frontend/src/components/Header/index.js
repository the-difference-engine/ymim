import React, { Component } from 'react';
import './Header.css';
import NavTop from './NavTop';
import NavBottom from './NavBottom';

class header extends Component {
	render() {
		return (
			<div className="container">
				<NavTop />
				<NavBottom />
			</div>
		);
	}
}

export default header;
