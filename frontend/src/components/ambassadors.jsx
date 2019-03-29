import React, { Component } from 'react';

class Ambassadors extends Component {
    render() {
      return (
        <div>
            <h1>Volunteer Ambassadors</h1>
            <div><p>Dear Volunteer Ambassadors!</p>
                <p>Thank you for considering getting involved in the Young Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to inspire, connect, and empower young adult orphans, adoptees, and foster youth alumnae.</p>
                <p>Your thoughtful and generous contributions will help our vulnerable young adult alumnae who are in need to matriculate through life. Your time, talent and donations are greatly appreciated!</p>
                <p>In the form below, please tell us more about you in the comment section. Describe your current occupation and expertise, and if the area you want to help us with is different from your career expertise, tell us what you hope to help us accomplish. Oh yes, of course, donors and sponsors can be volunteers too!</p>
                <p>We welcome you to our family of great people connecting other wonderful people to life changing experiences!</p>
                <div>
                    <form action="/" method="post">

                    <div>
                        <label>Get Involved!<span>(required)</span></label>
                        <div>
                            <label className="radio"><input type="radio" value="Ambassador / Volunteer" className="radio" required="" /> Ambassador / Volunteer</label>
                            <div className="clear-form"></div>
                            <label className="radio"><input type="radio" value="Sponsor / Donor" className="radio" required="" /> Sponsor / Donor</label>
                            <div className="clear-form"></div>
                            <label className="radio"><input type="radio" value="Partner / Organization" className="radio" required="" /> Partner / Organization</label>
                            <div></div>
                        </div>
                    </div>

                    <div>
                        <label className='col-md-2'>Name<span> (required)</span></label>
                        <input type="text" value="" className="col-md-4 " required="" />
                    </div>
                    <br></br>
                    <div>
                        <label className="col-md-2 ">Email<span> (required)</span></label>
                        <input type="email" value="" className="col-md-4 " required="" />
                    </div>

                    <br></br>
                    <div>
                        <label className="col-md-2">Phone</label>
                        <input type="text" value="" className="col-md-4" />
                    </div>


                    <br></br>

                    <div>
                        <label className="col-md-2">Website</label>
                        <input type="text" value="" className="col-md-4" />
                    </div>

                    <div className='col-md-4'>
                        <label>Questions, or Comments</label>
                    </div>
                    <div>
                        <textarea name="" rows="6"></textarea>
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

export default Ambassadors;