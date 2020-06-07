import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import InputTask from "./components/InputTask";
import Task from "./components/Task";
import Alert from "./components/Alert";
export class App extends Component {
  state = {
    tasks: [],
    warning: null,
  };

  addTask = (task) => {
    if (task === "") {
      this.setState({ warning: null });
    } else {
      const tasks = this.state.tasks;
      tasks.push(task);
      this.setState({ tasks });
    }
  };

  showAlert = (msg, type) => {
    this.setState({ warning: { msg, type } });
    setTimeout(() => {
      this.setState({ warning: null });
    }, 3000);
  };
  removeTask = (task) => {
    const tasks = this.state.tasks;
    tasks.splice(task, 1);
    this.setState({ tasks });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <NavBar />
        <div className='container'>
          <Alert alert={this.state.warning} />
          <InputTask addTask={this.addTask} showAlert={this.showAlert} />
          <ul className='collection with-header'>
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  task={task}
                  removeTask={this.removeTask}
                  showAlert={this.showAlert}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
