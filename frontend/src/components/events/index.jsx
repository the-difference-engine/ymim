import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import EventForm from "./event_form";
import "./index.css";
import logo from "../../assets/logo.png";
import { EventList, EventItems } from "./event_card";

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

  selectForEdit = id => {
    let edit_event = this.props.events[id];
    this.setState({
      event: edit_event
    });
  };

  render() {
    return (
      <div>
        <h1>Current Events</h1>
        <div className="col-md-6">
          <EventForm event={this.state.event} />
        </div>
        <div className="row">
          <EventList>
            {this.props.events.map(event => {

              return (

                <EventItems
                  key={event.id}
                  name={
                    event.name
                      ? event.name.text
                      : "Young Masterbuilders In Motion Event"
                  }
                  description={
                    event.description
                      ? event.description.text
                      : ""
                  }
                  start={
                    event.start
                      ? event.start.local
                      : "TBA"
                  }
                  end={
                    event.end
                      ? event.end.local
                      : "TBA"
                  }
                  logo={
                    event.logo
                      ? event.logo.url
                      : logo
                  }
                  url={event.url}
                />

              )

            })}
          </EventList>
        </div>

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