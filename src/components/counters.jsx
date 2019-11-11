import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      {
        id: "1",
        value: "0",
        item: 'Discs'
      },
      {
        id: "2",
        value: "4",
        item: 'Bands'
      },
      {
        id: "3",
        value: "0",
        item: 'Shirts'
      },
      {
        id: "4",
        value: "0",
        item: 'Games'
      },
      {
        id: "5",
        value: "0",
        item: 'Books'
      }
    ]
  };
  render() {
    return (
      <>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} item={counter.item}>
              <h5>{counter.item}</h5><hr />
          </Counter>
        ))}
      </>
    );
  }
}

export default Counters;
