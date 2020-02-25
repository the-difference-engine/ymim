import React from "react";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class TaxId extends React.Component {
  componentDidMount() {
    this.props.gTaxId();
  }

  render() {
    return <>{this.props.taxId}</>;
  }
}

const mapStateToProps = state => {
  return {
    taxId: state.strapi.taxId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gTaxId: () => {
      dispatch(getStrapi("GET_TAXID", "tax-ids"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaxId);
