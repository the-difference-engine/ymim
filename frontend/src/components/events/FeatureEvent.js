import React, { Component } from "react";
import Moment from "react-moment";
import defaultLogo from "../../assets/ymim1.png";
import "./organisms/event_section.css";
import "./FeatureEvent.css";
import EventImage from "./atoms/image/image";
import Text from "./atoms/text/text";
import Flex from "./atoms/flex/flex";

class FeatureEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  displayToggle = (text) => {
    return (
      <div>{text}
        <span role="button" onClick={this.toggle} style={{ color: "red" }}>  {this.state.isOpen ? "+ Show less" : " - Show more"} </span>
      </div>
    )
  }
  displayContent = (text) => {
    let maxChar = 140
    if (this.state.isOpen) {
      return this.displayToggle(text)
    }
    return this.displayToggle(text.substring(0, maxChar + 1))
  }


  render() {
    const { event } = this.props
    return (
      <div>
        <h2>Upcoming Events</h2>
        <Flex>

          <EventImage url={event.url} image={event.logo.url ? event.logo.url : defaultLogo} />
          <Text text={<Moment format="ll">{event.start}</Moment>} type="subheading" text={event.name.text} />

          <Text type="description" text={event.description.text ? this.displayContent(event.description.text) : ""} />
          <p>
            <Text type="paragraph" text={"RSVP and Find out and more:"} />
          </p>
          <a
            href={event.url}
            target="_blank"
            alt="Eventbrite"
          >
            <Text type="paragraph" text={"Eventbrite"} />
          </a>
          <a
            href="https://www.facebook.com/theymim/"
            target="_blank"
            alt="Facebook"
          >
            <Text type="paragraph" text={"Facebook"} />
          </a>
        </Flex>
      </div>
    );
  }
}


export default FeatureEvent;