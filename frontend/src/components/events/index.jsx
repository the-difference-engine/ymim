import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventSection from "./organisms/event_section";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    let events = this.props.events.filter(s =>
      ["live", "started", "ended", "completed"].includes(s.status)
    );
    if (events.length) {
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
            Check back again soon for what's is coming up next for YMIM. If you
            have an event that you think YMIM should be a part of please email:
            Founder@theymim.org or call: 773.941.1200.
            <EventSection
              events={events.slice(0, recentPast + 1)}
              isUpcoming={false}
            />
          </div>
        );
      } else {
        return (
          <div>
            <EventSection
              events={events.slice(recentPast + 1)}
              isUpcoming={true}
            />
            <EventSection
              events={this.props.events.slice(0, recentPast + 1)}
              isUpcoming={false}
            />
          </div>
        );
      }
    }
    return "Check back soon for events";
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    },

    deleteEvent: id => {
      dispatch(events.deleteEvent(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
