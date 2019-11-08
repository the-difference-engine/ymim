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

    const sponsorsHeading = (
      <Flex>
        <div className="headingFlex">
          <h1>Our Sponsors</h1>
        </div>
      </Flex>
    );

    if (this.props.upcomingEvents.length || this.props.pastEvents.length) {
      return (
        <>
          <div>
            {eventsHeading}
            <EventList
              upcomingEvents={this.props.upcomingEvents}
              pastEvents={this.props.pastEvents}
            />          
          </div> 
          <div>
            {sponsorsHeading}
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
          {sponsorsHeading}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events);
