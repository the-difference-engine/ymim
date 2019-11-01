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
                    We are made up of professionals with more than 40 years of
                    combined multidisciplinary work and life experience ranging
                    from military veterans, nurses, doctors, researchers,
                    teachers, counselors, lawyers, artists, social workers,
                    business leaders, and mental health practitioners. And,
                    there’s room for more passionate, talented, and
                    compassionate people to join us.
                  </p>

                  <p className="line-paragraph">
                    We believe that by working together, we can co-create a
                    supportive environment in the midst of chaotic urban
                    communities.
                  </p>

                  <p className="line-paragraph">
                    We appreciate your time, gifts and talents toward creating
                    and sustaining impactful programming. Your thoughtful and
                    generous support is greatly appreciated. If you are not
                    already a registered volunteer ambassador, please sign up
                    now, and you too can help our Young Masterbuilders in Motion
                    thrive.
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
                <a
                  href="https://www.facebook.com/theymim/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
