import React, { Component } from "react";
import "./contact.css";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel/index";
import Email from "./email.jsx";
import PhoneNumber from "./phoneNumber.jsx";

class Contact extends Component {
  state = {
    loadCounter: 0,
    iframeHeight: 1100
  };

  setHeight = () => {
    let width = window.innerWidth;
    if (320 >= width && width < 375) {
      return 1300;
    } else if (375 >= width && width < 424) {
      return 1250;
    } else if (425 >= width && width < 767) {
      return 1205;
    } else if (768 >= width && width <= 1024) {
      return 1130;
    } else {
      return 1100;
    }
  };

  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? this.setHeight() : 400;
    let loadCounter = this.state.loadCounter + 1;
    this.setState({
      iframeHeight: height,
      loadCounter: this.state.loadCounter + 1
    });
  };

  render() {
    return (
      <div>
        <SingleCarousel
          className="carousel"
          header="Contact Us"
          image="ymim5.png"
        />
        <div className="container">
          <div className="main-content container col-sm-4 float-right mt-3 mt-md-5">
            <div className="mt-2 mt-md-4">
              <p>Hello Ms. or Mr. Wonderful,</p>
              <p className="text-left">
                Thank you for checking out our website and considering the Young
                Masterbuilders in Motion (<strong>YMIM</strong>) as your charity
                of choice.
              </p>
              <p className="text-left">
                Together we can work to make a difference in the lives
                of&nbsp;young adult women orphans, adoptees, and foster youth
                teens and alumnae.
              </p>
              <p className="text-left">
                Use the accompanying form to let us know what's on your mind and
                how we can help.
              </p>
              <p className="text-left">Until next time,</p>
              <p className="text-left">
                Kim Wright, MBA, U.S. Army Veteran
                <br />
                Foster Youth Alumna
                <br />
                Founder, Young Masterbuilders in Motion
                <br />
                Email: <Email />
                <br />
                Phone: <PhoneNumber />
              </p>
            </div>
          </div>
          <div className="main-content container col-sm-8 mt-5">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9vicPG5oh6xdZYGLMkksNXQc_6WnjY4GCOZbjcnlVzW0huA/viewform?embedded=true"
              style={{ width: "100%", height: this.state.iframeHeight }}
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              onLoad={this.loaded}
              className="enroll-iframe"
              title="contact-iframe"
              scrolling="yes"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
