import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import "./index.css";

export function EventList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

const EventItems = props => {
  return (
    // template from react bootstrap--card deck
    <React.Fragment>
      <div className="eventsDisplay">
        <Container>
          <div className="event_container">
            <CardDeck>
              <Card>
                <a href={props.url}>
                  <h3>{props.name}</h3>
                </a>
                <a href={props.url}>
                  <img className="eventImage" src={props.logo} alt="event" />
                </a>
                <p>{props.description}</p>
                <p className="eventDisplayTime">Event date and time:</p>
                <p>{props.start}</p>
                <p>to</p>
                <p>{props.end}</p>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export { EventItems };
