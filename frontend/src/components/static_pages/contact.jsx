import React, { Component } from "react";
import "./contact.css";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel/index";

class Contact extends Component {
  render() {
    return (
      <>
        <SingleCarousel
          className="carousel"
          header="Contact Us"
          image="ymim5.png"
        />
        <div className="container">
          <h1 className="mt-sm-3 mt-md-5 heading">Contact Us</h1>
          <div className="main-content container col-sm-6 float-right mt-sm-2 mt-md-5">
            <div className="mt-sm-3 mt-md-4">
              <p className="text-left">Hello Ms. or Mr. Wonderful,</p>
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
                Use the form below to let us know what’s on your mind and how we
                can help.
              </p>
              <p className="text-left">Until next time,</p>
              <p className="text-left">
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
          <div className="container col-sm-6 float-left mt-5">
            <form action="/" method="post">
              <div>
                <label for="name" className="col-xs-4 ">
                  Name (required)
                </label>
                <input
                  id="name"
                  required=""
                  type="text"
                  className="col-md-10 "
                />
              </div>
              <br />
              <div>
                <label for="email" className="col-xs-4">
                  Email (required)
                </label>
                <input
                  id="email"
                  required=""
                  type="email"
                  className="col-md-10"
                />
              </div>
              <br />
              <div>
                <label for="phone" className="col-xs-4">
                  Phone (required)
                </label>
                <input id="phone" type="text" className="col-md-10" />
              </div>
              <br />

              <div>
                <label className="col-xs-4 mt-3 mb-1 ">Message</label>
                <textarea name="" rows="6" className="col-md-10 mb-4" />
              </div>

              <div className="col-xs-8 mb-5 ">
                <p>
                  <button className="button" type="submit" value="Submit">
                    <span className="buttonSpan">Submit</span>
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
