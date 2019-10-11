import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // proceed to the backend to validate the admin user data
    console.log("data is being sent", this.state);
    // fetch("http://the backend", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: { "Content-Type": "application/json" }
    // }).then(function() {
    //   console.log("data has been set");
    // });
  };

  render() {
    return (
      <div>
        <Container className="login">
          <div>
            <Row>
              <form action="/" className="center-login" method="post">
                <div className="container col-md-12 style-login">
                  <div>
                    <input
                      id="username"
                      required=""
                      type="text"
                      name="username"
                      placeholder="username"
                      className="col-md-12 inputs"
                      value={this.state.username}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      id="password"
                      required=""
                      type="password"
                      name="password"
                      placeholder="password"
                      className="col-md-12 inputs"
                      value={this.state.password}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <br />
                  <div>
                    <p>
                      <button
                        onClick={this.handleSubmit}
                        className="col-md-12 loginButton"
                        type="submit"
                        value="Submit"
                      >
                        <span className="buttonSpan">LOGIN</span>
                      </button>
                    </p>
                  </div>                  
                  <br />
                </div>
              </form>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Login;
