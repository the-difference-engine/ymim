import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import NavBar from "./navbar";

class Header extends Component {
  render() {
    const AuthAdmin = true;
    const AuthUser = false;
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default Header;
