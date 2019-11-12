import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 12,
    padding: 9
  };

  componentDidMount() {
    this.setState({ value: parseInt(this.props.counter.value) });
    console.log(this.props);
  }

  static getDerivedStateFromProps(props, state) {
   console.log("Derived --> ", props)
  }

  render() {
    return (
      <div>
        {this.props.children}

        <div
          style={{
            padding: "10px",
            backgroundColor: "aliceblue",
            textAlign: "center"
          }}
        >
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            //to pass arguments to the function via the event handler an inline arrow function is defined.
            //In the body, we call the function with the argument.
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-success btn-sm"
          >
            Add
          </button>
          <button
            onClick={() => this.props.onRemove(this.props.counter)}
            className="btn btn-sm btn-secondary m-2"
          >
            Remove
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm btn-outline-danger m-2 "
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === "0" ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const c = this.props.counter;
    return c.value === "0" ? "No items selected" : c.value + " items selected";
  }
}

export default Counter;
