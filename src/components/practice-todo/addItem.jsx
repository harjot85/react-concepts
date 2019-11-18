import React, { Component } from "react";

class AddItem extends Component {
  render() {
      const {onAddTask, onChange, textValue} = this.props
    return (
      <div>
        <input id="inputTask" value={textValue} onChange={onChange} />
        <button
          id="btnAddTask"
          onClick={onAddTask}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default AddItem;
