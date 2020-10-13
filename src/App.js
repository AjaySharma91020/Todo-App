import React,{Component} from 'react';
import Task from './Components/Task'
import AddTaskComponent from './Components/AddTaskContainer'
import './App.css';

class App extends Component {
  state = {
    newTask : "",
    count : 0,
    tasks : [
       {
          name : "Ajay",
          id : 5438
       },
       {
          name : "Sandeep",
          id : 137473
       }
    ]
  }
  handleChange(event){
      this.setState({
           newTask : event.target.value
      })
  }
  addTask(){
      let newArr = [...this.state.tasks]
      newArr.push({
         name : this.state.newTask,
         id : this.state.count + 1
      })
      this.setState({
        tasks : newArr,
        newTask : "",
        count : this.state.count + 1   
      })

  }
  removeTask = (id) => {
     let newArr = this.state.tasks.filter((task) => {
          return task.id !== id; 
     });
     this.setState({
        tasks : newArr
     })
     console.log(newArr)
  }
  render(){
    return (
      <div className="App">
            <AddTaskComponent newTask = {this.state.newTask} handleChange = {this.handleChange.bind(this)} addTask = {this.addTask.bind(this)}  />
            {this.state.tasks.map((task)=>{
                return(
                   <Task 
                       name = {task.name}
                       key = {task.id}
                       removeTask = {this.removeTask.bind(this,task.id)}
                   />
                )
            })}
      </div>
    );
  }
}

export default App;
