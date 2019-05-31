import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function EventsForm(props) {
  return (
    <React.Fragment>
      <h3>Add a new event</h3>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
}

export default EventsForm;
