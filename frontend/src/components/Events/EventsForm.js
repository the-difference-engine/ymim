import React from "react";
import { Container, Form, Col, Button, Row } from "react-bootstrap";

function EventsForm(props) {
  return (
    <React.Fragment>
      <style type="text/css">
        {`
    #eventForm {
      background-color: grey;
      color: black;
    }
    `}
      </style>

      <Container id="eventForm">
        {/* <Row>
          <Col xs={6} md={4}> */}
        <h3>Add a new event</h3>

        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control placeholder="Enter the name of event" />
          </Form.Group>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control placeholder="Enter a description of event" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="startTime">
              <Form.Label>Start time</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="endTime">
              <Form.Label>End time</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Additional details</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Registration required" />
          </Form.Group>

          <Button variant="light" type="submit">
            Add event
          </Button>
        </Form>
        {/* </Col>
        </Row> */}
      </Container>
    </React.Fragment>
  );
}

export default EventsForm;
