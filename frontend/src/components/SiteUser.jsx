import React from 'react';

function SiteUser(props) {
    return (
        <ol>
            {props.goof.map((user) => (
                <li>
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