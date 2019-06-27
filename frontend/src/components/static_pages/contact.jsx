import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Contact Us</h1>
        <div>
          <p>Hello Ms. or Mr. Wonderful,</p>
          <p>
            Thank you for checking out our website and considering the Young
            Masterbuilders in Motion (<strong>YMIM</strong>) as your charity of
            choice.
          </p>
          <p>
            Together we can work to make a difference in the lives of&nbsp;young
            adult women orphans, adoptees, and foster youth teens and alumnae.
          </p>
          <p>
            Use the form below to let us know what’s on your mind and how we can
            help.
          </p>
          <p>Until next time,</p>
          <p>Kim Wright, MBA, U.S. Army Veteran</p>
          <p>Foster Youth Alumna</p>
          <p>Founder, Young Masterbuilders in Motion</p>
          <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
          <p>&nbsp;</p>
          <div>
            <form action="/" method="post">
              <div>
                <label className="col-md-2">
                  Name<span> (required)</span>
                </label>
                <input type="text" value="" className="col-md-4 " required="" />
              </div>
              <br />
              <div>
                <label className="col-md-2 ">
                  Email<span> (required)</span>
                </label>
                <input
                  type="email"
                  value=""
                  className="col-md-4 "
                  required=""
                />
              </div>
              <br />
              <div>
                <label className="col-md-2">Phone</label>
                <input type="text" value="" className="col-md-4" />
              </div>

              <div>
                <label className="col-md-4">Message</label>
              </div>
              <div>
                <textarea name="" rows="6" className="col-md-8" />
              </div>
              <p>
                <input type="submit" value="Submit" />
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
