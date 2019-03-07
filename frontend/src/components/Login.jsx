import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Young Masterbuilders in Motion</h1>
                <form>
                    <input type="text" placeholder="usernname" />
                    <input type="password" placeholder="passwword" />
                    <button>Log in</button>
                </form>

            </div>

        );
    }
}

export default Login;