import React,{Component} from 'react';
import Task from './Components/Task'
import AddTaskComponent from './Components/AddTaskContainer'
import './App.css';

class App extends Component {
  state = {
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
  addTask(newTask){
      let newArr = [...this.state.tasks]
      newArr.push({
         name : newTask,
         id : this.state.count + 1
      })
      this.setState({
        tasks : newArr,
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
            <AddTaskComponent addTask = {this.addTask.bind(this)}  />
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
