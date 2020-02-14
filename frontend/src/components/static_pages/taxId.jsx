import React from "react";
import axios from "axios";

class TaxId extends React.Component {
  state = {
    taxId: ""
  };

  componentDidMount() {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const taxId = "http://localhost:1337/tax-ids";
    axios
      .get(taxId, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response =>
        this.setState({
          taxId: response.data[0].taxId
        })
      )
      .catch(error => {
        console.log("An error occurred:", error);
      });
  }

  render() {
    return <>{this.state.taxId}</>;
  }
}

export default TaxId;
