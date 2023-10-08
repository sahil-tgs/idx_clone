// src/components/Sidebar.js

import React from 'react';
import './sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/page1" className="idxLogo">
        <img src="/idxlogo.svg" alt="Icon 1" width="30" height="30" />
      </a>
      <a href="/page2" className="googleLogo" >
        <img src="/googlr.svg" alt="Icon 2" width="30" height="30" />
      </a>
    </div>
  );
}

export default Sidebar;
