import React, { Component } from "react";
import Markdown from "react-markdown";
import "./enroll.css";
import Text from "./enroll.md";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel";
import axios from "axios";
import Email from "../static_pages/email.jsx";

class Enroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageText: "",
      pageImage: "",
      loadCounter: 0,
      iframeHeight: 1400
    };
  }

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const url = "http://localhost:1337/enroll-pages";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.setState({
          pageText: response.data[0].pageText,
          pageImage: `http://localhost:1337${response.data[0].pageImage[0].url}`
        });
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
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
    console.log(this.state.pageImage);
    return (
      <div>
        <SingleCarousel
          id="enroll-carousel"
          header="Young Masterbuilders in Motion"
          image={this.state.pageImage}
        />
        <div className="container group mt-2">
          <div className="container col-sm-4 float-right mt-5">
            <Markdown
              id="fontcss"
              className="text-left"
              source={this.state.pageText}
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

export default Enroll;
