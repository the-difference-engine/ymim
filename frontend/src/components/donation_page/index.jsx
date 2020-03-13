import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./index.css";
import Email from "../static_pages/email.jsx";
import PhoneNumber from "../static_pages/phoneNumber.jsx";
import TaxId from "../static_pages/taxId.jsx";
import { connect } from "react-redux";
import getStrapi from "../../actions/strapi.js";

class Donate extends Component {
  componentDidMount() {
    this.props.gDonateLink();
  }

  render() {
    console.log(this.props);
    return (
      <Row noGutters="true">
        <Container fluid="true" className="content-styling">
          <h1 id="donate-now">Donate Now!</h1>
          <p>
            The Young Masterbuilders In Motion, Inc., (<strong>YMIM</strong>),
            supports young women orphans, adoptees, and foster youth alumnae to
            build resiliency, hope, and a bright future.
          </p>
          <p>
            We deliver empowerment and leadership development programs that help
            our alumnae embrace, nurture and support their future as
            independent, thriving members of their community.
          </p>
          <p>
            Your contributions provide direct aid and support to our scholars
            and are greatly appreciated. The Young Masterbuilders in Motion,
            Inc., (<strong>YMIM</strong>) is a 501(c)(3) nonprofit organization
            and your contributions are deductible to the full extent of the law.
            Our tax identification number is <TaxId />.
          </p>
          <p>
            The<strong> YMIM</strong> is committed to respecting the privacy of
            our donors. We do not sell or trade donors’ personal or contact
            information with anyone else. Questions on donating? Contact Kim
            Wright, Founder/Executive Director at <PhoneNumber /> or via email
            at{" "}
            <strong>
              <Email />
            </strong>
          </p>

          <div className="mx-auto donate">
            <form
              action={this.props.donateLink}
              method="post"
              target="_blank"
              className="donate-form"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value={this.props.token}
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
                margin="auto"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
        </Container>
      </Row>
    );
  }
}
const mapStateToProps = state => {
  return {
    donateLink: state.strapi.donateLink,
    token: state.strapi.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gDonateLink: () => {
      dispatch(getStrapi("GET_DONATELINK", "donates"));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Donate);
