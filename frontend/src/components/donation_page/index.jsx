import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./index.css";
import Email from "../static_pages/email.jsx";
import PhoneNumber from "../static_pages/phoneNumber.jsx";
import TaxId from "../static_pages/taxId.jsx";
import axios from "axios";

class Donate extends Component {
  state = {
    paypal: ""
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const paypal = "http://localhost:1337/donates";
    axios
      .get(paypal, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          paypal: response.data[0].paypal
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
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
              action={this.state.paypal}
              method="post"
              target="_blank"
              className="donate-form"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="34L62HLMP5VEC"
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
export default Donate;
