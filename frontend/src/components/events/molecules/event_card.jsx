import React from "react";
import Text from "../atoms/text/text";
import EventImage from "../atoms/image/image";
import "./event_card.css";
import Moment from "react-moment";
import { Col, Row } from "react-bootstrap";
export function EventList({ children }) {
  return <ul>{children}</ul>;
}

const EventCard = props => {
  return (
    <div className="eventCard">
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
          <a href={props.url}>
            <Text text={props.name} type="subheading" />
          </a>
          <Text
            text={<Moment format="llll">{props.start}</Moment>}
            type="paragraph"
          />
        </Col>
      </Row>
    </div>
  );
};

export { EventCard };
