import React, { Component } from "react";
import Moment from "react-moment";
import defaultLogo from "../../assets/ymim1.png";
import "./organisms/event_section.css";
import EventImage from "./atoms/image/image";
import Text from "./atoms/text/text";
import Flex from "./atoms/flex/flex";

class FeatureEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  displayToggle = text => {
    return (
      <div>
        {text}
        <span
          onClick={this.toggle}
          style={{ color: "gray", cursor: "pointer" }}>
          {" "}
          {this.state.isOpen ? " -Show less" : " +Show more"}{" "}
        </span>
      </div>
    );
  };

  displayContent = text => {
    let maxChar = 600;
    if (text.length <= maxChar) {
      return text;
    }
    if (this.state.isOpen) {
      return this.displayToggle(text);
    }
    return this.displayToggle(text.substring(0, maxChar + 1));
  };

  render() {
    const { event } = this.props;
    return (
      <div>
        <h2>Upcoming Events</h2>
        <Flex>
          <div className="featured-event-top">
            <EventImage
              url={event.url}
              image={event.logo.url ? event.logo.url : defaultLogo}
              type="floating"
            />
            <a href={event.url}>
              <Text type="feature-subheading" text={event.name.text} />
            </a>
            <Text
              text={<Moment format="llll">{event.start}</Moment>}
              type="feature-subheading"
            />
            <Text
              type="description"
              text={
                event.description.text
                  ? this.displayContent(event.description.text)
                  : ""
              }
            />
          </div>

          <div className="col-learn-more">
            <h2>
              <Text type="rsvp" text="RSVP and Find out more:" />
            </h2>
            <div className="row-learn-more">
              <a
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="space-anchors"
                alt="Eventbrite"
              >
                <Text type="rsvp-link" text={"Eventbrite"} />
              </a>
              <a
                href="https://www.facebook.com/theymim/"
                target="_blank"
                rel="noopener noreferrer"
                className="space-anchors"
                alt="Facebook"
              >
                <Text type="rsvp-link" text={"Facebook"} />
              </a>
            </div>
          </div>
        </Flex>
      </div>
    );
  }
}

export default FeatureEvent;
