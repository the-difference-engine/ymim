import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';


export default class footer extends Component {
    render() {
        return (
            <footer className='footer py-3'>
                <div className='container'>
                    <nav>
                        <ul className='row'>
                            <li className='col footer_link'>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className='col footer_link'>
                                <Link to="/meet-the-team">Meet Our Team</Link>
                            </li>
                            <li className='col footer_link'>
                                <Link to="/ambassadors">Volunteer</Link>
                            </li>
                            <li className='col footer_link'>
                                <Link to="/events">Events</Link>
                            </li>
                            <li className='col footer_link'>
                                Follow Us:  <Link to="https://www.facebook.com/theymim/" style={{color: 'black'}}><FontAwesomeIcon icon={faFacebookSquare} /></Link> | <Link to="https://www.instagram.com/theyoungmasterbuilders" style={{color: 'black'}}><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}