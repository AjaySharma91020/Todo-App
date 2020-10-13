import React from "react";
import "./Task.css";

let Task = (props) => {
  return (
    <div className="cursorPointer m-2">
      <div className="row bg-primary">
        <div className="col-sm-9 text-center font-weight-bold text-white p-2">
            <p
              className={props.isCompleted ? "taskCompleted" : ""}
              onClick={props.toggleTaskComplete}
            >
              {props.name}
            </p>
        </div>
        <div className="col-sm-3  text-center p-2">
          <button className="btn btn-danger" onClick={props.removeTask}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
