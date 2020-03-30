import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./index.css";
import Flex from "../atoms/flex/flex";
import { connect } from "react-redux";
import getStrapi from "../../../actions/strapi.js";

const sponsorsHeading = (
  <Flex>
    <div className="headingFlex">
      <h1>Our Sponsors</h1>
    </div>
  </Flex>
);

class Sponsors extends Component {
  componentDidMount() {
    this.props.gSponsors();
  }

  render() {
    return (
      <div className="sponsor-gallery">
        {sponsorsHeading}
        <Container>
          {this.props.sponsors ? (
            this.props.sponsors.map((sponsor, i) => (
              <img
                key={i}
                src={sponsor.sponsors.url}
                className="logo-picture"
                alt="sponsor logo"
              />
            ))
          ) : (
            <label>loading sponsors...</label>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sponsors: state.strapi.sponsors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gSponsors: () => {
      dispatch(getStrapi("GET_SPONSORS", "sponsors"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sponsors);
