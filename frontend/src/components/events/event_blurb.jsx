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

            
               

                          <div>
                              {this.state.isHidden ? <EventForm event={this.state.event} /> :
                                  <div>
                                       <Container fluid={true}>
                                      <Row className="eventBlurb justify-content-md-center">
                                      <Col lg={4} md="6">
                                      <h2>Got a New Event?</h2>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus, laudantium accusantium dolorum pariatur veritatis libero deleniti eius maiores amet?</p> 
                                      </Col>

                                      <Col lg={4} md="6">
                                      <button class="btn btn-light displayFormButton" onClick={this.toggleHidden.bind(this)}>Add a New Event</button>
                                      </Col>
                                      </Row>
                                      </Container>
                                  </div>}
                          </div>


          </div>
      );

    
  }
}
export default Blurb;