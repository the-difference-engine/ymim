import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventSection from "./organisms/event_section";
import Text from "./atoms/text/text";

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
    if (this.props.events.length > 0) {
      const currentTime = Date.now()
      let lastIndex = this.props.events.length - 1;
      while (
        lastIndex >= 0 &&
        Date.parse(this.props.events[lastIndex].end.local) - currentTime > 0
      ) {
        lastIndex--
      }
      if (lastIndex == this.props.events.length - 1) {
        return (
          <div>
            <Text text="Upcoming Events" type="heading" />
            Check back again soon for what's is coming up next for YMIM. If you
            have an event that you think YMIM should be a part of please email:
            Founder@theymim.org or call: 773.941.1200.
            <EventSection
              events={this.props.events.slice(0, lastIndex + 1)}
              sectionTitle={"Past Events"}
              eventsLength={lastIndex}
              isUpcoming={false}
            />
          </div>
        );
      } else {
        return (
          <div>
            <EventSection
              events={this.props.events.slice(lastIndex + 1)}
              sectionTitle={"Upcoming Events"}
              eventsLength={this.props.events.length - lastIndex - 1}
              isUpcoming={true}
            />
            <EventSection
              events={this.props.events.slice(0, lastIndex + 1)}
              sectionTitle={"Past Events"}
              eventsLength={lastIndex}
              isUpcoming={false}
            />
          </div>
        );
      }
    }
    return null;
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
