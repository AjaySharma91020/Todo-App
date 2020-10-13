import React from "react";

let Task = (props) => {
  return (
    <div className="Container">
      <p> {props.name}</p>
      <button className="btn btn-danger" onClick = {props.removeTask}>Remove</button>
    </div>
  );
};

export default Task;
