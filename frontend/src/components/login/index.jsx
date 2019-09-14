import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./login.css";
// import SingleCarousel from "../SingleCarousel";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

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
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        {/* <SingleCarousel /> */}
        <Container className="login">
          <div> 
            <Row>            
            <form action="/" className="center-login" method="post">
                <div className="style-login">
                  <div>                    
                    <input
                      id="username"
                      required=""
                      type="text"
                      name="username"
                      placeholder="username"
                      className="col-md-12 inputs"
                      value={this.state.username}
                    />
                  </div>
                  <br />
                  <div>
                    <input
                      id="password"
                      required=""
                      type="text"
                      name="password"
                      placeholder="password"
                      className="col-md-12 inputs"
                      value={this.state.password}
                    />
                  </div>
                  <br />                  
                  <div>
                    <p>
                      <button
                        onClick={this.onFormSubmit}
                        className="col-md-12 loginButton"
                        type="submit"
                        value="Submit"
                        // onChange={this.onChange}
                      >
                        <span className="buttonSpan">LOGIN</span>
                      </button>
                    </p>
                  </div>
                  <div className="center-login" >
                      <a className="password-link" href="">Forgot Password</a>
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