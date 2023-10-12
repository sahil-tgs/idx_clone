// Section5.js
import React from 'react';
import Frame from './Frame';

function Section5() {
  return (
    <div className="Section3">
      <Frame 
        
        logo={<img src="/CodePlay.svg" alt="Icon 1" width="30" height="30" />} 
        heading = { <h1> Optimize your apps across platforms </h1> }
        content = {<p> Project IDX lets you preview your full-stack, multiplatform apps as your users would see them, with upcoming support for built-in multi-browser web previews, Android emulators, and iOS simulators. </p>}

        svg={
            <img src="/platform.svg" alt="Icon 1" width="500" height="500" />
        } 

      />
    </div>
  );
}

export default Section5;
