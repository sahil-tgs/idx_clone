import React from 'react'
// import './Frame2.css'

function Frame2(props) {
  return (
    <div className="rev-frame-parent" >

        <div className="rev-frame-child">
             {props.logo}
             <div className="rev-heading">
                {props.heading}
              </div>
             <div className="rev-content">
                {props.content}
              </div> 

             <button className="rev-lol"> 
                  Join Waitlist
                  <img className="rev-arrow" src="/squiggly_arroww.svg" alt="image" />
               </button>

        </div>

        <div className="rev-frame-wrapper">
            <div className="rev-frame-item" />

            <div className="rev-abcd">
              <div className="rev-inside">
                {props.svg}
              </div>
              
            </div>
              
        </div>

    </div>
  )
}


export default Frame2
