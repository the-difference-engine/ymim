import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/enrollment">Enroll Now</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ambassadors">Get Involved</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default Header;