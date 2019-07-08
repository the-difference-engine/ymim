import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import "react-bootstrap";

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
      <div className="container group">
        <h1 className="mt-5">Enroll</h1>
        <div className="container col-sm-6 float-right mt-5">
          <Markdown id="fontcss" className="mt-3 " source={this.state.text} />
        </div>
        <div className="container col-sm-6 float-left mt-5">
          <form action="/" method="post">
            <div>
              <label for="name" className="col-xs-4">
                Name (required)
              </label>
              <input
                id="name"
                required=""
                type="text"
                className="col-md-10"
              />
            </div>
            <br />
            <div>
              <label for="email" className="col-xs-4">
                Email (required)
              </label>
              <input
                id="email"
                required=""
                type="email"
                className="col-md-10"
              />
            </div>
            <br />
            <div>
              <label for="phone" className="col-xs-4">
                Phone (required)
              </label>
              <input id="phone" type="text" className="col-md-10" />
            </div>
            <br />

            <div>
              <label className="col-xs-4 mt-3 mb-1">
                Message
              </label>

              <textarea
                name=""
                rows="6"
                className="col-md-10 mb-4"
              />
            </div>

            <div className="col-md-8 mb-5">
              <p>
                <button className="button" type="submit" value="Submit">
                  {" "}
                  <span className="buttonSpan">Submit</span>
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Enroll;
