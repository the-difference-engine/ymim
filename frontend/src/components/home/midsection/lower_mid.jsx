<<<<<<< HEAD
import React, { Component } from "react";
import "./mid.css";
import { Container, Row } from "react-bootstrap";

const linkStyle = {
  color: "green"
};

class LowerMid extends Component {
  render() {
    return (
      <div className="lowermid">
        <div className="container">
          <h2 className="text-center heading">What's New?</h2>
          <h5 className="text-center subheading">
            Mar 9. 2019 - Let's Do 300! Emergency Care Package Drive
          </h5>

          <div>
            <p className="lineParagraph">
              Join Young Masterbuilders In Motion on March 9th at Rogers Park
              Library to collect and package essential supplies for foster youth
            </p>
            <p className="lineParagraph">
              It's estimated that 5,000 youth age out of foster care in the
              Chicagoland area each year. Young Masetbuilders in Motion is
              working to reverse the impat of poverty by letting our teen girls
              and young adule women who have experienced foster care know that
              we care. We know it's an urgent situation. We need your support!
              Won't you join us?
            </p>
            <h5 className="subheading">RSVP and Find out More:</h5>

            <h5 className="subheading">Eventbright:</h5>
            <a className="spaceanchors" style={linkStyle} href="#">
              https://www.eventbrite.com/ymim
            </a>

            <h5 className="subheading">Facebook:</h5>
            <a className="spaceanchors" style={linkStyle} href="#">
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

        <Container className="mb-5">
          <Row className="justify-content-md-center">
            <ul className="footerImageHeader">
              <li className="h2-heading">
                <h2 className="foot_head movefont">
                  <span className="trymovingfont">Inspiring </span>
                </h2>
              </li>
              <li className="h2-heading moveConnecting">
                <h2 className="foot_head">Connecting</h2>
              </li>
              <li className="h2-heading">
                <h2 className="foot_head">Empowering</h2>
              </li>
            </ul>
          </Row>
          <Row className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
              />
            </div>

            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
                />
            </div>

            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                />
            </div>

            <div className="pic-container">
              <img
                className="pic"
                src="https://apothekergroup.com/wp-content/uploads/2018/09/placeholder.png"
                />
                </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LowerMid;
=======
import React, { Component } from "react";
import "./mid.css";

const linkStyle = {
  color: "green"
};

class LowerMid extends Component {
  render() {
    return (
      <div className="lowermid">
        <div className="container">
          <h2 className="text-center heading">What's New?</h2>
          <h5 className="text-center subheading">
            Mar 9. 2019 - Let's Do 300! Emergency Care Package Drive
          </h5>

          <div>
            <p className="lineParagraph">
              Join Young Masterbuilders In Motion on March 9th at Rogers Park
              Library to collect and package essential supplies for foster youth
            </p>
            <p className="lineParagraph">
              It's estimated that 5,000 youth age out of foster care in the
              Chicagoland area each year. Young Masetbuilders in Motion is
              working to reverse the impat of poverty by letting our teen girls
              and young adule women who have experienced foster care know that
              we care. We know it's an urgent situation. We need your support!
              Won't you join us?
            </p>
            <h5 className="subheading">RSVP and Find out More:</h5>

            <h5 className="subheading">Eventbright:</h5>
            <a className="spaceanchors" style={linkStyle} href="#">
              https://www.eventbrite.com/ymim
            </a>

            <h5 className="subheading">Facebook:</h5>
            <a className="spaceanchors" style={linkStyle} href="#">
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
      </div>
    );
  }
}

export default LowerMid;
>>>>>>> f80b11adecc4d87ef78d708bb77415c9bc27d965
