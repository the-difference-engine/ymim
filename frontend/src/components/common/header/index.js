import React, { Component } from "react";
import "./index.css";
import NavTop from "./nav_top";
import NavBottom from "./nav_bottom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <NavTop />
        </div>
        <div className="row">
          <NavBottom />
        </div>
      </div>
    );
  }
}

export default Header;
