import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel";

class Enroll extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: null,
      loadCounter: 0,
      iframeHeight: 1275,
    };
  }

  componentWillMount() {
    fetch(Text)
      .then(response => response.text())
      .then(text => {
        this.setState({ text: text });
      });
  }

  loaded = () => {

    let height = this.state.loadCounter % 2 === 0 ? 1275 : 400
    this.setState({iframeHeight: height, loadCounter: this.state.loadCounter += 1})
  };

  render() {
    return (
      <div>
        <SingleCarousel header="Enroll" />
        <div className="container group">
          <div className="container col-sm-6 float-right mt-5">
            <Markdown id="fontcss" className="mt-3 " source={this.state.text} />
          </div>
          <div className="container col-sm-6 mt-5">
            <iframe
              title="enroll"
              src="https://docs.google.com/forms/d/e/1FAIpQLScH_lkw44ikfkHlHpUFVsAtXF6MzElK19xWUyVOP_mJ-ClmHw/viewform?embedded=true"
              style={{width: "100%", height: this.state.iframeHeight}}
              frameborder="0"
              onLoad={this.loaded}
              className="enroll-iframe"
            >
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Enroll;
