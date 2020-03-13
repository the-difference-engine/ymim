import axios from "axios";

const getStrapi = (action, endpoint) => {
  return dispatch => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNTgzNzk5NzU4LCJleHAiOjE1ODYzOTE3NTh9.dWR7T76GKYKaV5C6s8Yqma6mY6nsaklySF5PCDA4u7c";
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

export default getStrapi;
