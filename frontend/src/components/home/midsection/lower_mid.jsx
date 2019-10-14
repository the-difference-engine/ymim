import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { events } from "../../../actions";
import { findUpcomingEvents, findNextUpcomingEvent } from "../../events/utils";
import moment  from "moment";
import Moment from "react-moment";
class LowerMid extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    this.props.events.sort((a, b) => moment(a.start.local) - moment(b.start.local)).filter(s =>
      ["live", "started", "ended", "completed"].includes(s.status));
    const upcomingEvents = findUpcomingEvents(this.props.events, moment())
    const defaultContent = "Check back again soon for what's is coming up next for YMIM. If you have an event that you think YMIM should be a part of please please email: Founder@theymim.org or call: 773.941.1200";
    let nextEvent;
    if (upcomingEvents.length) {
      nextEvent = findNextUpcomingEvent(upcomingEvents)
    }
    const lowermidSection =   (
    <Row className="lower-mid">
    <Col className="test">
      <h2 className="text-center heading">What's New?</h2>
      <h2 className="text-center sub-heading">
        {nextEvent? ( <div><Moment format="llll">{nextEvent.start.local}</Moment> - <span>{nextEvent.name.text} </span></div>) : ""}
      </h2>
      <div className="line-paragraph">
      {nextEvent ? nextEvent.description.text : defaultContent}
      </div>
      {nextEvent ? ( <div> <h2 className="sub-heading">RSVP and Find out More:</h2>
      <a
        href={nextEvent.url}
        target="_blank"
        className="space-anchors"
        alt="Eventbrite"
      >
        Eventbrite
      </a>
      <a
        href="https://www.facebook.com/theymim/"
        target="_blank"
        className="space-anchors"
        alt="Facebook"
      >
        Facebook
      </a>
    </div>): ""}
     
      <div>
        <button className="ym-button" id="enroll">
          All News
        </button>
        <button className="ym-button" id="enroll">
          All Events
        </button>
      </div>
    </Col>
  </Row>
    );

    return (
      <Container fluid={true}>
        {lowermidSection}
        <Row className="test justify-content-md-center">
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Inspiring</h2>
          </Col>
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Connecting</h2>
          </Col>
          <Col className="justify-content-md-center">
            <h2 className="heading test text-center">Empowering</h2>
          </Col>
        </Row>
        <Row className="test justify-content-md-center">
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
          <Col className="justify-content-md-center">
            <div className="pic-container">
              <img
                className="pic"
                src="https://res.cloudinary.com/dyaffqyuj/image/upload/v1557954804/YMIM/6a00d83451b26169e201a5118cd1e9970c-800wi.jpg"
                alt=""
              />
            </div>
          </Col>
        </Row>
      </Container>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LowerMid);
