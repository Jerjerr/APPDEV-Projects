import { useState } from 'react';
import Shop from './Shop';
import AdminPanel from './AdminPanel';
import './Login.css'; 

export default function Login() {
    let items = [
        { id: 1, name: "🍇 Grapes", price: 50 },
        { id: 2, name: "🍊 Orange", price: 20 },
        { id: 3, name: "🥝 Kiwi", price: 40 },
        { id: 4, name: "🍌 Banana", price: 20 },
        { id: 5, name: "🥒 Cucumber", price: 40 }

    ];

    // Credentials for the account
    let accounts = [
        { id: 1, username: "customer", password: "customer", role: "customer" },
        { id: 2, username: "admin", password: "admin", role: "admin" },
        { id: 3, username: "customer2", password: "customer2", role: "customer" },
        { id: 3, username: "1", password: "1", role: "customer" },

    ];

    // Boolean variable for logging in
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState("");
    const [enteredUsername, setEnteredUsername] = useState(""); // Corrected variable name
    const [enteredPassword, setEnteredPassword] = useState(""); // Corrected variable name

    function getUsername(event) {
        setEnteredUsername(event.target.value);
    }

    function getPassword(event) {
        setEnteredPassword(event.target.value);
    }

    function handleLogin() {
        accounts.forEach((account) => { // Use forEach instead of map since we're not returning anything
            if (account.username === enteredUsername && account.password === enteredPassword) {
                setIsLoggedIn(true);
                setRole(account.role);
            }
        });
    }

    function renderLogin() {
        return (
            <div className="login-container"> {/* Apply the class here */}
                <div className="login-form">
                    <center><h1>Login</h1></center>
                    Username: <input type="text" placeholder="username" onChange={getUsername} /><br />
                    Password: <input type="password" placeholder="password" onChange={getPassword} /><br />
                    <br/>
                    <center><button onClick={handleLogin}>Login</button></center>
                </div>
            </div>
        );
    }

    function renderShop() {
        return (
            <Shop isLoggedIn={isLoggedIn} items={items} />
        );
    }

    function renderAdmin() {
        return (
            <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} />
        );
    }

    if (!isLoggedIn) {
        return renderLogin();
    } else {
        return role === "admin" ? renderAdmin() : renderShop();
    }
}