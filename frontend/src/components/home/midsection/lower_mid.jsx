import React, { Component } from "react";
import "./mid.css";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { events } from "../../../actions";
import { findNextUpcomingEvent } from "../../events/utils";
import { getSorted, getUpcomingEvents } from "../../../reducers/selectors";
import Moment from "react-moment";

class LowerMid extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const defaultContent =
      "Check back again soon for what's is coming up next for YMIM. If you have an event that you think YMIM should be a part of please please email: Founder@theymim.org or call: 773.941.1200";
    let upcomingEvents = this.props.upcomingEvents;
    let nextEvent;
    if (upcomingEvents.length) {
      nextEvent = findNextUpcomingEvent(upcomingEvents);
    }
    const lowermidSection = (
      <Row className="lower-mid">
        <Col className="test">
          <h2 className="text-center heading">What's New?</h2>
          <h2 className="text-center sub-heading">
            {nextEvent ? (
              <div>
                <Moment format="llll">{nextEvent.start.local}</Moment> -
                <span>{nextEvent.name.text} </span>
              </div>
            ) : (
              ""
            )}
          </h2>
          <div className="line-paragraph">
            {nextEvent ? nextEvent.description.text : defaultContent}
          </div>
          {nextEvent ? (
            <div>
              <h2 className="sub-heading">RSVP and Find out More:</h2>
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
            </div>
          ) : (
            ""
          )}

          <div>
            <button className="ym-button" id="enroll">
              All News
            </button>
            <Link to="/events">
              <button className="ym-button" id="enroll">
                All Events
              </button>
            </Link>
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
    upcomingEvents: getUpcomingEvents(getSorted(state.events))
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
)(LowerMid);
