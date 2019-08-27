import React from "react";
import Text from "../atoms/text/text";
import { EventCard } from "../molecules/event_card";
import Flex, { FlexItem } from "../atoms/flex/flex"
import defaultLogo from "../../../assets/ymim1.png";

const EventSection = ({ events, sectionTitle }) => {
  return (
    <div>
      <Text text={sectionTitle} type="heading" />
      <Flex>
        {events.map(({ name, start, logo, url, id }) => {
          return (
            <FlexItem key={id}>
              <EventCard
                name={name ? name.text : "Young Masterbuilders In Motion Event"}
                //description={description ? description.text : ""}
                start={start ? start.local : "TBA"}
                //end={end ? end.local : "TBA"}
                logo={logo ? logo.url : defaultLogo}
                url={url}
              />
            </FlexItem>
          );
        })}
      </Flex>
    </div>
  );
};

export default EventSection;