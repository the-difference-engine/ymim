import React from "react";
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
// import Blurb from "./event_blurb";
import { Carousel } from "react-bootstrap";
import ymim1 from "../../assets/ymim1.png";
import "./index.css";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./index.css";

export function EventList({ children }) {
    return <ul className="list-group">{children}</ul>;
  }
  

const EventItems = props => {
return (
<div className="eventsDisplay">
          <Container>
            <Row>
              
                <Col>
                  <div className="event_container">
                    <Col>
                      <h3>{props.name}</h3>
                      <img className = "eventImage" src={props.logo} />
                      <p>{props.description}</p>
                      <p className="eventDisplayTime">Event date and time:</p>
                      <p>{props.start}</p>
                      <p>to</p>
                      <p>{props.end}</p>
                      <div className="eventButtons">
                        
                        <button
                          className="btn btn-light btn-edit"
                        //   onClick={() => this.selectForEdit(id)}
                        >
                          Edit
                        </button>
                        <button
                        //   onClick={() => this.props.deleteEvent(id)}
                          className="btn btn-light btn-delete"
                        >
                          Delete
                        </button>
                      </div>
                    </Col>
                  </div>
                </Col>
              
            </Row>
          </Container>
        </div>
    
)
    
  }

export {EventItems}


  // <div className="event_container col-md-3" key={`event_${event.id}`}>


             
              {/* <a href={event.url}> 
              <h3>{
                event.name
                  ? event.name.text
                  : "Young Masterbuilders In Motion Event"
                }</h3>
              </a>
              
                 <p>{
                event.description
                  ? event.description.text
                  : ""
                }</p>
              
              <a href={event.url}>
               
                <img class = "eventImage" src=
                {
                  event.logo
                    ? event.logo.url
                    : logo
                }></img>
              </a>
             
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
              </button> */}
            // </div>