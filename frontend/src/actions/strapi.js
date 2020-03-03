import axios from "axios";

const getStrapi = (action, endpoint) => {
  return dispatch => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgxMzgzNDc3LCJleHAiOjE1ODM5NzU0Nzd9.fLn5jTbyPzUMTN-h61DUQtgEdzAXUZMczGqkzFOuwT8";
    const url = `http://localhost:1337/${endpoint}`;
    return axios(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      return dispatch({ type: action, response: response });
    });
  };
};
