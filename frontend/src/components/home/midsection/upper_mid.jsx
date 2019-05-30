import React, { Component } from "react";
import "./mid.css";

class UpperMid extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Who Are We?</h2>

        <div>
          <p>
            Become a Young Masterbuilders in Motion (YMIM) scholar and enroll as
            a partcipant. The YMIM empowers young women orphans, adoptees, and
            foster youth alumnae, ages 18 to 30, to build resiliency, hope, and
            a bright future.
          </p>
        </div>

        <div className="text-center">
          <button className="ym-button text-center" id="enroll">
            Enroll
          </button>
        </div>

        <div>
          <p className="bottom-text">
            Young Masterbuilders in Motion, Inc., is a 501(c)(3)nonprofit
            organization and your contributions are deductible to the fulll
            extent of the law
          </p>
        </div>
      </div>
    );
  }
}

export default UpperMid;
