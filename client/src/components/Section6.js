// ./src/Section6.js
import React from 'react';
import Frame2 from './Frame2'
import'./Frame2.css';


function Section6() {
  return (
    <div className="Section6">
      
      <Frame2 
        logo={<img src="/sparkle.svg" alt="Icon 1" width="30" height="30" />}
        heading = { <h1> Code faster with generative AI </h1> }
        content = {<p> Work quickly and efficiently with AI assistance from Google built-in, including code generation, code completion, translating code between programming languages, explaining code, and more, all powered by Codey, a foundational AI model trained on code and built on PaLM 2. </p>}

        svg={
            <img src="/" alt="Icon 1" width="500" height="500" />
        } 

      />

    </div>
  );
}

export default Section6;
