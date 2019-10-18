import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./volunteer.css";
import SingleCarousel from "../SingleCarousel/index";

class Volunteer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: "",
      name: "",
      email: "",
      phone: "",
      website: "",
      message: ""
    };
  }

  onChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();

    console.log("data is being sent", this.state);
    // fetch("http://the backend", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: { "Content-Type": "application/json" }
    // }).then(function() {
    //   console.log("data has been set");
    // });

    this.setState({
      role: "",
      name: "",
      email: "",
      phone: "",
      website: "",
      message: ""
    });
  };

  render() {
    return (
      <>
        <SingleCarousel className="carousel" header="Volunteer" image="ymim1.png"/>
        <Container className="mt-4">
          <Row className="mx-auto">
            <form action="/" className="flexForm" method="post">
              <Row noGutters={true}>
                <Col xs={12} sm={12} md={12} lg={5} className="mr-2">
                  <h2 className="mb-4">Get Involved!</h2>
                  <div className="form-group">
                    <label>
                      <b>Select your role</b>
                    </label>
                    <select
                      className="form-control warning  widthSelect col-md-10 "
                      id="exampleFormControlSelect1"
                      name="role"
                      onChange={this.onChange}
                      value={this.state.role}
                    >
                      <option className="warning">choose your role</option>
                      <option className="warning">
                        Ambassador / Volunteer
                      </option>
                      <option className="warning">Sponsor / Donor</option>
                      <option className="warning">
                        Partner / Organization
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="col-xs-2 labelFont">
                      <b>Name</b> (required)
                    </label>
                    <input
                      id="name"
                      required=""
                      type="text"
                      name="name"
                      className="col-md-10 inputs"
                      onChange={this.onChange}
                      value={this.state.name}
                    />
                  </div>
                  <br />
                  <div>
                    <label className="col-xs-2  labelFont">
                      <b>Email</b> (required)
                    </label>
                    <input
                      id="email"
                      required=""
                      type="email"
                      name="email"
                      className="col-md-10 inputs"
                      onChange={this.onChange}
                      value={this.state.email}
                    />
                  </div>
                  <br />
                  <div>
                    <label className="col-xs-2  labelFont">
                      <b>Phone</b> (required)
                    </label>
                    <input
                      id="phone"
                      type="text"
                      name="phone"
                      className="col-md-10 inputs"
                      onChange={this.onChange}
                      value={this.state.phone}
                    />
                  </div>
                  <br />
                  <div>
                    <label className="col-xs-4  labelFont">
                      <b>Website</b>
                    </label>
                    <input
                      id="website"
                      type="text"
                      name="website"
                      className="col-md-10 inputs"
                      onChange={this.onChange}
                      value={this.state.website}
                    />
                  </div>

                  <div>
                    <label className=" fix labelFont mt-4">
                      <b>Message</b>
                    </label>
                    <textarea
                      id="message"
                      rows="1"
                      name="message"
                      className="col-xs-12 mb-2 inputs-text"
                      onChange={this.onChange}
                      value={this.state.message}
                    />
                  </div>
                  <div className="col-xs-8 mb-5 ">
                    <p>
                      <button
                        onClick={this.onFormSubmit}
                        className="button"
                        type="submit"
                        value="Submit"
                        onChange={this.onChange}
                      >
                        <span className="buttonSpan">Submit</span>
                      </button>
                    </p>
                  </div>
                  <br />
                </Col>
                <Col className="volunteerMain" xs={12} sm={12} md={12} lg={5}>
                  <h2 className="mb-4">Volunteer!</h2>
                  <p className="query">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                    molestias at laudantium, distinctio nulla quo minima
                    delectus consequuntur aut incidunt ipsam quidem repellat
                    fugiat consequatur nihil odit quam voluptas earum.
                  </p>
                </Col>
              </Row>
            </form>
          </Row>
        </Container>
      </>
    );
  }
}

export default Volunteer;
