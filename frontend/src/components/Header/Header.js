import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeStyle={{background:'limegreen'}}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us" activeStyle={{background:'limegreen'}}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/enrollment" activeStyle={{background:'limegreen'}}>Enroll Now</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ambassadors" activeStyle={{background:'limegreen'}}>Get Involved</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default Header;