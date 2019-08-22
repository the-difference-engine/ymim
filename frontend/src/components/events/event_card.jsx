import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import "./index.css";
import Moment from 'react-moment';
import EventImage from "../../components/events/atoms/image/image";

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
                <div>
                  <EventImage
                    url={props.url}
                    image={props.logo}
                  />
                </div>
                <p>{props.description}</p>
                <p className="eventDisplayTime">Event date and time:</p>
                <p><Moment format='llll'>{props.start}</Moment></p>
                <p>to</p>
                <p><Moment format='llll'>{props.end}</Moment></p>
              </Card>
            </CardDeck>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export { EventItems };
