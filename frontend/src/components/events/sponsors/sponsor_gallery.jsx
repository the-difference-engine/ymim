import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./index.css";

class SponsorGallery extends Component {
  renderImage(imageUrl) {
    return (
      <Col className="logo-column" sm={3}>
        <img src={imageUrl} className="logo-picture" alt="sponsor logo" />
      </Col>
    );
  }
  render() {
    return (
      <Container className="sponsor-logos">
        <Row>
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </Row>
      </Container>
    );
  }
}

SponsorGallery.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SponsorGallery;
