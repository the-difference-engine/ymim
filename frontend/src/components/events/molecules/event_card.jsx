import React from "react";
import Text from "../atoms/text/text";
import EventImage from "../atoms/image/image";
import "./event_card.css";
import Moment from "react-moment";
import { Col, Row, Button } from "react-bootstrap";
export function EventList({ children }) {
  return <ul>{children}</ul>;
}

const EventCard = props => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
      className="eventCard"
    >
      <EventImage url={props.url} image={props.logo} />
      <Row className="mt-3">
        <Col className="thumbNail eventTextBoxes">
          <Text
            text={<Moment format="MMM">{props.start}</Moment>}
            type="thumbnailMonth"
          />
          <Text
            text={<Moment format="DD">{props.start}</Moment>}
            type="thumbnailDay"
          />
        </Col>
        <Col className="eventTextBoxes">
          <Text text={props.name} type="subheading" />

          <Text
            text={<Moment format="llll">{props.start}</Moment>}
            type="paragraph"
          />
        </Col>
      </Row>
      <div className="overlay event-overlay">
        <Text text={props.name} type="hoverTitle" />
        <Text
          text={<Moment format="llll">{props.start}</Moment>}
          type="hoverTitle"
        />
        <Text text={props.description} type="hoverDescription" />
        <Button className="learnMore">Click to learn more!</Button>
      </div>
    </a>
  );
};

export { EventCard };
