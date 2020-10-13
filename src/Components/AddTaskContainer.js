import React from 'react'
let AddTaskContainer = (props)=>{
    return (
      <div className="container">
        <input type = "Text" placeholder = "enter the task name" value = {props.newTask} onChange = {props.handleChange}/>
        <button className="btn btn-success" onClick = {props.addTask}>Add Task</button>   
        </div> 
    );
};

export default AddTaskContainer;