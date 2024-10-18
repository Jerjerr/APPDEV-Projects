
import { useState } from 'react';
import Shop from './shop';
import AdminPanel from './AdminPanel';
export default function Login(){
        let items = [
          {id: 1, name:"Grapes", price: 50},
          {id: 2, name:"Orange", price: 20},
          {id: 3, name:"Pickles", price: 40}
        ]

        //credentials for the account
        let accounts =[
            {id: 1, username: "customer", password: "customer", role:"customer"},
            {id: 2, username: "admin", password: "admin", role:"admin"},
            {id: 3, username: "customer2", password: "customer2", role:"customer"},

        ]

        //boolean variable for logging in
        const[isLoggedIn, setIsLoggedIn] = useState(false);
        const[role, setRole] = useState("");
        const [enteredUsernames, setEnteredUsernames] = useState("")
        const [enteredPasswords, setEnteredPasswords] = useState("")

        function getUsername(event){
            setEnteredUsernames(event.target.value)
        }

        function getPassword(event){
            setEnteredPasswords(event.target.value)
        }

        function handleLogin(){
            accounts.map((account) => {
                if(account.username === enteredUsernames && account.password === enteredPasswords){
                    setIsLoggedIn(true)
                    setRole(account.role)
                }
            })
        }

        function renderLogin(){
            return(
                <div>
                    <h1>Login: </h1>
                    Username: <input type="text" placeholder="usermame" onChange={getUsername} /><br />
                    Password: <input type="password" placeholder="password" onChange={getPassword} /><br />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )
        }

        function renderShop(){
            return(
                <Shop isLoggedIn = {isLoggedIn} items = {items} />
            )
        }

        function renderAdmin(){
            return(
                <AdminPanel isLoggedIn={isLoggedIn} accounts={accounts} /> 
        
            )
        }
        
        if(isLoggedIn === false){
            return renderLogin()
        }
        else{
            if(role ==="admin"){
                return renderAdmin()
            }
            else{
                return renderShop()
            }
        }
}
