import React from "react";
import "./Task.css";

let Task = (props) => {
  return (
    <div className="cursorPointer bg-primary m-2">
      <div className="row p-2">
        <div className="col-10 text-center font-weight-bold text-white ">
          <p
            className={props.isCompleted ? "taskCompleted" : ""}
            onClick={props.toggleTaskComplete}
          >
            {props.name}
          </p>
        </div>
        <div className="col-2">
          <button className="btn btn-danger" onClick={props.removeTask}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
