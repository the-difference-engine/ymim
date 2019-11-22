import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventList from "./EventList";
import Flex from "./atoms/flex/flex";
import {
  getSorted,
  getNextMonthsEvents,
  getPastEvents
} from "../../reducers/selectors";
import Sponsors from "./sponsors/index";

class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const eventsHeading = (
      <Flex>
        <div className="headingFlex">
          <h1>Events</h1>
        </div>
      </Flex>
    );

    if (this.props.upcomingEvents.length || this.props.pastEvents.length) {
      return (
        <>
          <div className="fullEventsSection">
            {eventsHeading}
            <EventList
              upcomingEvents={this.props.upcomingEvents}
              pastEvents={this.props.pastEvents}
            />
          </div>
          <div>
            <Sponsors />
          </div>
        </>
      );
    }
    return (
      <>
        <div>
          {eventsHeading}
          <div className="checkBack"> Check back soon for events</div>
        </div>
        <div>
          <Sponsors />
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    upcomingEvents: getNextMonthsEvents(getSorted(state.events)),
    pastEvents: getPastEvents(getSorted(state.events))
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
