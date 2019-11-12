import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
      console.log(this.props.counters)
    return (
      <>
        <div
          className="btn btn-primary m-2 btn-sm"
          onClick={this.props.onReset}
        >
          Reset Cart
        </div>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            // item={counter.item}
            counter={counter}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onRemove={this.props.onRemove}
          >
            <div className="m-2">
              <h5>{counter.item}</h5>
              <hr />
            </div>
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
