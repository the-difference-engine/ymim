import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';
import { Container } from 'react-bootstrap';

export default class footer extends Component {
	render() {
		return (
            <Container fluid={true} className="px-0">
			<footer className="footer py-3">
				<div className="container">
					<nav>
						<ul className="row menu-text">
							<li className="col footer_link">
								<Link to="/about" style={{ color: 'white', fontSize: '12px' }} className="foot-text">
									About
								</Link>
							</li>
							<li className="col footer_link">
								<Link
									style={{ color: 'white', fontSize: '12px' }}
									className="nav-item"
									to="/meet-the-team"
								>
									Contact
								</Link>
							</li>
							<li className="col footer_link">
								<Link style={{ color: 'white', fontSize: '12px' }} to="/ambassadors">
									Volunteer
								</Link>
							</li>
							<li className="col footer_link">
								<Link style={{ color: 'white', fontSize: '12px' }} to="/events">
									Enroll
								</Link>
							</li>
							<li className="col footer_link">
								<Link style={{ color: 'white', fontSize: '12px' }} to="/events">
									Donate
								</Link>
							</li>
							<li className="col footer_link">
								<Link style={{ color: 'white', fontSize: '12px' }} to="/events">
									Events
								</Link>
							</li>
							<li className="col footer_link">
								<Link style={{ color: 'white', fontSize: '12px' }} to="/events">
									Home
								</Link>
							</li>
						</ul>
						<div id="tsocial">
							<NavLink href="https://www.facebook.com/theymim/">
								<FontAwesomeIcon className="facebook" icon={faFacebookSquare} />
							</NavLink>

							<NavLink href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="insta" icon={faInstagram} />
							</NavLink>
							<NavLink href="https://www.instagram.com/theyoungmasterbuilders">
								<FontAwesomeIcon className="twitter" icon={faTwitter} />
							</NavLink>
						</div>
					</nav>
				</div>
			</footer>
            </Container>
		);
	}
}
