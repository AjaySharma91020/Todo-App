import React from "react";
import Task from './Task';

let TodoList = (props) => {
  return (
    <div className="container">
      {props.tasks.map((task) => {
        return (
          <Task
            name={task.name}
            key={task.id}
            removeTask={()=>props.removeTask(task.id)}
            isCompleted = {task.isCompleted}
            toggleTaskComplete = {()=>props.toggleTaskComplete(task.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
