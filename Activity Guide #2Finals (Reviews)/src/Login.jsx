import React, { useState } from 'react';
import './index.css'; 
import Reviews from './Reviews';

export default function Login() {

    let accounts = [
        { id: 1, username: "customer", password: "customer", role: "reviewer" },
        { id: 2, username: "admin", password: "admin", role: "admin" },
        { id: 3, username: "reviewer", password: "reviewer", role: "reviewer" },
        { id: 3, username: "1", password: "1", role: "reviewer" },

    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setEnteredUsername] = useState(''); 
    const [password, setEnteredPassword] = useState(''); 
    const [role, setRole] = useState('');

    const handleUserNameChange = (e) => {
        setEnteredUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setEnteredPassword(e.target.value);
    }

    function handleLogin() {
        accounts.forEach((account) => { 
            if (account.username === userName && account.password === password) {
                setIsLoggedIn(true);
                setRole(account.role);
            }
        });
    }


    const renderLoginForm = () => {
        return(
            <div className='container'>
                <h1>Welcome to Jerry's Game Reviews!</h1>
                <h4>Login to Continue:</h4>
                <div>
                    Username: 
                    <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        onChange={handleUserNameChange}
                        value={userName}
                    />
                <br />
            </div>
                <div>
                    <br />
                        Password:
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            onChange={handlePasswordChange}
                            value={password}
                            />
                    <br />
                </div>
            <br />
            <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    function renderReviews(){
        return (
            <Reviews isLoggedIn={isLoggedIn} role={role} />
        );
    }

    if (!isLoggedIn) {
        return renderLoginForm();
    } else {
        return role === "reviewer" ? renderReviews() : renderLoginForm();
    }
}