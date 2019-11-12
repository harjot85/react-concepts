import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  state = {
    value: 0,
    item: ""
  };
  styles = {
    fontSize: 12,
    padding: 9
  };

  componentDidMount() {
    this.setState({ value: parseInt(this.props.value) });
    console.log(this.props);
  }

  render() {
    let product = "My Product";

    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          //to pass arguments to the function via the event handler an inline arrow function is defined.
          //In the body, we call the function with the argument.
          onClick={() => this.handleIncrement(product)}
          className="btn btn-success btn-sm"
        >
          Add
        </button>
        <button
          onClick={this.handleRemove}
          className="btn btn-sm btn-secondary m-2"
        >
          Remove
        </button>
        <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-sm btn-danger m-2 " >Delete</button>
      </div>
    );
  }

  handleRemove = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "No items selected" : value + " items selected";
  }

  handleIncrement() {
    this.setState({ value: this.state.value + 1 });
  }
}

export default Counter;
