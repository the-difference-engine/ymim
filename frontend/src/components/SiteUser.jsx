import React from 'react';
import './App.css';

function SiteUser(props) {
    return (
        <ol className='user-list'>
            {props.goof.map((user) => (
                <li className='user-list-item'>
                    <div>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <button>Delete User</button>
                    </div>
                </li>
            ))}
        </ol>

    )
}


export default SiteUser; 