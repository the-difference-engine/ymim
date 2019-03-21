import React, { Component } from 'react';

class Contact extends Component {
    render() {
      return (
        <div class="jumbotron">
            <h1 class="entry-title" itemprop="headline">Contact Us</h1>
            <div class="entry-content" itemprop="text">
                <p>Hello Ms. or Mr. Wonderful,</p>
                <p>Thank you for checking out our website and considering the Young Masterbuilders in Motion (<strong>YMIM</strong>) as your charity of choice.</p>
                <p>Together we can work to make a difference in the lives of&nbsp;young adult women orphans, adoptees, and foster youth teens and alumnae.</p>
                <p>Use the form below to let us know what’s on your mind and how we can help.</p>
                <p>Until next time,</p>
                <p>Kim Wright, MBA, U.S. Army Veteran</p>
                <p>Foster Youth Alumna</p>
                <p>Founder, Young Masterbuilders in Motion</p>
                <p>Email: Founder@theymim.org |&nbsp;Phone: 773.941.1200</p>
                <p>&nbsp;</p>
                <div id="contact-form-12">
                    <form action="/" method="post" class="contact-form commentsblock">

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

                    <div class='col-md-4'>
                        <label for="contact-form-comment-g900-message">Message</label>
                    </div>
                    <div>
                        <textarea name="" id="contact-form" rows="6" class="messageInput"></textarea>
                    </div>
                        <p class="contact-submit">
                            <input type="submit" value="Submit" class="pushbutton-wide" />
                            <input type="hidden" name="contact-form-id" value="12" />
                            <input type="hidden" name="action" value="grunion-contact-form" />
                            <input type="hidden" name="contact-form-hash" value="ed979e3298e33fa29189576255c58eda9cc37c72" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default Contact;