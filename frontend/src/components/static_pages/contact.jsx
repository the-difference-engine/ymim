import React, { Component } from "react";
import "./contact.css";
import "react-bootstrap";
import SingleCarousel from "../SingleCarousel/index";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class Contact extends Component {
  state = {
    loadCounter: 0,
    iframeHeight: 1100,
    pageText: "",
    pageImage: ""
  };

  setHeight = () => {
    let width = window.innerWidth;
    if (320 >= width && width < 375) {
      return 1300;
    } else if (375 >= width && width < 424) {
      return 1250;
    } else if (425 >= width && width < 767) {
      return 1205;
    } else if (768 >= width && width <= 1024) {
      return 1130;
    } else {
      return 1100;
    }
  };

  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? this.setHeight() : 400;
    let loadCounter = this.state.loadCounter + 1;
    this.setState({
      iframeHeight: height,
      loadCounter: this.state.loadCounter + 1
    });
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgwNzgzODk4LCJleHAiOjE1ODMzNzU4OTh9.02-zwjvENOTr42qdVXhL4DC3I5xtxmKekyel7VtyExc";
    const url = "http://localhost:1337/contact-pages";
    // Request API.
    debugger;
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        // Handle success.
        // debugger;
        this.setState({
          pageText: response.data[0].richie,
          pageImage: `http://localhost:1337${response.data[0].UpdateImage.url}`
        });
      })
      .catch(error => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  render() {
    return (
      <div>
        <SingleCarousel
          className="carousel"
          header="Contact Us"
          image={this.state.pageImage}
        />

        <div className="container">
          <div className="main-content container col-sm-4 float-right mt-3 mt-md-5">
            <div className="mt-2 mt-md-4">
              <ReactMarkdown source={this.state.pageText} />
            </div>
          </div>
          <div className="main-content container col-sm-8 mt-5">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSe9vicPG5oh6xdZYGLMkksNXQc_6WnjY4GCOZbjcnlVzW0huA/viewform?embedded=true"
              style={{ width: "100%", height: this.state.iframeHeight }}
              frameBorder="0"
              marginWidth="0"
              marginHeight="0"
              onLoad={this.loaded}
              className="enroll-iframe"
              title="contact-iframe"
              scrolling="yes"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
