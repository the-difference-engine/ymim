import React, { Component } from 'react';
import SiteUser from '../components/SiteUser';
import { Link } from 'react-router-dom';

class Admin extends Component {

    state = {
        user: [
            {
                "id": "Johnny",
                "name": "Johnny Golucky",
                "email": "johnny@golucky.com",
                "avatarURL": "http://localhost:5001/ryan.jpg"
            },
            {
                "id": "michael",
                "name": "Michael Jackson",
                "email": "michael@reacttraining.com",
                "avatarURL": "http://localhost:5001/michael.jpg"
            },
            {
                "id": "tyler",
                "name": "Tyler McGinnis",
                "email": "tyler@reacttraining.com",
                "avatarURL": "http://localhost:5001/tyler.jpg"
            }
        ]
    }

    render() {
        return (
            <div>
                <h1>Young Masterbuilders in Motion</h1>
                <form>
                    <input type="text" placeholder="usernname" />
                    <input type="password" placeholder="passwword" />
                    <button>Admin</button>
                </form>
                <SiteUser user={this.state.user} />
                <Link to="/">Home</Link>
            </div>

        );
    }
}

export default Admin;