import React from "react";
import EventSection from "./organisms/event_section";
import "./index.css";
import { findFirstUpcomingIndex } from "./utils";
import FeatureEvent from "./FeatureEvent";

const EventList = ({ events }) => {
<<<<<<< HEAD
  let pastEnd = findPastEndIndex(events);
  if (pastEnd === events.length - 1) {
=======
  const firstUpcoming = findFirstUpcomingIndex(events)
  if (firstUpcoming === undefined) {
>>>>>>> ba6f19d0b4ef5f4274ddf4c361883ad9b08b7a54
    return (
      <div>
        <EventSection events={[]} isUpcoming={true} />
        <div className="checkBack">
          Check back again soon for what is coming up next for YMIM. If you have
          an event that you think YMIM should be a part of please email:
          Founder@theymim.org or call: 773.941.1200.
        </div>
        <EventSection
          events={events}
          isUpcoming={false}
        />
      </div>
    );
  } else if (firstUpcoming === events.length - 1) {
    return (
      <div>
        <div>
          <FeatureEvent event={events[firstUpcoming]} />
        </div>
        <EventSection
          events={events.slice(0, firstUpcoming)}
          isUpcoming={false}
        />
      </div>
<<<<<<< HEAD
    );
  }
  {
=======
    )
  } else {
>>>>>>> ba6f19d0b4ef5f4274ddf4c361883ad9b08b7a54
    return (
      <div>
        <div>
          <FeatureEvent event={events[firstUpcoming]} />
        </div>
        <EventSection events={events.slice(firstUpcoming + 1)} isUpcoming={true} />
        <EventSection
          events={events.slice(0, firstUpcoming)}
          isUpcoming={false}
        />
      </div>
    );
  }
};

export default EventList;
