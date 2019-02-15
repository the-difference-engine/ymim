import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class fetchAPI extends Component {
  render() {
  return (
    <div>
    <h2>Welcome to YMIM Fetch routes!</h2>
    <p>
      <Link to="/contact">Click Here</Link> to contact us!
    </p>
    </div>
  )
  }
}

export default fetchAPI