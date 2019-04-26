import React from "react";
// TODO: Replace this with a local CSS page with whatever styling we need
// import './home.css';

function SiteUser(props) {
  return (
    <ol className="user-list">
      {props.demoUser.map(user => (
        <li className="user-list-item">
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <button>Delete User</button>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default SiteUser;
