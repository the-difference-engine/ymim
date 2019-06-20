import React, { Component } from "react";
import { connect } from "react-redux";
import { events } from "../../actions";
import {
  Container,
  Form,
  Col,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";



class EventForm extends Component {
  state = {

    
      title: "",
      description: ""
  
  };

  handleFormChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(
      "event name: " +
      this.state.title + " " +
      "Event description: " +
      this.state.description
    );
  };
  submitEvent = (event) => {
    event.preventDefault();
    this.props.addEvent(this.props.event);
  }

  //   const {
  //   name,
  //   description,
  //   } = this.state

  //   console.log(`An event was submitted: ${name}, ${description}`)
  //   }

  //   handleChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //   [name]: value
  //   });
  //   };

  render() {
    return (
      <React.Fragment>
        <Container id="eventForm">
          <h3>Add a new event</h3>

          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter the name of event"
                name="title"
                onChange={this.handleFormChange}
                value={this.props.event.title}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                placeholder="Enter a description of event"
                name="description"
                onChange={this.handleFormChange}
                value={this.props.event.description}
              />
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="Where will the event be held?" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="date">
                <label htmlFor="inputDate">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputDate"

                />
              </Form.Group>

              <Form.Group as={Col} controlId="startTime">
                <label htmlFor="inputTime">Start Time</label>
                <input type="time" className="form-control" id="inputTime" />
              </Form.Group>

              <Form.Group as={Col} controlId="endTime">
                <label htmlFor="inputTime">End Time</label>
                <input type="time" className="form-control" id="inputTime" />
              </Form.Group>
            </Form.Row>

            <label htmlFor="basic-url">Event URL</label>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                {/* <InputGroup.Text id="basic-addon3">
                https://example.com/users/
              </InputGroup.Text> */}
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Additional details</Form.Label>
              <Form.Control as="textarea" rows="3" />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Registration required" />
            </Form.Group>

            <Button variant="light" type="submit" onClick={this.submitEvent}>
              Add event
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}
// export default EventForm;

const mapDispatchToProps = dispatch => {
  return {
    addEvent: event => {
      return dispatch(events.addEvent(event));
    },

    updateEvent: event => {
      return dispatch(events.updateEvent(event));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EventForm);
