import React from "react";
import EventsForm from "./EventsForm";
import List from "./EventsList";
// import { Form } from "react-bootstrap";

function Events() {
  return (
    <React.Fragment>
      <h1>Events page hit successfully</h1>
      <List />
      <EventsForm />
    </React.Fragment>
  );
}

export default Events;
