import React, { Component } from 'react';
import Markdown from 'react-markdown';
import './enroll.css';
import Text from '../Markdowns/enroll.md';

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
        <div class="main-content">
            <Markdown source={this.state.text} />
            
            <div class='jumbotron'>
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
                    <br></br>

                    <div class="grunion-field-wrap grunion-field-radio-wrap">
                    <label for="g900-age" class="grunion-field-label col-md-2 ">Age<span>(required)</span></label>
                        <div class="col-md-4">
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
                        </div>
                        <br></br>

                    <div class='col-md-4'>
                        <label for="contact-form-comment-g900-message">Message</label>
                    </div>
                    <div>
                        <textarea name="" id="contact-form" rows="6" class="messageInput"></textarea>
                    </div>
                    <br></br>
                    <div class='col-md-8 '>
                        <p class="contact-submit">
                        <input type="submit" value="Submit" class="pushbutton-wide" />
                        <input type="hidden" name="contact-form-id" value="900" />
                        <input type="hidden" name="action" value="grunion-contact-form" />
                        <input type="hidden" name="contact-form-hash" value="c19f4ace6ff94d0bad095ff9b0640e33a680edbf" />
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default Enroll;