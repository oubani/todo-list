import React, { Component } from "react";

class InputTask extends Component {
  state = {
    text: "",
  };
  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      console.log("fal");
      this.props.showAlert("please fill the field", "danger");
    } else {
      this.props.addTask(this.state.text);
      this.setState({ text: "" });
      this.props.showAlert("added success", "success");
    }
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className='input-field s5 col s6'>
          <div className='input-field col s6'>
            <input
              id='add_task'
              name='task'
              value={this.state.text}
              onChange={this.onChange}
              type='text'
              className='validate'
            />
            <label htmlFor='add_task'>Add Task</label>
          </div>
        </div>
        <button
          type='submit'
          style={{ width: "100%" }}
          className='btn btn-block'
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default InputTask;
