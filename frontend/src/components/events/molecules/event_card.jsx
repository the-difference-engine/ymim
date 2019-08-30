import React from "react";
import Text from "../atoms/text/text";
import EventImage from "../atoms/image/image";
import "./event_card.css";
import Moment from "react-moment";

export function EventList({ children }) {
  return <ul>{children}</ul>;
}

const EventCard = props => {
  return (
    <div className="eventCard">
      <EventImage url={props.url} image={props.logo} />
      <Text url={props.url} text={props.name} type="subheading" />
      <Text
        text={<Moment format="llll">{props.start}</Moment>}
        type="paragraph"
      />
    </div>
  );
};

export { EventCard };
