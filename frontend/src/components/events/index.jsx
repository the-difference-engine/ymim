import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import "./index.css";
import EventList from "./EventList";
import Flex from "./atoms/flex/flex";
import {
  getSorted,
  getUpcomingEvents,
  getPastEvents
} from "../../reducers/selectors";
class Events extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }
 
  render() {
    let events = this.props.events;
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
          <EventList
            upcomingEvents={this.props.upcomingEvents}
            pastEvents={this.props.pastEvents}
          />
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
    events: getSorted(state.events),
    upcomingEvents: getUpcomingEvents(state.events),
    pastEvents: getPastEvents(state.events)
  };
};
 
const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {
      dispatch(events.fetchEvents());
    }
  };
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
