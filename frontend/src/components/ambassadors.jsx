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
                        <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Ambassador / Volunteer" class="radio" required="" aria-required="true" /> Ambassador / Volunteer</label>
                        <div class="clear-form"></div>
                        <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Sponsor / Donor" class="radio" required="" aria-required="true" /> Sponsor / Donor</label>
                        <div class="clear-form"></div>
                        <label class="grunion-radio-label radio"><input type="radio" name="g905-getinvolved" value="Partner / Organization" class="radio" required="" aria-required="true" /> Partner / Organization</label>
                        <div class="clear-form"></div>
                    </div>

                    <div class="grunion-field-wrap grunion-field-name-wrap">
                        <label for="g905-name" class="grunion-field-label name">Name<span>(required)</span></label>
                        <input type="text" name="g905-name" id="g905-name" value="" class="name" required="" aria-required="true" />
                    </div>

                    <div class="grunion-field-wrap grunion-field-email-wrap">
                        <label for="g905-email" class="grunion-field-label email">Email<span>(required)</span></label>
                        <input type="email" name="g905-email" id="g905-email" value="" class="email" required="" aria-required="true" />
                    </div>

                    <div class="grunion-field-wrap grunion-field-text-wrap">
                        <label for="g905-phone" class="grunion-field-label text">Phone<span>(required)</span></label>
                        <input type="text" name="g905-phone" id="g905-phone" value="" class="text" required="" aria-required="true" />
                    </div>

                    <div class="grunion-field-wrap grunion-field-url-wrap">
                        <label for="g905-website" class="grunion-field-label url">Website</label>
                        <input type="url" name="g905-website" id="g905-website" value="" class="url" />
                    </div>

                    <div class="grunion-field-wrap grunion-field-textarea-wrap">
                        <label for="contact-form-comment-g905-commentsorquestions" class="grunion-field-label textarea">Comments or Questions</label>
                        <textarea name="g905-commentsorquestions" id="contact-form-comment-g905-commentsorquestions" rows="20" class="textarea"></textarea>
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