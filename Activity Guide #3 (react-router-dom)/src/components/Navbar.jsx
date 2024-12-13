// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">KB-X1000</h1>
        <nav>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/keyboard-documentation">Documentation</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
