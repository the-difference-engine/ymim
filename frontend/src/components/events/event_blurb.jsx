import React, { Component } from "react";
import EventForm from "./event_form";
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

class Blurb extends Component {
  state = {
    isHidden: false
  };


  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    return (
     
      <div>

        <Row>
          <Col>

            <div>
              {this.state.isHidden ? <EventForm event={this.state.event} /> :  <div>
                <h3>Got a new Event?</h3>
                <p>Click on the button below to access the create event form.</p>
                <button class="displayFormButton" onClick={this.toggleHidden.bind(this)}>Add a New Event</button></div>}
            </div>
          </Col>
        </Row>
            
            
            </div>       
    );

    
  }
}
export default Blurb;