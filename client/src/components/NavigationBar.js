// components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav-container">
      <button className="explore">Explore IDX</button>
        <button className="join">Join Waitlist</button>
    </div>
  );
}

export default NavigationBar;
