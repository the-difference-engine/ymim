import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header>
        <Route exact path="/" render={() => <h4>EMPOWERING YOUNG WOMEN ORPHANS, ADOPTEES, & FOSTER ALUMNAE</h4>}/>
        <nav>
          <ul className="nav-links">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="nav-link-selected">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact-us" activeClassName="nav-link-selected">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/enrollment" activeClassName="nav-link-selected">Enroll Now</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ambassadors" activeClassName="nav-link-selected">Get Involved</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    )
  } 
}

export default Header;