import React from "react";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class PhoneNumber extends React.Component {
  componentDidMount() {
    this.props.gPhone();
  }

  render() {
    return <>{this.props.number}</>;
  }
}

const mapStateToProps = state => {
  return {
    number: state.strapi.number
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gPhone: () => {
      dispatch(getStrapi("GET_PHONE", "phone-numbers"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneNumber);
