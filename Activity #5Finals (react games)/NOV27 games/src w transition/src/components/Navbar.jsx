import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Cool Games!!</h1>
        <nav>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to ="/about">About</Link></li>
            <li><Link to ="/games">Games</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
