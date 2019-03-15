import React, { Component } from 'react';
import Markdown from 'react-markdown';
import Text from './Markdowns/enroll.md';

class Enroll extends Component {
    constructor(props) {
        super(props)
    
        this.state = { text: null }
      }
    
      componentWillMount() {
        fetch(Text).then((response) => response.text()).then((text) => {
          this.setState({ text: text })
        })
      }
    render() {
      return (
        <div>
            <Markdown source={this.state.text} />
            
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
    );
  }
}

export default Enroll;