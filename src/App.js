import React,{Component} from 'react';
import AddTaskContainer from './Components/AddTaskContainer'
import './App.css';
import TodoList from './Components/TodoList'

class App extends Component {
  state = {
    count : 0,
    tasks : [
       {
          name : "Sleeping",
          id : 5438,
          isCompleted : false,
       },
       {
          name : "Playing",
          id : 137473,
          isCompleted : false,
       }
    ]
  }

  toggleTaskComplete = (taskId) => {
       let newArr = [...this.state.tasks]
       newArr.forEach((task)=>{
           if(task.id === taskId){
               task.isCompleted = !task.isCompleted
           }
       })
       this.setState({
           tasks : newArr
       })
  } 
  addTask(newTask){
      let newArr = [...this.state.tasks]
      newArr.push({
         name : newTask,
         id : this.state.count + 1,
         isCompleted : false
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
            <AddTaskContainer addTask = {this.addTask.bind(this)}  />
            <TodoList tasks = {this.state.tasks} removeTask = {this.removeTask} toggleTaskComplete = {this.toggleTaskComplete} />
      </div>
    );
  }
}

export default App;
