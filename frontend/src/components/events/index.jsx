import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Form,
  Col,
  Button,
  InputGroup,
  FormControl, 
  Row,
  Label, 
  Input,
  FormGroup
} from "react-bootstrap";
import { events } from "../../actions";
import EventForm from "./event_form";
import "./index.css";
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



        
        <Row>
          <Col>
      
          <EventForm event={this.state.event} />
     
          </Col>
        </Row>
          



        <Row>
        
          {this.props.events.map((event, id) => (

            <Col>
            <div className="event_container" key={`event_${event.id}`}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p>{event.start_datetime}</p>
              <p>to</p>
              <p>{event.end_datetime}</p>
              <img src={event.event_image} />
              <button
                className="btn btn-info"
                onClick={() => this.selectForEdit(id)}
              >
                Edit
              </button>
              <button
                onClick={() => this.props.deleteEvent(id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
            </Col>
          ))}
         
        
        </Row>
{/* 
        <EventForm event={this.state.event} /> */}
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