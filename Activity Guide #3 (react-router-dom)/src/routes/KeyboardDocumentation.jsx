// routes/KeyboardDocumentation.jsx
import React from 'react';
import './KeyboardDocumentation.css'; 
import Navbar from "../components/Navbar";


const KeyboardDocumentation = () => {
  return (
    <div className="keyboard-documentation">
        <Navbar />
      <h1>KB X1000 Detail Information
      </h1>

      <section>
        <h2>Specifications</h2>
        <ul>
          <li>Switch Type: Cherry MX Red (Mechanical)</li>
          <li>Key Layout: Full-size (104 keys)</li>
          <li>Backlighting: RGB with customizable colors</li>
          <li>Connectivity: Wired (USB 2.0)</li>
          <li>Dimensions: 440 mm x 135 mm x 35 mm</li>
          <li>Weight: 1.2 kg</li>
          <li>Cable Length: 1.8 meters</li>
          <li>Additional Features: Anti-ghosting, N-key rollover, dedicated media controls</li>
        </ul>
      </section>

      <section>
        <h2>In the Box</h2>
        <ul>
          <li>KB-X1000 Keyboard</li>
          <li>USB Cable</li>
          <li>User Manual</li>
          <li>Keycap Removal Tool</li>
          <li>Warranty Card</li>
        </ul>
      </section>

      <section>
        <h2>Key Features</h2>
        <ul>
          <li>Customizable RGB Backlighting: Personalize the keyboard’s illumination with a wide range of colors and lighting effects.</li>
          <li>Mechanical Switches: Cherry MX Red switches for a responsive and smooth typing experience.</li>
          <li>Programmable Keys: Assign macros and custom functions to any key with the included software.</li>
          <li>Anti-Ghosting & N-Key Rollover: Ensure accurate keypress registration during intense gaming sessions.</li>
          <li>Dedicated Media Controls: Easily control music and videos with dedicated media keys.</li>
        </ul>
      </section>

      <section>
        <h2>Setup Instructions</h2>
        <h3>Unboxing</h3>
        <p>Carefully remove the keyboard and accessories from the box.</p>
        
        <h3>Connecting the Keyboard</h3>
        <ul>
          <li>Plug the USB cable into an available USB port on your computer.</li>
          <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
        </ul>
        
        <h3>Software Installation (Optional)</h3>
        <ul>
          <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
          <li>Follow the on-screen instructions to install the software.</li>
        </ul>

        <h3>Keycap Removal and Replacement</h3>
        <ul>
          <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
          <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
        </ul>
      </section>

      <section>
        <h2>Using the Keyboard</h2>
        <h3>Basic Typing</h3>
        <p>Simply start typing; the keyboard is pre-configured with standard key mappings.</p>

        <h3>Customizing Backlighting</h3>
        <ul>
          <li>Press Fn + F9 to cycle through preset lighting effects.</li>
          <li>Use the configuration software to create custom lighting profiles.</li>
        </ul>

        <h3>Programming Keys</h3>
        <ul>
          <li>Open the configuration software.</li>
          <li>Select the key you want to program.</li>
          <li>Assign a macro or function and save your changes.</li>
        </ul>

        <h3>Using Media Controls</h3>
        <ul>
          <li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</li>
        </ul>
      </section>

      <section>
        <h2>Troubleshooting</h2>
        <h3>Keyboard Not Responding</h3>
        <ul>
          <li>Ensure the USB connection is secure.</li>
          <li>Try connecting the keyboard to a different USB port.</li>
          <li>Restart your computer if necessary.</li>
        </ul>

        <h3>Backlighting Not Working</h3>
        <ul>
          <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
          <li>Verify that the configuration software is properly installed.</li>
        </ul>

        <h3>Key Not Registering</h3>
        <ul>
          <li>Confirm that no physical obstructions are affecting the key.</li>
          <li>Test the key in different applications to determine if the issue is software-related.</li>
        </ul>
      </section>

      <section>
        <h2>Maintenance and Care</h2>
        <h3>Cleaning</h3>
        <ul>
          <li>Disconnect the keyboard from the computer.</li>
          <li>Use a soft, dry cloth to clean the surface.</li>
          <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
        </ul>

        <h3>Storage</h3>
        <ul>
          <li>Store the keyboard in a cool, dry place.</li>
          <li>Avoid exposure to liquids or extreme temperatures.</li>
        </ul>
      </section>

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

      <p>Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!</p>
    </div>
  );
};

export default KeyboardDocumentation;
