import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Navigation = () => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light'>
    
        {/* {authUser => (authUser ? <HeaderAdmin/> : <HeaderNonAuth />)} */}
        <HeaderAdmin/>
  </nav>
);


class HeaderNonAuth extends Component {
  render() {
    return (
      <header>
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
      {AuthAdmin ?       
     
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin" activeClassName="nav-link-selected">Admin</NavLink>
            </li> 
      : 
      AuthUser ?
      <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">Logout</NavLink>
            </li> 
      :
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" activeClassName="nav-link-selected">Login</NavLink>
            </li> 
      }
            
          </ul>
        </nav>
      </header>
    )
  }
}


export default Navigation;
