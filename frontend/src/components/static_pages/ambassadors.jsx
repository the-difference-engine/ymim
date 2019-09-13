import React, { Component } from "react";
import Ymim3 from "../../assets/ymim3.png";
import Logo2 from "../../assets/logo.png";
import "./about.css";

class Ambassadors extends Component {
  render() {
    return (
      <div>
        <img
          src={Ymim3}
          alt="ymim3"
          width="100%"
          display="block"
          height="580px"
        />
        <div class="caption2">
          <div class="overlay-volunteer">
            <h3 class="title-volunteer">Volunteer | Become a Sponsor</h3>
            <p class="volunteer-paragraph">
              {" "}
              Inspires, connects, and empowers young women orphans, adoptees,
              and foster youth alumnae to thrive.
            </p>
            <img class="logo2" src={Logo2} alt="ymim-logo"></img>
          </div>
        </div>

        <div class="form_container">
          <h2>
            Get Involved! <span class="span1">(required)</span>
          </h2>
          
          <form action="/" method="post" id="volunteer_form">
          <label for="formName">Name <span class="namespan">(required)</span></label>
            <input type="text" class="form-name" id="formGroupNameInput"></input>

            <label for="formEmail">Email <span class="emailspan">(required)</span></label>
            <input type="text" class="form-email" id="formGroupEmailInput"></input>

            <label for="formPhone">Phone <span class="phonespan">(required)</span></label>
            <input type="text" class="form-phone" id="formGroupPhoneInput"></input>

            <label for="formWeb">Website</label>
            <input type="text" class="form-web" id="formGroupWebInput"></input>
            
            <label for="formMess">Message </label>
            <textarea id ="form_message"></textarea>
            
            
          </form>
        </div>

        {/* <p>
            Thank you for considering getting involved in the Young
            Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to inspire,
            connect, and empower young adult orphans, adoptees, and foster youth
            alumnae.
          </p> */}
        {/* <p>
            Your thoughtful and generous contributions will help our vulnerable
            young adult alumnae who are in need to matriculate through life.
            Your time, talent and donations are greatly appreciated!
          </p>
          <p>
            In the form below, please tell us more about you in the comment
            section. Describe your current occupation and expertise, and if the
            area you want to help us with is different from your career
            expertise, tell us what you hope to help us accomplish. Oh yes, of
            course, donors and sponsors can be volunteers too!
          </p> */}
        {/* <p>
            We welcome you to our family of great people connecting other
            wonderful people to life changing experiences!
          </p> */}
        {/* <div>
            <form action="/" method="post">
              <div>
                <label>
                  Get Involved!<span>(required)</span>
                </label>
                <div>
                  <label className="radio">
                    <input
                      type="radio"
                      value="Ambassador / Volunteer"
                      className="radio"
                      required=""
                    />{" "}
                    Ambassador / Volunteer
                  </label>
                  <div className="clear-form" />
                  <label className="radio">
                    <input
                      type="radio"
                      value="Sponsor / Donor"
                      className="radio"
                      required=""
                    />{" "}
                    Sponsor / Donor
                  </label>
                  <div className="clear-form" />
                  <label className="radio">
                    <input
                      type="radio"
                      value="Partner / Organization"
                      className="radio"
                      required=""
                    />{" "}
                    Partner / Organization
                  </label>
                  <div /> */}
        {/* </div> */}
      </div>

      // <div>
      //   <label className="col-md-2">
      //     Name<span> (required)</span>
      //   </label>
      //   <input type="text" value="" className="col-md-4 " required="" />
      // </div>
      // <br />
      // <div>
      //   <label className="col-md-2 ">
      //     Email<span> (required)</span>
      //   </label>
      //   <input
      //     type="email"
      //     value=""
      //     className="col-md-4 "
      //     required=""
      //   />
      // </div>

      // <br />
      // <div>
      //   <label className="col-md-2">Phone</label>
      //   <input type="text" value="" className="col-md-4" />
      // </div>

      //       <br />

      //       <div>
      //         <label className="col-md-2">Website</label>
      //         <input type="text" value="" className="col-md-4" />
      //       </div>

      //       <div>
      //         <label className="col-md-4">Questions, or Comments</label>
      //       </div>
      //       <div>
      //         <textarea name="" rows="6" className="col-md-8" />
      //       </div>
      //       <p>
      //         <input type="submit" value="Submit" />
      //       </p>
      //     </form>
      //   </div>
      // </div>
    );
  }
}

export default Ambassadors;
