import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


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

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(fetchAPI);