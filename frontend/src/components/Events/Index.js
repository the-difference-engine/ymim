import React from "react";
import EventsForm from "./EventsForm";
import List from "./EventsList";
import { Container, Row, Col } from "react-bootstrap";

function Events() {
  return (
    <React.Fragment>
      <h1>YMIM Events</h1>
      <Container>
        <Row>
          <Col>
            <List />
          </Col>
          <Col>
            <EventsForm />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Events;
