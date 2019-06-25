import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import NavBar from "./navbar";

class Header extends Component {
  render() {
    const AuthAdmin = false;
    const AuthUser = false;
    return (
      <div>
        <NavBar />
        {AuthAdmin ? (
          <NavLink
            className="nav-link-top"
            to="/admin"
            activeClassName="nav-link-top-selected"
          >
            Admin
          </NavLink>
        ) : AuthUser ? (
          <NavLink
            className="nav-link-top"
            to="/login"
            activeClassName="nav-link-top-selected"
          >
            Logout
          </NavLink>
        ) : (
          <NavLink
            className="nav-link-top"
            to="/login"
            activeClassName="nav-link-top-selected"
          >
            Login
          </NavLink>
        )}
      </div>
    );
  }
}

export default Header;
