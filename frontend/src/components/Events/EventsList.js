import React from "react";
import { Card } from "react-bootstrap";

function List(props) {
  return (
    <React.Fragment>
      <h3>Upcoming events</h3>
      <Card>
        <Card.Body>Coming soon. First, need to learn some Python...</Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default List;
