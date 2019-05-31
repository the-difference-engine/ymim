import React from "react";
import { Form, Col, Button } from "react-bootstrap";

function EventsForm(props) {
  return (
    <React.Fragment>
      <h3>Add a new event</h3>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="startTime">
            <Form.Label>Start time</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="endTime">
            <Form.Label>End time</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Add event
        </Button>
      </Form>
    </React.Fragment>
  );
}

export default EventsForm;
