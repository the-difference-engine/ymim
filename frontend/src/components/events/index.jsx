import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventList from "./EventList";
import Flex from "./atoms/flex/flex";

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

    const eventsHeading = (
      <Flex>
        <div className="headingFlex">
          <h1>Events</h1>
        </div>
      </Flex>
    );

    if (events.length) {
      return (
        <div>
          {eventsHeading}
          <EventList events={events} />
          );
        </div>
      );
    }
    return (
      <div>
        {eventsHeading}
        <div className="checkBack"> Check back soon for events</div>
      </div>
    );
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
