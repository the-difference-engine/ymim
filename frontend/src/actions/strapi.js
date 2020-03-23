import axios from "axios";

const getStrapi = (action, endpoint) => {
  return dispatch => {
    const token = process.env.REACT_APP_STRAPI_TOKEN;
    const url = process.env.REACT_APP_STRAPI_HOST + endpoint;
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
