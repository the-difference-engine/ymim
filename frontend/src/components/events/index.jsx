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
    if (this.props.events.length) {
      const currentTime = Date.now();
      let recentPast = this.props.events.length - 1;
      while (
        recentPast >= 0 &&
        Date.parse(this.props.events[recentPast].end.local) - currentTime > 0
      ) {
        recentPast--;
      }

      if (recentPast == this.props.events.length - 1) {
        return (
          <div>
            <EventSection events={[]} isUpcoming={true} />
            Check back again soon for what's is coming up next for YMIM. If you
            have an event that you think YMIM should be a part of please email:
            Founder@theymim.org or call: 773.941.1200.
            <EventSection
              events={this.props.events.slice(0, recentPast + 1)}
              isUpcoming={false}
            />
          </div>
        );
      } else {
        return (
          <div>
            <EventSection
              events={this.props.events.slice(recentPast + 1)}
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
