import React from "react";
import Text from "../atoms/text/text";
import { EventCard } from "../molecules/event_card";
import { CardDeck } from "react-bootstrap";
import defaultLogo from "../../../assets/ymim1.png";

const EventSection = ({ events, sectionTitle }) => {
  return (
    <div>
      <Text text={sectionTitle} type="heading" />
      <CardDeck>
        {events.map(({ name, start, logo, url, id }) => {
          return (
            <EventCard
              key={id}
              name={name ? name.text : "Young Masterbuilders In Motion Event"}
              //description={description ? description.text : ""}
              start={start ? start.local : "TBA"}
              //end={end ? end.local : "TBA"}
              logo={logo ? logo.url : defaultLogo}
              url={url}
            />
          );
        })}
      </CardDeck>
    </div>
  );
};

export default EventSection;
