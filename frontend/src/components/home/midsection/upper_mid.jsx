import React, { Component } from "react";
import "./mid.css";

class UpperMid extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="text-center heading">Who Are We?</h2>

          <div>
            <p className="lineParagraph">
              Become a Young Masterbuilders in Motion (YMIM) scholar and enroll
              as a partcipant. The YMIM empowers young women orphans, adoptees,
              and foster alumnae to build resiliency, hope, and a bright future.
            </p>
          </div>

          <div className="text-center lineParagraph">
            <button className="ym-button text-center" id="enroll">
              Enroll
            </button>
          </div>

          <div>
            <p className="bottom-text uppermidSectiontext">
              Young Masterbuilders in Motion, Inc., is a 501(c)(3)nonprofit
              organization and your contributions are deductible to the fulll
              extent of the law
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default UpperMid;
