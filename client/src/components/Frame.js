import "./Frame.css";

const Frame = (props) => {
  return (
    <div className="frame-parent" >

        <div className="frame-child">
            <div className="yo"> {props.title} </div>
        </div>

        <div className="frame-wrapper">
            <div className="frame-item" />
            <div className="yo"> {props.image} </div>
        </div>

    </div>
  );
};

export default Frame;