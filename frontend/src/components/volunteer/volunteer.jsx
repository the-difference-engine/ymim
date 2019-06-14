import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./volunteer.css";


class Volunteer extends Component {
    render() {
        return (
            <Container>
                <Row className="mx-auto">
                    <form action="/" method="post">
                        <Row noGutters={true}>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <h2>Get Involved!</h2>
                                <div className="form-group s ">
                                    <label for="exampleFormControlSelect1"><b>Select your role</b></label>
                                    <select class="form-control warning " id="exampleFormControlSelect1">
                                        <option className="warning">1</option>
                                        <option className="warning">2</option>
                                        <option className="warning">3</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="name" className="col-md-2 block labelFont"><b>Name</b>(required)</label>
                                    <input id="name" required="" type="text" className="col-md-10 inputs" />
                                </div>
                                <br />
                                <div>
                                    <label for="email" className="col-md-2 block labelFont"><b>Email</b>(required)</label>
                                    <input id="email" required="" type="email" className="col-md-10 inputs" />
                                </div>
                                <br />
                                <div>
                                    <label for="phone" className="col-md-2 block labelFont"><b>Phone</b>(required)</label>
                                    <input id="phone" type="text" className="col-md-10 inputs" />
                                </div>
                                <br />
                                <div>
                                    <label for="website" className="col-md-2 block labelFont"><b>Website</b></label>
                                    <input id="website" type="text" className="col-md-10 inputs" />
                                </div>
                                <br />
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6}>
                                <h2>Volunteer!</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias at laudantium, distinctio nulla quo minima delectus consequuntur aut incidunt ipsam quidem repellat fugiat consequatur nihil odit quam voluptas earum.
                        </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <label for="message" className=" block labelFont"><b>Message</b></label>
                                    <textarea id="message" name="" rows="1" className="col-md-10 mb-4 inputs-text" />
                                </div>
                                <div className="col-md-8 mb-5 ">
                                    <p>
                                        <button className="button" type="submit" value="Submit">
                                            <span className="buttonSpan">Submit</span></button>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </Row>
            </Container>
        );
    }
}

export default Volunteer;