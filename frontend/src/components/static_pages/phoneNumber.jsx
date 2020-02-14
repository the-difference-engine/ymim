import React from "react";
import axios from "axios";

class PhoneNumber extends React.Component {
  state = {
    phone: ""
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const phone = "http://localhost:1337/phone-numbers";
    axios
      .get(phone, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          phone: response.data[0].number
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
    return <>{this.state.phone}</>;
  }
}

export default PhoneNumber;
