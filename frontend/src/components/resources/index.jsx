import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class Resources extends Component {
	render() {
		return (
			<Container fluid={true} className="px-4">
				<div className="text-center">
					<h1>Resources</h1>
				</div>
				<div className="test" id="hospital">
					<h1>Hospitals</h1>
					<p>
						Elit deserunt occaecat adipisicing minim mollit dolore exercitation quis aliquip sit nostrud. Ad
						ut et irure ex pariatur occaecat non tempor irure ex occaecat culpa. Cillum esse quis laboris
						exercitation quis occaecat labore tempor quis ad et consectetur eu. Cupidatat pariatur ipsum
						commodo aute. Voluptate commodo eiusmod laboris commodo Lorem culpa. Magna consectetur excepteur
						nostrud do dolor enim sit voluptate culpa id consequat magna quis sint.
					</p>
				</div>
				<div className="test1" id="uc">
					<h1>Urgent Care</h1>
          <p>Elit deserunt occaecat adipisicing minim mollit dolore exercitation quis aliquip sit nostrud. Ad
						ut et irure ex pariatur occaecat non tempor irure ex occaecat culpa. Cillum esse quis laboris
						exercitation quis occaecat labore tempor quis ad et consectetur eu. Cupidatat pariatur ipsum
						commodo aute. Voluptate commodo eiusmod laboris commodo Lorem culpa. Magna consectetur excepteur
						nostrud do dolor enim sit voluptate culpa id consequat magna quis sint.</p>
				</div>
				<div className="test" id="shelter">
					<h1>Shelters</h1>
          <p>Elit deserunt occaecat adipisicing minim mollit dolore exercitation quis aliquip sit nostrud. Ad
						ut et irure ex pariatur occaecat non tempor irure ex occaecat culpa. Cillum esse quis laboris
						exercitation quis occaecat labore tempor quis ad et consectetur eu. Cupidatat pariatur ipsum
						commodo aute. Voluptate commodo eiusmod laboris commodo Lorem culpa. Magna consectetur excepteur
						nostrud do dolor enim sit voluptate culpa id consequat magna quis sint.</p>
				</div>
				<div className="test1" id="er">
					<h1>Emergency Resources</h1>
          <p>Elit deserunt occaecat adipisicing minim mollit dolore exercitation quis aliquip sit nostrud. Ad
						ut et irure ex pariatur occaecat non tempor irure ex occaecat culpa. Cillum esse quis laboris
						exercitation quis occaecat labore tempor quis ad et consectetur eu. Cupidatat pariatur ipsum
						commodo aute. Voluptate commodo eiusmod laboris commodo Lorem culpa. Magna consectetur excepteur
						nostrud do dolor enim sit voluptate culpa id consequat magna quis sint.</p>
				</div>
			</Container>
		);
	}
}
export default Resources;
