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
    pageText: "",
    pageImage: ""
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
          pageText: response.data[0].text,
          pageImage: `http://localhost:1337${response.data[0].updateimage[0].url}`
        });
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
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
            <ReactMarkdown className="textLeft" source={this.state.pageText} />
          </Row>
          <h1 className="about-heading">Our People</h1>
          <Row className="about-people-row">
            <Col xs="12" md="5" lg="4" xl="4" className="images">
              <img id="kim-image" src={KimWright} alt={"Kim Wright"} />
            </Col>
            <Col xs="12" md="6" lg="4" xl="6" className="people-col">
              <h1 className="people-heading text-left">Kim Wright, MBA</h1>
              <h4 className="sub-heading text-left">Founder and President</h4>
              <p className="text-left">
                Wright grew up as a youth-in-care from age 2 to 17 in multiple
                foster homes and a catholic orphanage after losing her mother to
                a premature death due to a horrific domestic violence incident.
                At the age of 7, Wright knew then that her life’s path would
                lead her serve children and young people who also grew up
                without the care and guidance of their own loving mother or
                father. Lacking mentors and relatives to share their experiences
                on how they made it and how she could too, caused Wright to
                always read and research how to do anything. Wright has worked
                as a reporter, writer, editor, HR manager, trainer, case
                manager, and director. Finally stepping out on faith to do what
                she had in her heart since age 7, Wright quotes Audrey Lorde,
                “When I dare to be powerful—to use my strength in the service of
                my vision, then it becomes less and less important whether I am
                afraid.”
              </p>
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
              <p className="text-left">
                “Service to our youth today will ensure the strength of our
                world tomorrow.”
              </p>
              <p className="text-left">
                Priestley currently serves as an associate general counsel of
                Investment Property Exchange Services, Inc. He is an attorney
                and Certified Public Accountant. Priestley served in a variety
                of roles in large companies as a tax analyst and manager. He has
                worked on many community service initiatives for to equip youth
                and young adults.
              </p>
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
              <p className="text-left">
                Scott works as a perinatal network administrator and cares for
                women and infants. She has a special interest in the adolescent
                and young adult women population particularly those living in
                underserved areas. Scott incorporates the physical, social,
                emotional, and spiritual aspects of life to help women and
                families obtain optimal health. U.S. Air Force Veteran.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default About;
