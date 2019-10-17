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
    this.state.loadCounter += 1;
    if(this.state.loadCounter % 2 === 0) document.getElementsByClassName("resp-iframe")[0].style.height = "400px";
    else document.getElementsByClassName("resp-iframe")[0].style.height = "1275px"
  }

  render() {
    return (
      <div>
        <SingleCarousel header="Enroll" />
        <div className="container group">
          <div className="container col-sm-6 float-right mt-5">
            <Markdown id="fontcss" className="mt-3 " source={this.state.text} />
          </div>
          <div className="container col-sm-6 mt-5">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScH_lkw44ikfkHlHpUFVsAtXF6MzElK19xWUyVOP_mJ-ClmHw/viewform?embedded=true" 
            width="100%" height="1250" frameborder="0" marginheight="0" marginwidth="0"
            onLoad={this.loaded} className="resp-iframe"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Enroll;
