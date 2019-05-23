import React, { Component } from 'react';
import CarouselComponent from './carousel';
import Upper from './Midsection/Upper';
import Lower from './Midsection/Lower';
import './home.css';
import { Container } from 'react-bootstrap';

class Home extends Component {
	render() {
		return (
			<Container fluid={true}>
				<CarouselComponent />
				<Upper />
				<Lower />
			</Container>
		);
	}
}

export default Home;
