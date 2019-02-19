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
              <NavLink className="nav-link" to="/about" activeStyle={{background:'hsl(101,43%,42%)',color:'white'}}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us" activeStyle={{background:'hsl(101,43%,42%)',color:'white'}}>Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/enrollment" activeStyle={{background:'hsl(101,43%,42%)',color:'white'}}>Enroll Now</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ambassadors" activeStyle={{background:'hsl(101,43%,42%)',color:'white'}}>Get Involved</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default Header;