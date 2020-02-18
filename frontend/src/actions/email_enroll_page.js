import axios from "axios";

const getEmail = () => {
  return dispatch => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const email = "http://localhost:1337/emails";
    return axios(email, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      return dispatch({ type: "GET_EMAIL", email: response.data[0].email });
    });
  };
};

export default getEmail;
