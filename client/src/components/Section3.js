// Section3.js
import React from 'react';
import Frame from './Frame';

function Section3() {
  return (
    <div className="Section3">
      <Frame 
        
        logo={<img src="/idxlogo.svg" alt="Icon 1" width="35" height="35" />} 
        heading = { <h1> Get to work quickly, wherever you are </h1> }
        content = {<p> Project IDX gets you into your dev workflow in no time, backed by the security and scalability of Google Cloud. Go from opening your browser to developing an application in a matter of seconds, not days, from anywhere and on any machine. </p>}

        svg={
            <img src="/ide.svg" alt="Icon 1" width="500" height="500" />
        } 

      />
    </div>
  );
}

export default Section3;
