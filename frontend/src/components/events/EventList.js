import React from "react";
import EventSection from "./organisms/event_section";
import "./index.css";
import { findUpcomingEvents, findPastEvents, findNextUpcomingEvent } from "./utils";
import FeatureEvent from "./FeatureEvent";
import moment from "moment";

const EventList = ({ events }) => {
  events.sort((a, b) => moment(a.start.local) - moment(b.start.local));
  const currentTime = moment()
  const upcomingEvents = findUpcomingEvents(events, currentTime)
  const pastEvents = findPastEvents(events, currentTime)
  if (upcomingEvents.length === 0) {
    return (
      <div>
        <EventSection events={[]} isUpcoming={true} />
        <div className="checkBack">
          Check back again soon for what is coming up next for YMIM. If you have
          an event that you think YMIM should be a part of please email:
          Founder@theymim.org or call: 773.941.1200.
      </div>
        <EventSection events={pastEvents} isUpcoming={false} />
      </div>
    );
  }
  else if (upcomingEvents.length === 1) {
    return (
      <div>
        <FeatureEvent event={findNextUpcomingEvent(upcomingEvents)} />
        <EventSection
          events={pastEvents}
          isUpcoming={false}
        />
      </div>
    )
  }
  else {
    return (
      <div>
        <FeatureEvent event={findNextUpcomingEvent(upcomingEvents)} />
        <EventSection
          events={upcomingEvents.slice(1)}
          isUpcoming={true}
        />
        <EventSection
          events={pastEvents}
          isUpcoming={false}
        />
      </div>
    );
  }
};

export default EventList;
