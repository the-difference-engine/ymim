import React from "react";
import EventsForm from "./EventsForm";
import List from "./EventsList";

function Events() {
  return (
    <React.Fragment>
      <h1>YMIM Events</h1>
      <List />
      <EventsForm />
    </React.Fragment>
  );
}

export default Events;
