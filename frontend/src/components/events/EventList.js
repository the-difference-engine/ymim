import React from "react";
import EventSection from "./organisms/event_section";
import "./index.css";

const EventList = ({ events }) => {
  const currentTime = Date.now();
  let recentPast = events.length - 1;
  while (
    recentPast >= 0 &&
    Date.parse(events[recentPast].end.local) - currentTime > 0
  ) {
    recentPast--;
  }

  if (recentPast === events.length - 1) {
    return (
      <div>
        <EventSection events={[]} isUpcoming={true} />
        <div className="checkBack">
          Check back again soon for what is coming up next for YMIM. If you have
          an event that you think YMIM should be a part of please email:
          Founder@theymim.org or call: 773.941.1200.
        </div>
        <EventSection
          events={events.slice(0, recentPast + 1)}
          isUpcoming={false}
        />
      </div>
    );
  } else {
    return (
      <div>
        <EventSection events={events.slice(recentPast + 1)} isUpcoming={true} />
        <EventSection
          events={this.props.events.slice(0, recentPast + 1)}
          isUpcoming={false}
        />
      </div>
    );
  }
};

export default EventList;
