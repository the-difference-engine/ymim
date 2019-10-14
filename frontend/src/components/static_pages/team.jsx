import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ImageModal from "../modals/image_modal.jsx";
import "./team.css";
import Picture1 from "../../assets/action-shots/3 rows of donations lined up.jpg";
import Picture2 from "../../assets/action-shots/Handmade drawstring bag donations.jpg";
import Picture3 from "../../assets/action-shots/JM MW EP RPL 2.jpg";
import Picture4 from "../../assets/action-shots/Rev Irene Min Trina KWKOIOEO pix wDonations.jpg";
import Picture5 from "../../assets/action-shots/Team photo wKennedy.jpg";
import Picture6 from "../../assets/action-shots/TTigue Sscott ASayre.jpg";
import Picture7 from "../../assets/action-shots/UIC Dream Team SScott ACalix KWright.jpg";
import Picture8 from "../../assets/action-shots/Calix family donors.jpg";

class Team extends Component {
  state = {
    showImageModal: false,
    enhancedImage: null
  };

  selectImage = event => {
    this.setState({ enhancedImage: event.target.src, showImageModal: true });
  };

  render() {
    return (
      <div>
        <div className="membersDisplay">
          <Container>
            <Row>
              <Col>
                <Col className="meetTheTeam">
                  <h2 className="text-center heading">Meet The Team</h2>
                  <p className="line-paragraph">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Blanditiis voluptas quia laboriosam ea, ut delectus
                    perferendis quae nisi necessitatibus non sapiente nesciunt
                    unde officia quis facilis temporibus itaque eaque optio!
                  </p>

                  <p className="line-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, rerum labore. Ipsa voluptatibus odit impedit repellat
                    facere quos eius. Laudantium unde, totam autem temporibus
                    rerum debitis culpa natus! Ipsum eaque assumenda deleniti
                    voluptates. Soluta culpa ut eius aliquid rerum delectus.
                    Pariatur ipsa sit delectus, vel illum ratione quis
                    architecto eveniet!
                  </p>
                </Col>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="teamPhotosArea">
          <Container className="teamPhotos">
            <Row>
              <Col>
                <h2 className="text-center heading">Gallery</h2>
              </Col>
            </Row>
            <Row>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture1}
                  className="gallery-picture"
                  alt="1"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture2}
                  className="gallery-picture"
                  alt="2"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture3}
                  className="gallery-picture"
                  alt="3"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture4}
                  className="gallery-picture"
                  alt="4"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture5}
                  className="gallery-picture"
                  alt="5"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture6}
                  className="gallery-picture"
                  alt="6"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture7}
                  className="gallery-picture"
                  alt="7"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <img
                  src={Picture8}
                  className="gallery-picture"
                  alt="8"
                  onClick={event => {
                    this.selectImage(event);
                  }}
                />
              </Col>
              <Col className="imageColumn" sm={4}>
                <a href="https://www.facebook.com/theymim/"
                   target="_blank"
                   rel="noopener noreferrer">
                  <div className="facebookLinkContainer">
                    <p>Click here for more photos of the team.</p>
                  </div>
                </a>
              </Col>
            </Row>
            <ImageModal
              src={this.state.enhancedImage}
              show={this.state.showImageModal}
              onHide={() => {
                this.setState({ showImageModal: false });
              }}
            />
          </Container>
        </div>
      </div>
    );
  }
}

export default Team;
