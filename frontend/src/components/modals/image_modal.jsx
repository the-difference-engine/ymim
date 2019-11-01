import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import "./image_modal.css";

class ImageModal extends Component {
  render() {
    return (
      <Modal
        className="ImageModal"
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="ImageModal"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <img src={this.props.src} alt="src" />
        </Modal.Body>
      </Modal>
    );
  }
}

export default ImageModal;
