import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./volunteer.css";
import SingleCarousel from "../SingleCarousel/index";
import axios from "axios";

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadCounter: 0,
      iframeHeight: 1240,
      video1: "",
      video2: "",
      video3: ""
    };
  }

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const videos = "http://localhost:1337/volunteer-videos";
    axios
      .get(videos, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          video1: response.data[0].videos,
          video2: response.data[1].videos,
          video3: response.data[2].videos
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  setHeight = () => {
    let width = window.innerWidth;
    return 320 >= width && width <= 647 ? 1300 : 1240;
  };

  loaded = () => {
    let height = this.state.loadCounter % 2 === 0 ? this.setHeight() : 400;
    this.setState({
      iframeHeight: height,
      loadCounter: this.state.loadCounter + 1
    });
  };

  render() {
    return (
      <div>
        <SingleCarousel
          className="carousel"
          header="Young Masterbuilders in Motion"
          image="volunteer4.jpg"
        />
        <Container className="mt-4 content-format">
          <Row className="mx-auto flexForm">
            <Row noGutters={true}>
              <Col xs={12} sm={12} md={12} lg={8}>
                <div className="mb-5 px-3 text-left">
                  <h2 className="mb-4">Dear Volunteers and Sponsors!</h2>
                  <p>
                    Thank you for considering getting involved in the Young
                    Masterbuilders in Motion (<b>YMIM)</b>&nbsp;movement to
                    inspire, connect, and empower young adult orphans, adoptees,
                    and foster youth alumnae.
                  </p>
                  <p>
                    Your thoughtful and generous contributions will help our
                    vulnerable young adult alumnae who are in need to
                    matriculate through life. Your time, talent and donations
                    are greatly appreciated!
                  </p>
                  <p>
                    In the accompanying form, please tell us more about you in
                    the comment section. Describe your current occupation and
                    expertise, and if the area you want to help us with is
                    different from your career expertise, tell us what you hope
                    to help us accomplish. Oh yes, of course, donors and
                    sponsors can be volunteers too!
                  </p>
                  <p>
                    We welcome you to our family of great people connecting
                    other wonderful people to life changing experiences!
                  </p>
                </div>

                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf_nNhswm8ZNZxddnuPzhGj6JI9vCQd-FNqfmMGKLHyxe8gPg/viewform?embedded=true"
                  style={{ width: "100%", height: this.state.iframeHeight }}
                  frameBorder="0"
                  onLoad={this.loaded}
                  title="volunteer-iframe"
                  scrolling="yes"
                ></iframe>
              </Col>

              <Col
                className="volunteerVideos px-2 pt-2"
                xs={12}
                sm={12}
                md={12}
                lg={4}
              >
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Inspiring</h4>
                  <div className="videoWrapper">
                    <iframe
                      src={this.state.video1}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="inspire"
                    ></iframe>
                  </div>
                </div>
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Connecting</h4>
                  <div className="videoWrapper">
                    <iframe
                      src={this.state.video2}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="connecting"
                    ></iframe>
                  </div>
                </div>
                <div className="videoFrame">
                  <h4 className="videoFrameTitle">Empowering</h4>
                  <div className="videoWrapper">
                    <iframe
                      src={this.state.video3}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="empower"
                    ></iframe>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Volunteer;
