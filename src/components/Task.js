import React, { Component } from "react";

class Task extends Component {
  render() {
    const { task, removeTask, showAlert } = this.props;
    return (
      <li className='collection-item'>
        {task}
        <button
          className=' btn secondary-content'
          onClick={() => {
            removeTask(task);
            showAlert("Task Deleted Successfully", "success");
          }}
        >
          <i className='material-icons'>delete</i>
        </button>
      </li>
    );
  }
}

export default Task;
