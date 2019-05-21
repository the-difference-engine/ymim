import React, { Component } from "react";
import "./index.css";
import NavTop from "./nav_top";
import NavBottom from "./nav_bottom";

class header extends Component {
  render() {
    return (
      <div>
        <NavTop />
        <NavBottom />
      </div>
    );
  }
}

export default header;
