import React, { Component } from "react";
import "./contact.css";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel/index";

class Contact extends Component {
  state = {
    loadCounter: 0,
    iframeHeight: 1400
  };

  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? 1400 : 400;
    let loadCounter = this.state.loadCounter + 1;
    this.setState({ iframeHeight: height, loadCounter: loadCounter });
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
          <div className="main-content container col-sm-4 float-right mt-5">
            <div className="mt-4">
              <p>Hello Ms. or Mr. Wonderful,</p>
              <p>
                Thank you for checking out our website and considering the Young
                Masterbuilders in Motion (<strong>YMIM</strong>) as your charity
                of choice.
              </p>
              <p>
                Together we can work to make a difference in the lives
                of&nbsp;young adult women orphans, adoptees, and foster youth
                teens and alumnae.
              </p>
              <p>
                Use the accompanying form to let us know what’s on your mind and how we
                can help.
              </p>
              <p>Until next time,</p>
              <p>Kim Wright, MBA, U.S. Army Veteran</p>
              <p>Foster Youth Alumna</p>
              <p>Founder, Young Masterbuilders in Motion</p>
              <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
              <p>&nbsp;</p>
              <p>
                Kim Wright, MBA, U.S. Army Veteran
                <br />
                Foster Youth Alumna
                <br />
                Founder, Young Masterbuilders in Motion
                <br />
                Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200
              </p>
            </div>
          </div>
          <div className="main-content container col-sm-8 mt-5">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9vicPG5oh6xdZYGLMkksNXQc_6WnjY4GCOZbjcnlVzW0huA/viewform?embedded=true"
              style={{ width: "100%", height: this.state.iframeHeight }}
              frameborder="0"
              marginwidth="0"
              marginheight="0"
              onLoad={this.loaded}
              className="enroll-iframe"
              title="contact-iframe"
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
