import React, { Component } from "react";

class AddTaskContainer extends Component {
  state = {
    newTask: "",
  };
  handleChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }
  handleAddButtonClick(event) {
      event.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({
      newTask: "",
    });
  }
  render() {
    return (
      <form>
        <div className="text-center m-1">
          <input
            type="Text"
            placeholder="enter the task name"
            value={this.state.newTask}
            autoFocus={true}
            onChange={this.handleChange.bind(this)}
          />
          <button
          type="submit"  
          className="btn btn-success m-2"
            onClick={this.handleAddButtonClick.bind(this)}
            disabled={this.state.newTask.length > 0 ? false : true}
          >
            Add Task
          </button>
        </div>
      </form>
    );
  }
}

export default AddTaskContainer;
