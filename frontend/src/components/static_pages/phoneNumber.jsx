import React from "react";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class PhoneNumber extends React.Component {
  componentDidMount() {
    this.props.gPhone();
  }

  render() {
    return <>{this.props.phone}</>;
  }
}

const mapStateToProps = state => {
  return {
    phone: state.strapi.phone
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
