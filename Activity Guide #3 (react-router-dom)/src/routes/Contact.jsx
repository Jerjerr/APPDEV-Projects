import React from 'react';
import Navbar from "../components/Navbar";

function Contact() {

  return(
    <div>
      <Navbar />
      <h1>Contact Page</h1>
      <br></br>
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
   
  ) 
}

export default Contact;
