import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2">

      <div className="section2-logo">
        <img src="/idxlogo.svg" alt="Icon 1" width="80" height="80" />
      </div>

      <div className="section2-heading">
        <div>Introducing Project IDX</div>
      </div>

      <div className="section2-content">
        <p>
          These days, launching applications means navigating an endless sea of complexity. We felt this pain at Google, so we started Project IDX, an experimental new initiative aimed at bringing your entire full-stack, multiplatform app development workflow to the cloud.
        </p>
        <p>
          Project IDX starts with a web-based workspace that'll feel familiar for coding but fresh. And we're just at the beginning of this journey. We'd love your input as we work to make application development better.
        </p>
      </div>

    </div>
  );
};

export default Section2;
