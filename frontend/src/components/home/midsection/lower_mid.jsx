import React, { Component } from "react";
import "./mid.css";

const linkStyle = {
  color: "green"
};

class LowerMid extends Component {
  render() {
    return (
      <div className="lowermid">
        <h2 className="text-center">What's New?</h2>
        <h5 className="text-center">
          Mar 9. 2019 - Let's Do 300! Emergency Care Package Drive
        </h5>

        <div>
          <p>
            Join Young Masterbuilders In Motion on March 9th at Rogers Park
            Library to collect and package essential supplies for foster youth
          </p>
          <p>
            It's estimated that 5,000 youth age out of foster care in the
            Chicagoland area each year. Young Masetbuilders in Motion is working
            to reverse the impat of poverty by letting our teen girls and young
            adule women who have experienced foster care know that we care. We
            know it's an urgent situation. We need your support! Won't you join
            us?
          </p>
          <h5>RSVP and Find out More:</h5>

          <h5>Eventbright:</h5>
          <a style={linkStyle} href="https://www.eventbrite.com/ymim">
            https://www.eventbrite.com/ymim
          </a>
          <h5>Facebook:</h5>
          <a
            style={linkStyle}
            href="https://www.facebook.com/pg/theymim.events"
          >
            https://www.facebook.com/pg/theymim.events
          </a>
          <br />
          <br />
        </div>
        <div>
          <button className="text-center ym-button" id="enroll">
            All News
          </button>
          <button className="text-center ym-button" id="enroll">
            All Events
          </button>
        </div>
      </div>
    );
  }
}

export default LowerMid;
