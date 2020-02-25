import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel";
import getStrapi from "../../actions/strapi.js";
import { connect } from "react-redux";

class Enroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: null,
      loadCounter: 0,
      iframeHeight: 1400
    };
  }
  componentDidMount() {
    this.props.gEmail();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.email) {
      fetch(Text)
        .then(response => response.text())
        .then(text => {
          state.text = text.replace(/{{email}}/g, props.email);
        });
    }
  }

  setHeight = () => {
    let width = window.innerWidth;
    if (320 >= width && width < 375) {
      return 1450;
    } else if (375 >= width && width < 424) {
      return 1400;
    } else if (425 >= width && width < 767) {
      return 1350;
    } else if (768 >= width && width < 1024) {
      return 1330;
    } else {
      return 1327;
    }
  };
  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? this.setHeight() : 400;
    let loadCounter = this.state.loadCounter + 1;
    this.setState({ iframeHeight: height, loadCounter: loadCounter });
  };
  render() {
    return (
      <div>
        <SingleCarousel
          id="enroll-carousel"
          header="Young Masterbuilders in Motion"
          image="ymim7.png"
        />
        <div className="container group mt-2">
          {this.props.email} Email
          <div className="container col-sm-4 float-right mt-4">
            <Markdown
              id="fontcss"
              className="text-left"
              source={this.state.text}
            />
          </div>
          <div className="container col-sm-8 mt-7">
            <iframe
              title="enroll"
              src="https://docs.google.com/forms/d/e/1FAIpQLSdgJbnCM0D23-fEm9d_zYoycNUEOelqqEGcCwlBUhPC2vurbg/viewform?embedded=true"
              style={{ width: "100%", height: this.state.iframeHeight }}
              frameBorder="0"
              onLoad={this.loaded}
              className="enroll-iframe"
              scrolling="yes"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.strapi.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gEmail: () => {
      dispatch(getStrapi("GET_EMAIL", "emails"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Enroll);
