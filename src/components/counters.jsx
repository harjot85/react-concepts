import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // This technique is called Object Destructuring
    // const { ...p } = this.props
    // Cleaner alternative to the statement above is :
    const { onReset, onRemove, onIncrement, onDelete, counters } = this.props;
    return (
      <>
        <div className="btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset Cart
        </div>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            // item={counter.item}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onRemove={onRemove}
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
