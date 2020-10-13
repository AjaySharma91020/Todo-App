import React from "react";
import "./Task.css";

let Task = (props) => {
  return (
    <div className="Container">
      <div className="cursorPointer">
        <p
          className={props.isCompleted ? "taskCompleted" : ""}
          onClick={props.toggleTaskComplete}
        >
          {props.name}
        </p>
      </div>
      <button className="btn btn-danger" onClick={props.removeTask}>
        Remove
      </button>
    </div>
  );
};

export default Task;
