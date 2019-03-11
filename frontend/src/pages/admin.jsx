import React, { Component } from 'react';
import SiteUser from '../components/SiteUser';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

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
                < Header />    
                <h1>Young Masterbuilders in Motion</h1>
                <form>
                    <input type="text" placeholder="usernname" />
                    <input type="password" placeholder="passwword" />
                    <button>Admin</button>
                </form>
                <SiteUser goof={this.state.user} />
                <Link to="/">Home</Link>
            </div>

        );
    }
}

export default Admin;