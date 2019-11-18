import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const { handleDone } = this.props;
    console.log(this.props);
    return (
      <div>
        <div
          style={{
            border: "1px solid #E8E8E8",
            borderRadius: "2px",
            padding: "5px 10px",
            marginTop: "15px"
          }}
        >
          {this.props.task.id} - {this.props.task.text}
          <button 
            style={{ float: "right" }} 
            onClick={() => handleDone(this.props.task.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
