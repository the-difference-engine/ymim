import React, { Component } from "react";
import "./about.css";
import SingleCarousel from "../SingleCarousel/index";
import { Container, Row, Col } from "react-bootstrap";
import PierrePriestley from "./../../assets/Pierre-Priestley_new.jpg";
import ShirleyScott from "./../../assets/Shirley-Scott_new.jpg";
import KimWright from "./../../assets/KWright_new.jpg";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class About extends Component {
  state = {
    aboutText: "",
    pageImage: "",
    aboutKim: "",
    aboutPierre: "",
    aboutShirley: "",
    kimPhoto: "",
    pierrePhoto: "",
    shirleyPhoto: ""
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const url = "http://localhost:1337/about-pages";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        this.setState({
          aboutText: response.data[0].aboutText,
          pageImage: `http://localhost:1337${response.data[0].updateimage[0].url}`,
          aboutKim: response.data[0].aboutKim,
          aboutPierre: response.data[0].aboutPierre,
          aboutShirley: response.data[0].aboutShirley,
          kimPhoto: `http://localhost:1337${response.data[0].kimPhoto[0].url}`,
          pierrePhoto: `http://localhost:1337${response.data[0].pierrePhoto[0].url}`,
          shirleyPhoto: `http://localhost:1337${response.data[0].shirleyPhoto[0].url}`
        });
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
    console.log(this.state.kimPhoto);
    console.log(this.state.pageImage);
    return (
      <Container fluid="true">
        <SingleCarousel
          className="carousel"
          header="Young Masterbuilders in Motion"
          image={this.state.pageImage}
        />
        <Container>
          <Row id="aboutPageTextRow">
            <h1 className="heading"> About </h1>
            <ReactMarkdown className="textLeft" source={this.state.aboutText} />
          </Row>
          <h1 className="about-heading">Our People</h1>
          <Row className="about-people-row">
            <Col xs="12" md="5" lg="4" xl="4" className="images">
              <img
                id="kim-image"
                src={this.state.kimPhoto}
                alt={"Kim Wright"}
              />
            </Col>
            <Col xs="12" md="6" lg="4" xl="6" className="people-col">
              <h1 className="people-heading text-left">Kim Wright, MBA</h1>
              <h4 className="sub-heading text-left">Founder and President</h4>
              <p className="text-left">{this.state.aboutKim}</p>
            </Col>
          </Row>

          <Row className="about-people-row">
            <Col xs="12" md="5" lg="4" xl="4" className="images">
              <img
                id="pierre-image"
                src={PierrePriestley}
                alt={"Pierre Priestley"}
              />
            </Col>
            <Col xs="12" md="6" lg="4" xl="6" className="people-col">
              <h1 className="people-heading text-left">Pierre Priestley</h1>
              <h4 className="sub-heading text-left">
                Board Officer, Treasurer
              </h4>
              <p className="text-left">{this.state.aboutPierre}</p>
            </Col>
          </Row>

          <Row className="about-people-row" id="shirley">
            <Col xs="12" md="5" lg="4" xl="4" className="images">
              <img
                id="shirley-image"
                src={ShirleyScott}
                alt={"Shirley Scott"}
              />
            </Col>
            <Col xs="12" md="6" lg="4" xl="6" className="people-col">
              <h1 className="people-heading text-left">
                Shirley Scott, MS, RN-BC, C-EFM, APN, DNP
              </h1>
              <h4 className="sub-heading text-left">
                Board Officer, Secretary
              </h4>
              <p className="text-left">{this.state.aboutShirley}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default About;
