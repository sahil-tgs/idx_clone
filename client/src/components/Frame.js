// ./src/components/Frame.js

import "./Frame.css";

const Frame = (props) => {
  return (
    <div className="frame-parent" >

        <div className="frame-child">
             {props.logo}
             <div className="heading">
                {props.heading}
              </div>
             <div className="content">
                {props.content}
              </div> 

             <button className="lol"> 
                  Join Waitlist
                  <img className="arrow" src="/squiggly_arroww.svg" />
               </button>

        </div>

        <div className="frame-wrapper">
            <div className="frame-item" />

            <div className="abcd">
              <div className="inside">
                {props.svg}
              </div>
              
            </div>
              
        </div>

    </div>
  );
};

export default Frame;