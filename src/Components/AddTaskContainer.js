import React, {Component} from 'react'

class AddTaskContainer extends Component{
   state = {
       newTask : "",
   }
   handleChange(event){
      this.setState({
          newTask : event.target.value
      })
   }
   handleAddButtonClick(){
        this.props.addTask(this.state.newTask);
        this.setState({
            newTask : ""
        })
   }
   render(){
      return (
        <div className="text-center m-1">
          <input type = "Text" placeholder = "enter the task name" value = {this.state.newTask} onChange = {this.handleChange.bind(this)}/>
          <button className="btn btn-success m-2" onClick = {this.handleAddButtonClick.bind(this)}>Add Task</button>   
          </div> 
      );
   }
};

export default AddTaskContainer;