import React, { Component } from "react";
import AddItem from "./addItem";
import ToDoItem from "./todoItem";

class TodoApp extends Component {
  state = {
    emp: "",
    itemCount : 1,
    text: "",
    task: {
      id: "",
      text: "",
      status: false
    }
  };

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employee/1")
      .then(data => data.json())
      .then(data => this.setState({ emp: data }));
  }

  handleAddTask = () => {
    let text = this.state.text;
    let id = this.state.itemCount;

    this.setState({
      task: {
        ...this.state.task,
        text: text,
        id: id
      },
      itemCount: id + 1
    });
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleTaskDone = task => {
    console.log("remove: ", task)
    this.setState({
        task:{
            ...this.state.task,
            text: ""
        },
        text: ""
    })
  };

  render() {
    return (
      <div style={{ margin: "5rem 10%", maxWidth: "260px" }}>
        <div>
          <AddItem
            onAddTask={this.handleAddTask}
            onChange={this.handleChange}
            textvalue={this.state.text}
          />
        </div>
        {this.state.task.text.length > 0 && (
          <div>
            <ToDoItem task={this.state.task} handleDone={this.handleTaskDone} />
          </div>
        )}
      </div>
    );
  }
}

export default TodoApp;
