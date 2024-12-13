import './App.css';
import './index.css';
 
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <br />      <br />
      <hr/>
      <h1>The Best Gaming Keyboard for All Gamers</h1>
      <hr/>

      <img 
          src="https://i.ibb.co/KFHFQfd/hyperx-keyb-PNG.png" 
          alt="KB-X1000 Keyboard" 
          className="keyboard-image" 
        />

      <section>
        <h2>Product Overview</h2>
        <p>
          The KB-X1000 is a high-performance mechanical keyboard designed for gamers,
          professionals, and everyday users who demand precision and comfort. It features
          customizable RGB backlighting, durable mechanical switches, and programmable keys to
          enhance your typing and gaming experience.
        </p>
      </section>
        <Link to="/keyboard-documentation">
          <button className="btn-documentation">
            Go to Keyboard Documentation
          </button>
        </Link>

        <br />      <br />

      <section>
        <h2>Warranty and Support</h2>
        <p>
          <strong>Warranty Period:</strong> 2 years from the date of purchase.
        </p>
        <p>
          <strong>Customer Support:</strong> For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.
        </p>
        <p>
          <strong>Manufacturer’s Website:</strong> <a href="http://www.keyboardcompany.com" target="_blank" rel="noopener noreferrer">www.keyboardcompany.com</a>
        </p>
        <p>
          <strong>Customer Support Email:</strong> <a href="mailto:support@keyboardcompany.com">support@keyboardcompany.com</a>
        </p>
        <p>
          <strong>Support Hotline:</strong> 1-800-555-1234
        </p>
      </section>

    </div>
  );
}

export default App;
