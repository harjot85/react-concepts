import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: "1",
        value: "0",
        item: "Discs"
      },
      {
        id: "2",
        value: "4",
        item: "Bands"
      },
      {
        id: "3",
        value: "0",
        item: "Shirts"
      },
      {
        id: "4",
        value: "0",
        item: "Games"
      },
      {
        id: "5",
        value: "0",
        item: "Books"
      }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    // while it can be done but we DO NOT HAVE TO do counters: counters
    // because the key and the value are the same.
    this.setState({ counters });
  };

  handleRemove = counter => {
    if (counter.value < 1) return;
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(counters);
    this.setState({ counters });
  };

  render() {
    return (
      <>
        <div className="btn btn-primary m-2 btn-sm" onClick={this.handleReset}>
          Reset Cart
        </div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            // id={counter.id}
            // value={counter.value}
            // item={counter.item}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onRemove={this.handleRemove}
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
