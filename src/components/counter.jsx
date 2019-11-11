import React, { Component } from "react";

class Counter extends Component {
  state = {
      count: 0
  };
  styles = {
      fontSize: 12,
      padding: 9
  }
 


  render() {
    return (
      <>
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-4 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
      
    const {count}  = this.state
    console.log(count)
    return count === 0 ? "No items selected" : count
}

}

export default Counter;
