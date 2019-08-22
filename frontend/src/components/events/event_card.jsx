import React from "react";
import { Container, Card, CardDeck } from "react-bootstrap";
import "./index.css";
import Moment from 'react-moment';
import Text from '../events/atoms/text/text';
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
                  <Text text={props.name} type="subheading" />
                  <div>
                    <EventImage url={props.url} image={props.logo} />
                  </div>
                </a>
                <Text text={props.description} type="paragraph" />
                <Text text={<Moment format="llll">{props.start}</Moment>} type="paragraph" />
                <Text text="to" type="paragraph" />
                <Text text={<Moment format="llll">{props.end}</Moment>} type="paragraph" />
              </Card>
            </CardDeck>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export { EventItems };
