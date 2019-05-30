import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "../Markdowns/enroll.md";

class Enroll extends Component {
  constructor(props) {
    super(props);

    this.state = { text: null };
  }

  componentWillMount() {
    fetch(Text)
      .then(response => response.text())
      .then(text => {
        this.setState({ text: text });
      });
  }
  render() {
    return (
      <div className="main-content">
        <Markdown source={this.state.text} />
        <div className="container">
          <form action="/" method="post">
            <div>
            <label for="name" className="col-md-2 block">Name (required)</label>
              <input id="name" required="" type="text" value="" className="col-md-4" />
            </div>
            <br />
            <div>
              <label for="email" className="col-md-2 block">Email (required)</label>
              <input id="email" required="" type="email" value="" className="col-md-4" />
            </div>
            <br />
            <div>
              <label for="phone" className="col-md-2 block">Phone</label>
              <input id="phone" type="text" value="" className="col-md-4" />
            </div>
            <br />
            <div>
              <label className="col-md-2 block">Age(required)</label>
              <div>
                <label className="radio">
                  <input
                    required=""
                    type="radio"
                    value="14-16"
                    className="radio"
                  />
                  14-16
                </label>
                <div className="clear-form" />
                <label className="radio">
                  <input
                    required=""
                    type="radio"
                    value="17-18"
                    className="radio"
                  />
                  17-18
                </label>
                <div className="clear-form" />
                <label className="radio">
                  <input
                    required=""
                    type="radio"
                    value="19-21"
                    className="radio"
                  />
                  19-21
                </label>
                <div className="clear-form" />
                <label className="radio">
                  <input
                    required=""
                    type="radio"
                    value="22-25"
                    className="radio"
                  />
                  22-25
                </label>
                <div className="clear-form" />
                <label className="radio">
                  <input
                    required=""
                    type="radio"
                    value="26-30"
                    className="radio"
                  />
                  26-30
                </label>
              </div>
            </div>
            <br />
            <div>
              <label className="col-md-4">Message</label>
            </div>
            <div>
              <textarea name="" rows="6" className="col-md-8" />
            </div>
            <br />
            <div className="col-md-8">
              <p>
                <input type="submit" value="Submit" />
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Enroll;
