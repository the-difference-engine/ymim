import React, { Component } from 'react';

class Ambassadors extends Component {
    render() {
      return (
        <div>
            <h1 class="entry-title" itemprop="headline">Volunteer Ambassadors</h1>
            <div class="entry-content" itemprop="text"><p>Dear Volunteer Ambassadors!</p>
                <p>Thank you for considering getting involved in the Young Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to inspire, connect, and empower young adult orphans, adoptees, and foster youth alumnae.</p>
                <p>Your thoughtful and generous contributions will help our vulnerable young adult alumnae who are in need to matriculate through life. Your time, talent and donations are greatly appreciated!</p>
                <p>In the form below, please tell us more about you in the comment section. Describe your current occupation and expertise, and if the area you want to help us with is different from your career expertise, tell us what you hope to help us accomplish. Oh yes, of course, donors and sponsors can be volunteers too!</p>
                <p>We welcome you to our family of great people connecting other wonderful people to life changing experiences!</p>
                <div id="contact-form-905">
                    <form action="/" method="post" class="contact-form commentsblock">

                    <div class="grunion-field-wrap grunion-field-radio-wrap">
                        <label for="g905-getinvolved" class="grunion-field-label">Get Involved!<span>(required)</span></label>
                        <div>
                            <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Ambassador / Volunteer" class="radio" required="" aria-required="true" /> Ambassador / Volunteer</label>
                            <div class="clear-form"></div>
                            <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Sponsor / Donor" class="radio" required="" aria-required="true" /> Sponsor / Donor</label>
                            <div class="clear-form"></div>
                            <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Partner / Organization" class="radio" required="" aria-required="true" /> Partner / Organization</label>
                            <div class="clear-form"></div>
                        </div>
                    </div>

                    <div class="grunion-field-wrap grunion-field-name-wrap">
                        <label for="g900-name" class='col-md-2'>Name<span> (required)</span></label>
                        <input type="text" name="g900-name" id="g900-name" value="" class="name col-md-4 " required="" aria-required="true" />
                    </div>
                    <br></br>
                    <div class="grunion-field-wrap grunion-field-email-wrap">
                        <label for="g900-email" class="email col-md-2 ">Email<span> (required)</span></label>
                        <input type="email" name="g900-email" id="g900-email" value="" class="email col-md-4 " required="" aria-required="true" />
                    </div>

                    <br></br>
                    <div class="grunion-field-wrap grunion-field-text-wrap">
                        <label for="g900-phone" class="grunion-field-label text col-md-2">Phone</label>
                        <input type="text" name="g900-phone" id="g900-phone" value="" class="text col-md-4" />
                    </div>


                    <br></br>

                    <div class="grunion-field-wrap grunion-field-text-wrap">
                        <label for="g900-website" class="grunion-field-label text col-md-2">Website</label>
                        <input type="text" name="g900-website" id="g900-website" value="" class="text col-md-4" />
                    </div>

                    <div class='col-md-4'>
                        <label for="contact-form-comment-g900-message">Questions, or Comments</label>
                    </div>
                    <div>
                        <textarea name="" id="contact-form" rows="6" class="messageInput"></textarea>
                    </div>
                    <p class="contact-submit">
                        <input type="submit" value="Submit" class="pushbutton-wide" />
                        <input type="hidden" name="contact-form-id" value="905" />
                        <input type="hidden" name="action" value="grunion-contact-form" />
                        <input type="hidden" name="contact-form-hash" value="626979b52338462c276a8fd9afc2c9d825fcf6dd" />
                    </p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Ambassadors;