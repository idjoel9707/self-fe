import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './signin.css';

async function signinUser(credentials) {
    return fetch('http://localhost:5000/administrator/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

export default function Signin({ setToken }) {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await signinUser({
            username, password
        });
        setToken(token)
    }

    return(
        <div className="signin-wrapper">
            <h1>PROVE THAT YOU ARE THE ADMINISTRATOR</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUsername(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">TRUST ME!</button>
                </div>
            </form>
        </div>
    )
}

Signin.propTypes = {
    setToken: PropTypes.func.isRequired
}