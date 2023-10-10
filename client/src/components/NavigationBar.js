// components/NavigationBar.js
import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
  return (
    <div className="nav-container">
      <a href="/">Explore IDX</a>
      <button>Join Waitlist</button>
    </div>
  );
}

export default NavigationBar;
