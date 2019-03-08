import React, { Component } from 'react';

class Enroll extends Component {
    render() {
      return (
        <div>
            <h1 class="entry-title" itemprop="headline">Enroll Now</h1>
            <div class="entry-content" itemprop="text"><p>The Young Masterbuilders in Motion’s (<strong>YMIM</strong>) 2019 enrollment season is now open for young adult women orphans, adoptees, and foster youth alumnae up to age 30. Alumnae may apply for rolling admissions to <strong>YMIM</strong>&nbsp;scholar’s leadership development program.</p>
                <p>To apply, please send us your personal statement describing why you would like to be involved in the program and what you envision yourself contributing to your peers in the program and to the world. Enrollment submissions should be sent to&nbsp;<strong>Founder@TheYMIM.org</strong>.</p>
                <p>Note: Each applicant is required to have two adult references with complete contact information provided in the email submission.</p>
                <p>The form below is a general participant interest form that helps us plan for number and age groups of potential cohort members, not to be confused with the enrollment application that will need to be submitted via email to <strong>Founder@TheYMIM.org</strong> noted above.</p>
                <div id="contact-form-900">
                    <form action="/" method="post" class="contact-form commentsblock">

                        <div class="grunion-field-wrap grunion-field-name-wrap">
                            <label for="g900-name" class="grunion-field-label name">Name<span>(required)</span></label>
                            <input type="text" name="g900-name" id="g900-name" value="" class="name" required="" aria-required="true" />
                        </div>

                        <div class="grunion-field-wrap grunion-field-email-wrap">
                            <label for="g900-email" class="grunion-field-label email">Email<span>(required)</span></label>
                            <input type="email" name="g900-email" id="g900-email" value="" class="email" required="" aria-required="true" />
                        </div>

                        <div class="grunion-field-wrap grunion-field-text-wrap">
                            <label for="g900-phone" class="grunion-field-label text">Phone</label>
                            <input type="text" name="g900-phone" id="g900-phone" value="" class="text" />
                        </div>

                        <div class="grunion-field-wrap grunion-field-radio-wrap">
                        <label for="g900-age" class="grunion-field-label">Age<span>(required)</span></label>
                                <label class="grunion-radio-label radio"><input type="radio" name="g900-age" value="14-16" class="radio" required="" aria-required="true" /> 14-16</label>
                                <div class="clear-form"></div>
                                <label class="grunion-radio-label radio"><input type="radio" name="g900-age" value="17-18" class="radio" required="" aria-required="true" /> 17-18</label>
                                <div class="clear-form"></div>
                                <label class="grunion-radio-label radio"><input type="radio" name="g900-age" value="19-21" class="radio" required="" aria-required="true" /> 19-21</label>
                                <div class="clear-form"></div>
                                <label class="grunion-radio-label radio"><input type="radio" name="g900-age" value="22-25" class="radio" required="" aria-required="true" /> 22-25</label>
                                <div class="clear-form"></div>
                                <label class="grunion-radio-label radio"><input type="radio" name="g900-age" value="26-30" class="radio" required="" aria-required="true" /> 26-30</label>
                                <div class="clear-form"></div>
                            </div>

                        <div class="grunion-field-wrap grunion-field-textarea-wrap">
                            <label for="contact-form-comment-g900-message" class="grunion-field-label textarea">Message</label>
                            <textarea name="g900-message" id="contact-form-comment-g900-message" rows="20" class="textarea"></textarea>
                        </div>
                        <p class="contact-submit">
                            <input type="submit" value="Submit" class="pushbutton-wide" />
                            <input type="hidden" name="contact-form-id" value="900" />
                            <input type="hidden" name="action" value="grunion-contact-form" />
                            <input type="hidden" name="contact-form-hash" value="c19f4ace6ff94d0bad095ff9b0640e33a680edbf" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Enroll;