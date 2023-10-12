// ./src/Section4.js
import React from 'react';
import Frame2 from './Frame2'
import'./Frame2.css';


function Section4() {
  return (
    <div className="Section4">
      
      <Frame2 
         
        heading = { <h1> Develop with popular frameworks and languages </h1> }
        content = {<p> Project IDX makes it easier to start building an app that works across multiple platforms using a variety of templates for popular frameworks, such as Angular, Next.js, React, Svelte, and Flutter, with Python and Go support coming soon. You can also import your existing applications from GitHub, with support for most tech stacks. </p>}

        svg={
            <img src="/tools.svg" alt="Icon 1" width="500" height="500" />
        } 

      />

    </div>
  );
}

export default Section4;
