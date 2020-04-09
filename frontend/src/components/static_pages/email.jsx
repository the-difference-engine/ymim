import React from "react";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class Email extends React.Component {
  componentDidMount() {
    this.props.gEmail();
  }

  render() {
    return <>{this.props.email}</>;
  }
}

const mapStateToProps = state => {
  return {
    email: state.strapi.email
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gEmail: () => {
      dispatch(getStrapi("GET_EMAIL", "emails"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Email);
