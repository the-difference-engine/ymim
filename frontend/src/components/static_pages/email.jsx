import React from "react";
import axios from "axios";

class Email extends React.Component {
  state = {
    email: ""
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const email = "http://localhost:1337/emails";
    axios
      .get(email, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          email: response.data[0].email
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
    return <>{this.state.email}</>;
  }
}

export default Email;
