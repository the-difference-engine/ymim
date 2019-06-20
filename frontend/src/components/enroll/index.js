import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import 'react-bootstrap';
import SingleCarousel from '../SingleCarousel/SingleCarousel.js';
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
      <>
      <SingleCarousel header={"Enroll"} className="mb-5" />

      <div className="container">
      <h1 className="mt-5">Enroll Now</h1>
      <div className="main-content container col-sm-6 float-right mt-5">
       
        <Markdown id="fontcss" className="mt-3 " source={this.state.text} />
        </div>
        <div className="container col-sm-6 float-left mt-5">
          <form action="/" method="post">
            <div>
            <label for="name" className="col-xs-4 block labelFont">Name(required)</label>
              <input  id="name" required="" type="text"  className="col-md-10 inputs" />
            </div>
            <br />
            <div>
              <label for="email" className="col-md-2 block labelFont">Email(required)</label>
              <input id="email" required="" type="email" className ="col-md-10 inputs" />
            </div>
            <br />
            <div>
              <label for="phone" className="col-md-2 block labelFont">Phone(required)</label>
              <input id="phone" type="text" className="col-md-10 inputs" />
            </div>
            <br />
            {/* <div>
              <label for="age" className="col-md-2 block">Age(required)</label>
              <input id="age" className="col-md-10  inputs" type="number" />
              {/* <div>
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
              </div> */}
            {/* </div>   
            */} 
            <div>
              <label className="col-md-4 block mt-3 mb-1 labelFont">Message</label>
            
              <textarea name="" rows="6" className="col-md-10 mb-4  inputs-text" />
            </div>
         
            <div className="col-md-8 mb-5 ">
              <p>
                <button className="button" type="submit" value="Submit"> <span className="buttonSpan">Submit</span></button>
              </p>
   
            </div>
          </form>
        </div>
        </div>
      </>
    );
  }
}

export default Enroll;
