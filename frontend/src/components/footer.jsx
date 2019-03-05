import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                                <Link to="/volunteer">Volunteer</Link>
                            </li>
                            <li className='col footer_link'>
                                <Link to="/events">Events</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}