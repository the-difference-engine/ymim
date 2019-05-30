import React, { Component } from 'react';
import SiteUser from '../components/SiteUser';
import { Link } from 'react-router-dom';
// import EventForm from '../components/EventForm';

class Admin extends Component {

    state = {
        user: [
            {
                "id": "Johnny",
                "name": "Johnny Golucky",
                "email": "johnny@golucky.com"
            },
            {
                "id": "michael",
                "name": "Michael Blabson",
                "email": "michael@blabson.com"
            },
            {
                "id": "tyler",
                "name": "Tyler Hazelnut",
                "email": "tyler@Hazelnut.com"
            }
        ]
    }

    render() {
        return (


            <div>
                <h1>Young Masterbuilders in Motion</h1>
                <SiteUser demoUser={this.state.user} />
                {/* <EventForm /> */}
                <Link to="/">Home</Link>
            </div>

        );
    }
}

export default Admin;