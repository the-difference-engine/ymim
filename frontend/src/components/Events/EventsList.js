import React from "react";
import { Container, Card } from "react-bootstrap";

function List(props) {
  return (
    <React.Fragment>
      <Container>
        <h3>Upcoming events</h3>
        <Card>
          <Card.Body>
            Coming soon. First, need to learn some Python...
          </Card.Body>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default List;
